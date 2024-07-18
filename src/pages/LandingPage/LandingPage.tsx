import "./LandingPage.css"
import ChangePhoneImg from "./ChangePhoneImg";

const LandingPage = () => {
    return (
        <div className={"container"}>
            <ChangePhoneImg/>
            <div className={"input-wrapper"}>
                <div className={"input-box"}>
                    <img src={"/asset/instagram_text_logo.png"}/>
                    <input type="text" placeholder={"전화번호, 사용자 이름 또는 이메일"} />
                    <input type="text" placeholder={"비밀번호"}/>
                    <button>로그인</button>
                    <div className={"divider-wrapper"}>
                        <div className={"dash"}></div>
                        <p> 또는 </p>
                        <div className={"dash"}></div>
                    </div>
                    <div className={"facebook-login"}>
                        <div className={"facebook-login-link"}>
                            <img src={"/asset/facebookLogo.png"} />
                            <p>Facebook으로 로그인</p>
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