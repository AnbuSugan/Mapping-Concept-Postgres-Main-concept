import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "bootstrap/dist/css/bootstrap.min.css";
import "./Users.css";
import Userlist from "../Userlist/Userlist";
import { Col, Row } from "react-bootstrap";

const Users = () => {
  const [tutorial, setTutorial] = useState({
    title: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const onChangeTitle = (e) => {
    setTutorial({ ...tutorial, title: e.target.value });
  };

  const onChangeDescription = (e) => {
    setTutorial({ ...tutorial, description: e.target.value });
  };

  const saveTutorial = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/create",
        tutorial
      );

      setTutorial({
        title: response.data.title,
        description: response.data.description,
      });

      setSubmitted(true);
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("API Error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const newTutorial = () => {
    setTutorial({
      title: "",
      description: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      <Row>
        <Col>
          <div>
            {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={newTutorial}>
                  Add
                </button>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="title" className="titleLabel">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={tutorial.title}
                    onChange={onChangeTitle}
                    name="title"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                  <input
                    type="message"
                    className="form-control"
                    id="description"
                    required
                    value={tutorial.description}
                    onChange={onChangeDescription}
                    name="description"
                  />
                </div>
                <button
                  onClick={saveTutorial}
                  className="btn btn-success  mt-2 buttonSubmit"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </Col>
        <Col>
          <Userlist />
        </Col>
      </Row>
    </div>
  );
};

export default Users;
