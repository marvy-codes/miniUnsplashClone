import SearchBar from "./SearchBar";

function Landing() {
    return (
        <div>
            <SearchBar />
            <div className=" h-[140px] max-w-screen-2xl mx-4 sm:mx-8 md:mx-12 2xl:px-[158px] 2xl:mx-auto -translate-y-6">
                <div className="text-center mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-[32px] gap-y-[22px] max-w-xl">
                    <div><h1>this is a grid</h1> <p>paragraph to the grid</p></div>
                    <div><h1>this is a grid</h1> <p>paragraph to the grid</p></div>
                    <div><h1>this is a grid</h1> <p>paragraph to the grid</p></div>
                    <div><h1>this is a grid</h1> <p>paragraph to the grid</p></div>
                    <div><h1>this is a grid</h1> <p>paragraph to the grid</p></div>
                    <div><h1>this is a grid</h1> <p>paragraph to the grid</p></div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Landing;
  