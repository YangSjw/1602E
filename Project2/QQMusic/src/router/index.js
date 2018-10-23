import React from 'react';
import Index from '../routes/IndexPage';
import Tab from '../routes/TabPage';
import Rank from '../routes/RankPage';
import Search from '../routes/SearchPage'

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
  }]
}
