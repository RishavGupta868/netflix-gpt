import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./Utils/Store/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
