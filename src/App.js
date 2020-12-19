import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/FormLogin";
import Content from "./components/Content";

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
