const debug = require('debug')('trader:AccountsTable');
import React from 'react';
import Currency from '../Currency';
import SortHeading from './SortHeading';

export default function AccountsTable({ accounts, totals, sort, sortColumn, sortDirection }) {
    return <table>
        <thead>
            <tr>
                <th><SortHeading heading="Name" column="name" sortColumn={sortColumn} sortDirection={sortDirection} sort={sort} /></th>
                <th className="marketValue"><SortHeading heading="Market Value" column="marketValue" sortColumn={sortColumn} sortDirection={sortDirection} sort={sort} /></th>
                <th className="cash"><SortHeading heading="Cash" column="cash" sortColumn={sortColumn} sortDirection={sortDirection} sort={sort} /></th>
                <th className="legend">Legend</th>
            </tr>
        </thead>
        <tbody>
            {accounts.map((account, index) => (
                <tr key={index}>
                    <td>{account.name}</td>
                    <td className="marketValue"><Currency value={account.marketValue} /></td>
                    <td className="cash"><Currency value={account.cash} /></td>
                    <td className="legend">
                        <center>
                            <div className="legend" style={{backgroundColor: account.legend}}></div>
                        </center>
                    </td>
                </tr>
            ))}
            <tr className="totals">
                <td>&nbsp;</td>
                <td className="marketValue"><Currency value={totals.marketValue} /></td>
                <td className="cash"><Currency value={totals.cash} /></td>
                <td>&nbsp;</td>
            </tr>
        </tbody>
    </table>;
}