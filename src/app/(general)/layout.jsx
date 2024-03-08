import React from 'react'

function layout({children}) {
  return (
    
    <div>
        <header 
        style={{
            backgroundColor : 'lightgrey',
            fontSize : 25,
            fontWeight : 700,
            textTransform: 'capitalize',
            textAlign : 'center'
        }}
        >it is header</header>
        {children}
        <footer
        style={{
            backgroundColor : 'lightcoral',
            fontSize : 25,
            fontWeight : 700,
            textTransform: 'capitalize',
            textAlign : 'center'
        }}
        >it is footer</footer>
    </div>
  )
}

export default layout