import React from 'react';
import {AiOutlineClockCircle} from "react-icons/ai";
import {MdOutlineShare} from "react-icons/md";

const PodcastDescCard = ({id, photo, title, date}) => {
  return(
      <div className={'bg-[#292A2A] md:h-[131px] w-full mt-[30px] mb-[28px] justify-center'}>
          <div className={'px-[16px] py-[16px] md:flex items-center place-content-between'}>
              <div className={'flex items-center'}>
                  <img alt={'podcsat view'} src={photo} className={'h-[99px] w-[101px]'}/>
                  <div className={'ml-[12px]'}>
                      <p className={'font-semibold text-[18px] leading-[32px] text-white'}>{id} {title}</p>
                      <div className={'flex text-white space-x-3 items-center'}>
                          <p className={'text-[16px] leading-[32px]'}>Nom Prénom - Youtube </p>
                          <div className={'text-[#A0A19F] text-[25px]'}>•</div>
                          <div className={'text-[#A0A19F] text-[16px] leading-[32px]'}>{date}</div>
                      </div>
                  </div>
              </div>
              <div className={'flex space-x-3'}>
                  <AiOutlineClockCircle className={'fill-white h-[24px] w-[24px]'}/>
                  <MdOutlineShare className={'fill-white h-[24px] w-[24px]'}/>
              </div>
          </div>
      </div>
  )
}

export default PodcastDescCard;