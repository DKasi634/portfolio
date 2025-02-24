import { Outlet } from "react-router-dom"
import TopNavigation from "../components/top-navigation.component"


const MainNavigation = () => {
  return (
    <div className="flex flex-col">
        <TopNavigation/>
        <main className="mt-[5rem]">
            <Outlet/>
        </main>
    </div>
  )
}

export default MainNavigation