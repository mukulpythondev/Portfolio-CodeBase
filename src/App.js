
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectPage from './components/Project';
import Footer from './components/footer';
import AboutPage from './components/About';
import SkillsPage from './components/SkillPage';
import ContactUsPage from './components/Contactus';
export default function App() {
 
  return (
    <div>
      <Navbar />
      <Home />
      <ProjectPage />
      <AboutPage/>
      <SkillsPage/>
      <ContactUsPage/>
      <Footer/>
    </div>
  );
}
