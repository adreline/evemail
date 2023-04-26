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
    describe('GetCharactersCharacterIdPlanetsPlanetIdOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdOk();
      });

      it('should create an instance of GetCharactersCharacterIdPlanetsPlanetIdOk', function() {
        // TODO: update the code to test GetCharactersCharacterIdPlanetsPlanetIdOk
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdOk);
      });

      it('should have the property links (base name: "links")', function() {
        // TODO: update the code to test the property links
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });

      it('should have the property pins (base name: "pins")', function() {
        // TODO: update the code to test the property pins
        expect(instance).to.have.property('pins');
        // expect(instance.pins).to.be(expectedValueLiteral);
      });

      it('should have the property routes (base name: "routes")', function() {
        // TODO: update the code to test the property routes
        expect(instance).to.have.property('routes');
        // expect(instance.routes).to.be(expectedValueLiteral);
      });

    });
  });

}));
