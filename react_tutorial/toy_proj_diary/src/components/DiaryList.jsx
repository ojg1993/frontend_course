import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    // 원본 배열을 수정하지 않고 정렬된 복사본을 반환함
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate); // Descending
      } else {
        return Number(b.createdDate) - Number(a.createdDate); // Ascending
      }
    });
  };
  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>Latest</option>
          <option value={"oldest"}>Oldest</option>
        </select>
        <Button
          text={"New Diary"}
          type={"POSITIVE"}
          onClick={() => nav("/new")}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
