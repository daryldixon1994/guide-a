import React from "react";
import "./style.css";
import { HiAdjustments } from "react-icons/hi";
import { FaMedal, FaDatabase } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { TbUserCheck } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";
import WhyTouristoItem from "./WhyTouristoItem";

function WhyTouristo() {
  const data = [
    {
      icon: <HiAdjustments size={50} color="white" />,
      title: "PERSONALIZED MATCHING",
      desc: "We can provide up to 3 experienced travel specialists who fit best.",
    },
    {
      icon: <FaMedal size={50} color="white" />,
      title: "WIDE VARIETY OF DESTINATIONS",
      desc: "With Travellino, you’ll find a perfect destination among hundreds available.",
    },
    {
      icon: <FaThumbsUp size={50} color="white" />,
      title: "HIGHLY QUALIFIED SERVICE",
      desc: "Our high level of service is officially recognized by thousands of clients.",
    },
    {
      icon: <TbUserCheck size={50} color="white" />,
      title: "24/7 SUPPORT",
      desc: "Our travel agents are always there to support you during your trip.",
    },
    {
      icon: <IoDiamondOutline size={50} color="white" />,
      title: "HANDPICKED HOTELS",
      desc: "We pick the hotels with the utmost reputation and positive reviews.",
    },
    {
      icon: <FaDatabase size={50} color="white" />,
      title: "BEST PRICE GUARANTEE",
      desc: "We guarantee you’ll get top-notch comfort at an affordable price.",
    },
  ];
  return (
    <div className="why-touristo-container">
      <h1>Why Tourizto</h1>
      <div className="why-touristo-subcontainer">
        <div className="why-touristo-items">
          {data.map((elt, i) => (
            <WhyTouristoItem key={i} {...elt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyTouristo;
