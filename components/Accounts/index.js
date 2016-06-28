import React from 'react';
import AccountsTable from './AccountsTable';

export default function Accounts(props) {
    const { addAccount, requestAccounts, dashboard, sort } = props;

    return <section className="accounts">
        <div className="header">
            <h2>Accounts</h2>
            <div className="actions">
                <button onClick={_ => addAccount()}><i className="glyphicon glyphicon-plus-sign" /> Add Account</button>
                <button onClick={_ => requestAccounts()}><i className="glyphicon glyphicon-refresh" /> Refresh</button>
            </div>
        </div>
        <AccountsTable {...dashboard} sort={sort} />
    </section>
};