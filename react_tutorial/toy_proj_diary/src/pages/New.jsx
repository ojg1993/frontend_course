import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const { memoizedDispatch } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  usePageTitle("New Diary"); // 페이지 타이틀 변경

  const onSubmit = (input) => {
    memoizedDispatch.onCreate(
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
    // submit 버튼 클릭 후 뒤로가기 방지 기능
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"New Diary"}
        leftChild={<Button text="< Go Back" onClick={() => nav(-1)} />} // nav(-1) -> back
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
