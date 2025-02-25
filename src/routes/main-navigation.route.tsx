import { Outlet } from "react-router-dom"
import TopNavigation from "../components/top-navigation.component"
import Footer from "../pages/home/section/footer-section"


const MainNavigation = () => {
  return (
    <div className="flex flex-col">
        <TopNavigation/>
        <main className="mt-[5rem] min-h-screen">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainNavigation