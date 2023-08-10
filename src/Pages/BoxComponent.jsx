import React from 'react'
import { Link } from 'react-router-dom';
import { Box } from '../Style';
import "../index.css";
function BoxComponent({relevantPage, pageToGo}) {
  const pagesArr=[{whichPage:relevantPage, toPage:pageToGo},
    {whichPage:<div>add a student</div>, toPage:"/"},
    ]
    return (
    <>
    {pagesArr.map(boxPresent=>{
        return <Box key={Math.random()}>
           <div style={{height:"90%", overflow:"hidden"}}>{boxPresent.whichPage}</div>
           <div>
                <Link style={{height:"10%"}} className='link' to={boxPresent.toPage}> <div>Click for more</div></Link>
           </div>
        </Box>
    })}
</>
  )
}

export default BoxComponent