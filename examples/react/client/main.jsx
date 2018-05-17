import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter'

import App from './ui/App';
import './main.css'
import { Meteor } from 'meteor/meteor';

FlowRouter.route('/', {
  name: 'main',
  action() {
    mount(App)
  }
})

