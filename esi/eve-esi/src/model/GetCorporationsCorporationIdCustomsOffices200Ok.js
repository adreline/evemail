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
    root.EveSwaggerInterface.GetCorporationsCorporationIdCustomsOffices200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdCustomsOffices200Ok model module.
   * @module model/GetCorporationsCorporationIdCustomsOffices200Ok
   * @version 1.17
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdCustomsOffices200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdCustomsOffices200Ok
   * @class
   * @param allowAccessWithStandings {Boolean} standing_level and any standing related tax rate only present when this is true
   * @param allowAllianceAccess {Boolean} allow_alliance_access boolean
   * @param officeId {Number} unique ID of this customs office
   * @param reinforceExitEnd {Number} reinforce_exit_end integer
   * @param reinforceExitStart {Number} Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack
   * @param systemId {Number} ID of the solar system this customs office is located in
   */
  var exports = function(allowAccessWithStandings, allowAllianceAccess, officeId, reinforceExitEnd, reinforceExitStart, systemId) {
    this.allowAccessWithStandings = allowAccessWithStandings;
    this.allowAllianceAccess = allowAllianceAccess;
    this.officeId = officeId;
    this.reinforceExitEnd = reinforceExitEnd;
    this.reinforceExitStart = reinforceExitStart;
    this.systemId = systemId;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdCustomsOffices200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdCustomsOffices200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdCustomsOffices200Ok} The populated <code>GetCorporationsCorporationIdCustomsOffices200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alliance_tax_rate'))
        obj.allianceTaxRate = ApiClient.convertToType(data['alliance_tax_rate'], 'Number');
      if (data.hasOwnProperty('allow_access_with_standings'))
        obj.allowAccessWithStandings = ApiClient.convertToType(data['allow_access_with_standings'], 'Boolean');
      if (data.hasOwnProperty('allow_alliance_access'))
        obj.allowAllianceAccess = ApiClient.convertToType(data['allow_alliance_access'], 'Boolean');
      if (data.hasOwnProperty('bad_standing_tax_rate'))
        obj.badStandingTaxRate = ApiClient.convertToType(data['bad_standing_tax_rate'], 'Number');
      if (data.hasOwnProperty('corporation_tax_rate'))
        obj.corporationTaxRate = ApiClient.convertToType(data['corporation_tax_rate'], 'Number');
      if (data.hasOwnProperty('excellent_standing_tax_rate'))
        obj.excellentStandingTaxRate = ApiClient.convertToType(data['excellent_standing_tax_rate'], 'Number');
      if (data.hasOwnProperty('good_standing_tax_rate'))
        obj.goodStandingTaxRate = ApiClient.convertToType(data['good_standing_tax_rate'], 'Number');
      if (data.hasOwnProperty('neutral_standing_tax_rate'))
        obj.neutralStandingTaxRate = ApiClient.convertToType(data['neutral_standing_tax_rate'], 'Number');
      if (data.hasOwnProperty('office_id'))
        obj.officeId = ApiClient.convertToType(data['office_id'], 'Number');
      if (data.hasOwnProperty('reinforce_exit_end'))
        obj.reinforceExitEnd = ApiClient.convertToType(data['reinforce_exit_end'], 'Number');
      if (data.hasOwnProperty('reinforce_exit_start'))
        obj.reinforceExitStart = ApiClient.convertToType(data['reinforce_exit_start'], 'Number');
      if (data.hasOwnProperty('standing_level'))
        obj.standingLevel = ApiClient.convertToType(data['standing_level'], 'String');
      if (data.hasOwnProperty('system_id'))
        obj.systemId = ApiClient.convertToType(data['system_id'], 'Number');
      if (data.hasOwnProperty('terrible_standing_tax_rate'))
        obj.terribleStandingTaxRate = ApiClient.convertToType(data['terrible_standing_tax_rate'], 'Number');
    }
    return obj;
  }

  /**
   * Only present if alliance access is allowed
   * @member {Number} allianceTaxRate
   */
  exports.prototype.allianceTaxRate = undefined;

  /**
   * standing_level and any standing related tax rate only present when this is true
   * @member {Boolean} allowAccessWithStandings
   */
  exports.prototype.allowAccessWithStandings = undefined;

  /**
   * allow_alliance_access boolean
   * @member {Boolean} allowAllianceAccess
   */
  exports.prototype.allowAllianceAccess = undefined;

  /**
   * bad_standing_tax_rate number
   * @member {Number} badStandingTaxRate
   */
  exports.prototype.badStandingTaxRate = undefined;

  /**
   * corporation_tax_rate number
   * @member {Number} corporationTaxRate
   */
  exports.prototype.corporationTaxRate = undefined;

  /**
   * Tax rate for entities with excellent level of standing, only present if this level is allowed, same for all other standing related tax rates
   * @member {Number} excellentStandingTaxRate
   */
  exports.prototype.excellentStandingTaxRate = undefined;

  /**
   * good_standing_tax_rate number
   * @member {Number} goodStandingTaxRate
   */
  exports.prototype.goodStandingTaxRate = undefined;

  /**
   * neutral_standing_tax_rate number
   * @member {Number} neutralStandingTaxRate
   */
  exports.prototype.neutralStandingTaxRate = undefined;

  /**
   * unique ID of this customs office
   * @member {Number} officeId
   */
  exports.prototype.officeId = undefined;

  /**
   * reinforce_exit_end integer
   * @member {Number} reinforceExitEnd
   */
  exports.prototype.reinforceExitEnd = undefined;

  /**
   * Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack
   * @member {Number} reinforceExitStart
   */
  exports.prototype.reinforceExitStart = undefined;

  /**
   * Access is allowed only for entities with this level of standing or better
   * @member {module:model/GetCorporationsCorporationIdCustomsOffices200Ok.StandingLevelEnum} standingLevel
   */
  exports.prototype.standingLevel = undefined;

  /**
   * ID of the solar system this customs office is located in
   * @member {Number} systemId
   */
  exports.prototype.systemId = undefined;

  /**
   * terrible_standing_tax_rate number
   * @member {Number} terribleStandingTaxRate
   */
  exports.prototype.terribleStandingTaxRate = undefined;



  /**
   * Allowed values for the <code>standingLevel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StandingLevelEnum = {
    /**
     * value: "bad"
     * @const
     */
    bad: "bad",

    /**
     * value: "excellent"
     * @const
     */
    excellent: "excellent",

    /**
     * value: "good"
     * @const
     */
    good: "good",

    /**
     * value: "neutral"
     * @const
     */
    neutral: "neutral",

    /**
     * value: "terrible"
     * @const
     */
    terrible: "terrible"
  };

  return exports;

}));
