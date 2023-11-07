import  Navbar  from "@/scenes/navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";



function App() {
  const [selectedPage,setSelectedPage] = useState<string>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0){ // check ว่าอยู่บนสุดไหม
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll",handleScroll)
  },[]);
  return (
    <div className=' app bg-gray-20 '>
      <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={SelectedPage}/>
    </div>
    
  )
}

export default App