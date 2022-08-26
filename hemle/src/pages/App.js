import React from "react";
import Header from "../components/Header";
import PodcastDesc from "../components/PodcastDesc";
import Playlist from "../components/Playlist";
import ArianeThread from "../components/ArianeThread";
import Playerbottom from "../components/Playerbottom";

function App() {
  return (
    <div className={'space-y-4'}>
        <Header/>
        <ArianeThread/>
        <PodcastDesc/>
        <Playlist/>
        {/*<Playerbottom/>*/}
    </div>
  );
}

export default App;
