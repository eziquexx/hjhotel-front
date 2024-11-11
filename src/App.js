import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
