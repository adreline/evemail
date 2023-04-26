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
    define(['ApiClient', 'model/GetUniverseStargatesStargateIdDestination', 'model/GetUniverseStargatesStargateIdPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUniverseStargatesStargateIdDestination'), require('./GetUniverseStargatesStargateIdPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniverseStargatesStargateIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetUniverseStargatesStargateIdDestination, root.EveSwaggerInterface.GetUniverseStargatesStargateIdPosition);
  }
}(this, function(ApiClient, GetUniverseStargatesStargateIdDestination, GetUniverseStargatesStargateIdPosition) {
  'use strict';

  /**
   * The GetUniverseStargatesStargateIdOk model module.
   * @module model/GetUniverseStargatesStargateIdOk
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetUniverseStargatesStargateIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseStargatesStargateIdOk
   * @class
   * @param destination {module:model/GetUniverseStargatesStargateIdDestination} 
   * @param name {String} name string
   * @param position {module:model/GetUniverseStargatesStargateIdPosition} 
   * @param stargateId {Number} stargate_id integer
   * @param systemId {Number} The solar system this stargate is in
   * @param typeId {Number} type_id integer
   */
  var exports = function(destination, name, position, stargateId, systemId, typeId) {
    this.destination = destination;
    this.name = name;
    this.position = position;
    this.stargateId = stargateId;
    this.systemId = systemId;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetUniverseStargatesStargateIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseStargatesStargateIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseStargatesStargateIdOk} The populated <code>GetUniverseStargatesStargateIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('destination'))
        obj.destination = GetUniverseStargatesStargateIdDestination.constructFromObject(data['destination']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = GetUniverseStargatesStargateIdPosition.constructFromObject(data['position']);
      if (data.hasOwnProperty('stargate_id'))
        obj.stargateId = ApiClient.convertToType(data['stargate_id'], 'Number');
      if (data.hasOwnProperty('system_id'))
        obj.systemId = ApiClient.convertToType(data['system_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * @member {module:model/GetUniverseStargatesStargateIdDestination} destination
   */
  exports.prototype.destination = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/GetUniverseStargatesStargateIdPosition} position
   */
  exports.prototype.position = undefined;

  /**
   * stargate_id integer
   * @member {Number} stargateId
   */
  exports.prototype.stargateId = undefined;

  /**
   * The solar system this stargate is in
   * @member {Number} systemId
   */
  exports.prototype.systemId = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;


  return exports;

}));
