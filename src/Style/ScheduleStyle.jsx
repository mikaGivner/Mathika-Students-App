import styled from 'styled-components'
import "../index.css"
const ScheduleStyle = styled.div`
width:100%;
display:flex;
justify-content:${props => (props.size === `large` ? `center` : `space-around`)};`
export default ScheduleStyle;