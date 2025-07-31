import React from 'react';
import {MdOutlineExploreOff} from "react-icons/md";

function Page() {
    return (
        <>
            <section id="aucune-section">
                <div className="container">
                    <div className="mt-24 box flex flex-col items-center justify-center">
                        <MdOutlineExploreOff size={100} className="text-center text-gray-400"/>
                        <h4 className="text-[20px] mt-4 text-center text-prgcolor">
                            Aucune collection n’est actuellement disponible.
                        </h4>
                        <p className="mt-2">
                            N’hésitez pas à revenir ultérieurement.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;