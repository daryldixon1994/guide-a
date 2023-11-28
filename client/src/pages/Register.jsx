import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PublicNavBar from "../components/PublicNavBar";
function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState();
  const [errMsg2, setErrMsg2] = useState();
  // console.log(userData)
  const handleRegister = () => {
    setLoading(true);
    setErrMsg();
    setErrMsg2();
    if (
      userData.email &&
      userData.phone &&
      userData.password &&
      userData.userName
    ) {
      return axios
        .post("/guide/api/user/register", userData)
        .then((res) => {
          if (res.data.status) {
            setLoading(false);

            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err.response.data.error);
          if (err.response.data.error) {
            setErrMsg2(err.response.data.error);
            setLoading(false);
          }
        });
    } else {
      setLoading(false);
      setErrMsg("Empty required fields");
    }
  };
  return (
    <div>
      <PublicNavBar />
      <div className="form-page">
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Username"
              onChange={(e) => {
                setUserData({ ...userData, userName: e.target.value });
              }}
              required
            />
            <Form.Input
              fluid
              label="Email"
              type="email"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              required
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Password"
              type="password"
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
              required
            />
            <Form.Input
              fluid
              label="Phone number"
              type="text"
              onChange={(e) => {
                setUserData({ ...userData, phone: e.target.value });
              }}
              required
            />
          </Form.Group>
          <Form.Field>
            <Link to="/login"> Already have an account? Login now.</Link>
          </Form.Field>
          {errMsg && !errMsg2 && (
            <Message negative>
              <Message.Header>Error! 🤕</Message.Header>
              <p>{errMsg}</p>
            </Message>
          )}
          {!errMsg && errMsg2 && (
            <Message negative>
              <Message.Header>Error! 🤕</Message.Header>
              <p>{errMsg2}</p>
            </Message>
          )}
          {errMsg && errMsg2 && (
            <Message negative>
              <Message.Header>Error! 🤕</Message.Header>
              <p>{errMsg}</p>
              <p>{errMsg2}</p>
            </Message>
          )}
          <Button
            color="orange"
            onClick={() => {
              handleRegister();
            }}
            loading={loading}
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
