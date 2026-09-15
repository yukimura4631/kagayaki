import './ReservationCTA.css';

export default function ReservationCTA({ reservation }) {
  return (
    <section className="reservation-cta" id="contact" aria-label="ご予約・お問い合わせ">
      <div className="reservation-cta__inner">
        <div>
          <p className="reservation-cta__text">あなたのペースで、肌のお手入れを。</p>
        </div>
        <div className="reservation-cta__actions">
          <p className="reservation-cta__note">ご予約・お問い合わせはお電話で</p>
          <a className="button button--secondary" href={`tel:${reservation.phone}`}>{reservation.phone} ↗</a>
        </div>
      </div>
    </section>
  );
}
