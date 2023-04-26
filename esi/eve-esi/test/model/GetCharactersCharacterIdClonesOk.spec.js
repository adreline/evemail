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
    describe('GetCharactersCharacterIdClonesOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdClonesOk();
      });

      it('should create an instance of GetCharactersCharacterIdClonesOk', function() {
        // TODO: update the code to test GetCharactersCharacterIdClonesOk
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdClonesOk);
      });

      it('should have the property homeLocation (base name: "home_location")', function() {
        // TODO: update the code to test the property homeLocation
        expect(instance).to.have.property('homeLocation');
        // expect(instance.homeLocation).to.be(expectedValueLiteral);
      });

      it('should have the property jumpClones (base name: "jump_clones")', function() {
        // TODO: update the code to test the property jumpClones
        expect(instance).to.have.property('jumpClones');
        // expect(instance.jumpClones).to.be(expectedValueLiteral);
      });

      it('should have the property lastCloneJumpDate (base name: "last_clone_jump_date")', function() {
        // TODO: update the code to test the property lastCloneJumpDate
        expect(instance).to.have.property('lastCloneJumpDate');
        // expect(instance.lastCloneJumpDate).to.be(expectedValueLiteral);
      });

      it('should have the property lastStationChangeDate (base name: "last_station_change_date")', function() {
        // TODO: update the code to test the property lastStationChangeDate
        expect(instance).to.have.property('lastStationChangeDate');
        // expect(instance.lastStationChangeDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
