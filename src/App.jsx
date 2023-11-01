
import './App.css'
import Navigation from './components/Nav/navigation';
import ContactHeader  from './components/Nav/contact-header/contact-header';
import ContactForm from './components/Nav/contact-form/contact-form';
function App() {
  
  return ( <div>
    
    <Navigation />
    <main className='main_container'>
    <ContactHeader />
    <ContactForm />
    </main>
    
  </div>
  );
    
  
}

export default App
