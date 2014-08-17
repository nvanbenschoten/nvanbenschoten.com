'use strict';

module.exports = {
    app: {
        title: 'nvanbenschoten.com',
        description: 'Nathan VanBenschoten\'s Personal Website/Web-app'
    },
    port: process.env.PORT || 3000,
    log: {
      level: 'debug',
      location: 'logs/server.log',
      console: true
    },
};
