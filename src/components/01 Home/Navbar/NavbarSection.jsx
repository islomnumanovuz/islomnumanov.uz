import React, { useState, useEffect } from "react";
import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) setScrolled(true);
    else setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("fixed");
  }

  return (
    <>
      <div className="container">
        <Navbar className={x.join(" ")} dark expand="md">
          <Link to="/" className="navbar-brand">
            <b>User</b>Dev
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <Link to="/">Home</Link> <br />
              </NavItem>
              <NavItem>
                <Link to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/portfolio">Portfolio</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Setup</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Contact</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarSection;