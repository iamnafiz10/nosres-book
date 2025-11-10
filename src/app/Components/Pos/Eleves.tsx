'use client';

import React, {useEffect, useRef, useState} from 'react';
import {
    LuDownload, LuX,
} from "react-icons/lu";
import profileImg from "../../../../public/assets/images/color-book.png";
import Image from "next/image";

const Eleves = () => {
    // Popup Tab One
    const [isOpenOne, setIsOpenOne] = useState(false);
    useEffect(() => {
        if (isOpenOne) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenOne]);
    const [activeTab, setActiveTab] = useState<'a' | 'b' | 'c' | 'd' | 'e'>('a');
    const tabCScrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (activeTab === 'c' && tabCScrollRef.current) {
            // Use timeout to wait for tab content to render
            setTimeout(() => {
                tabCScrollRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, 50);
        }
    }, [activeTab]);

    // Popup Tab Two
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    useEffect(() => {
        if (isOpenTwo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenTwo]);
    const [activeTabTwo, setActiveTabTwo] = useState<'a' | 'b' | 'c'>('a');

    const tabCScrollRefTwo = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (activeTabTwo === 'c' && tabCScrollRefTwo.current) {
            // Use timeout to wait for tab content to render
            setTimeout(() => {
                tabCScrollRefTwo.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, 50);
        }
    }, [activeTabTwo]);


    // Popup Tab Three
    const [isOpenThree, setIsOpenThree] = useState(false);
    useEffect(() => {
        if (isOpenThree) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenThree]);
    const [activeTabThree, setActiveTabThree] = useState<'a' | 'b'>('a');

    // Popup Tab Four
    const [isOpenFour, setIsOpenFour] = useState(false);
    useEffect(() => {
        if (isOpenFour) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenFour]);
    const [activeTabFour, setActiveTabFour] = useState<'a'>('a');

    // Popup Tab Five
    const [isOpenFive, setIsOpenFive] = useState(false);
    useEffect(() => {
        if (isOpenFive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenFive]);
    const [activeTabFive, setActiveTabFive] = useState<'a'>('a');

    // Popup Tab Six
    const [isOpenSix, setIsOpenSix] = useState(false);
    useEffect(() => {
        if (isOpenSix) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenSix]);
    const [activeTabSix, setActiveTabSix] = useState<'a' | 'b' | 'c'>('a');
    return (
        <>
            <section id="hero-section">
                <div className="container pt-16">
                    <div className="wrap text-left">
                        <h4 className="text-[24px] font-semibold">
                            Pour les élèves
                        </h4>
                        <p className="text-[16px] mt-2">
                            Dans cette section, les enfants trouveront des affiches, des marque-pages, des pages
                            d’écriture, des activités manuelles, et
                            bien plus encore pour apprendre en s’amusant et renforcer leurs compétences pas à pas.
                        </p>
                    </div>
                </div>
            </section>

            <section id="details-section">
                <div className="container">
                    <div className="flex items-center gap-1">
                        <div className="icon text-graycolor">
                            <LuDownload size={17}/>
                        </div>
                        <h4 className="text-[14px] text-graycolor">Télécharger</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                        <div onClick={() => setIsOpenOne(true)} data-aos="zoom-in" className="cursor-pointer col box border border-bordercolor rounded-xl pb-[15px]">
                            <div className="image_wrap mt-4 md:mt-0">
                                <Image
                                    src={profileImg}
                                    alt="profileImg"
                                    className="w-full h-full md:h-[200px] rounded-t-xl"
                                />
                            </div>
                            <h4
                                className="text-center mt-4 cursor-pointer hover:underline text-[16px] text-prgcolor font-[600]">
                                Affiches
                            </h4>
                        </div>
                        <div onClick={() => setIsOpenTwo(true)} data-aos="zoom-in" className="col cursor-pointer box border border-bordercolor rounded-xl pb-[15px]">
                            <div className="image_wrap mt-4 md:mt-0">
                                <Image
                                    src={profileImg}
                                    alt="profileImg"
                                    className="w-full h-full md:h-[200px] rounded-t-xl"
                                />
                            </div>
                            <h4
                                className="text-center mt-4 hover:underline text-[16px] text-prgcolor font-[600]">
                                Marque-pages
                            </h4>
                        </div>
                        <div onClick={() => setIsOpenThree(true)} data-aos="zoom-in" className="col cursor-pointer box border border-bordercolor rounded-xl pb-[15px]">
                            <div className="image_wrap mt-4 md:mt-0">
                                <Image
                                    src={profileImg}
                                    alt="profileImg"
                                    className="w-full h-full md:h-[200px] rounded-t-xl"
                                />
                            </div>
                            <h4
                                className="text-center mt-4 cursor-pointer hover:underline text-[16px] text-prgcolor font-[600]">
                                Pages d’écriture
                            </h4>
                        </div>
                        <div onClick={() => setIsOpenFour(true)} data-aos="zoom-in" className="col cursor-pointer box border border-bordercolor rounded-xl pb-[15px]">
                            <div className="image_wrap mt-4 md:mt-0">
                                <Image
                                    src={profileImg}
                                    alt="profileImg"
                                    className="w-full h-full md:h-[200px] rounded-t-xl"
                                />
                            </div>
                            <h4
                                className="text-center mt-4 cursor-pointer hover:underline text-[16px] text-prgcolor font-[600]">
                                Cartes
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal One */}
            <div className="modal_one">
                {isOpenOne && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                        style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
                    >
                        <div className="flex justify-center relative">
                            {isOpenOne && (
                                <div
                                    className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                                    style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                                >
                                    <div ref={tabCScrollRef} className="flex justify-center">
                                        <div className="relative w-full md:max-w-4xl mt-20 mb-10 mx-6 md:mx-0">
                                            {/* Close Button outside top-right corner of popup */}
                                            <button
                                                onClick={() => setIsOpenOne(false)}
                                                className="absolute -top-[50px] md:-top-[40px] right-0 md:-right-[55px] cursor-pointer text-prgcolor hover:text-primary bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-100 z-10"
                                            >
                                                <LuX size={32}/>
                                            </button>

                                            {/* White Popup Box */}
                                            <div className="bg-white rounded-[1rem] p-6 shadow-lg">
                                                <div className="text-center">
                                                    <h4 className="text-[22px] text-prgcolor font-semibold mb-6">
                                                        Affiches
                                                    </h4>
                                                </div>
                                                {/*Tab One Content*/}
                                                <div className="tab_one_content_a">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Affiche 1
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 2_Affiche 2
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 3_Affiche 3
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 4_Affiche 4
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 5_Affiche 5
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal Two */}
            <div className="modal_two">
                {isOpenTwo && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                        style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
                    >
                        <div className="flex justify-center relative">
                            {isOpenTwo && (
                                <div
                                    className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                                    style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                                >
                                    <div ref={tabCScrollRefTwo} className="flex justify-center">
                                        <div className="relative w-full md:max-w-4xl mt-20 mb-10 mx-6 md:mx-0">
                                            {/* Close Button outside top-right corner of popup */}
                                            <button
                                                onClick={() => setIsOpenTwo(false)}
                                                className="absolute -top-[50px] md:-top-[40px] right-0 md:-right-[55px] cursor-pointer text-prgcolor hover:text-primary bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-100 z-10"
                                            >
                                                <LuX size={32}/>
                                            </button>

                                            {/* White Popup Box */}
                                            <div className="bg-white rounded-[1rem] p-6 shadow-lg">
                                                <div className="text-center">
                                                    <h4 className="text-[22px] text-prgcolor font-semibold mb-6">
                                                        Marque-pages
                                                    </h4>
                                                </div>
                                                {/*Tab One Content*/}
                                                <div className="tab_one_content_a">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Marque-page 1
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 2_Marque-page 2
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 3_Marque-page 3
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 4_Marque-page 4
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 5_Marque-page 5
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal Three */}
            <div className="modal_three">
                {isOpenThree && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                        style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
                    >
                        <div className="flex justify-center relative">
                            {isOpenThree && (
                                <div
                                    className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                                    style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                                >
                                    <div className="flex justify-center">
                                        <div className="relative w-full md:max-w-4xl mt-20 mb-10 mx-6 md:mx-0">
                                            {/* Close Button outside top-right corner of popup */}
                                            <button
                                                onClick={() => setIsOpenThree(false)}
                                                className="absolute -top-[50px] md:-top-[40px] right-0 md:-right-[55px] cursor-pointer text-prgcolor hover:text-primary bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-100 z-10"
                                            >
                                                <LuX size={32}/>
                                            </button>

                                            {/* White Popup Box */}
                                            <div className="bg-white rounded-[1rem] p-6 shadow-lg">
                                                <div className="text-center">
                                                    <h4 className="text-[22px] text-prgcolor font-semibold mb-6">
                                                        Pages d’écriture
                                                    </h4>
                                                </div>
                                                {/*Tab One Content*/}
                                                <div className="tab_one_content_a">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Page d’écriture
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal Four */}
            <div className="modal_four">
                {isOpenFour && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                        style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
                    >
                        <div className="flex justify-center relative">
                            {isOpenFour && (
                                <div
                                    className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                                    style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                                >
                                    <div className="flex justify-center">
                                        <div className="relative w-full md:max-w-4xl mt-20 mb-10 mx-6 md:mx-0">
                                            {/* Close Button outside top-right corner of popup */}
                                            <button
                                                onClick={() => setIsOpenFour(false)}
                                                className="absolute -top-[50px] md:-top-[40px] right-0 md:-right-[55px] cursor-pointer text-prgcolor hover:text-primary bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-100 z-10"
                                            >
                                                <LuX size={32}/>
                                            </button>

                                            {/* White Popup Box */}
                                            <div className="bg-white rounded-[1rem] p-6 shadow-lg">
                                                <div className="text-center">
                                                    <h4 className="text-[22px] text-prgcolor font-semibold mb-6">
                                                        Cartes
                                                    </h4>
                                                </div>
                                                {/*Tab One Content*/}
                                                <div className="tab_one_content_a">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Joyeux anniversaire
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Merci
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Bonne et heureuse année
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Bonne fête des mères
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Bonne fête des pères
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Joyeux Noël
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Joyeuses Pâques
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Bonne Journée de la Terre
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Bonne fête des professeurs
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    PDF (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal Five */}
            <div className="modal_five">
                {isOpenFive && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                        style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
                    >
                        <div className="flex justify-center relative">
                            {isOpenFive && (
                                <div
                                    className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                                    style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                                >
                                    <div className="flex justify-center">
                                        <div className="relative w-full md:max-w-4xl mt-20 mb-10 mx-6 md:mx-0">
                                            {/* Close Button outside top-right corner of popup */}
                                            <button
                                                onClick={() => setIsOpenFive(false)}
                                                className="absolute -top-[50px] md:-top-[40px] right-0 md:-right-[55px] cursor-pointer text-prgcolor hover:text-primary bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-100 z-10"
                                            >
                                                <LuX size={32}/>
                                            </button>

                                            {/* White Popup Box */}
                                            <div className="bg-white rounded-[1rem] p-6 shadow-lg">
                                                <div className="text-center">
                                                    <h4 className="text-[22px] text-prgcolor font-semibold mb-6">
                                                        Tests
                                                    </h4>
                                                </div>
                                                <div
                                                    className="tab_box block space-y-3 md:space-y-0 md:flex justify-between mx-8 items-center gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTab('a')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTab === 'a'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Niveau 1
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTab('b')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTab === 'b'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Niveau 2
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTab('c')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTab === 'c'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Niveau 3
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTab('d')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTab === 'd'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Niveau 4
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTab('e')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTab === 'e'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Niveau 5
                                                    </button>
                                                </div>

                                                {/*Tab One Content*/}
                                                <div className="mt-8 mx-8">
                                                    {activeTab === 'a' && (
                                                        <div className="tab_one_content_a">
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 1_Niveau 1_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTab === 'b' && (
                                                        <div className="tab_one_content_b">
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 2_Niveau 2_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {activeTab === 'c' && (
                                                        <div className="tab_one_content_c">
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 3_Niveau 3_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {activeTab === 'd' && (
                                                        <div className="tab_one_content_c">
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 4_Niveau 4_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {activeTab === 'e' && (
                                                        <div className="tab_one_content_c">
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="box bg-gray-100 py-2 px-4 rounded">
                                                                    <div
                                                                        className="flex items-center justify-center md:justify-start gap-1">
                                                                        <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                            Unité 5_Niveau 5_Audio
                                                                        </h4>
                                                                        <h4 className="text-[12px] text-black">
                                                                            ZIP (20 MB)
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal Six */}
            <div className="modal_six">
                {isOpenSix && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                        style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
                    >
                        <div className="flex justify-center relative">
                            {isOpenSix && (
                                <div
                                    className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                                    style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                                >
                                    <div className="flex justify-center">
                                        <div className="relative w-full md:max-w-4xl mt-20 mb-10 mx-6 md:mx-0">
                                            {/* Close Button outside top-right corner of popup */}
                                            <button
                                                onClick={() => setIsOpenSix(false)}
                                                className="absolute -top-[50px] md:-top-[40px] right-0 md:-right-[55px] cursor-pointer text-prgcolor hover:text-primary bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-100 z-10"
                                            >
                                                <LuX size={32}/>
                                            </button>

                                            {/* White Popup Box */}
                                            <div className="bg-white rounded-[1rem] p-6 shadow-lg">
                                                <div className="text-center">
                                                    <h4 className="text-[22px] text-prgcolor font-semibold mb-6">
                                                        Guides pédagogiques
                                                    </h4>
                                                </div>
                                                {/*Tab One Content*/}
                                                <div className="tab_one_content_a">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Guides pédagogiques
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Guides pédagogiques
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Guides pédagogiques
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Guides pédagogiques
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center md:justify-start gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Guides pédagogiques
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Eleves;