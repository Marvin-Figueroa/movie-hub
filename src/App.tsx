import { ConfigProvider, theme } from "antd";
import useMovieQueryStore from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
  const darkMode = useMovieQueryStore((s) => s.darkMode);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#15B7DB",
        },
        algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
