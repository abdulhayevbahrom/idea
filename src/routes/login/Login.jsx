import React, { useState } from "react";
import "./Login.css";
import { FiX } from "react-icons/fi";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Link } from "react-router-dom";

function Login({ setOpenLogin }) {
  const [phone, setPhone] = useState("");
  return (
    <div className="login">
      <form className="loginForm">
        <FiX onClick={() => setOpenLogin(false)} />
        <h4>Kirish</h4>
        <PhoneInput
          className="phoneInput"
          defaultCountry="uz"
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
        <input type="password" placeholder="parol" />
        <button>Kirish</button>
        <Link to="/">Parolni unutdingizmi?</Link>
        <p>
          Akkauntingiz yo'qmi? <Link to={"/"}>Ro'yxatdan o'ish</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
