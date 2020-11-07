import './App.css';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="content">
        <QuoteCard />
      </main>
    </div>
  );
}

export default App;
