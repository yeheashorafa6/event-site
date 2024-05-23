import "./Title.css";

function Title({ title, sub, parag , className}) {
  const color = title === "Creative" ? "bgcolor" : "";
  return (
    <div className={`${color} ${className} section-title section-y-padding`}>
      <h2>
        {title}
        <span> {sub}</span>
      </h2>
      <p className="mt-3">{parag}</p>
    </div>
  );
}

export default Title;
