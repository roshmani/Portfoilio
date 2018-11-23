import React from "react";
import { Link } from "react-router-dom";

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
                <h2>
                    <Link to="/">Home</Link>
                </h2>
                <h2>
                    <Link to="/about">About</Link>
                </h2>
                <h2>
                    <Link to="/portfolio">Portfolio</Link>
                </h2>
                <h2>
                    <Link to="/contact">Contact</Link>
                </h2>
            </div>
        );
    }
}

export default MobileMenu;
