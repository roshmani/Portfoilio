import React from "react";
import styled from "styled-components";

// Import Container component
import Container from "./container";

// Import Link component
import Link from "./link";

// Import Section component
import Section from "./section";

// Import typography components
import { Heading, Subheading, Text } from "./contenttext";

export default class About extends React.Component {
    render() {
        return (
            <Section centered>
                <Container>
                    <Heading>About Me</Heading>

                    <Text>
                        I am a aspiring Fullstack Javascript Web Developer, who
                        was once a Software Developer with over 5 + years of
                        experience in the Software Industry. Currently looking
                        forward to a challenging and engaging career in Web
                        development, a slight but a big change in my Career
                        path.
                    </Text>
                    <Text>
                        During my software development career , i have involved
                        myself in end-to-end development of software products
                        from requirement analysis to system study, designing,
                        coding testing, de-bugging, documentation and
                        implementation. I am not a big talker , but effective
                        communicator and during my career have worked
                        efficienctly with international teams.
                    </Text>
                    <Text>
                        I like to learn new things and am a quick learner which
                        helped me a lot during the intensive 3 months Full stack
                        WebDevelopment course, juggling between my Family, being
                        mother of twins and the course. Want to know more about
                        me ?
                    </Text>

                    <a href="roshni.mani@gmail.com">Drop in a mail ;</a>
                </Container>
            </Section>
        );
    }
}
