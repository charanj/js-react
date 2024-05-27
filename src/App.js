import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import './App.css';
import { Header } from './Header';
import Main from './Main';
import { store } from './store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>

  );
}

export default App;
