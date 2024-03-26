import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "Best",
  },
  {
    emotionId: 2,
    emotionName: "Good",
  },
  {
    emotionId: 3,
    emotionName: "Okay",
  },
  {
    emotionId: 4,
    emotionName: "Bad",
  },
  {
    emotionId: 5,
    emotionName: "Worst",
  },
];

const getStringedDate = (targetDate) => {
  // YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

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

  const onChangeInput = (e) => {
    let name = e.target.name;
    let val = e.target.value;

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
