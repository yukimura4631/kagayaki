import './Features.css';



export default function Features({ features }) {
  return (
    <section className="section features fade-up" id="features">
      <div className="section__intro">
        <p className="section__eyebrow">安心の3つのポイント</p>
        <h2 className="section__title">あなたの肌を大切にする安心感。</h2>
      </div>
      <div className="features__list">
        {features.map((item) => (
          <article key={item.title} className="feature-card">
            <div className="feature-card__icon">
              <img src={`/assets/${item.icon}.png`} alt="" width="56" height="56" loading="lazy" />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
