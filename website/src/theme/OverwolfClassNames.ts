const OWClassNames = {
  siteComponents: {
    liveGameData: {
      shared: {
        gameLinks: 'game-links-component',
      },
      gameNav: 'game-nav-component',
    },
  },
  themeComponents: {
    tooltips: {
      tooltip: 'theme-tooltip-component',
      container: 'theme-tooltips-container-component',
    },
  },
  common: {
    content: 'content',
    fakeTooltip: 'fake-tooltip',

    // Old namings
    collapsible: 'ow-theme-collapsible',
    desktopOnly: 'desktop-only',
    mobileOnly: 'mobile-only',
    navigateWithKeyboard: 'navigation-with-keyboard',
    lightTheme: 'light',
    active: 'active',
    inactive: 'inactive',
    buttonSecondary: 'btn-secondary',
  },
  sidebar: {
    index: 'ow-theme-sidebar',
    hidden: 'hidden',
    container: {
      wrapper: 'sidebar-wrapper',
      index: 'sidebar-container',
      collapsed: 'collapsed',
      items: {
        common: {
          current: 'current',
          hidden: 'hidden',
          selectable: 'selectable',
          active: 'active',
        },
        category: {
          spacer: 'spacer',
          collapseCell: 'collapse-cell',
          showCaret: 'show-caret',
          tagCategory: 'tag-category',
        },
        link: {
          index: 'label-cell',
          fallback: 'fallback',
          link: 'link',
          label: 'label',
        },
        html: {
          index: 'html-item',
        },
      },
    },
  },
  comparisonTable: {
    index: 'comparison-table',
    headers: {
      index: 'comparison-table-headers',
      comparisonTitle: 'comparison-title',
      item: 'comparison-header-item',
      categories: {
        index: 'comparison-categories',
        category: 'comparison-category',
      },
    },
    rows: {
      index: 'comparison-rows',
      row: {
        index: 'comparison-row',
        title: {
          index: 'comparison-group-title',
        },
        values: {
          index: 'comparison-values',
          title: 'comparison-title',
          text: 'comparison-text',
          green: 'green',
          red: 'red',
          toolTipContainer: 'tt-container',
        },
      },
    },
    cell: {
      index: 'comparison-cell',
    },
  },
} as const;

export default OWClassNames;
