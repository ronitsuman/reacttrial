import header from "./components/header";
import maincontent from "./components/maincontent";
import footer from "./components/footer";

export default function App() {
  return (
    <div>
      {header}
      {maincontent}
      {footer}
    </div>
  );
}