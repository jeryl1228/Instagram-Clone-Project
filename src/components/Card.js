import React, {useEffect, useState} from "react";
import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu.js";
import { db } from "../data/firebaseConfig";
import firebase from "firebase/compat/app"

function Card(props) {
  const {
    accountName,
    image,
    description,
    cardId,
  } = props;
  const [ comments, setComments ] = useState([]);
  const [ comment, setComment ] = useState('');

  useEffect(() => {
    let unsubscribe;
    if (cardId) {
      unsubscribe = cardId = db.collection("card").doc(cardId).collection("comments").onSnapshot((snapshot) => {
         setComments(snapshot.docs.map((doc) => doc.data()));
        });
      }
    // return () => {
    //   unsubscribe();
    // };
  }, [cardId]); 

const postComment = (event) => {
  event.preventDefault();

  db.collection("card").doc(cardId).collection("comments").add({
    text: comment,
    //accountName: accountName
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  setComment('');    
}

  return (
    <div className="card">
      <header>
        <Profile
          iconSize="medium"
          // storyBorder={storyBorder}
          username={accountName}
        />
        <CardButton className="cardButton" />
      </header>
      <img className="cardimage" src={image} alt="card content" />
      <CardMenu />
      {/* <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber}</strong>
        </span>
      </div> */}
      <span className="caption">
        <strong className="captionName">{accountName}</strong> {description}
      </span>
      {/* <div className="timePosted">{hours} HOURS AGO</div> */}
      <div className="addComment">
        {/* <div className="commentText">Add a comment...</div>
        <div className="postText">POST</div> */}
        <div className="card__comments">
        {comments.map((comment)=>(
          <p>
            {/* <b>{comment.accountName}</b> */}
          {comment.text}</p>
        ))}
        </div>
        <form>
          <input 
          className="comment_input" 
          type="text" 
          placeholder="Add your comment" 
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          />
          <button
          className="comment_button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
          >
          Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;