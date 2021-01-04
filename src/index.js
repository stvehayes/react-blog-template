import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

import BlogPost from './components/BlogPost/BlogPost';

import * as serviceWorker from "./serviceWorker";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./components/StyledComponents/StyledComponents.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./components/StyledComponents/Theme";

import Posts from '../src/posts/Posts';

// Google Analytics
import ReactGA from "react-ga";

class App extends Component {

    render () {

        if(window.location.hostname !== "localhost") {
            
            // Google Analytics ID goes here.
            let trackingId = "123";

            ReactGA.initialize(trackingId);
            ReactGA.pageview('/home');
        }


        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <AnimatePresence>
                        <Switch>
                            <Route path="/home">
                                <Home />
                            </Route>

                            <Route path="/about">
                                <About />
                            </Route>

                            <Route path="/contact">
                                <Contact />
                            </Route>

                            {Posts.map((post) => {
                                return(
                                    <Route path={`/${post.route}`}>
                                        <BlogPost
                                            title={post.title}
                                            date={post.date}
                                            image={post.image}
                                            content={post.content}
                                        />
                                    </Route>
                                )
                            })}
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </AnimatePresence>
                </BrowserRouter>
            </ThemeProvider>
        )
    }
}

serviceWorker.unregister();
ReactDOM.render(<App />, document.getElementById('root'))
