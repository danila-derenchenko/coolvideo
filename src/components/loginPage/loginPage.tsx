import { useRef, useState } from "react";
import "./loginPage.css";
import { Alert } from "@mui/material";
import ModalMessage from "../modalMessage/ModalMessage";

const LoginPage = () => {

    const loginRef:any = useRef('')
    const passwordRef:any = useRef('')
    const [visibleErrorMessage, setVisibleErrorMessage] = useState<boolean>(false);


    const login = () => {
        if(loginRef.current.value == '' || passwordRef.current.value == ''){
            setVisibleErrorMessage(true)
            setTimeout(() => {
                setVisibleErrorMessage(false)
            }, 3000)
        } else {
            setVisibleErrorMessage(false)
        }
    }

    return (
        <div className="loginPage">
            <ModalMessage message="Login or password is incorrect" isVisible={visibleErrorMessage} />
            <form onSubmit={(evt) => {evt.preventDefault()}} className="loginForm">
                <input ref={loginRef} placeholder="Input your login" type="text" className="loginFormInput" />
                <input ref={passwordRef} placeholder="Input your password" type="password" className="loginFormInput" />
                <button onClick={login} className="loginFormButton" type="submit">Login</button>
                <button className="loginFormButton" type="submit">Register (if you don't have an account)</button>
                <button className="loginFormButton" type="submit">Continue with Google</button>
            </form>
        </div>
    )
    
}

export default LoginPage