import "./Main.css";

const Main = () => {
  const user = {
    name: "Jingyu Oh",
    isLogin: false,
  };

  // return <>{user.isLogin ? <div>Logout</div> : <div>Login</div>}</>;

  if (user.isLogin) {
    return <div className="logout">Logout</div>;
  } else {
    return <div className="login">Login</div>;
  }
};

export default Main;
