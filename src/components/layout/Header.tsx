import styled from "styled-components";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoBox>
        <img src={logo} alt="" />
        <img src="/public/careers.svg" alt="" />
      </LogoBox>
      <NavBox>
        <p>VISION</p>
        <p>CULTURE</p>
        <p>JOB OPENING</p>
        <OfficialLink>
          <p>OFFICIAL WEBSITE</p>
        </OfficialLink>
      </NavBox>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.04167vw 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
`;

const LogoBox = styled.div`
  display: flex;
  padding-left: 1.5625vw;
  box-sizing: border-box;
  mix-blend-mode: difference;
  img {
    height: 2.1875vw;
    mix-blend-mode: difference;
  }
  svg {
    /* fill: black; */
    mix-blend-mode: difference;
  }
  :nth-child(1) {
    width: 2.70833vw;
  }
  :nth-child(2) {
    width: 5vw;
  }
`;

const NavBox = styled.nav`
  display: flex;
  padding-right: 1.5625vw;
  p {
    padding: 0 1.5625vw;
    font-size: 20px;
    mix-blend-mode: difference;
  }
`;

const OfficialLink = styled.div`
  p {
    padding: 0 0 0 18.22917vw;
    transform: translate(0, 15);
  }
`;
