import React from "react";

function Login() {
  const [users, setUsers] = React.useState([]);
  const [firstName, setfirstName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signedIn, setSignedIn] = React.useState(false);
  const initialState = [
      {
          id: 1,
          name: "Baju Bola",
          quantity: 1
      }
  ]
  const [items, setItems] = React.useState(initialState)
  const [cartItems, setCartItems] = React.useState([])  
 

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
            <p style={{fontWeight: 'bold'}}> Dashboard, Anda memiliki {cartItems.length} items</p>{" "}
            {
                items.map((item) => (
                    <span>
                        {item.name}
                        
                        <button onClick={() => {
                            
                            setCartItems([...cartItems, item])
                        }}>Add to cart</button>
                  </span>  
                ))
            } 
        <button onClick={() => setSignedIn(false)}> Logout </button>{" "}
      </div>
    );
  }
  return (
    <div>
     
      <label for="fname"> First name: </label>{" "}
      <input
        type="text"
        id="fname"
        name="fname"
        value={firstName}
        onChange={(e) => setfirstName(e.target.value)}
      />{" "}
      
      <label for="lname"> Password: </label> 
      <input
        type="password"
        id="lname"
        name="lname"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      
      <button onClick={() => signin(firstName, password)}> Submit </button>{" "}
    </div>
  );
}

export default Login;
