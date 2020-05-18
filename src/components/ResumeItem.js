import React from 'react';
import {UncontrolledPopover, PopoverBody} from 'reactstrap';


class ResumeItem extends React.Component {

    render() {
        const {name, item, popoverPlacement} = this.props;

        return (
            <div>
                <p>
                    <span id={name + '-name'}>
                         {name}
                    </span>

                    <UncontrolledPopover
                        trigger="click"
                        placement={popoverPlacement}
                        target={name + '-name'}
                    >
                        <PopoverBody>
                            {item.details}
                        </PopoverBody>
                    </UncontrolledPopover>
                </p>
            </div>
        );
    }
}

export default ResumeItem;
