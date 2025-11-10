"use client";
import React from "react";

interface SubHeaderProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const SubHeader: React.FC<SubHeaderProps> = ({activeTab, setActiveTab}) => {
    const tabs = ["Information", "Enseignants", "Élèves", "Parents"];

    return (
        <div className="bg-white shadow-sm">
            <div className="container mx-auto block space-y-2 md:space-y-0 md:flex items-center justify-between py-3">
                <h4 className="text-[16px] text-prgcolor font-bold">
                    Voyage méthode de lecture
                </h4>

                <ul className="flex items-center gap-4 text-[14px]">
                    {tabs.map((tab) => (
                        <li key={tab}>
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
    );
};

export default SubHeader;