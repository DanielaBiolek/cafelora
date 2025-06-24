import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Banner } from '../components/Banner';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';



document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);


const navRollout = document.querySelector('.rollout-nav');
const navButton = document.querySelector('.nav-btn');

const navSwitchClass = () => {
    nav.classList.toggle('nav-closed')
};

navButton.addEventListener('click', navSwitchClass);
navRollout.addEventListener('click', navSwitchClass);