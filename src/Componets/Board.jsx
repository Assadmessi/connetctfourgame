import { useState } from 'react';
import Circles from './Circles';

const Board = () => {
  const [circles, setCircles] = useState(Array(41).fill(null));

  const handleCiclesClick = clickPosition => {
    setCircles(currentCircles => {
      return currentCircles.map((circlesValue, position) => {
        if (clickPosition === position) {
          return;
        }
        console.log(clickPosition);
        return circlesValue;
      });
    });
  };

  const renderCircles = position => {
    return (
      <Circles
        value={circles[position]}
        onClick={() => handleCiclesClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderCircles(0)}
        {renderCircles(1)}
        {renderCircles(2)}
        {renderCircles(3)}
        {renderCircles(4)}
        {renderCircles(5)}
        {renderCircles(6)}
      </div>
      <div className="board-row">
        {renderCircles(7)}
        {renderCircles(8)}
        {renderCircles(9)}
        {renderCircles(10)}
        {renderCircles(11)}
        {renderCircles(12)}
        {renderCircles(13)}
      </div>
      <div className="board-row">
        {renderCircles(14)}
        {renderCircles(15)}
        {renderCircles(16)}
        {renderCircles(17)}
        {renderCircles(18)}
        {renderCircles(19)}
        {renderCircles(20)}
      </div>
      <div className="board-row">
        {renderCircles(21)}
        {renderCircles(22)}
        {renderCircles(23)}
        {renderCircles(24)}
        {renderCircles(25)}
        {renderCircles(26)}
        {renderCircles(27)}
      </div>
      <div className="board-row">
        {renderCircles(28)}
        {renderCircles(29)}
        {renderCircles(30)}
        {renderCircles(31)}
        {renderCircles(32)}
        {renderCircles(33)}
        {renderCircles(34)}
      </div>
      <div className="board-row">
        {renderCircles(35)}
        {renderCircles(36)}
        {renderCircles(37)}
        {renderCircles(38)}
        {renderCircles(39)}
        {renderCircles(40)}
        {renderCircles(41)}
      </div>
    </div>
  );
};

export default Board;
