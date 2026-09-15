import './ShopInfo.css';

export default function ShopInfo({ shop }) {
  return (
    <section className="section shop-info fade-up" id="shop">
      <div className="section__intro">
        <p className="section__eyebrow">SHOP INFORMATION</p>
        <h2 className="section__title">Face Beauty かがやき</h2>
      </div>
      <div className="shop-info__grid">
        <div>
          <p className="shop-info__label">住所</p>
          <p>{shop.addressLine1}<br />{shop.addressLine2}</p>
        </div>
        <div>
          <p className="shop-info__label">電話番号</p>
          <p><a href={`tel:${shop.phone}`}>{shop.phone}</a></p>
        </div>
        <div>
          <p className="shop-info__label">営業時間</p>
          <p>{shop.hours}</p>
        </div>
        <div>
          <p className="shop-info__label">支払い方法</p>
          <p>{shop.payment}</p>
        </div>
      </div>
      <div className="shop-info__access">
      <a className="shop-info__map-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.addressLine1 + " " + shop.addressLine2)}`} target="_blank" rel="noreferrer">Google マップで場所を確認する ↗</a>
        <p className="shop-info__parking">お車の方は電話にてご相談下さい。</p>
      </div>
      <p className="shop-info__note">{shop.note}</p>
    </section>
  );
}
