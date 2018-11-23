import React from "react";
// Import Container component

export default class Home extends React.Component {
    render() {
        return (
            <section className="homeWrapper">
                <div className="container containerHome">
                    <h1 className="heading">Roshni Mani</h1>

                    <h2 className="subheading homesub">
                        Aspiring Full Stack Web Developer
                    </h2>

                    <a className="linkbtn" href="/portfolio">
                        My Projects
                    </a>
                </div>
            </section>
        );
    }
}
