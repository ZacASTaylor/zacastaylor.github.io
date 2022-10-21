import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={"white-text"}>
                <h1 className="h1">
                    Hi, I'm <b>Zac Taylor</b>!
                </h1>
                <div style={{padding: "2%"}}/>
                <div className={"pt-6"}>
                    <span className="h3" >
                        Welcome to my website.
                        It is currently a work in progress
                        and for the time being serves primarily
                        to showcase a simple version of my resume
                        while also being a place for me to
                        learn and practice React.
                    </span>
                </div>
            </div>
        );
    }
}

export default Home;
