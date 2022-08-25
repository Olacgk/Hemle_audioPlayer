import React from "react";
import {MdOutlineShare} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import methode_agile from '../assets/methode_agile.png'


const Playlist = () => {
  return(
      <div className={'px-[60px] mt-[40px]'}>
          <p className={'w-full h-[70px] border-b-2 border-[#A0A19F] text-[36px] text-white font-semibold'}>Playlist</p>
          <div className={'bg-[#292A2A] h-[131px] w-full mt-[30px] mb-[28px] justify-center'}>
              <div className={'px-[16px] py-[16px] flex items-center place-content-between'}>
                  <div className={'flex items-center'}>
                      <img alt={'podcsat view'} src={methode_agile} className={'h-[99px] w-[101px]'}/>
                      <div className={'ml-[12px]'}>
                          <p className={'font-semibold text-[18px] leading-[32px] text-white'}>1 Methode agile</p>
                          <div className={'flex text-white space-x-3 items-center'}>
                              <p className={'text-[16px] leading-[32px]'}>Nom Prénom - Youtube </p>
                              <div className={'text-[#A0A19F] text-[25px]'}>•</div>
                              <div className={'text-[#A0A19F] text-[16px] leading-[32px]'}>10 Mai 2022</div>
                          </div>
                      </div>
                  </div>
                  <div className={'flex space-x-3'}>
                      <AiOutlineClockCircle className={'fill-white h-[24px] w-[24px]'}/>
                      <MdOutlineShare className={'fill-white h-[24px] w-[24px]'}/>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Playlist;