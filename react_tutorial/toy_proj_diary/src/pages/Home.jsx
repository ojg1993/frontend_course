import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle";

import { DiaryStateContext } from "../App";

import { useState, useContext } from "react";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1, // d
    0, // hr
    0, // min
    0 // sec
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, // setting last day of the last month
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  usePageTitle("Emotion Diary");

  // 월별 렌더링 데이터 필터링 데이터 할당
  const monthlyData = getMonthlyData(pivotDate, data);

  // 좌측 버튼 이벤트 핸들러
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  // 우측 버튼 이벤트 핸들러
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (
    <div>
      <Header
        // 월은 0월부터 시작하므로 + 1 처리
        title={`
                ${pivotDate.getFullYear()}. ${pivotDate.getMonth() + 1} 
                `}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
