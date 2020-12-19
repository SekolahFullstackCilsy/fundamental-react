import React from "react";
import "./styles/App.css";
import "./styles/sass/variable.css";
import "./styles/sass/nesting.css";
import bebas from './images/gambar.png';

function Header(props) {
  return (
    <div className="Header">
      <p className="text-header">
        {props.text} | {props.name}
      </p>
      <br/>
      <img src={bebas} width="120" height="100"/>
    </div>
  );
}
function Footer(props) {
  return (<div className="text-footer">
    <span>    
      {props.copy} {props.name} {props.tahun}    
    </span>
    </div>
  );
}
function Content(props) {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
}
function Login() {
  const [users, setUsers] = React.useState([]);
  const [firstName, setfirstName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signedIn, setSignedIn] = React.useState(false);
  function signup(name, password) {
    if (!name || !password) {
      return alert("Name atau dan password tdk blh kosong");
    }
    let Users = users.push({ name: name, password: password });
    // setUsers(users.concat(Users))
    setUsers([...users, Users]);
  }
  function signin(name, password) {
    if (name === "admin" && password === "admin") {
      setSignedIn(true);
    } else {
      alert("user tdk terdaftar");
    }
  }
  if (signedIn) {
    return (
      <div>
        <p>Ini halaman dashboard</p>
        <button onClick={() => setSignedIn(false)}>Logout</button>
      </div>
    );
  }
  return (
    <div>
      {users.map((user, index) => (
        <span key={index}>
          {user.name} {user.password}
        </span>
      ))}
      <br></br>
      <label for="fname">First name:</label>
      <br></br>
      <input
        type="text"
        id="fname"
        name="fname"
        value={firstName}
        onChange={(e) => setfirstName(e.target.value)}
      />
      <br />
      <label for="lname">Password:</label>
      <br />
      <input
        type="password"
        id="lname"
        name="lname"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => signup(firstName, password)}>Submit</button>
    </div>
  );
}
function Wrapper(props) {
  return (
    <div>
      <Header text="Selamat Datang" name="ferdy" />
      <Content>
        <Login />
      </Content>
      <Footer copy="&copy;" name="ferdy" tahun="2020" />
    </div>
  );
}
export default Wrapper;
