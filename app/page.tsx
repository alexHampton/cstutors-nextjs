'use client';

import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import Pricing from "./components/pricing/pricing";
import Contact from "./components/contact/contact";
import { useState } from 'react';

export default function Home() {
  const [contactMessage, setContactMessage] = useState('');
  return (
    <>
      <Hero />
      <Services />
      <Pricing setContactMessage={setContactMessage} />
      <Contact contactMessage={contactMessage} setContactMessage={setContactMessage}/>
    </>
  );
}
