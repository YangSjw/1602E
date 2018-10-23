import React from 'react';
import Tab from '../routes/TabPage';
import Rank from '../routes/RankPage';
import Search from '../routes/SearchPage'

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
      path: '/tab/rank',
      component: Rank
    },
    {
      path: '/tab/search',
      component: Search
    }]
  },
  {
    path: "/detail",
    component: Detail
  }]
}
