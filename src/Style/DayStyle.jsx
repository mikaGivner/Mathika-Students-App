import styled from 'styled-components'
import "../index.css"
const DayStyle = styled.div`
 width:5rem;
    min-height:13rem;
    border-left:${props => (props.first === 0 ? `none` : `0.003rem solid #000`)};      
    color: ${props => (props.day === 0 ? '#000' : props.day < 0 ? '#fff' : `gray`)};
    display:flex;
    align-items:center;
    flex-direction:column;`
export default DayStyle;