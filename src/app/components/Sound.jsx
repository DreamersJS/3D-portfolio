'use client';

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggleAudio }) => {
    return createPortal(
        <div className="
        fixed inset-0 bg-background/60 background-blur-sm flex items-center justify-center z-100
        ">
            <div className="
            bg-background/20 border border-accent/30 border-solid background-blur-[6px]
            py-8 px-4 xs:px-10 sm:px-16 rounded shadow-glass-inset space-y-4 text-center
            ">
                <p className="
                text-lg xs:text-xl sm:text-2xl font-light
                ">Do you like to play the background music?</p>
                <div className="
                flex items-center justify-center space-x-4 
                ">
                    <button
                        onClick={toggleAudio}
                        className="
                     px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2">
                        Yes
                    </button>
                    <button
                        onClick={onClose}
                        className="
                     px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded
                    ">
                        No
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('my-modal')
    )
}

const Sound = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const musicConsent = localStorage.getItem('musicConsent');
        if (musicConsent) {
            setIsPlaying(musicConsent === 'true');
            if (musicConsent === 'true') {
                ["click", "keydown", "touchstart"].forEach((event) => {
                    document.addEventListener(event, handleFirstUserInteraction);
                });
            }
        } else {
            setShowModal(true);
        }
    }, []);

    const handleFirstUserInteraction = () => {
        const consent = localStorage.getItem('musicConsent');
        if (consent === 'true' && !isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        }
        ["click", "keydown", "touchstart"].forEach((event) => {
            document.removeEventListener(event, handleFirstUserInteraction);
        });
    };

    const toggleAudio = () => {
        const playState = !isPlaying
        setIsPlaying(!isPlaying);
        if (playState) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        localStorage.setItem('musicConsent', String(playState));
        setShowModal(false);
    };

    return (
        <div className="fixed top-4 right-2 xs:right-4 z-50 group">



            {showModal && <Modal onClose={() => setShowModal(false)} toggleAudio={toggleAudio} />}

            <audio ref={audioRef} loop>
                <source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <button
                onClick={toggleAudio}
                className='
            w-10 xs:w-12 h-10 xs:h-12 p-2 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-3 custom-bg'
                aria-label={"audio"}
                name={"audio"}>


            {
                isPlaying ?
                <Volume2 className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5} />
                :
                <VolumeX className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5} />
            }
            </button>

        </div>
    );
};
export default Sound;