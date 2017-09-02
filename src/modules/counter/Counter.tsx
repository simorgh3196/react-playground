import * as React from 'react';

export interface Props {
  count: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Counter({ count, onIncrement, onDecrement }: Props) {
  return (
    <div className="count">
      <div className="greeting">
        Count: {count}
      </div>
      <div>
        <button onClick={onDecrement}>
          -
        </button>
        <button onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
