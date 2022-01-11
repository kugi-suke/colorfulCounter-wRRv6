import React from "react";
import { Link } from "react-router-dom";

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>KillerNews.net</h1>
                {/* {this.props.children} */}
                <Link to="/">red counter</Link>,
                <Link to="/blue">blue counter</Link>,
                <Link to="/yellow">yellow counter</Link>
            </div>
        );
    }
}

export default Index;