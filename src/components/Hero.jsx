import './Hero.css';

export default function Hero({ onNavigate }) {
  return (
    <section className="hero" id="hero">
      <div className="hero__visual">
        <img className="hero__image" src="/assets/hero.png" alt="柔らかい光の中でフェイシャルケアを受ける女性のイメージ" fetchpriority="high" width="1086" height="1448" />
        
        
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">船橋・塚田のフェイシャルサロン</p>
        <h1 className="hero__title">肌が輝くと、<br />毎日が少し<br />明るくなる。</h1>
        <p className="hero__text">高額な契約も、化粧品の押し売りもありません。一回4,400円で、気軽に続けられるフェイスケア。</p>
        <div className="hero__actions">
          <button className="button button--primary" type="button" onClick={() => onNavigate('contact')}>
            ご予約はこちら
          </button>
          <span className="hero__price">施術1回 4,400円（税込）</span>
        </div>
      </div>
    </section>
  );
}
