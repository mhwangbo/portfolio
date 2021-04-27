import React from 'react';
import './About.css'

const initChangeText = (id: string, texts: string[], duration: number[], delay: number[]) => {
    let durs: number[] = [];
    for (let i = 0; i < texts.length - 1; i++) {
        let beforeDur;
        if (i === 0)
            beforeDur = 0;
        else
            beforeDur = durs[i - 1];
        durs.push(duration[i] + delay[i] + beforeDur);
    }

    let mainChangeText = () => {
        for (let i = 0; i < texts.length; i++) {
            setTimeout(() => {
                document.getElementById(id)!.innerHTML = texts[i];
            }, i === 0 ? 0 : durs[i - 1])

        }
    }
    mainChangeText();
}


export const About = () => {
   window.addEventListener('load', function() {
       initChangeText(
           "fade",
            [
               "<div class='fade'>Welcome to my portfolio</div>", 
               "<div class='fade'>My name is <div class='fade name'><div class='grow'>Mi Hwangbo</div></div></div>",
            ],
           [4500, 13500],
           [0, 0]
       )
   }) 
    
    return (
        <>
            <div className="fade" id="fade">
            </div>
        </>
    );
};