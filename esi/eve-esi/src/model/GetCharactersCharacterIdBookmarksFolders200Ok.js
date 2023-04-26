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
    root.EveSwaggerInterface.GetCharactersCharacterIdBookmarksFolders200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdBookmarksFolders200Ok model module.
   * @module model/GetCharactersCharacterIdBookmarksFolders200Ok
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdBookmarksFolders200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdBookmarksFolders200Ok
   * @class
   * @param folderId {Number} folder_id integer
   * @param name {String} name string
   */
  var exports = function(folderId, name) {
    this.folderId = folderId;
    this.name = name;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdBookmarksFolders200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdBookmarksFolders200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdBookmarksFolders200Ok} The populated <code>GetCharactersCharacterIdBookmarksFolders200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('folder_id'))
        obj.folderId = ApiClient.convertToType(data['folder_id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * folder_id integer
   * @member {Number} folderId
   */
  exports.prototype.folderId = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
