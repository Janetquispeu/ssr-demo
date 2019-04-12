import * as React from 'react';

const ButtonIncrement = ({textNumber, increment, decrement}) => {
  console.log(textNumber, 'textNumber');
  return (
    <div>
      <div>
        {textNumber}
      </div>
      <button onClick={(e) => {
          e.preventDefault()
          increment()
        }}>Increment (+)
      </button>
      <button onClick={(e) => {
          e.preventDefault()
          decrement()
        }}>Decrement (-)
      </button>
    </div>
  );
};
export default ButtonIncrement; 