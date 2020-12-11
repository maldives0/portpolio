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
import { SlideStyle } from '../components/style';
import { GlobalLayout } from '../components/style';
const Index = () => {
    return (
        <AppLayout>
            <GlobalLayout />
            <Slide>
                <SlideStyle className="basic-layout-background">
                    <Home />
                </SlideStyle>
            </Slide>
            <Slide>
                <About />
            </Slide>
            <Slide>
                <SlideStyle className="basic-layout-background">
                    <Skill />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle className="basic-layout-background">
                    <Project />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle className="basic-layout-background">
                    <Experience />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle className="basic-layout-background">
                    <Education />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle className="basic-layout-background">
                    <Contact />
                </SlideStyle>
            </Slide>
        </AppLayout>
    );
};
export default Index;