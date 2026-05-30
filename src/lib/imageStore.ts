/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Simple IndexedDB wrapper for storing uploaded product images client-side.
const DB_NAME = 'fresh-catch-images';
const STORE_NAME = 'custom-product-images';
const DB_VERSION = 1;

let dbInstance: IDBDatabase | null = null;

function getDB(): Promise<IDBDatabase> {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = (event) => {
      dbInstance = (event.target as IDBOpenDBRequest).result;
      resolve(dbInstance);
    };

    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
}

export async function getCustomImage(productId: string): Promise<string | null> {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(productId);

      request.onsuccess = () => {
        resolve(request.result || null);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (err) {
    console.error('Error fetching custom image from IndexedDB:', err);
    return null;
  }
}

export async function saveCustomImage(productId: string, base64Data: string): Promise<void> {
  try {
    const db = await getDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(base64Data, productId);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };
    });

    // Notify listeners
    window.dispatchEvent(new CustomEvent('custom-image-updated', { detail: { productId, base64Data } }));
  } catch (err) {
    console.error('Error saving custom image to IndexedDB:', err);
  }
}

export async function deleteCustomImage(productId: string): Promise<void> {
  try {
    const db = await getDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(productId);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };
    });

    // Notify listeners
    window.dispatchEvent(new CustomEvent('custom-image-updated', { detail: { productId, base64Data: null } }));
  } catch (err) {
    console.error('Error deleting custom image from IndexedDB:', err);
  }
}
