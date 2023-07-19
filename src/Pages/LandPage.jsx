import React from 'react';
import { Link } from 'react-router-dom';
import { Land, LandPageStyle, LogoStyle, Button } from '../Style';
function LandPage({WhereToGo}) {
  return (
    <LandPageStyle>
   <Land/>
   <LogoStyle/>
   <Link className='link' to={WhereToGo}><Button style={{margin:"2rem"}}>Enter</Button></Link>
   </LandPageStyle>
  )
}
export default LandPage;