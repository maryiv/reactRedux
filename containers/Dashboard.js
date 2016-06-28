const debug = require('debug')('trader:Dashboard');
import React from 'react';
import { connect } from 'react-redux';
import * as dashboardActions from '../redux/dashboard';
import Accounts from '../components/Accounts';
import Chart from '../components/Chart';

const Dashboard = React.createClass({
    componentDidMount: function() {
        let { requestAccounts } = this.props;
        requestAccounts();
    },
    render: function() {
        const { dashboard, sort } = this.props;

        return <main>
            <Accounts {...this.props} />
            <Chart {...dashboard} />
        </main>
    }
});

var mapStateToProps = state => ({ dashboard: state.dashboard });

export default connect(mapStateToProps, { ...dashboardActions })(Dashboard);