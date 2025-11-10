"use client";
import React, {useState} from "react";
import Hero from "@/app/Components/Pos/Hero";
import Prode from "@/app/Components/Pos/Prode";
import Le from "@/app/Components/Pos/Le";
import Pour from "@/app/Components/Pos/Pour";
import SubHeader from "@/app/Components/Pos/SubHeader";
import Ense from "@/app/Components/Pos/Ense";

const Page: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("Information");

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
                return <Pour/>;
            case "Parents":
                return (
                    <div className="p-10 text-center text-gray-500">
                        Parents content coming soon
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <SubHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="mt-6">{renderContent()}</div>
        </>
    );
};

export default Page;