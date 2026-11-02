import { ArrowUpRight, Music2, Wine } from "lucide-react";
import Image from "next/image";

export default function ExperienceSection({ onReserve }) {
  return (
    <section className="experience-section section-space" id="experiencia">
      <div className="page-shell experience-section__grid">
        <div className="experience-section__copy">
          <p className="eyebrow"><span /> Después de la cena</p>
          <h2 className="section-title">La noche también<br />tiene <em>su sabor.</em></h2>
          <p className="body-copy">Cocteles de autor, buena música y karaoke para cuando la sobremesa pide otra canción.</p>
          <div className="experience-points">
            <div><span className="experience-points__icon"><Wine size={18} /></span><span><strong>Barra de autor</strong><small>Sabores del Caribe en cada copa.</small></span></div>
            <div><span className="experience-points__icon"><Music2 size={18} /></span><span><strong>Noches de karaoke</strong><small>El escenario también es tuyo.</small></span></div>
          </div>
          <button className="button button--gold" onClick={onReserve}>Guarda tu mesa <ArrowUpRight size={15} /></button>
        </div>
        <div className="experience-section__image">
          <Image src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85" alt="Interior íntimo de un lounge iluminado para la noche" fill sizes="(max-width: 760px) calc(100vw - 44px), 50vw" />
          <span className="experience-section__image-caption">Santo Domingo después del atardecer</span>
        </div>
      </div>
    </section>
  );
}
