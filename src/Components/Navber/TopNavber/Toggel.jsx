



import React, { useEffect, useState } from "react";
import moon from "../../../assets/NavbarIcons/moon.svg";
import sun from "../../../assets/NavbarIcons/sun.svg";

const ToggleButton = ({ Menu }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedMode = localStorage.getItem("isDarkMode");
        return storedMode ? JSON.parse(storedMode) : false;
    });

    // Toggle dark mode and update localStorage
    const toggleMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;

            // Apply dark mode changes
            if (newMode) {
                document.documentElement.classList.add("dark");
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
            } else {
                // Revert to light mode
                document.documentElement.classList.remove("dark");
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
            }

            // Update localStorage
            localStorage.setItem("isDarkMode", JSON.stringify(newMode));
            return newMode;
        });
    };

    // Apply dark mode on initial load
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            document.documentElement.classList.remove("dark");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }, [isDarkMode]);

    return (
        <div className={`container ${isDarkMode ? "dark" : "light"}`}>
            <button
                className={`toggle ${isDarkMode ? "dark" : "light"}`}
                onClick={() => {
                    toggleMode();
                    Menu?.(); // Call Menu if it is passed as a prop
                }}
            >
                {isDarkMode ? (
                    <div className="icon icon--sun">
                        <img src={sun} alt="Light Mode" className="w-6 h-6" />
                    </div>
                ) : (
                    <div className="icon icon--moon">
                        <img src={moon} alt="Dark Mode" className="w-6 h-6" />
                    </div>
                )}
            </button>
        </div>
    );
};

export default ToggleButton;

