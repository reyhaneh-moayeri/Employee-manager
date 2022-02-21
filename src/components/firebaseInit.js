import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
export default getFirestore(app);