import React, { useRef, useState } from "react";
import ContactSC from "./ContactSC";
import emailjs from "@emailjs/browser";
import { Phone, Mail, GitHub, LinkedIn } from "@material-ui/icons";
import LeetCodeIcon from "./LeetCodeIcon";
import SC from "../../themes/SC";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const [nameCheck, setNameCheck] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [subjectCheck, setSubjectCheck] = useState("");
  const [messageCheck, setMessageCheck] = useState("");
  const formRef = useRef();
  const email = "Kevin.Figenshu@gmail.com";
  const phone = "(610) 608 0468";
  const github = "github.com/KFig21";
  const linkedin = "https://www.linkedin.com/in/kevin-figenshu-4748672a/";
  const leetcode = "leetcode.com/KFig21";
  const [active, setActive] = useState("email");
  const [contactInfo, setContactInfo] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    if (nameCheck === "") {
      setMessage("Include your name!");
      // re using this code because when a message sends succesfully it takes time
      // and the message box pops up with nothing until it finishes sending
      setMessageVisible(true);
      setTimeout(async function () {
        setMessageVisible(false);
      }, 3300);
    } else if (emailCheck === "") {
      setMessage("Include your email!");
      setMessageVisible(true);
      setTimeout(async function () {
        setMessageVisible(false);
      }, 3300);
    } else if (subjectCheck === "") {
      setMessage("Include a subject!");
      setMessageVisible(true);
      setTimeout(async function () {
        setMessageVisible(false);
      }, 3300);
    } else if (messageCheck === "") {
      setMessage("Include a message!");
      setMessageVisible(true);
      setTimeout(async function () {
        setMessageVisible(false);
      }, 3300);
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage("Message Sent!");
            setMessageVisible(true);
            setTimeout(async function () {
              setMessageVisible(false);
            }, 3300);
          },
          (error) => {
            console.log(error.text);
            setMessage("An error occured :(");
            setMessageVisible(true);
            setTimeout(async function () {
              setMessageVisible(false);
            }, 3300);
          }
        );
    }
  };

  const handleInfo = (variable, str) => {
    setActive(str);
    setContactInfo(variable);
  };

  return (
    <ContactSC.ContactPage id="contact">
      {/* CORNERS */}
      <SC.PageCorner className="top left"></SC.PageCorner>
      <SC.PageCorner className="top right"></SC.PageCorner>
      <SC.PageCorner className="bottom left"></SC.PageCorner>
      <SC.PageCorner className="bottom right"></SC.PageCorner>
      {/* CONTAINER */}
      <ContactSC.ContactContainer>
        {/* LEFT */}
        <ContactSC.ContactLeft className="contact-left">
          <ContactSC.ContactTitle
            href="#contact"
            className="contact-left-title"
          >
            Lets get in touch
          </ContactSC.ContactTitle>
          <ContactSC.ContactForm
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <ContactSC.ContactInput
              type="text"
              placeholder="Name"
              name="user_name"
              onChange={(e) => setNameCheck(e.target.value)}
            />
            <ContactSC.ContactInput
              type="email"
              placeholder="Email"
              name="user_email"
              onChange={(e) => setEmailCheck(e.target.value)}
            />
            <ContactSC.ContactInput
              type="text"
              placeholder="Subject"
              name="user_subject"
              onChange={(e) => setSubjectCheck(e.target.value)}
            />
            <ContactSC.ContactMessage
              placeholder="Message"
              name="message"
              onChange={(e) => setMessageCheck(e.target.value)}
            ></ContactSC.ContactMessage>
            <ContactSC.ContactButton type="submit">
              Send
            </ContactSC.ContactButton>
          </ContactSC.ContactForm>
        </ContactSC.ContactLeft>
        {/* RIGHT */}
        <ContactSC.ContactRight className="contact-right">
          <ContactSC.ContactTitle href="#contact">
            Contact Info
          </ContactSC.ContactTitle>
          <ContactSC.ContactSubtext>
            Feel free to contact me or check me out on other platforms
          </ContactSC.ContactSubtext>
          <ContactSC.InfoContainer className="info">
            {/* email */}
            <ContactSC.ContactItem className="item-container">
              <ContactSC.ContactIcon
                className={
                  active === "email"
                    ? "contact-icon-container active"
                    : "contact-icon-container"
                }
                onClick={() => handleInfo(email, "email")}
              >
                <Mail className="icon" />
              </ContactSC.ContactIcon>
              <ContactSC.ContactItemDetails className="item-details">
                <ContactSC.ContactItemTitle className="item-span-title">
                  Email:
                </ContactSC.ContactItemTitle>
                <ContactSC.ContactItemLink
                  className="item-span"
                  id="email-contact-span"
                >
                  {email}
                </ContactSC.ContactItemLink>
              </ContactSC.ContactItemDetails>
            </ContactSC.ContactItem>
            {/* phone */}
            <ContactSC.ContactItem className="item-container">
              <ContactSC.ContactIcon
                className={
                  active === "phone"
                    ? "contact-icon-container active"
                    : "contact-icon-container"
                }
                onClick={() => handleInfo(phone, "phone")}
              >
                <Phone className="icon" />
              </ContactSC.ContactIcon>
              <ContactSC.ContactItemDetails className="item-details">
                <ContactSC.ContactItemTitle className="item-span-title">
                  Phone:
                </ContactSC.ContactItemTitle>
                <ContactSC.ContactItemLink
                  className="item-span"
                  id="phone-contact-span"
                >
                  {phone}
                </ContactSC.ContactItemLink>
              </ContactSC.ContactItemDetails>
            </ContactSC.ContactItem>
            {/* github */}
            <ContactSC.ContactItem className="item-container">
              <ContactSC.ContactIcon
                className={
                  active === "github"
                    ? "contact-icon-container active"
                    : "contact-icon-container"
                }
                onClick={() => handleInfo(github, "github")}
              >
                <GitHub className="icon" />
              </ContactSC.ContactIcon>
              <ContactSC.ContactItemDetails className="item-details">
                <ContactSC.ContactItemTitle className="item-span-title">
                  GitHub:
                </ContactSC.ContactItemTitle>
                <ContactSC.ContactItemLink
                  className="item-span"
                  id="gitHub-contact-span"
                  href="https://github.com/KFig21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {github}
                </ContactSC.ContactItemLink>
              </ContactSC.ContactItemDetails>
            </ContactSC.ContactItem>
            {/* linkedin */}
            <ContactSC.ContactItem className="item-container">
              <ContactSC.ContactIcon
                className={
                  active === "linkedin"
                    ? "contact-icon-container active"
                    : "contact-icon-container"
                }
                onClick={() => handleInfo(linkedin, "linkedin")}
              >
                <LinkedIn className="icon" />
              </ContactSC.ContactIcon>
              <ContactSC.ContactItemDetails className="item-details">
                <ContactSC.ContactItemTitle className="item-span-title">
                  LinkedIn:
                </ContactSC.ContactItemTitle>
                <ContactSC.ContactItemLink
                  className="item-span"
                  id="linkedin-contact-span"
                  href="https://www.linkedin.com/in/kevin-figenshu-4748672a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkedin}
                </ContactSC.ContactItemLink>
              </ContactSC.ContactItemDetails>
            </ContactSC.ContactItem>
            {/* leetcode */}
            <ContactSC.ContactItem className="item-container">
              <ContactSC.ContactIcon
                className={
                  active === "leetcode"
                    ? "contact-icon-container active"
                    : "contact-icon-container"
                }
                onClick={() => handleInfo(leetcode, "leetcode")}
              >
                <LeetCodeIcon class="icon" />
              </ContactSC.ContactIcon>
              <ContactSC.ContactItemDetails className="item-details">
                <ContactSC.ContactItemTitle className="item-span-title">
                  LeetCode:
                </ContactSC.ContactItemTitle>
                <ContactSC.ContactItemLink
                  className="item-span"
                  id="gitHub-contact-span"
                  href="https://leetcode.com/KFig21/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {leetcode}
                </ContactSC.ContactItemLink>
              </ContactSC.ContactItemDetails>
            </ContactSC.ContactItem>
          </ContactSC.InfoContainer>
        </ContactSC.ContactRight>
      </ContactSC.ContactContainer>
      <ContactSC.MessageContainer
        className={
          messageVisible ? "message-container active" : "message-container"
        }
      >
        <ContactSC.Message className="message">{message}</ContactSC.Message>
      </ContactSC.MessageContainer>
    </ContactSC.ContactPage>
  );
}
