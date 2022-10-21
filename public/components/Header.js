import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: "home",
            dynamicCSS: {
                generalCSS: "header-links mx-3 px-1 ",
                home: "h1",
                resume: "h2",
                other: "h2"
            }
        };
    }

    updateLinkStyle = (newCurrentPage) => {
        let {dynamicCSS, currentPage} = this.state;
        dynamicCSS[currentPage] = "h2";
        dynamicCSS[newCurrentPage] = "h1";
        currentPage = newCurrentPage;
        this.setState({currentPage, dynamicCSS});
    };

    render() {
        const {dynamicCSS} = this.state;
        const {generalCSS} = dynamicCSS;
        let homeCSS = dynamicCSS.home,
            resumeCSS = dynamicCSS.resume,
            otherCSS = dynamicCSS.other;

        return (
            <header className="p-4">
                <div className="header mb-5 mt-2">
                    <h1 className="">
                        <Link to="/"
                              className={generalCSS + homeCSS}
                              onClick={() => this.updateLinkStyle("home")}
                        >Home</Link>
                        <Link to="/resume"
                              className={generalCSS + resumeCSS}
                              onClick={() => this.updateLinkStyle("resume")}
                        >Resume</Link>
                        <Link to="/other"
                              className={generalCSS + otherCSS}
                              onClick={() => this.updateLinkStyle("other")}
                        >Other</Link>
                    </h1>
                </div>
            </header>
        );
    }
}

export default Header;
