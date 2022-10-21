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
                    details: "I use C to write OAM & Security interface code for Nokia's Service Router OS everyday!",
                    idName: "C",
                    displayName: "C"
                },
                "CPP": {
                    details: "I use C++ to write management actions for Nokia's Service Router OS on things like ping over NETCONF.",
                    idName: "CPP",
                    displayName: "C++"
                },
                "BASH": {
                    details: "I interact with my code and my development and test infrastructure via BASH on a daily basis.",
                    idName: "BASH",
                    displayName: "BASH"
                },
                "Python": {
                    details: "I love programming in Python! I've been using it since 2016!",
                    idName: "Python",
                    displayName: "Python"
                },
                "Java": {
                    details: "Java is one of the easiest to use statically typed OO languages. IMHO. But I'd rather write C code! 🤓",
                    idName: "Java",
                    displayName: "Java"
                },
                "SQL": {
                    details: "I've used SQL to process big data very efficiently with complex set theory logic and analytic functions at Statistics Canada.",
                    idName: "SQL",
                    displayName: "SQL"
                },
            },
            frameworks: {
                "Networking": {
                    details: "My work at Nokia is all done in a routing context, especially pertinent in OAM for tests and monitoring like ping and testhead."
                },
                "Linux": {
                    details: "My workstation and build PC are Linux machines, and I have had some fun hacking the kernel in school."
                },
                "RTOS": {
                    details: "All of my work with Nokia is done on our RTOS, Service Router OS (SROS)."
                },
                "React": {
                    details: "I built this app with React as I learned it on the fly!"
                },
                "TensorFlow": {
                    details: "In School, I learned what neural nets were and how to design and train them using TensorFlow."
                }
            }
        };
    }

    render() {

        const {languages, frameworks} = this.state;

        return (
            <div id="resume-paper">

                <div className="resume-text">

                    <div id="resume-header">
                        <h2 id="resume-name" className="mb-3">Zachary A. S. Taylor<br/></h2>
                        <div id="resume-address">
                            Knoxville, TN<br/>
                            <a href="mailto:zacharyabeltaylor@gmail.com"
                               id="email-link">zacharyabeltaylor@gmail.com</a><br/>
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
                                                displayName={languages[elem].displayName}
                                                idName={languages[elem].idName}
                                                key={elem}
                                            />
                                        );
                                    })
                                }
                            </div>
                            <div className="col-sm-6">
                                <h3>Frameworks/Skills</h3>
                                {
                                    Object.keys(frameworks).map(elem => {
                                        return (
                                            <ResumeItem
                                                popoverPlacement={"left"}
                                                item={frameworks[elem]}
                                                displayName={elem}
                                                idName={elem}
                                                key={elem}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                {/* </div> // TODO
                    <div style={{margin: 10}}>
                        <span>
                            Click a language, framework, or skill to see a bit of extra detail.
                        </span>
                    </div>
                    <div>
                        <div>
                            <h3>Work Experience</h3>
                            <p>Embedded Service Router Software Developer</p>
                            <p>Nokia Canada/US</p>
                            <p>September 2020 – Present</p>
                            <p>Statistics Canada, Ottawa, ON</p>
                            <p>    Full-stack Developer, Co-op</p>
                            <p>    May 2019 – December 2019</p>
                        </div>
                        <div>
                            <h3>Education</h3>
                            <p>Carleton University, Ottawa, ON	September 2015 – August 2020</p>
                            <p>    Bachelor of Computer Science, Honours</p>
                        </div> */}
                    </div>
            </div>
        );
    }
}

export default Resume;
