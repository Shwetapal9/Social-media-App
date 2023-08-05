import Header from "./components/Header";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};


export default App;
