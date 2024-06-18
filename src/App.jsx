
import './App.css'
import ContactHeader from './component/ContactHeader/ContactHeader';
import Navigation from './component/Navigation/Navigation';
import ContactForms from './component/ContactForm/ContactForm';

function App() {
  return(
  <div>
    <Navigation />
  <main className='main_container'>
  <ContactHeader />
    <ContactForms /> 
  </main>
   
  </div>

  );
      
  
}

export default App;
