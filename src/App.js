import { Suspense } from "react";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import { GetListData } from "./apis";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import PeopleCard from "./components/PeopleCard";
import PopularAnime from "./components/PopularAnime";
import PopularManga from "./components/PopularManga";
import SideBar from "./components/SideBar";
import TopCard from "./components/TopCard";
import TopSpecial from "./components/TopSpecial";
import { routes } from "./routes/Routes";

function App() {
  const [toggle, setToggle] = useState(false)
  const [animeList, setAnimeList] = useState([])
  const [mangaList, setMangaList] = useState([])
  const [topAnime, setTopAnime] = useState([])
  const [topManga, setTopManga] = useState([])
  const [topPeople, setTopPeople] = useState([])
  const [topCharacter, setTopCharacter] = useState([])
  const [loading, setLoading] = useState(true)

  const HandleToggle = () => {
    setToggle(!toggle)
  }

  TopBarProgress.config({
    barColors: {
      0: "#0D6EFD",
      1: "#0D6EFD",
    },
  });

  useEffect(() => {
    setTimeout(() => {
      GetListData('anime')
        .then(res => {
          setAnimeList(res.slice(5, 9))
          setTopAnime(res.slice(0, 3))
        })

      GetListData('manga')
        .then(res => {
          setTopManga(res.slice(0, 3))
          setMangaList(res.slice(5, 9))
        })

      GetListData('people')
        .then(res => setTopPeople(res.slice(0, 10)))

      GetListData('characters')
        .then(res => setTopCharacter(res.slice(0, 10)))
    },1000)
  }, [])

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading === false ?
      (
        <div className="App">
          <div className="relative min-h-screen lg:flex">
              <div className=" fixed w-full text-gray-800 dark:text-gray-500 dark:bg-gray-800 bg-white flex justify-between lg:hidden z-30">
                <Link to="/" className="block py-2.5 px-4 rounded text-xl font-main flex items-center" >
                  <p>Anime VT</p>
                </Link>
                <button onClick={HandleToggle} className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-400">
                  {
                    toggle ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 `} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )
                  }           
                </button>
              </div>
                <SideBar toggle={toggle} />
              <div id="home" className="flex-1 md:p-10 bg-gray-100 dark:bg-black transition duration-300 sm:pt-16 sm:px-4 lg:absolute right-0 sm:w-full lg:w-4/5">
                <Header />
                <Suspense fallback={<TopBarProgress />}>
                  <Switch>
                    <Route exact path="/" title="Home">
                      <TopSpecial />
                      <TopCard topAnime={topAnime} topManga={topManga} />
                      <PopularAnime animeList={animeList} />
                      <PopularManga mangaList={mangaList} />
                      <PeopleCard topPeople={topPeople} />
                      <CharacterCard topCharacter={topCharacter} />
                    </Route>      
                    {
                      routes.map(route => (
                        <Route 
                          key={route.path} 
                          path={route.path} 
                          component ={route.component}  
                        />
                      ))
                    }
                  </Switch>
                </Suspense>
                <Footer />
              </div>
          </div>

        </div>
      )
      : (<Loading />)
  
    }
    
    </>
  );
}

export default App;
