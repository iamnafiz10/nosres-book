'use client';

import {useEffect, useRef, useState} from 'react';
import {
    LuDownload, LuX,
} from "react-icons/lu";

const Ense = () => {
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
                            Pour les enseignants
                        </h4>
                        <p className="text-[16px] mt-2">
                            Dans cette section, vous découvrirez une variété de ressources pédagogiques, notamment des
                            pistes audio, du matériel
                            d'évaluation et des outils supplémentaires, soigneusement conçus pour soutenir votre cours,
                            enrichir les activités en classe
                            et vous aider à utiliser au mieux Voyage méthode de lecture avec vos élèves.
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <h4 onClick={() => setIsOpenOne(true)}
                                className="cursor-pointer hover:underline text-[16px] text-primary font-[600]">
                                Fichiers audio (MP3)
                            </h4>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Accédez à l’ensemble complet des fichiers
                                audio MP3 pour chaque niveau de Voyage
                                methode de lecture, comprenant des activités
                                d’écoute, des chants et des chansons et des
                                histoires.
                            </p>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <h4 onClick={() => setIsOpenTwo(true)}
                                className="cursor-pointer hover:underline text-[16px] text-primary font-[600]">
                                Cartes imagées
                            </h4>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Ces cartes découpées offrent un soutien visuel
                                avec des lettres, des mots et des illustrations
                                correspondant à chaque son-lettre clé. Elles
                                sont d’excellents outils pour des activités
                                d’association et de pratique phonétique.
                            </p>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <h4 onClick={() => setIsOpenThree(true)}
                                className="cursor-pointer hover:underline text-[16px] text-primary font-[600]">
                                Cartes de phonèmes
                            </h4>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Les cartes de phonèmes présentent chaque
                                son de manière visuelle et structurée. Elles
                                aident les élèves à reconnaître, prononcer et
                                associer les sons aux lettres ou groupes de
                                lettres.
                            </p>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <h4 onClick={() => setIsOpenFour(true)}
                                className="cursor-pointer hover:underline text-[16px] text-primary font-[600]">
                                Test de placement
                            </h4>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Le test de placement évalue la maîtrise des
                                sons, des lettres, des mots et de la lecture de
                                base. Il aide à déterminer par quel niveau
                                commencer pour assurer un apprentissage
                                adapté et progressif.
                            </p>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <h4 onClick={() => setIsOpenFive(true)}
                                className="cursor-pointer hover:underline text-[16px] text-primary font-[600]">
                                Tests
                            </h4>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Chaque niveau de Voyage methode de lecture
                                comprend des tests d’unité, de mi-parcours et
                                de fin de niveau pour évaluer les progrès de
                                l’enfant. Les corrigés fournissent les réponses
                                à toutes les questions.
                            </p>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <h4 onClick={() => setIsOpenSix(true)}
                                className="cursor-pointer hover:underline text-[16px] text-primary font-[600]">
                                Guides pédagogiques
                            </h4>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Téléchargez le guide pédagogique, en français
                                et en anglais, pour tous les niveaux de Oxford
                                Phonics World. Il contient un message de
                                l’auteur, des jeux ludiques et des instructions
                                claires pour chaque leçon.
                            </p>
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
                                                        Fichiers audio (MP3)
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                        Cartes imagées
                                                    </h4>
                                                </div>
                                                {/*Tab One Content*/}
                                                <div className="tab_one_content_a">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Cartes imagées
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (20 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Cartes imagées
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (20 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Cartes imagées
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (20 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Cartes imagées
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (20 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Cartes imagées
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (20 MB)
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
                                                        Cartes de phonèmes
                                                    </h4>
                                                </div>
                                                {/*Tab One Content*/}
                                                <div className="tab_one_content_a">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Cartes de phonèmes
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (20 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Cartes de phonèmes
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (20 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Cartes de phonèmes
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (20 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Cartes de phonèmes
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (20 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Niveau 1_Cartes de phonèmes
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (20 MB)
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
                                                        Test de placement
                                                    </h4>
                                                </div>
                                                {/*Tab One Content*/}
                                                <div className="tab_one_content_a">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Instructions du test de placement
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Corrigé du test de placement
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Test de placement – Expression
                                                                    orale et Compréhension orale
                                                                </h4>
                                                                <h4 className="text-[12px] text-black">
                                                                    ZIP (5 MB)
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="box bg-gray-100 py-2 px-4 rounded">
                                                            <div
                                                                className="flex items-center justify-center gap-1">
                                                                <h4 className="text-[12px] text-primary hover:underline cursor-pointer">
                                                                    Carte d’expression orale et de compréhension orale
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                        className="flex items-center justify-center gap-1">
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
                                                                className="flex items-center justify-center gap-1">
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
                                                                className="flex items-center justify-center gap-1">
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
                                                                className="flex items-center justify-center gap-1">
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
                                                                className="flex items-center justify-center gap-1">
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
                                                                className="flex items-center justify-center gap-1">
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

export default Ense;