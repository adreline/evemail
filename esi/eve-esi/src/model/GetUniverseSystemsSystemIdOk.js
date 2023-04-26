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
    define(['ApiClient', 'model/GetUniverseSystemsSystemIdPlanet', 'model/GetUniverseSystemsSystemIdPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUniverseSystemsSystemIdPlanet'), require('./GetUniverseSystemsSystemIdPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniverseSystemsSystemIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetUniverseSystemsSystemIdPlanet, root.EveSwaggerInterface.GetUniverseSystemsSystemIdPosition);
  }
}(this, function(ApiClient, GetUniverseSystemsSystemIdPlanet, GetUniverseSystemsSystemIdPosition) {
  'use strict';

  /**
   * The GetUniverseSystemsSystemIdOk model module.
   * @module model/GetUniverseSystemsSystemIdOk
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetUniverseSystemsSystemIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseSystemsSystemIdOk
   * @class
   * @param constellationId {Number} The constellation this solar system is in
   * @param name {String} name string
   * @param position {module:model/GetUniverseSystemsSystemIdPosition} 
   * @param securityStatus {Number} security_status number
   * @param systemId {Number} system_id integer
   */
  var exports = function(constellationId, name, position, securityStatus, systemId) {
    this.constellationId = constellationId;
    this.name = name;
    this.position = position;
    this.securityStatus = securityStatus;
    this.systemId = systemId;
  };

  /**
   * Constructs a <code>GetUniverseSystemsSystemIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseSystemsSystemIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseSystemsSystemIdOk} The populated <code>GetUniverseSystemsSystemIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('constellation_id'))
        obj.constellationId = ApiClient.convertToType(data['constellation_id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('planets'))
        obj.planets = ApiClient.convertToType(data['planets'], [GetUniverseSystemsSystemIdPlanet]);
      if (data.hasOwnProperty('position'))
        obj.position = GetUniverseSystemsSystemIdPosition.constructFromObject(data['position']);
      if (data.hasOwnProperty('security_class'))
        obj.securityClass = ApiClient.convertToType(data['security_class'], 'String');
      if (data.hasOwnProperty('security_status'))
        obj.securityStatus = ApiClient.convertToType(data['security_status'], 'Number');
      if (data.hasOwnProperty('star_id'))
        obj.starId = ApiClient.convertToType(data['star_id'], 'Number');
      if (data.hasOwnProperty('stargates'))
        obj.stargates = ApiClient.convertToType(data['stargates'], ['Number']);
      if (data.hasOwnProperty('stations'))
        obj.stations = ApiClient.convertToType(data['stations'], ['Number']);
      if (data.hasOwnProperty('system_id'))
        obj.systemId = ApiClient.convertToType(data['system_id'], 'Number');
    }
    return obj;
  }

  /**
   * The constellation this solar system is in
   * @member {Number} constellationId
   */
  exports.prototype.constellationId = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * planets array
   * @member {Array.<module:model/GetUniverseSystemsSystemIdPlanet>} planets
   */
  exports.prototype.planets = undefined;

  /**
   * @member {module:model/GetUniverseSystemsSystemIdPosition} position
   */
  exports.prototype.position = undefined;

  /**
   * security_class string
   * @member {String} securityClass
   */
  exports.prototype.securityClass = undefined;

  /**
   * security_status number
   * @member {Number} securityStatus
   */
  exports.prototype.securityStatus = undefined;

  /**
   * star_id integer
   * @member {Number} starId
   */
  exports.prototype.starId = undefined;

  /**
   * stargates array
   * @member {Array.<Number>} stargates
   */
  exports.prototype.stargates = undefined;

  /**
   * stations array
   * @member {Array.<Number>} stations
   */
  exports.prototype.stations = undefined;

  /**
   * system_id integer
   * @member {Number} systemId
   */
  exports.prototype.systemId = undefined;


  return exports;

}));
