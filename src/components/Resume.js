import React from 'react';

import ResumeItem from "./ResumeItem";

class Resume extends React.Component {

    componentDidMount () {

    }

    constructor(props) {
        super(props);
        this.state = {
            languages: {
                "C": {
                    details: "I use C to write OAM & Security interface code for Nokia's Service Router OS everyday!"
                },
                "C++": {
                    details: "I use C++ to write management actions for Nokia's Service Router OS on things like ping over NETCONF."
                },
                "Python": {
                    details: "I love programming in Python!"
                },
                "Java": {
                    details: "Java is one of the easiest to use statically typed OO languages."
                },
                "SQL": {
                    details: "I've used SQL to process big data very efficiently with complex set theory logic and analytic functions."
                },
            },
            frameworks: {
                "React": {
                    details: "I built this app with React as I learned it on the fly!"
                },
                "TensorFlow": {
                    details: "I learned what neural nets were and how to design and train them using TensorFlow."
                }
            }
        };
    }

    render() {

        const {languages, frameworks} = this.state;

        return (
            <div id="resume-paper" className="p-5 mx-3">

                <div className="resume-text">

                    <div id="resume-header">
                        <h2 id="resume-name" className="mb-3">Zachary A. S. Taylor<br/></h2>
                        <div id="resume-address">
                            Ottawa, ON, Canada<br/>
                            <a href="mailto:zacharystroudtaylor@cmail.carleton.ca"
                               id="email-link">zacharystroudtaylor@cmail.carleton.ca</a><br/>
                            <a href="https://github.com/ZacASTaylor" id="git-link">github.com/ZacASTaylor</a><br/>
                        </div>
                    </div>

                    <div className="resume-body text-left mt-5">
                        <div className="row text-center">
                            <div className="col-sm-6">
                                <h3 className="mb-4">Languages</h3>
                                {
                                    Object.keys(languages).map(elem => {
                                        return (
                                            <ResumeItem
                                                popoverPlacement={"right"}
                                                item={languages[elem]}
                                                name={elem}
                                                key={elem}
                                            />
                                        );
                                    })
                                }
                            </div>
                            <div className="col-sm-6">
                                <h3>Frameworks</h3>
                                {
                                    Object.keys(frameworks).map(elem => {
                                        return (
                                            <ResumeItem
                                                popoverPlacement={"left"}
                                                item={frameworks[elem]}
                                                name={elem}
                                                key={elem}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Resume;
