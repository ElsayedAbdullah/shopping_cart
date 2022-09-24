import { useState } from "react";
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

  const handleFilterBySize = e => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...data];
      let newProducts = productsClone.filter(product => product.sizes.indexOf(e.target.value) !== -1);
      setProducts(newProducts)
    }
  };
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
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="container">
          <div className="wrapper">
            {products.length? <Products products={products} /> : <p>No Products</p>}
            <Filter handleFilterBySize={handleFilterBySize} size={size} handleFilterBySort={handleFilterBySort} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
