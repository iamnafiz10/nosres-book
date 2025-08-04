'use client';

import {useEffect, useState} from 'react';
import {
    LuBookOpen,
    LuBookOpenText, LuCircleArrowRight,
    LuLandmark,
    LuPresentation,
    LuScale, LuShoppingBag, LuX,
} from "react-icons/lu";
import Link from "next/link";

function Details() {
    const [isOpenOne, setIsOpenOne] = useState(false);

    // Prevent background scroll when popup is open
    useEffect(() => {
        if (isOpenOne) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenOne]);

    // Popup Tab One
    const [activeTab, setActiveTab] = useState<'a' | 'b' | 'c'>('a');
    return (
        <>
            <section id="details-section">
                <div className="container pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuBookOpen size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Pour les auteurs potentiels
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Proposez votre manuscrit et rejoignez une
                                maison engagée dans l’éducation et
                                innovation pédagogique.
                            </p>

                            <button onClick={() => setIsOpenOne(true)} type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                               <span className="icon">
                                    <LuCircleArrowRight size={15}/>
                               </span>
                                En savoir plus
                            </button>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuBookOpenText size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Pour les auteurs actuels
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Découvrez tout sur vos droits d’auteur et
                                comment préparer votre manuscrit pour la
                                soumission à votre éditeur.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuPresentation size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Pour les éducateurs
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Accédez à des ressources prêtes à l’emploi
                                et à des contenus complémentaires pour
                                enrichir vos pratiques.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuLandmark size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Pour les institutions
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Commandes groupées, accompagnement sur
                                mesure, intégration aux programmes… Nous
                                vous proposons des solutions adaptées.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuShoppingBag size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Service clientèle
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Vous avez une question sur une commande, un
                                produit ou un service ? Notre équipe est là pour
                                vous accompagner avec réactivité et clarté.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuScale size={20} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Droits et permissions
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Vous souhaitez utiliser nos ouvrages dans un
                                cadre pédagogique ou professionnel ?
                                Consultez notre politique de droits d’usage.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
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
                                    <div className="flex justify-center">
                                        <div className="relative w-full md:max-w-4xl mt-20 mb-10 mx-6 md:mx-0">
                                            {/* Close Button outside top-right corner of popup */}
                                            <button
                                                onClick={() => setIsOpenOne(false)}
                                                className="absolute -top-[50px] md:-top-[40px] right-0 md:-right-[55px] cursor-pointer text-prgcolor hover:text-primary bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-100 z-10"
                                            >
                                                <LuX size={32}/>
                                            </button>

                                            {/* White Popup Box */}
                                            <div className="bg-white rounded-lg p-6 shadow-lg">
                                                <div
                                                    className="tab_box block space-y-3 md:space-y-0 md:flex justify-between mx-8 items-center gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTab('a')}
                                                        className={`text-[14px] py-2 px-6 rounded-full ${
                                                            activeTab === 'a'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Pour les auteurs potentiels
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTab('b')}
                                                        className={`text-[14px] py-2 px-6 rounded-full ${
                                                            activeTab === 'b'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Directives pour les propositions de livres
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTab('c')}
                                                        className={`text-[14px] py-2 px-6 rounded-full ${
                                                            activeTab === 'c'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        FAQ auteurs
                                                    </button>
                                                </div>

                                                {/*Tab One Content*/}
                                                <div className="mt-8 mx-8">
                                                    {activeTab === 'a' && (
                                                        <div className="tab_one_content_a">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    Pour les auteurs potentiels
                                                                </h4>
                                                                <h4 className="text-[14px] font-semibold mt-4">
                                                                    Vous souhaitez publier un ouvrage avec Nosres Books
                                                                    ?
                                                                    Découvrez comment rejoindre notre démarche
                                                                    éditoriale dédiée à l’éducation, à la pédagogie et à
                                                                    l’innovation.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Notre ligne éditoriale
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-2">
                                                                    Nous recherchons des manuscrits qui partagent notre
                                                                    vision :
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        Ouvrages éducatifs accessibles, exigeants et
                                                                        bienveillants
                                                                    </li>
                                                                    <li>
                                                                        Contenus qui stimulent la créativité, la
                                                                        collaboration, la communication, l’initiative,
                                                                        l’innovation, la pensée
                                                                        critique, la resulotion de problèmes, etc.
                                                                    </li>
                                                                    <li>
                                                                        Projets ancrés dans les réalités du terrain
                                                                        éducatif (maternelle, primaire, secondaire ou
                                                                        supérieur)
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Types de publications acceptés
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        Manuels scolaires
                                                                    </li>
                                                                    <li>
                                                                        Cahiers d’activités
                                                                    </li>
                                                                    <li>
                                                                        Albums ou récits pédagogiques
                                                                    </li>
                                                                    <li>
                                                                        Guides pour enseignants ou éducateurs
                                                                    </li>
                                                                    <li>
                                                                        Ressources transversales (valeurs, inclusion,
                                                                        innovation, numérique…)
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Ce que nous offrons
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        Un accompagnement éditorial de qualité
                                                                    </li>
                                                                    <li>
                                                                        Une collaboration étroite avec notre équipe
                                                                        pédagogique et graphique
                                                                    </li>
                                                                    <li>
                                                                        Une diffusion ciblée auprès des établissements,
                                                                        enseignants et familles
                                                                    </li>
                                                                    <li>
                                                                        Une mise en valeur de votre voix d’auteur au
                                                                        sein de la communauté Nosres
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Questions fréquentes
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-3">
                                                                    Consultez notre <Link href='#'
                                                                                          className="text-primary hover:underline">FAQ
                                                                    auteurs</Link> pour en savoir plus sur les droits
                                                                    d’auteur, la rémunération ou les délais de<br/>
                                                                    publication.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Vous avez un projet en tête ?
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-3">
                                                                    Nous sommes toujours curieux de découvrir de
                                                                    nouvelles voix. N’hésitez pas à nous écrire ou à
                                                                    consulter nos
                                                                    appels à projets en cours.
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTab === 'b' && (
                                                        <div className="tab_one_content_a">
                                                            <h4>Two Coming Soon..</h4>
                                                        </div>
                                                    )}
                                                    {activeTab === 'c' && (
                                                        <div className="tab_one_content_c">
                                                            <h4>Three Coming Soon..</h4>
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
}

export default Details;