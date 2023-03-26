import { viewNote } from "../../api"
import paperBg from "../../assets/Paper.png"
import AnimatedEnvelope from "../../components/AnimatedEnvelope";
import Delayed from "../../components/Delayed";
import {Content } from "../../types"
import { useState } from "react";

interface ViewProps {
    title: string,
    to: string,
    from: string,
    content: Content, 
}

const View = ({
    title,
    to,
    from,
    content, 
}: ViewProps) => {
    // returning text
    const note = viewNote().then(res => {
        console.log(res);
        return res;
    });

    const [isAnimationVisible, setIsAnimationVisible] = useState(true);

    setTimeout(() => {
        setIsAnimationVisible(false);
    }, 5000);

    return (
        <>
        {isAnimationVisible ? <AnimatedEnvelope /> : <> </>}
        <Delayed waitBeforeShow={5000}>
        <div className="relative text-black">
            <img src={paperBg} alt="paper background" className = "w-[600px]"/>
            <div className= "flex-col flex-wrap">
                <h1 className="absolute top-6 right-10 font-libre"> 
                    03/26/2023
                </h1>
                <h1 className="absolute top-4 left-10 font-libre">
                    to:{' '}{to}
                </h1>
                <h1 className= "absolute top-10 left-10 font-libre">
                    from:{' '}{from}
                </h1>
                <h1 className= "absolute top-20 left-10 font-libre text-3xl max-w-[500px] break-words">
                    {/* // establish max character count */}
                    {title}
                </h1>
                <p className= "text-black font-redacted absolute top-32 left-10 max-w-[500px] break-words">
                    {content.text}
                </p>
            </div>
            <div className="mt-4 flex justify-between">
                <button className= "rounded bg-indigo-700 px-6 py-3 text-lg font-serif leading normal text-white"
                type="button" >
                    Share letter
                </button>
                <button className="rounded bg-indigo-700 px-6 py-3 text-lg font-serif leading normal text-white">
                    Create a letter
                </button>
            </div>
     
        </div>
        </Delayed>
    </>
    )
}

export default View