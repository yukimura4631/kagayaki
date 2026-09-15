import './Footer.css';

export default function Footer({ shop }) {
  return (
    <footer className="footer">
      <div className="footer__copy">
        <p>{shop.name}</p>
        <p>{shop.addressLine1}</p>
        <p>{shop.phone}</p>
        <p>営業時間 {shop.hours}</p>
        <p>定休日 {shop.closed}</p>
      </div>
      <p className="footer__copyright">© 2026 {shop.name}. All Rights Reserved.</p>
    </footer>
  );
}
