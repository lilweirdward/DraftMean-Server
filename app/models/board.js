var mongoose = require('mongoose');

module.exports = mongoose.model('Board', {
    name: { type: String, default: '' }
});