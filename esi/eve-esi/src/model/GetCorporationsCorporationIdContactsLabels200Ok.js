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
    root.EveSwaggerInterface.GetCorporationsCorporationIdContactsLabels200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdContactsLabels200Ok model module.
   * @module model/GetCorporationsCorporationIdContactsLabels200Ok
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdContactsLabels200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdContactsLabels200Ok
   * @class
   * @param labelId {Number} label_id integer
   * @param labelName {String} label_name string
   */
  var exports = function(labelId, labelName) {
    this.labelId = labelId;
    this.labelName = labelName;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdContactsLabels200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdContactsLabels200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdContactsLabels200Ok} The populated <code>GetCorporationsCorporationIdContactsLabels200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('label_id'))
        obj.labelId = ApiClient.convertToType(data['label_id'], 'Number');
      if (data.hasOwnProperty('label_name'))
        obj.labelName = ApiClient.convertToType(data['label_name'], 'String');
    }
    return obj;
  }

  /**
   * label_id integer
   * @member {Number} labelId
   */
  exports.prototype.labelId = undefined;

  /**
   * label_name string
   * @member {String} labelName
   */
  exports.prototype.labelName = undefined;


  return exports;

}));
