import './App.css';

import React, {PureComponent} from 'react';

import AppHeader from './components/appHeader/AppHeader';
import DataTable from './components/dataTable/DataTable';
import Dimensions from 'react-dimensions';
import Navigation from './components/navigation/Navigation';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends PureComponent {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    static propTypes = {
        containerHeight: PropTypes.number,
        appHeader: PropTypes.shape({
            panelIsOpen: PropTypes.bool
        })
    };

    render() {
        const {containerHeight} = this.props;

        // This prop is coming in via redux store despatched from AppHeader component
        const {panelIsOpen} = this.props.appHeader;

        return (
            <div className="appContainer">
                <AppHeader title="Company | Product" />
                <Navigation />
                <main>
                    <DataTable containerHeight={containerHeight} panelIsOpen={panelIsOpen} />
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {appHeader} = state;
    return {
        appHeader
    };
};

export default connect(mapStateToProps)(Dimensions()(App));
