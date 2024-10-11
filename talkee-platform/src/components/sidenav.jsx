import React, { useState, useEffect } from "react";
import './sidenav.css';
import sidenavcomponents from "./sidenavcomponents";
import defaultImage from "../assets/icons/defaultImage.svg";
import mobileMenu from "../assets/icons/mobileMenu.svg";
import { useNavigate } from 'react-router-dom';

function Sidenav() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1181);
    const navigate = useNavigate(); // Initialize the navigate function

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleResize = () => {
        setIsMobileView(window.innerWidth <= 1181);
        if (window.innerWidth > 1181) {
            setIsMenuVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const contents = sidenavcomponents.map((item, index) => {
        const handleClick = () => {
            navigate(item.route); // Navigate to the selected route
        };

        if (index === 0) {
            return (
                <div key={item.route} className="titleSide">
                    <div className="leftSide" onClick={handleClick}>
                        <img src={item.icon} alt={item.alt} className="mainLogo" />
                        <span className="mainName">{item.name}</span>
                    </div>
                    {isMobileView && (
                        <img 
                            src={mobileMenu} 
                            alt="Menu" 
                            className={`mobileMenu ${isMenuVisible ? 'hidden' : 'visible'}`}
                            onClick={toggleMenu}
                        />
                    )}
                </div>
            );
        } else {
            return (
                <div key={item.route} className={`navItem ${isMenuVisible || !isMobileView ? "visible" : "hidden"}`} onClick={handleClick}>
                    <img src={item.icon} alt={item.alt} className="navIcon" />
                    <span className="navTitle">{item.name}</span>
                </div>
            );
        }
    });

    return (
        <section className="sidenavContainer">
            <aside className="navSide">
                {contents}
            </aside>
            <div className={`userSection ${isMenuVisible || !isMobileView ? "visible" : "hidden"}`}>
                <img src={defaultImage} alt="default pic" className="defaultImage" />
                <div className="nameAndRole">
                    <h5 className="username">user name</h5>
                    <h5 className="userRole">@name</h5>
                </div>
            </div>
        </section>
    );
}

export default Sidenav;
