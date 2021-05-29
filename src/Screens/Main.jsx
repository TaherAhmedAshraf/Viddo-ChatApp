import React, { useState, useRef } from "react";
import "../Styles/main.css";
import global from "../Assets/Images/global.png";
import {
  firebase,
  useAuthState,
  useCollectionData,
} from "../Database/firebase.js";
import { IoExit } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

export default function Main() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const analytics = firebase.analytics();

  const [user] = useAuthState(auth);

  return (
    <>
      <div className="holder">
        <header className="chat-header">
          <div>
            <h1>Viddo</h1>
          </div>
        </header>
        <section className="chat-box-holder">
          {/* <div className="side-navigation"></div> */}
          <div className="info">
            <div className="chat-group">
              <div className="round-image">
                <img src={global} alt="global icon" />
              </div>
              <h5>Global chat</h5>
            </div>
            <div className="sign-out-btn"> {user ? <SignOut /> : <p></p>}</div>
          </div>
          <div className="chat-box">{user ? <ChatRoom /> : <SignIn />}</div>
        </section>
      </div>
    </>
  );

  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };

    return (
      <>
        <div className="text-align-center">
          <button className="sign-in" onClick={signInWithGoogle}>
            <span>
              <FcGoogle />
            </span>
            Sign in with Google
          </button>
          <p>
            We provide secure connection to our users,
            <br /> You Data is safe in our hand
          </p>
        </div>
      </>
    );
  }

  function SignOut() {
    return (
      auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
          <span className="sign-out-icon">
            <IoExit />
          </span>
          Sign Out
        </button>
      )
    );
  }

  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt");

    const [messages] = useCollectionData(query, { idField: "id" });

    const [formValue, setFormValue] = useState("");

    const sendMessage = async (e) => {
      console.log(e);
      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;

      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });

      setFormValue("");
      dummy.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
        <div className="center">
          <main>
            {messages &&
              messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

            <span ref={dummy}></span>
          </main>

          <form onSubmit={sendMessage}>
            <input
              className="message-input"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="say something nice"
            />

            <button className="send-btn" type="submit" disabled={!formValue}>
              🕊️
            </button>
          </form>
        </div>
      </>
    );
  }

  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

    return (
      <>
        <div className={`message ${messageClass}`}>
          <img
            className="profile-picture"
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
          />
          <p>{text}</p>
        </div>
      </>
    );
  }
}
