// const Button = (props) => {
const Button = ({ text, color, children }) => {
  const onClickBtn = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickBtn}
      // onMouseEnter={onClickBtn}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
  text: "defualt txt",
};

export default Button;
