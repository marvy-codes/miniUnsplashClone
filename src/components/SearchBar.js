import { useEffect} from 'react';
import searchIcon from '../assets/searchIcon.png'
import  api from '../api/api.js'
import { setImages, toggleFetch, setSearchWord } from '../store/image/imageSlice'
import { useDispatch } from 'react-redux'

function SearchBar() {
    const dispatch = useDispatch();

    function handleSearch(event) {
        if(event.target.value === "" & event.charCode === 13){
            alert('You must input a searchWord')
        }
        else if(event.charCode === 13){
            dispatch(setSearchWord(event.target.value))
            caller(event.target.value)
        }
    }

    const caller = value => {
        dispatch(toggleFetch())
        api.getPictures(value).then(res => {
            dispatch(setImages(res.data.results))
            dispatch(toggleFetch())
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        api.getPictures()
        .then((res) => {
            dispatch(setImages(res.data.results))
        }).catch(error => console.log(error.message))
    }, [dispatch])

    return (
        <div className="bg-[#C4C4C4] w-full h-[140px] md:h-[200px]">
            <div className=" h-[140px] max-w-screen-2xl mx-4 sm:mx-8 md:mx-12 2xl:px-[158px] 2xl:mx-auto ">
                <div className="flex items-center justify-center h-[80px] md:h-[200px]">
                    <img src={searchIcon} alt='searchIcon' className="w-[14px] h-[14px] translate-x-6"/>
                    <input 
                    placeholder="Search for photo" 
                    type="text" 
                    className="w-[75%] p-[10px] px-[32px] rounded-md text-[#272626] text-xs leading-[10px] focus:outline-none"
                    id="input"
                    onKeyPress={handleSearch}
                    />
                </div>
            </div>
        </div>
    );
  }
  
export default SearchBar;