import React from 'react';
import _ from 'lodash';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function MyTable(props) {

    return (
        <Table className="a-table">
            <TableHead>
                <TableRow>
                    <TableCell>מספר נפגעים</TableCell>
                    <TableCell align="right">ישוב</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {_.map(props.rows, (row) => (
                    <TableRow key={row.key} onClick={_.isFunction(props.onRowClick) ? props.onRowClick.bind(null, row) : null}>
                        <TableCell component="th" scope="row">{row.num}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default MyTable;
