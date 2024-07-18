import "./LandingPage.css"
import ChangePhoneImg from "./ChangePhoneImg";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const LandingPage = () => {
    const [Id, setId] = useState("")
    const [password, setPassword] =useState('')

    const handleOnchangeId = (e:React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
        console.log(Id)
    }

    const handleOnchangePw = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        console.log(password)
    }

    return (
        <div className={"container"}>
            <ChangePhoneImg/>
            <div className={"input-wrapper"}>
                <div className={"input-box"}>
                    <img src={"/asset/instagram_text_logo.png"}/>
                    <input type="text" value={Id} placeholder={"전화번호, 사용자 이름 또는 이메일"} onChange={handleOnchangeId}/>
                    <input type="text" value={password} placeholder={"비밀번호"} onChange={handleOnchangePw}/>
                    <button>로그인</button>
                    <div className={"divider-wrapper"}>
                        <div className={"dash"}></div>
                        <p> 또는 </p>
                        <div className={"dash"}></div>
                    </div>
                    <div className={"facebook-login"}>
                        <div className={"facebook-login-link"}>
                            <img src={"/asset/facebookLogo.png"} />
                            <Link to={"https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dko_KR%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221o0hv6pv4bkag1iy8tsl2m1ow5hyro6hqde2h0nd9dpckaohrg%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D11dc3ae6-70cf-41ba-8fb3-7c96c7ef773e%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221o0hv6pv4bkag1iy8tsl2m1ow5hyro6hqde2h0nd9dpckaohrg%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0"}>
                                <p>Facebook으로 로그인</p>
                            </Link>
                        </div>
                        <p>비밀번호를 잊으셨나요?</p>
                    </div>

                </div>
                <div className={"go-signup"}>
                    <p>계정이 없으신가요?</p>
                    <p className={"go-signup-link"}>가입하기</p>
                </div>
                <div className={"download-app"}>
                    <p>앱을 다운로드 하세요</p>
                    <div className={"App-store"}>
                        <div><img src={"/asset/appstore.png"} alt={"App store 에서 다운로드"}/></div>
                        <div><img src={"/asset/googleplay.png"} alt={"Gogle play 에서 다운로드"}/></div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default LandingPage