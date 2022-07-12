import styled from "styled-components";
import Facebook from "../../assets/facebook-square-brands.svg";
import Linkedin from "../../assets/linkedin-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    filter: invert(100%);
    transition: all 0.2s ease-in-out;
  }
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
`;
const LeftText = styled.div`
  text-align: left;
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2021 Built and Design by{" "}
        <a href="https://liang.netlify.app/">
          @CodeLove
        </a>
      </LeftText>
      <RightText>
        Reach out to me via 😉
        <a href="https://linkedin.com/in/liang-zhaowei-a486a5189/">
          <img src={Linkedin} alt="Linkedin" />
        </a>
        &nbsp;
        <a href="https://facebook.com/sterling.white.1401/">
          <img src={Facebook} alt="Facebook" />
        </a>
        &nbsp;
        <a href="mailto:cimaster85@gmail.com?subject=Email From Your Website">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;

//© 2021 by CodeLove. Design by @CodeLove.
