const Controller = ({ onClickBnt }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClickBnt(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickBnt(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickBnt(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickBnt(100);
        }}
      >
        100
      </button>
      <button
        onClick={() => {
          onClickBnt(10);
        }}
      >
        10
      </button>
      <button
        onClick={() => {
          onClickBnt(1);
        }}
      >
        1
      </button>
    </div>
  );
};

export default Controller;
