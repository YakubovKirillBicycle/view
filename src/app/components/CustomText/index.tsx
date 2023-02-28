'use client';

import { textContainer, textVariant2 } from "@/app/utils/motion";
import { motion, MotionConfig } from "framer-motion";

export const TypingText = ({title, textStyles}: {title: string, textStyles: string}) => {
    return ( 
        <motion.p
            variants={textContainer}
            className={`font-normal text-[14px] text-slate-100 ${textStyles}`}
        >
            {Array.from(title).map((letter, index) => (
                <motion.span
                    variants={textVariant2}
                    key={index}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.p>
    );
}

export const TitleText = () => {
    return ( <h2>Title text</h2> )
}