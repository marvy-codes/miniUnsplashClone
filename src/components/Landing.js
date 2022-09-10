import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Preloader from "./Preloader";
import Images from "./Images";

function Landing() {
    const { fetching }  = useSelector(state => state.image);
    console.log(fetching)
    return (
        <div>
            <SearchBar />
           <div>
             {fetching   ? <Preloader /> : <Images />}
           </div>
        </div>
    );
  }
  
  export default Landing;
  