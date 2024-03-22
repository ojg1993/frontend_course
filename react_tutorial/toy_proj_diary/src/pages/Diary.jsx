import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id}&apos; diary</div>;
};

export default Diary;
