import { useEffect } from 'react';
import searchIcon from '../assets/searchIcon.png'
import  api from '../api/api.js'
import axios from 'axios'

function SearchBar() {

    // const caller = value => {
    //     api.getPictures(value).then(response => {
    //         console.log(response.data.results)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    const BASE_URL = process.env.BASE_URL
    const ACCESS_KEY = process.env.ACCESS_KEY
    
    useEffect(() => {
    axios.get("https://api.unsplash.com/search/collections?client_id=eljG_NFy5hGIPn92DtNh4bzIXoI27UHpBaTzX3ce0ZM&query=africa&page=12&per_page=4")
    .then((response) => {
        console.log(response.data.total)
    }).catch(error => console.log(error.message))
    }, [])

    return (
        <div className="bg-[#C4C4C4] w-full h-[140px] md:h-[200px]">
            <div className=" h-[140px] max-w-screen-2xl mx-4 sm:mx-8 md:mx-12 2xl:px-[158px] 2xl:mx-auto ">
                <div className="flex items-center justify-center h-[140px] md:h-[200px]">
                    <img src={searchIcon} alt='searchIcon' className="w-[14px] h-[14px] translate-x-6"/>
                    <input 
                    placeholder="Search for photo" 
                    type="text" 
                    className="w-[75%] p-[10px] px-[32px] rounded-md text-[#272626] text-xs leading-[10px] focus:outline-none"
                    
                    />
                </div>
            </div>
        </div>
    );
  }
  
export default SearchBar;
//https://api.unsplash.com/search/collections?client_id=eljG_NFy5hGIPn92DtNh4bzIXoI27UHpBaTzX3ce0ZM&query=africa&page=12&per_page=4