import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {MdClose, MdLanguage, MdMenu} from "react-icons/md";
import {AiOutlineDown} from "react-icons/ai";
import logo from "../assets/Logo_Hemle-V2-39.svg"

const Header = () => {
    const [open, setOpen] = useState(false);
    return(
      <header className='h-[114px] w-full md:px-[60px] px-[30px] py-[30px] md:flex md:space-x-[176px] md:items-center border-b-2 border-b-amber-900'>
          <div className={'flex place-content-between items-center'}>
              <img alt={'Logo Hemlè'} src={logo}/>
              <div onClick={() =>(setOpen(!open))} className={"cursor-pointer md:hidden text-3xl"}>
                  {open ? <MdClose/> : <MdMenu/>}
              </div>
          </div>
          <div className={`md:flex items-center md:space-x-[155px] bg-white md:bg-[#1D1D1B] md:text-white text-black absolute md:relative md:top-0 right-0 w-full px-[20px] ${open ? 'top-[114px]' : 'hidden'}`}>
              <nav>
                  <ul className={'md:flex md:space-x-[40px] md:py-0 py-[30px] md:space-y-0 space-y-[25px] text-sm md:items-center'}>
                      <li>ACCUEIL</li>
                      <li className={'flex items-center space-x-1'}>
                          <p className={'text-sm'}>PRESTATIONS</p>
                          <AiOutlineDown/>
                      </li>
                      <li>NOS CLIENTS </li>
                      <li>A PROPOS</li>
                  </ul>
              </nav>
              <div className={'md:flex items-center md:space-x-8 md:space-y-0 space-y-[15px] md:pb-0 pb-3'}>
                  <FaSearch size='1rem'/>
                  <MdLanguage size='1.5rem'/>
                  <button className={'ring-black md:ring-white ring-2 border-solid rounded-lg h-[54px] w-[129px]'}>SE CONNECTER</button>
              </div>
          </div>
      </header>
  )
}

export default Header;