import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = () => {
  const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    & > li {
      float: left;
      & > a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;

        &:hover {
          background-color: #111;
        }
      }
    }
    & > li:last-child {
      float: right;
      & > a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
    }
  `;

  const Title = styled.h2`
    text-align: center;
    font-size: 2.5em;
    margin: 0.5em;
  `;
  return (
    <>
      <Title>KIDS CAFE</Title>
      <NavBar>
        <li>
          <Link to={"/kidscafe"}>키즈 카페</Link>
        </li>
        <li>
          <Link to={"/mypage"}>마이 페이지</Link>
        </li>
        <li>
          <Link to={"/likes"}>찜❤️</Link>
        </li>
        <li>
          <Link to={"/help"}>고객 센터</Link>
        </li>
        <li>
          <Link to={"/login"}>Log In</Link>
        </li>
      </NavBar>
    </>
  );
};

export default NavigationBar;
