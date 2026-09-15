import './Header.css';

export default function Header({ sections, activeSection, isOpen, onToggle, onNavigate }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <span className="header__mark"><img src="/assets/brand.png" alt="" width="44" height="44" /></span>
          <div>
            <p className="header__label">Face Beauty</p>
            <p className="header__name">かがやき</p>
          </div>
        </div>
        <button
          className={`header__menu ${isOpen ? 'open' : ''}`}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-controls="site-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav id="site-nav" className={`header__nav ${isOpen ? 'header__nav--open' : ''}`} aria-label="サイト内ナビゲーション">
        {sections.map((item) => (
          <button
            key={item.id}
            className={`header__link ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
