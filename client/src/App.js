import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Card } from "./components/card/Card";
import { posts } from "./data";
import { io } from "socket.io-client";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  //because we are gonna use socket in navbar also , let's make useState
  const [socket, setSocket] = useState(io("http://localhost:5000"));

  // useEffect(() => {
  //   setSocket(io("http://localhost:5000"));
  // }, []);

  useEffect(() => {
    socket?.emit("newUser", user);
  }, [socket, user]);

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar socket={socket} />
          {posts.map((post) => (
            <Card key={post.id} post={post} socket={socket} user={user} />
          ))}

          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
