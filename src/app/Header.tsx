'use client';
import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link'
import {AiOutlineClose} from "react-icons/ai";
import {IoIosArrowDown} from "react-icons/io";
import {HiOutlineBars3} from "react-icons/hi2";
import LogoImg from '../../public/assets/images/books-logo-old.svg';
import Image from "next/image";
import {HiUserCircle} from "react-icons/hi";
import {Modal, ModalBody, ModalHeader} from "flowbite-react";
import {
    LuChartNoAxesColumnIncreasing,
    LuCircleArrowRight,
    LuLibraryBig,
    LuShapes,
    LuUserRoundPlus
} from "react-icons/lu";
import {CiClock2} from "react-icons/ci";
import {IoSearchOutline} from "react-icons/io5";


function Header() {
    // 👇️ Toggle class on click Show And Hide Menu Bar (Button)
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleClick = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            if (isMenuVisible) {
                nav.classList.remove('show_menu');
            } else {
                nav.classList.add('show_menu');
            }
            setMenuVisible(!isMenuVisible);
        }
    };

    // 👇️ Account (Icon)
    const [isAccountVisible, setAccountVisible] = useState(false);
    const dropdownAccountRef = useRef(null);
    const handleAccountClick = () => {
        setAccountVisible(!isAccountVisible);
    };

    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (dropdownAccountRef.current && !dropdownAccountRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setAccountVisible(false);
            }
        };

        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    // Mobile Account popup
    const [openModal, setOpenModal] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);

    // ✅ Custom outside click detector
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                openModal &&
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setOpenModal(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openModal]);

    // Mobile menu dropdown
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const toggleDropdown = (key: string) => {
        setOpenDropdown(prev => (prev === key ? null : key));
    };

    // Search Text
    const [searchText, setSearchText] = useState('');

    // For make searchbar width bigger when click
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                inputRef.current &&
                !inputRef.current.contains(target) &&
                !(target && target.classList && target.classList.contains('set_input_under_right'))
            ) {
                setIsSearchExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleSearchExpandedClick = () => {
        setIsSearchExpanded(true);
    };

    const handleClearText = () => {
        setSearchText('');
    };

    const handleInputBlur = () => {
        setIsSearchExpanded(false);
    };

    // const location = useLocation();

    useEffect(() => {
        const pathname = window.location.pathname;
        if (pathname === '/search-result') {
            // Preserve search text only on search details page
            const storedSearchText = localStorage.getItem('searchText');
            if (storedSearchText) {
                setSearchText(storedSearchText);
            }
        } else {
            // Clear search text on other pages
            setSearchText('');
            localStorage.removeItem('searchText');
        }
    }, []);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const query = encodeURIComponent(searchText);
            window.location.href = `/search-result?query=${query}`;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        localStorage.setItem('searchText', e.target.value);
    };


    // For Mobile-search-bar -------------------------------------------------------------------------------------
    const [mobileSearchText, setMobileSearchText] = useState('');
    const [isMobileSearchExpanded, setIsMobileSearchExpanded] = useState(false);
    const mobileInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const pathname = window.location.pathname;
        if (pathname === '/search-result') {
            // Preserve search text only on search details page
            const storedSearchText = localStorage.getItem('mobileSearchText');
            if (storedSearchText) {
                setMobileSearchText(storedSearchText);
            }
        } else {
            // Clear search text on other pages
            setMobileSearchText('');
            localStorage.removeItem('mobileSearchText');
        }
    }, []);


    const handleMobileSearchExpandedClick = () => {
        setIsMobileSearchExpanded(true);
    };

    const handleMobileClearText = () => {
        setMobileSearchText('');
    };

    const handleMobileInputBlur = () => {
        setIsMobileSearchExpanded(false);
    };

    const handleMobileKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const query = encodeURIComponent(mobileSearchText);
            window.location.href = `/search-result?query=${query}`;
        }
    };

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMobileSearchText(e.target.value);
        localStorage.setItem('mobileSearchText', e.target.value);
    };

    const [isVisible, setIsVisible] = useState(true);
    const handleDismiss = () => {
        setIsVisible(false); // This will hide the acc_wrap div
    };
    // Check if the current path is "sitea-contact"
    const [shouldDisplay, setShouldDisplay] = useState(false);
    useEffect(() => {
        // Example: Set shouldDisplay based on some condition
        const currentPath = window.location.pathname;
        if (currentPath === '/sitea-contact') {
            setShouldDisplay(true);  // State is updated when the path matches
        } else {
            setShouldDisplay(false);  // State is updated otherwise
        }
    }, []);

    const [isVisibleTwo] = useState(true);

    // Check if the current path is "sitea-contact"
    const [shouldDisplayTwo, setshouldDisplayTwo] = useState(false);
    useEffect(() => {
        // Example: Set shouldDisplayTwo based on some condition
        const currentPath = window.location.pathname;
        if (currentPath === '/sitea-contact') {
            setshouldDisplayTwo(true);
        } else {
            setshouldDisplayTwo(false);
        }
    }, []);
    return (
        <>
            <section id="header-section" className="relative">
                <header
                    className="py-4 lg:py-2 flex items-center h-[50px] shadow-xs bg-white w-full lg:relative z-50"
                    style={{
                        position: 'fixed',
                    }}
                >
                    <div className="container flex lg:grid lg:grid-cols-12 items-center justify-between">
                        <div className="logo col col-span-3">
                            <Link href='/' className="flex items-center gap-2 logo_header">
                                <Image src={LogoImg} className="w-[20px] md:w-[30px] h-full md:h-[30px]" alt="LogoImg"/>
                                <span className="font-semibold text-[18px] md:text-[22px] uppercase text-primary">Nosres Books</span>
                            </Link>
                        </div>

                        {/* Search */}
                        <div
                            className={`col lg:col-span-4 hidden lg:flex search-bar relative ${isSearchExpanded ? 'w-80' : 'w-52'}`}>
                            <input
                                ref={inputRef}
                                type="text"
                                className={`border text-[14px] border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300 ${isSearchExpanded ? 'w-80' : 'w-52'}`}
                                placeholder=" Rechercher un livre"
                                value={searchText}
                                onChange={handleChange}
                                onFocus={handleSearchExpandedClick}
                                onKeyPress={handleKeyPress} // Handle Enter key press
                                style={{
                                    position: 'absolute',
                                    zIndex: 999, // Ensure it's above other content
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    left: 0,
                                }}
                            />

                            <div id="search_dropdown_menu"
                                 className={`search-dropdown-menu ${isSearchExpanded ? 'h-[180px] pt-2 opacity-100' : 'opacity-0 h-0'} overflow-hidden top-6 z-50 absolute text-gray-700 bg-white rounded shadow border border-bordercolor`}>
                                <div className="container p-0">
                                    <div
                                        className="col px-3 pl-[14px] flex items-center pb-2 w-80 border-b border-bordercolor">
                                        <div className="flex items-center gap-3 justify-between w-full">
                                            <div className="left flex items-center gap-1">
                                                <CiClock2 size={20} className="text-primary"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                        Recent Searches
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <button type='button'
                                                        className="text-[14px] text-primary cursor-pointer">Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="pt-2 px-3 pl-[14px] space-y-2 text-[14px] text-[#828D9E]">
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres book</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres book</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres book</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                <IoSearchOutline
                                    className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"/>
                            </div>

                            <div
                                className={`set_input_under_right absolute right-0 inset-y-0 flex items-center cursor-pointer ${searchText.length > 0 ? 'opacity-100' : 'opacity-0'}`}
                                onClick={handleClearText}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="-ml-1 mr-3 h-4 w-4 z-[9999] text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            {isSearchExpanded && <div className="overlay-blur" onClick={handleInputBlur}></div>}
                        </div>

                        <div className="col lg:col-span-5">
                            <div
                                className="h-full nav hidden lg:flex text-end items-center justify-end text-[14px] gap-8">
                                <div className="one group">
                                    <Link href='/'
                                          className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                        Nos livres
                                        <IoIosArrowDown className="icon transform group-hover:rotate-180 transition"/>
                                    </Link>

                                    {/* Dropdown Mega Menu */}
                                    <div
                                        className="for-who-we-are absolute invisible group-hover:visible max-h-0 group-hover:max-h-[220px] transition-all ease-linear duration-300 top-full left-0 right-0 overflow-hidden w-full bg-white border border-b border-bordercolor">
                                        <div className="container">
                                            <div className="grid grid-cols-3 gap-2 h-[200px] pt-2 pb-0">
                                                <div className="col h-[85px] cursor-pointer">
                                                    <div
                                                        className="flex items-center gap-1 pb-2">
                                                        <div className="icon">
                                                            <LuShapes size={16}
                                                                      className="text-primary"/>
                                                        </div>
                                                        <h2 className="text-graycolor font-normal text-[12px]">
                                                            SÉLECTIONS
                                                        </h2>
                                                    </div>

                                                    <ul className="mt-1 space-y-2 text-prgcolor text-[12px] text-left">
                                                        <li>
                                                            <Link href='#'
                                                                  className="hover:text-primary">Nouveautés</Link>
                                                        </li>
                                                        <li>
                                                            <Link href='#' className="hover:text-primary">À
                                                                paraître</Link>
                                                        </li>
                                                        <li>
                                                            <Link href='#' className="hover:text-primary">
                                                                Ressources téléchargeables
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col h-[85px] cursor-pointer">
                                                    <div
                                                        className="flex items-center gap-1 pb-2">
                                                        <div className="icon">
                                                            <LuChartNoAxesColumnIncreasing size={16}
                                                                                           className="text-primary"/>
                                                        </div>
                                                        <h2 className="text-graycolor font-normal text-[12px]">
                                                            NIVEAUX
                                                        </h2>
                                                    </div>

                                                    <ul className="mt-1 space-y-2 text-prgcolor text-[12px] text-left">
                                                        <li>
                                                            <Link href='#'
                                                                  className="hover:text-primary">Maternelle</Link>
                                                        </li>
                                                        <li>
                                                            <Link href='#'
                                                                  className="hover:text-primary flex items-center gap-1">
                                                                Primaire
                                                                <span
                                                                    className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">COMING SOON</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href='#'
                                                                  className="hover:text-primary flex items-center gap-1">
                                                                Secondaire
                                                                <span
                                                                    className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">COMING SOON</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href='#'
                                                                  className="hover:text-primary flex items-center gap-1">
                                                                Supérieur
                                                                <span
                                                                    className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">COMING SOON</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href='#'
                                                                  className="hover:text-primary flex items-center gap-1">
                                                                Tous les niveaux
                                                                <span
                                                                    className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">COMING SOON</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col h-[85px] cursor-pointer">
                                                    <div
                                                        className="flex items-center gap-1 pb-2">
                                                        <div className="icon">
                                                            <LuLibraryBig size={14}
                                                                          className="text-primary"/>
                                                        </div>
                                                        <h2 className="text-graycolor font-normal text-[12px]">
                                                            NOS COLLECTIONS
                                                        </h2>
                                                    </div>

                                                    <ul className="mt-1 space-y-2 text-prgcolor text-[12px] text-left">
                                                        <li>
                                                            <Link href='#'
                                                                  className="hover:text-primary flex items-center gap-1">
                                                                Voyage Méthode de lecture
                                                                <span
                                                                    className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">COMING SOON</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href='#' className="hover:text-primary">Collection
                                                                2</Link>
                                                        </li>
                                                        <li>
                                                            <Link href='#' className="hover:text-primary">
                                                                Collection 3
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href='#' className="hover:text-primary">
                                                                Toutes nos collections
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="two group">
                                    <Link href='/'
                                          className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                        Ressources
                                    </Link>
                                </div>
                                <div className="three group">
                                    <Link href='/'
                                          className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                        À propos
                                    </Link>
                                </div>
                                <div className="four">
                                    <div className="dropdown inline-block relative">
                                        <div onClick={handleAccountClick}
                                             ref={dropdownAccountRef}
                                             className="mt-2 text-center cursor-pointer text-primary transition relative">
                                            <HiUserCircle size={35}/>
                                        </div>

                                        {isAccountVisible &&
                                            <div id="account_dropdown_menu"
                                                 className="account-dropdown-menu absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border border-bordercolor">
                                                <div className="container text-left">
                                                    <div className="col flex items-center px-2 h-[85px] w-full">
                                                        <div
                                                            className="flex items-center gap-3 border-b border-bordercolor pb-3 w-full">
                                                            <HiUserCircle size={70} className="text-primary"/>
                                                            <div className="text">
                                                                <h2 className="text-prgcolor font-semibold text-[14px]">
                                                                    Compte Nosres
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4 className="mt-2 text-[14px] text-graycolor">
                                                        <Link href='#' className="text-primary">
                                                            Connectez-vous
                                                        </Link> à votre compte Nosres ou <Link href='#'
                                                                                               className="text-primary">
                                                        créez-en
                                                    </Link> un.
                                                    </h4>
                                                    <h4 className="mt-3 text-[14px] text-graycolor">
                                                        De nombreuses ressources pédagogiques
                                                        complémentaires aux manuels scolaires
                                                        peuvent être téléchargées gratuitement
                                                        sur le site.
                                                    </h4>
                                                    <div className="flex justify-start">
                                                        <Link href='/'
                                                              className="mt-2 w-full py-2 pl-2 flex text-[14px] items-center justify-start gap-2 border rounded text-primary hover:bg-primary hover:text-white hover:border-primary">
                                                            <div className="icon">
                                                                <LuCircleArrowRight size={20} className=""/>
                                                            </div>
                                                            Connectez-vous
                                                        </Link>
                                                    </div>
                                                    <div className="flex justify-start">
                                                        <Link href='/'
                                                              className="mt-2 w-full py-2 pl-2 flex text-[14px] items-center justify-start gap-2 border rounded text-primary bg-primary hover:bg-[#3A5F8A] text-white hover:text-white hover:border-primary">
                                                            <div className="icon">
                                                                <LuUserRoundPlus size={20} className=""/>
                                                            </div>
                                                            Créez votre compte
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab / Mobile Icons */}
                        <div className="lg:hidden tab-mobile flex items-center justify-end gap-2">
                            <div onClick={handleClick}
                                 className="text-center text-gray-700 hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    {isMenuVisible ? <AiOutlineClose/> : <HiOutlineBars3/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
                <div id="mobile_menu" className="block lg:hidden bg-white z-50 overflow-hidden w-full h-[100%]">
                    <div className="navbar-wrapper px-4 pt-20 space-y-5">
                        <div
                            className={`block lg:hidden search-bar-mobile relative ${isMobileSearchExpanded ? 'w-full' : 'w-full'}`}>
                            <input
                                ref={mobileInputRef}
                                type="text"
                                className={`border text-[14px] border-bordercolor rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition transition-all duration-500 ${isMobileSearchExpanded ? 'w-full transition transition-all' : 'w-full transition transition-all'}`}
                                placeholder="Rechercher un livre"
                                value={mobileSearchText}
                                onChange={handleMobileChange}
                                onFocus={handleMobileSearchExpandedClick}
                                onBlur={handleMobileInputBlur}
                                onKeyPress={handleMobileKeyPress}
                                style={{
                                    position: 'absolute',
                                    zIndex: 999,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    left: 0,
                                }}
                            />


                            <div id="search_dropdown_menu"
                                 className={`search-dropdown-menu ${isMobileSearchExpanded ? 'h-[180px] w-full pt-2 opacity-100' : 'opacity-0 h-0'} overflow-hidden top-6 z-50 absolute text-gray-700 bg-white rounded shadow border border-bordercolor`}>
                                <div className="container-full pb-0">
                                    <div className="col px-3 flex items-center pb-2 w-full border-b border-bordercolor">
                                        <div className="flex items-center gap-3 justify-between w-full">
                                            <div className="left flex items-center gap-1">
                                                <CiClock2 size={20} className="text-primary"/>
                                                <div className="text">
                                                    <h4 className="text-[#252C32] font-semibold text-[16px]">
                                                        Recent Searches
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <button type='button'
                                                        className="text-[14px] text-primary cursor-pointer">
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="pt-2 px-3 pl-[14px] space-y-2 text-[14px] text-[#828D9E]">
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres book</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres book</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='/search-result'>nosres book</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                <IoSearchOutline
                                    className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"/>
                            </div>

                            <div
                                className={`set_input_under_right absolute right-0 inset-y-0 flex items-center cursor-pointer ${mobileSearchText.length > 0 ? 'opacity-100' : 'opacity-0'}`}
                                onClick={handleMobileClearText}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="-ml-1 mr-3 h-4 w-4 z-[9999] text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>

                            {isMobileSearchExpanded &&
                                <div className="overlay-blur" onClick={handleMobileInputBlur}></div>}
                        </div>

                        <details className="group pb-0 p-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Nos livres
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-4">
                                <li onClick={() => toggleDropdown('selections')}
                                    className="text-[12px] text-graycolor font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                    <Link href='/' className="flex items-center gap-1">
                                        <div className="icon">
                                            <LuShapes size={16} className="text-primary"/>
                                        </div>
                                        SÉLECTIONS
                                    </Link>
                                </li>
                                {openDropdown === 'selections' && (
                                    <div className="ml-6 space-y-2">
                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Nouveautés
                                            </Link>
                                        </li>

                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                À paraître
                                            </Link>
                                        </li>
                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Ressources téléchargeables
                                            </Link>
                                        </li>
                                    </div>
                                )}
                            </ul>

                            <ul className="mt-4 space-y-4">
                                <li onClick={() => toggleDropdown('niveaux')}
                                    className="text-graycolor text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                    <Link href='/' className="flex items-center gap-1">
                                        <div className="icon">
                                            <LuChartNoAxesColumnIncreasing size={16} className="text-primary"/>
                                        </div>
                                        NIVEAUX
                                    </Link>
                                </li>
                                {openDropdown === 'niveaux' && (
                                    <div className="ml-6 space-y-2">
                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Maternelle
                                            </Link>
                                        </li>

                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Primaire
                                                <span
                                                    className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">COMING SOON</span>
                                            </Link>
                                        </li>
                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Secondaire
                                                <span
                                                    className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">COMING SOON</span>
                                            </Link>
                                        </li>
                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Supérieur
                                                <span
                                                    className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">COMING SOON</span>
                                            </Link>
                                        </li>
                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Tous les niveaux
                                                <span
                                                    className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">COMING SOON</span>
                                            </Link>
                                        </li>
                                    </div>
                                )}

                            </ul>

                            <ul className="mt-4 space-y-4">
                                <li onClick={() => toggleDropdown('collection')}
                                    className="text-[12px] text-graycolor font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                    <Link href='/' className="flex items-center gap-1">
                                        <div className="icon">
                                            <LuLibraryBig size={16} className="text-primary"/>
                                        </div>
                                        NOS COLLECTIONS
                                    </Link>
                                </li>
                                {openDropdown === 'collection' && (
                                    <div className="ml-6 space-y-2">
                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Voyage Méthode de lecture
                                            </Link>
                                        </li>

                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Primaire
                                                <span
                                                    className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">COMING SOON</span>
                                            </Link>
                                        </li>
                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Collection 2
                                            </Link>
                                        </li>
                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Collection 3
                                            </Link>
                                        </li>
                                        <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                            <Link href='/' className="flex items-center gap-1">
                                                Toutes nos collections
                                            </Link>
                                        </li>
                                    </div>
                                )}
                            </ul>
                        </details>

                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Ressources
                            </summary>
                        </details>

                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                À propos
                            </summary>
                        </details>

                        <Link href='#' onClick={() => setOpenModal(true)}
                              className="w-full text-center text-gray-700 hover:text-primary transition relative">
                            <div
                                className="border-b border-gray-300 pl-4 pb-3 text-[14px] font-normal flex gap-2 items-center">
                                <span>Account</span>
                                <HiUserCircle size={22}/>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Mobile Account Modal */}
            <Modal show={openModal} onClose={() => setOpenModal(false)} className="flex lg:hidden">
                <ModalBody>
                    {/* ref used to detect outside click */}
                    <div ref={modalRef} className="container">
                        <div className="col flex items-center px-2 h-[85px] w-full">
                            <div className="flex items-center gap-3 border-b border-bordercolor pb-3 w-full">
                                <HiUserCircle size={70} className="text-primary"/>
                                <div className="text">
                                    <h2 className="text-prgcolor font-semibold text-[14px]">
                                        Compte Nosres
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <h4 className="mt-2 text-[14px] text-graycolor">
                            <Link href="#" className="text-primary">
                                Connectez-vous
                            </Link>{" "}
                            à votre compte Nosres ou{" "}
                            <Link href="#" className="text-primary">
                                créez-en
                            </Link>{" "}
                            un.
                        </h4>

                        <h4 className="mt-3 text-[14px] text-graycolor">
                            De nombreuses ressources pédagogiques complémentaires aux manuels
                            scolaires peuvent être téléchargées gratuitement sur le site.
                        </h4>

                        <div className="flex justify-start">
                            <Link
                                href="/"
                                className="mt-2 w-full py-2 pl-2 flex text-[14px] items-center justify-start gap-2 border rounded text-primary hover:bg-primary hover:text-white hover:border-primary"
                            >
                                <div className="icon">
                                    <LuCircleArrowRight size={20}/>
                                </div>
                                Connectez-vous
                            </Link>
                        </div>

                        <div className="flex justify-start">
                            <Link
                                href="/"
                                className="mt-2 w-full py-2 pl-2 flex text-[14px] items-center justify-start gap-2 border rounded text-primary bg-primary hover:bg-[#3A5F8A] text-white hover:text-white hover:border-primary"
                            >
                                <div className="icon">
                                    <LuUserRoundPlus size={20}/>
                                </div>
                                Créez votre compte
                            </Link>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
        ;
}

export default Header;