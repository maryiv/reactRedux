import _ from 'lodash'
import data from '../services/data'

const debug = require('debug')('trader:redux:dashboard');

// action types
const REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS';
const ACCOUNTS_REQUESTED = 'ACCOUNTS_REQUESTED';
const ACCOUNTS_RECEIVED = 'ACCOUNTS_RECEIVED';
const ADD_ACCOUNT = 'ADD_ACCOUNT';
const SORT = 'SORT';

// action creators
export const accountsReceived = (accounts) => ({ type: ACCOUNTS_RECEIVED,
                                                 accounts });

export const addAccount = (account = null) => {
  let action = {
    type: ADD_ACCOUNT
  };

  if (!account) {
    account = {
      name: 'New Account',
      marketValue: Math.random() * 100000,
      cash: Math.random() * 400000,
      legend: 'cyan'
    }
  }

  action.account = account;

  return action;
};

export const sort = (column) => ({ type: SORT, column });

export function requestAccounts() {

  debug('requestAccounts()');

  return dispatch => {
    return data.getAccounts()
        .then(accounts => dispatch(accountsReceived(accounts)));
  }
}

export function calculateTotals(accounts) {
  let marketValue = 0,
      cash = 0;

  debug('calculateTotals()');

  accounts.forEach(function (account, id, accounts) {
    marketValue += account.marketValue;
    cash += account.cash;
  });

  return { marketValue: marketValue, cash: cash };
}

// initial state
const initialState = {
  accounts: [],
  totals: { marketValue: 0, cash: 0 },
  sortColumn: 'marketValue',
  sortDirection: 'desc'
};

// reducer
export default function reducer(state = initialState, action) {

  debug(action);

  switch (action.type) {
    case ACCOUNTS_RECEIVED:
      return Object.assign({}, state, {
        accounts: action.accounts,
        totals: calculateTotals(action.accounts)
      });
    case ADD_ACCOUNT:
      return Object.assign({}, state, {
        accounts: state.accounts.concat(action.account),
        totals: {
          marketValue: state.totals.marketValue + action.account.marketValue,
          cash: state.totals.cash + action.account.cash
        }
      });
    case SORT:
      /**
       * To ignore the sort, please comment out the code
       */
      let accounts = state.accounts,
          sortDirection = state.sortDirection;
      if (state.sortColumn == action.column) {
        sortDirection = (sortDirection == 'desc') ? 'asc' : 'desc';
      }
      accounts.sort(function (account1, account2) {
        if (account1[action.column] > account2[action.column]) {
          return (sortDirection == 'desc') ? 1 : -1;
        }
        if (account1[action.column] < account2[action.column]) {
          return (sortDirection == 'desc') ? -1 : 1;
        }
        return 0;
      });
      return Object.assign({}, state, {
        accounts: accounts,
        sortColumn: action.column,
        sortDirection: sortDirection
      });
    default:
      return state;
  }
}

