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
    root.EveSwaggerInterface.GetCharactersCharacterIdMailLabelsLabel = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdMailLabelsLabel model module.
   * @module model/GetCharactersCharacterIdMailLabelsLabel
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMailLabelsLabel</code>.
   * label object
   * @alias module:model/GetCharactersCharacterIdMailLabelsLabel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMailLabelsLabel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMailLabelsLabel} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMailLabelsLabel} The populated <code>GetCharactersCharacterIdMailLabelsLabel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('label_id'))
        obj.labelId = ApiClient.convertToType(data['label_id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('unread_count'))
        obj.unreadCount = ApiClient.convertToType(data['unread_count'], 'Number');
    }
    return obj;
  }

  /**
   * color string
   * @member {module:model/GetCharactersCharacterIdMailLabelsLabel.ColorEnum} color
   * @default '#ffffff'
   */
  exports.prototype.color = '#ffffff';

  /**
   * label_id integer
   * @member {Number} labelId
   */
  exports.prototype.labelId = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * unread_count integer
   * @member {Number} unreadCount
   */
  exports.prototype.unreadCount = undefined;



  /**
   * Allowed values for the <code>color</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ColorEnum = {
    /**
     * value: "#0000fe"
     * @const
     */
    _0000fe: "#0000fe",

    /**
     * value: "#006634"
     * @const
     */
    _006634: "#006634",

    /**
     * value: "#0099ff"
     * @const
     */
    _0099ff: "#0099ff",

    /**
     * value: "#00ff33"
     * @const
     */
    _00ff33: "#00ff33",

    /**
     * value: "#01ffff"
     * @const
     */
    _01ffff: "#01ffff",

    /**
     * value: "#349800"
     * @const
     */
    _349800: "#349800",

    /**
     * value: "#660066"
     * @const
     */
    _660066: "#660066",

    /**
     * value: "#666666"
     * @const
     */
    _666666: "#666666",

    /**
     * value: "#999999"
     * @const
     */
    _999999: "#999999",

    /**
     * value: "#99ffff"
     * @const
     */
    _99ffff: "#99ffff",

    /**
     * value: "#9a0000"
     * @const
     */
    _9a0000: "#9a0000",

    /**
     * value: "#ccff9a"
     * @const
     */
    ccff9a: "#ccff9a",

    /**
     * value: "#e6e6e6"
     * @const
     */
    e6e6e6: "#e6e6e6",

    /**
     * value: "#fe0000"
     * @const
     */
    fe0000: "#fe0000",

    /**
     * value: "#ff6600"
     * @const
     */
    ff6600: "#ff6600",

    /**
     * value: "#ffff01"
     * @const
     */
    ffff01: "#ffff01",

    /**
     * value: "#ffffcd"
     * @const
     */
    ffffcd: "#ffffcd",

    /**
     * value: "#ffffff"
     * @const
     */
    ffffff: "#ffffff"
  };

  return exports;

}));
