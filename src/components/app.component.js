
import AppRouting from './routing'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){

    return(
        <div>
            <AppRouting></AppRouting>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default App