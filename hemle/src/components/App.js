import React from "react";
import Header from "./Header";
import PodcastDesc from "./PodcastDesc";
import Playlist from "./Playlist";
import ArianeThread from "./ArianeThread";

function App() {
  return (
    <div className={'space-y-4'}>
        <Header/>
        <ArianeThread/>
        <PodcastDesc/>
        <Playlist/>
    </div>
  );
}

export default App;
