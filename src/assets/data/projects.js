import { v4 as uuidv4 } from 'uuid';
import MilanTV from '../images/milantv.png';
import Weather from '../images/weather.png';
import Audiophile from '../images/audiophile.png';
import Clock from '../images/clockapp.png';
import Motorcycle from '../images/motorcycle.png';
import WeShare from '../images/weshare.png';
import Snake from '../images/snake.png';
import Todo from '../images/todo.png';
import MyOwnWater from '../images/project-myownwater.png';
import WealthBridge from '../images/project-wealthbridge.png';
import Pinduoduo from '../images/project-pdd.png';
import KliknClean from '../images/project-kliknclean.png';
import Alkimiya from '../images/project-alkimiya.png';
import WYN2000 from '../images/project-wyn2000.png';
import Explo from '../images/project-explo.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Explo',
    desc:
      <div>Innovative companies use Explo to share data and insights with their customers. Migrate from your current embedded solution to Explo in minutes.</div>,
    img: Explo,
    link: 'https://www.explo.co/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: 'WYN2000',
    desc:
      <div>A logistics company based in Singapore, offering customized solutions for transport, warehousing, and logistics management.</div>,
    img: WYN2000,
    link: 'https://wyn2000-staging.webflow.io/',
    category: 'Websites'
  },
  {
    id: uuidv4(),
    name: 'Alkimiya',
    desc:
      <div>Alkimiya is a permissionless protocol that makes the economics of the Blockspace accessible to the broader DeFi universe.</div>,
    img: Alkimiya,
    link: 'https://alkimiya-dev.webflow.io/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: 'KliknClean',
    desc:
      <div>KliknClean merupakan jasa kebersihan one stop solution yang bertujuan untuk memudahkan pelanggan dalam pembersihan rumah, apartemen, kamar kos, maupun kantor.</div>,
    img: KliknClean,
    link: 'https://www.kliknclean.com/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: 'Pinduoduo ESG Microsite',
    desc:
      <div>Pinduoduo is a mobile-only marketplace that connects millions of agricultural producers with consumers across China.</div>,
    img: Pinduoduo,
    link: 'https://pinduoduo-esg-microsite.webflow.io/',
    category: 'Websites'
  },
  {
    id: uuidv4(),
    name: 'WealthBridge Corporate Services',
    desc:
      <div>WealthBridge is a team of professionals who believe in using technology to deliver accurate yet cost effective solutions!</div>,
    img: WealthBridge,
    link: 'https://www.wealthbridgecs.com/',
    category: 'Websites'
  },
  {
    id: uuidv4(),
    name: "My Own Water Website",
    desc:
      <div>Private Label Water and Custom Label Bottled Water A Mini Billboard in Your Hand!</div>,
    img: MyOwnWater,
    link: 'https://www.myownwater.com/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "WeShare Website",
    desc:
      <div>A crowdfunding website which allows user to be a donator and charity-funder. This project was made during my study time at Binar Academy.</div>,
    img: WeShare,
    link: 'https://weshare-app.netlify.app/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "Audiophile Website",
    desc:
      <div>This is an e-Commerce website look-alike which focusing itself to sell audio stuffs only.</div>,
    img: Audiophile,
    link: 'https://audiophile-glints.netlify.app/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "MilanTV Website",
    desc:
      <div>My first mini project with the BackEnd team during the Coding Bootcamp. This website was created with React, and it is using IMDB as its data-source.</div>,
    img: MilanTV,
    link: 'https://milantv-team-f.netlify.app/',  
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "Weather App",
    desc:
      <div>A simple Weather App made with React. This Weather App will read your location at first to automatically get the weather information around your area. Then, you can simply type the cities from all around the world through the search box to get the weather information wherever you look for.</div>,
    img: Weather,
    link: 'https://agus-weather-app.netlify.app/',
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Digital Clock App",
    desc:
      <div>A simple digital clock app which made using HTML, CSS, and Vanilla Javascript only.</div>,
    img: Clock,
    link: 'https://augustjh27.github.io/clock-app/',
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Motorcycle Mini Game",
    desc:
      <div>Press arrow up to full speed, arrow down to low speed. I made this project during my free time. </div>,
    img: Motorcycle,
    link: 'https://augustjh27.github.io/motorcycle-game/',
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Todo List App",
    desc:
      <div>During my study time in Binar Academy, I had a chance to create this todo-app as a home-assignment.</div>,
    img: Todo,
    link: 'https://todo-app-glints.netlify.app/',
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Snake Game Nokia",
    desc:
    <div>Miss the legendary Snake Game on your old Nokia phone? Try this game!</div>,
    img: Snake,
    link: 'https://augustjh27.github.io/old-snake-game/',
    category: 'Mini Apps',
  },
];

export default projects;