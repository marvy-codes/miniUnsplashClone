import SearchBar from "./SearchBar";
import Preloader from "./Preloader";
import Images from "./Images";

function Landing() {
    const fetching = false
    return (
        <div>
            <SearchBar />
            {fetching   ? <Preloader /> : <Images />}
        </div>
    );
  }
  
  export default Landing;
  