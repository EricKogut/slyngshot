import { Routes, init } from '@nx/next-router';

// 'user': { // This is the route name
//   pattern: '/user', // This is the url pattern to call the page
//   page: '/user', // This is the next page (pages/user.js or pages/user/index.js)
// },

const routes: Routes = {
  //////////////////
  // home
  //////////////////
  home: {
    pattern: '/',
    page: '/index',
  },

  //////////////////
  // Test Route(s)
  //////////////////
  testPage: {
    pattern: '/test',
    page: '/test',
  },

  //////////////////
  // Dataflow Route(s)
  //////////////////
  dataFlow: {
    pattern: '/dataflows',
    page: '/dataflows',
  },

  //////////////////
  // Project Route(s)
  //////////////////
  createProject: {
    pattern: '/projects/create',
    page: '/projects/create',
  },

  listProjects: {
    pattern: '/projects/create',
    page: '/projects/allProjects',
  },
};

init(routes);
