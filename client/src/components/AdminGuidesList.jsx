import React, { useState, useEffect } from "react";
import {
  Loader,
  Table,
  Card,
  Image,
  Icon,
  Dropdown,
  Modal,
} from "semantic-ui-react";
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
          // console.log("guides:", res.data.data);
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
            <Card
              className="card-admin-guide"
              color={guide.isReserved && guide.user ? "red" : "green"}
            >
              <Image
                src={`data:image/gif;base64,${guide.imgUrl}`}
                wrapped
                size="medium"
                ui={false}
              />
              <Card.Content>
                <Card.Header>{guide.name}</Card.Header>
                <Dropdown
                  className="admin-guide-card-dropdown"
                  icon="ellipsis vertical"
                  text="Options"
                >
                  <Dropdown.Menu>
                    <Dropdown.Item text="Edit" />
                    <Dropdown.Item text="Delete" />
                  </Dropdown.Menu>
                </Dropdown>
                <Card.Meta>
                  <span className="date">{guide.phone}</span>
                </Card.Meta>
                <Card.Description>{guide.resume}</Card.Description>
              </Card.Content>
              {guide.user && (
                <Card.Content extra>
                  <span>Selected by</span>
                  {/* <a>
                    <Icon name="user" />
                    {guide.user.userName}
                  </a>
                  <span>{guide.user.phone} </span>
                  <span>{guide.user.email} </span> */}
                  <Table padded>
                    <Table.Body>
                      <Table.Row>
                        <Table.Header>
                          <Table.HeaderCell width={1}>
                            Username
                          </Table.HeaderCell>
                        </Table.Header>
                        <Table.Cell width={1}>{guide.user.userName}</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Header>
                          <Table.HeaderCell width={1}>Phone </Table.HeaderCell>
                        </Table.Header>
                        <Table.Cell width={1}>{guide.user.phone} </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Header>
                          <Table.HeaderCell width={1}>Email</Table.HeaderCell>
                        </Table.Header>
                        <Table.Cell width={1}>{guide.user.email}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Content>
              )}
              <Card.Content extra>
                <span>
                  <Icon name="point" />
                  {guide.adress}
                </span>
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
