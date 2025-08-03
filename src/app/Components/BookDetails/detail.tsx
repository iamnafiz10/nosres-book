"use client";
import {IoIosArrowForward} from "react-icons/io";
import Image from "next/image";
import {
    LuArrowRight, LuBarcode,
    LuBookmark,
    LuBookOpenText, LuBuilding, LuCalendar1,
    LuCircleMinus,
    LuCirclePlus, LuExternalLink, LuFacebook, LuFile, LuGlobe,
    LuInfo, LuLayoutGrid, LuLibraryBig, LuLink2, LuLinkedin, LuMail, LuMenu, LuRuler,
    LuShare,
    LuStore, LuTwitter, LuWeight, LuX,
} from "react-icons/lu";
import {LiaPinterest} from "react-icons/lia";
import React, {useEffect, useRef, useState} from "react";
import bookImgone from "../../../../public/assets/images/book1.jpg";
import bookImgtwo from "../../../../public/assets/images/book2.jpg";
import bookImgthree from "../../../../public/assets/images/book3.jpg";
import bookImgfour from "../../../../public/assets/images/book4.jpg";
import bookImg from '../../../../public/assets/images/book1.jpg';

import sliderOne from '../../../../public/assets/images/slider1.jpg'
import sliderTwo from '../../../../public/assets/images/slider2.jpg'
import sliderThree from '../../../../public/assets/images/slider5.jpg'
import sliderFour from '../../../../public/assets/images/slider4.jpg'
import {HiMagnifyingGlassMinus, HiMagnifyingGlassPlus} from "react-icons/hi2";
import Link from "next/link";


// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation';
import {FcMenu} from "react-icons/fc";

