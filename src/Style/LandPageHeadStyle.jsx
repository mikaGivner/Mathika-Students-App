import styled from 'styled-components'
import "../index.css"
import bgImg from "../assets/main-bg.png";
const Land = styled.div`
width:100vw;
height:28rem;
background: url(${bgImg}) no-repeat top left/cover;
border-bottom-left-radius:50rem;
border-bottom-right-radius:30rem;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;`
export default Land;