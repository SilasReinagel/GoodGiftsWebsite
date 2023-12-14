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
    slogan: 'Rediscover the genuine taste of wellness with our handcrafted, homestead-baked goods—pure, natural, and baked with love.',
    email: 'stephaniereinagel@gmail.com',
    logo: '/logo.svg',
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
  

  export default site;