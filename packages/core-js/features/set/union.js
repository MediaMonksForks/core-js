require('../../modules/es.string.iterator');
require('../../modules/web.dom-collections.iterator');
require('../../modules/es.set');
require('../../modules/esnext.set.union');
var entryUnbind = require('../../internals/entry-unbind');

module.exports = entryUnbind('Set', 'union');
