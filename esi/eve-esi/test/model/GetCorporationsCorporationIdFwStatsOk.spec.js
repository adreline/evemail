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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetCorporationsCorporationIdFwStatsOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdFwStatsOk();
      });

      it('should create an instance of GetCorporationsCorporationIdFwStatsOk', function() {
        // TODO: update the code to test GetCorporationsCorporationIdFwStatsOk
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdFwStatsOk);
      });

      it('should have the property enlistedOn (base name: "enlisted_on")', function() {
        // TODO: update the code to test the property enlistedOn
        expect(instance).to.have.property('enlistedOn');
        // expect(instance.enlistedOn).to.be(expectedValueLiteral);
      });

      it('should have the property factionId (base name: "faction_id")', function() {
        // TODO: update the code to test the property factionId
        expect(instance).to.have.property('factionId');
        // expect(instance.factionId).to.be(expectedValueLiteral);
      });

      it('should have the property kills (base name: "kills")', function() {
        // TODO: update the code to test the property kills
        expect(instance).to.have.property('kills');
        // expect(instance.kills).to.be(expectedValueLiteral);
      });

      it('should have the property pilots (base name: "pilots")', function() {
        // TODO: update the code to test the property pilots
        expect(instance).to.have.property('pilots');
        // expect(instance.pilots).to.be(expectedValueLiteral);
      });

      it('should have the property victoryPoints (base name: "victory_points")', function() {
        // TODO: update the code to test the property victoryPoints
        expect(instance).to.have.property('victoryPoints');
        // expect(instance.victoryPoints).to.be(expectedValueLiteral);
      });

    });
  });

}));
