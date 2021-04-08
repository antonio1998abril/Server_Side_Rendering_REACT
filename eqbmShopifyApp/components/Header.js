import React from 'react'

import Link from 'next/link';

function Header() {
  const styles={
    display: 'flex',
    background: 'Cornsilk',
    justifyContent: 'space-between',
    padding: '1rem'
  };
    return (
     <header>
       <div style={styles}>
          <Link href="/" >
            <a>HOME</a>
          </Link>
          <Link href="/test">
            <a>TEST</a>
          </Link>
       
       </div>
      
     </header>
              
         
     
        
       
             
    )
}

export default Header
