import {useEffect, useMemo, useState} from "react";

const ChangePhoneImg = () => {
    const ImageArray =["/asset/screenshot1-2x.png", "/asset/screenshot2-2x.png", "/asset/screenshot3-2x.png", "/asset/screenshot4-2x.png"]
    const [index, setIndex] = useState(0)

    const prevIndex = useMemo(() => {
        return index + 1 > ImageArray.length - 1 ? 0 : index + 1
    },[index])
    console.log(prevIndex)
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(index > ImageArray.length - 2){
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
        },3000)
        return (() => {
            clearInterval(intervalId)
        })
    },[index])

    return (
        <>
            <div className={"imageWrapper"}>
                <img className={"phone-border"} src={"/asset/iphone_case.png"} alt={"0"}/>
                <img className={`phone-contents`} src={ImageArray[prevIndex]} alt={String(prevIndex)} style={{opacity:1}}/>
                <img className={`phone-contents`} src={ImageArray[index]} alt={String(index)} style={{opacity:0, transition: "ease-in-out 2s"}}/>
            </div>
        </>
    )
}

export default ChangePhoneImg