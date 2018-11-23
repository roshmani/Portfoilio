import React from "react";
// Import typography components

export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="portfolioWrapper">
                <div className="container">
                    <h1 className="heading">My work</h1>

                    <p className="text">
                        Selected examples of my Projects. These projects are all
                        part of my Fullstack Learning Saga.
                    </p>

                    <div className="portfolioGrid">
                        <div className="project">
                            <a
                                className="portfolioItem"
                                href="https://codecube.herokuapp.com/#/"
                                target="_blank"
                            >
                                <img
                                    className="portfolioItemThumbnail"
                                    src="/codecube.png"
                                    alt="Project codecube"
                                />
                            </a>
                            <p className="projDescription">
                                Codecube is a website which can be used to share
                                code or pair program. Technology used are
                                React.js,Node.js,Webpack,socket.io,PostgreSQL
                            </p>
                        </div>
                        <div className="project">
                            <a
                                className="portfolioItem"
                                href="https://github.com/roshmani/social-network"
                                target="_blank"
                            >
                                <img
                                    className="portfolioItemThumbnail"
                                    src="/socialnetwork.png"
                                    alt="Project Social Media"
                                />
                            </a>
                            <p className="projDescription">
                                Twinnies Gaggle is a social media project meant
                                for families with multiples. Technology used are
                                React.js,Node.js,Webpack,socket.io,PostgreSQL,AWS
                                and S3 for storage,multer for fileupload.
                            </p>
                        </div>
                        <div className="project">
                            <a
                                className="portfolioItem"
                                href="https://petition-nosmoking.herokuapp.com/"
                                target="_blank"
                            >
                                <img
                                    className="portfolioItemThumbnail"
                                    src="/Petition.png"
                                    alt="Project petition"
                                />
                            </a>
                            <p className="projDescription">
                                Petition Project is petition for non-smoking
                                movies for kids. Technology used are
                                Express.js,Expresshandlebars,PostgreSQL.
                            </p>
                        </div>
                        <div className="project">
                            <a
                                className="portfolioItem"
                                href="https://github.com/roshmani/Imageboard"
                                target="_blank"
                            >
                                <img
                                    className="portfolioItemThumbnail"
                                    src="/imageboard.png"
                                    alt="Project imageboard"
                                />
                            </a>
                            <p className="projDescription">
                                Imageboard is a image gallery project where you
                                can upload,comment ,share and search for images.
                                Technology used are
                                Vue.js,Node.js,PostgreSQL,AWS and S3 for
                                storage,Multer for fileupload.
                            </p>
                        </div>
                        <div className="project">
                            <a
                                className="portfolioItem"
                                href="https://github.com/roshmani/webprojects/tree/roshni/connect4"
                                target="_blank"
                            >
                                <img
                                    className="portfolioItemThumbnail"
                                    src="connect4.png"
                                    alt="Project Connect4"
                                />
                            </a>

                            <p className="projDescription">
                                Connect 4 game. Technologies used are HTML,CSS,
                                JQuery.
                            </p>
                        </div>
                    </div>

                    <p>Want to know more about the projects?</p>

                    <a href="mailto:roshni.mani@gmail.com">
                        Click here to Mail me
                    </a>
                </div>
            </div>
        );
    }
}
