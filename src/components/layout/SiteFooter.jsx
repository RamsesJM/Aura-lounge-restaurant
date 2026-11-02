import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { openingHours } from "@/data/restaurantData";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="visitanos">
      <div className="page-shell">
        <div className="site-footer__grid">
          <div className="site-footer__brand-column">
            <a className="brand brand--footer" href="#inicio"><span className="brand__name">AURA</span><span className="brand__tag">LOUNGE</span></a>
            <p className="eyebrow">Cocina dominicana · Coctelería</p>
            <p className="site-footer__note">Una mesa abierta a nuevas historias. Te esperamos.</p>
          </div>
          <div className="site-footer__column">
            <h2>Encuéntranos</h2>
            <p className="footer-detail"><MapPin size={17} /><span>Zona Colonial<br />Santo Domingo, República Dominicana</span></p>
            <a className="text-link" href="https://maps.google.com/?q=Zona+Colonial+Santo+Domingo" target="_blank" rel="noreferrer">Cómo llegar <ArrowUpRight size={15} /></a>
          </div>
          <div className="site-footer__column">
            <h2>Horario</h2>
            <p className="footer-detail"><Clock3 size={17} /><span>Horario de servicio</span></p>
            <ul className="hours-list">{openingHours.map((entry) => <li key={entry.days}><span>{entry.days}</span><span>{entry.hours}</span></li>)}</ul>
          </div>
        </div>
        <div className="site-footer__bottom"><span>© 2026 Aura Lounge · Santo Domingo</span><a href="#inicio">Volver arriba ↑</a></div>
      </div>
    </footer>
  );
}
