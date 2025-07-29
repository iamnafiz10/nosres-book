'use client';
import React, {useEffect, useState} from 'react';
import {FaArrowRightLong, FaFacebookF} from "react-icons/fa6";
import {IoLogoInstagram} from "react-icons/io5";
import {FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {RxCross1, RxPlus} from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    const currentYear = new Date().getFullYear();

    // const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
        setIsVisible(false); // This will hide the acc_wrap div
    };
    // Ensure `location` is only accessed in the browser
    const [shouldDisplay, setShouldDisplay] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setShouldDisplay(window.location.pathname === "/sitea-contact");
        }
    }, []);
    return (
        <>
            <section id="footer-section" className="bg-[#F4F4F4] mt-10">
                <div className="container py-10">
                    <footer>
                        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="col">
                                <h3 className="text-gray-600 font-semibold mt-2 text-[16px]">
                                    Inscrivez-vous à notre lettre<br/>
                                    éducative :
                                </h3>
                                <p className="mt-1 text-gray-500 text-[12px]">
                                    Un email par mois pour suivre nos projets, découvrir
                                    nos ressources et rejoindre la communauté Nosres.
                                </p>

                                <div
                                    className="mt-6 flex cursor-pointer items-center gap-0 justify-start hover:text-[#3A5F8A]">
                                    <input type="text"
                                           className="outline-0 text-[12px] text-black border border-bordercolor rounded rounded-r-none border-r-0 px-4 py-2"
                                           placeholder="Entrez votre adresse e-mail"/>
                                    <button type='button'
                                            className="text-[12px] cursor-pointer bg-primary text-white py-2 px-4 rounded rounded-l-none">
                                        S’abonner
                                    </button>
                                </div>

                                <div className="social-icons mt-6 flex items-center gap-3">
                                    <FaFacebookF size={15}
                                                 className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <IoLogoInstagram size={15}
                                                     className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaLinkedin size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaXTwitter size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                </div>
                            </div>

                            <div className="col mt-3">
                                <h3 className="font-semibold text-gray-600 text-[12px]">
                                    Nosres Education
                                </h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link href='/'>À propos</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Notre équipe</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='mailto:nosres@email.com' className="flex items-center gap-2">
                                            Nous contacter
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col mt-3">
                                <h3 className="font-semibold text-gray-600 text-[12px]">Parcours éducatif</h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link href='/'>
                                            Maternelle
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/' className="flex items-center gap-1">
                                            Primaire
                                            <span
                                                className="text-[10px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/' className="flex items-center gap-1">
                                            Secondaire
                                            <span
                                                className="text-[10px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/' className="flex items-center gap-1">
                                            Supérieur
                                            <span
                                                className="text-[10px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col mt-3">
                                <h3 className="font-semibold text-gray-600 text-[12px]">Nos piliers</h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link href='/' className="flex items-center gap-1">
                                            Nosres Books
                                            <span
                                                className="text-[10px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/' className="flex items-center gap-1">
                                            Nosres laboratoire éducatif
                                            <span
                                                className="text-[10px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Link 3</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Link 4</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Link 5</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mobile footer */}
                        <div className="block lg:hidden">
                            <div className="col pb-8">
                                <div className="logo">
                                    <Link href='/' className="flex items-center gap-2">
                                        <Image width={1000} height={500} src="/assets/images/logo.svg"
                                               className="h-10 w-7"
                                               alt="LogoImg"/>
                                        <span className="font-[500] text-xl">nosres</span>
                                    </Link>
                                </div>
                                <h3 className="mt-4 text-gray-600 font-semibold">
                                    Inscrivez-vous à notre lettre
                                    éducative :</h3>
                                <p className="mt-1 text-gray-500 text-[12px]">
                                    Un email par mois pour suivre nos projets, découvrir
                                    nos ressources et rejoindre la communauté Nosres.
                                </p>
                                <div
                                    className="mt-6 flex cursor-pointer items-center gap-0 justify-start hover:text-[#3A5F8A]">
                                    <input type="text"
                                           className="outline-0 text-[12px] text-black border border-bordercolor rounded rounded-r-none border-r-0 px-4 py-2"
                                           placeholder="Entrez votre adresse e-mail"/>
                                    <button type='button'
                                            className="text-[12px] cursor-pointer bg-primary text-white py-2 px-4 rounded rounded-l-none">
                                        S’abonner
                                    </button>
                                </div>
                                <div className="social-icons mt-6 flex items-center gap-3">
                                    <FaFacebookF size={15}
                                                 className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <IoLogoInstagram size={15}
                                                     className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaLinkedin size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaXTwitter size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                </div>
                            </div>

                            <details className="group">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Nosres Education
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link href='/'>À propos</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Notre équipe</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='mailto:nosres@email.com'>Nous contacter</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Parcours éducatif
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link href='/'>Maternelle</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/' className="flex items-center gap-1">
                                            Primaire
                                            <span
                                                className="text-[10px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/' className="flex items-center gap-1">
                                            Secondaire
                                            <span
                                                className="text-[10px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/' className="flex items-center gap-1">
                                            Supérieur
                                            <span
                                                className="text-[10px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Nos piliers
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link href='/' className="flex items-center gap-1">
                                            Nosres Books
                                            <span
                                                className="text-[10px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/' className="flex items-center gap-1">
                                            Nosres laboratoire éducatif
                                            <span
                                                className="text-[10px] cursor-auto text-primary bg-[#eeeeee] px-2 py-1 rounded-full">
                                                                COMING SOON
                                                            </span>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Link 3</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Link 4</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Link 5</Link>
                                    </li>
                                </ul>
                            </details>
                        </div>

                        {/*<div className="mt-12 border-t border-[#9999998f]">*/}

                        {/*</div>*/}
                        {/* Copyright */}
                        <div className="copyright sm:flex justify-between pt-4 mt-10">
                            <div className="left">
                                <ul className="block space-y-2 md:space-y-0 md:flex items-center gap-4 text-gray-500 text-[12px]">
                                    <div className="logo">
                                        <Link href='/' className="flex items-center gap-2">
                                            <Image width={1000} height={500} src="/assets/images/logo.svg"
                                                   className="h-full w-4"
                                                   alt="LogoImg"/>
                                            <span className="font-[500] text-black text-[10px]]">nosres</span>
                                        </Link>
                                    </div>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Conditions</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Confidentialité</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Applications Nosres</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Carrières</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href='/'>Assistance Nosres</Link>
                                    </li>
                                </ul>
                                <p className="mt-[14px] text-gray-500 text-[12px]">© {currentYear} Nosres Inc. All
                                    rights
                                    reserved.</p>
                            </div>
                            <div className="right">
                                <p className="cursor-pointer text-[12px] text-graycolor">United States</p>
                            </div>
                        </div>
                    </footer>
                </div>

                {isVisible && shouldDisplay && (
                    <div className="acc_wrap w-full fixed bottom-0 pt-[0px]">
                        <div
                            className="relative isolate w-full flex items-center text-left justify-start gap-x-6 overflow-hidden bg-gray-50 py-2.5">
                            <div className="container flex items-center justify-center">
                                <div className="flex items-center justify-center w-full">
                                    <div className="flex items-center gap-x-1 gap-y-2">
                                        <h4 className="text-[10px] sm:text-[14px] leading-6 text-gray-900">
                                            GeneriCon 2023 in on June 7 – 9 in Denver.
                                        </h4>
                                        <div
                                            className="flex cursor-pointer items-center gap-1 text-[10px] sm:text-[14px] font-semibold">
                                            Get your ticket
                                            <FaArrowRightLong size={15}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="float-right flex items-center justify-end pr-1">
                                    <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                                            onClick={handleDismiss}>
                                        <span className="sr-only">Dismiss</span>
                                        <RxCross1 className="h-5 w-5 text-gray-900"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Footer;