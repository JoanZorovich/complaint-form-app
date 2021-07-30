import './App.css';
import Formcontainer from './components/Formcontainer/Formcontainer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div>
      <Formcontainer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
