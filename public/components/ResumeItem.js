import React from 'react';
import {UncontrolledPopover, PopoverBody} from 'reactstrap';


class ResumeItem extends React.Component {

    render() {
        const {displayName, idName, item, popoverPlacement} = this.props;

        return (
            <div>
                <p>
                    <span id={idName + '-name'}>
                         {displayName}
                    </span>

                    <UncontrolledPopover
                        trigger="click"
                        placement={popoverPlacement}
                        target={idName + '-name'}
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
