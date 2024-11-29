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
      <div>Innovative companies use Explo to share data and insights with their customers. Migrate from your current embedded solution to Explo in minutes. <a target='_blank' href='https://www.explo.co/'>Website: https://www.explo.co/</a></div>,
    img: Explo,
    category: 'Websites'
  },
  {
    id: uuidv4(),
    name: 'WYN2000',
    desc:
      <div>A logistics company based in Singapore, specializes as a third-party logistics provider, offering customized solutions for transport, warehousing, and logistics management. <a target='_blank' href='https://wyn2000-staging.webflow.io/'>Website: https://wyn2000-staging.webflow.io/</a></div>,
    img: SpacePlace,
    category: 'Websites'
  },
  {
    id: uuidv4(),
    name: 'Alkimiya',
    desc:
      <div>Alkimiya is a permissionless protocol that makes the economics of the Blockspace accessible to the broader DeFi universe. <a target='_blank' href='https://alkimiya-dev.webflow.io/'>Website: https://alkimiya-dev.webflow.io/</a></div>,
    img: Alkimiya,
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: 'KliknClean',
    desc:
      <div>KliknClean merupakan jasa kebersihan one stop solution yang bertujuan untuk memudahkan pelanggan dalam pembersihan rumah, apartemen, kamar kos, maupun kantor. <a target='_blank' href='https://www.kliknclean.com/'>Website: https://www.kliknclean.com/</a></div>,
    img: KliknClean,
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: 'Pinduoduo ESG Microsite',
    desc:
      <div>Pinduoduo is a mobile-only marketplace that connects millions of agricultural producers with consumers across China. <a target='_blank' href='https://pinduoduo-esg-microsite.webflow.io/'>Website: https://pinduoduo-esg-microsite.webflow.io/</a></div>,
    img: Pinduoduo,
    category: 'Websites'
  },
  {
    id: uuidv4(),
    name: 'WealthBridge Corporate Services',
    desc:
      <div>WealthBridge is a team of professionals who believe in using technology to deliver accurate yet cost effective solutions! <a target='_blank' href='https://www.wealthbridgecs.com/'>Website: https://www.wealthbridgecs.com/</a></div>,
    img: WealthBridge,
    category: 'Websites'
  },
  {
    id: uuidv4(),
    name: "My Own Water Website",
    desc:
      <div>Private Label Water and Custom Label Bottled Water A Mini Billboard in Your Hand! <a target='_blank' href='https://www.myownwater.com/'>Website: https://www.myownwater.com/</a></div>,
    img: MyOwnWater,
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "WeShare Website",
    desc:
      <div>A crowdfunding website which allows user to be a donator and charity-funder. This project was made during my study time at Binar Academy. <a target='_blank' href='https://weshare-app.netlify.app/'>Website: https://weshare-app.netlify.app/</a></div>,
    img: WeShare,
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "Audiophile Website",
    desc:
      <div>This is an e-Commerce website look-alike which focusing itself to sell audio stuffs only. <a target='_blank' href='https://audiophile-glints.netlify.app/'>Website: https://audiophile-glints.netlify.app/</a></div>,
    img: Audiophile,
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "MilanTV Website",
    desc:
      <div>My first mini project with the BackEnd team during the Coding Bootcamp. This website was created with React, and it is using IMDB as its data-source. <a target='_blank' href='https://milantv-team-f.netlify.app/milan-tv/'>Website: https://milantv-team-f.netlify.app/milan-tv/</a></div>,
    img: MilanTV,
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "Weather App",
    desc:
      <div>A simple Weather App made with React. This Weather App will read your location at first to automatically get the weather information around your area. Then, you can simply type the cities from all around the world through the search box to get the weather information wherever you look for. <a target='blank' href='https://agus-weather-app.netlify.app/'> Website: https://agus-weather-app.netlify.app/</a></div>,
    img: Weather,
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Digital Clock App",
    desc:
      <div>A simple digital clock app which made using HTML, CSS, and Vanilla Javascript only. <a target='blank' href='https://augustjh27.github.io/clock-app/'>Website: https://augustjh27.github.io/clock-app/</a></div>,
    img: Clock,
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Motorcycle Mini Game",
    desc:
      <div>Press arrow up to full speed, arrow down to low speed. I made this project during my free time. <a target='blank' href='https://augustjh27.github.io/motorcycle-game/'>Website: https://augustjh27.github.io/motorcycle-game/</a></div>,
    img: Motorcycle,
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Todo List App",
    desc:
      <div>During my study time in Binar Academy, I had a chance to create this todo-app as a home-assignment. <a target='blank' href='https://todo-app-glints.netlify.app/'>Website: https://todo-app-glints.netlify.app</a></div>,
    img: Todo,
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Snake Game Nokia",
    desc:
    <div>Miss the legendary Snake Game on your old Nokia phone? Try this game! <a target='blank' href='https://augustjh27.github.io/old-snake-game/'>Website: https://augustjh27.github.io/old-snake-game/</a></div>,
    img: Snake,
    category: 'Mini Apps',
  },
];

export default projects;