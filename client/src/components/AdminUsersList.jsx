import React, { useState, useEffect } from "react";
import "./style.css";
import { Button, Card, Image } from "semantic-ui-react";
import axios from "axios";
function AdminUsersList() {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("/guide/api/admin/getUsers")
      .then((res) => {
        if (res.data.status) {
          setUsers(res.data.data);
          console.log(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, [users]);
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
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default AdminUsersList;
