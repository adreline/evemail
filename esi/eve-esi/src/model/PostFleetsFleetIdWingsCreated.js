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
    root.EveSwaggerInterface.PostFleetsFleetIdWingsCreated = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PostFleetsFleetIdWingsCreated model module.
   * @module model/PostFleetsFleetIdWingsCreated
   * @version 1.17
   */

  /**
   * Constructs a new <code>PostFleetsFleetIdWingsCreated</code>.
   * 201 created object
   * @alias module:model/PostFleetsFleetIdWingsCreated
   * @class
   * @param wingId {Number} The wing_id of the newly created wing
   */
  var exports = function(wingId) {
    this.wingId = wingId;
  };

  /**
   * Constructs a <code>PostFleetsFleetIdWingsCreated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostFleetsFleetIdWingsCreated} obj Optional instance to populate.
   * @return {module:model/PostFleetsFleetIdWingsCreated} The populated <code>PostFleetsFleetIdWingsCreated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wing_id'))
        obj.wingId = ApiClient.convertToType(data['wing_id'], 'Number');
    }
    return obj;
  }

  /**
   * The wing_id of the newly created wing
   * @member {Number} wingId
   */
  exports.prototype.wingId = undefined;


  return exports;

}));
