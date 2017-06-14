import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import './css/AppHeader.css';
import {toggleSidePanel} from '../../reducers/appHeaderReducer';

class AppHeader extends PureComponent {
    render() {
        const {title, toggleSidePanel} = this.props;

        return (
            <header className="appHeader">
                <span className="appHeaderBranding">
                    {title}
                </span>
                <button className="panelButton" onClick={toggleSidePanel}>
                    <i className="material-icons md-light md-18">apps</i>
                </button>
            </header>
        );
    }
}

const mapStateToProps = state => {
    const {appHeader} = state;
    return {
        appHeader
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleSidePanel: () => dispatch(toggleSidePanel())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
