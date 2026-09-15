import './Products.css';

export default function Products({ productInfo }) {
  return (
    <section className="section products fade-up" id="products">
      <div className="products__intro">
        <p className="section__eyebrow">SKINCARE PRODUCTS</p>
        <h2 className="section__title">40年の実績と信頼。</h2>
      </div>
      <div className="products__content">
        <div className="products__copy">
          <p>{productInfo.description}</p>
          <ul>
            {productInfo.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="products__heritage" aria-label="イプセン化粧品、1986年創業"><span>SINCE</span><strong>1986</strong><span>イプセン化粧品</span></div>
      </div>
    </section>
  );
}
