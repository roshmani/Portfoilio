// Contact.js
import React from "react";

export default class Contact extends React.Component {
    render() {
        return (
            <section className="contactWrapper">
                <div className="container">
                    <h1 className="heading">Get in touch</h1>

                    <p className="Text">
                        I'm looking forward to add real projects to my projects'
                        list by working in some great companies. If you think i
                        can be a part of your company or member of your team in
                        a new project, or just to chat, feel free to contact me.
                    </p>

                    <ul className="socialMediaList">
                        <li>
                            <a
                                className="smLinks"
                                href="mailto:roshni.mani@gmail.com"
                            >
                                <span id="faIcon" className="fas fa-envelope">
                                    {" "}
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                className="smLinks"
                                href="https://www.linkedin.com/in/roshnimani/"
                            >
                                <span id="faIcon" className="fab fa-linkedin">
                                    {" "}
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                className="smLinks"
                                href="https://github.com/roshmani/"
                            >
                                <span
                                    id="faIcon"
                                    className="fab fa-github-square"
                                >
                                    {" "}
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
