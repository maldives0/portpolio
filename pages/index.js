import React, { useState, useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import Home from '../components/Home';
import About from '../components/About';
import Skill from '../components/Skill';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { Slide } from 'react-full-page';
import { SlideStyle, GlobalLayout } from '../components/style';
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
const Index = () => {
    const [currentStyle, setCurrentStyle] = useState({ padding: '2% 0 3% 220px' });
    const isTabletPC = useMediaQuery({ query: "(min-width: 768px) " });
    useEffect(() => {
        if (!isTabletPC) {
            setCurrentStyle({ padding: '2%' });
        } else {
            setCurrentStyle({ padding: '2% 0 3% 220px' });
        }
    }, [isTabletPC]);
    return (
        <AppLayout>
            <GlobalLayout />
            <Slide>
                <SlideStyle
                    style={currentStyle}
                    className="basic-layout-background">
                    <Home />
                </SlideStyle>
            </Slide>
            <Slide>
                <About />
            </Slide>
            <Slide>
                <SlideStyle
                    style={currentStyle}
                    className="basic-layout-background">
                    <Skill />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle
                    style={currentStyle}
                    className="basic-layout-background">
                    <Project />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle
                    style={currentStyle}
                    className="basic-layout-background">
                    <Experience />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle
                    style={currentStyle}
                    className="basic-layout-background">
                    <Education />
                </SlideStyle>
            </Slide>
            <Slide>
                <SlideStyle
                    style={currentStyle}
                    className="basic-layout-background">
                    <Contact />
                </SlideStyle>
            </Slide>
        </AppLayout>
    );
};


export default Index;