import React, { useState } from "react";
import Login from "./Login";
import OTP from "./otp";

export default function LoginMediator() {
    const [isLogin, setLogin] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState("");
    const moveUp = () => {
        setLogin(false);
    };
    const phoneSetter = (phone) => {
        setPhoneNumber(phone);
    };
    return (
        <div>
            {isLogin ? (
                <Login moveUp={moveUp} phone={phoneSetter} />
            ) : (
                <OTP phoneNumber={phoneNumber} />
            )}
        </div>
    );
}
