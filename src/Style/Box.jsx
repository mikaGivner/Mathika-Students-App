import styled from 'styled-components'
import "../index.css"
const Box = styled.div`
width:100%;
height:13rem;
background: var(--box-bg);
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
overflow:hidden;
display: flex;
flex-direction: column;
justify-content:space-between;
padding: 0.5rem 0;
margin-bottom: 1rem;
`
export default Box;