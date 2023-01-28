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
};

init(routes);
