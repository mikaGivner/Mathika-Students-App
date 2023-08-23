import { Link } from 'react-router-dom';
import { Box,PageInsideBox } from '../Style';
import ScheduleTeacher from '../Pages/ScheduleTeacher';
import "../index.css";
function BoxComponent() {
  const pagesArr=[{whichPage:<ScheduleTeacher/>, toPage:"/Teacher/calendar"},
    {whichPage:<div>{" movies"}</div>, toPage:"/"},
    ]
    return (
    <>
    {pagesArr.map(boxPresent=>{
        return <Box key={Math.random()}>
           <PageInsideBox>{boxPresent.whichPage}</PageInsideBox>
           <div>
                <Link style={{height:"10%"}} className='link' to={boxPresent.toPage}> <div>Click for more</div></Link>
           </div>
        </Box>
    })}
</>
  )
}
export default BoxComponent