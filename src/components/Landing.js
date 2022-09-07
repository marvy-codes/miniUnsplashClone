import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Preloader from "./Preloader";
import Images from "./Images";

function Landing() {
    const [ fetching ]  = useSelector(state => state.images);
    return (
        <div>
            <SearchBar />
            
            {fetching   ? <Preloader /> : <Images />}
        </div>
    );
  }
  
  export default Landing;
  