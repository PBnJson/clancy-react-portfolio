import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      let data = {
        name,
        phone,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.message);
        toast.error(res.data.message);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.message);
        toast.success(res.data.message);
        setBool(false);
        // RESETS FIELDS ONCE SUCCESSFUL
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      }
      //   console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Email me..."} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              steps={["Email me and follow me!", 2000]}
              loop={Infinity}
              wrapper="p"
            />
          </h2>
          <a href="https://github.com/PBnJson">
            <i className="fa fa-github-square fa-3x"></i>
          </a>

          <a href="https://www.linkedin.com/in/joshua-clancy-b57448240/">
            <i className="fa fa-linkedin-square fa-3x"></i>
          </a>

          <a href="https://twitter.com/JoshuaMClancy">
            <i className="fa fa-twitter-square fa-3x"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Please enter your contact information.</h4>
            <img src={imgBack} alt="not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="number">Phone *</label>
            <input type="text" onChange={handlePhone} value={phone} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
              <h9 className="optional">*optional</h9>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
