import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";

import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  // Memoised object storing btn functions
  const { memoizedDispatch } = useContext(DiaryDispatchContext);
  // Diary object data
  const data = useContext(DiaryStateContext);

  const [curDiaryItem, setCurDiaryItem] = useState();
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("Invalid diary ID");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

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
        input.createdDate.getTime(),
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
