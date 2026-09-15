import './Price.css';

export default function Price({ campaign }) {
  return (
    <section className="section price fade-up" id="price">
      <div className="section__intro">
        <p className="section__eyebrow">PRICE</p>
        <h2 className="section__title">分かりやすい、ひとつの料金。</h2>
      </div>
      <div className="price__cards">
        <div className="price__card price__card--base">
          <p className="price__label">通常料金</p>
          <p className="price__amount">施術1回 {campaign.basePrice}</p>
          <ul>
            {campaign.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="price__card price__card--promo">
          <p className="price__tag">初回限定</p>
          <p className="price__promo">通常 {campaign.basePrice} → {campaign.promoPrice}</p>
          <p className="price__note">{campaign.note}</p>
        </div>
      </div>
    </section>
  );
}
