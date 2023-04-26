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
    root.EveSwaggerInterface.GetCharactersCharacterIdMining200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdMining200Ok model module.
   * @module model/GetCharactersCharacterIdMining200Ok
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMining200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdMining200Ok
   * @class
   * @param _date {Date} date string
   * @param quantity {Number} quantity integer
   * @param solarSystemId {Number} solar_system_id integer
   * @param typeId {Number} type_id integer
   */
  var exports = function(_date, quantity, solarSystemId, typeId) {
    this._date = _date;
    this.quantity = quantity;
    this.solarSystemId = solarSystemId;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMining200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMining200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMining200Ok} The populated <code>GetCharactersCharacterIdMining200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('solar_system_id'))
        obj.solarSystemId = ApiClient.convertToType(data['solar_system_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * date string
   * @member {Date} _date
   */
  exports.prototype._date = undefined;

  /**
   * quantity integer
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * solar_system_id integer
   * @member {Number} solarSystemId
   */
  exports.prototype.solarSystemId = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;


  return exports;

}));
