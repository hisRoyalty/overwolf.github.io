import './status.scss';

// take the state and return string for use as state class name
export const stateClassNames = {
  [-2]: 'loading',
  [-1]: 'deprecated',
  0: 'coming-soon',
  1: 'green',
  2: 'yellow',
  3: 'red',
} as const;

export const stateLabels = {
  [-2]: 'Loading...',
  [-1]: 'Deprecated',
  0: 'Coming soon',
  1: 'Good to go',
  2: 'Some events may be unavailable',
  3: 'Events are currently unavailable',
} as const;

export const enum StateNames {
  Loading = -2,
  Deprecated = -1,
  EndOfLife = 0,
  ComingSoon = 0,
  Green = 1,
  Yellow = 2,
  Red = 3,
}
