import { useMemo, useState, useEffect } from 'react';

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

function Hero({ onNavigate, menuOpen, setMenuOpen }) {
  return (
    <section className="hero staticHero" aria-label="Kilimani landing hero">
      <header className="heroNav" aria-label="Primary navigation">
        <a
          href="/"
          className="brand"
          aria-label="Kilimani home"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('hero');
          }}
        >
          <img src="/kilimani-logo-blk.png" alt="Kilimani" className="brandImg" />
        </a>

        <div className="heroTopControls">
          <button className="navLink navLink--top" type="button" onClick={() => onNavigate('shop')}>
            Shop
          </button>
          <button className="cartButton" type="button" aria-label="Cart with zero items">
            Cart <span>0</span>
          </button>
          <button className="menuToggle" type="button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="heroBody">
        <aside className="heroSideNav">
          <nav className="sideNav" aria-label="Primary navigation">
            <button className="navLink" type="button" onClick={() => onNavigate('hero')}>
              Gallery
            </button>
            <button className="navLink" type="button" onClick={() => onNavigate('hero')}>
              About
            </button>
          </nav>
        </aside>

        <div className="heroCenter" aria-hidden="true" onClick={() => onNavigate('shop')}>
          <div className="heroCenterFrame">
            <img src="/model.jpg" alt="Kilimani model" />
          </div>
        </div>

        <aside className="heroRightSeason">
          <button className="navLink navLink--season" type="button" onClick={() => onNavigate('hero')}>
            Spring/Summer 26'
          </button>
        </aside>
      </div>

      <footer className="heroFooter">
        <nav aria-label="Site legal and social links">
          <button className="footerLink" type="button" onClick={() => onNavigate('terms')}>
            Terms & Conditions
          </button>
          <button className="footerLink" type="button" onClick={() => onNavigate('shipping')}>
            Shipping & Returns
          </button>
          <a href="https://www.instagram.com/kilimanistudios?igsh=MXhnbHVyaXEzNXRvcw==" target="_blank" rel="noreferrer">
            Social
          </a>
        </nav>
      </footer>

      {menuOpen && (
        <div className="mobileMenuOverlay" role="dialog" aria-modal="true">
          <button className="mobileMenuClose" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
          <div className="mobileMenuItems">
            <button type="button" onClick={() => onNavigate('hero')}>
              Gallery
              <span aria-hidden="true">›</span>
            </button>
            <button type="button" onClick={() => onNavigate('hero')}>
              About
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function TermsPage({ onNavigate }) {
  return (
    <main className="contentPage">
      <div className="contentPageInner">
        <button className="pageBackButton" type="button" onClick={() => onNavigate('hero')}>
          ← Back
        </button>
        <h1>TERMS AND CONDITIONS</h1>
        <p>Please review the following Terms and Conditions carefully. By accessing, browsing, or purchasing from this website, you automatically agree to these Terms and Conditions. Any alternative terms proposed by the customer shall not apply unless explicitly agreed to in writing by Kilimani. No supplementary agreements shall be recognized unless confirmed in writing.</p>
        <h2>PRIVACY POLICY</h2>
        <p>Kilimani operates the website kilimani.us. This Privacy Policy is intended to inform visitors about our policies regarding the collection, use, and disclosure of personal information when using our website and services.</p>
        <p>By using this website, you agree to the collection and use of information in accordance with this policy. Any personal information collected is used solely for providing and improving our services. Kilimani will not sell or share your personal information with third parties except as described in this Privacy Policy or when required by law.</p>
        <p>Personal information we may collect includes:</p>
        <ul>
          <li>Biographical Data</li>
          <li>First and last name</li>
          <li>Date of birth</li>
          <li>Contact Data</li>
          <li>Billing and shipping address</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Sales Data</li>
          <li>Shipping and billing information</li>
          <li>Delivery method</li>
          <li>Payment method</li>
          <li>Customer service inquiries</li>
          <li>Purchase Data</li>
          <li>Purchased products</li>
          <li>Product size, pricing, collection, and order history</li>
          <li>Abandoned cart information</li>
          <li>Navigation Data</li>
          <li>Cookies and browsing behavior</li>
          <li>Information related to pages visited and interactions with the site</li>
        </ul>
        <p>Kilimani uses this information to improve the customer experience, fulfill orders, provide customer support, and optimize website functionality.</p>
        <h2>PAYMENT</h2>
        <p>Kilimani accepts the following payment methods:</p>
        <ul>
          <li>Visa</li>
          <li>Mastercard</li>
          <li>American Express</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
          <li>Shop Pay</li>
        </ul>
        <p>All payments are processed securely through trusted third-party payment providers.</p>
      </div>
    </main>
  );
}

function ShippingPage({ onNavigate }) {
  return (
    <main className="contentPage">
      <div className="contentPageInner">
        <button className="pageBackButton" type="button" onClick={() => onNavigate('hero')}>
          ← Back
        </button>
        <h1>SHIPPING</h1>
        <p>Orders are usually processed within 5 business days of receiving your order. All international orders are shipped via DHL Express. Once your order has been shipped, you will receive a shipment confirmation email with tracking information.</p>
        <p>Please note that all preorder items will ship approximately 5 weeks after the order date has been placed.</p>
        <p>Customs duties and taxes may apply depending on the country in which you reside. These charges vary by destination and are determined by local customs authorities, therefore Kilimani is unable to predict or control these costs.</p>
        <p>Kilimani is not responsible for any packages lost or stolen during transit. Any claims regarding lost or stolen shipments must be made directly with the shipping carrier.</p>
        <h2>RETURNS</h2>
        <p>All garments are excluded from unjustified returns. Returns are only accepted if an item is faulty or damaged during shipping.</p>
        <p>If we have made an error with your order (such as sending the incorrect size or a damaged product), please contact us at <a href="mailto:support@kilimani.us">support@kilimani.us</a> and we will resolve the issue as quickly as possible.</p>
        <p>All items must be returned in their original condition with all tags attached. Original packaging, boxes, and dust bags must also be included with the return. If these conditions are not met, the item will not be eligible for a refund or exchange. Kilimani reserves the right to refuse any washed, worn, or altered items.</p>
        <p>Please note that the buyer is responsible for all return shipping costs. Kilimani is not responsible for return shipping expenses or duty reimbursement on international purchases.</p>
      </div>
    </main>
  );
}

function ShopPage({ onNavigate, menuOpen, setMenuOpen }) {
  return (
    <main className="productPage">
      <header className="productNav" aria-label="Shop navigation">
        <a
          href="/"
          className="productBrand"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('hero');
          }}
        >
          <img src="/kilimani-logo-blk.png" alt="Kilimani" className="brandImg" />
        </a>
        <div className="shopHeaderControls">
          <button className="cartButton" type="button" aria-label="Cart with zero items">
            Cart <span>0</span>
          </button>
          <button className="menuToggle" type="button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="shopGrid" aria-label="Shop products">
        <article className="shopItem">
          <img src="/ash.jacket.JPG" alt="Mombasa Chore Jacket - Ash" />
          <h3>Mombasa Chore Jacket - Ash</h3>
          <p className="price">$128.00 USD</p>
        </article>

        <article className="shopItem">
          <img src="/oil.jacket.JPG" alt="Mombasa Chore Jacket - Oil" />
          <h3>Mombasa Chore Jacket - Oil</h3>
          <p className="price">$128.00 USD</p>
        </article>
      </section>

      <footer className="heroFooter">
        <nav aria-label="Site legal and social links">
          <button className="footerLink" type="button" onClick={() => onNavigate('terms')}>
            Terms & Conditions
          </button>
          <button className="footerLink" type="button" onClick={() => onNavigate('shipping')}>
            Shipping & Returns
          </button>
          <a href="https://www.instagram.com/kilimanistudios?igsh=MXhnbHVyaXEzNXRvcw==" target="_blank" rel="noreferrer">
            Social
          </a>
        </nav>
      </footer>

      {menuOpen && (
        <div className="mobileMenuOverlay" role="dialog" aria-modal="true">
          <button className="mobileMenuClose" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
          <div className="mobileMenuItems">
            <button type="button" onClick={() => onNavigate('hero')}>
              Gallery
              <span aria-hidden="true">›</span>
            </button>
            <button type="button" onClick={() => onNavigate('hero')}>
              About
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      )}
    </main>
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

          <p className="cartMessage" aria-live="polite">{cartMessage}</p>

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
  const [view, setView] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    document.body.style.touchAction = menuOpen ? 'none' : '';
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [menuOpen]);

  const onNavigate = (nextView) => {
    setMenuOpen(false);
    setView(nextView);
  };

  const openProduct = (productId) => {
    setSelectedProductId(productId);
    setView('product');
  };

  const closeProduct = () => {
    setSelectedProductId(null);
    setView('hero');
  };

  if (view === 'terms') {
    return <TermsPage onNavigate={onNavigate} />;
  }

  if (view === 'shipping') {
    return <ShippingPage onNavigate={onNavigate} />;
  }

  if (view === 'shop') {
    return <ShopPage onNavigate={onNavigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />;
  }

  if (view === 'product' && selectedProductId) {
    return <ProductPage initialProductId={selectedProductId} onBack={closeProduct} />;
  }

  return <Hero onNavigate={onNavigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />;
}
