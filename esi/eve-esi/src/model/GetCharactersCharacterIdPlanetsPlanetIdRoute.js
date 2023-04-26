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
    root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdRoute = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdPlanetsPlanetIdRoute model module.
   * @module model/GetCharactersCharacterIdPlanetsPlanetIdRoute
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPlanetsPlanetIdRoute</code>.
   * route object
   * @alias module:model/GetCharactersCharacterIdPlanetsPlanetIdRoute
   * @class
   * @param contentTypeId {Number} content_type_id integer
   * @param destinationPinId {Number} destination_pin_id integer
   * @param quantity {Number} quantity number
   * @param routeId {Number} route_id integer
   * @param sourcePinId {Number} source_pin_id integer
   */
  var exports = function(contentTypeId, destinationPinId, quantity, routeId, sourcePinId) {
    this.contentTypeId = contentTypeId;
    this.destinationPinId = destinationPinId;
    this.quantity = quantity;
    this.routeId = routeId;
    this.sourcePinId = sourcePinId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPlanetsPlanetIdRoute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdRoute} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPlanetsPlanetIdRoute} The populated <code>GetCharactersCharacterIdPlanetsPlanetIdRoute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('content_type_id'))
        obj.contentTypeId = ApiClient.convertToType(data['content_type_id'], 'Number');
      if (data.hasOwnProperty('destination_pin_id'))
        obj.destinationPinId = ApiClient.convertToType(data['destination_pin_id'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('route_id'))
        obj.routeId = ApiClient.convertToType(data['route_id'], 'Number');
      if (data.hasOwnProperty('source_pin_id'))
        obj.sourcePinId = ApiClient.convertToType(data['source_pin_id'], 'Number');
      if (data.hasOwnProperty('waypoints'))
        obj.waypoints = ApiClient.convertToType(data['waypoints'], ['Number']);
    }
    return obj;
  }

  /**
   * content_type_id integer
   * @member {Number} contentTypeId
   */
  exports.prototype.contentTypeId = undefined;

  /**
   * destination_pin_id integer
   * @member {Number} destinationPinId
   */
  exports.prototype.destinationPinId = undefined;

  /**
   * quantity number
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * route_id integer
   * @member {Number} routeId
   */
  exports.prototype.routeId = undefined;

  /**
   * source_pin_id integer
   * @member {Number} sourcePinId
   */
  exports.prototype.sourcePinId = undefined;

  /**
   * list of pin ID waypoints
   * @member {Array.<Number>} waypoints
   */
  exports.prototype.waypoints = undefined;


  return exports;

}));
