import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Login from "./Login";
import Register from "./Register";
import { NavLink, Route, Routes } from "react-router-dom";

function HeaderUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <div> */}
      <NavLink
        to={"/blog/login"}
        className="dma-btn--yellow"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FontAwesomeIcon icon={icon({ name: "user" })} />
      </NavLink>
      {/* </div> */}

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Container className="h-100 d-flex align-items-center">
          <Routes>
            <Route path="/blog/Register" element={<Register />}></Route>
            <Route path="/blog/Login" element={<Login />}></Route>
          </Routes>
        </Container>
      </Modal>
    </>
  );
}
export default HeaderUser;
