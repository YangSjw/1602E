import React from 'react';
import Tab from '../routes/TabPage';

import Index from '../routes/IndexPage';
import Rank from '../routes/Rank';

import Detail from '../routes/Detail';


export default {
  routes: [{
    path: '/tab',
    component: Tab,
    children: [{
      path: '/tab/index',
      component: Index
    },
    {
      path: '/tab/Rank',
      component: Rank
    }]
  },
  {
    path: "/Detail",
    component: Detail
  }]
}
