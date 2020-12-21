import React from 'react';
import AppLayout from '../components/AppLayout';
import Home from '../components/Home';
import About from '../components/About';
import Skill from '../components/Skill';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { Slide } from 'react-full-page';
import { GlobalLayout } from '../components/style';

import { useMediaQuery } from "react-responsive";
const Index = () => {
    const isTabletPC = useMediaQuery({ query: "(min-width: 768px) " });
    return (
        <AppLayout>
            <GlobalLayout />
            <Slide>
                <div
                    className={isTabletPC ? "basic-layout-background-pc" : "basic-layout-background-mobile"}>
                    <Home />
                </div>
            </Slide>
            <Slide>
                <About />
            </Slide>
            <Slide>
                <div
                    className={isTabletPC ? "basic-layout-background-pc" : "basic-layout-background-mobile"}>
                    <Skill />
                </div>
            </Slide>
            <Slide>
                <div
                    className={isTabletPC ? "basic-layout-background-pc" : "basic-layout-background-mobile"}>
                    <Project />
                </div>
            </Slide>
            <Slide>
                <div
                    className={isTabletPC ? "basic-layout-background-pc" : "basic-layout-background-mobile"}>
                    <Experience />
                </div>
            </Slide>
            <Slide>
                <div
                    className={isTabletPC ? "basic-layout-background-pc" : "basic-layout-background-mobile"}>
                    <Education />
                </div>
            </Slide>
            <Slide>
                <div
                    className={isTabletPC ? "basic-layout-background-pc" : "basic-layout-background-mobile"}>
                    <Contact />
                </div>
            </Slide>
        </AppLayout>
    );
};


export default Index;