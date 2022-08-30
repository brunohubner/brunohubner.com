import './styles.scss';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <div className="Footer">
      <span>&copy; Copyright {year} - Bruno Hubner</span>
    </div>
  );
}
