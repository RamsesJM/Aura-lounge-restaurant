import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero({ onReserve }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero__backdrop" />
      <div className="hero__content page-shell">
        <p className="eyebrow"><span /> Santo Domingo · Cocina & cultura</p>
        <h1 className="hero__title">El sabor de<br /><em>sentirse aquí.</em></h1>
        <p className="hero__copy">Raíces dominicanas, espíritu viajero y noches que se quedan contigo.</p>
        <div className="hero__actions">
          <button className="button button--gold" onClick={onReserve}>Reservar experiencia <ArrowUpRight size={15} /></button>
          <a className="button button--glass" href="#menu">Explorar menú</a>
        </div>
        <a className="hero__scroll" href="#concepto"><ArrowDown size={15} /> Descubre Aura</a>
      </div>
      <div className="hero__caption"><span /> Una mesa, mil historias</div>
    </section>
  );
}
