import './ReservationCTA.css';

export default function ReservationCTA({ reservation }) {
  return (
    <section className="reservation-cta" id="contact" aria-label="ご予約・お問い合わせ">
      <div className="reservation-cta__inner">
        <div className="reservation-cta__copy">
          <p className="section__eyebrow">RESERVATION</p>
          <h2 className="reservation-cta__text">あなたのペースで、肌のお手入れを。</h2>
          <p className="reservation-cta__description">ご予約やお肌のご相談は、公式LINEからお気軽に。</p>
        </div>
        <div className="reservation-cta__actions">
          <a className="button button--line" href={reservation.lineUrl} target="_blank" rel="noopener noreferrer">公式LINEで相談・予約 ↗</a>
          <p className="reservation-cta__note">友だち追加後、メッセージをお送りください。</p>
          {/* <a className="reservation-cta__phone" href={`tel:${reservation.phone}`}>お電話：{reservation.phone}</a> */}
        </div>
      </div>
      <div className="reservation-cta__line-guide">
        <a href={reservation.lineUrl} target="_blank" rel="noopener noreferrer" aria-label="QRコードから公式LINEを開く（新しいタブ）">
          <img className="reservation-cta__qr" src="/assets/line-qr.jpg" alt="公式LINEの友だち追加用QRコード" width="540" height="540" loading="lazy" />
        </a>
        <div>
          <p>スマートフォンのカメラで読み取り</p>
          <p>LINE ID：<span className="reservation-cta__line-id">@751loeky</span></p>
          <p className="reservation-cta__note">スマートフォンでは上のボタンから追加できます。</p>
        </div>
      </div>
    </section>
  );
}