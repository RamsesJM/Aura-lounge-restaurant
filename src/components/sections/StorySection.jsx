import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="story-section section-space" id="concepto">
      <div className="story-section__visual">
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85" alt="Mesa servida en un restaurante de ambiente cálido" fill sizes="(max-width: 760px) calc(100vw - 44px), 50vw" />
        <div className="story-section__stamp"><span>Hecho</span><em>con alma</em></div>
      </div>
      <div className="story-section__copy">
        <p className="eyebrow"><span /> Nuestra esencia</p>
        <h2 className="section-title">Tradición que<br />se atreve a <em>viajar.</em></h2>
        <p className="body-copy">Aura nace de la mesa dominicana: generosa, vibrante y llena de historias. La llevamos a nuevos lugares con ingredientes de temporada, una barra inquieta y el calor de recibirte como en casa.</p>
        <a className="text-link" href="#menu">Conoce nuestra cocina <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
