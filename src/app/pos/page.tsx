import React from 'react';
import Hero from "@/app/Components/Pos/Hero";
import Prode from "@/app/Components/Pos/Prode";
import Le from "@/app/Components/Pos/Le";
import Pour from "@/app/Components/Pos/Pour";
import SubHeader from "@/app/Components/Pos/SubHeader";

const Page = () => {
    return (
        <>
            <SubHeader/>
            <Hero/>
            <Prode/>
            <Le/>
            <Pour/>
        </>
    );
};

export default Page;