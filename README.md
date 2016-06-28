### Test Task

#### To run the app/tests

1. npm install
2. npm start / npm test

#### The tasks

1. The action is dispatched to fetch the accounts but the reducer code is missing. Implement what you need in the reducer to make the accounts appear.
2. Re-implement add account, some of the code is already there

3. The totals are no longer being calculated, please calculate them at the start and whenever an account is added

4. There is a file dashboard.spec.js, add tests for:
  - adding an account
  - calculating totals

5. When you manage to get the accounts loading, the legend square is not horizontally centered. Please center it.

Ignore the code to do with sorting - **To do this, replace the code in the `case SORT:` section of the function reducer (`/redux/dashboard.js`) to the next: `return state;`**