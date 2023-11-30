import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Button, Loader } from "semantic-ui-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function TeamItem({
  imgUrl,
  rate,
  name,
  resume,
  phone,
  adress,
  _id,
  isReserved,
  poke,
}) {
  let id = localStorage.getItem("id");
  const [loading, setLoading] = useState(false);
  const handlePokeGuide = () => {
    setLoading(true);
    axios
      .put(`/guide/api/user/chooseGuide?guideId=${_id}&id=${id}`)
      .then((res) => {
        setLoading(false);
        // console.log(res);
        toast.success(`You poked ${res.data.data.name}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <div className="team-item guide-item-2">
      <Button
        className="poke"
        color="orange"
        disabled={isReserved || poke}
        onClick={() => {
          handlePokeGuide();
        }}
        loading={loading}
      >
        Poke now!{" "}
      </Button>
      <img
        src={`data:image/gif;base64,${imgUrl} `}
        alt=""
        width="300px"
        height="500px"
        style={{ objectFit: "cover" }}
      />
      <div className=" item-2">
        <Link style={{ all: "unset", cursor: "pointer" }}>
          <h5>{name}</h5>
        </Link>
        <p> {resume} </p>
        <div className="guide-details">
          <h6>Phone: {phone} </h6>
          <h6>Adress: {adress} </h6>
        </div>
        <p>{"⭐".repeat(rate)}</p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default TeamItem;
