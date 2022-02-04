import {FirebaseApp, initializeApp} from 'firebase/app';
import { FirebaseOptions } from 'firebase/app';
import { Firestore, getFirestore } from "firebase/firestore"

import { collection, query, getDocs } from "firebase/firestore";
import ProjectPreview from '../portfolio/Project';

const config: FirebaseOptions = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MESUREMENT_ID
}


class Firebase {
    private db: Firestore;
    constructor() {
      initializeApp(config);
      this.db = getFirestore();
    }

    async getProjects(){
      const q = query(collection(this.db, "projects"));
      const querySnapshot = await getDocs(q);
      const projects: ProjectPreview[] = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        projects.push({name: doc.get("name"), description: doc.get("description")});
      });
      return projects;
    }
  }


export default Firebase;