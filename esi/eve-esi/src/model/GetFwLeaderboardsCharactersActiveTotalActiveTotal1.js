/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.17
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFwLeaderboardsCharactersActiveTotalActiveTotal1 = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetFwLeaderboardsCharactersActiveTotalActiveTotal1 model module.
   * @module model/GetFwLeaderboardsCharactersActiveTotalActiveTotal1
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsCharactersActiveTotalActiveTotal1</code>.
   * active_total object
   * @alias module:model/GetFwLeaderboardsCharactersActiveTotalActiveTotal1
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetFwLeaderboardsCharactersActiveTotalActiveTotal1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsCharactersActiveTotalActiveTotal1} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsCharactersActiveTotalActiveTotal1} The populated <code>GetFwLeaderboardsCharactersActiveTotalActiveTotal1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('character_id'))
        obj.characterId = ApiClient.convertToType(data['character_id'], 'Number');
    }
    return obj;
  }

  /**
   * Amount of victory points
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * character_id integer
   * @member {Number} characterId
   */
  exports.prototype.characterId = undefined;


  return exports;

}));
