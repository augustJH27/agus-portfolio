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
import carpet from '../images/prd-carpet.svg';
import flow from '../images/prd-flow.svg';
import analytic from '../images/prd-analytic.svg';
import attendance from '../images/prd-attendance.svg';
import beauty from '../images/prd-beauty.svg';
import conversion from '../images/prd-conversion.svg';
import flash from '../images/prd-flash.svg';
import guest from '../images/prd-guest.svg';
import hr from '../images/prd-hr.svg';
import income from '../images/prd-income.svg';
import job from '../images/prd-job.svg';
import loyalty from '../images/prd-loyalty.svg';
import office from '../images/prd-office.svg';
import otp from '../images/prd-otp.svg';
import register from '../images/prd-register.svg';
import restrict from '../images/prd-restrict.svg';
import session from '../images/prd-session.svg';
import upselling from '../images/prd-upselling.svg';

const projects = [
  {
    id: uuidv4(),
    name: 'Explo',
    desc:
      <div>A platform that helps companies share data and insights with customers through embedded analytics.</div>,
    img: Explo,
    link: 'https://www.explo.co/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: 'WYN2000',
    desc:
      <div>Singapore-based logistics company providing tailored transport and warehouse solutions.</div>,
    img: WYN2000,
    link: 'https://wyn2000-staging.webflow.io/',
    category: 'Websites'
  },
  {
    id: uuidv4(),
    name: 'Alkimiya',
    desc:
      <div>A decentralized protocol that opens access to Blockspace economics within the DeFi ecosystem.</div>,
    img: Alkimiya,
    link: 'https://alkimiya-dev.webflow.io/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: 'KliknClean',
    desc:
      <div>Layanan kebersihan one-stop solution untuk rumah, apartemen, kos, dan kantor.</div>,
    img: KliknClean,
    link: 'https://www.kliknclean.com/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: 'Pinduoduo ESG Microsite',
    desc:
      <div>A microsite highlighting Pinduoduo’s initiatives connecting farmers with consumers across China.</div>,
    img: Pinduoduo,
    link: 'https://pinduoduo-esg-microsite.webflow.io/',
    category: 'Websites'
  },
  {
    id: uuidv4(),
    name: 'WealthBridge Corporate Services',
    desc:
      <div>Corporate service provider leveraging technology for accurate and cost-efficient solutions.</div>,
    img: WealthBridge,
    link: 'https://www.wealthbridgecs.com/',
    category: 'Websites'
  },
  {
    id: uuidv4(),
    name: "My Own Water Website",
    desc:
      <div>Private-label bottled water company offering fully customizable branding solutions.</div>,
    img: MyOwnWater,
    link: 'https://www.myownwater.com/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "WeShare Website",
    desc:
      <div>A crowdfunding platform enabling users to donate or fund charity projects. Built during my study at Binar Academy.</div>,
    img: WeShare,
    link: 'https://weshare-app.netlify.app/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "Audiophile Website",
    desc:
      <div>An e-commerce concept store dedicated to high-end audio products.</div>,
    img: Audiophile,
    link: 'https://audiophile-glints.netlify.app/',
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "MilanTV Website",
    desc:
      <div>A React-based movie website built with IMDB API data, developed during coding bootcamp.</div>,
    img: MilanTV,
    link: 'https://milantv-team-f.netlify.app/',  
    category: 'Websites',
  },
  {
    id: uuidv4(),
    name: "Weather App",
    desc:
      <div>A simple React app that provides real-time weather data based on user location or search.</div>,
    img: Weather,
    link: 'https://agus-weather-app.netlify.app/',
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Digital Clock App",
    desc:
      <div>A clean digital clock built using HTML, CSS, and vanilla JavaScript.</div>,
    img: Clock,
    link: 'https://augustjh27.github.io/clock-app/',
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Motorcycle Mini Game",
    desc:
      <div>A fun browser-based motorcycle game built for leisure using JavaScript.</div>,
    img: Motorcycle,
    link: 'https://augustjh27.github.io/motorcycle-game/',
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Todo List App",
    desc:
      <div>A simple React-based todo app created as a Binar Academy assignment.</div>,
    img: Todo,
    link: 'https://todo-app-glints.netlify.app/',
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Snake Game Nokia",
    desc:
    <div>A classic remake of the iconic Snake Game from old Nokia phones.</div>,
    img: Snake,
    link: 'https://augustjh27.github.io/old-snake-game/',
    category: 'Mini Apps',
  },
  {
    id: uuidv4(),
    name: "Feature - Carpet and Upholstery Service",
    desc:
    <div>PRD detailing the new Carpet and Upholstery cleaning service offering.</div>,
    img: carpet,
    link: 'https://drive.google.com/file/d/1MrHUlJkPmUpPC6Y0nLcFVGP_eFvkUGmQ/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Booking Flow from Worker App",
    desc:
    <div>Enables workers to book customer services directly through their mobile app.</div>,
    img: flow,
    link: 'https://drive.google.com/file/d/1cAiz_GVxdFo2aIntGPehKEwHLkpA3tMv/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Analytic Conversion",
    desc:
    <div>Defines a feature to track and analyze conversion data for better performance insight.</div>,
    img: analytic,
    link: 'https://drive.google.com/file/d/106mX-kOFpPlS8dEK5YENSAIo_RJUGbcY/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Worker Attendance",
    desc:
    <div>Introduces attendance tracking functionality for workers within the app.</div>,
    img: attendance,
    link: 'https://drive.google.com/file/d/1D9n8A1yCUj73PtmEZs0TqOS8YVaD2kWf/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Home Beauty Service",
    desc:
    <div>PRD for a new in-home beauty and wellness service category.</div>,
    img: beauty,
    link: 'https://drive.google.com/file/d/1tLJuT4YyhIns_sP5vybK7tPDu9I-27wC/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Ads' Conversion Tracking",
    desc:
    <div>Defines ad tracking mechanisms to measure campaign conversion performance.</div>,
    img: conversion,
    link: 'https://drive.google.com/file/d/18KPZKXBlJpK4UNjamCrM3_hruZo0zzHF/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Flash Sale Management Page",
    desc:
    <div>Outlines the admin feature for managing flash sale campaigns in-app.</div>,
    img: flash,
    link: 'https://drive.google.com/file/d/1ah8bAvdwvJD0redfeTnfy5EH1AXqv_Rg/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Guest Access in Client App",
    desc:
    <div>Allows new users to explore app features without registration.</div>,
    img: guest,
    link: 'https://drive.google.com/file/d/13Rj9A9HukPtLI6a1p-NTxGb2aZg2vmHJ/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Luce HR Platform",
    desc:
    <div>PRD for Luce SG's HR management platform. Built this from stratch with 3 engineers within 1 month.</div>,
    img: hr,
    link: 'https://drive.google.com/file/d/1xxyV5VKK6Mv70vVZn3yEPRTM4TNZeGLs/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Enhancement - Projected Income for Worker",
    desc:
    <div>Adds projected income visibility for workers within their app dashboard.</div>,
    img: income,
    link: 'https://drive.google.com/file/d/1FnKT-Xl1e6WFrjds4YgY2bW5C_VZNmIx/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Enhancement - Job Requests for Worker",
    desc:
    <div>Improves worker experience by organizing incoming job requests efficiently.</div>,
    img: job,
    link: 'https://drive.google.com/file/d/1nG2UQPeKk10VGSWEGOpKXACJhA17NYVH/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Customer Loyalty Program",
    desc:
    <div>Introduces a points-based loyalty system to reward returning customers.</div>,
    img: loyalty,
    link: 'https://drive.google.com/file/d/1irQI5P15v33V82Sqjd4bI6DddmDBqAsF/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Office Cleaning service",
    desc:
    <div>PRD outlining office cleaning service as a new business vertical.</div>,
    img: office,
    link: 'https://drive.google.com/file/d/1kL5iI2G5-5XOXL3uPTOAVrI3OSVhOT5d/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Login and Receive OTP Using Phone Number",
    desc:
    <div>Enables secure login and OTP verification via phone number.</div>,
    img: otp,
    link: 'https://drive.google.com/file/d/1-J0q0oj1cPR9rWNhKFqmdKEvlBq9qpaF/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Register Account Using Phone Number",
    desc:
    <div>Allows users to register quickly using their phone number instead of Email and Password combination.</div>,
    img: register,
    link: 'https://drive.google.com/file/d/1bTQ8Hke1nNoilq-SCECOvpwX-QIWmKGV/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Restrict Customer Account from Internal App",
    desc:
    <div>Admin control to restrict or suspend customer accounts via internal app.</div>,
    img: restrict,
    link: 'https://drive.google.com/file/d/1famzBmEhs1TscfuZnrOCwa8yQE92azIQ/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - First Session Reminder Via WhatsApp",
    desc:
    <div>Sends automated WhatsApp reminders for a customer’s first session.</div>,
    img: session,
    link: 'https://drive.google.com/file/d/18Yk_8H6VxR3ddFceNlXnJLX3UphzH246/view?usp=sharing',
    category: 'PRD',
  },
  {
    id: uuidv4(),
    name: "Feature - Worker Upselling",
    desc:
    <div>Enables workers to recommend additional services directly to customers.</div>,
    img: upselling,
    link: 'https://drive.google.com/file/d/1jFNQWL29PbhwIUz4XRAc2onvFPBuZfT9/view?usp=sharing',
    category: 'PRD',
  },
];

export default projects;