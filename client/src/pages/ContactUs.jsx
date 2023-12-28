import React, { useState, useRef } from "react";
import PublicNavBar from "../components/PublicNavBar";
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
import { Button, Form } from "semantic-ui-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
function ContactUs() {
  const [senderFullName, setSenderFullName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMail = () => {
    setLoading(true);
    emailjs
      .send(
        "service_whjeaph",
        "template_ruzfomh",
        {
          fullName: senderFullName,
          email: senderEmail,
          phone: senderPhone,
          message,
        },
        "eGTtr5-CzrADGeGL_"
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success("Your email was sent successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setSenderFullName("");
          setSenderEmail("");
          setSenderPhone("");
          setMessage("");
        },
        (error) => {
          toast.error("Error ❌", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setLoading(false);
        }
      );
  };
  return (
    <div>
      <PublicNavBar />
      <div className="contact-us-hero">
        <div className="contact-us-intro">
          <h1>Contact Us</h1>
          <h3>Let's keep in touch</h3>
        </div>
      </div>
      <div className="contact-us-details">
        <div className="contact-us-details-item">
          <h4>Contact Our Agency</h4>
          <p>
            At Tourizto we want to make sure that your trip is everything you
            could possibly dream of. Whether you want inspiration and guidance
            in planning your next adventure or need help with an existing
            booking, our travel experts are here to help. Send us an email or
            give our team a call to book your flights, plan your adventure or
            get help with any problems you encounter along the way. Or if you’re
            in New York, you can visit us in store to speak face to face. Our
            assistance doesn’t end when you take off either. Our Global Travel
            Help team are on hand to assist with any issues you may have.
          </p>
        </div>
        <div className="contact-us-details-item">
          <h4>Our Contacts</h4>
          <ul>
            <li>
              <CiLocationOn size={18} />
              <span>2000 Le Bardo, Tunis</span>
            </li>
            <li>
              <CiPhone size={18} />
              <span>99478521</span>
            </li>
            <li>
              <CiMail size={18} />
              <span>tourizto@contact.com</span>
            </li>
          </ul>
        </div>
        <div className="contact-us-details-item">
          <h4>Any Questions?</h4>
          <Form>
            <Form.Input
              fluid
              name="fullName"
              placeholder="Full Name"
              onChange={(e) => {
                setSenderFullName(e.target.value);
              }}
            />
            <Form.Input
              fluid
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setSenderEmail(e.target.value);
              }}
            />
            <Form.Input
              fluid
              name="phone"
              placeholder="Phone"
              onChange={(e) => {
                setSenderPhone(e.target.value);
              }}
            />
            <Form.TextArea
              fluid
              name="message"
              placeholder="Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Button
              color="orange"
              onClick={() => {
                handleSendMail();
              }}
              type="submit"
              loading={loading}
            >
              Send
            </Button>
          </Form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default ContactUs;
