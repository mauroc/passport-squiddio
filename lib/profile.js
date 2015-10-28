/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {

  if ('string' == typeof json) {
    json = JSON.parse(json);
  }

  var profile = {boat: {}};
  profile.id = json.id;
  profile.firstName = json.firstName;
  profile.lastName  = json.lastName;
  profile.email     = json.email;
  profile.boat.id   = json.boat.id;
  profile.boat.name = json.boat.name;
  profile.boat.mmsi = json.boat.mmsi;

  if (json.email) {
    profile.emails = [{ value: json.email }];
  }
  
  if (json.picture) {
    if (typeof json.picture == 'object' && json.picture.data) {
      // October 2012 Breaking Changes
      profile.photos = [{ value: json.picture.data.url }];
    } else {
      profile.photos = [{ value: json.picture }];
    }
  }

  return profile;
};

