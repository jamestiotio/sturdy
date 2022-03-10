import { RouteRecordRaw } from 'vue-router'

// Public website imports

export const RoutesDocs: RouteRecordRaw[] = [
  {
    path: '/v1/download',
    name: 'download',
    redirect: { name: 'v2download' },
  },
  {
    path: '/download',
    alias: '/v2/download',
    component: () => import('./pages/download/DownloadV2Page.vue'),
    name: 'v2download',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/get-started/yc',
    component: () => import('./pages/LoginRegister.vue'),
    name: 'getStartedYC',
    meta: { nonApp: true, hideNavigation: true, isAuth: true },
    props: {
      startWithSignUp: true,
    },
  },
  {
    path: '/get-started/github',
    component: () => import('./pages/LoginRegister.vue'),
    name: 'getStartedGitHub',
    meta: { nonApp: true, hideNavigation: true, isAuth: true },
    props: {
      startWithSignUp: true,
    },
  },
  {
    path: '/about',
    component: () => import('./pages/docs/about/About.vue'),
    name: 'about',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/contact',
    component: () => import('./pages/docs/about/Contact.vue'),
    name: 'contact',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/v1/pricing',
    name: 'pricing',
    redirect: { name: 'v2pricing' },
  },
  {
    path: '/pricing',
    alias: '/v2/pricing',
    component: () => import('./pages/Pricing.vue'),
    name: 'v2pricing',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/security',
    component: () => import('./pages/docs/Security.vue'),
    name: 'resourcesSecurity',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/v1/docs',
    redirect: { name: 'v2DocsRoot' },
    name: 'resourcesDocs',
  },
  {
    path: '/kth',
    component: () => import('./components/campaigns/Kth.vue'),
    name: 'kth',
    meta: { nonApp: true },
  },
  {
    path: '/aoc',
    redirect: '/advent-of-code-2021-uoeIDQk',
    name: 'advent-of-code',
    meta: { nonApp: true },
  },
  {
    path: '/features/access-control',
    component: () => import('./pages/static/access-control/AccessControl.vue'),
    name: 'featuresAccessControl',
    meta: {
      nonApp: true,
    },
  },
  {
    path: '/features/instant-integration',
    component: () => import('./pages/static/instant-integration/InstantIntegration.vue'),
    name: 'featuresInstantIntegration',
    meta: {
      nonApp: true,
    },
  },
  {
    path: '/syncing',
    redirect: '/docs/syncing',
  },
  {
    path: '/docs/syncing',
    component: () => import('./pages/docs/SharingAndSyncing.vue'),
    name: 'syncing',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/features/instant-switching',
    component: () => import('./pages/docs/WorkspaceNavigation.vue'),
    name: 'featuresWorkspaceNavigation',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/features/integrations',
    component: () => import('./pages/docs/Integrations.vue'),
    name: 'featuresIntegrations',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/features/live',
    component: () => import('./pages/docs/LiveFeedback.vue'),
    name: 'featuresLiveFeedback',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/features/conflicts',
    component: () => import('./pages/docs/Conflicts.vue'),
    name: 'featuresConflicts',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/features/large-files',
    component: () => import('./pages/docs/LargeFiles.vue'),
    name: 'featuresLargeFiles',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/cli',
    component: () => import('./pages/docs/HelpSturdyCommandLine.vue'),
    name: 'resourcesHelpSturdyCommandLine',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/api',
    component: () => import('./pages/docs/API.vue'),
    name: 'resourcesApi',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/access-control',
    component: () => import('./pages/docs/access-control/AccessControl.vue'),
    name: 'docsAccessControl',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/suggestions',
    component: () => import('./pages/docs/suggestions/Suggestions.vue'),
    name: 'docsSuggestions',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/features/migrate-from-github',
    component: () => import('./pages/docs/MigrateFromGitHub.vue'),
    name: 'resourcesMigrateFromGitHub',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/continuous-integration',
    component: () => import('./pages/docs/continuous-integration/ContinuousIntegration.vue'),
    name: 'docsCICD',
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
    },
  },
  {
    path: '/blog/2022-03-10-introducing-draft-changes',
    name: 'blog2022-03-10',
    component: () => import('./pages/blog/2022-03-10/Post.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#015 - Introducing Draft changes' },
    },
  },
  {
    path: '/blog/2022-02-21-sturdy-is-now-open-source',
    name: 'blog2022-02-21',
    component: () => import('./pages/blog/2022-02-21/Post.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#014 - Sturdy is now open-source' },
    },
  },
  {
    path: '/blog/2021-12-17-graphql-componentized-uis',
    name: 'graphql-componentized-uis',
    component: () => import('./pages/blog/graphql-componentized-uis/Post.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#013 - GraphQL & Componentized UIs' },
    },
  },
  {
    path: '/blog/2021-12-07-launching-the-sturdy-app',
    name: 'blog2021-12-07',
    component: () => import('./pages/blog/2021-12-07/Post.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#012 - Launching the Sturdy App!' },
    },
  },
  {
    path: '/blog/2021-11-29-scaling-teams',
    name: 'scaling-teams',
    component: () => import('./pages/blog/scaling-teams/Post.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#011 - Scaling teams as parallel computing systems' },
    },
  },
  {
    path: '/blog/2021-11-22-sturdy-the-app-is-coming',
    name: 'blog-2021-11-22',
    component: () => import('./pages/blog/2021-11-22/Post.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#010 - Sturdy-the-app is coming!' },
    },
  },
  {
    path: '/blog/2021-09-29-acls-and-a-fresh-hot-look',
    name: 'blogRedesign',
    component: () => import('./pages/blog/redesign/Redesign.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#009 - ACLs and a fresh hot look!' },
    },
  },
  {
    path: '/blog/2021-09-09-large-files',
    name: 'blogLargeFiles',
    component: () => import('./pages/blog/large-files/LargeFiles.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#008 - Large Files' },
    },
  },
  {
    path: '/blog/2021-08-18-unbreaking-code-collaboration',
    name: 'blogVision',
    component: () => import('./pages/blog/vision/Vision.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#007 - Unbreaking code collaboration' },
    },
  },
  {
    path: '/blog/2021-08-12-signup-is-open',
    name: 'blogSignupIsOpen',
    component: () => import('./pages/blog/signup-is-open/SignupIsOpen.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#006 - Sturdy is here' },
    },
  },
  {
    path: '/blog/2021-06-10-humane-code-review',
    name: 'blogHumaneCodeReview',
    component: () => import('./pages/blog/humane-code-review/HumaneCodeReview.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#005 - Humane Code Review' },
    },
  },
  {
    path: '/blog/2021-05-06-importing-from-git',
    name: 'blogImportingFromGit',
    component: () => import('./pages/blog/import-from-git/ImportFromGit.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#004 - Importing from Git' },
    },
  },
  {
    path: '/blog/2021-04-16-share-now',
    name: 'blogShareNow',
    component: () => import('./pages/blog/share-now/ShareNow.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#003 - Share Now!' },
    },
  },
  {
    path: '/blog/2021-04-01-restore-to-any-point-in-time',
    name: 'blogRestoreToAnyPointInTime',
    component: () =>
      import('./pages/blog/restore-to-any-point-in-time/RestoreToAnyPointInTime.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#002 - Restore to any point in time' },
    },
  },
  {
    path: '/blog/2021-03-24-yc-w21-demo-day',
    name: 'blogDemoDay',
    component: () => import('./pages/blog/yc-w21-demo-day/DemoDay.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#001 - YC W21 Demo Day!' },
    },
  },
  {
    path: '/blog/2021-03-18-this-week-at-sturdy',
    name: 'blogThisWeekAtSturdy',
    component: () => import('./pages/blog/first-post/ThisWeekAtSturdy.vue'),
    meta: {
      nonApp: true,
      selfContainedLayout: true,
      neverElectron: true,
      blog: { title: '#000 - This Week at Sturdy' },
    },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('./pages/blog/Blog.vue'),
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/careers',
    component: () => import('./pages/careers/Careers.vue'),
    name: 'careers',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/careers/founding-backend-engineer',
    component: () => import('./pages/careers/FoundingBackendEngineer.vue'),
    name: 'careersFoundingBackendEngineer',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/careers/founding-frontend-engineer',
    component: () => import('./pages/careers/FoundingFrontendEngineer.vue'),
    name: 'careersFoundingFrontendEngineer',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/',
    alias: '/v2',
    component: () => import('./pages/landing/Index.vue'),
    name: 'v2Index',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/v1/index',
    name: 'index',
    redirect: { name: 'v2Index' },
  },
  {
    path: '/docs',
    alias: '/v2/docs',
    component: () => import('./pages/docs/DocsRoot.vue'),
    name: 'v2DocsRoot',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/product-intro',
    alias: '/v2/docs/product-intro',
    component: () => import('./pages/docs/SturdyProductIntro.vue'),
    name: 'v2DocsProductIntro',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/how-sturdy-interacts-with-git',
    alias: ['/v2/docs/how-sturdy-interacts-with-git', '/docs/sturdy-for-git-users'],
    component: () => import('./pages/docs/HowSturdyInteractsWithGit.vue'),
    name: 'v2DocsHowSturdyInteractsWithGit',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/working-in-the-open',
    alias: '/v2/docs/working-in-the-open',
    component: () => import('./pages/docs/WorkingInTheOpen.vue'),
    name: 'v2DocsWorkingInTheOpen',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/how-to-ship-software-to-production',
    alias: '/v2/docs/how-to-ship-software-to-production',
    component: () => import('./pages/docs/HowToShipSoftwareToProduction.vue'),
    name: 'v2DocsHotToShipSoftwareToProduction',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/how-to-collaborate-with-others',
    alias: '/v2/docs/how-to-collaborate-with-others',
    component: () => import('./pages/docs/HowToCollaborateWithOthers.vue'),
    name: 'v2DocsHowToCollaborateWithOthers',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/how-to-edit-code',
    alias: '/v2/docs/how-to-edit-code',
    component: () => import('./pages/docs/HowToEditCode.vue'),
    name: 'v2DocsHowToEditCode',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/how-to-setup-sturdy-with-github',
    alias: '/v2/docs/how-to-setup-sturdy-with-github',
    component: () => import('./pages/docs/HowToSetupSturdyWithGithub.vue'),
    name: 'v2DocsHowToSetupSturdyWithGitHub',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/how-to-switch-between-tasks',
    alias: '/v2/docs/how-to-switch-between-tasks',
    component: () => import('./pages/docs/HowToSwitchBetweenTasks.vue'),
    name: 'v2DocsHowToSwitchBetweenTasks',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/quickstart',
    alias: '/v2/docs/quickstart',
    component: () => import('./pages/docs/QuickStart.vue'),
    name: 'v2DocsQuickStart',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/using-sturdy',
    alias: '/v2/docs/using-sturdy',
    component: () => import('./pages/docs/UsingSturdy.vue'),
    name: 'v2DocsUsingSturdy',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/pricing',
    alias: '/v2/docs/pricing',
    component: () => import('./pages/docs/Pricing.vue'),
    name: 'v2DocsPricing',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/index',
    alias: '/v2/docs/index',
    component: () => import('./pages/docs/Index.vue'),
    name: 'v2DocsIndex',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/self-hosted',
    alias: '/v2/docs/self-hosted',
    component: () => import('./pages/docs/SelfHosted.vue'),
    name: 'v2DocsSelfHosted',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/handbook/code-of-conduct',
    component: () => import('./pages/docs/handbook/CodeOfConduct.vue'),
    name: 'handbookCodeOfConduct',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/handbook/releases',
    component: () => import('./pages/docs/handbook/Releases.vue'),
    name: 'handbookReleases',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
  {
    path: '/docs/cli/install',
    component: () => import('./pages/docs/cli/Install.vue'),
    name: 'docsCliInstall',
    meta: { nonApp: true, selfContainedLayout: true, neverElectron: true },
  },
]
