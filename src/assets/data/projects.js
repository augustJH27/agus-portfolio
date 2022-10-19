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
      <div>'Private Label Water and Custom Label Bottled Water A Mini Billboard in Your Hand! <a target='_blank' href='https://www.myownwater.com/'>Website: https://www.myownwater.com/</a></div>,
    img: MyOwnWater,
  },
  {
    id: uuidv4(),
    name: "WeShare Website",
    desc:
      <div>A crowdfunding website which allows user to be a donator and charity-funder. This project was made during my study time at Binar Academy. <a target='_blank' href='https://weshare-app.netlify.app/'>Website: https://weshare-app.netlify.app/</a></div>,
    img: WeShare,
  },
  {
    id: uuidv4(),
    name: "Audiophile Website",
    desc:
      <div>This is an e-Commerce website look-alike which focusing itself to sell audio stuffs only. <a target='_blank' href='https://audiophile-glints.netlify.app/'>Website: https://audiophile-glints.netlify.app/</a></div>,
    img: Audiophile,
  },
  {
    id: uuidv4(),
    name: "Milan TV",
    desc:
      <div>A movie website with Netflix vibe where user can browse and see the latest movie. This project was my mini-project at Binar Academy. <a target='_blank' href='https://milantv-team-f.netlify.app/'>Website: https://milantv-team-f.netlify.app/</a></div>,
    img: MilanTV,
  },
  {
    id: uuidv4(),
    name: "Digital Clock App",
    desc:
      <div>A simple digital clock app which made using HTML, CSS, and Vanilla Javascript only. <a target='blank' href='https://augustjh27.github.io/clock-app/'>Website: https://augustjh27.github.io/clock-app/</a></div>,
    img: Clock,
  },
  {
    id: uuidv4(),
    name: "Motorcycle Mini Game",
    desc:
      <div>Press arrow up to full speed, arrow down to low speed. I made this project during my free time. <a target='blank' href='https://augustjh27.github.io/motorcycle-game/'>Website: https://augustjh27.github.io/motorcycle-game/</a></div>,
    img: Motorcycle,
  },
  {
    id: uuidv4(),
    name: "Todo List App",
    desc:
      <div>During my study time in Binar Academy, I had a chance to create this todo-app as a home-assignment. <a target='blank' href='https://todo-app-glints.netlify.app/'>Website: https://todo-app-glints.netlify.app</a></div>,
    img: Todo,
  },
  {
    id: uuidv4(),
    name: "Snake Game Nokia",
    desc:
    <div>Miss the legendary Snake Game on your old Nokia phone? Try this game! <a target='blank' href='https://augustjh27.github.io/old-snake-game/'>Website: https://augustjh27.github.io/old-snake-game/</a></div>,
    img: Snake,
  },
];

export default projects;