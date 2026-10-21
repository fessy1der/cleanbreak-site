import PhoneFrame from "./PhoneFrame";

/// One numbered card on the dark grid: an index, a framed screenshot,
/// a title, and a line — the unit the features section is built from.
export default function FeatureCard({
  n,
  src,
  alt,
  title,
  blurb,
}: {
  n: string;
  src: string;
  alt: string;
  title: string;
  blurb: string;
}) {
  return (
    <div className="gridCard">
      <span className="n">{n}</span>
      <div className="gridShot">
        <PhoneFrame src={src} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{blurb}</p>
    </div>
  );
}
