import React from "react";
import {BiHomeAlt} from "react-icons/bi";

const ArianeThread = () => {
  return(
      <div className={'md:px-[92px] px-[46px] py-[24px] flex items-center space-x-1'}>
          <BiHomeAlt className={'fill-[#FFFF27] h-[26px] w-[24px]'}/>
          <p className={'text-[#FFFF27] text-[18px]'}>/ Accueil</p>
          <p className={'text-white text-[18px]'}>/ Playlist podcast</p>
      </div>
  )
}

export default ArianeThread;