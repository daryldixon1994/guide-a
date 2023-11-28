import { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AdminLogin() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState();
  const handleLogin = () => {
    setLoading(true);
    axios
      .post("/guide/api/admin/login", loginData)
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          setLoading(false);
          localStorage.setItem("adminId", res.data.data.adminId);
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("isAdmin", res.data.data.isAdmin);
          navigate(`/admin/dashboard?id=${res.data.data.adminId}`);
        } else if (!res.data.status) {
          setLoading(false);
          setErrMsg(res.data.error);
        }
      })
      .catch((err) => {
        // if (err) {
        //   setLoading(false);
        //   setErrMsg(err.data.error);
        // }
        console.dir(err);
      });
  };
  return (
    <div>
      <AdminNavBar />
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

export default AdminLogin;
