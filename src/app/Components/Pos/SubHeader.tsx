"use client";
import React from "react";

interface SubHeaderProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const SubHeader: React.FC<SubHeaderProps> = ({activeTab, setActiveTab}) => {
    const tabs = ["Information", "Enseignants", "Élèves", "Parents"];

    return (
        <section className="pt-[40px]">
            <div className="sub_header bg-white w-full fixed top-[50px] z-30">
                <div className="container block space-y-2 md:space-y-0 md:flex items-center justify-between">
                    <h4 className="text-[16px] text-prgcolor font-bold">
                        Voyage méthode de lecture
                    </h4>

                    <ul className="flex items-center gap-4 text-[14px]">
                        {tabs.map((tab) => (
                            <li key={tab}>
                                {/* Use button instead of Link for tab behavior */}
                                <button
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-1 py-[2px] focus:outline-none cursor-pointer transition ${
                                        activeTab === tab
                                            ? "text-primary"
                                            : "text-prgcolor hover:text-primary"
                                    }`}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SubHeader;