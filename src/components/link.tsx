import * as React from 'react';

interface IProps {
  active: any
  children: any;
  onClick(): void;
  filter: any;
  word: string;
}

const Link: React.SFC<IProps> = ({ active, word , children, onClick, filter }) => {
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