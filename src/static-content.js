import Home from './Pages/Home.svelte';
import Contact from './Pages/Contact.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: true },
  { path: '/contact', href: '/index.html?page=contact', name: 'Contact', component: Contact, showInMainNav: true },
]

const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});
const site = ({
    name: 'Good Gifts Homestead',
    owner: 'Good Gifts Homestead',
    slogan: 'We are great at business!',
    email: 'stephaniereinagel@gmail.com',
    logo: './images/logo.png',
    logoMobile: './images/logo.png',
    address: address("11717 Stage Coach Rd", "Gravette", "AR", "72736", ""),
    contactPrompt: 'Place your order today!',
    social: {
        // steam: '',
        // twitter: '',
        // itchio: '',
        // reddit: ''
    }
  });
  

  export default site;