const ChangePhoneImg = () => {
    const ImageArray =["/asset/screenshot1-2x.png", "/asset/screenshot2-2x.png", "/asset/screenshot3-2x.png", "/asset/screenshot4-2x.png"]
    return (
        <>
            <div className={"imageWrapper"}>
                <img className={"phone-border"} src={"/asset/iphone_case.png"} alt={"0"}/>
                <img className={"phone-contents"} src={"/asset/screenshot1-2x.png"} alt={"1"}/>
            </div>
        </>
    )
}

export default ChangePhoneImg