import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import Button from "../components/Button";
import Header from "../components/Header";

import { getEmotionImage } from "./util/get-emtion-image";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

/**
 * 1. /     : Home
 * 2. /new  : New diary page
 * 3. /diary: diary detail page
 */
function App() {
  const nav = useNavigate();

  const onClickBtn = () => {
    nav("/new");
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text="<" />}
        rightChild={<Button text=">" />}
      />
      <Button text={"Button"} />
      <Button text={"Button"} type={"POSITIVE"} />
      <Button text={"Button"} type={"NEGATIVE"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
