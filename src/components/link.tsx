import * as React from 'react';


const Link = ({ active, word , children, onClick, filter }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href= '#' 
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

export default Link;