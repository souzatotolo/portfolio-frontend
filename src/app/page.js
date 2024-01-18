'use client';
import { Header } from '@/components/Header';
import { Introduction } from './pages/Introduction';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Example } from '@/components/Example';
import { BrowserRouter as Router } from 'react-router-dom';
import GoToTop from '@/components/goToTheTop';

export default function Home() {
  return (
    <main className="h-screen w-full my-10 ">
      <Router>
        <mainRoute />
        <Example />
        <Header />
        <Introduction />
        <About />
        <Projects />
        <GoToTop />
      </Router>
    </main>
  );
}
