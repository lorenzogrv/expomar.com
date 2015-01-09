var oop = require('iai-oop')
  , Schema = require( '../base/Schema' )
  , Field = Schema.Field
;

/**
 *
 *
 */

var User = module.exports = Schema();

User._type = "user";

User.username = Field({
  unique: true
});

User.password = Field({
  hash: 'sha1'
});

User.email = Field({
  unique: true
});

User.last_login = Field({

});

