import { useMemo, useState } from 'react';

const products = {
  oil: {
    id: 'oil',
    name: 'Kilimani Field Jacket',
    color: 'Oil',
    price: '$328',
    src: '/oil.png',
    swatch: '#242421',
    side: 'left',
  },
  ash: {
    id: 'ash',
    name: 'Kilimani Field Jacket',
    color: 'Ash',
    price: '$328',
    src: '/ash.png',
    swatch: '#8f8770',
    side: 'right',
  },
};

const productItems = [products.oil, products.ash];
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

function Hero({ onSelectProduct }) {
  return (
    <section className="hero staticHero" aria-label="Kilimani landing hero">
      <div className="heroContent" style={{ opacity: 1, transform: 'none' }}>
        <header className="heroNav" aria-label="Primary">
          <div className="heroControls">
            <span className="topShop">Shop</span>
            <a href="/" className="brand" aria-label="Kilimani home">
              <img src="/kilimani-logo-blk.png" alt="Kilimani" className="brandImg" />
            </a>
            <button className="cartButton" type="button" aria-label="Cart with zero items">
              Cart <span>0</span>
            </button>
          </div>
        </header>

        <aside className="heroSideNav" aria-hidden="false">
          <div className="season">Spring/Summer 26'</div>
          <nav className="sideNav" aria-label="Primary navigation">
            <a href="#shop">Shop</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
          </nav>
        </aside>

        <div className="heroCenter" aria-hidden="true">
          <div className="heroCenterFrame">
            <img src="/model.jpg" alt="Kilimani model" />
          </div>
        </div>

        <div className="heroFooter">
          <nav aria-label="Site legal and social links">
            <a href="#terms">Terms & Conditions</a>
            <a href="#shipping">Shipping & Returns</a>
            <a href="https://www.instagram.com/kilimanistudios?igsh=MXhnbHVyaXEzNXRvcw==" target="_blank" rel="noreferrer">
              Social
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}

function ProductPage({ initialProductId, onBack }) {
  const [selectedProductId, setSelectedProductId] = useState(initialProductId);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [cartState, setCartState] = useState('idle');

  const selectedProduct = products[selectedProductId];
  const cartMessage = useMemo(() => {
    if (cartState !== 'added') {
      return 'Free shipping and returns on US orders.';
    }

    return `${quantity} ${selectedProduct.color} jacket${quantity > 1 ? 's' : ''} in ${selectedSize} added to cart.`;
  }, [cartState, quantity, selectedProduct.color, selectedSize]);

  const addToCart = () => {
    setCartState('adding');
    window.setTimeout(() => {
      setCartState('added');
    }, 450);
  };

  return (
    <main className="productPage">
      <header className="productNav" aria-label="Product navigation">
        <button className="backButton" type="button" onClick={onBack}>
          Back
        </button>
        <a
          href="/"
          className="productBrand"
          onClick={(event) => {
            event.preventDefault();
            onBack();
          }}
        >
          kilimani
        </a>
        <button className="cartButton" type="button" aria-label="Cart">
          Bag
        </button>
      </header>

      <section className="productShell" aria-label={`${selectedProduct.color} Kilimani jacket`}>
        <div className="productImagePanel">
          <img src={selectedProduct.src} alt={`${selectedProduct.color} Kilimani Field Jacket`} />
        </div>

        <div className="purchasePanel">
          <p className="productEyebrow">Outerwear / Field Jacket</p>
          <div className="productHeading">
            <h1>{selectedProduct.name}</h1>
            <p>{selectedProduct.price}</p>
          </div>

          <p className="productDescription">
            Weather-ready cotton canvas with a structured collar, utility pockets, and a relaxed layer-friendly fit.
          </p>

          <fieldset className="optionGroup">
            <legend>
              Color <span>{selectedProduct.color}</span>
            </legend>
            <div className="swatchGrid">
              {productItems.map((product) => (
                <button
                  key={product.id}
                  className={`swatch ${product.id === selectedProductId ? 'isSelected' : ''}`}
                  type="button"
                  aria-label={`Select ${product.color}`}
                  aria-pressed={product.id === selectedProductId}
                  onClick={() => {
                    setSelectedProductId(product.id);
                    setCartState('idle');
                  }}
                >
                  <span style={{ backgroundColor: product.swatch }} />
                  {product.color}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="optionGroup">
            <legend>
              Size <button type="button">Size guide</button>
            </legend>
            <div className="sizeGrid">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={size === selectedSize ? 'isSelected' : ''}
                  type="button"
                  aria-pressed={size === selectedSize}
                  onClick={() => {
                    setSelectedSize(size);
                    setCartState('idle');
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="quantityRow">
            <span>Quantity</span>
            <div className="quantityControl" aria-label="Quantity selector">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                -
              </button>
              <output aria-live="polite">{quantity}</output>
              <button type="button" onClick={() => setQuantity((value) => value + 1)}>
                +
              </button>
            </div>
          </div>

          <button className="addButton" type="button" onClick={addToCart} disabled={cartState === 'adding'}>
            {cartState === 'adding' ? 'Adding...' : cartState === 'added' ? 'Added' : 'Add to cart'}
          </button>

          <button className="buyButton" type="button">
            Buy it now
          </button>

          <p className="cartMessage" aria-live="polite">
            {cartMessage}
          </p>

          <div className="productNotes">
            <p>Details</p>
            <ul>
              <li>Midweight brushed cotton canvas</li>
              <li>Four-pocket front with concealed interior pocket</li>
              <li>Ships in 1-2 business days</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showFinalLanding, setShowFinalLanding] = useState(false);

  const openProduct = (productId) => {
    setShowFinalLanding(true);
    setSelectedProductId(productId);
  };

  const returnToLanding = () => {
    setSelectedProductId(null);
    setShowFinalLanding(true);
  };

  if (selectedProductId) {
    return <ProductPage initialProductId={selectedProductId} onBack={returnToLanding} />;
  }

  return <Hero onSelectProduct={openProduct} />;
}
