import { Fragment } from "react";
const Square = ({value}) => {
  const handleClick = e => {
    e.prevenDefault();
    
  }
  return (
    <button onClick={handleClick} className="bg-white font-medium border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">
      {value}
    </button>
  );
};
const Board = () => {
  return (
    <Fragment>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </Fragment>
  );
};

export default Board;
