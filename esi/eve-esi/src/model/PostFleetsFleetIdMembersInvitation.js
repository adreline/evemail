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
    root.EveSwaggerInterface.PostFleetsFleetIdMembersInvitation = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PostFleetsFleetIdMembersInvitation model module.
   * @module model/PostFleetsFleetIdMembersInvitation
   * @version 1.17
   */

  /**
   * Constructs a new <code>PostFleetsFleetIdMembersInvitation</code>.
   * invitation object
   * @alias module:model/PostFleetsFleetIdMembersInvitation
   * @class
   * @param characterId {Number} The character you want to invite
   * @param role {module:model/PostFleetsFleetIdMembersInvitation.RoleEnum} If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions.
   */
  var exports = function(characterId, role) {
    this.characterId = characterId;
    this.role = role;
  };

  /**
   * Constructs a <code>PostFleetsFleetIdMembersInvitation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostFleetsFleetIdMembersInvitation} obj Optional instance to populate.
   * @return {module:model/PostFleetsFleetIdMembersInvitation} The populated <code>PostFleetsFleetIdMembersInvitation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('character_id'))
        obj.characterId = ApiClient.convertToType(data['character_id'], 'Number');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('squad_id'))
        obj.squadId = ApiClient.convertToType(data['squad_id'], 'Number');
      if (data.hasOwnProperty('wing_id'))
        obj.wingId = ApiClient.convertToType(data['wing_id'], 'Number');
    }
    return obj;
  }

  /**
   * The character you want to invite
   * @member {Number} characterId
   */
  exports.prototype.characterId = undefined;

  /**
   * If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions.
   * @member {module:model/PostFleetsFleetIdMembersInvitation.RoleEnum} role
   */
  exports.prototype.role = undefined;

  /**
   * squad_id integer
   * @member {Number} squadId
   */
  exports.prototype.squadId = undefined;

  /**
   * wing_id integer
   * @member {Number} wingId
   */
  exports.prototype.wingId = undefined;



  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "fleet_commander"
     * @const
     */
    fleetCommander: "fleet_commander",

    /**
     * value: "wing_commander"
     * @const
     */
    wingCommander: "wing_commander",

    /**
     * value: "squad_commander"
     * @const
     */
    squadCommander: "squad_commander",

    /**
     * value: "squad_member"
     * @const
     */
    squadMember: "squad_member"
  };

  return exports;

}));
