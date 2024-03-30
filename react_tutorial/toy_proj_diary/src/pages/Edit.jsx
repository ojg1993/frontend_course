import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";

import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle("Edit Diary");

  // Memoised object storing btn functions
  const { memoizedDispatch } = useContext(DiaryDispatchContext);

  // Diary object data
  const curDiaryItem = useDiary(params.id);

  // Event Handler on clicking delete btn
  const onClickDelBtn = () => {
    if (window.confirm("Delete the diary?")) {
      memoizedDispatch.onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("Click confirm to edit the content")) {
      memoizedDispatch.onUpdate(
        params.id,
        input.createdDate.getTime(), // Timestamp로 전달 !
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <div>
        <Header
          title={"Edit Diary"}
          leftChild={<Button text={"< Back"} onClick={() => nav(-1)} />}
          rightChild={
            <Button text={"Delete"} type={"NEGATIVE"} onClick={onClickDelBtn} />
          }
        />
      </div>
      <div>
        <Editor initData={curDiaryItem} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Edit;
