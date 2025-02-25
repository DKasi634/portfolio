
import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom"

import { navLinks } from "../constants/data";
import { NavDrawerWrapper } from "../globals/styles";
import NavBtn from "./nav-btn.component";
import {
  IoClose,
} from "react-icons/io5";
import BaseButton, { buttonType } from "./base-button.component";
import DownloadCvButton from "./download-cv-button.component";


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
            className="absolute right-0 inset-y-0 w-screen max-w-[100vw] sm:max-w-[30rem] bg-slate-50 flex flex-col items-start justify-start pl-4"
            ref={drawerContent}
          >
            <ul className="flex flex-col items-start justify-start gap-3 p-4 pl-0">
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
                        window.location.href = `/#${link.hash}`
                        // window.scrollBy({ top: section.getBoundingClientRect().top - 120, left: 0, behavior: "smooth" });
                      } else {
                        window.location.href = `/#`
                        // window.scrollTo({ top: 0 })
                      }
                      hideCallback();
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-startjustify-start gap-4  w-full">
              <BaseButton type={buttonType.blue} clickHandler={() => {hideCallback(); window.location.href = "/#contact" }} className="!py-[0.4rem] !px-4 !text-sm !font-normal !inline-block">Get in touch</BaseButton>
              <DownloadCvButton />
            </div>
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

