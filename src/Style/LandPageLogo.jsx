import styled from 'styled-components'
import "../index.css"
import logoImg from "../assets/logo-no-bg.png";
const LogoStyle = styled.div`
width:15rem;
height:7.5rem;
background: url(${logoImg}) no-repeat center center/cover;
position: absolute;
top:40%;
left: 50%;
transform: translate(-50%, -50%);`
export default LogoStyle;