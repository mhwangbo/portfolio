import React from 'react';

function createText(text: string, id: string, duration: number) {
    document.getElementById(id)!.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            let newText: string = text.substr(0, (i + 1));
            document.getElementById(id)!.innerHTML = newText;
        }, duration * i);
    }
}

function clearText(id: string, duration: number) {
    let text= document.getElementById(id)!.innerHTML;
    for (let i = text.length; i > 0; i--) {
        setTimeout(() => {
            let newText: string = text.substr(0, text.length - i);
            document.getElementById(id)!.innerHTML = newText;
        }, duration * i);
    }
}

function initSlider(id: string, texts: string[], duration: number, delay: number) {
    let durs: number[] = [];
    for (let i = 0; i < texts.length - 1; i++) {
        let beforeDur;
        if (i === 0)
            beforeDur = 0;
        else
            beforeDur = durs[i - 1];
        durs.push((texts[i].length * duration * 2) + (2 * delay) + beforeDur);
    }

    let allTime: number = 0;
    for (let i = 0; i < texts.length; i++) {
        allTime += (texts[i].length * duration * 2) + (2 * delay);
    }

    let mainSlider = function() {
        for (let i = 0; i < texts.length; i++) {
            setTimeout(()=>{
                createText(texts[i],id,duration);
                setTimeout(()=>{
                    clearText(id,duration);
                },texts[i].length*duration + delay);
            },i === 0 ? 0 : durs[i-1]);
        }
    }
    mainSlider();
    setInterval(()=>{
        mainSlider();
    },allTime);  
}

export const About = () => {
    window.addEventListener('load', function(){
        initSlider(
            'slider',
            ['Hello World', 'My name is Mi Hwangbo'],
            50,
            1000
        )
    })
    return (
        <div id='slider'></div>
    );
};