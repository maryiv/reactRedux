import React from 'react';
import PieChart from 'react-simple-pie-chart';

const Chart = React.createClass({
    render: function() {
        const { accounts } = this.props;
        const slices = accounts.sort((a,b) => a.marketValue - b.marketValue)
                               .map(x => ({ color: x.legend, value: x.marketValue }));

        return <section className="chart">
            <h3>All Accounts</h3>
            <PieChart slices={slices} />
            <div className="help-label">Click on an account to view positions</div>
        </section>
    }
});

export default Chart;