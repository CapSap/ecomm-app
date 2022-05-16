import Home from "./container/Home/Home";
import Nav from "./container/Nav/Nav";
import ProductPage from "./container/ProductPage/ProductPage";

const App = () => {
  return (
    <div>
      <Nav />
      <ul>
        <Home />
        <ProductPage />
        <li>Grid of products/product page</li>
        <li>featured products carousel component. </li>
        <li>
          cart system. get qty from firestore and check if qty avaliable is
          greater than qty in cart
        </li>
      </ul>
    </div>
  );
};

export default App;
