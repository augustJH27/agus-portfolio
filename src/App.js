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
import Blog from './pages/Blog';
import BlogBody from './pages/BlogBody';

const tagManagerArgs = {
  gtmId: 'GTM-TRGRNNV2'
};

TagManager.initialize(tagManagerArgs);

function GTMPageView({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Push a GA4-compatible pageview event to the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title
    });
  }, [location]);

  return children;
}

export default function App() {
  return (
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
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/article/:slug">
            <BlogBody />
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
  );
}