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
    describe('GetUniverseSystemsSystemIdPlanet', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetUniverseSystemsSystemIdPlanet();
      });

      it('should create an instance of GetUniverseSystemsSystemIdPlanet', function() {
        // TODO: update the code to test GetUniverseSystemsSystemIdPlanet
        expect(instance).to.be.a(EveSwaggerInterface.GetUniverseSystemsSystemIdPlanet);
      });

      it('should have the property asteroidBelts (base name: "asteroid_belts")', function() {
        // TODO: update the code to test the property asteroidBelts
        expect(instance).to.have.property('asteroidBelts');
        // expect(instance.asteroidBelts).to.be(expectedValueLiteral);
      });

      it('should have the property moons (base name: "moons")', function() {
        // TODO: update the code to test the property moons
        expect(instance).to.have.property('moons');
        // expect(instance.moons).to.be(expectedValueLiteral);
      });

      it('should have the property planetId (base name: "planet_id")', function() {
        // TODO: update the code to test the property planetId
        expect(instance).to.have.property('planetId');
        // expect(instance.planetId).to.be(expectedValueLiteral);
      });

    });
  });

}));
