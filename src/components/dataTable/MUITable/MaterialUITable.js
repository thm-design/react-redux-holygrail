import React, {PureComponent} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {tableData} from './data/tableData';

// const styles = {
//     propContainer: {
//         width: 200,
//         overflow: 'hidden',
//         margin: '20px auto 0'
//     },
//     propToggleHeader: {
//         margin: '20px auto 10px'
//     }
// };

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends PureComponent {
    constructor(props) {
        super(props);
        const {windowHeight} = props;
        const height = (Number(windowHeight) > 0 ? windowHeight : 1000) - 280;
        this.state = {
            fixedHeader: true,
            fixedFooter: false,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: true,
            enableSelectAll: true,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: `${height}px`
        };
    }

    componentWillReceiveProps() {
        const {windowHeight} = this.props;
        const height = (Number(windowHeight) > 0 ? windowHeight : 1000) - 280;
        this.setState({
            height: `${height}px`
        });
    }

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled
        });
    };

    handleChange = event => {
        this.setState({height: event.target.value});
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="tableContainer">
                    <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        fixedFooter={this.state.fixedFooter}
                        selectable={this.state.selectable}
                        multiSelectable={this.state.multiSelectable}
                    >
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}
                        >
                            <TableRow>
                                <TableHeaderColumn className="headerTH" tooltip="COLUMN 1">
                                    COLUMN 1
                                </TableHeaderColumn>
                                <TableHeaderColumn className="headerTH" tooltip="COLUMN 2">COLUMN 2</TableHeaderColumn>
                                <TableHeaderColumn className="headerTH" tooltip="The LAST MODIFIED DATE">
                                    LAST MODIFIED
                                </TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}
                        >
                            {tableData.map((row, index) =>
                                <TableRow key={index}>
                                    <TableRowColumn>{row.name}</TableRowColumn>
                                    <TableRowColumn>{row.status}</TableRowColumn>
                                    <TableRowColumn>{row.lastModified}</TableRowColumn>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>
        );
    }
}

// <div style={styles.propContainer}>
//     <h3>Table Properties</h3>
//     <TextField
//         floatingLabelText="Table Body Height"
//         defaultValue={this.state.height}
//         onChange={this.handleChange}
//     />
//     <Toggle
//         name="fixedHeader"
//         label="Fixed Header"
//         onToggle={this.handleToggle}
//         defaultToggled={this.state.fixedHeader}
//     />
//     <Toggle
//         name="fixedFooter"
//         label="Fixed Footer"
//         onToggle={this.handleToggle}
//         defaultToggled={this.state.fixedFooter}
//     />
//     <Toggle
//         name="selectable"
//         label="Selectable"
//         onToggle={this.handleToggle}
//         defaultToggled={this.state.selectable}
//     />
//     <Toggle
//         name="multiSelectable"
//         label="Multi-Selectable"
//         onToggle={this.handleToggle}
//         defaultToggled={this.state.multiSelectable}
//     />
//     <Toggle
//         name="enableSelectAll"
//         label="Enable Select All"
//         onToggle={this.handleToggle}
//         defaultToggled={this.state.enableSelectAll}
//     />
//     <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
//     <Toggle
//         name="deselectOnClickaway"
//         label="Deselect On Clickaway"
//         onToggle={this.handleToggle}
//         defaultToggled={this.state.deselectOnClickaway}
//     />
//     <Toggle
//         name="stripedRows"
//         label="Stripe Rows"
//         onToggle={this.handleToggle}
//         defaultToggled={this.state.stripedRows}
//     />
//     <Toggle
//         name="showRowHover"
//         label="Show Row Hover"
//         onToggle={this.handleToggle}
//         defaultToggled={this.state.showRowHover}
//     />
//     <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
//     <Toggle
//         name="showCheckboxes"
//         label="Show Checkboxes"
//         onToggle={this.handleToggle}
//         defaultToggled={this.state.showCheckboxes}
//     />
// </div>
