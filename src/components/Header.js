function Header(props) {
  return (
    <div>
      <p>
        {props.text} | {props.name}
      </p>
      <br/>
      {/* <img src={bebas} width="120" height="100"/> */}
    </div>
  );
}

export default Header;