(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['dragula'],
      __esModule: true,
    };
  }

  define('dragula', [], vendorModule);
})();
