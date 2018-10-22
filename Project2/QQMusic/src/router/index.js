import React from 'react';
import Index from '../routes/IndexPage';
import Tab from '../routes/TabPage';

export default {
  routes: [{
    path: '/tab',
    component: Tab,
    children: [{
      path: '/tab/index',
      component: Index
    }]
  }]
}
