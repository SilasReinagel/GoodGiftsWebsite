import Home from './Pages/Home.svelte';
import Contact from './Pages/Contact.svelte';
import EinkornSourdough from './Pages/EinkornSourdough.svelte';
import Success from './Pages/Success.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: true },
  { path: '/contact', href: '/contact', name: 'Contact', component: Contact, showInMainNav: true },
  { path: '/product/einkorn-sourdough-whey', href: '/product/einkorn-sourdough-whey', name: 'Einkorn Sourdough', component: EinkornSourdough, showInMainNav: false },
  { path: '/success', href: '/success', name: 'Success', component: Success, showInMainNav: false },
]

const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});
const site = ({
    name: 'Good Gifts Homestead',
    owner: 'Good Gifts Homestead',
    slogan: 'Rediscover the genuine taste of wellness with our handcrafted, homestead-baked goods—pure, natural, and baked with love.',
    email: 'stephaniereinagel@gmail.com',
    logo: '/logo.png',
    logoMobile: '/logo.png',
    address: address("11717 Stage Coach Rd", "Gravette", "AR", "72736", ""),
    contactPrompt: 'Place your order today!',
    missionStatement: 'Welcome to the heart of wholesome living, where every product tells the story of purity and care. At Good Gifts Homestead, we embrace the timeless traditions of farming to bring you goods that are not just healthy, but have a heritage of wellness woven into them. Sourced from the verdant pastures of our own homestead or the trusted local farms nearby, our offerings are a testament to our commitment to all-natural nourishment. Our animals roam freely, living as nature intended—antibiotic-free, vaccine-free, and raised with compassion. We shun the artificial for the authentic, using ancient grains with minimal gluten and eschewing high-fructose corn syrup for the honest sweetness of nature. Each of our handcrafted baked delights is a labor of love, prepared patiently and baked heartily in our home to yours. Choose Good Gifts Homestead, where every bite is a step back to nature\'s intended path of health and harmony.',
    social: {
        // steam: '',
        // twitter: '',
        // itchio: '',
        // reddit: ''
    }
  });
  
// { id, name, price, imageUrl, status }
export const products = [
  { id: 3, name: 'Einkorn Jumbo Hamburger Buns', price: 15, imageUrl: '/hamburgerbuns.jpg', status: 'Available' },
  { id: 4, name: 'Artisanal Einkorn Sourdough Boule with Whey', price: 15, imageUrl: '/sourdough.jpg', status: 'New', detailsPage: '/product/einkorn-sourdough-whey' },
  { id: 2, name: 'Einkorn Vanilla Cake', price: 36, imageUrl: '/cake.jpg', status: 'Available' },
  { id: 1, name: 'Free-Range Natural Chicken Eggs (Dozen)', price: 6, imageUrl: '/chickenegg.jpg', status: 'Available' },
  { id: 2, name: 'Free-Range Natural Duck Eggs (Dozen)', price: 8, imageUrl: '/eggs.jpg', status: 'Available' },
  { id: 3, name: 'Christmas Coffee Blend', price: 18, imageUrl: 'christmascoffee.jpg', status: 'Available' },
  { id: 2, name: 'Limited Edition Christmas Gift Set', price: 92, imageUrl: '/christmasgiftset.jpg', status: 'Available' },
  { id: 2, name: 'Einkorn Christmas Cookies (6-pack)', price: 12, imageUrl: '/christmascookies.jpg', status: 'Available' },
  { id: 1, name: 'Tick Repellent Spray (2-pack)', price: 38, imageUrl: '/tickspray.jpg', status: 'Available' },
]

export default site;