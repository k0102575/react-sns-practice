import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import CallBack from './CallBack';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/callback" element={<CallBack />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
