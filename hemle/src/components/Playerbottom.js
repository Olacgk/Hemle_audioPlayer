import React, {useState} from 'react';
import methode_agile from '../assets/methode_agile.png'
import {FiRadio} from "react-icons/fi";
import {MdOpenInFull, MdOutlineForward10, MdOutlineReplay10, MdPlayArrow} from "react-icons/md";
import { Progress } from "@material-tailwind/react";
import {IoMdCloseCircle} from "react-icons/io";



const Playerbottom = ({photo, title, handleClick, ...props}) => {

    const [open, setOpen] = useState(true)

  return(
      <div className={`bottom-0 w-full ${open ? 'fixed' : 'hidden'}`}>
          <Progress value={50} color={'#FF462D'} className={'relative'}/>
          <div className={"flex py-[20px] bg-black w-full md:px-[60px] px-[30px] place-content-between items-center"}>
              <div className={'space-x-[20px] flex items-center'}>
                  <img alt={'view'} src={methode_agile} className={'w-[85px] h-[73px]'}/>
                  <FiRadio className={"fill-black rounded-full bg-white text-3xl"}/>
                  <div className={' items-center'}>
                      <div className={'text-[24px] text-semibold leading-[32px]'}>Methode Agile</div>
                      <div>Youtube/ Nom Prénom</div>
                  </div>
              </div>
              <div className={'flex md:space-x-[20px]'}>
                  <MdOutlineReplay10 className={'h-[24px] w-[24px] cursor-pointer'}/>
                  <MdPlayArrow className={'h-[24px] w-[24px] cursor-pointer'}/>
                  <MdOutlineForward10 className={'h-[24px] w-[24px] cursor-pointer'}/>
                  <MdOpenInFull  className={'h-[24px] w-[24px] cursor-pointer'}/>
                  <IoMdCloseCircle onClick={handleClick} className={'h-[24px] w-[24px] cursor-pointer'}/>
              </div>
          </div>

      </div>
  )
}

export default Playerbottom;