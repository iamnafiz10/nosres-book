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
    // Popup Tab One
    const [isOpenOne, setIsOpenOne] = useState(false);
    useEffect(() => {
        if (isOpenOne) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenOne]);
    const [activeTab, setActiveTab] = useState<'a' | 'b' | 'c'>('a');

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

                            <button onClick={() => setIsOpenTwo(true)} type='button'
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

                            <button onClick={() => setIsOpenThree(true)} type='button'
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

                            <button onClick={() => setIsOpenFour(true)} type='button'
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

                            <button onClick={() => setIsOpenFive(true)} type='button'
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
                                Consultez notre politique de droits<br/> d’usage.
                            </p>

                            <button onClick={() => setIsOpenSix(true)} type='button'
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
                                            <div className="bg-white rounded-[1rem] p-6 shadow-lg">
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
                                                        Pour les auteurs potentiels
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
                                                        Directives pour les propositions de livres
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
                                                        <div className="tab_one_content_b">
                                                            <div className="tab_one_content_a">
                                                                <div className="box">
                                                                    <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                        Directives pour les propositions de livres
                                                                    </h4>
                                                                    <h4 className="text-[14px] text-prgcolor mt-4">
                                                                        Votre proposition de livre doit nous offrir une
                                                                        vue d’ensemble claire et complète du contenu de
                                                                        votre livre, de ses
                                                                        objectifs et de son public cible. Les
                                                                        propositions réussies comprennent généralement
                                                                        les éléments suivants :
                                                                    </h4>
                                                                </div>

                                                                <div className="box mt-6">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        1. Présentation générale du projet
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            <b>Titre :</b> Titre provisoire
                                                                        </li>
                                                                        <li>
                                                                            <b>Type d’ouvrage :</b> manuel scolaire,
                                                                            cahier d’activités, guide pédagogique, etc.
                                                                        </li>
                                                                        <li>
                                                                            <b>Public précis visé :</b> âge ou classe
                                                                        </li>
                                                                        <li>
                                                                            <b>Marché concerné :</b> niveau scolaire
                                                                            (maternelle, primaire, collège, lycée),
                                                                            enseignants, parents.
                                                                        </li>
                                                                        <li>
                                                                            <b>Objectifs pédagogiques :</b> compétences
                                                                            ou connaissances à acquérir, lien avec les
                                                                            programmes officiels.
                                                                        </li>
                                                                        <li>
                                                                            <b>Approche pédagogique :</b> méthodologie
                                                                            utilisée, différenciation, activités
                                                                            interactives, évaluation, etc
                                                                        </li>
                                                                        <li>
                                                                            <b>Originalité du projet :</b> éléments
                                                                            distinctifs par rapport aux ouvrages
                                                                            existants.
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="box mt-6">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        2. À propos de l’auteur ou de l’équipe
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            Nom(s), prénom(s
                                                                        </li>
                                                                        <li>
                                                                            Parcours professionnel
                                                                        </li>
                                                                        <li>
                                                                            Expérience dans l’enseignement et/ou la
                                                                            conception de contenus pédagogiques
                                                                        </li>
                                                                        <li>
                                                                            Publications antérieures (le cas échéant)
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="box mt-6">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        3. Table des matières et extraits de contenu
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            <b>Table des matières / sommaire détaillé
                                                                                :</b> Fournissez un sommaire structuré
                                                                            de l’ouvrage (même provisoire), incluant
                                                                            titres des chapitres ou unités, description
                                                                            des contenus abordés (leçons, activités,
                                                                            évaluations), indication des
                                                                        </li>
                                                                        <li>
                                                                            <b>Extraits représentatifs :</b> Joignez un
                                                                            ou deux extraits représentatifs du manuscrit
                                                                            (par ex : un chapitre
                                                                            complet ou un ensemble de fiches
                                                                            pédagogiques). Si possible, incluez des
                                                                            visuels, tableaux, fiches élèves,
                                                                            corrigés ou supports associés.
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="box mt-6">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        4. Informations pratiques
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            <b>
                                                                                Volume estimé :
                                                                            </b>
                                                                            nombre de pages, types d’illustrations ou
                                                                            d’annexes
                                                                        </li>
                                                                        <li>
                                                                            <b>
                                                                                Format envisagé :
                                                                            </b>
                                                                            papier, numérique, interactif ou hybride
                                                                        </li>
                                                                        <li>
                                                                            <b>
                                                                                État d’avancement :
                                                                            </b>
                                                                            idée en développement, projet partiellement
                                                                            rédigé, manuscrit complet
                                                                        </li>
                                                                        <li>
                                                                            <b>
                                                                                Échéancier de réalisation :
                                                                            </b>
                                                                            délai estimé pour la remise du manuscrit
                                                                            final
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="box mt-6">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        5. Positionnement et références
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            <b>
                                                                                Ouvrages comparables :
                                                                            </b>
                                                                            indiquez les ouvrages similaires sur le
                                                                            marché qui vous ont inspiré ou avec
                                                                            lesquels le vôtre pourrait entrer en
                                                                            dialogue et expliquez comment le vôtre s’en
                                                                            distingue.
                                                                        </li>
                                                                        <li>
                                                                            <b>
                                                                                Justification du besoin :
                                                                            </b>
                                                                            expliquez comment votre projet répond à des
                                                                            besoins observés sur le terrain,
                                                                            innove dans son approche et s’adapte aux
                                                                            réalités de la classe.
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    )}
                                                    {activeTab === 'c' && (
                                                        <div className="tab_one_content_c">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    FAQ auteurs
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-4">
                                                                    Vous avez une question ? Voici les réponses aux plus
                                                                    fréquentes.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Quels types de manuscrits acceptez-vous ?
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-2">
                                                                    Nous acceptons des ouvrages éducatifs tels que :
                                                                    manuels scolaires, cahiers d’activités, albums
                                                                    pédagogiques,
                                                                    guides pour enseignants, contenus transversaux sur
                                                                    les compétences du 21e siècle.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Comment soumettre ma proposition de livre ?
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-2">
                                                                    Veuillez envoyer votre proposition de livre à
                                                                    l’adresse suivante : projets@nosres.com.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Sous combien de temps aurez-vous une réponse ?
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-2">
                                                                    Nous accusons réception de votre dossier sous 24
                                                                    heures. Toutefois, pour tout envoi effectué un
                                                                    vendredi, la
                                                                    confirmation de réception sera envoyée le lundi
                                                                    suivant. Nous étudions chaque proposition avec
                                                                    attention et
                                                                    répondons généralement sous un délai de 2 à 3
                                                                    semaines. Si votre manuscrit correspond à notre
                                                                    ligne éditoriale,
                                                                    nous vous proposerons un échange avec notre comité
                                                                    éditorial. Dans tous les cas, une réponse vous sera
                                                                    apportée, qu’elle soit favorable ou non. Nous vous
                                                                    remercions pour votre compréhension et votre
                                                                    confiance.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Qui détient les droits sur l’ouvrage publié ?
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-2">
                                                                    Les droits d’auteur vous appartiennent, sauf
                                                                    indication contraire dans le contrat. Nosres Books
                                                                    obtient un droit
                                                                    d’exploitation pour la durée et le périmètre définis
                                                                    contractuellement.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Comment suis-je rémunéré·e ?
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-2">
                                                                    La rémunération se fait selon un pourcentage sur les
                                                                    ventes (droits d’auteur), ou par achat forfaitaire
                                                                    si le projet
                                                                    est commandé par Nosres Books. Les conditions sont
                                                                    précisées dans le contrat.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Pouvons-nous co-écrire ou proposer un projet
                                                                    collectif ?
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-2">
                                                                    Oui ! Nous encourageons les projets collaboratifs
                                                                    entre enseignants, chercheurs, illustrateurs, etc.
                                                                    Mentionnez les
                                                                    co-auteurs dans votre dossier de soumission.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Puis-je proposer un manuscrit déjà publié ailleurs ?
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-2">
                                                                    Uniquement si vous détenez encore les droits ou si
                                                                    l’ouvrage est en auto-édition. Merci de le préciser
                                                                    clairement
                                                                    lors de l’envoi.
                                                                </h4>
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
                                    <div className="flex justify-center">
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
                                                <div
                                                    className="tab_box block space-y-3 md:space-y-0 md:flex justify-between mx-8 items-center gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabTwo('a')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTabTwo === 'a'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Pour les auteurs actuels
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabTwo('b')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTabTwo === 'b'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Directives de préparation des manuscrits
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabTwo('c')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTabTwo === 'c'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Droits et royalties
                                                    </button>
                                                </div>

                                                {/*Tab Content*/}
                                                <div className="mt-8 mx-8">
                                                    {activeTabTwo === 'a' && (
                                                        <div className="tab_one_content_a">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    Pour les auteurs actuels
                                                                </h4>
                                                                <h4 className="text-[14px] font-semibold mt-4">
                                                                    Continuez à créer avec nous et participez activement
                                                                    à la transformation de l’éducation.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="text-[14px] text-prgcolor mb-4">
                                                                    Déjà membre de notre communauté d’auteurs engagés,
                                                                    vous contribuez à faire évoluer les pratiques
                                                                    pédagogiques — merci pour votre précieuse
                                                                    collaboration. Dans cette section, accédez
                                                                    facilement à toutes les
                                                                    informations utiles pour poursuivre votre parcours à
                                                                    nos côtés : redevances, accompagnement éditorial,
                                                                    ressources pratiques… tout est à portée de main.
                                                                </h4>
                                                                <h4 className="font-medium text-[18px]">
                                                                    Vos droits d’auteur et redevances
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        Consultez les modalités de votre contrat
                                                                        d’édition.
                                                                    </li>
                                                                    <li>
                                                                        Accédez aux détails de votre rémunération
                                                                        (redevances, paiements, relevés).
                                                                    </li>
                                                                    <li>
                                                                        Comprenez vos droits de reproduction, traduction
                                                                        et diffusion.
                                                                    </li>
                                                                </ul>
                                                                <h4 className="text-[14px] text-prgcolor mt-3">
                                                                    Consultez la section <Link href='#'
                                                                                               className="text-primary hover:underline">Droits
                                                                    et royalties</Link> pour en
                                                                    savoir plus sur les droits d’auteur et la
                                                                    rémunération.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Un soutien éditorial continu
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        Contact direct avec votre éditeur référent
                                                                    </li>
                                                                    <li>
                                                                        Possibilité de participer à des ateliers ou
                                                                        webinaires.
                                                                    </li>
                                                                    <li>
                                                                        Accès à un espace auteur dédié (documents,
                                                                        modèles, contrats).
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTabTwo === 'b' && (
                                                        <div className="tab_one_content_b">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    Directives de préparation des manuscrits
                                                                </h4>

                                                                <h4 className="text-[18px] pb-2 mt-4">
                                                                    Préparer un nouveau manuscrit
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-1">
                                                                    Nosres Books vous fournira des consignes écrites
                                                                    pour vous aider à préparer votre manuscrit en vue de
                                                                    la
                                                                    révision. Ces consignes expliqueront comment
                                                                    formater votre manuscrit et gérer les autorisations.
                                                                    Nous les
                                                                    partagerons avec vous et les examinerons ensemble au
                                                                    moment opportun.
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {activeTabTwo === 'c' && (
                                                        <div className="tab_one_content_c">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    Vos droits d’auteur et vos royalties
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor mt-4">
                                                                    En tant qu’auteur publié avec nous, vous bénéficiez
                                                                    d’un cadre contractuel clair et équitable. Cette
                                                                    section vous
                                                                    explique en toute transparence ce que vous devez
                                                                    savoir sur vos droits et votre rémunération.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Vos droits d’auteur
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        Vous restez titulaire de vos droits moraux.
                                                                    </li>
                                                                    <li>
                                                                        Le contrat d’édition encadre les droits
                                                                        d’exploitation (impression, diffusion,
                                                                        traduction, etc.).
                                                                    </li>
                                                                    <li>
                                                                        Les durées et territoires sont clairement
                                                                        définis.
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Redevances (royalties)
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        Taux de redevance selon les formats (papier,
                                                                        numérique, etc.).
                                                                    </li>
                                                                    <li>
                                                                        Calcul basé sur le prix public HT ou net éditeur
                                                                        selon le contrat.
                                                                    </li>
                                                                    <li>
                                                                        Versement semestriel ou annuel avec relevés
                                                                        détaillés.
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Transparence et suivi
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        Accès à vos relevés de ventes.
                                                                    </li>
                                                                    <li>
                                                                        Contacts pour toute question sur les paiements.
                                                                    </li>
                                                                    <li>
                                                                        Mises à jour contractuelles notifiées à
                                                                        l’auteur.
                                                                    </li>
                                                                </ul>
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
                                                <div
                                                    className="tab_box block space-y-3 md:space-y-0 md:flex justify-start mx-8 items-center gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabThree('a')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTabThree === 'a'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Pour les éducateurs
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabThree('b')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTabThree === 'b'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Structure éducative francophone
                                                    </button>
                                                </div>

                                                {/*Tab Content*/}
                                                <div className="mt-8 mx-8">
                                                    {activeTabThree === 'a' && (
                                                        <div className="tab_one_content_a">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    Pour les éducateurs
                                                                </h4>
                                                                <h4 className="text-[14px] font-semibold mt-4">
                                                                    Ensemble, soutenons l’apprentissage à chaque étape !
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="text-[14px] text-prgcolor mb-4">
                                                                    Chez Nosres Books, nous croyons que les éducateurs
                                                                    jouent un rôle essentiel dans l’éveil, le
                                                                    développement et
                                                                    l’épanouissement des enfants. C’est pourquoi nous
                                                                    créons des outils pédagogiques adaptés, conçus avec
                                                                    soin
                                                                    et pensés pour répondre aux réalités de classe.
                                                                </h4>
                                                                <h4 className="font-medium text-[18px]">
                                                                    Ressources pédagogiques prêtes à l’emploi
                                                                </h4>
                                                                <h4 className="text-[14px] text-prgcolor my-4">
                                                                    Nous développons des approches structurées autour
                                                                    des compétences du 21e siècle, y compris :
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        la créativité,
                                                                    </li>
                                                                    <li>
                                                                        la pensée critique,
                                                                    </li>
                                                                    <li>
                                                                        la communication,
                                                                    </li>
                                                                    <li>
                                                                        la collaboration,
                                                                    </li>
                                                                    <li>
                                                                        ’innovation,
                                                                    </li>
                                                                    <li>
                                                                        la résolution de problèmes,
                                                                    </li>
                                                                    <li>
                                                                        et l’apprentissage autonome.
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Formations et accompagnement
                                                                </h4>
                                                                <h4 className="my-4 text-[14px] text-prgcolor">
                                                                    Des formations ponctuelles ou en ligne sur :
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        la pédagogie par projet,
                                                                    </li>
                                                                    <li>
                                                                        l’usage des outils libres,
                                                                    </li>
                                                                    <li>
                                                                        et l’éducation inclusive.
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Ressources pédagogiques prêtes à l’emploi
                                                                </h4>
                                                                <h4 className="my-4 text-[14px] text-prgcolor">
                                                                    Vous souhaitez tester nos outils dans votre classe ?<br/>
                                                                    Vous avez envie de participer à la création de
                                                                    ressources ?<br/>
                                                                    Nous construisons avec vous des solutions concrètes
                                                                    et accessibles. Contactez notre équipe pédagogique
                                                                    ou proposez un partenariat.
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTabThree === 'b' && (
                                                        <div className="tab_one_content_b">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-center text-[24px] pb-2">
                                                                    Modèle pour une structuration commune de<br/>
                                                                    l’éducation dans la francophonie
                                                                </h4>

                                                                <div className="custom_table mt-6">
                                                                    <div className="overflow-auto">
                                                                        <table
                                                                            className="table-auto border-2 border-primary border-collapse w-full text-[14px]">
                                                                            <thead>
                                                                            <tr className="bg-primary text-left">
                                                                                <th className="border border-primary p-2 text-white text-[16px] font-medium">NIVEAU</th>
                                                                                <th className="border border-primary p-2 text-white text-[16px] font-medium">CYCLE</th>
                                                                                <th className="border border-primary p-2 text-white text-[16px] font-medium">CLASSE</th>
                                                                                <th className="border border-primary p-2 text-white text-[16px] font-medium">ABRÉVIATION</th>
                                                                                <th className="border border-primary p-2 text-white text-[16px] font-medium">ANNÉE</th>
                                                                                <th className="border border-primary p-2 text-white text-[16px] font-medium">ÂGE
                                                                                    MOYEN
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>

                                                                            {/* MATERNELLE */}
                                                                            <tr>
                                                                                <td className="border border-b-2 border-primary p-2"
                                                                                    rowSpan={3}>MATERNELLE
                                                                                </td>
                                                                                <td className="border border-primary p-2">Petite
                                                                                    section
                                                                                </td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">PS</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">3
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">Moyenne
                                                                                    section
                                                                                </td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">MS</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">4
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-b-2 border-primary p-2">Grande
                                                                                    section
                                                                                </td>
                                                                                <td className="border border-b-2 border-primary p-2">-</td>
                                                                                <td className="border border-b-2 border-primary p-2">GS</td>
                                                                                <td className="border border-b-2 border-primary p-2">-</td>
                                                                                <td className="border border-b-2 border-primary p-2">5
                                                                                    ans
                                                                                </td>
                                                                            </tr>

                                                                            {/* PRIMAIRE */}
                                                                            <tr>
                                                                                <td className="border border-primary border-b-2 p-2 bg-[#F2F2F2] font-semibold"
                                                                                    rowSpan={6}>PRIMAIRE
                                                                                </td>
                                                                                <td className="border border-primary p-2"
                                                                                    rowSpan={2}>Cours préparatoire
                                                                                </td>
                                                                                <td className="border border-primary p-2">1re
                                                                                    primaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">P1</td>
                                                                                <td className="border border-primary p-2">Année
                                                                                    1
                                                                                </td>
                                                                                <td className="border border-primary p-2">6
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">2e
                                                                                    primaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">P2</td>
                                                                                <td className="border border-primary p-2">Année
                                                                                    2
                                                                                </td>
                                                                                <td className="border border-primary p-2">7
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2"
                                                                                    rowSpan={2}>Cours élémentaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">3e
                                                                                    primaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">P3</td>
                                                                                <td className="border border-primary p-2">Année
                                                                                    3
                                                                                </td>
                                                                                <td className="border border-primary p-2">8
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">4e
                                                                                    primaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">P4</td>
                                                                                <td className="border border-primary p-2">Année
                                                                                    4
                                                                                </td>
                                                                                <td className="border border-primary p-2">9
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-b-2 border-primary p-2"
                                                                                    rowSpan={2}>Cours moyen
                                                                                </td>
                                                                                <td className="border border-primary p-2">5e
                                                                                    primaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">P5</td>
                                                                                <td className="border border-primary p-2">Année
                                                                                    5
                                                                                </td>
                                                                                <td className="border border-primary p-2">10
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-b-2 border-primary p-2">6e
                                                                                    primaire
                                                                                </td>
                                                                                <td className="border border-b-2 border-primary p-2">P6</td>
                                                                                <td className="border border-b-2 border-primary p-2">Année
                                                                                    6
                                                                                </td>
                                                                                <td className="border border-b-2 border-primary p-2">11
                                                                                    ans
                                                                                </td>
                                                                            </tr>

                                                                            {/* SECONDAIRE */}
                                                                            <tr>
                                                                                <td className="border border-b-2 border-primary p-2 bg-[#F2F2F2] font-semibold"
                                                                                    rowSpan={6}>SECONDAIRE
                                                                                </td>
                                                                                <td className="border border-primary p-2"
                                                                                    rowSpan={3}>Collège
                                                                                </td>
                                                                                <td className="border border-primary p-2">1re
                                                                                    secondaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">S1</td>
                                                                                <td className="border border-primary p-2">Année
                                                                                    7
                                                                                </td>
                                                                                <td className="border border-primary p-2">12
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">2e
                                                                                    secondaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">S2</td>
                                                                                <td className="border border-primary p-2">Année
                                                                                    8
                                                                                </td>
                                                                                <td className="border border-primary p-2">13
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">3e
                                                                                    secondaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">S3</td>
                                                                                <td className="border border-primary p-2">Année
                                                                                    9
                                                                                </td>
                                                                                <td className="border border-primary p-2">14
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-b-2 border-primary p-2"
                                                                                    rowSpan={3}>Lycée
                                                                                </td>
                                                                                <td className="border border-primary p-2">4e
                                                                                    secondaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">S4</td>
                                                                                <td className="border border-primary p-2">Année
                                                                                    10
                                                                                </td>
                                                                                <td className="border border-primary p-2">15
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">5e
                                                                                    secondaire
                                                                                </td>
                                                                                <td className="border border-primary p-2">S5</td>
                                                                                <td className="border border-primary p-2">Année
                                                                                    11
                                                                                </td>
                                                                                <td className="border border-primary p-2">16
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-b-2 border-primary p-2">6e
                                                                                    secondaire
                                                                                </td>
                                                                                <td className="border border-b-2 border-primary p-2">S6</td>
                                                                                <td className="border border-b-2 border-primary p-2">Année
                                                                                    12
                                                                                </td>
                                                                                <td className="border border-b-2 border-primary p-2">17
                                                                                    ans
                                                                                </td>
                                                                            </tr>

                                                                            {/* SUPÉRIEUR */}
                                                                            <tr>
                                                                                <td className="border border-primary p-2 bg-[#F2F2F2] font-semibold"
                                                                                    rowSpan={12}>SUPÉRIEUR
                                                                                </td>
                                                                                <td className="border border-primary p-2"
                                                                                    rowSpan={2}>*BTS / BUT
                                                                                </td>
                                                                                <td className="border border-primary p-2">1re
                                                                                    BTS / BUT
                                                                                </td>
                                                                                <td className="border border-primary p-2">B1</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">18
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">2e
                                                                                    BTS / BUT
                                                                                </td>
                                                                                <td className="border border-primary p-2">B2</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">19
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2"
                                                                                    rowSpan={4}>Licence
                                                                                </td>
                                                                                <td className="border border-primary p-2">1re
                                                                                    licence
                                                                                </td>
                                                                                <td className="border border-primary p-2">L1</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">18
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">2e
                                                                                    licence
                                                                                </td>
                                                                                <td className="border border-primary p-2">L2</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">19
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">3e
                                                                                    licence
                                                                                </td>
                                                                                <td className="border border-primary p-2">L3</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">20
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">4e
                                                                                    licence
                                                                                </td>
                                                                                <td className="border border-primary p-2">L4</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">21
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2"
                                                                                    rowSpan={2}>Maîtrise
                                                                                </td>
                                                                                <td className="border border-primary p-2">1re
                                                                                    maîtrise
                                                                                </td>
                                                                                <td className="border border-primary p-2">M1</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">22
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">2e
                                                                                    maîtrise
                                                                                </td>
                                                                                <td className="border border-primary p-2">M2</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">23
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2"
                                                                                    rowSpan={4}>Doctorat
                                                                                </td>
                                                                                <td className="border border-primary p-2">1re
                                                                                    doctorat
                                                                                </td>
                                                                                <td className="border border-primary p-2">D1</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">24
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">2e
                                                                                    doctorat
                                                                                </td>
                                                                                <td className="border border-primary p-2">D2</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">25
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">3e
                                                                                    doctorat
                                                                                </td>
                                                                                <td className="border border-primary p-2">D3</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">26
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="border border-primary p-2">4e
                                                                                    doctorat
                                                                                </td>
                                                                                <td className="border border-primary p-2">D4</td>
                                                                                <td className="border border-primary p-2">-</td>
                                                                                <td className="border border-primary p-2">27
                                                                                    ans
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>

                                                                <h4 className="mt-4 text-[14px] text-graycolor">
                                                                    *En France, le brevet de technicien supérieur (BTS)
                                                                    et le bachelor universitaire de technologie (BUT)
                                                                    sont des formations courtes qui
                                                                    se déroulent respectivement en deux et trois années
                                                                    d’études après le bac.
                                                                </h4>
                                                                <h4 className="mt-4 text-[16px] text-primary font-semibold">
                                                                    Note importante
                                                                </h4>
                                                                <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                    Le présent tableau constitue une proposition de
                                                                    structuration pédagogique visant à faciliter la
                                                                    comparaison des systèmes éducatifs
                                                                    francophones. Il s'agit d'une représentation
                                                                    indicative et non normative. Les terminologies,
                                                                    durées de formation et structures peuvent
                                                                    différer selon les cadres nationaux en vigueur
                                                                    (France, Québec, Belgique, Haïti, etc.).
                                                                </h4>
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
                                                <div
                                                    className="tab_box block space-y-3 md:space-y-0 md:flex justify-start mx-8 items-center gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabFour('a')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTabFour === 'a'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Pour les institutions
                                                    </button>
                                                </div>

                                                {/*Tab Content*/}
                                                <div className="mt-8 mx-8">
                                                    {activeTabFour === 'a' && (
                                                        <div className="tab_one_content_a">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    Pour les institutions
                                                                </h4>
                                                                <h4 className="text-[14px] font-semibold mt-4">
                                                                    Des ressources pédagogiques adaptées à vos besoins
                                                                    éducatifs, culturels et sociaux.
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="text-[14px] text-prgcolor mb-4">
                                                                    Chez Nosres Books, nous collaborons avec des
                                                                    établissements scolaires, collectivités locales,
                                                                    ONG,
                                                                    bibliothèques, associations et organismes de
                                                                    formation pour favoriser un accès équitable à des
                                                                    contenus
                                                                    éducatifs de qualité.
                                                                </h4>
                                                                <h4 className="font-medium text-[18px]">
                                                                    Ce que nous proposons aux institutions
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-4 space-y-3">
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[16px]">
                                                                        Des ouvrages adaptés à tous les niveaux
                                                                    </h4>
                                                                    <h4 className="mt-1 text-[14px] text-prgcolor">
                                                                        De la maternelle au supérieur, nos livres sont
                                                                        conçus pour accompagner les apprentissages à
                                                                        chaque étape du
                                                                        parcours éducatif.
                                                                    </h4>
                                                                </div>
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[16px]">
                                                                        Des offres spéciales pour les structures
                                                                    </h4>
                                                                    <h4 className="mt-1 text-[14px] text-prgcolor">
                                                                        Nous proposons des tarifs préférentiels pour les
                                                                        achats groupés, ainsi que des packs thématiques
                                                                        ou
                                                                        sur-mesure selon vos objectifs pédagogiques.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[16px]">
                                                                        Un accompagnement personnalisé
                                                                    </h4>
                                                                    <h4 className="mt-1 text-[14px] text-prgcolor">
                                                                        Notre équipe vous conseille dans le choix des
                                                                        collections, l’organisation d’ateliers
                                                                        pédagogiques, ou l’intégration
                                                                        de nos ouvrages dans vos projets éducatifs.
                                                                    </h4>
                                                                </div>
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[16px]">
                                                                        Un service de distribution optimisé
                                                                    </h4>
                                                                    <h4 className="mt-1 text-[14px] text-prgcolor">
                                                                        Livraison directe dans les établissements,
                                                                        facturation adaptée au secteur public ou
                                                                        associatif, et possibilité de
                                                                        commandes à l’année.
                                                                    </h4>
                                                                </div>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Intégrer nos livres dans vos projets
                                                                </h4>
                                                                <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                    <li>
                                                                        Bibliothèques scolaires ou municipales
                                                                    </li>
                                                                    <li>
                                                                        Classes à projet, écoles alternatives,
                                                                        établissements spécialisés
                                                                    </li>
                                                                    <li>
                                                                        Actions éducatives territoriales
                                                                    </li>
                                                                    <li>
                                                                        Programmes de remédiation, d’inclusion ou
                                                                        d’éducation populaire
                                                                    </li>
                                                                    <li>
                                                                        Initiatives culturelles ou multilingues
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Demande de devis ou de partenariat
                                                                </h4>
                                                                <h4 className="text-prgcolor text-[14px] mt-2">
                                                                    Vous avez un projet précis ou souhaitez recevoir
                                                                    notre catalogue institutionnel ? Contactez-nous à
                                                                    :<br/>
                                                                    <Link href='#'
                                                                          className="text-primary hover:underline">institutions@nosres.com</Link>
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-6">
                                                                <h4 className="font-medium text-[18px]">
                                                                    Demande de devis ou de partenariat
                                                                </h4>
                                                                <h4 className="text-prgcolor text-[14px] mt-2">
                                                                    Collectivités, écoles, bibliothèques et associations
                                                                    utilisent déjà nos ouvrages dans leurs projets
                                                                    éducatifs.
                                                                    Rejoignez-les pour faire vivre une éducation plus
                                                                    inclusive, créative et accessible.
                                                                </h4>
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
                                                <div
                                                    className="tab_box block space-y-3 md:space-y-0 md:flex justify-start mx-8 items-center gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabFive('a')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTabFive === 'a'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Service clientèle
                                                    </button>
                                                </div>

                                                {/*Tab Content*/}
                                                <div className="mt-8 mx-8">
                                                    {activeTabFive === 'a' && (
                                                        <div className="tab_one_content_a">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    Service clientèle
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-4 space-y-6">
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[16px]">
                                                                        Quels sont les délais de livraison ?
                                                                    </h4>
                                                                    <h4 className="mt-1 text-[14px] text-prgcolor">
                                                                        Les délais de livraison dépendent de votre
                                                                        localisation. Comptez entre 4 et 6 semaines pour
                                                                        la réception de
                                                                        votre commande. Veuillez noter que les envois en
                                                                        livraison standard ne sont pas suivis.
                                                                    </h4>
                                                                </div>
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[16px]">
                                                                        Quels moyens de paiement acceptez-vous ?
                                                                    </h4>
                                                                    <h4 className="mt-1 text-[14px] text-prgcolor">
                                                                        Nous acceptons les paiements par carte bancaire
                                                                        (Visa, MasterCard), virement, et via certaines
                                                                        plateformes
                                                                        sécurisées (Stripe, PayPal, etc.).
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[16px]">
                                                                        Puis-je retourner ou échanger un produit ?
                                                                    </h4>
                                                                    <h4 className="mt-1 text-[14px] text-prgcolor">
                                                                        Oui. Vous disposez d’un délai de 30 jours après
                                                                        réception pour effectuer un retour, à condition
                                                                        que l’article soit
                                                                        en parfait état. Pour les modalités complètes,
                                                                        consultez notre politique de retour.
                                                                    </h4>
                                                                </div>
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[16px]">
                                                                        Comment obtenir un devis ?
                                                                    </h4>
                                                                    <h4 className="mt-1 text-[14px] text-prgcolor">
                                                                        Pour une demande de devis (collectivités,
                                                                        établissements scolaires, associations, etc.),
                                                                        contactez-nous à :
                                                                        clients@nosres.com.
                                                                    </h4>
                                                                </div>
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[16px]">
                                                                        Proposez-vous des remises pour les achats
                                                                        groupés ?
                                                                    </h4>
                                                                    <h4 className="mt-1 text-[14px] text-prgcolor">
                                                                        Oui, nous offrons des tarifs préférentiels pour
                                                                        les commandes en volume (établissements,
                                                                        médiathèques,
                                                                        associations, etc.). Contactez-nous pour un
                                                                        devis personnalisé.
                                                                    </h4>
                                                                </div>
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[16px]">
                                                                        Je n’ai pas reçu ma commande. Que faire ?
                                                                    </h4>
                                                                    <h4 className="mt-1 text-[14px] text-prgcolor">
                                                                        Veuillez vérifier votre e-mail de confirmation
                                                                        d’expédition (avec suivi). En cas de souci,
                                                                        écrivez-nous à :
                                                                        support@nosres.com, en indiquant votre numéro de
                                                                        commande. Les réclamations pour non réception
                                                                        des
                                                                        produits doivent être formulées dans les 60
                                                                        jours suivant la commande.
                                                                    </h4>
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
                                                <div
                                                    className="tab_box block space-y-3 md:space-y-0 md:flex justify-start mx-8 items-center gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabSix('a')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTabSix === 'a'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Droits
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabSix('b')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTabSix === 'b'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        Permissions
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveTabSix('c')}
                                                        className={`text-[14px] py-2 px-6 rounded-full cursor-pointer ${
                                                            activeTabSix === 'c'
                                                                ? 'bg-[#F4F4F4] text-primary font-semibold'
                                                                : 'bg-[#F4F4F4] text-prgcolor hover:text-primary'
                                                        }`}
                                                    >
                                                        FAQ permissions
                                                    </button>
                                                </div>

                                                {/*Tab Content*/}
                                                <div className="mt-8 mx-8">
                                                    {activeTabSix === 'a' && (
                                                        <div className="tab_one_content_a">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    Droits et permissions
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-4 space-y-6">
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        1. Propriété intellectuelle
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Chez Nosres Books, nous plaçons la
                                                                        reconnaissance des auteurs et autrices au cœur
                                                                        de notre démarche
                                                                        éditoriale. Chaque œuvre est le fruit d’un
                                                                        travail intellectuel, créatif et engagé, et il
                                                                        est fondamental pour nous de
                                                                        respecter les droits de celles et ceux qui y
                                                                        contribuent.
                                                                        <br/>
                                                                        <br/>
                                                                        Lorsque vous collaborez avec Nosres Books, vous
                                                                        conservez l’entière propriété intellectuelle de
                                                                        vos œuvres. En
                                                                        tant qu’auteur ou autrice, vous restez titulaire
                                                                        des droits d’auteur sur vos textes,
                                                                        illustrations, schémas, contenus
                                                                        pédagogiques ou toute autre contribution
                                                                        originale.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        2. Licence d’exploitation
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Vous nous accordez une licence d’exploitation
                                                                        (exclusive ou non exclusive, selon les termes de
                                                                        votre contrat) qui
                                                                        nous autorise à :
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            publier vos contenus dans nos ouvrages,
                                                                        </li>
                                                                        <li>
                                                                            les adapter à différents formats (papier,
                                                                            numérique, interactif),
                                                                        </li>
                                                                        <li>
                                                                            les diffuser sur nos plateformes ou celles
                                                                            de nos partenaires,
                                                                        </li>
                                                                        <li>
                                                                            les traduire ou les décliner dans d’autres
                                                                            contextes éducatifs.
                                                                        </li>
                                                                    </ul>
                                                                    <h4 className="mt-4 text-[14px] text-prgcolor">
                                                                        Cette licence est encadrée par un contrat clair
                                                                        et transparent, qui précise les usages
                                                                        autorisés, les limites
                                                                        d’exploitation et les conditions de
                                                                        réutilisation.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        3. Transparence et respect de l’œuvre
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Nous nous engageons à vous informer et consulter
                                                                        en amont pour tout projet de modification
                                                                        substantielle de
                                                                        votre œuvre (traduction, adaptation, diffusion
                                                                        élargie, etc.). Notre objectif est de préserver
                                                                        l’intégrité de votre
                                                                        travail et de valoriser votre contribution dans
                                                                        le respect de vos choix et de votre vision
                                                                        pédagogique.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        4. Licence d’exploitation
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Les modalités de rémunération sont définies dans
                                                                        votre contrat, incluant :
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            les redevances calculées sur les ventes
                                                                        </li>
                                                                        <li>
                                                                            les conditions de versement,
                                                                        </li>
                                                                        <li>
                                                                            les droits secondaires éventuels (licences,
                                                                            réutilisations, éditions internationales).
                                                                            Vous êtes toujours
                                                                            associé·e aux décisions importantes
                                                                            concernant l’exploitation de votre œuvre
                                                                            au-delà du cadre initial.
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTabSix === 'b' && (
                                                        <div className="tab_one_content_b">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    Permissions
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-4 space-y-6">
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        1. Œuvres protégées
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        L’ensemble des contenus publiés par Nosres Books
                                                                        est protégé par le droit d’auteur. Cela concerne
                                                                        notamment :
                                                                    </h4>

                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            les textes et chapitres
                                                                        </li>
                                                                        <li>
                                                                            les illustrations et infographies
                                                                        </li>
                                                                        <li>
                                                                            les exercices, fiches pédagogiques et
                                                                            supports numériques,
                                                                        </li>
                                                                        <li>
                                                                            les documents téléchargeables ou
                                                                            imprimables.
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        2. Usage pédagogique autorisé (enseignants &
                                                                        classes)
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Les enseignants utilisant nos ouvrages dans un
                                                                        cadre scolaire peuvent :
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            reproduire ponctuellement un extrait en
                                                                            classe,
                                                                        </li>
                                                                        <li>
                                                                            projeter des pages à l’écran ou sur une
                                                                            plateforme fermée,
                                                                        </li>
                                                                        <li>
                                                                            distribuer certaines ressources aux élèves,
                                                                            à condition que cela reste dans un cadre
                                                                            pédagogique non
                                                                            commercial.
                                                                        </li>
                                                                    </ul>
                                                                    <h4 className="mt-4 text-[14px] text-prgcolor">
                                                                        Aucune demande formelle n’est nécessaire dans ce
                                                                        contexte, tant que les contenus ne sont pas
                                                                        publiés ou
                                                                        distribués à plus grande échelle.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        3. Réutilisation externe (sur autorisation)
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Une autorisation écrite est requise dans les cas
                                                                        suivants :
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            reproduction dans un autre manuel, site ou
                                                                            plateforme,
                                                                        </li>
                                                                        <li>
                                                                            traduction ou adaptation dans une autre
                                                                            langue,
                                                                        </li>
                                                                        <li>
                                                                            citation longue ou intégration dans un
                                                                            projet éditorial,
                                                                        </li>
                                                                        <li>
                                                                            diffusion dans une conférence, une formation
                                                                            ou un produit numérique tiers.
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        4. Procédure de demande
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Pour toute demande d’autorisation, merci
                                                                        d’écrire à permissions@nosres.com en précisant :
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            le contenu visé (titre, auteur, extrait,
                                                                            image, etc.)
                                                                        </li>
                                                                        <li>
                                                                            l’usage envisagé (support, durée, public),
                                                                        </li>
                                                                        <li>
                                                                            e volume de diffusion et la langue utilisée.
                                                                        </li>
                                                                    </ul>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Nous répondons à chaque demande dans un délai de
                                                                        7 à 10 jours ouvrés, et nous nous efforçons de
                                                                        soutenir les
                                                                        initiatives éducatives alignées avec nos
                                                                        valeurs.
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}


                                                    {activeTabSix === 'c' && (
                                                        <div className="tab_one_content_c">
                                                            <div className="box">
                                                                <h4 className="font-semibold text-[24px] pb-2 border-b border-bordercolor">
                                                                    FAQ permissions
                                                                </h4>
                                                            </div>

                                                            <div className="box mt-4 space-y-6">
                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        Puis-je utiliser un extrait d’un livre Nosres
                                                                        Books dans mon cours ?
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Oui, à condition que l’usage soit strictement
                                                                        pédagogique et non commercial, dans le cadre de
                                                                        votre
                                                                        enseignement en classe (présentiel ou à
                                                                        distance). Vous pouvez projeter un extrait, en
                                                                        distribuer une copie à vos
                                                                        élèves ou l’intégrer à une activité, sans
                                                                        demande préalable.
                                                                        <br/>
                                                                        <br/>
                                                                        <b>Attention :</b> cela ne vous autorise pas à
                                                                        republier l’extrait sur un site web public ou à
                                                                        l’utiliser dans<br/> un manuel
                                                                        tiers.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        Dois-je demander une autorisation pour citer un
                                                                        passage dans un article ou mémoire ?
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Si la citation est courte (moins de 10 lignes ou
                                                                        10 % de l’œuvre), correctement référencée et
                                                                        utilisée à des fins
                                                                        de critique, analyse ou illustration, vous
                                                                        n’avez pas besoin d’autorisation.
                                                                        <br/>
                                                                        <br/>
                                                                        En revanche, pour les extraits longs ou
                                                                        reproduits dans leur intégralité, une demande
                                                                        doit être adressée à
                                                                        permissions@nosres.com.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        Puis-je publier des contenus de Nosres Books sur
                                                                        une plateforme éducative (ENT,
                                                                        Moodle, Google Classroom, etc.) ?
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Oui, dans le cadre d’un usage pédagogique privé
                                                                        et sécurisé (accessible uniquement à vos élèves
                                                                        ou collègues
                                                                        enseignants).
                                                                        <br/>
                                                                        <br/>
                                                                        La mise à disposition de fichiers sur des
                                                                        plateformes publiques ou ouvertes à un large
                                                                        public nécessite une
                                                                        autorisation formelle.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        Puis-je traduire un chapitre ou une ressource
                                                                        dans une autre langue ?
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Non, pas sans autorisation. Toute traduction
                                                                        partielle ou complète est considérée comme une
                                                                        adaptation de
                                                                        l’œuvre, protégée par le droit d’auteur.
                                                                        Veuillez soumettre votre demande à
                                                                        permissions@nosres.com en
                                                                        précisant le contenu concerné, la langue cible,
                                                                        et le public visé.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        Je souhaite utiliser une illustration ou une
                                                                        fiche dans un autre ouvrage. Est-ce possible ?
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Cela dépend du contexte. Pour toute
                                                                        réutilisation dans un manuel, une brochure, une
                                                                        publication commerciale
                                                                        ou institutionnelle, vous devez obtenir une
                                                                        autorisation écrite. Veuillez nous fournir les
                                                                        détails du projet pour que
                                                                        nous puissions évaluer la demande.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        Les contenus de Nosres Books sont-ils libres de
                                                                        droits ?
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Non. Tous les contenus de Nosres Books sont
                                                                        protégés par le droit d’auteur. Ils ne peuvent
                                                                        être copiés, modifiés
                                                                        ou diffusés librement sans accord préalable,
                                                                        sauf dans les cas précis autorisés (voir
                                                                        question 1).
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        Combien de temps faut-il pour obtenir une
                                                                        réponse à une demande de permission ?
                                                                    </h4>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Nous traitons les demandes dans un délai moyen
                                                                        de 7 à 10 jours ouvrés. Pour les projets urgents
                                                                        ou à échéance
                                                                        courte, merci de le préciser dans votre message.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        Comment faire une demande de permission ?
                                                                    </h4>
                                                                    <h4 className="mt-4 text-[14px] text-prgcolor">
                                                                        Envoyez un email à permissions@nosres.com avec
                                                                        les informations suivantes :
                                                                        <br/>
                                                                        Objet : <span className="italic">Demande de permission – [Nom de l’ouvrage]</span>
                                                                        <br/>
                                                                        Veuillez inclure :
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            le contenu visé (titre, auteur, extrait,
                                                                            image, etc.),
                                                                        </li>
                                                                        <li>
                                                                            l’usage envisagé (support, durée, public),
                                                                        </li>
                                                                        <li>
                                                                            le volume de diffusion et la langue
                                                                            utilisée.
                                                                        </li>
                                                                    </ul>
                                                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                                                        Nous répondons à chaque demande dans un délai de
                                                                        10 à 15 jours ouvrés, et nous nous efforçons de
                                                                        soutenir
                                                                        les initiatives éducatives alignées avec nos
                                                                        valeurs.
                                                                    </h4>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        Quels sont les tarifs et conditions ?
                                                                    </h4>
                                                                    <ul className="mt-2 text-[14px] space-y-2 text-prgcolor list-disc pl-[30px]">
                                                                        <li>
                                                                            Les conditions varient selon la nature de
                                                                            l’usage (gratuit / commercial / académique)
                                                                        </li>
                                                                        <li>
                                                                            Certaines permissions peuvent être accordées
                                                                            à titre gracieux dans un but éducatif, non
                                                                            lucratif ou solidaire
                                                                        </li>
                                                                        <li>
                                                                            Toute utilisation non autorisée peut faire
                                                                            l’objet d’une mise en demeure ou de
                                                                            poursuites
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="wrap">
                                                                    <h4 className="font-medium text-[18px]">
                                                                        Comment proposer des projets en partenariats et
                                                                        coéditions ?
                                                                    </h4>
                                                                    <h4 className="text-prgcolor text-[14px] mt-2">
                                                                        Si vous êtes une maison d’édition, une ONG, une
                                                                        collectivité ou un acteur éducatif souhaitant
                                                                        développer un
                                                                        projet conjoint avec Potos Livres, vous pouvez
                                                                        également nous contacter à
                                                                        partenariats@nosres.com.
                                                                    </h4>
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
        </>
    );
}

export default Details;