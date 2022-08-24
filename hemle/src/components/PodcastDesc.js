import React from "react";

const PodcastDesc = () => {
    return(
        <div className={'flex px-[63px] gap-x-7'}>
            <img alt={'Podcast Image'} src={'/methode_agile.png'} className={'w-[464px] h-[325px]'}/>
            <div className={'space-y-[26px]'}>
                <div className={'flex text-black space-x-4'}>
                    <h5 className={'bg-white w-[54px] h-[25px] text-center'}>travail</h5>
                    <h5 className={'bg-[#FFFF27] w-[114px] h-[25px] text-center'}>Méthodologie</h5>
                </div>
                <p className={'text-white text-2xl'}>1.Méthode Agile</p>
                <p className={'text-white text-[16px] leading-[36px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Blandit tellus in ut elementum Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Blandit tellus.
                </p>
                <div className={'flex text-white'}>
                    <p>Nom Prénom-Youtube </p>
                    <div>10 Mai 2022</div>
                </div>
            </div>
        </div>
    )
}

export default PodcastDesc;