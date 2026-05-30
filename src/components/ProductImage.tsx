import React, { useState, useEffect, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, Camera, Trash2 } from 'lucide-react';
import { getCustomImage, saveCustomImage, deleteCustomImage } from '../lib/imageStore';

interface ProductImageProps {
  productId?: string;
  src: string;
  alt: string;
  className?: string;
  fallbackName?: string;
  showUploadButton?: boolean;
}

export function ProductImage({
  productId,
  src,
  alt,
  className = '',
  fallbackName,
  showUploadButton = true
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displaySrc, setDisplaySrc] = useState<string>(src);
  const [isCustom, setIsCustom] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filename = fallbackName || src.split('/').pop() || 'image.jpg';

  // Load custom image from IndexedDB if productId is provided
  useEffect(() => {
    let active = true;
    if (productId) {
      getCustomImage(productId).then((customData) => {
        if (!active) return;
        if (customData) {
          setDisplaySrc(customData);
          setIsCustom(true);
          setHasError(false);
        } else {
          setDisplaySrc(src);
          setIsCustom(false);
        }
      });
    } else {
      setDisplaySrc(src);
      setIsCustom(false);
    }

    return () => {
      active = false;
    };
  }, [productId, src]);

  // Listen for real-time updates across components
  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ productId: string; base64Data: string | null }>;
      if (customEvent.detail.productId === productId) {
        if (customEvent.detail.base64Data) {
          setDisplaySrc(customEvent.detail.base64Data);
          setIsCustom(true);
          setHasError(false);
        } else {
          setDisplaySrc(src);
          setIsCustom(false);
          setHasError(false);
        }
      }
    };

    window.addEventListener('custom-image-updated', handleUpdate);
    return () => {
      window.removeEventListener('custom-image-updated', handleUpdate);
    };
  }, [productId, src]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !productId) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result as string;
      await saveCustomImage(productId, base64);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveCustomImage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!productId) return;
    if (confirm('Are you sure you want to revert to the default image?')) {
      await deleteCustomImage(productId);
    }
  };

  const triggerUpload = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  if (hasError && !isCustom) {
    return (
      <div className="group/img relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-50 text-slate-500 rounded-2xl border-2 border-dashed border-slate-200 select-none text-center">
        <UploadCloud className="w-8 h-8 text-sky-500 mb-2 animate-bounce" />
        <span className="text-[11px] font-bold text-slate-700 block line-clamp-1 font-mono">
          {filename}
        </span>
        <button
          onClick={triggerUpload}
          className="mt-2 text-[10px] bg-sky-600 hover:bg-sky-700 text-white font-medium py-1 px-2.5 rounded-full shadow-sm flex items-center gap-1 transition-colors"
        >
          <Camera className="w-3 h-3" />
          Click to Upload Image
        </button>
        <span className="text-[9px] text-slate-400 mt-2 block">
          Or place your image in <code className="bg-slate-100 px-1 py-0.5 rounded text-sky-600 font-semibold font-mono">public/</code>
        </span>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    );
  }

  return (
    <div className="group/img relative w-full h-full bg-[#f8fafc] rounded-2xl overflow-hidden flex items-center justify-center">
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <ImageIcon className="w-6 h-6 text-slate-300 animate-spin" />
        </div>
      )}
      <img
        src={displaySrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (isCustom) {
            // If custom loaded fails, fall back to default
            setIsCustom(false);
            setDisplaySrc(src);
          } else {
            setHasError(true);
          }
        }}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      />

      {/* Hidden file selector */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Upload/Overlay button on Hover */}
      {showUploadButton && productId && (
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={triggerUpload}
            title="Upload Custom Image"
            className="p-2 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow transition-all hover:scale-110 flex items-center gap-1.5 text-xs font-semibold px-3"
          >
            <Camera className="w-3.5 h-3.5 text-sky-600" />
            <span>Upload Image</span>
          </button>
          
          {isCustom && (
            <button
              onClick={handleRemoveCustomImage}
              title="Revert to Default"
              className="p-2 bg-red-600/90 hover:bg-red-600 text-white rounded-full shadow transition-all hover:scale-110"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
