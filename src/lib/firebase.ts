import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported } from 'firebase/analytics';

const sanitize = (value: string | undefined, fallback: string): string => {
  if (!value) return fallback;
  const trimmed = value.trim();
  if (trimmed.includes(' ') || trimmed.includes('=')) {
    return fallback;
  }
  return trimmed;
};

const firebaseConfig = {
  apiKey: sanitize(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    'AIzaSyDYoXF1kRGqHD6J9UK5HpzdlVCMJBxNHdA'
  ),
  authDomain: sanitize(
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    'force-sports-and-wears-i-a38aa.firebaseapp.com'
  ),
  projectId: sanitize(
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    'force-sports-and-wears-i-a38aa'
  ),
  storageBucket: sanitize(
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    'force-sports-and-wears-i-a38aa.firebasestorage.app'
  ),
  messagingSenderId: sanitize(
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    '886374682791'
  ),
  appId: sanitize(
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    '1:886374682791:web:dc57b91ae20cde9590cb82'
  ),
  measurementId: sanitize(
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    'G-QYY8VZXZS2'
  ),
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const getClientAnalytics = async () => {
  if (typeof window !== 'undefined' && (await isSupported())) {
    return getAnalytics(app);
  }
  return null;
};
