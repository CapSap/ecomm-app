import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <ul>
        <Home />
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
