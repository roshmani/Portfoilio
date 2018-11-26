import React from "react";

export default class About extends React.Component {
    render() {
        return (
            <section className="aboutSection">
                <div className="container">
                    <h1 className="heading">About Me</h1>

                    <p className="text">
                        I am a aspiring Fullstack Javascript Web Developer, who
                        was once a Software Developer with over 5 + years of
                        experience in the Software Industry. Currently looking
                        forward to a challenging and engaging career in Web
                        development, a slight but a big change in my Career
                        path.
                    </p>
                    <p className="text">
                        My advantage,.. is my experience working as a Software
                        Developer , even if not in web development. I am not a
                        big talker , but effective communicator and during my
                        career have worked efficienctly with international
                        teams.
                    </p>
                    <p className="text">
                        I like to learn new things and am a quick learner which
                        helped me a lot during the intensive 3 months Full stack
                        WebDevelopment course. Want to know more about me ?
                    </p>

                    <a
                        className="mailmelink"
                        href="mailto:roshni.mani@gmail.com"
                    >
                        Drop in a mail;
                    </a>
                </div>
            </section>
        );
    }
}
