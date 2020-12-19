function Header(props) {
  return (
    <div>
      <p>
        {props.text} | {props.name}
      </p>
      
      {/* <img src={bebas} width="120" height="100"/> */}
    </div>
  );
}

export default Header;