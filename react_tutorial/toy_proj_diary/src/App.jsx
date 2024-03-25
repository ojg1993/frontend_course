import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import { useReducer, useRef, useMemo, createContext } from "react";
import { Routes, Route } from "react-router-dom";

const mockDate = [
    {
        id: 1,
        createdDate: new Date("2024-03-25").getTime(),
        emotionId: 1,
        content: "1번 일기내용",
    },
    {
        id: 2,
        createdDate: new Date("2024-03-24").getTime(),
        emotionId: 2,
        content: "2번 일기내용",
    },
    {
        id: 3,
        createdDate: new Date("2024-02-29").getTime(),
        emotionId: 3,
        content: "3번 일기내용",
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : item
            );
        case "DELETE":
            return state.filter(
                (item) => String(item.id) !== String(action.id)
            );

        default:
            return state;
    }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockDate);
    const idRef = useRef(3);

    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id,
        });
    };

    const memoizedDispatch = useMemo(() => {
        return { onCreate, onUpdate, onDelete };
    }, []);

    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{ memoizedDispatch }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/diary/:id" element={<Diary />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;
