import React, { useState, useEffect } from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import { Loader } from "semantic-ui-react";

import axios from "axios";
import "./style.css";
function AdminGuidesList() {
  const [guides, setGuides] = useState();
  useEffect(() => {
    axios
      .get("/guide/api/admin/getGuides")
      .then((res) => {
        if (res.data.status) {
          setGuides(res.data.data.reverse());
          console.log(res.data.data);
        }
      })
      .catch((err) => console.dir(err));
  }, [guides]);
  return (
    <div className="admin-guides-list">
      <h1>Guides's list</h1>
      {guides ? (
        <Card.Group className="admin-guides-list-container">
          {guides.map((guide) => (
            <Card color={guide.isReserved ? "red" : "green"}>
              <Image
                src={`data:image/gif;base64,${guide.imgUrl}`}
                wrapped
                size="medium"
                ui={false}
              />
              <Card.Content>
                <Card.Header>{guide.name}</Card.Header>
                <Card.Meta>
                  <span className="date">{guide.phone}</span>
                </Card.Meta>
                <Card.Description>{guide.resume}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="point" />
                  {guide.adress}
                </a>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      ) : (
        <div className="admin-guides-list-spinner">
          <Loader active inline />
        </div>
      )}
    </div>
  );
}

export default AdminGuidesList;
