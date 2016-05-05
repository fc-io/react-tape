import { Record } from 'immutable';

const SchemeGroupRecord = Record({
  type: '',
  rowId: '',
  name: '',
  children: undefined,
  rows: undefined,
  editable: false
});

export default SchemeGroupRecord;
