import React from 'react';
import { Link } from 'react-router-dom';
import { Land, LogoStyle, LandPageStyle } from '../style/index.jsx';
function LandPage({WhereToGo}) {
  return (
    <LandPageStyle>
   <Land/>
   <LogoStyle/>
   <button><Link className='link' to={WhereToGo}>Enter</Link></button>
   </LandPageStyle>
  )
}
export default LandPage;