function Detail() {
    // Show more description
    const [showMore, setShowMore] = useState(false);
    // Show more eloges
    const [showMoreEloges, setShowMoreEloges] = useState(false);

    // 👇️ Acheter (Button)
    const [isAcheterVisible, setAcheterVisible] = useState(false);
    const dropdownACRef = useRef<HTMLDivElement>(null);

    const handleAcheterClick = () => {
        setAcheterVisible(!isAcheterVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownACRef.current &&
                !dropdownACRef.current.contains(event.target as Node)
            ) {
                setAcheterVisible(false);
            }
        };

        if (isAcheterVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isAcheterVisible]);

    // 👇️ Details (Icon)
    const [isDetailsVisible, setDetailsVisible] = useState(false);
    const detailsRef = useRef<HTMLDivElement>(null);
    const dropdownDetailsRef = useRef<HTMLDivElement>(null);
    const handleDetailsClick = () => {
        if (dropdownDetailsRef.current) {
            if (isDetailsVisible) {
                dropdownDetailsRef.current.classList.remove('show-details-dropdown');
            } else {
                dropdownDetailsRef.current.classList.add('show-details-dropdown');
            }
        }
        setDetailsVisible(prev => !prev);
    };
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;

            if (
                detailsRef.current &&
                !detailsRef.current.contains(target)
            ) {
                if (dropdownDetailsRef.current?.classList.contains('show-details-dropdown')) {
                    dropdownDetailsRef.current.classList.remove('show-details-dropdown');
                    setDetailsVisible(false);
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // 👇️ Share (Icon)
    const [isShareVisible, setShareVisible] = useState(false);
    const shareRef = useRef<HTMLDivElement>(null);
    const dropdownShareRef = useRef<HTMLDivElement>(null);
    const handleShareClick = () => {
        if (dropdownShareRef.current) {
            if (isShareVisible) {
                dropdownShareRef.current.classList.remove('show-share-dropdown');
            } else {
                dropdownShareRef.current.classList.add('show-share-dropdown');
            }
        }
        setShareVisible(prev => !prev);
    };
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;

            if (
                shareRef.current &&
                !shareRef.current.contains(target)
            ) {
                if (dropdownShareRef.current?.classList.contains('show-share-dropdown')) {
                    dropdownShareRef.current.classList.remove('show-share-dropdown');
                    setShareVisible(false);
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Book view slider
    const [isOpen, setIsOpen] = useState(false);

    // Slider Image Zoom in/out
    const [activeIndex, setActiveIndex] = useState(0);

    const [zoomIndex, setZoomIndex] = useState(0); // Starts at 1x
    const ZOOM_LEVELS = [1, 2.1, 3.1]; // 3 fixed levels

    const handleZoomIn = () => {
        setZoomIndex((prev) => Math.min(prev + 1, ZOOM_LEVELS.length - 1));
    };

    const handleZoomOut = () => {
        setZoomIndex((prev) => Math.max(prev - 1, 0));
    };

    // Modal open page scroll off
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up just in case
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    // List change the slider image
    const [selectedPageIndex, setSelectedPageIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    // Mobile menu for slider
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    return (
        <>
            <section id="detail-section">
                <div className="container pt-16">
                    <div className="wrapper mt-8 flex items-center gap-2">
                        <div className="text_wrap">
                            <h4 className="text-[14px] text-graycolor hover:underline cursor-pointer">Accueil</h4>
                        </div>

                        <div className="icon">
                            <IoIosArrowForward size={15} className="text-primary"/>
                        </div>

                        <div className="text_wrap">
                            <h4 className="text-[14px] text-graycolor hover:underline cursor-pointer">Maternelle</h4>
                        </div>

                        <div className="icon">
                            <IoIosArrowForward size={15} className="text-primary"/>
                        </div>
                        <div className="text_wrap">
                            <h4 className="text-[14px] text-graycolor">
                                A Calculated Restraint
                            </h4>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                        <div className="col lg:col-span-3">
                            <Image src={bookImg} className="w-full" alt="bookImg"/>
                            <button onClick={() => setIsOpen(true)} type='button'
                                    className="mt-4 py-2 block w-full text-primary hover:text-white hover:bg-primary cursor-pointer gap-2 border border-primary rounded text-[14px] flex items-center justify-center">
                                <span className="icon">
                                    <LuBookOpenText size={15} className=""/>
                                </span>
                                Regarder à l'intérieur
                            </button>
                        </div>
                        <div className="col lg:col-span-6">
                            <h4 className="text-prgcolor text-[24px] font-semibold">
                                A Calculated Restrain
                            </h4>
                            <h4 className="text-[16px] text-graycolor">
                                What Allied Leaders Said about the Holocaust
                            </h4>
                            <h4 className="text-[14px] mt-4">
                                Auteur (s): <Link href='#' className="text-primary hover:underline">John Doe</Link>,
                                <Link href='#' className="text-primary hover:underline"> Joan Appleseed</Link>, <Link
                                href='#' className="text-primary hover:underline">Joan Appleseed</Link>
                            </h4>

                            <div
                                className="flex items-center justify-between gap-4 text-[14px] mt-2 border-b border-bordercolor pb-1">
                                <h4>
                                    Date de parution: <span className="text-graycolor">May 6, 2025</span>
                                </h4>
                                <div className="flex items-center gap-4">
                                    <button type='button'
                                            className=" cursor-pointer py-1 px-6 text-[12px] rounded-full bg-[#F4F4F4]">
                                        Papier
                                    </button>
                                </div>

                                <div
                                    className="flex items-center justify-end gap-4 pb-4 mt-4">
                                    <div className="icon cursor-pointer">
                                        <LuBookmark size={17} className="text-graycolor hover:text-primary"/>
                                    </div>
                                    <div ref={detailsRef} className="icon cursor-pointer relative">
                                        <LuInfo onClick={handleDetailsClick} size={17}
                                                className="text-graycolor hover:text-primary"/>
                                        <div ref={dropdownDetailsRef} id="details_dropdown"
                                             className="detail-dropdown-menu z-10 absolute text-gray-700 pt-1 bg-white rounded border border-bordercolor">
                                            <div className="container">
                                                <div className="flex items-center gap-1 cursor-pointer">
                                                        <span>
                                                            <LuLayoutGrid size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        Enfants
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuBuilding size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        Harvard University Press
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuCalendar1 size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        May 6, 2025
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuLibraryBig size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-primary">
                                                        The Charles Eliot Norton Lectures
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuGlobe size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        English
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuFile size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        352
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuBarcode size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        978-0674293649
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuWeight size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        1.15 pounds
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuRuler size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        5.5 x 0.87 x 8.25 inches
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div ref={shareRef} className="icon cursor-pointer relative">
                                        <LuShare onClick={handleShareClick} size={16}
                                                 className="text-graycolor hover:text-primary"/>
                                        <div ref={dropdownShareRef} id="share_dropdown"
                                             className="share-dropdown-menu z-10 absolute text-gray-700 pt-1 bg-white rounded border border-bordercolor">
                                            <div className="container">
                                                <div className="flex items-center gap-1 cursor-pointer">
                                                        <span>
                                                            <LuFacebook size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        Facebook
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuLinkedin size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        LinkedIn
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuTwitter size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        X
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LiaPinterest size={17} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        Pinterest
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuMail size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        Email
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuLink2 size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        Link
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Book Description*/}
                            <div className="book_description mt-4">
                                <h4 className="text-[16px] text-black font-semibold">
                                    Description
                                </h4>

                                <div className="relative overflow-hidden">
                                    {/*Default description*/}
                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                        <b>
                                            An eminent historian of the Holocaust examines why Churchill, Roosevelt, and
                                            Stalin, though faced with mounting evidence of the Nazi extermination of
                                            Jews,
                                            were reluctant to speak out against the atrocities.
                                        </b>
                                        <br/>
                                        <br/>
                                        The Allied leaders rarely spoke directly about the Holocaust in public. When
                                        Churchill and Stalin alluded to Nazi mass murder of civilians in early speeches,
                                        they
                                        said much less than they knew. Not until December 1942 did Allied governments
                                        issue a joint statement about Nazi Germany’s policy of exterminating the Jews of
                                        Europe. Roosevelt deferred his own public statement until March 1944. Why didn’t
                                        these leaders speak up sooner?
                                    </h4>

                                    {/* White fade overlay */}
                                    {!showMore && (
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                    )}

                                    {/*See more description*/}
                                    {showMore && (
                                        <h4 className="mt-2 text-[14px] text-prgcolor">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at deleniti
                                            dolores
                                            eaque id iure mollitia similique. Earum error et illo unde veniam. Amet
                                            culpa
                                            esse
                                            nam nesciunt odio quisquam repellendus? Architecto ducimus enim id ipsam
                                            iure
                                            libero
                                            nesciunt odio officiis perferendis, quasi rerum sunt vitae voluptas. Cum
                                            eveniet,
                                            facere.
                                        </h4>
                                    )}
                                </div>

                                {/* See more / See less icon */}
                                <div
                                    onClick={() => setShowMore(!showMore)}
                                    className="icon_wrap mt-4 flex items-center gap-1 text-primary cursor-pointer"
                                >
                                    {showMore ? <LuCircleMinus size={20}/> : <LuCirclePlus size={20}/>}
                                    <h4 className="text-[14px]">
                                        {showMore ? 'Voir moins' : 'Voir plus'}
                                    </h4>
                                </div>
                            </div>

                            {/*Book Eloges*/}
                            <div className="book_eloges mt-6">
                                <h4 className="text-[16px] text-black font-semibold">
                                    Éloges
                                </h4>

                                {/*Default eloges*/}
                                <div className="bg-blue-50 p-4 rounded mt-4">
                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                        A solid guide to a crisis in which leaders found themselves constrained by<br/>
                                        many obstacles from doing more.
                                    </h4>
                                    <h4 className="text-[14px] mt-1">
                                        —Richard Overy, Literary Review
                                    </h4>
                                </div>

                                {/*See more description*/}
                                {showMoreEloges && (
                                    <>
                                        <div className="bg-blue-50 p-4 rounded mt-4">
                                            <h4 className="mt-2 text-[14px] text-prgcolor">
                                                A solid guide to a crisis in which leaders found themselves constrained
                                                by<br/>
                                                many obstacles from doing more.
                                            </h4>
                                            <h4 className="text-[14px] mt-1">
                                                —Richard Overy, Literary Review
                                            </h4>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded mt-4">
                                            <h4 className="mt-2 text-[14px] text-prgcolor">
                                                A solid guide to a crisis in which leaders found themselves constrained
                                                by<br/>
                                                many obstacles from doing more.
                                            </h4>
                                            <h4 className="text-[14px] mt-1">
                                                —Richard Overy, Literary Review
                                            </h4>
                                        </div>
                                    </>
                                )}

                                {/* See more / See less icon */}
                                <div
                                    onClick={() => setShowMoreEloges(!showMoreEloges)}
                                    className="icon_wrap mt-4 flex items-center gap-1 text-primary cursor-pointer"
                                >
                                    {showMoreEloges ? <LuCircleMinus size={20}/> : <LuCirclePlus size={20}/>}
                                    <h4 className="text-[14px]">
                                        {showMoreEloges ? 'Voir moins' : 'Voir plus'}
                                    </h4>
                                </div>
                            </div>

                            <h4 className="text-[16px] text-black font-semibold mt-8">
                                Prix
                            </h4>
                            <h4 className="mt-1 text-[14px] text-prgcolor">
                                2024, Winner of the PROSE Award in Business, Finance, and Management
                            </h4>

                            <h4 className="text-[16px] text-black font-semibold mt-8">
                                Auteur (s)
                            </h4>
                            <h4 className="mt-1 text-[14px] text-prgcolor">
                                Richard Breitman is Distinguished Professor Emeritus at American University. His
                                many books include The Berlin Mission: The American Who Resisted Nazi Germany from
                                Within; FDR and the Jews, coauthored with Allan J. Lichtman; Official
                                Secrets: What the Nazis Planned, What the British and Americans Knew; and The
                                Architect of Genocide: Himmler and the Final Solution.
                            </h4>

                            <h4 className="text-[16px] text-black font-semibold mt-8">
                                Détails du livre
                            </h4>
                            <div className="wrap mt-1 space-y-2">
                                <h4 className="text-[14px] text-prgcolor font-semibold">
                                    Catégorie (s) :
                                    <span className="text-graycolor font-normal"> Enfants</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor font-semibold">
                                    Maison d’édition :
                                    <span className="text-graycolor font-normal"> Harvard University Press</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor font-semibold">
                                    Date de parution :
                                    <span className="text-graycolor font-normal"> May 6, 2025</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor font-semibold">
                                    Collection
                                    <span
                                        className="text-primary cursor-pointer font-normal"> The Charles Eliot Norton Lectures</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor font-semibold">
                                    Langue :
                                    <span className="text-graycolor font-normal"> English</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor font-semibold">
                                    Nombre de pages :
                                    <span className="text-graycolor font-normal"> 352 pages</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor font-semibold">
                                    Poids :
                                    <span className="text-graycolor font-normal"> 1.15 pounds</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor font-semibold">
                                    Dimensions :
                                    <span className="text-graycolor font-normal"> 5.5 x 0.87 x 8.25 inches</span>
                                </h4>
                            </div>

                        </div>
                        <div className="col lg:col-span-3 ">
                            <div
                                className="box relative bg-[#E6E8EA] flex flex-col justify-center rounded-xl py-8 px-4">
                                <h4 className="text-[18px] font-semibold text-center">
                                    $35.00
                                </h4>
                                <div className="icon flex justify-center mt-2">
                                    <div className="p-4 bg-white rounded-full">
                                        <LuStore size={35} className="text-primary"/>
                                    </div>
                                </div>

                                <div ref={dropdownACRef} className="inline-block">
                                    <button
                                        onClick={handleAcheterClick}
                                        type="button"
                                        className="mt-3 py-2 w-full px-4 cursor-pointer border border-primary hover:bg-white hover:text-primary flex items-center justify-center gap-2 text-white rounded bg-primary text-[14px]"
                                    >
                                        <span>
                                          <LuArrowRight size={15}/>
                                        </span>
                                        Acheter ailleurs
                                    </button>

                                    {isAcheterVisible && (
                                        <div
                                            id="acheter_dropdown"
                                            className="absolute w-full top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-2 text-gray-700 pt-1 bg-white rounded shadow border border-bordercolor z-10"
                                        >
                                            <div className="h-[230px] lg:h-[250px] w-full px-4 pt-3">
                                                <div className="title_box bg-[#E6E8EA] p-2 rounded">
                                                    <h4 className="text-[14px] text-prgcolor">
                                                        Nous vendons nos titres par
                                                        l’intermédiaire d’autres sociétés.
                                                    </h4>
                                                </div>

                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuExternalLink size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        IngramSpark
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuExternalLink size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        Amazon
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuExternalLink size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        Barnes and Noble
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuExternalLink size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        Amazon
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                                                        <span>
                                                            <LuExternalLink size={15} className="text-primary"/>
                                                        </span>
                                                    <h4 className="hover:underline text-[14px] text-prgcolor">
                                                        Barnes and Noble
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Books*/}
                    <h4 className="text-prgcolor text-[18px] font-semibold mt-14">
                        De cet (ces) auteur(s)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
                        <div className="col">
                            <div className="relative">
                                <Image src={bookImgone} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                       alt="bookImgone"/>
                                <h4 className="absolute -top-[9px] left-1/2 transform -translate-x-1/2 text-[12px] text-white bg-primary rounded text-center w-[100px]">
                                    À PARAÎTRE
                                </h4>
                            </div>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <div className="relative">
                                <Image src={bookImgtwo} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                       alt="bookImgtwo"/>
                                <h4 className="absolute -top-[9px] left-1/2 transform -translate-x-1/2 text-[12px] text-white bg-primary rounded text-center w-[100px]">
                                    NOUVEAUTÉ
                                </h4>
                            </div>

                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <Image src={bookImgthree} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="bookImgthree"/>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <Image src={bookImgfour} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="colorBookImg"/>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <Image src={bookImgfour} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="colorBookImg"/>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                    </div>

                    {/*Books*/}
                    <h4 className="text-prgcolor text-[18px] font-semibold mt-14">
                        Recommendations
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
                        <div className="col">
                            <div className="relative">
                                <Image src={bookImgone} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                       alt="bookImgone"/>
                                <h4 className="absolute -top-[9px] left-1/2 transform -translate-x-1/2 text-[12px] text-white bg-primary rounded text-center w-[100px]">
                                    À PARAÎTRE
                                </h4>
                            </div>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <div className="relative">
                                <Image src={bookImgtwo} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                       alt="bookImgtwo"/>
                                <h4 className="absolute -top-[9px] left-1/2 transform -translate-x-1/2 text-[12px] text-white bg-primary rounded text-center w-[100px]">
                                    NOUVEAUTÉ
                                </h4>
                            </div>

                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <Image src={bookImgthree} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="bookImgthree"/>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <Image src={bookImgfour} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="colorBookImg"/>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <Image src={bookImgfour} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="colorBookImg"/>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            {/*Book View Modal*/}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-[#4D4C4C] flex items-center justify-center">
                    <div className="relative p-0 w-screen h-screen overflow-hidden flex flex-col">
                        {/* Top full-width close button bar */}
                        <div
                            className="bg-white absolute left-0 top-0 z-10 w-full flex items-center justify-between py-4 px-4 mt-[8px] md:mt-0">
                            <h4 className="text-[16px] text-prgcolor font-semibold">
                                A Calculated Restraint
                            </h4>
                            <div className="wrap flex items-center gap-4">
                                <button onClick={() => setIsPanelOpen(prev => !prev)}
                                        className="block lg:hidden text-graycolor hover:text-primary cursor-pointer"
                                >
                                    <LuMenu size={25}/>
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-graycolor hover:text-primary cursor-pointer"
                                    aria-label="Close modal"
                                >
                                    <LuX size={28}/>
                                </button>
                            </div>
                        </div>

                        {/* Two-column layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center flex-grow">
                            {/* Slider (Left) */}
                            <div className="col lg:col-span-9 h-full flex flex-grow">
                                <Swiper
                                    onBeforeInit={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    slidesPerView={2}
                                    allowTouchMove={false}
                                    centeredSlides={true}
                                    spaceBetween={30}
                                    // pagination={{type: 'fraction'}}
                                    navigation={zoomIndex === 0}
                                    modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                    onSlideChange={(swiper) => {
                                        setActiveIndex(swiper.activeIndex);
                                        setSelectedPageIndex(swiper.activeIndex);
                                    }}
                                >
                                    {[sliderOne, sliderTwo, sliderThree, sliderFour].map((imgSrc, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className={`${index === activeIndex ? 'z-50 relative' : 'z-10 relative'}`}
                                        >
                                            <div
                                                className="w-full h-full flex items-center justify-center transition-transform duration-300 ease-in-out"
                                                style={{
                                                    transform: index === activeIndex ? `scale(${ZOOM_LEVELS[zoomIndex]})` : 'scale(1)',
                                                    transformOrigin: 'center center',
                                                }}
                                            >
                                                <Image
                                                    src={imgSrc}
                                                    alt={`slide-${index}`}
                                                    className="w-auto max-w-full max-h-full object-cover"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Right Content */}
                            <div className="col lg:col-span-3 bg-white h-full hidden lg:block mt-[120px]">
                                <div className="bg-primary py-2 px-6 mt-[0px]">
                                    <h4 className="text-[16px] font-semibold text-white">
                                        Pages
                                    </h4>
                                </div>

                                <ul className="px-6 py-2 space-y-2 text-[14px]">
                                    {['Page de couverture', 'Table des matières', 'Unité 1'].map((label, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                setSelectedPageIndex(index);
                                                setActiveIndex(index); // update Swiper's index
                                                swiperRef.current?.slideTo(index); // move Swiper
                                                setZoomIndex(0);
                                            }}
                                            className={`cursor-pointer border-b border-bordercolor pb-2 ${
                                                selectedPageIndex === index ? 'text-primary' : 'text-prgcolor hover:text-primary'
                                            }`}
                                        >
                                            {label}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/*Right content mobile*/}
                            <div
                                className={`wrapper z-10 h-full bg-white absolute top-[68px] transition-all duration-300 ease-in-out ${
                                    isPanelOpen ? 'right-0' : '-right-[800px]'
                                }`}>
                                <div className="bg-primary py-2 px-6 mt-[0px]">
                                    <h4 className="text-[16px] font-semibold text-white">
                                        Nafiz
                                    </h4>
                                </div>
                                <ul className="px-6 py-2 space-y-2 text-[14px]">
                                    {['Page de couverture', 'Table des matières', 'Unité 1'].map((label, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                setSelectedPageIndex(index);
                                                setActiveIndex(index); // update Swiper's index
                                                swiperRef.current?.slideTo(index); // move Swiper
                                                setZoomIndex(0);
                                            }}
                                            className={`cursor-pointer border-b border-bordercolor pb-2 ${
                                                selectedPageIndex === index ? 'text-primary' : 'text-prgcolor hover:text-primary'
                                            }`}
                                        >
                                            {label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div
                            className="bg-[#2E2E2E] absolute z-10 left-0 bottom-0 w-full lg:w-[75%] flex items-center justify-between py-4 px-4 mt-[8px] md:mt-0">
                            <h4 className="text-[16px] text-white font-semibold">
                                {/*A Calculated Restraint*/}
                            </h4>

                            <div className="zoom_icons flex items-center gap-2">
                                <HiMagnifyingGlassMinus
                                    size={23}
                                    className={`cursor-pointer ${
                                        zoomIndex === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-white'
                                    }`}
                                    onClick={zoomIndex === 0 ? undefined : handleZoomOut}
                                />
                                <HiMagnifyingGlassPlus
                                    size={23}
                                    className={`cursor-pointer ${
                                        zoomIndex === ZOOM_LEVELS.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-white'
                                    }`}
                                    onClick={zoomIndex === ZOOM_LEVELS.length - 1 ? undefined : handleZoomIn}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
        ;
}

export default Detail;