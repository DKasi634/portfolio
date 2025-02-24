import { Link, NavLink, useLocation } from "react-router-dom"
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { navLinks } from "../constants/data"
import { NavLinksWrapper } from "../globals/styles"
import BaseButton, { buttonType } from "./base-button.component";
import { useEffect, useState } from "react";
import NavBtn from "./nav-btn.component";
import NavMenu from "./nav-menu.component";
import { CgMenuRightAlt } from "react-icons/cg";


const TopNavigation = () => {
    const location = useLocation();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const hideDrawer = () => {
        setDrawerVisible(false)
    }
    const showDrawer = () => {
        setDrawerVisible(true)
    }

    useEffect(() => {
        if (drawerVisible) {
            disablePageScroll()
        } else {
            enablePageScroll();
        }
    }, [drawerVisible])

    console.log("The location hash : ", location)
    return (
        <>
            <nav className="z-[50] fixed inset-x-0 w-full top-0 shadow-dark-transparent shadow-sm bg-light/40 backdrop-blur-2xl flex items-center justify-center px-16 py-4 h-[5rem]">
                <div className="flex items-center justify-between gap-4 w-full">
                    <aside className="left">
                        <Link to={"/"} className="logo text-3xl font-bold text-blue">.Daniel</Link>
                    </aside>
                    <aside className="hidden w-1/2 lg:flex items-center justify-between pr-8">
                        <NavLinksWrapper className="flex items-center justify-center gap-2 py-4">
                            {
                                navLinks.map((link, index) => (
                                    <li className="text-sm px-4" key={index}> <NavLink to={`#${link.hash}`} className={({ isActive }) => `${isActive && link.hash === location.hash.replace("#", '') ? "active" : "" + '!font-bold'
                                        }`} 
                                        onClick={() => {
                                            const section = document.getElementById(link.hash);
                                            if (section) {
                                              section.scrollIntoView({ behavior: "smooth" });
                                            }else{ scrollTo({top:42}) }
                                          }}>{link.label}</NavLink> </li>
                                ))
                            }
                        </NavLinksWrapper>
                        <BaseButton type={buttonType.blue} className="!py-[0.4rem] !px-4 !text-sm !font-bold">Get in touch</BaseButton>
                    </aside>
                    {!drawerVisible &&
                        <NavBtn className="inline-block lg:hidden ml-auto" onClick={showDrawer} icon={<CgMenuRightAlt />} />
                    }
                </div>

            </nav>
            {drawerVisible && <NavMenu hideCallback={hideDrawer} visible={drawerVisible} />}
        </>
    )
}

export default TopNavigation