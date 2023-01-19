import {Outlet} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App;