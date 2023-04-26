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
    describe('GetUniverseFactions200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetUniverseFactions200Ok();
      });

      it('should create an instance of GetUniverseFactions200Ok', function() {
        // TODO: update the code to test GetUniverseFactions200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetUniverseFactions200Ok);
      });

      it('should have the property corporationId (base name: "corporation_id")', function() {
        // TODO: update the code to test the property corporationId
        expect(instance).to.have.property('corporationId');
        // expect(instance.corporationId).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property factionId (base name: "faction_id")', function() {
        // TODO: update the code to test the property factionId
        expect(instance).to.have.property('factionId');
        // expect(instance.factionId).to.be(expectedValueLiteral);
      });

      it('should have the property isUnique (base name: "is_unique")', function() {
        // TODO: update the code to test the property isUnique
        expect(instance).to.have.property('isUnique');
        // expect(instance.isUnique).to.be(expectedValueLiteral);
      });

      it('should have the property militiaCorporationId (base name: "militia_corporation_id")', function() {
        // TODO: update the code to test the property militiaCorporationId
        expect(instance).to.have.property('militiaCorporationId');
        // expect(instance.militiaCorporationId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property sizeFactor (base name: "size_factor")', function() {
        // TODO: update the code to test the property sizeFactor
        expect(instance).to.have.property('sizeFactor');
        // expect(instance.sizeFactor).to.be(expectedValueLiteral);
      });

      it('should have the property solarSystemId (base name: "solar_system_id")', function() {
        // TODO: update the code to test the property solarSystemId
        expect(instance).to.have.property('solarSystemId');
        // expect(instance.solarSystemId).to.be(expectedValueLiteral);
      });

      it('should have the property stationCount (base name: "station_count")', function() {
        // TODO: update the code to test the property stationCount
        expect(instance).to.have.property('stationCount');
        // expect(instance.stationCount).to.be(expectedValueLiteral);
      });

      it('should have the property stationSystemCount (base name: "station_system_count")', function() {
        // TODO: update the code to test the property stationSystemCount
        expect(instance).to.have.property('stationSystemCount');
        // expect(instance.stationSystemCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
