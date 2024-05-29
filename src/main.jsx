import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root.jsx";

// Import pages
import Home from "./pages/Home/Home.jsx";
import Browse from "./pages/Browse/Browse.jsx";
import Radio from "./pages/Radio/Radio.jsx";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/radio",
        element: <Radio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
