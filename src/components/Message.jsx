import './Message.css';

export default function Message() {
  return (
    <section className="section message fade-up" id="message">
      <div className="message__container">
        <img className="message__visual" src="/assets/sunflower.png" alt="" width="1254" height="1254" loading="lazy" />
        <div className="message__copy">
          <p className="section__eyebrow">あなたの肌に、長く寄り添う場所へ。</p>
          <p>お肌は、季節や生活環境、心や身体の状態によって毎日変化します。</p>
          <p>お客様ご自身のお手入れと、プロによるフェイスケアを組み合わせながら、みずみずしく、健やかな素肌を保つお手伝いをいたします。</p>
          <p>誰でも気軽に通える場所として、一人ひとりの肌と丁寧に向き合ってまいります。</p>
        </div>
      </div>
    </section>
  );
}
