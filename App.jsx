import { gsap } from 'gsap';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';

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

function Hero({ onSelectProduct, startAtFinalState }) {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);
  const gradientRef = useRef(null);
  const sunRef = useRef(null);
  const foregroundRef = useRef(null);
  const contentRef = useRef(null);
  const itemRefs = useRef([]);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const getFinalSunMetrics = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const sunSize = Math.min(width * 0.7, height * 0.86);
      const jacketGap = 10;
      const isMobile = width <= 720;
      const topPadding = isMobile ? 104 : Math.min(Math.max(height * 0.12, 96), 140);
      const preferredItemSize = isMobile ? Math.min(width * 0.42, height * 0.32) : Math.min(width * 0.225, height * 0.36);
      const itemSize = isMobile ? Math.min(Math.max(preferredItemSize, 138), 192) : Math.min(Math.max(preferredItemSize, 177), 315);
      const maxVisibleSun = height - topPadding - itemSize - jacketGap;
      const visibleSun = Math.max(0, Math.min(sunSize * 0.58, maxVisibleSun));

      return {
        bottom: visibleSun - sunSize,
        size: sunSize,
      };
    };

    const ctx = gsap.context(() => {
      const itemElements = itemRefs.current.filter(Boolean);

      gsap.set([backgroundRef.current, gradientRef.current, sunRef.current, foregroundRef.current, contentRef.current, ...itemElements], {
        willChange: 'transform, opacity',
      });

      gsap.set(itemElements, {
        opacity: 0,
      });

      gsap.set(sunRef.current, {
        left: '50%',
        xPercent: -50,
        x: 0,
      });

      if (reduceMotion || startAtFinalState) {
        const finalSun = getFinalSunMetrics();

        gsap.set([backgroundRef.current, foregroundRef.current], {
          opacity: 0,
          scale: 1.18,
        });
        gsap.set(gradientRef.current, {
          opacity: 1,
        });
        gsap.set(sunRef.current, {
          width: finalSun.size,
          height: finalSun.size,
          left: '50%',
          top: 'auto',
          bottom: finalSun.bottom,
          xPercent: -50,
          y: 0,
          scale: 1,
        });
        gsap.set(contentRef.current, {
          opacity: 1,
          y: 0,
        });
        gsap.set(itemElements, {
          opacity: 1,
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.inOut',
        },
      });

      timeline
        .to(sunRef.current, {
          duration: 0.5,
          scale: 1.045,
          filter: 'blur(0.35px)',
          ease: 'sine.inOut',
        })
        .to(sunRef.current, {
          duration: 0.5,
          scale: 1,
          filter: 'blur(0px)',
          ease: 'sine.inOut',
        })
        .to(sunRef.current, {
          left: '50%',
          xPercent: -50,
          x: 0,
          y: '-18vh',
          duration: 1.2,
          ease: 'power2.out',
        })
        .to(
          sunRef.current,
          {
            width: () => getFinalSunMetrics().size,
            height: () => getFinalSunMetrics().size,
            left: '50%',
            xPercent: -50,
            x: 0,
            bottom: () => getFinalSunMetrics().bottom,
            y: 0,
            scale: 1,
            duration: 1.8,
            ease: 'power3.inOut',
          },
          2.2
        )
        .to(
          backgroundRef.current,
          {
            opacity: 0,
            scale: 1.2,
            filter: 'blur(30px) saturate(1.85) contrast(1.2)',
            duration: 1.2,
            ease: 'power2.inOut',
          },
          2.2
        )
        .to(
          sunRef.current,
          {
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out',
          },
          2.2
        )
        .to(
          foregroundRef.current,
          {
            opacity: 0,
            scale: 1.08,
            duration: 0.9,
            ease: 'power2.inOut',
          },
          2.35
        )
        .to(
          gradientRef.current,
          {
            opacity: 1,
            duration: 1.2,
            ease: 'power2.inOut',
          },
          2.2
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          3.2
        )
        .to(
          itemElements,
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
          },
          3.2
        );
    }, heroRef);

    return () => ctx.revert();
  }, [startAtFinalState]);

  return (
    <section ref={heroRef} className="hero" aria-label="Kilimani landing hero">
      <div ref={backgroundRef} className="heroBackground" />
      <div ref={gradientRef} className="gradientLayer" />
      <div ref={sunRef} className="sun" />
      <div ref={foregroundRef} className="foregroundMask" />

      <div ref={contentRef} className="heroContent">
        <header className="heroNav" aria-label="Primary">
          <a href="/" className="brand" aria-label="Kilimani home">
            <img src="/kilimanilogo2.png" alt="Kilimani" />
          </a>
          <div className="heroControls">
            <button className="cartButton" type="button" aria-label="Cart with zero items">
              Cart <span>0</span>
            </button>
          </div>
        </header>

        <div className="heroCenter" aria-hidden="true">
          <div className="heroCenterFrame">
            <img src="/model.jpg" alt="Kilimani model" />
          </div>
        </div>

        <div className="productLayer" aria-label="Kilimani jacket colors">
          {productItems.map((item, index) => (
            <button
              key={item.id}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className={`productItem productItem--${item.side}`}
              type="button"
              aria-label={`View ${item.color} jacket`}
              onClick={() => onSelectProduct(item.id)}
            >
              <span className="productCard">
                <img src={item.src} alt="" aria-hidden="true" />
              </span>
            </button>
          ))}
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

  return <Hero onSelectProduct={openProduct} startAtFinalState={showFinalLanding} />;
}
