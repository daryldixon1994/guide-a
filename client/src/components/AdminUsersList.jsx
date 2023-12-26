import React, { useState, useEffect } from "react";
import "./style.css";
import { Button, Card, Image } from "semantic-ui-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function AdminUsersList() {
  const [users, setUsers] = useState();
  const [usId, setUsId] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("/guide/api/admin/getUsers")
      .then((res) => {
        if (res.data.status) {
          setUsers(res.data.data);
          // console.log(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, [users]);
  const handleDleteUser = (id) => {
    setUsId(id);
    setLoading(true);
    axios
      .delete(`/guide/api/admin/deleteUser/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setLoading(false);
          toast.success(`User has been deleted successfully`, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        // console.dir(err.response.status);
        if (err.response.status === 404) {
          toast.error("Error", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  return (
    <div className="admin-users-list">
      <h1>Users's list</h1>
      <Card.Group className="admin-guides-list-container">
        {users?.map((user) => (
          <Card>
            <Card.Content>
              {user.imgUrl.endsWith(".png") ||
              user.imgUrl.endsWith(".jpg") ||
              user.imgUrl.endsWith(".jpeg") ? (
                <Image floated="right" size="mini" src={user.imgUrl} />
              ) : (
                <Image
                  floated="right"
                  size="mini"
                  src={`data:image/gif;base64,${user.imgUrl} `}
                />
              )}
              <Card.Header>{user.userName}</Card.Header>
              <Card.Meta>{user.phone}</Card.Meta>
              <Card.Description>{user.email}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  onClick={() => {
                    handleDleteUser(user._id);
                  }}
                  basic
                  color="red"
                  loading={loading && usId === user._id}
                >
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <ToastContainer />
    </div>
  );
}

export default AdminUsersList;
