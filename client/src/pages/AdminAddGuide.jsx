import React, { useState } from "react";
import { Form, Input, TextArea, Button, Message } from "semantic-ui-react";
import AdminNavBar from "../components/AdminNavBar";
import axios from "axios";
import "./style.css";
function AdminAddGuide() {
  const [guideData, setGuideData] = useState({});
  const [guidePhoto, setGuidePhoto] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sucess, setSuccess] = useState("");
  const handleSaveNewGuide = () => {
    setSuccess("");
    setLoading(true);
    let guideForm = new FormData();
    guideForm.append("photo", guidePhoto);
    guideForm.append("name", guideData.name);
    guideForm.append("phone", guideData.phone);
    guideForm.append("adress", guideData.adress);
    guideForm.append("resume", guideData.resume);
    axios
      .post("/guide/api/admin/addGuide", guideForm)
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (!res.data.status) {
          setError(res.data.error);
        } else if (res.data.status) {
          setLoading(false);
          setSuccess(res.data.message);
          setGuideData({ name: "", adress: "", phone: "", resume: "" });
          setGuidePhoto({});
        }
      })
      .catch((err) => {
        setLoading(false);
        if (!err.data.status) {
          setError(err.data.error);
        }
      });
  };

  return (
    <div>
      <AdminNavBar />
      <div className="add-guide-container">
        <h1>Add guide</h1>
        <Form className="form-container">
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              value={guideData.name}
              // label="First name"
              placeholder="Full name"
              onChange={(e) => {
                setGuideData({ ...guideData, name: e.target.value });
              }}
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              value={guideData.phone}
              // label="Last name"
              placeholder="Phone"
              onChange={(e) => {
                setGuideData({ ...guideData, phone: e.target.value });
              }}
            />
            <Form.Field
              control={Input}
              // options={genderOptions}
              // label={{
              //   children: "Gender",
              //   htmlFor: "form-select-control-gender",
              // }}
              value={guideData.adress}
              placeholder="Adress"
              onChange={(e) => {
                setGuideData({ ...guideData, adress: e.target.value });
              }}
              // search
              // searchInput={{ id: "form-select-control-gender" }}
            />
          </Form.Group>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            value={guideData.resume}
            // label="Opinion"
            placeholder="Resume"
            onChange={(e) => {
              setGuideData({ ...guideData, resume: e.target.value });
            }}
          />
          <Form.Field
            type="file"
            control={Input}
            label="Photo"
            // placeholder="joe@schmoe.com"
            // error={{
            //   content: "Please enter a valid email address",
            //   pointing: "below",
            // }}
            onChange={(e) => {
              setGuidePhoto(e.target.files[0]);
            }}
          />
          {error && (
            <Message negative>
              <Message.Header>Error! 🤕</Message.Header>
              <p>{error}</p>
            </Message>
          )}
          {sucess && (
            <Message positive>
              <Message.Header>Sucess! 💯</Message.Header>
              <p>{sucess}</p>
            </Message>
          )}
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Save"
            color="orange"
            loading={loading}
            onClick={() => {
              handleSaveNewGuide();
            }}
          />
        </Form>
      </div>
    </div>
  );
}

export default AdminAddGuide;
