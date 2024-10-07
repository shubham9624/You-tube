import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { HAMBYRGER_ICON_API, YOUTUBE_LOGO_API,USER_LOGO_API } from '../utils/constant';
const Header = () =>{
    const dispatch = useDispatch();
    const toogleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
            <img onClick={()=>{
                toogleMenuHandler();
            }} className="h-8 cursor-pointer" src={HAMBYRGER_ICON_API} alt="menu-icon"></img>
            <img className="h-12 mx-2 " alt='logo' src={YOUTUBE_LOGO_API}></img>
            </div>
            <div className='px-[10%] col-span-10 '>
                <input type="text" className='p-2 w-1/2 border border-gray-400 rounded-l-full'></input>
                <button className='p-2 border border-gray-500  bg-gray-200 rounded-r-full'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img className="h-[50px] rounded-3xl" alt='user-icon' src={USER_LOGO_API}></img>
            </div>
        </div>
    )
};

export default Header;