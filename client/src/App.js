import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
// import { words } from "./words";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])
  

  // filter by size
  const handleFilterBySize = e => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...data];
      let newProducts = productsClone.filter(product => product.sizes.indexOf(e.target.value) !== -1);
      setProducts(newProducts);
    }
  };

  // filter by order
  const handleFilterBySort = e => {
    let order = e.target.value;
    setSort(e.target.value);
    let productsClone = [...data];
    let newProducts = productsClone.sort((a, b) => {
      if (order === "lowest") {
        return a.price - b.price;
      } else if (order === "highest") {
        return b.price - a.price;
      } else {
        return b.id > a.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };

  // add product to cart
  const addToCart = product => {
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach(item => {
      if (item.id === product.id) {
        item.qty++;
        isProductExist = true;
      }
    });

    if (!isProductExist) {
      cartItemsClone.push({...product, qty : 1});
    }

    setCartItems(cartItemsClone)

  };

  // remove product from cart
  const removeProductFromCart =(product)=> {
    const cartItemsClone = [...cartItems]
    const newCartItems = cartItemsClone.filter(item => item.id !== product.id)
    setCartItems(newCartItems)
  }
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="container">
          <div className="wrapper">
            {products.length ? <Products products={products} addToCart={addToCart} /> : <p>No Products</p>}
            <Filter numOfProducts={products.length} handleFilterBySize={handleFilterBySize} size={size} sort={sort} handleFilterBySort={handleFilterBySort} />
          </div>
          <Cart cartItems={cartItems} removeProductFromCart={removeProductFromCart} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
