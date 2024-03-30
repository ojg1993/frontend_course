import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(), // error risk
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)), // error risk handling
      });
    }
  }, [initData]);

  // State 관리 이벤트 핸들러
  const onChangeInput = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    // date 문자열 객체화
    if (name === "createdDate") {
      val = new Date(val);
    }

    setInput({
      ...input,
      [name]: val,
    });
  };

  const onClickSubmitBtn = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>Today is</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>Today I am feeling</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  // 컴포넌트는 이벤트 객체가 자동전달 불가로
                  // 별도의 객체를 생성하여 전달
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>Diary Content</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="How was your day ?"
        />
      </section>
      <section className="btn_section">
        <Button onClick={() => nav(-1)} text={"Cancel"} />
        <Button onClick={onClickSubmitBtn} text={"Submit"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
