import { useState } from "react";
import "./App.css";
import images from "./assets/index.js";

const App = () => {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(images.image_product_1);
  const [popup, setpopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [imageCount, setImageCount] = useState(1);

  const handleDecrease = () => {
    if(imageCount == 1) {
      setImageCount(4);
    } else {
      setImageCount(imageCount-1);
    }
  }

  const handleIncrease = ()=>{
    if(imageCount==4) {
      setImageCount(1);
    }else {
      setImageCount(imageCount+1);
    }
  }


  const handlePopup = ()=>{
    if(popup) {
      setpopup(false);
    } else {
      setpopup(true);
    }
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
  }

  const handleMultipleClicks = ()=> {
    if(showCart) {
      setShowCart(false);
    }
  }

  const handleCartRemove = ()=>{
    setAddedToCart(false);
    setCount(0);
  }


  return (
    <>
      <div className="main-container" onClick={handleMultipleClicks}>
        {
          popup && <>
          <div className="popup__box">
              <div className="popup">
                  <div className="close__button" onClick={handlePopup}>
                      <img src={images.icon_close} alt="" />
                  </div>

                  <div className="index__box">
                      <div className="previous__image" onClick={handleDecrease}><img src={images.icon_previous} alt=""/></div>
                      <div className="index__image"><img src={imageCount==1?(`${images.image_product_1}`):(imageCount==2?(images.image_product_2):(imageCount==3?(`${images.image_product_3}`):(images.image_product_4)))} alt="" /></div>
                      <div className="next__image" onClick={handleIncrease}><img src={images.icon_next} alt=""/></div>
                  </div>

                  <div className="image__thumbnails">
                    <img src={images.image_product_1_thumbnail} className={imageCount==1?'fade-out':''} alt="" /><img src={images.image_product_2_thumbnail} className={imageCount==2?'fade-out':''}alt="" /><img src={images.image_product_3_thumbnail} className={imageCount==3?'fade-out':''} alt="" /><img src={images.image_product_4_thumbnail} className={imageCount==4?'fade-out':''} alt="" />
                  </div>

              </div>
          </div>
          </>
        }
        {/* Navbar */}
        <div className="navbar">
          <div className="navbar-left">
            <div className="nav-logo">
              <img src={images.logo} alt="" />
            </div>
            <div className="nav-items">
              Collections <div className="hover-down-box"></div>
            </div>
            <div className="nav-items">
              Men <div className="hover-down-box"></div>
            </div>
            <div className="nav-items">
              Women <div className="hover-down-box"></div>
            </div>
            <div className="nav-items">
              About <div className="hover-down-box"></div>
            </div>
            <div className="nav-items">
              Contact <div className="hover-down-box"></div>
            </div>
          </div>
          <div className="navbar-right">
            <div className="nav-right-items cart-div" onClick={()=>{setShowCart(true)}}>
              <img src={images.icon_cart} alt="" />
              
              {
                !(count==0) && addedToCart && <>
                <div className="cart__notification">{count}</div>
                </>
              }
              {
                addedToCart && showCart ? <>
                <div className="empty__cart">
                    <div className="empty__cart__header">Cart</div>
                    <div className="checkout__items">
                      <div className="checkout__image"><img src={images.image_product_1_thumbnail} alt="" /></div>
                      <div className="checkout__items___description">
                        <div className="checkout__product__name">Fall Limited Edition Sneakers</div>
                        <div className="checkout__product__price">$125.00 x {count} <span className="final__price">${125*count}.00</span></div>
                      </div>

                      <div className="remove__cart" onClick={handleCartRemove}><img src={images.icon_delete} alt="" /></div>
                    </div>
                    <div className="checkout__button">Checkout</div>
                </div>
                </>:<>{showCart?<>
                <div className="empty__cart">
                  <div className="empty__cart__header">Cart</div>
                  <div className="empty__cart__body">Your cart is emtpy</div>
                </div>
                </>: <></>}</>
              }
            </div>
            <div className="nav-right-items avatar">
              <img src={images.image_avatar} alt="" />
            </div>
          </div>
        </div>

        {/* Main Section where it contains image and description */}
        <div className="main-hero">
          <div className="hero">
            <div className="image-hero">
              <img src={images.image_product_1} alt="image not found" />
              <div className="preview-images">
                <img
                  src={images.image_product_1_thumbnail}
                  alt=""
                  onClick={handlePopup}
                />
                <img
                  src={images.image_product_2_thumbnail}
                  alt=""
                  onClick={handlePopup}
                />
                <img
                  src={images.image_product_3_thumbnail}
                  alt=""
                  onClick={handlePopup}
                />
                <img
                  src={images.image_product_4_thumbnail}
                  alt=""
                  onClick={handlePopup}
                />
              </div>
            </div>
            <div className="description">
              <div className="product-company weight-700">SNEAKER COMPANY</div>
              <div className="product-heading weight-700">
                Fall Limited Sneakers
              </div>
              <div className="product-info">
                These low profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they will
                withstand everything the weather can offer
              </div>
              <div className="product-price">
                <div className="price-number weight-700">$125.00</div>
                <div className="price-offer">50%</div>
              </div>
              <div className="original-price weight-500">$250.00</div>
              <div className="cart-options">
                <div className="amount-selector">
                  <div
                    className="minus-image"
                    onClick={() => {
                      if (count > 0) setCount(count - 1);
                    }}
                  >
                    <img src={images.icon_minus} />
                  </div>
                  <div className="amount-number">{count}</div>
                  <div
                    className="plus-image"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <img src={images.icon_plus} alt="" />
                  </div>
                </div>
                <div className="add-to-cart" onClick={handleAddToCart}>
                  <img src={images.icon_cart} alt="" />
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
