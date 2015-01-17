'use strict';

module.exports = {
    db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/nvanbenschoten',
    auth: {
      token: process.env.AUTH_TOKEN || "1234"
    },
}
