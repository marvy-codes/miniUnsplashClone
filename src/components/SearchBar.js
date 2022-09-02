import searchIcon from '../assets/searchIcon.png'
function SearchBar() {
    return (
        <div className="bg-[#C4C4C4] w-full h-[140px]">
            <div className=" h-[140px] max-w-screen-2xl mx-4 sm:mx-8 md:mx-12 2xl:px-[158px] 2xl:mx-auto ">
                <div className="flex items-center justify-center h-[140px]">
                    <img src={searchIcon} alt='searchIcon' className="w-[14px] h-[14px] translate-x-4"/>
                    <input placeholder="Search for photo" type="text" className="w-[75%] p-[10px] px-[20px] rounded-md text-[#272626] text-xs leading-[10px] focus:outline-none "/>
                </div>
            </div>
        </div>
    );
  }
  
export default SearchBar;
