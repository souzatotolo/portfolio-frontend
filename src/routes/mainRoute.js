import { About } from '@/app/pages/About';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const mainRoute = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<h1>Topics</h1>} />
    </Routes>
  );
};
