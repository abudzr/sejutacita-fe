import { React } from "react";
import "../../assets/css/navbar.css"
import logo from "../../assets/img/LINE-TODAY.png"
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

function Navbar() {
  const NavUnlisted = styled.ul`
    display: flex;
  
    a {
      text-decoration: none;
    }
  
    li {
      color:#292929;
      margin: 0 0.8rem;
      font-size: 1.3rem;
      position: relative;
      list-style: none;
    }
  
    .current {
      li {
        border-bottom: 2px solid #000;
      }
    }
  `;
  return (
    <>
      <div className="rectangle">
        <div className="container">
          <div className="d-flex justify-content-between">
            <img src={logo} width="140" height="40" alt="profile" />
            <NavUnlisted>
              <NavLink to="/" activeClassName="current" exact>
                <li>Home</li>
              </NavLink>
              <NavLink to="/bookmark" activeClassName="current" exact>
                <li>Bookmark</li>
              </NavLink>
            </NavUnlisted>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar;