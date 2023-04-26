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
    describe('GetSovereigntyCampaignsParticipant', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetSovereigntyCampaignsParticipant();
      });

      it('should create an instance of GetSovereigntyCampaignsParticipant', function() {
        // TODO: update the code to test GetSovereigntyCampaignsParticipant
        expect(instance).to.be.a(EveSwaggerInterface.GetSovereigntyCampaignsParticipant);
      });

      it('should have the property allianceId (base name: "alliance_id")', function() {
        // TODO: update the code to test the property allianceId
        expect(instance).to.have.property('allianceId');
        // expect(instance.allianceId).to.be(expectedValueLiteral);
      });

      it('should have the property score (base name: "score")', function() {
        // TODO: update the code to test the property score
        expect(instance).to.have.property('score');
        // expect(instance.score).to.be(expectedValueLiteral);
      });

    });
  });

}));
