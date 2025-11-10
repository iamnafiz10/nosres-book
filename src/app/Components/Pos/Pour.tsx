"use client";
import React, {useEffect, useRef, useState} from 'react';
import {
    LuChartNoAxesColumnIncreasing, LuCircleHelp, LuSticker,
    LuTableOfContents, LuX,
} from "react-icons/lu";
import Link from "next/link";

const Pour = () => {
    // Popup Tab Two
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    useEffect(() => {
        if (isOpenTwo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenTwo]);
    const [activeTabTwo, setActiveTabTwo] = useState<'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g'>('a');

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
    return (
        <>
            <section id="nosp-section">
                <div className="container pt-10">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Pourquoi choisir Voyage méthode de lecture ?
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuTableOfContents size={50}
                                                   className="text-primary border border-bordercolor p-3 rounded-full"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black font-[600]">
                                Une approche bien structurée
                            </h4>
                            <p className="text-[14px] text-prgcolor mt-2">
                                Offre une méthode claire et organisée
                                pour initier les jeunes apprenants à la
                                méthode syllabique.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuSticker size={50}
                                           className="text-primary border border-bordercolor p-3 rounded-full"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black font-[600]">
                                Des contenus engageants
                            </h4>
                            <p className="text-[14px] text-prgcolor mt-2">
                                Comprend des personnages amusants,
                                des comptines et des activités qui
                                motivent et captivent les enfants.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuChartNoAxesColumnIncreasing size={50}
                                                               className="text-primary border border-bordercolor p-3 rounded-full"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black font-[600]">
                                Progression étape par étape
                            </h4>
                            <p className="text-[14px] text-prgcolor mt-2">
                                Accompagne les apprenants des sons
                                individuels à la lecture, en renforçant
                                leur confiance à chaque étape.
                            </p>
                        </div>
                    </div>

                    <h4 className="text-[24px] mt-8 text-black font-[600]">
                        Tarification avec remise éducative
                    </h4>
                    <p className="text-[16px] text-prgcolor mt-2">
                        Nous offrons des réductions spéciales aux établissements éducatifs, enseignants, étudiants et
                        personnel afin de<br/>
                        rendre nos produits et services plus abordables. Une vérification de l’éligibilité, telle qu’une
                        pièce d'identité scolaire<br/>
                        valide ou une adresse email institutionnelle, peut être requise.
                        <br/>
                        <br/>
                        Pour plus d’informations ou pour faire une demande, veuillez nous contacter à
                        business@nosres.com.
                    </p>
                    <button onClick={() => setIsOpenTwo(true)} type='button'
                            className="mt-4 py-2 px-4 text-primary hover:text-white hover:bg-primary cursor-pointer border border-primary rounded text-[14px]">
                        En savoir plus
                    </button>
                </div>
            </section>


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
                                                <div className="header_wrapper text-center mt-4 mb-8">
                                                    <h4 className="text-[18px] text-prgcolor font-semibold">
                                                        Réductions et promotions
                                                    </h4>
                                                    <h4 className="text-graycolor text-[14px] text-[14px] mt-1">
                                                        Idéal pour les enseignants, les écoles et les familles
                                                        scolarisées à domicile
                                                    </h4>
                                                </div>
                                                <div
                                                    className="tab_box space-y-3 md:space-y-0 block grid md:grid-cols-3 justify-between items-start md:items-center gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabTwo('a')}
                                                        className={`text-[14px] py-2 px-4 rounded-full cursor-pointer ${
                                                            activeTabTwo === 'a'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Pack de démarrage
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabTwo('b')}
                                                        className={`text-[14px] py-2 px-4 rounded-full cursor-pointer ${
                                                            activeTabTwo === 'b'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Tarifs dégressifs
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabTwo('c')}
                                                        className={`text-[14px] py-2 px-4 rounded-full cursor-pointer ${
                                                            activeTabTwo === 'c'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Hommage aux enseignants
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabTwo('d')}
                                                        className={`text-[14px] py-2 px-4 rounded-full cursor-pointer ${
                                                            activeTabTwo === 'd'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Promotion de la rentrée
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabTwo('e')}
                                                        className={`text-[14px] py-2 px-4 rounded-full cursor-pointer ${
                                                            activeTabTwo === 'e'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Pack école à la maison
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabTwo('f')}
                                                        className={`text-[14px] py-2 px-4 rounded-full cursor-pointer ${
                                                            activeTabTwo === 'f'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Programme de recommandation scolaire
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabTwo('g')}
                                                        className={`text-[14px] py-2 px-4 rounded-full cursor-pointer ${
                                                            activeTabTwo === 'g'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Des questions ou une commande ?
                                                    </button>
                                                </div>

                                                {/*Tab Content*/}
                                                <div className="mt-8">
                                                    {activeTabTwo === 'a' && (
                                                        <div
                                                            className="tab_one_content_a bg-[#84d07c2e] p-6 rounded-xl">
                                                            <h4 className="text-green-600 text-[16px]">
                                                                Économisez 20 % sur le pack de démarrage !
                                                            </h4>
                                                            <h4 className="text-[14px] text-prgcolor">
                                                                Obtenez tout ce dont vous avez besoin : 5 livres de
                                                                l’élève, 5 cahiers d’exercices, 5 livres du professeur,
                                                                5 Jeux de
                                                                cartes phonétiques.
                                                            </h4>
                                                        </div>
                                                    )}

                                                    {activeTabTwo === 'b' && (
                                                        <div
                                                            className="tab_one_content_b bg-[#e7dc5c1a] p-6 rounded-xl">
                                                            <h4 className="text-yellow-500 text-[16px]">
                                                                Obtenez 1 livre du professeur GRATUIT
                                                            </h4>
                                                            <h4 className="text-[14px] text-prgcolor">
                                                                Recevez 1 livre du professeur gratuit pour chaque achat
                                                                de 5 livres de l’élève.
                                                            </h4>
                                                        </div>
                                                    )}
                                                    {activeTabTwo === 'c' && (
                                                        <div className="tab_one_content_c">
                                                            <div className="bg-blue-50 rounded-xl p-6 mx-auto">
                                                                <h4 className="text-[18px] font-semibold text-primary">
                                                                    Économisez jusqu’à 30 % selon la <span
                                                                    className="font-bold">quantité commandée</span> !
                                                                </h4>
                                                                <h4 className="text-prgcolor text-[14px] mt-1">
                                                                    Plus vous achetez, plus vous économisez — idéal pour
                                                                    les écoles, les groupes ou les commandes en gros.
                                                                </h4>

                                                                <div className="mt-6 overflow-x-auto">
                                                                    <table
                                                                        className="w-full text-left border-collapse bg-white rounded">
                                                                        <thead>
                                                                        <tr className="border-b border-bordercolor">
                                                                            <th className="px-6 py-3 border-r border-bordercolor font-semibold text-prgcolor text-[16px]">Quantité
                                                                                commandée
                                                                            </th>
                                                                            <th className="px-6 py-3 border-r border-bordercolor font-semibold text-prgcolor text-[16px]">Remise</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr className="border-b border-bordercolor">
                                                                            <td className="px-6 py-3 border-r border-bordercolor text-graycolor text-[14px]">1
                                                                                à
                                                                                4 lots
                                                                            </td>
                                                                            <td className="px-6 py-3 border-r border-bordercolor text-graycolor text-[14px]">10
                                                                                %
                                                                                de réduction
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="border-b border-bordercolor">
                                                                            <td className="px-6 py-3 border-r border-bordercolor text-graycolor text-[14px]">5
                                                                                à
                                                                                9 lots
                                                                            </td>
                                                                            <td className="px-6 py-3 border-r border-bordercolor text-graycolor text-[14px]">20
                                                                                %
                                                                                de réduction
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="px-6 py-3 border-r border-bordercolor text-graycolor text-[14px]">10
                                                                                lots ou plus
                                                                            </td>
                                                                            <td className="px-6 py-3 border-r border-bordercolor text-graycolor text-[14px]">30
                                                                                %
                                                                                de réduction
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTabTwo === 'd' && (
                                                        <div
                                                            className="tab_one_content_d bg-[#e7dc5c1a] p-6 rounded-xl">
                                                            <h4 className="text-yellow-500 text-[16px]">
                                                                Bénéficiez de 15 % de réduction sur tous les livres –
                                                                Promotion de la rentrée
                                                            </h4>
                                                            <h4 className="text-[14px] text-prgcolor mt-2">
                                                                Préparez-vous pour la rentrée et faites des économies
                                                                sur tout ce dont vous avez besoin !
                                                                <br/>
                                                                <b>Valable du 1er juillet au 30 septembre</b>
                                                            </h4>
                                                        </div>
                                                    )}

                                                    {activeTabTwo === 'e' && (
                                                        <div
                                                            className="tab_one_content_e bg-gray-100 p-6 rounded-xl">
                                                            <h4 className="text-gray-500 text-[16px]">
                                                                Économisez 15 % sur le pack école à la maison !
                                                            </h4>
                                                            <h4 className="text-[14px] text-prgcolor mt-2">
                                                                Profitez d’un pack complet : 1 livre de l’élève, 1
                                                                cahier d’exercices, 1 livre du professeur et 1 jeu de
                                                                cartes de
                                                                phonétique — tout ce qu’il vous faut pour bien commencer
                                                                à la maison !
                                                            </h4>
                                                        </div>
                                                    )}

                                                    {activeTabTwo === 'f' && (
                                                        <div
                                                            className="tab_one_content_f bg-[#dfadff26] p-6 rounded-xl">
                                                            <h4 className="text-[#704195] text-[16px]">
                                                                Parrainez une école et économisez tous les deux 10% !
                                                            </h4>
                                                            <h4 className="text-[14px] text-prgcolor mt-2">
                                                                Faites découvrir notre collection à une école de votre
                                                                entourage. Lorsqu’elle passe sa première commande,
                                                                vous recevez tous les deux 10% de réduction sur votre
                                                                prochaine commande.
                                                            </h4>
                                                        </div>
                                                    )}

                                                    {activeTabTwo === 'g' && (
                                                        <div
                                                            className="tab_one_content_g border border-primary p-6 rounded-xl">
                                                            <div className="icon text-primary mb-2">
                                                                <LuCircleHelp size={25}/>
                                                            </div>
                                                            <h4 className="text-primary text-[16px]">
                                                                Des questions ou une commande ?
                                                            </h4>
                                                            <h4 className="text-[14px] text-graycolor mt-1">
                                                                Écrivez-nous à : contact@exampleedu.com
                                                                Des devis personnalisés sont disponibles sur demande.
                                                            </h4>
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
        </>
    );
};

export default Pour;