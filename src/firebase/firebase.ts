import { initializeApp } from 'firebase/app';
import { FirebaseOptions } from 'firebase/app';
import { Firestore, getFirestore } from "firebase/firestore"

import { collection, query, getDocs } from "firebase/firestore";
import MyImage from '../portfolio/MyImage';
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

  async getProjects() {
    const q = query(collection(this.db, "projects"));
    const querySnapshot = await getDocs(q);
    const projects: ProjectPreview[] = [];
    querySnapshot.forEach((doc) => {
      const previewImagePaths: string[] = doc.get("previews");
      const previewDescription: string[] = doc.get("preview_descriptions");
      const previews: MyImage[] = [];
      previewImagePaths.forEach((path, index) => {
        if (path) {
          previews.push({ imgPath: path, label: previewDescription[index] || "" });
        }
      })
      const name = doc.get("name");
      const description = doc.get("description");
      const madeWith = doc.get("made_with");
      const thumbnail = doc.get("thumbnail");
      const githubLink = doc.get("github_link");

      if (name && description && madeWith && thumbnail && githubLink && previews) {
        const project = {
          name: name,
          description: description,
          madeWith: madeWith,
          thumbnail: thumbnail,
          githubLink: githubLink,
          previews: previews
        }
        projects.push(project);
      }

    });
    return projects;
  }
}


export default Firebase;