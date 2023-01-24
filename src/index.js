import { StrictMode, lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Timeline from './pages/projects timeline/Timeline';
import Loading from './components/loading/Loading';
import PersistLogin from './PersistLogin';
import RequireAuth from './RequireAuth';

import { Provider } from 'react-redux';
import store from './app/store';

const Upload = lazy(() => import('./pages/admin/Upload'));
const Gallery = lazy(() => import('./pages/gallery/Gallery'));
const Login = lazy(() => import('./pages/admin/Login'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path='/' element={<App /> }> 
              <Route index element={<Home/> } />
              <Route path='/gallery' element={<Gallery /> } />
              <Route path='/timeline' element={<Timeline /> } />

              {/* <Route element={<PersistLogin />}>
                <Route element={<RequireAuth />}> */}
                  <Route path='/upload' element={<Upload /> } />
                </Route>
              {/* </Route>
            </Route> */}

            <Route path='/login' element={<Login/> } />
          </Routes>
          </Suspense>
      </HashRouter>
    </Provider>
  </StrictMode>
);

