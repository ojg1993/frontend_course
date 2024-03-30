import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

import { getStringedDate } from "../util/get-stringed-date";
import { useParams, useNavigate } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);

  usePageTitle(`No.${params.id} Diary`);

  // useDiary의 데이터는 해당 페이지의 모든 컴포넌트가 렌더링 된 후,
  // hook 내 useEffect에 의해 반환됨으로, 초기 undefined를 핸들링 해야함
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
