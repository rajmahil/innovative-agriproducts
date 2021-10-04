import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Sections/Hero";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
// import { Navbar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";
import Sidebar from "./components/Sections/Sidebar";
import About from "./components/Sections/About";
import Footer from "./components/Sections/Footer";
import ValueProp from "./components/Sections/ValueProp";
import ScrollToTop from "./scrollToTop";
import Contact from "./components/Sections/Contact";
import PhotoSlider from "./components/Sections/PhotoSlider/PhotoSlider";
import PhotoSection from "./components/Sections/PhotoSection";
import { Helmet } from "react-helmet";
import aboutRuben from "./Images/aboutRuben.png";
import MapEmbedd from "./components/Sections/MapEmbedd";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    console.log(newOrder, checkoutTokenId);
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div>
        <CssBaseline />
        <Navbar
          totalItems={cart.total_items}
          toggle={handleToggle}
          mobileOpen={mobileOpen}
        />
        <Switch>
          <Route exact path="/">
            <ScrollToTop />
            <Helmet>
              <title>
                Innovative Agriproducts | Fresh food in Saskatoon, SK
              </title>
              <meta
                name="description"
                content="Less travel, less waste, and more freshness is our motto. We pride ourselves in producing nutrient-rich garlic, grown locally here in Saskatoon. Directly from our farm to your family's kitchen."
              />
            </Helmet>
            <Sidebar toggle={handleToggle} mobileOpen={mobileOpen} />
            <Hero />
            <About />
            <ValueProp />
            <Products
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
            <PhotoSection />

            <Contact />
          </Route>
          <Route exact path="/cart">
            <ScrollToTop />
            <Helmet>
              <title>
                Your Cart | Innovative Agriproducts | Fresh food in Saskatoon,
                SK SK
              </title>
              <meta
                name="description"
                content="Less travel, less waste, and more freshness is our motto. We pride ourselves in producing nutrient-rich garlic, grown locally here in Saskatoon. Directly from our farm to your family's kitchen."
              />
            </Helmet>
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout" exact>
            <ScrollToTop />
            <Helmet>
              <title>
                Checkout | Innovative Agriproducts | Fresh food in Saskatoon, SK
              </title>
              <meta
                name="description"
                content="Less travel, less waste, and more freshness is our motto. We pride ourselves in producing nutrient-rich garlic, grown locally here in Saskatoon. Directly from our farm to your family's kitchen."
              />
            </Helmet>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
