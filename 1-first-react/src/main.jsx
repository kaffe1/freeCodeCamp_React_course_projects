import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const root = createRoot(document.getElementById('root'));

root.render(<First />)

function First() {
  return (<>
    <Header />
    <MainContent />
    <Footer />
  </>)
}



