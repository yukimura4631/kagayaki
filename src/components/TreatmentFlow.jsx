import './TreatmentFlow.css';

export default function TreatmentFlow({ steps }) {
  return (
    <section className="section treatment fade-up" id="flow">
      <div className="section__intro">
        <p className="section__eyebrow">TREATMENT FLOW</p>
        <h2 className="section__title">肌と心を整える、6つのステップ。</h2>
      </div>
      <div className="treatment__list">
        {steps.map((step) => (
          <div key={step.number} className="treatment__item">
            <img className="treatment__photo" src={`/assets/step-${step.number}.png`} alt={`${step.title}の施術イメージ`} loading="lazy" width="1536" height="1024" />
            <div className="treatment__index">{step.number}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
