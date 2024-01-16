'use client';
import { Header } from '@/components/Header';
import { Introduction } from './pages/Introduction';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Motion } from './pages/Motion';
import { Example } from '@/components/Example';

export default function Home() {
  return (
    <main className="h-screen w-full my-10 ">
      <Example />
      <Header />
      <Introduction />
      <About />
      <Projects />
    </main>
  );
}
