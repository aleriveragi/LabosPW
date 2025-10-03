import "./App.css";
import { cientificos } from "./data";
import ScientistCard from "./components/ScientistCard";

export default function App() {
  return (
    <main className="container">
      <h1>Científicos Notables</h1>
      <section className="grid">
        {cientificos.map(c => (
          <ScientistCard key={c.id} {...c} />
        ))}
      </section>
    </main>
  );
}
