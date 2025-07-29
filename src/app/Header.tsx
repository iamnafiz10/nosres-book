'use client';
import React, {useState} from 'react';
import Link from 'next/link'
import {AiOutlineClose} from "react-icons/ai";
import {IoIosArrowDown} from "react-icons/io";
import {HiOutlineBars3} from "react-icons/hi2";
import WhoImg4 from '../../public/assets/images/m4.svg';
import LogoImg from '../../public/assets/images/logo.svg';
import Image from "next/image";
import {HiUserCircle} from "react-icons/hi";
import {Modal, ModalBody} from "flowbite-react";


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
                                            <Link href='/about'
                                                  className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image width={1000} height={500} src="/assets/images/rs1.svg"
                                                           className="w-8"
                                                           alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-[500] text-[14px]">
                                                            Maternelle
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Découvrir comment nous éveillons les tout-petits
                                                            au monde.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image width={1000} height={500} src="/assets/images/rs2.svg"
                                                           className="w-8"
                                                           alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="flex items-center gap-1 text-[#252C32] font-[500] text-[14px]">
                                                            Primaire
                                                            <span
                                                                className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Apprendre comment nous contribuons dans
                                                            l’éducation primaire.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image width={1000} height={500} src="/assets/images/rs3.svg"
                                                           className="w-8"
                                                           alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="flex items-center gap-1 text-[#252C32] font-[500] text-[14px]">
                                                            Secondaire
                                                            <span
                                                                className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Comprendre comment nous soutenons les
                                                            parcours au secondaire.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="col hover:bg-[#F0F0F0] flex items-center px-4 h-[85px] cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <Image src={WhoImg4} className="w-8" alt="icon"/>
                                                    <div className="text">
                                                        <h2 className="flex items-center gap-1 text-[#252C32] font-[500] text-[14px]">
                                                            Supérieur
                                                            <span
                                                                className="text-[10px] text-primary bg-[#F3F4F4] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                                        </h2>
                                                        <p className="mt-1 text-xs text-[#828D9E]">
                                                            Explorer comment nous accompagnons
                                                            l’apprentissage au supérieur.
                                                        </p>
                                                    </div>
                                                </div>
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
                                            <div
                                                className="col flex items-center px-2 h-[85px]">
                                                <div className="flex items-center gap-3">
                                                    <HiUserCircle size={70} className="text-primary"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                            Nosres Account
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                <Link href='#' className="text-primary">
                                                    Sign in
                                                </Link> to your Nosres Account or <Link href='#'
                                                                                        className="text-primary">
                                                create
                                            </Link> one. A Nosres account gives you access to
                                                all Nosres services.
                                            </p>
                                            <div className="flex justify-start text-center">
                                                <Link href='/'
                                                      className="mt-2 w-[120px] py-2 flex text-[14px] items-center justify-center gap-2 border rounded text-primary hover:bg-primary hover:text-white hover:border-primary">
                                                    Learn More
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
                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                    <Link href='/public'>Maternelle</Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                    <Link href='/' className="flex items-center gap-1">
                                        Primaire
                                        <span
                                            className="text-[8px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                    </Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                    <Link href='/public' className="flex items-center gap-1">
                                        Secondaire
                                        <span
                                            className="text-[8px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                    </Link>
                                </li>

                                <li className="text-[12px] font-normal pb-2 hover:text-primary border-b border-bordercolor bordercolor">
                                    <Link href='/public' className="flex items-center gap-1">
                                        Supérieur
                                        <span
                                            className="text-[8px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                    </Link>
                                </li>
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
                className="block lg:hidden"
            >
                <ModalBody>
                    <div className="container">
                        <div
                            className="col flex items-center px-2 h-[85px]">
                            <div className="flex items-center gap-3">
                                <HiUserCircle size={70}/>
                                <div className="text">
                                    <h2 className="text-[#252C32] font-semibold text-[14px]">
                                        Nosres Account
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <p className="mt-2">
                            <Link href='#' className="text-primary">
                                Sign in
                            </Link> to your Nosres Account or <Link href='#' className="text-primary">
                            create
                        </Link> one. A Nosres account gives you access to
                            all Nosres services.
                        </p>
                        <div className="flex justify-start text-center">
                            <Link href='/'
                                  className="mt-2 w-[120px] py-2 flex text-[14px] items-center justify-center gap-2 border rounded text-primary hover:bg-primary hover:text-white hover:border-primary">
                                Learn More
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