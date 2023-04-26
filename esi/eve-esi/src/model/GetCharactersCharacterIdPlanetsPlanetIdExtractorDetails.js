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
    define(['ApiClient', 'model/GetCharactersCharacterIdPlanetsPlanetIdHead'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdPlanetsPlanetIdHead'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdHead);
  }
}(this, function(ApiClient, GetCharactersCharacterIdPlanetsPlanetIdHead) {
  'use strict';

  /**
   * The GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails model module.
   * @module model/GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails</code>.
   * extractor_details object
   * @alias module:model/GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails
   * @class
   * @param heads {Array.<module:model/GetCharactersCharacterIdPlanetsPlanetIdHead>} heads array
   */
  var exports = function(heads) {
    this.heads = heads;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails} The populated <code>GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cycle_time'))
        obj.cycleTime = ApiClient.convertToType(data['cycle_time'], 'Number');
      if (data.hasOwnProperty('head_radius'))
        obj.headRadius = ApiClient.convertToType(data['head_radius'], 'Number');
      if (data.hasOwnProperty('heads'))
        obj.heads = ApiClient.convertToType(data['heads'], [GetCharactersCharacterIdPlanetsPlanetIdHead]);
      if (data.hasOwnProperty('product_type_id'))
        obj.productTypeId = ApiClient.convertToType(data['product_type_id'], 'Number');
      if (data.hasOwnProperty('qty_per_cycle'))
        obj.qtyPerCycle = ApiClient.convertToType(data['qty_per_cycle'], 'Number');
    }
    return obj;
  }

  /**
   * in seconds
   * @member {Number} cycleTime
   */
  exports.prototype.cycleTime = undefined;

  /**
   * head_radius number
   * @member {Number} headRadius
   */
  exports.prototype.headRadius = undefined;

  /**
   * heads array
   * @member {Array.<module:model/GetCharactersCharacterIdPlanetsPlanetIdHead>} heads
   */
  exports.prototype.heads = undefined;

  /**
   * product_type_id integer
   * @member {Number} productTypeId
   */
  exports.prototype.productTypeId = undefined;

  /**
   * qty_per_cycle integer
   * @member {Number} qtyPerCycle
   */
  exports.prototype.qtyPerCycle = undefined;


  return exports;

}));
