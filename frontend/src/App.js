import './App.css';
import AuthNavigation from './Components/Navigation/AuthNavigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ScrollToTop } from './Components/Extra/extraFunction';
// import { LoginModal } from './Components/Design/HomePage/Modals';
import { ReactNotifications } from 'react-notifications-component'


function App() {
  
  useEffect(() => {
    AOS.init({duration:500});
  }, [])
  
  return (
    <div className="App">
      <ReactNotifications/>
      <ScrollToTop/>
      {/* <LoginModal/> */}
      <AuthNavigation/>
    </div>
  );
}

export default App;
