import * as React from 'react';

interface IProps {
  active: any
  children: any;
  onClick(): void;
}

const Link: React.SFC<IProps> = ({ active, children, onClick  }) => {
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