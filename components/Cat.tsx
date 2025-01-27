import React, { useRef } from 'react';
import Image from 'next/image';

function Cat() {
    const audioRef = useRef<HTMLAudioElement | null>(null); // Explicitly type the ref

    const handleMouseEnter = () => {
        if (audioRef.current) {
            audioRef.current.loop = true; // Loop the sound
            audioRef.current.volume = 0.2; // Set volume to 20%
            audioRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset the audio to the start
        }
    };

    return (
        <div
            className="flex items-center justify-center w-80 h-20 cursor-pointer transition-transform duration-500 hover:animate-flipAndMoveVertical"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <audio ref={audioRef} src="/sounds/oui.mp3" />
            <Image
                src="/images/oui.png" // Replace with your cat image path
                alt="Cat"
                width={80}
                height={80}
                className="pixelated"
            />
        </div>
    );
}

export default Cat;
