import React from 'react';
import './status-legend.scss';
import { StateNames, stateClassNames, stateLabels } from '../utils/status';

function StatusLegend() {
  // ---------------------------------------------------------------------------
  return (
    <ul className="legend">
      {LegendLine(StateNames.Green)}
      {LegendLine(StateNames.Yellow)}
      {LegendLine(StateNames.Red)}
    </ul>
  );
}

function LegendLine(state: StateNames) {
  return <li className={stateClassNames[state]}>{stateLabels[state]}</li>;
}

export default StatusLegend;
