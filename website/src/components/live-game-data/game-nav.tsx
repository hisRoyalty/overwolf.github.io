import React, { useEffect, useState } from 'react';
import './game-nav.scss';
import { GamesMetadata } from '../game-events-status/gamesMetaData';
import LauncherGamesList from './launcher-games-list';
import StatusToolTip from './partials/status-tooltip';
import SpecificGameInfo, {
  AllLinksOn,
  DisabledLinks,
} from './specific-game-info';
import OWClassNames from '@site/src/theme/OverwolfClassNames';
import StatusLegend from './partials/status-legend';
import { StateNames, stateClassNames } from './utils/status';

function GameNav(props: {
  gameId: number;
  currentPage: 'docs' | 'status' | 'compliance';
}) {
  const { gameId, currentPage } = props;

  const [gameStatus, setGameStatus] = useState<StateNames>(StateNames.Loading);

  // ---------------------------------------------------------------------------

  useEffect(() => {
    async function getGameStatus() {
      await fetch(`https://game-events-status.overwolf.com/${gameId}_prod.json`)
        .then((response) => response.json())
        .then((data) => setGameStatus(data.state));
    }

    getGameStatus();
  }, [gameId]);

  // ---------------------------------------------------------------------------

  // Data for the current game/launcher
  const data = GamesMetadata[gameId];
  // [If Game] Data for this game's launcher
  const launcherData = GamesMetadata[data.launcher];
  // [If Launcher] Data for the games launched by this launcher
  const launchedGames = data?.games;
  // [If SubVariant] Data for this game's main variant
  const mainVariant = GamesMetadata[data.mainVariant];
  // [If MainVariant] Data for this game's sub variants
  const subVariants = data.subVariants;

  // ---------------------------------------------------------------------------
  return (
    <section className={OWClassNames.siteComponents.liveGameData.gameNav}>
      <div className="game-info-item">
        <h1
          className={`game-info-title ${
            stateClassNames[data.endOfLife ? StateNames.EndOfLife : gameStatus]
          }`}
        >
          <img src={data.iconLargeUrl} />
          <span>{data.name}</span>

          <StatusToolTip
            gameState={gameStatus ?? -1}
            endOfLife={data.endOfLife}
          />
        </h1>

        <ul className="game-info-groups">
          {data.endOfLife && (
            <li style={{ paddingTop: '10px' }}>
              <h1>
                This game is nearing its end of life, and support will be fully
                removed at {data.endOfLife}
              </h1>
            </li>
          )}
          <li className="main">
            <SpecificGameInfo
              metaData={data}
              type="Game"
              disabledLinks={LinkToggler(currentPage)}
            />
          </li>

          {hasElectron && (
            <li className="main">
              <SpecificGameInfo
                metaData={data}
                type="Game"
                hasElectron={true}
                disabledLinks={LinkToggler(currentPage)}
              />
            </li>
          )}

          {mainVariant && (
            <>
              <li>
                <SpecificGameInfo
                  metaData={mainVariant}
                  type="Game"
                  disabledLinks={AllLinksOn()}
                />
              </li>
            </>
          )}

          {subVariants &&
            subVariants.map((subVariant) => {
              const subMetaData = GamesMetadata[subVariant];
              return (
                <li>
                  <SpecificGameInfo
                    metaData={subMetaData}
                    type="Game"
                    disabledLinks={LinkTogglerSub(data, subMetaData)}
                  />
                </li>
              );
            })}

          {launcherData && (
            <li>
              <SpecificGameInfo
                metaData={launcherData}
                type="Launcher"
                disabledLinks={AllLinksOn()}
              />
            </li>
          )}
        </ul>
      </div>

      {launchedGames?.length && (
        <LauncherGamesList gamesListData={launchedGames} />
      )}

      {currentPage === 'status' && <StatusLegend />}
    </section>
  );
}

function LinkTogglerSub(
  main: GameMetaData,
  variant: GameMetaData,
): DisabledLinks {
  return {
    docs: main.docs === variant.docs,
    compliance: main.compliance === variant.compliance,
    status: main.path === variant.path,
  };
}

function LinkToggler(
  page: string,
  disabled: DisabledLinks = AllLinksOn(),
): DisabledLinks {
  disabled[page] = true;
  return disabled;
}

export default GameNav;
