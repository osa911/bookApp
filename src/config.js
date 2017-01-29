'use strict';

var path = require('path'),
    config;

config = {
  production: {},
  development: {
    api: {
      booksApi: 'http://osadchiy.xyz/index.json',
    }
  }
};

module.exports = config;
