import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { fetchProducts } from "./redux/slice/product.slice";
import router from "./router";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
