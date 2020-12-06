import React from 'react';
import AppLayout from '../components/AppLayout';
import Home from '../components/Home';
import About from '../components/About';
import Skill from '../components/Skill';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { FullPage, Slide } from 'react-full-page';
import { SlideStyle } from '../components/style';
const Index = () => {
    return (
        <AppLayout>
            <Slide>
                <SlideStyle>
                    <Home />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle>
                    <About />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle>
                    <Skill />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle>
                    <Project />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle>
                    <Experience />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle>
                    <Education />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle>
                    <Contact />
                </SlideStyle>
            </Slide>
        </AppLayout>
    );
};
export default Index;