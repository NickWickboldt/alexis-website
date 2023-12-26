import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import NamePage from './NamePage';
import Experience from './Experience';
import Future from './Future';


function App() {
  return (
    <div className="App">
      <Navbar />
      <NamePage />
      <Experience />
      <Future />
      <Footer />
    </div>
  );
}

export default App;

export const updateButton = async(setD, newClass, ms) => {
  await sleep(ms); 
  setD(newClass);
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
