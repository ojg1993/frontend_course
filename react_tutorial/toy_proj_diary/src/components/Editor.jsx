import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

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

const Editor = () => {
    const emotionId = 5;

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>Today's Date</h4>
                <input type="date" />
            </section>
            <section className="emotion_section">
                <h4>Today I am feeling</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem
                            key={item.emotionId}
                            {...item}
                            isSelected={item.emotionId === emotionId}
                        />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>Today's Diary</h4>
                <textarea placeholder="How was your day ?" />
            </section>
            <section className="btn_section">
                <Button text={"Cancel"} />
                <Button text={"Submit"} type={"POSITIVE"} />
            </section>
        </div>
    );
};

export default Editor;
