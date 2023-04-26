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
    root.EveSwaggerInterface.GetCharactersCharacterIdSearchOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdSearchOk model module.
   * @module model/GetCharactersCharacterIdSearchOk
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdSearchOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdSearchOk
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdSearchOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdSearchOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdSearchOk} The populated <code>GetCharactersCharacterIdSearchOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('agent'))
        obj.agent = ApiClient.convertToType(data['agent'], ['Number']);
      if (data.hasOwnProperty('alliance'))
        obj.alliance = ApiClient.convertToType(data['alliance'], ['Number']);
      if (data.hasOwnProperty('character'))
        obj.character = ApiClient.convertToType(data['character'], ['Number']);
      if (data.hasOwnProperty('constellation'))
        obj.constellation = ApiClient.convertToType(data['constellation'], ['Number']);
      if (data.hasOwnProperty('corporation'))
        obj.corporation = ApiClient.convertToType(data['corporation'], ['Number']);
      if (data.hasOwnProperty('faction'))
        obj.faction = ApiClient.convertToType(data['faction'], ['Number']);
      if (data.hasOwnProperty('inventory_type'))
        obj.inventoryType = ApiClient.convertToType(data['inventory_type'], ['Number']);
      if (data.hasOwnProperty('region'))
        obj.region = ApiClient.convertToType(data['region'], ['Number']);
      if (data.hasOwnProperty('solar_system'))
        obj.solarSystem = ApiClient.convertToType(data['solar_system'], ['Number']);
      if (data.hasOwnProperty('station'))
        obj.station = ApiClient.convertToType(data['station'], ['Number']);
      if (data.hasOwnProperty('structure'))
        obj.structure = ApiClient.convertToType(data['structure'], ['Number']);
    }
    return obj;
  }

  /**
   * agent array
   * @member {Array.<Number>} agent
   */
  exports.prototype.agent = undefined;

  /**
   * alliance array
   * @member {Array.<Number>} alliance
   */
  exports.prototype.alliance = undefined;

  /**
   * character array
   * @member {Array.<Number>} character
   */
  exports.prototype.character = undefined;

  /**
   * constellation array
   * @member {Array.<Number>} constellation
   */
  exports.prototype.constellation = undefined;

  /**
   * corporation array
   * @member {Array.<Number>} corporation
   */
  exports.prototype.corporation = undefined;

  /**
   * faction array
   * @member {Array.<Number>} faction
   */
  exports.prototype.faction = undefined;

  /**
   * inventory_type array
   * @member {Array.<Number>} inventoryType
   */
  exports.prototype.inventoryType = undefined;

  /**
   * region array
   * @member {Array.<Number>} region
   */
  exports.prototype.region = undefined;

  /**
   * solar_system array
   * @member {Array.<Number>} solarSystem
   */
  exports.prototype.solarSystem = undefined;

  /**
   * station array
   * @member {Array.<Number>} station
   */
  exports.prototype.station = undefined;

  /**
   * structure array
   * @member {Array.<Number>} structure
   */
  exports.prototype.structure = undefined;


  return exports;

}));
