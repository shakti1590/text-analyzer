import { Routes, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

const App = () => {
 
  return (
    <>
      <Navbar />
      <Alert />
      <div className="container my-3">
        <Routes>
          {/* /users --> Component 1
          /users/home --> Component 2
          Always use "exact" keyword to match the exact path */}
          <Route exact path="/" element={<TextForm />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
