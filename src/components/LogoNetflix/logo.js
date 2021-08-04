import styled from "styled-components";
import logo from "../../assets/img/NetflixLogoSvg.svg";

// attrs - attributes
const Logo = styled.img.attrs({ src: logo, alt: "Logo da Netflix" })`
    height: 3rem;
    cursor: pointer;
`;

export default Logo;
