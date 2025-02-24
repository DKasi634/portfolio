
import React, { useRef } from "react";
import {  NavLink, useLocation } from "react-router-dom"

import { navLinks } from "../constants/data";
import { NavDrawerWrapper } from "../globals/styles";
import NavBtn from "./nav-btn.component";
import {
  IoClose,
} from "react-icons/io5";


type NavMenuProps = {
  className?: string,
  visible: boolean,
  hideCallback: () => void;
}

const NavMenu = ({ className = "", visible, hideCallback }: NavMenuProps) => {
  const location = useLocation();

  const drawerModal = useRef<HTMLDivElement | null>(null);
  const drawerContent = useRef<HTMLDivElement | null>(null);

  const handleModalClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
    if (drawerModal.current && event.target === drawerModal.current) {
      hideCallback();
    }
  };

  return (
    <>
      {visible && (
        <NavDrawerWrapper
          className={`${className} flex lg:hidden fixed inset-0 bg-dark-variant w-screen h-screen z-50`}
          onMouseDown={handleModalClick}
          ref={drawerModal}
        >
          <div
            className="absolute right-0 inset-y-0 w-screen max-w-[100vw] sm:max-w-[30rem] bg-slate-50 flex flex-col items-start justify-start"
            ref={drawerContent}
          >
            <ul className="flex flex-col items-start justify-start gap-3 p-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={`#${link.hash}`}
                    className={() =>
                      `${location.hash.replace("#", '') === link.hash ? "text-blue" : "hover:text-blue"}`
                    }
                    onClick={() => {
                      const section = document.getElementById(link.hash);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                      hideCallback();
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-start justify-start gap-4 px-4">
              
            </div>
            <NavBtn
              className="fixed top-3 right-6"
              onClick={hideCallback}
              icon={<IoClose />}
            />
          </div>
        </NavDrawerWrapper>
      )}
    </>
  );
};

export default NavMenu;

