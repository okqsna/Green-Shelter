import './App.css';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import HelpPage from './Components/HelpPage/HelpPage';
import GalleryPage from './Components/GalleryPage/GalleryPage';
function App() {
  return (
    <div className="App">
     <HomePage/>
     <AboutPage/>
     <HelpPage/>
     <GalleryPage/>
    </div>
  );
}

export default App;
