import PhoneFrame from "./PhoneFrame";

/// One tinted card holding a framed screenshot, a title, and a line —
/// the unit the whole features section is built from.
export default function FeatureCard({
  src,
  alt,
  title,
  blurb,
}: {
  src: string;
  alt: string;
  title: string;
  blurb: string;
}) {
  return (
    <div className="featureCard">
      <div className="featureShot">
        <PhoneFrame src={src} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{blurb}</p>
    </div>
  );
}
