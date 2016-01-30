/*
 /*
 * Copyright 2015 Mauro Calvi <coupdemistral@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
  profile.hostVessel= json.hostVessel;
  profile.isFriend  = json.isFriend;
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

