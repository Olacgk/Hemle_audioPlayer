import React from "react";
import {FaSearch} from "react-icons/fa";
import {MdLanguage} from "react-icons/md";
import {AiOutlineDown} from "react-icons/ai";

const Header = () => {
  return(
      <header className='h-[114px] w-full px-[60px] py-[30px] flex place-content-between items-center border-b-2 border-b-amber-900'>
          <img alt={'Logo Hemlè'} src='/Logo_Hemle-V2-39.svg'/>
          <nav>
              <ul className={'text-white flex space-x-[40px] text-sm'}>
                  <li>ACCUEIL</li>
                  <li className={'flex items-center space-x-1'}>
                      <p className={'text-sm'}>PRESTATIONS</p>
                      <AiOutlineDown/>
                  </li>
                  <li>NOS CLIENTS </li>
                  <li>A PROPOS</li>
              </ul>
          </nav>
          <div className={'flex items-center space-x-8'}>
              <FaSearch className={'fill-white'} size='1rem'/>
              <MdLanguage className={'fill-white'} size='1.5rem'/>
              <button className={'ring-white ring-2 border-solid rounded-lg h-[54px] text-white w-[129px]'}>SE CONNECTER</button>
          </div>
      </header>
  )
}

export default Header;