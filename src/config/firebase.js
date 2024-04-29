import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as getUUID } from 'uuid'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: 'juniors-punto-tech.firebaseapp.com',
  projectId: 'juniors-punto-tech',
  storageBucket: 'juniors-punto-tech.appspot.com',
  messagingSenderId: '31473246420',
  appId: '1:31473246420:web:adde36f4be3bdb88ef9b41'
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

const uploadFile = async (file, folder) => {
  const storageRef = ref(storage, `${folder}/${getUUID()}`)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}

export { uploadFile }
