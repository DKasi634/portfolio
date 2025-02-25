import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { navLinks } from "../constants/data"
import { NavLinksWrapper } from "../globals/styles"
import BaseButton, { buttonType } from "./base-button.component";
import { useEffect, useState } from "react";
import NavBtn from "./nav-btn.component";
import NavMenu from "./nav-menu.component";
import { CgMenuRightAlt } from "react-icons/cg";


import DownloadCvButton from "./download-cv-button.component";


const TopNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
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

    return (
        <>
            <nav className="z-[50] fixed inset-x-0 w-full top-0 shadow-dark-transparent shadow-sm bg-light/40 backdrop-blur-2xl flex items-center justify-center px-16 py-4 h-[5rem]">
                <div className="flex items-center justify-between gap-4 w-full">
                    <aside className="left w-[30%]">
                        <Link to={"/"} onClick={()=>{ if(!location.pathname) window.location.href = `/#` }} className="font-sassy logo cursor-pointer text-5xl font-bold text-blue">.Daniel</Link>
                    </aside>
                    <aside className="hidden w-[70%] lg:flex items-center justify-between gap-4 xl:pr-8">
                        <NavLinksWrapper className="flex w-1/2 items-center justify-center gap-2 py-4">
                            {
                                navLinks.map((link, index) => (
                                    <li className="text-sm px-4" key={index}> <NavLink to={`${location.pathname.replace("/", '') ? "/":''}#${link.hash}`} className={({ isActive }) => `${isActive && link.hash === location.hash.replace("#", '') ? "active" : "" + '!font-bold'
                                        }`}
                                        onMouseDown={() => {
                                            if(location.pathname.replace("/", "")){
                                                navigate(`/`); return
                                            }
                                            const section = document.getElementById(link.hash);
                                            if (section) {
                                                window.location.href = `/#${link.hash}`
                                                // window.scrollBy({ top: section.getBoundingClientRect().top - 120, left: 0, behavior: "smooth" });
                                            } else {
                                                window.location.href = `/#`
                                                // window.scrollTo({ top: 0 })
                                            }
                                        }}>{link.label}</NavLink> </li>
                                ))
                            }
                        </NavLinksWrapper>
                        <div className="flex items-center w-1/2 justify-center gap-4 min-w-fit">
                            <BaseButton type={buttonType.blue} clickHandler={() => { window.location.href = "/#contact" }} className="!py-[0.4rem] !px-4 !text-sm !font-normal !inline-block">Get in touch</BaseButton>
                           <DownloadCvButton/>
                        </div>
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