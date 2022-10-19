import { v4 as uuidv4 } from 'uuid';
import MilanTV from '../images/milantv.png';
import Audiophile from '../images/audiophile.png';
import Clock from '../images/clockapp.png';
import Motorcycle from '../images/motorcycle.png';
import WeShare from '../images/weshare.png';
import Snake from '../images/snake.png';
import Todo from '../images/todo.png';
import MyOwnWater from '../images/project-myownwater.png';

const projects = [
  {
    id: uuidv4(),
    name: "My Own Water Website",
    desc:
      'Private Label Water and Custom Label Bottled Water A Mini Billboard in Your Hand!. Website: https://www.myownwater.com/',
    img: MyOwnWater,
  },
  {
    id: uuidv4(),
    name: "WeShare Website",
    desc:
      'A crowdfunding website which allows user to be a donator and charity-funder. This project was made during my study time at Binar Academy. Website: https://weshare-app.netlify.app/',
    img: WeShare,
  },
  {
    id: uuidv4(),
    name: "Audiophile Website",
    desc:
      'This is an e-Commerce website look-alike which focusing itself to sell audio stuffs only. Website: https://audiophile-glints.netlify.app/',
    img: Audiophile,
  },
  {
    id: uuidv4(),
    name: "Milan TV",
    desc:
      'A movie website with Netflix vibe where user can browse and see the latest movie. This project was my mini-project at Binar Academy. Website: https://milantv-team-f.netlify.app/',
    img: MilanTV,
  },
  {
    id: uuidv4(),
    name: "Digital Clock App",
    desc:
      'A simple digital clock app which made using HTML, CSS, and Vanilla Javascript only. Website: https://augustjh27.github.io/clock-app/',
    img: Clock,
  },
  {
    id: uuidv4(),
    name: "Motorcycle Mini Game",
    desc:
      'Press arrow up to full speed, arrow down to low speed. I made this project during my free time. Website: https://augustjh27.github.io/motorcycle-game/',
    img: Motorcycle,
  },
  {
    id: uuidv4(),
    name: "Todo List App",
    desc:
      'During my study time in Binar Academy, I had a chance to create this todo-app as a home-assignment. Website: https://todo-app-glints.netlify.app',
    img: Todo,
  },
  {
    id: uuidv4(),
    name: "Snake Game Nokia",
    desc:
      'Miss the legendary Snake Game on your old Nokia phone? Try this game! Website: https://augustjh27.github.io/old-snake-game/',
    img: Snake,
  },
];

export default projects;