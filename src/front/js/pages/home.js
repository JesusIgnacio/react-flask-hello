import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { sendEmail } from "../service/emailService";

export const Home = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    email: "mail@mail.com",
    name: "Jhon Doe",
  });
  const [link, setLink] = useState("www.google.com");

  const verify = (_) => {
    if (email.localeCompare(user.email) != 0) throw Error("Invalid Email");
    let params = {
      to_email: user.email,
      to_name: user.name,
      to_link: link,
    };
    sendEmail(params);
  };

  return (
    <div className="text-center mt-5">
      <input
        title="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={verify}>Verify email</button>
    </div>
  );
};
