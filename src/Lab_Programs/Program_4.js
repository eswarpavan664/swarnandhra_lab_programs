import React from 'react'

function Hello_With_JSX() {
  return (
   <h1>Hello Vishwas</h1>
  )
}


function Hello_Without_JSX() {
  return React.createElement('h1', null, 'Hello Vishwas');
}

export  {Hello_With_JSX,Hello_Without_JSX}