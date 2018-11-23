import React from "react";

class MenuButton extends React.Component {
    render() {
        return (
            <button
                className="navButton"
                onMouseDown={this.props.handleMouseDown}
            >
                Menu
            </button>
        );
    }
}

export default MenuButton;
