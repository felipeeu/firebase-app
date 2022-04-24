import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { Input } from "./components";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyAfc-pufhR0xoArMPZbZ-ZvWzSmbou0jQk",
  authDomain: "firstproject-16eb1.firebaseapp.com",
  databaseURL: "https://firstproject-16eb1-default-rtdb.firebaseio.com",
  projectId: "firstproject-16eb1",
  storageBucket: "firstproject-16eb1.appspot.com",
  messagingSenderId: "115927124161",
  appId: "1:115927124161:web:5958f2a7412d29602cac40",
  measurementId: "G-PSPCY1TP27",
};

function App() {
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  console.log("DB: ", db);
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
