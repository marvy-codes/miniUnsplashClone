import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Preloader from "./Preloader";
import Images from "./Images";
import Modal from "./Modal";
import BackDrop from "./BackDrop";

function Landing() {
    const { isFetching, images,  searchWord }  = useSelector(state => state.image);

    

    return (
        <div>
            <SearchBar />
           <div>
              {images.length === 0 
              ? 
                <div>No results found for {searchWord}</div> 
              : 
                isFetching   ? <Preloader /> : <Images />
              }
           </div>
           <BackDrop />
           <Modal />
        </div>
    )
  }
  
  export default Landing;
  