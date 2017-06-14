import React, {PureComponent} from 'react';
import './css/TimeTravelButtons.css';

export default class TimeTravelButtons extends PureComponent {
    render() {
        return (
            <div className="timeTravelButtons">
                <button className="button">Add Row</button> |
                <button className="button">Undo</button> |
                <button className="button">Redo</button>
            </div>
        );
    }
}
