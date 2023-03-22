import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/Home.page';
import { RQSuperHeroes } from './pages/RQSuperHeroes.page';
import { SuperHeroes } from './pages/SuperHeroes.page';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/super-heroes" element={ <SuperHeroes/> } />
        <Route path="/rq-super-heroes" element={ <RQSuperHeroes/> } />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
