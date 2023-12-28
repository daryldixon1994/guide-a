import React, { useState, useEffect } from "react";
import {
  Loader,
  Table,
  Card,
  Image,
  Icon,
  Dropdown,
  Modal,
  Button,
  Form,
  Input,
} from "semantic-ui-react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "./style.css";
function AdminGuidesList() {
  const [guides, setGuides] = useState();
  const [pending, setPending] = useState(false);
  const [guideData, setGuideData] = useState();
  const [guidePhoto, setGuidePhoto] = useState();
  const [guideId, setGuideId] = useState();
  const [loading, setLoading] = useState(false);
  const [updatePhoto, setUpdatePhoto] = useState(false);
  const [open, setOpen] = useState(false);

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
  const handleDeleteGuide = (id) => {
    axios
      .delete(`/guide/api/admin/deleteGuide/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message, {
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
      })
      .catch((err) => console.dir(err));
  };
  const handleEditGuide = () => {
    setLoading(true);
    axios
      .put(`/guide/api/admin/updateGuide?GuideId=${guideId}`, guideData)
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          setOpen(false);
          setLoading(false);
          toast.success("Updated successfully", {
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
      })
      .catch((err) => {
        console.dir(err);
        setLoading(false);
      });
  };
  const handleConfirmGuide = (id) => {
    axios
      .put(`/guide/api/admin/confirmGuide?GuideId=${id}`)
      .then((res) => {
        setPending(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  const handleAvailableGuide = (id) => {
    axios
      .put(`/guide/api/admin/unpokeGuide?GuideId=${id}`)
      .then((res) => {})
      .catch((err) => {
        console.dir(err);
      });
  };
  const handleUpdatePhoto = () => {
    setLoading(true);
    let photoForm = new FormData();
    photoForm.append("photo", guidePhoto);
    axios
      .put(`/guide/api/admin/updatePhotoGuide?id=${guideId}`, photoForm)
      .then((res) => {
        setLoading(false);
        setOpen(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <div className="admin-guides-list">
      <h1>Guides's list</h1>
      <div style={{ marginBottom: "20px" }}>
        <h5>Filter</h5>
        <Button
          onClick={() => {
            setPending(!pending);
          }}
        >
          {pending ? "All" : "Pending"}
        </Button>
      </div>
      {guides ? (
        <Card.Group className="admin-guides-list-container">
          {pending && (
            <div>
              <p>No data.</p>
            </div>
          )}
          {guides
            .filter((guide) => {
              return pending ? guide.isPending : guide;
            })
            .map((guide) => (
              <>
                <Card
                  className="card-admin-guide"
                  color={guide.isReserved && guide.user ? "red" : "green"}
                >
                  <Image src={guide.imgUrl} wrapped size="medium" ui={false} />
                  {/* {guide.imgUrl.includes(".png") ||
                guide.imgUrl.includes(".jpeg") ||
                guide.imgUrl.includes(".jpg") ? (
                ) : (
                  <Image
                    src={`data:image/gif;base64,${guide.imgUrl}`}
                    wrapped
                    size="medium"
                    ui={false}
                  />
                )} */}
                  <Card.Content>
                    <Card.Header>{guide.name}</Card.Header>
                    <Dropdown
                      className="admin-guide-card-dropdown"
                      icon="ellipsis vertical"
                      text="Options"
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item
                          text="Edit"
                          onClick={() => {
                            setUpdatePhoto(false);
                            setGuideId(guide._id);
                            setOpen(true);
                          }}
                        />
                        <Dropdown.Item
                          text="Update Photo"
                          onClick={() => {
                            setUpdatePhoto(true);
                            setGuideId(guide._id);
                            setOpen(true);
                          }}
                        />
                        {guide.isPending && (
                          <Dropdown.Item
                            text="Confirm guide"
                            onClick={() => {
                              handleConfirmGuide(guide._id);
                            }}
                          />
                        )}
                        {guide.user && (
                          <Dropdown.Item
                            text="Set available"
                            onClick={() => {
                              handleAvailableGuide(guide._id);
                            }}
                          />
                        )}
                        <Dropdown.Item
                          text="Delete"
                          onClick={() => {
                            handleDeleteGuide(guide._id);
                          }}
                        />
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
                      <Table padded>
                        <Table.Body>
                          <Table.Row>
                            <Table.Header>
                              <Table.HeaderCell width={1}>
                                Username
                              </Table.HeaderCell>
                            </Table.Header>
                            <Table.Cell width={1}>
                              {guide.user.userName}
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Header>
                              <Table.HeaderCell width={1}>
                                Phone{" "}
                              </Table.HeaderCell>
                            </Table.Header>
                            <Table.Cell width={1}>
                              {guide.user.phone}{" "}
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Header>
                              <Table.HeaderCell width={1}>
                                Email
                              </Table.HeaderCell>
                            </Table.Header>
                            <Table.Cell width={1}>
                              {guide.user.email}
                            </Table.Cell>
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
              </>
            ))}
          <Modal open={open} size="tiny">
            <Modal.Header>
              {updatePhoto ? "Update Photo" : " Update guide"}
            </Modal.Header>
            <Modal.Content>
              {updatePhoto ? (
                <Form>
                  <Form.Group widths="equal">
                    <Form.Field
                      control={Input}
                      type="file"
                      onChange={(e) => {
                        setGuidePhoto(e.target.files[0]);
                      }}
                    />
                  </Form.Group>
                </Form>
              ) : (
                <Form
                  onChange={(e) => {
                    setGuideData({
                      ...guideData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <Form.Group widths="equal">
                    <Form.Field
                      control={Input}
                      name="name"
                      placeholder="Name"
                    />
                    <Form.Field
                      control={Input}
                      name="phone"
                      placeholder="Phone"
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Field
                      control={Input}
                      name="adress"
                      placeholder="Adress"
                    />
                    <Form.Field
                      control={Input}
                      name="resume"
                      placeholder="Resume"
                    />
                  </Form.Group>
                </Form>
              )}
            </Modal.Content>
            <Modal.Actions>
              <Button color="black" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              {updatePhoto ? (
                <Button
                  content="Edit"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => {
                    handleUpdatePhoto();
                  }}
                  positive
                  loading={loading}
                />
              ) : (
                <Button
                  content="Edit"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => {
                    handleEditGuide();
                  }}
                  positive
                  loading={loading}
                />
              )}
            </Modal.Actions>
          </Modal>
        </Card.Group>
      ) : (
        <div className="admin-guides-list-spinner">
          <Loader active inline />
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default AdminGuidesList;
