import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const onChangeSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const searchTitleFunction = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/findOne/${searchTitle}`
      );
      setTutorials([response.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const retrieveTutorials = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/findall");
      setTutorials(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const removeAllTutorials = async () => {
    try {
      await axios.delete("http://localhost:3001/api/deleteAll");
      refreshList();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="list-row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="search"
            placeholder="search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={searchTitleFunction}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <button className="m-3 btn btn-sm btn-danger" onClick={refreshList}>
        Refresh List
      </button>

      <div className="col-md-6">
        <h4>Tutorial List</h4>
        <ul className="list-group">
          {tutorials.map((tutorial, index) => (
            <li
              className={
                "list-group-item" + (index === currentIndex ? " active" : "")
              }
              onClick={() => setActiveTutorial(tutorial, index)}
              key={index}
            >
              {tutorial.title}
            </li>
          ))}
        </ul>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllTutorials}
        >
          Remove All
        </button>
      </div>

      <div className="col-md-6">
        {currentTutorial ? (
          <div>
            <h4>Tutorial</h4>
            <div>
              <label>
                <strong>Title:</strong>
                {currentTutorial.title}
              </label>
            </div>
            <div>
              <h4>Description</h4>
              <div>
                <label>
                  <strong>Description:</strong>
                  {currentTutorial.description}
                </label>
              </div>
              <div>
                <h4>Status</h4>
                <div>
                  <label>
                    <strong>Status:</strong>
                    {currentTutorial.published ? "Published" : "Pending"}
                  </label>
                </div>
              </div>
            </div>
            <Link className="btn-sm btn-danger">Edit</Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please Click on a Tutorial...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Userlist;
