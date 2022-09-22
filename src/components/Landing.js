import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Preloader from "./Preloader";
import Images from "./Images";

function Landing() {
    const { isFetching }  = useSelector(state => state.image);
    console.log(isFetching)
    return (
        <div>
            <SearchBar />
           <div>
             {isFetching   ? <Preloader /> : <Images />}
           </div>
        </div>
    );
  }
  
  export default Landing;
  