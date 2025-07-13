import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Banner } from '../components/Banner';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';



const response = await fetch(
  'http://localhost:4000/api/drinks'
);
const drinksData = await response.json();



document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true}/>
    <main>
      <Banner />
      <Menu drinks={drinksData.data}/>
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);


const navRollout = document.querySelector('.rollout-nav');
const navButton = document.querySelector('.nav-btn');

const navSwitchClass = () => {
    navRollout.classList.toggle('nav-closed')
};

navButton.addEventListener('click', navSwitchClass);
navRollout.addEventListener('click', navSwitchClass);


const formToggle = async (event) => {
  event.preventDefault()
  
  const id = event.target.dataset.id
  const orderedString =event.target.dataset.ordered
  const ordered = orderedString === "true"

  console.log(ordered)

  const formResponse = await fetch(`http://localhost:4000/api/drinks/${id}`, 
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{
        op: 'replace', 
        path: '/ordered', 
        value: ordered? false : true }]
      ),
    });
   
  
  window.location.reload()
}

const drinkForms = document.querySelectorAll('.drink__controls')

drinkForms.forEach((drinkForm) => {
  drinkForm.addEventListener('submit', formToggle);
});