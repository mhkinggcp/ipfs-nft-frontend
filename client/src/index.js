import CountDisplay from "./components/CountDisplay";
import ReactDOM from "react-dom";

function Index() {
  return <h1>Hello, world for the <CountDisplay/> th time!</h1>;
}

ReactDOM.render(<Index />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
