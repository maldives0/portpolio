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
import { GlobalLayout, SildeLayout } from '../components/style';

const Index = () => {

    return (
        <AppLayout>
            <GlobalLayout />
            <Slide>
                <SildeLayout>
                    <Home />
                </SildeLayout>
            </Slide>
            <Slide>
                <About />
            </Slide>
            <Slide>
                <SildeLayout>
                    <Skill />
                </SildeLayout>
            </Slide>
            <Slide>
                <SildeLayout>
                    <Project />
                </SildeLayout>
            </Slide>
            <Slide>
                <SildeLayout>
                    <Experience />
                </SildeLayout>
            </Slide>
            <Slide>
                <SildeLayout>
                    <Education />
                </SildeLayout>
            </Slide>
            <Slide>
                <SildeLayout>
                    <Contact />
                </SildeLayout>
            </Slide>
        </AppLayout>
    );
};


export default Index;