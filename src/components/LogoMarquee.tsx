import { serviceGroups } from "@/data/site";
import { Icon } from "@/components/Icon";

export function LogoMarquee() {
  return (
    <div className="logo-marquee-wrapper" aria-label="AI8HT service areas">
      <div className="logo-marquee-track">
        {[0, 1].map(copy => (
          <div className="logo-marquee-group" key={copy} aria-hidden={copy === 1}>
            {serviceGroups.map(service => (
              <div key={service.id} className="logo-item">
                <Icon name={service.icon} className="logo-icon" />
                <span className="logo-name">{service.title}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
