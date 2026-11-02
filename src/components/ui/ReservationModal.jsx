"use client";

import { useEffect } from "react";
import { Check, X } from "lucide-react";

const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function getLocalDateValue() {
  const date = new Date();
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

export default function ReservationModal({ open, submitted, onClose, onSubmit }) {
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="reservation-modal" role="dialog" aria-modal="true" aria-labelledby="reservation-title">
        <button className="modal-close" type="button" aria-label="Cerrar reservas" onClick={onClose}><X size={20} /></button>
        {submitted ? (
          <div className="reservation-success">
            <span className="reservation-success__icon"><Check size={22} /></span>
            <p className="eyebrow"><span /> Solicitud recibida</p>
            <h2 className="section-title">Gracias por elegir <em>Aura.</em></h2>
            <p className="body-copy">Nos pondremos en contacto para confirmar tu reserva.</p>
            <button className="button button--gold" type="button" onClick={onClose}>Listo</button>
          </div>
        ) : (
          <>
            <p className="eyebrow"><span /> Tu mesa te espera</p>
            <h2 className="reservation-modal__title" id="reservation-title">Reserva tu <em>experiencia.</em></h2>
            <p className="reservation-modal__intro">Cuéntanos cuándo vienes. Te contactaremos para confirmar la mesa.</p>
            <form className="reservation-form" onSubmit={onSubmit}>
              <label className="form-field form-field--wide">Nombre
                <input required name="name" autoComplete="name" placeholder="Tu nombre" />
              </label>
              <label className="form-field form-field--wide">Correo electrónico
                <input required type="email" name="email" autoComplete="email" placeholder="tu@email.com" />
              </label>
              <label className="form-field">Fecha
                <input required type="date" name="date" min={getLocalDateValue()} />
              </label>
              <label className="form-field">Hora
                <select required name="time" defaultValue="">
                  <option value="" disabled>Elige una hora</option>
                  {times.map((time) => <option key={time} value={time}>{time}</option>)}
                </select>
              </label>
              <label className="form-field form-field--wide">Personas
                <select name="guests" defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => <option key={count} value={count}>{count} {count === 1 ? "persona" : "personas"}</option>)}
                </select>
              </label>
              <button className="button button--gold reservation-form__submit" type="submit">Solicitar reserva</button>
              <p className="reservation-form__note">La mesa queda pendiente hasta recibir confirmación.</p>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
