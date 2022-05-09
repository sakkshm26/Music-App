import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import PlayingBar from "./components/PlayingBar/PlayingBar";
import { Route, Routes } from 'react-router-dom';
import Background from "./components/Background/Background";
import Playlist from "./components/Playlist/Playlist";

function App() {

  const [storage, setStorage] = useState(localStorage.getItem('music'));

  return (
    <div className="App">
      <Navbar />
      <Background />
      <PlayingBar storage={storage} />
      <Routes>
        <Route exact path="/" element={<Main setStorage={setStorage} />} />
        <Route exact path="/playlist" element={<Playlist setStorage={setStorage}/>} />
      </Routes>
    </div>
  );
}

export default App;
