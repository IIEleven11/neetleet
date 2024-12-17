import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBR8PZcGWXWSYGh3-vFVWgwHvkMXnWQh_Q",
  authDomain: "leetcode-randomizer-bolt.firebaseapp.com",
  projectId: "leetcode-randomizer-bolt",
  storageBucket: "leetcode-randomizer-bolt.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);