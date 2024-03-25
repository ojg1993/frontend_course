import Button from "./Button";
import DiaryItem from "./DiaryItem";

import "./DiaryList.css";

const DiaryList = () => {
    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select>
                    <option value={"latest"}>Latest</option>
                    <option value={"oldest"}>Oldest</option>
                </select>
                <Button text={"New Diary"} type={"POSITIVE"} />
            </div>
            <div className="list_wrapper">
                <DiaryItem />
            </div>
        </div>
    );
};

export default DiaryList;
