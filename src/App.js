// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Footer from './components/Footer';
// import NavMenu from './components/NavMenu';
// import ScrollToTop from './components/ScrollToTop';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import Projects from './pages/Projects';

// export default function App() {
//   return (
//     <>
//       <Router>
//         <NavMenu />
//         <ScrollToTop />
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//           <Route path="/projects">
//             <Projects />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//         <Footer />
//       </Router>
//     </>
//   );
// }

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

const tagManagerArgs = {
  gtmId: 'GTM-TRGRNNV2'
};

TagManager.initialize(tagManagerArgs);

function GTMPageView({ children }) {
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer.push({
        event: 'pageview',
        page: url,
      });
    };

    handleRouteChange(location.pathname);
  }, [location]);

  return children;
}

export default function App() {
  return (
    <>
      <Router>
        <GTMPageView>
          <NavMenu />
          <ScrollToTop />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </GTMPageView>
      </Router>
    </>
  );
}
