import { useEffect } from "react";
import { Header, Footer, AppRouter } from "./components";
import { fetchAuthMe } from "./redux/auth/asyncActions";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Header />
      <div className="app-container app-content">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
