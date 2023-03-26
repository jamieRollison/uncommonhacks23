import React from "react";
import Ellie from "../../assets/ellie.jpg";
import Alysa from "../../assets/alysa.jpg";
import Jamie from "../../assets/jamie.jpg";

function About() {
    return (
        <div className="flex flex-col mt-10">
            <h1 className="text-5xl text-indigo-300 font-libre italic ">Meet the Creators!</h1>
            <div className="p-10 mx-auto md:flex gap-10">
                <div className="flex flex-col items-center">
                <img src={Ellie} className="w-60 md:w-60 rounded-full mb-4"></img>
                <p className="font-libre text-xl text-pink-200 text-center pb-10">✧ Ellie Popoca ✧ <br/> she/her <br/> InfoSci @ UIUC</p>
                </div>
                <div>
                <img src={Alysa} className="w-60 md:w-60 rounded-full mb-4"></img>
                <p className="font-libre text-xl text-purple-200 text-center pb-10">✧ AG Samaniego ✧<br/> she/her <br/> Informatics @ UIUC</p>
                </div>
                <div>
                <img src={Jamie} className="w-60 md:w-60 rounded-full mb-4"></img>
                <p className="font-libre text-xl text-indigo-200 text-center pb-10">✧ Jamie Rollison ✧<br/> she/her <br/> CS @ UIUC</p>
                </div>
            </div>
            <div>
                <h1 className="text-5xl text-indigo-300 font-libre mb-2">
                    About Letra
                </h1>
                <p className="text-xl text-indigo-200 font-libre mx-10 text-center md:mx-20 lg:mx-40 mb-10">
                    Thanks for stopping by! Hi, we're the creators of Letra, a webpage on the internet for you to send letters to your heart's content.
                    As aspiring technologists, we care about the way in which we develop for the internet of the FUTURE (and the present, of course).
                    We're all about the user experience, and we hope that you enjoy using Letra as much as we enjoyed making it. This project was 
                    made for UncommonHacks @ UChicago 2023.
                </p>
            </div>
            <div className="flex justify-center p-20">
                <a href="/" className="text-blue-300 hover:text-pink-200 underline font-libre text-xl mx-10 md:mx-20 lg:mx-40">Back to home ✧</a>
            </div>
        </div>
    )
}

export default About