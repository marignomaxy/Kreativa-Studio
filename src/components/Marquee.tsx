import { marqueeItems } from '../data/siteData';

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span className="marquee-group" key={`${item}-${index}`}>
            <span>{item}</span>
            <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
