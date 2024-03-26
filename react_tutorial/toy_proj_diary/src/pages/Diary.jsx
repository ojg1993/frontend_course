import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

import { useParams, useNavigate } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>Data loading...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} record`}
        leftChild={<Button onClick={() => nav(-1)} text={"< Back"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"Edit"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
