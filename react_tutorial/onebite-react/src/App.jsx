import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const btnProps = {
    text: "Mail",
    color: "red",
  };
  return (
    <>
      <Button {...btnProps} />
      <Button text={"cafe"} color={"brown"} />
      <Button text={"blog"}>
        <Header />
      </Button>
      <Button>
        <div>chidren</div>
      </Button>
    </>
  );
}

export default App;
