export default function ScientistCard({ nombre, foto, profesion, premios = [], descubrimiento }) {
  return (
    <article className="card">
      <header className="card__header">
        <img className="card__img" src={foto} alt={`Foto de ${nombre}`} />
        <h2 className="card__title">{nombre}</h2>
      </header>
      <ul className="card__list">
        <li><strong>Profesión:</strong> {profesion}</li>
        <li><strong>Premios:</strong> {premios.length} ({premios.join(", ")})</li>
        <li><strong>Descubrió:</strong> {descubrimiento}</li>
      </ul>
    </article>
  );
}
