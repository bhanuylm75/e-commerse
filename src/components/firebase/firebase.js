import{signInWithPopup,getAuth,GoogleAuthProvider,createUserWithEmailAndPassword} from "firebase/auth"
import { initializeApp } from "firebase/app";
import {doc, getDoc, getFirestore, setDoc,writeBatch,collection,query,getDocs} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBMp2hPpA9AsyTCbWnaXbSk-q33UdPw-qk",
  authDomain: "cap-project-fire.firebaseapp.com",
  projectId: "cap-project-fire",
  storageBucket: "cap-project-fire.appspot.com",
  messagingSenderId: "310480700019",
  appId: "1:310480700019:web:db416524ffc831678b2006"
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const googleprovider=new GoogleAuthProvider()
export const auth=getAuth()
export const signinwithgoogle=()=>signInWithPopup(auth,googleprovider)
const db =getFirestore()
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'collections');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};


export const createuser= async(user  , additionalInformation = {})=>{
  const useref= await doc(db,"user",user.uid)
  const usersnapshot=getDoc(useref)
  console.log((await usersnapshot).exists())
  if(!usersnapshot.exists){
    const {displayName,email}=user
    const created =new Date()
    try{
      await setDoc(useref,{displayName,email,created,...additionalInformation})
    }
    catch(error){
      console.log(error)

    }
  }
  return useref
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};