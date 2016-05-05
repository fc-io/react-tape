import React from 'react';
import TreeTable from './components/tree-table'
import data from './data.json';
import tree from './tree.json';
import { BudgetValueRecord, ColumnSpecRecord, PeriodRecord, SchemeGroupRecord, SchemeGroupRowRecord } from './records';
import {List, Map} from 'immutable';
import _ from 'lodash';

const mapData = function (payload) {
  const mapped = Map(_.mapValues(payload, (row) => (
      Map(_.mapValues(row, (col) => (
          new BudgetValueRecord(col)
      )))
    )));
  return mapped;
};

const recurseMapTree = function (schemeGroup) {
  let mapped = new SchemeGroupRecord(schemeGroup);
  mapped = mapped.set('children', List(schemeGroup.children.map(x => recurseMapTree(x))));
  mapped = mapped.set('rows', List(schemeGroup.rows.map(x => new SchemeGroupRowRecord(x))));
  return mapped;
}

const mapTree = function (payload) {
  const mapped = recurseMapTree(payload.schemeGroup);
  return mapped;
}

const mapColumns = function (payload) {
  return List(payload.map((col) => (new ColumnSpecRecord(
    {...col, period: new PeriodRecord(col.period)}
  ))));
}

const columnList = mapColumns(data.columns);
const schemeGroup = mapTree(tree.data);
const dataRows = mapData(data.rows);

export default props =>
  <TreeTable data={dataRows} columns={columnList} tree={schemeGroup} />
;
