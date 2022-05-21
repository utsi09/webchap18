import "./styles.css";

const GundamTitle = () => {
  return <h1>건담 스토리</h1>;
};

const GundamHeader = () => {
  return <h3>건담</h3>;
};

export default function App() {
  return (
    <div className="App">
      <GundamTitle />
      <GundamHeader />
      <GundamHeader />
    </div>
  );
}
