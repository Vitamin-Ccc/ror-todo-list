import { Route, Routes } from 'react-router';
import Lists from './components/lists/Lists';
import About from './components/shared/about/About';
import Home from './components/shared/home/Home';
import Navbar from './components/shared/Navbar';
import Nomatch from './components/shared/Nomatch';

const App = () => (
  <>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/*" element={<Nomatch />} />
    </Routes>
  </>
)


export default App;
