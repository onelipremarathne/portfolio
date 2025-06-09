import Landing from "@/components/Landing";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative">
      <div className="sticky top-0 h-screen bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300">
        <Landing />
      </div>
      <div className="sticky top-0 h-screen bg-gradient-to-r from-rose-100 via-rose-200 to-rose-300">
        <Projects />
      </div>
    </div>
  );
}
