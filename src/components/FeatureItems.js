import "../css/style.css";


export default function FeatureItems({ title, paragraphe, icon }) {
  return (
    <>
      <div className="feature-item">
        <img src={icon} alt={`${title} icon`} className="feature-icon"></img>
        <h3 className="feature-item-title">{title}</h3>
        <p>{paragraphe}</p>
      </div>
    </>
  );
}
