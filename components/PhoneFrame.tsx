import Image from "next/image";

/// A screenshot in an iPhone-shaped bezel — CSS only, so every image is a
/// real capture from the app and nothing else needs designing.
export default function PhoneFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="phoneFrame">
      <div className="phoneNotch" aria-hidden="true" />
      <Image
        src={src}
        alt={alt}
        width={750}
        height={1630}
        priority={priority}
        sizes="(max-width: 720px) 70vw, 300px"
      />
    </div>
  );
}
