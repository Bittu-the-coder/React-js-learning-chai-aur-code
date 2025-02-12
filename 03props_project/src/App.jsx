import "./App.css";
import { Card } from "./Card";

function App() {
  let myObj = {
    username: "Bittu",
    age: 19,
  };
  return (
    <>
      <div className="flex justify-between">
        <Card channel="chaiaurcode" username={myObj.username}></Card>
        <Card btnText="Know more" username={myObj.username}></Card>
      </div>
    </>
  );
}

export default App;
