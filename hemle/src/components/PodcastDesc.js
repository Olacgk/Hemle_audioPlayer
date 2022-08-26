import React from "react";
import {FiRadio} from "react-icons/fi";
import {MdOpenInFull, MdOutlineShare} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import methode_agile from '../assets/methode_agile.png';

const PodcastDesc = () => {
    return(
        <div className={'md:flex md:px-[63px] px-[30px] gap-x-7'}>
            <img alt={'Podcast view'} src={methode_agile} className={'md:w-[464px] w-[150px] md:h-[325px]'}/>
            <div className={'border-b-2 border-[#A0A19F]'}>
                <div className={'flex text-black space-x-4 pt-[20px] md:pt-0'}>
                    <h5 className={'bg-white w-[54px] h-[25px] text-center'}>travail</h5>
                    <h5 className={'bg-[#FFFF27] w-[114px] h-[25px] text-center'}>Méthodologie</h5>
                </div>
                <p className={'text-white text-2xl mt-[26px]'}>1.Méthode Agile</p>
                <p className={'text-white text-[16px] leading-[36px] mt-[24px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Blandit tellus in ut elementum Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Blandit tellus.
                </p>
                <div className={'flex text-white space-x-3 items-center mt-[16px]'}>
                    <p className={'text-[16px] leading-[32px]'}>Nom Prénom - Youtube </p>
                    <div className={'text-[#A0A19F] text-[25px]'}>•</div>
                    <div className={'text-[#A0A19F] text-[16px] leading-[32px]'}>10 Mai 2022</div>
                </div>
                <div className={'flex mb-[25px] mt-[16px] place-content-between items-center'}>
                    <button className={'gap-x-4 flex items-center border-[1px] border-white rounded-[4px] h-[50px] w-[142px] justify-center'}>
                        ECOUTER
                        <FiRadio/>
                    </button>
                    <div className={'flex space-x-3'}>
                        <MdOpenInFull  className={'h-[24px] w-[24px] cursor-pointer'}/>
                        <AiOutlineClockCircle className={'h-[24px] w-[24px]'}/>
                        <MdOutlineShare className={'h-[24px] w-[24px]'}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PodcastDesc;