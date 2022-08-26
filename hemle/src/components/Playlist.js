import React from "react";
import {playlistContent} from '../data/playlistContent'
import PodcastDescCard from "./PodcastDescCard";


const Playlist = () => {
  return(
      <div className={'md:px-[60px] px-[30px] mt-[40px]'}>
          <p className={'w-full h-[70px] border-b-2 border-[#A0A19F] text-[36px] text-white font-semibold'}>Playlist</p>
          {
              playlistContent.map( playlist => {
                  return (
                      <PodcastDescCard date={playlist.date} id={playlist.id} photo={playlist.photo} title={playlist.title}/>
                  )
              } )
          }
      </div>
  )
}

export default Playlist;