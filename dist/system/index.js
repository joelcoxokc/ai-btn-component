System.register([], function (_export) {
  _export('install', install);

  function install(aurelia) {
    aurelia.globalizeResources('./btn');
  }

  return {
    setters: [],
    execute: function () {
      'use strict';
    }
  };
});