export default function Tags({ tags }) {
  return (
    <div className="inline-tags">
      {tags.map((t) => (
        <span key={t} className="inline-tag">{t}</span>
      ))}
    </div>
  );
}
