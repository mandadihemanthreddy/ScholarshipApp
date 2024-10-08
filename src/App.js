import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScholarshipApplication from './components/ScholarshipApplication/ScholarshipApplication'
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import TrackApplication from './components/TrackApplication/TrackApplication'
import ApplicationForm from './components/ApplicationForm/ApplicationForm'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<ScholarshipApplication/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegistrationPage/>}/>
      <Route path='/track' element={<TrackApplication/>}/>
      <Route path='/apply' element={<ApplicationForm/>}/>

      </Routes>
    </div>
  );
}

export default App;
