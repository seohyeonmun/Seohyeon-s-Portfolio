/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Chatbot } from './components/Chatbot';
import { Guestbook } from './components/Guestbook';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AllProjects } from './pages/AllProjects';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Chatbot />
        <Guestbook />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="antialiased min-h-screen bg-background text-surface">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
