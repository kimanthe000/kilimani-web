import { useMemo, useState, useEffect } from 'react';

const products = {
  oil: {
    id: 'oil',
    name: 'Mombasa Chore Jacket',
    color: 'Oil',
    price: '$128.00 USD',
    images: ['/oil.jacket.JPG', '/oil.back.JPG', '/OILpp1.JPG', '/OILpp2.JPG'],
    swatch: '#242421',
    stock: { XS: 5, S: 6, M: 16, L: 16, XL: 7 },
  },
  ash: {
    id: 'ash',
    name: 'Mombasa Chore Jacket',
    color: 'Ash',
    price: '$128.00 USD',
    images: ['/ash.jacket.JPG', '/ash.back.JPG', '/ASHpp1 (1).jpg', '/ASHpp2 (1).jpg'],
    swatch: '#8f8770',
    stock: { XS: 5, S: 6, M: 16, L: 16, XL: 7 },
  },
};

const productItems = [products.oil, products.ash];
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

function Hero({ onNavigate, menuOpen, setMenuOpen, cartCount }) {
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
            Cart <span>{cartCount}</span>
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
            <button className="navLink" type="button" onClick={() => onNavigate('gallery')}>
              Gallery
            </button>
            <button className="navLink" type="button" onClick={() => onNavigate('about')}>
              About
            </button>
          </nav>
        </aside>

        <div className="heroCenter" aria-hidden="true" onClick={() => onNavigate('shop')}>
          <div className="heroCenterFrame">
            <img src="/model.jpg" alt="Kilimani model" />
          </div>
        </div>
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
            <button type="button" onClick={() => onNavigate('gallery')}>
              Gallery
              <span aria-hidden="true">›</span>
            </button>
            <button type="button" onClick={() => onNavigate('about')}>
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

function GalleryPage({ onNavigate }) {
  const galleryImages = ['/g1.JPG', '/g2.jpg', '/g3.jpg', '/g4.jpg', '/g5.JPG', '/g6.JPG'];

  return (
    <main className="galleryPage">
      <button className="galleryBack" type="button" onClick={() => onNavigate('hero')}>
        ← Back
      </button>
      <section className="galleryStack" aria-label="Gallery images">
        {galleryImages.map((src, index) => (
          <img key={src} src={src} alt={`Gallery image g${index + 1}`} className="galleryStackImage" />
        ))}
      </section>
    </main>
  );
}


function AboutPage({ onNavigate }) {
  return (
    <main className="aboutPage">
      <button className="aboutBack" type="button" onClick={() => onNavigate('hero')}>
        ← Back
      </button>
      <section className="aboutContent">
        <p>
          Kilimani exists to carry the memory of ancestral origin through what is worn. Every garment is symbolic of inheritance, resistance, and remembrance.
        </p>
        <p>
          Our clothing is for those who move against erasure, who understand culture not as ornament but as foundation. Our differences are not divisions, but the force that binds us, preserves us, and makes transformation possible.
        </p>
      </section>
    </main>
  );
}

function ShopPage({ onNavigate, menuOpen, setMenuOpen, openProduct, cartCount }) {
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
            Cart <span>{cartCount}</span>
          </button>
          <button className="menuToggle" type="button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="shopGrid" aria-label="Shop products">
        <button className="shopItem" type="button" onClick={() => openProduct('ash')}>
          <img src="/ash.jacket.JPG" alt="Mombasa Chore Jacket - Ash" />
          <h3>Mombasa Chore Jacket - Ash</h3>
          <p className="price">$128.00 USD</p>
        </button>

        <button className="shopItem" type="button" onClick={() => openProduct('oil')}>
          <img src="/oil.jacket.JPG" alt="Mombasa Chore Jacket - Oil" />
          <h3>Mombasa Chore Jacket - Oil</h3>
          <p className="price">$128.00 USD</p>
        </button>
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
            <button type="button" onClick={() => onNavigate('gallery')}>
              Gallery
              <span aria-hidden="true">›</span>
            </button>
            <button type="button" onClick={() => onNavigate('about')}>
              About
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function ProductPage({ initialProductId, onBack, onNavigate, stocks, onAddToCart, cartCount }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [cartState, setCartState] = useState('idle');
  const [showDescription, setShowDescription] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [pageMounted, setPageMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setPageMounted(true));
  }, []);

  useEffect(() => {
    setSelectedSize('M');
    setQuantity(1);
    setCartState('idle');
    setShowDescription(false);
    setShowSizeGuide(false);
  }, [initialProductId]);

  // if the selected size becomes sold out, pick the first available size
  useEffect(() => {
    const avail = stocks && stocks[initialProductId] ? stocks[initialProductId][selectedSize] || 0 : 0;
    if (avail > 0) return;
    const first = sizes.find((s) => (stocks && stocks[initialProductId] ? (stocks[initialProductId][s] || 0) > 0 : false));
    if (first) setSelectedSize(first);
  }, [stocks, initialProductId, selectedSize]);

  const selectedProduct = products[initialProductId];
  const cartMessage = useMemo(() => {
    if (cartState !== 'added') return '';
    return `${quantity} ${selectedProduct.color} jacket${quantity > 1 ? 's' : ''} in ${selectedSize} added to cart.`;
  }, [cartState, quantity, selectedProduct.color, selectedSize]);

  const addToCart = () => {
    const available = stocks && stocks[initialProductId] ? stocks[initialProductId][selectedSize] || 0 : 0;
    if (available < quantity) {
      setCartState('soldout');
      return;
    }

    setCartState('adding');
    // call parent to decrement stock and increment cart count
    onAddToCart(initialProductId, selectedSize, quantity);
    window.setTimeout(() => {
      setCartState('added');
    }, 300);
  };

  return (
    <main className={`productPage productDetailPage ${pageMounted ? 'isVisible' : ''}`}>
      <header className="productNav" aria-label="Product navigation">
        <button className="backButton" type="button" onClick={onBack}>
          ← Back
        </button>
        <a
          href="/"
          className="productBrand"
          onClick={(event) => {
            event.preventDefault();
            onBack();
          }}
        >
          <img src="/kilimani-logo-blk.png" alt="Kilimani" className="brandImg" />
        </a>
        <button className="cartButton" type="button" aria-label="Cart">
          Cart <span>{cartCount}</span>
        </button>
      </header>

      <section className="productShell" aria-label={`${selectedProduct.color} Kilimani jacket`}>
        <div className="productDetails">
          <div className="productMeta">
            <h1>{selectedProduct.name}</h1>
            <p className="productPrice">{selectedProduct.price}</p>
          </div>

          <div className="productForm">
            <label className="productSelectLabel" htmlFor="size-select">
              Size
            </label>
            <select
              id="size-select"
              value={selectedSize}
              onChange={(event) => setSelectedSize(event.target.value)}
            >
              {sizes.map((size) => {
                const avail = stocks && stocks[initialProductId] ? stocks[initialProductId][size] || 0 : 0;
                return (
                  <option key={size} value={size} disabled={avail <= 0}>
                    {size}
                    {avail <= 0 ? ' — Sold out' : ''}
                  </option>
                );
              })}
            </select>

            <button className="addButton" type="button" onClick={addToCart} disabled={cartState === 'adding'}>
              {cartState === 'adding' ? 'Adding...' : cartState === 'added' ? 'Added' : 'Add to cart'}
            </button>

            <p className="cartMessage" aria-live="polite">{cartMessage}</p>
          </div>

          <div className="productAccordion">
            <button
              className="accordionToggle"
              type="button"
              onClick={() => setShowDescription((value) => !value)}
              aria-expanded={showDescription}
            >
              <span>Description</span>
              <span>{showDescription ? '−' : '+'}</span>
            </button>
            <div className={`accordionContent ${showDescription ? 'isOpen' : ''}`} aria-hidden={!showDescription}>
              <p>
                Inspired by the 1950s–60s Kenyan Mau Mau rebellion fighters and the workwear worn during colonial resistance,
                the jacket is constructed from 10 oz 100% cotton duck canvas in ash and oil colorways.
              </p>
              <p>
                Features four reinforced patch pockets secured with two-prong donut buttons and button-down flaps, with every
                major seam double-stitched for rugged longevity. A polyester lining provides a smoother, more comfortable
                feel when worn over a tee.
              </p>
              <p></p>
              <p>Male model is 5'8 and female model is 5'5, both wearing size Small.</p>
            </div>

            <button
              className="accordionToggle"
              type="button"
              onClick={() => setShowSizeGuide((value) => !value)}
              aria-expanded={showSizeGuide}
            >
              <span>Size Guide</span>
              <span>{showSizeGuide ? '−' : '+'}</span>
            </button>
            <div className={`accordionContent sizeGuideContent ${showSizeGuide ? 'isOpen' : ''}`} aria-hidden={!showSizeGuide}>
              <table>
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>XS</th>
                      <th>S</th>
                      <th>M</th>
                      <th>L</th>
                      <th>XL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Shoulder</th>
                      <td>18.5/47</td>
                      <td>19.3/49</td>
                      <td>20.1/51</td>
                      <td>20.9/53</td>
                      <td>21.7/55</td>
                    </tr>
                    <tr>
                      <th>Sleeve</th>
                      <td>21.1/53.5</td>
                      <td>21.7/55</td>
                      <td>22.2/56.5</td>
                      <td>22.8/58</td>
                      <td>23.4/59.5</td>
                    </tr>
                    <tr>
                      <th>Length</th>
                      <td>23.4/59.5</td>
                      <td>24.2/61.5</td>
                      <td>25.0/63.5</td>
                      <td>25.8/65.5</td>
                      <td>26.6/67.5</td>
                    </tr>
                    <tr>
                      <th>Chest</th>
                      <td>22.0/56</td>
                      <td>23.0/58.5</td>
                      <td>24.0/61</td>
                      <td>25.0/63.5</td>
                      <td>26.0/66</td>
                    </tr>
                  </tbody>
                </table>
                <p className="sizeUnit">inch/cm</p>
              </div>
          </div>
        </div>

        <div className="productGallery">
          {selectedProduct.images.map((src, index) => (
            <div key={`${selectedProduct.id}-${index}`} className="galleryImage">
              <img src={src} alt={`${selectedProduct.color} jacket view ${index + 1}`} />
            </div>
          ))}
        </div>
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
    </main>
  );
}

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [view, setView] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [stocks, setStocks] = useState(() => {
    const map = {};
    Object.keys(products).forEach((pid) => {
      map[pid] = { ...products[pid].stock };
    });
    return map;
  });

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
    setView('shop');
  };

  const handleAddToCart = (productId, size, qty = 1) => {
    setStocks((prev) => {
      const available = prev[productId] && prev[productId][size] ? prev[productId][size] : 0;
      if (available < qty) return prev;
      const next = { ...prev, [productId]: { ...prev[productId], [size]: prev[productId][size] - qty } };
      return next;
    });

    setCartCount((c) => c + qty);
  };

  if (view === 'terms') {
    return <TermsPage onNavigate={onNavigate} />;
  }

  if (view === 'shipping') {
    return <ShippingPage onNavigate={onNavigate} />;
  }

  if (view === 'gallery') {
    return <GalleryPage onNavigate={onNavigate} />;
  }

  if (view === 'about') {
    return <AboutPage onNavigate={onNavigate} />;
  }

  if (view === 'shop') {
    return (
      <ShopPage
        onNavigate={onNavigate}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openProduct={openProduct}
        cartCount={cartCount}
      />
    );
  }

  if (view === 'product' && selectedProductId) {
    return (
      <ProductPage
        initialProductId={selectedProductId}
        onBack={closeProduct}
        onNavigate={onNavigate}
        stocks={stocks}
        onAddToCart={handleAddToCart}
        cartCount={cartCount}
      />
    );
  }

  return <Hero onNavigate={onNavigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} cartCount={cartCount} />;
}
