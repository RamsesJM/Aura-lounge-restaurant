"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import SiteFooter from "@/components/layout/SiteFooter";
import ReservationModal from "@/components/ui/ReservationModal";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Hero from "@/components/sections/Hero";
import MenuSection from "@/components/sections/MenuSection";
import StorySection from "@/components/sections/StorySection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  function openReservation() {
    setReservationSubmitted(false);
    setReservationOpen(true);
  }

  function closeReservation() {
    setReservationOpen(false);
    setReservationSubmitted(false);
  }

  function submitReservation(event) {
    event.preventDefault();
    setReservationSubmitted(true);
  }

  return (
    <>
      <Navbar onReserve={openReservation} />
      <main>
        <Hero onReserve={openReservation} />
        <StorySection />
        <MenuSection />
        <ExperienceSection onReserve={openReservation} />
        <TestimonialSection />
      </main>
      <SiteFooter />
      <ReservationModal
        open={reservationOpen}
        submitted={reservationSubmitted}
        onClose={closeReservation}
        onSubmit={submitReservation}
      />
    </>
  );
}
