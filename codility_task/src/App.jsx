import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(100);
  const [dislikes, setDislikes] = useState(25);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const increment = () => {
    if (!liked) {
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const decrement = () => {
    if (!disliked) {
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
      setDislikes(dislikes + 1);
      setDisliked(true);
    } else {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  };
  return (
    <>
      <button onClick={increment} className={liked ? "linked" : "dismiss"}>
        Like | <span>{likes}</span>
      </button>
      <button onClick={decrement}>
        DisLike | <span>{dislikes}</span>
      </button>
      <style>
        {`
        .linked{
          border:10px solid black;
          }
          `}
      </style>
    </>
  );
}

export default App;
