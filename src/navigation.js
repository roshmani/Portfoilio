import React from "react";
import MenuButton from "./menubutton";
import MobileMenu from "./menumobile";

export default class Navi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();
        console.log("clicked", this.state.show);
        e.stopPropagation();
    }
    toggleMenu() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <header>
                <nav className="navWrapper">
                    <div className="navListwrapper">
                        <ul className="navList">
                            <li className="navItem">
                                <a className="navLink" href="/">
                                    Home
                                </a>
                            </li>

                            <li className="navItem">
                                <a className="navLink" href="/about">
                                    About
                                </a>
                            </li>

                            <li className="navItem">
                                <a className="navLink" href="/portfolio">
                                    Portfolio
                                </a>
                            </li>

                            <li className="navItem">
                                <a className="navLink" href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mobileMenu">
                        <MenuButton handleMouseDown={this.handleMouseDown} />
                        <MobileMenu
                            handleMouseDown={this.handleMouseDown}
                            menuVisibility={this.state.show}
                        />
                    </div>
                </nav>
            </header>
        );
    }
}
