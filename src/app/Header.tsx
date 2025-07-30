'use client';
import React, {useState} from 'react';
import Link from 'next/link'
import {AiOutlineClose} from "react-icons/ai";
import {IoIosArrowDown} from "react-icons/io";
import {HiOutlineBars3} from "react-icons/hi2";
import LogoImg from '../../public/assets/images/logo.svg';
import Image from "next/image";
import {HiUserCircle} from "react-icons/hi";
import {Modal, ModalBody} from "flowbite-react";
import {
    LuChartNoAxesColumnIncreasing,
    LuCircleArrowRight,
    LuLibraryBig,
    LuShapes,
    LuUserRoundPlus
} from "react-icons/lu";


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
    const handleAccountClick = () => {
        const account = document.getElementById('account_dropdown_menu');
        if (account) {
            if (isAccountVisible) {
                account.classList.remove('show-account-dropdown-menu');
            } else {
                account.classList.add('show-account-dropdown-menu');
            }
            setAccountVisible(!isAccountVisible);
        }
    };
    // Mobile Account popup
    const [openModal, setOpenModal] = useState(false);

    // Mobile menu dropdown
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const toggleDropdown = (key: string) => {
        setOpenDropdown(prev => (prev === key ? null : key));
    };


    return (
        <>
            <section id="header-section" className="relative">
                <header
                    className="py-4 lg:py-2 flex items-center h-[50px] shadow-sm bg-white w-full lg:relative z-50"
                    style={{
                        position: 'fixed',
                    }}
                >
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link href='/' className="flex items-center gap-2">
                                <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-[19px]">Books</span>
                            </Link>
                        </div>

                        <div className="nav hidden lg:flex items-center text-[14px] gap-6">
                            <div className="one group">
                                <Link href='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Nos Livres
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
                                                        <LuChartNoAxesColumnIncreasing size={20}
                                                                                       className="text-primary"/>
                                                    </div>
                                                    <h2 className="text-[#252C32] font-[500] text-[12px]">
                                                        SÉLECTIONS
                                                    </h2>
                                                </div>

                                                <ul className="mt-1 space-y-2 text-prgcolor text-[12px]">
                                                    <li>
                                                        <Link href='#' className="hover:text-primary">Nouveautés</Link>
                                                    </li>
                                                    <li>
                                                        <Link href='#' className="hover:text-primary">À paraître</Link>
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
                                                        <LuShapes size={20}
                                                                  className="text-primary"/>
                                                    </div>
                                                    <h2 className="text-[#252C32] font-[500] text-[12px]">
                                                        NIVEAUX
                                                    </h2>
                                                </div>

                                                <ul className="mt-1 space-y-2 text-prgcolor text-[12px]">
                                                    <li>
                                                        <Link href='#' className="hover:text-primary">Maternelle</Link>
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
                                                        <LuLibraryBig size={20}
                                                                      className="text-primary"/>
                                                    </div>
                                                    <h2 className="text-[#252C32] font-[500] text-[12px]">
                                                        NOS COLLECTIONS
                                                    </h2>
                                                </div>

                                                <ul className="mt-1 space-y-2 text-prgcolor text-[12px]">
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
                                         className="mt-2 text-center cursor-pointer text-primary transition relative">
                                        <HiUserCircle size={35}/>
                                    </div>

                                    <div id="account_dropdown_menu"
                                         className="account-dropdown-menu absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border border-bordercolor">
                                        <div className="container">
                                            <div className="col flex items-center px-2 h-[85px] w-full">
                                                <div
                                                    className="flex items-center gap-3 border-b border-bordercolor pb-3 w-full">
                                                    <HiUserCircle size={70} className="text-primary"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                            Compte Nosres
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="mt-2 text-[14px]">
                                                <Link href='#' className="text-primary">
                                                    Connectez-vous
                                                </Link> à votre compte Nosres ou <Link href='#'
                                                                                       className="text-primary">
                                                créez-en
                                            </Link> un.
                                            </h4>
                                            <h4 className="mt-3 text-[14px] text-prgcolor">
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
                                                      className="mt-2 w-full py-2 pl-2 flex text-[14px] items-center justify-start gap-2 border rounded text-primary bg-primary hover:bg-transparent text-white hover:text-primary hover:border-primary">
                                                    <div className="icon">
                                                        <LuUserRoundPlus size={20} className=""/>
                                                    </div>
                                                    Créez votre compte
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab / Mobile Icons */}
                        <div className="lg:hidden tab-mobile flex items-center gap-2">
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
                        <details className="group pb-0 p-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] font-normal focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Nos Livres
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-4">
                                <li onClick={() => toggleDropdown('selections')}
                                    className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                    <Link href='/' className="flex items-center gap-1">
                                        <div className="icon">
                                            <LuChartNoAxesColumnIncreasing size={18} className="text-primary"/>
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
                                    className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                    <Link href='/' className="flex items-center gap-1">
                                        <div className="icon">
                                            <LuShapes size={18} className="text-primary"/>
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
                                    className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                    <Link href='/' className="flex items-center gap-1">
                                        <div className="icon">
                                            <LuLibraryBig size={18} className="text-primary"/>
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
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                className="flex lg:hidden"
            >
                <ModalBody>
                    <div className="container">
                        <div className="col flex items-center px-2 h-[85px] w-full">
                            <div
                                className="flex items-center gap-3 border-b border-bordercolor pb-3 w-full">
                                <HiUserCircle size={70} className="text-primary"/>
                                <div className="text">
                                    <h2 className="text-[#252C32] font-semibold text-[14px]">
                                        Compte Nosres
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-2 text-[14px]">
                            <Link href='#' className="text-primary">
                                Connectez-vous
                            </Link> à votre compte Nosres ou <Link href='#'
                                                                   className="text-primary">
                            créez-en
                        </Link> un.
                        </h4>
                        <h4 className="mt-3 text-[14px] text-prgcolor">
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
                                  className="mt-2 w-full py-2 pl-2 flex text-[14px] items-center justify-start gap-2 border rounded text-primary bg-primary hover:bg-transparent text-white hover:text-primary hover:border-primary">
                                <div className="icon">
                                    <LuUserRoundPlus size={20} className=""/>
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