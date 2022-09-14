import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

export const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    @media (max-width: 768px) {
      font-size: 0.8rem;
      scroll-behavior: auto;
    }
  }
  body {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}
body:after{
    content: "";
    display: block;
    height: 50px;
}
.scrolled {
    background: #333333e3 !important;
    padding: 0!important;
    height: 50px!important;
    align-items: center;
    a {
      padding: 10px 10px !important;
    }
    .Logo a {
      padding: 0!important;
    }
     .Logo-img {
        width: 50% !important;
    }
  }
  .notScrolled {
    align-items: center;
  }
  @media (max-width: 1000px) {
    .notScrolled {
      padding: 0!important;
    }
  }
`;
/* export const SubmittButton = styled(motion.button)`
  background: ${(p: { $primary: any }) => (p.$primary ? 'indigo' : 'red')};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: calc(8px + 2vmin);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${(p: { $primary: any }) => (p.$primary ? 'indigo' : 'red')};
    color: white;
  }
`; */

export const Nav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: flex-end;
  background: #333;
  padding: 10px 0;
  color: #fff;
  font-size: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 2px;
  top: 0;
  width: 100%;
  height: 60px;
  line-height: 40px;
  transition: all 0.1s ease-in-out;
  z-index: 999 !important;

  a {
    color: #fff;
    text-decoration: none;
    height: 20px;
    line-height: 20px;
    padding: 10px 0.5vw;
    margin: 0 2px;
    border-radius: 5px;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    :hover {
      background: #fff;
      color: #333;
    }
  }
  .active {
    background-color: #fff;
    color: #333;
  }
  @media (min-width: 1000px) {
    .navlinks {
      display: flex;
      align-items: center;
      margin: 0 0 0 20px;
    }
    .hamburger-react {
      display: none;
    }
    .hammenu {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    .navlinks {
      display: none;
    }
    .hamburger-react {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 40px;
      height: 40px;
    }
    .hammenu {
      padding-top: 60px;
      top: 0;
      display: flex;
      flex-direction: column;
      position: absolute;
      background: #333;
    }
  }

  .Logo > a {
    width: 65px;
    height: 65px;
    top: 0;
    left: 0;
    padding: 0;
    margin-top: 10px;
    margin-left: 10px;
    position: absolute;
    :hover {
      background: none;
    }
  }
  .Logo-img {
    width: 100%;
    height: auto;
    margin: 0;
    filter: invert(100%);
    transition: all 0.3s ease-in-out;
  }
  .Logo-img:hover {
    filter: invert(70%);
  }
  @media (max-width: 1000px) {
    .Logo-img {
      width: 70%;
      height: auto;
    }
  }
`;

export const Foot = styled.footer`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  color: #fff;
  bottom: 0;
  font-size: 8px;
  letter-spacing: 2px;
  width: 100%;
  line-height: 2;
  height: 50px;

  p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 2px;
    line-height: 2;
  }

  p a {
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease-in-out;
    :hover {
      color: #7e804d;
    }
  }

  .insta {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 1vmax;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 3px solid #8a8a8a;
    color: rgb(119, 119, 119);
    text-decoration: none;
    transition: 0.5s;
    z-index: 1;
    overflow: hidden;
  }
  .insta:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #3b5999;
    transition: 0.5s;
    z-index: 2;
  }
  .insta:hover:before {
    top: 0;
  }
  .insta:hover svg {
    color: #fff;
    transform: rotateY(360deg);
  }
  svg {
    position: relative;
    width: 70%;
    height: 70%;
    transition: 0.5s;
    z-index: 3;
  }
`;
