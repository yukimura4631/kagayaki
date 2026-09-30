import './Concept.css';

export default function Concept() {
  return (
    <section className="section concept fade-up" id="concept">
      <div className="section__intro">
        <p className="section__eyebrow">OUR PHILOSOPHY</p>
        <h2 className="section__title">すべては、お客様の笑顔のために。</h2>
      </div>
      <div className="concept__body">
        <div className="concept__text">
          <p>綺麗になりたい。でも、高額な契約や強引な勧誘は少し怖い。</p>
          <p>Face Beauty かがやきは、そんな方にも安心して通っていただけるフェイシャルサロンです。</p>
          <p>高額なコース契約や化粧品の押し売りは行いません。必要なのは、毎回の施術料金4,400円だけ。</p>
          <p>お客様一人ひとりのお肌と誠実に向き合い、自然な美しさと輝きを引き出します。</p>
        </div>
        <figure className="concept__owner">
          <img className="concept__photo concept__photo--owner" src="/assets/owner-portrait-retouched.png" alt="Face Beauty かがやきのオーナーセラピスト" loading="lazy" width="1086" height="1448" />
          <figcaption className="concept__owner-caption">オーナーセラピスト</figcaption>
        </figure>
      </div>
    </section>
  );
}
