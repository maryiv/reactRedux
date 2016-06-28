import * as actions from '../redux/dashboard';
import reducer from '../redux/dashboard';

describe('dashboard', () => {
    let accounts;
    let state;

    // populate the state with some accounts
    beforeEach(() => {
        accounts = [
            {
                name: 'Account 1',
                marketValue: 8,
                cash: 4,
                legend: 'cyan'
            },
            {
                name: 'Account 2',
                marketValue: 2,
                cash: 1,
                legend: 'red'
            },
            {
                name: 'Account 3',
                marketValue: 32,
                cash: 16,
                legend: 'blue'
            }
        ];
        let action = actions.accountsReceived(accounts);
        state = reducer(undefined, action);
    });

    it('calculates the totals', () => {
        expect(actions.calculateTotals(state.accounts)).toEqual({ marketValue: 42, cash: 21});
    });

    it('can add an account', () => {
        let account = {
            name: 'Test Account',
            marketValue: Math.random() * 100000,
            cash: Math.random() * 400000,
            legend: 'green'
        };
        let action = actions.addAccount(account);
        state = reducer(undefined, action);
    });
});