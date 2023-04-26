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
    root.EveSwaggerInterface.GetOpportunitiesTasksTaskIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetOpportunitiesTasksTaskIdOk model module.
   * @module model/GetOpportunitiesTasksTaskIdOk
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetOpportunitiesTasksTaskIdOk</code>.
   * 200 ok object
   * @alias module:model/GetOpportunitiesTasksTaskIdOk
   * @class
   * @param description {String} description string
   * @param name {String} name string
   * @param notification {String} notification string
   * @param taskId {Number} task_id integer
   */
  var exports = function(description, name, notification, taskId) {
    this.description = description;
    this.name = name;
    this.notification = notification;
    this.taskId = taskId;
  };

  /**
   * Constructs a <code>GetOpportunitiesTasksTaskIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetOpportunitiesTasksTaskIdOk} obj Optional instance to populate.
   * @return {module:model/GetOpportunitiesTasksTaskIdOk} The populated <code>GetOpportunitiesTasksTaskIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('notification'))
        obj.notification = ApiClient.convertToType(data['notification'], 'String');
      if (data.hasOwnProperty('task_id'))
        obj.taskId = ApiClient.convertToType(data['task_id'], 'Number');
    }
    return obj;
  }

  /**
   * description string
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * notification string
   * @member {String} notification
   */
  exports.prototype.notification = undefined;

  /**
   * task_id integer
   * @member {Number} taskId
   */
  exports.prototype.taskId = undefined;


  return exports;

}));
