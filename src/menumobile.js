import React from "react";
//import { Link } from "react-router-dom";

class MobileMenu extends React.Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div
                id="slideOutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}
            >
                <nav>
                    <h2>
                        <a href="/">Home</a>
                    </h2>
                    <h2>
                        <a href="/about">About</a>
                    </h2>
                    <h2>
                        <a href="/portfolio">Portfolio</a>
                    </h2>
                    <h2>
                        <a href="/contact">Contact</a>
                    </h2>
                </nav>
            </div>
        );
    }
}

export default MobileMenu;
