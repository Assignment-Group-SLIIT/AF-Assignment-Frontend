import './App.scss';
import { ToastContainer } from 'react-toastify';
import { RoutesComponent } from './src/routes/RoutesComponent';



function App() {
    return (
        <>
            <RoutesComponent />
            <ToastContainer />
        </>
    );
}

export default App;