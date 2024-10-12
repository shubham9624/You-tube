import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { HAMBYRGER_ICON_API, YOUTUBE_LOGO_API,USER_LOGO_API ,YOU_TUBE_SEARCH_API} from '../utils/constant';
import { cacheResult } from '../utils/suggestionSlice';
const Header = () =>{

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache  = useSelector(store => store.search);


    /** For Debouncing
    
     * key i pressed
     *  - render
     *   - call useEffect
     *   - start Timer after 200ms
     * key ip pressed
     *  -destroy the component (call useEffect return )
     *  - render
     *  - call useEffect
     *  - start Timer after 200ms (but its new timer)
     */
    useEffect(() => {
        //make api cll after exch key press 
        //if different between 2 key press less than 200ms decline api call
        const timer = setTimeout(()=> {
            if(searchCache[searchQuery])
                {
                    setSuggestions(searchCache[searchQuery]);
                }
                else{
                    getSearchQuery();
                }
        },200);

        return ()=>{
            //console.log("clartimeout called");
            clearTimeout(timer);
        };

    },[searchQuery]);

  
    const getSearchQuery = async()=>{
       // console.log("API call",searchQuery);
        const data = await fetch(YOU_TUBE_SEARCH_API + searchQuery);
        const json =await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResult({
            [searchQuery]: json[1]
        }));
        
        //console.log(json);
    }
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
                <div>
                     <input type="text" className='p-2 w-1/2 border border-gray-400 rounded-l-full' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}
                     onFocus={()=>{
                        setShowSuggestions(true);
                     }} 
                     onBlur={()=>{
                        setShowSuggestions(false);
                     }}
                     ></input>
                     <button className='p-2 border border-gray-500  bg-gray-200 rounded-r-full'>🔍</button>
                </div>
                {
                    showSuggestions && (<div className='fixed bg-white py-2 px-5 w-[36rem] rounded-xl shadow-lg'>
                        <ul >
                            {
                                suggestions.map((s)=>{
                                    return <li key={s} className='py-2 shadow-sm rounded-lg hover:bg-gray-100'>🔍 {s}</li>
                                })
                            }
                        </ul>
                    </div>)
                }
            </div>
            <div className='col-span-1'>
                <img className="h-[50px] rounded-3xl" alt='user-icon' src={USER_LOGO_API}></img>
            </div>
        </div>
    )
};

export default Header;