import { Record } from 'immutable';

const SchemeGroupRowRecord = Record({
  type: '',
  rowType: '',
  rowId: '',
  name: '',
  formula: '',
  normalizedFormula: '',
  editable: false,
  account: undefined
});

export default SchemeGroupRowRecord;
