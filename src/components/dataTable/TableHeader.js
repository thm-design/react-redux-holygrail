import React, {PureComponent} from 'react';
import TimeTravelButtons from './TimeTravelButtons';

import './css/TableHeader.css';

export default class TableHeader extends PureComponent {
    render() {
        const {timeTravelButtons, title} = this.props;

        return (
            <div className="tableHeader">
                <h1 className="tableHeaderTitle">{title}</h1>
                {timeTravelButtons ? <TimeTravelButtons /> : null}
            </div>
        );
    }
}
