import React from 'react';

class Other extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={"white-text"}>
                <h1>
                    This is where the <i>other</i> content will go!
                </h1>
            </div>
        )
    }
}

export default Other;
