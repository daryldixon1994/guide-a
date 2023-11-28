import { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginSession } from "../redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import PublicNavBar from "../components/PublicNavBar";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState();
  const handleLogin = () => {
    setLoading(true);
    axios
      .post("/guide/api/user/login", loginData)
      .then((res) => {
        if (res.data.status) {
          dispatch(loginSession());
          setLoading(false);
          localStorage.setItem("id", res.data.data.userId);
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("isUser", res.data.data.isUser);
          navigate("/guides");
        } else if (!res.data.status) {
          setLoading(false);
          setErrMsg(res.data.error);
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          setErrMsg(err.data.error);
        }
      });
  };
  return (
    <div>
      <PublicNavBar />
      <div className="form-page">
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Email"
              type="email"
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
            />
            <Form.Input
              fluid
              label="Password"
              type="password"
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Field>
            <Link to="/register"> Don't have an account? Register now.</Link>
          </Form.Field>
          {errMsg && (
            <Message negative>
              <Message.Header>Error! 🤕</Message.Header>
              <p>{errMsg}</p>
            </Message>
          )}
          <Button
            color="orange"
            onClick={() => {
              handleLogin();
            }}
            loading={loading}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
