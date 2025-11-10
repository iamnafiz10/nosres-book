"use client";
import React, {useEffect, useState} from "react";
import Hero from "@/app/Components/Pos/Hero";
import Prode from "@/app/Components/Pos/Prode";
import Le from "@/app/Components/Pos/Le";
import Pour from "@/app/Components/Pos/Pour";
import SubHeader from "@/app/Components/Pos/SubHeader";
import Ense from "@/app/Components/Pos/Ense";
import Parents from "@/app/Components/Pos/Parents";
import Eleves from "@/app/Components/Pos/Eleves";

const Page: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("Information");
    const [hideHeader, setHideHeader] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentY = window.scrollY;
                    const delta = currentY - lastY;

                    // scroll down → hide header (after 100px)
                    if (delta > 5 && currentY > 150) {
                        setHideHeader(true);
                    }
                    // scroll up → show header (after moving up at least 80px)
                    else if (delta < -80 || currentY < 100) {
                        setHideHeader(false);
                    }

                    lastY = currentY;
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Apply hide animation to main Header element in layout
    useEffect(() => {
        const headerEl = document.querySelector("header");
        if (!headerEl) return;

        headerEl.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "w-full",
            "z-40",
            "transition-all",
            "duration-300"
        );

        if (hideHeader) {
            headerEl.classList.add("translate-y-[-100%]");
        } else {
            headerEl.classList.remove("translate-y-[-100%]");
        }
    }, [hideHeader]);

    const renderContent = () => {
        switch (activeTab) {
            case "Information":
                return (
                    <>
                        <Hero/>
                        <Prode/>
                        <Le/>
                        <Pour/>
                    </>
                );
            case "Enseignants":
                return <Ense/>;
            case "Élèves":
                return <Eleves/>;
            case "Parents":
                return <Parents/>;
            default:
                return null;
        }
    };

    return (
        <>
            {/* SubHeader position control */}
            <div
                className={`fixed left-0 w-full z-30 transition-all duration-300 ${
                    hideHeader ? "top-0" : "top-[50px]"
                }`}
            >
                <SubHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>

            <div className="pt-[100px]">{renderContent()}</div>
        </>
    );
};

export default Page;