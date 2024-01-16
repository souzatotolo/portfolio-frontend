import { Header } from '@/components/Header';
import { Introduction } from './pages/Introduction';
import { About } from './pages/About';
import { Projects } from './pages/Projects';

export default function Home() {
  return (
    <main className="h-screen w-full my-10 ">
      <Header />
      <Introduction />
      <About />
      <Projects />
    </main>
  );
}
