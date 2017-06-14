import React, {PureComponent} from 'react';
import MaterialUITable from './MUITable/MaterialUITable';
import TableHeader from './TableHeader';
import './css/DataTable.css';

class DataTable extends PureComponent {
    render() {
        const {containerHeight, panelIsOpen} = this.props;
        const panelClass = panelIsOpen ? 'sidePanelOpen' : 'sidePanelClosed';

        return (
            <div>
                <TableHeader title="Awesome Header" timeTravelButtons={true} />
                <div className="tableContainer">
                    <div className="table">
                        <MaterialUITable windowHeight={containerHeight} />
                    </div>
                    <div className={`sidePanel ${panelClass}`}>
                        <div className="panelFooterButtons">
                            <button>Cancel</button>
                            <button>Save and add another</button>
                            <button>save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataTable;
