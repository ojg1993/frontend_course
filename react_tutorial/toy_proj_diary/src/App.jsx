import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import {
  useReducer,
  useRef,
  useMemo,
  createContext,
  useEffect,
  useState,
} from "react";
import { Routes, Route } from "react-router-dom";

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }

    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // Local Storage usage
  // Create
  //   localStorage.setItem("test", "val");
  //   localStorage.setItem("person", JSON.stringify({ name: "Jingyu Oh" }));

  // Read
  //   console.log(localStorage.getItem("person"));
  //   console.log(JSON.parse(localStorage.getItem("person"))); // undefined의 경우 error 발생

  //Delete
  //   localStorage.removeItem("test");

  // 로딩 상태관리 기능
  const [isLoading, setIsLoding] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    // 기존 데이터 없는 경우 즉시 리턴
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      // 로딩상태 변경
      setIsLoding(false);
      return;
    }

    // forEach 에러방지
    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      // 로딩상태 변경
      setIsLoding(false);
      return;
    }

    let maxId = 0;

    // maxId 설정
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });
    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    // 로딩상태 변경
    setIsLoding(false);
  }, []);

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

  // 로딩이 완료 될 경우에만 페이지 return문 진입
  if (isLoading) {
    return <div>Loading the data ...</div>;
  }
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
