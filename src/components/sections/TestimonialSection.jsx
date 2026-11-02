import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="testimonial-section section-space">
      <div className="testimonial-section__inner">
        <p className="eyebrow"><span /> Lo que se siente</p>
        <div className="testimonial-section__stars" aria-label="5 de 5 estrellas">
          {Array.from({ length: 5 }, (_, index) => <Star key={index} size={16} fill="currentColor" strokeWidth={1.5} />)}
        </div>
        <blockquote>“Una experiencia que se disfruta con todos los sentidos. Volveremos por la comida; nos quedamos por el ambiente.”</blockquote>
        <p className="testimonial-section__author">María R. <span>·</span> Visitante</p>
      </div>
    </section>
  );
}
