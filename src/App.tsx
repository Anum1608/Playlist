
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Player from './Component/Player/Player';
import Playlist from './Component/Playlist/Playlist';
import URLInputPage from './Component/URLInputPage/URLInputPage';

const videoIdString = 'tP2TWk8J2Lk,4oCVDkb_EIs,7fPXI_MnBOY'

// const vidurl = 'https://www.youtube.com/watch?v=uTN29kj7e-w';

// fetch(`https://noembed.com/embed?dataType=json&url=${vidurl}`)
//   .then(res => res.json())
//   .then(data => console.log('data found in fetch:', data.title))

function App() {
  const [videoUrls, setVideoUrls] = useState<string[]>();
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<URLInputPage setVideoUrlArray={setVideoUrls}/>}>
          <Route path="Player" element={<Player videoIdString = {videoIdString}/>} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <URLInputPage />
    //   <Player videoIdString = {videoIdString}/>
    //   <Playlist />
    // </div>
  );
}

export default App;
