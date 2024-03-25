import { getEmotionImage } from "../util/get-emtion-image";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = () => {
    const emotionId = 2;
    return (
        <div className="DiaryItem">
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)} />
            </div>
            <div className="info_section">
                <div className="created_date">
                    {new Date().toLocaleDateString()}
                </div>
                <div className="content">Diary Content</div>
            </div>
            <div className="btn_section">
                <Button text={"Edit"} />
            </div>
        </div>
    );
};

export default DiaryItem;
