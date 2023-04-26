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
    root.EveSwaggerInterface.GetCharactersCharacterIdMailMailIdRecipient = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdMailMailIdRecipient model module.
   * @module model/GetCharactersCharacterIdMailMailIdRecipient
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMailMailIdRecipient</code>.
   * recipient object
   * @alias module:model/GetCharactersCharacterIdMailMailIdRecipient
   * @class
   * @param recipientId {Number} recipient_id integer
   * @param recipientType {module:model/GetCharactersCharacterIdMailMailIdRecipient.RecipientTypeEnum} recipient_type string
   */
  var exports = function(recipientId, recipientType) {
    this.recipientId = recipientId;
    this.recipientType = recipientType;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMailMailIdRecipient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMailMailIdRecipient} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMailMailIdRecipient} The populated <code>GetCharactersCharacterIdMailMailIdRecipient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('recipient_id'))
        obj.recipientId = ApiClient.convertToType(data['recipient_id'], 'Number');
      if (data.hasOwnProperty('recipient_type'))
        obj.recipientType = ApiClient.convertToType(data['recipient_type'], 'String');
    }
    return obj;
  }

  /**
   * recipient_id integer
   * @member {Number} recipientId
   */
  exports.prototype.recipientId = undefined;

  /**
   * recipient_type string
   * @member {module:model/GetCharactersCharacterIdMailMailIdRecipient.RecipientTypeEnum} recipientType
   */
  exports.prototype.recipientType = undefined;



  /**
   * Allowed values for the <code>recipientType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecipientTypeEnum = {
    /**
     * value: "alliance"
     * @const
     */
    alliance: "alliance",

    /**
     * value: "character"
     * @const
     */
    character: "character",

    /**
     * value: "corporation"
     * @const
     */
    corporation: "corporation",

    /**
     * value: "mailing_list"
     * @const
     */
    mailingList: "mailing_list"
  };

  return exports;

}));
