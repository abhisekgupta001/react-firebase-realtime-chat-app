import { useState, useRef } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Chat from "./components/Chat";
import "./styles/Chat.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    cookies.get("auth-token")
  );
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  if (!isAuthenticated) {
    return (
      <div className="App">
        <Auth setIsAuthenticated={setIsAuthenticated} />
      </div>
    );
  }

  const signOutUser = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuthenticated(false);
    setRoom(null);
  };

  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label>Enter Room Name</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat Room
          </button>
        </div>
      )}

      <div className="sign-out">
        <button onClick={signOutUser}>Signout</button>
      </div>
    </>
  );
}

export default App;
