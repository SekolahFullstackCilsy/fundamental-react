import React from 'react';

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
      <button onClick={() => signin(firstName, password)}>Submit</button>
    </div>
  );
}

export default Login;