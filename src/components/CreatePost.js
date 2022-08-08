import React, { useState } from "react";
import "../styles/createPost.scss";

function CreatePost() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Create a Post
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>New Post</h2>
            <label>Description: </label>
            <input text="text" placeholder="Enter the Post Description"></input>
            <br />
            <input type="file"></input>
            <br />
            <button>Make Post</button>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CreatePost;
