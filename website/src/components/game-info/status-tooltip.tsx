import React from 'react';
import { stateToTxt } from '../live-game-data/utils/status';



function StatusToolTip(props: { gameState: number; endOfLife?: string }) {
  const {gameState, endOfLife} = props;

  return (
    <div className='status-tooltip-trigger'>
      <div className='status-tooltip'>
        <span>{stateToTxt(endOfLife ? -1 : gameState)}</span>
      </div>
    </div>
  )
}

export default StatusToolTip;