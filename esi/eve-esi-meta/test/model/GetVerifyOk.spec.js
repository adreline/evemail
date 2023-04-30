/*
 * ESI Meta Spec
 * ESI specs and miscellaneous routes
 *
 * OpenAPI spec version: 0.1
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
    factory(root.expect, root.EsiMetaSpec);
  }
}(this, function(expect, EsiMetaSpec) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetVerifyOk', function() {
      beforeEach(function() {
        instance = new EsiMetaSpec.GetVerifyOk();
      });

      it('should create an instance of GetVerifyOk', function() {
        // TODO: update the code to test GetVerifyOk
        expect(instance).to.be.a(EsiMetaSpec.GetVerifyOk);
      });

      it('should have the property characterID (base name: "CharacterID")', function() {
        // TODO: update the code to test the property characterID
        expect(instance).to.have.property('characterID');
        // expect(instance.characterID).to.be(expectedValueLiteral);
      });

      it('should have the property characterName (base name: "CharacterName")', function() {
        // TODO: update the code to test the property characterName
        expect(instance).to.have.property('characterName');
        // expect(instance.characterName).to.be(expectedValueLiteral);
      });

      it('should have the property characterOwnerHash (base name: "CharacterOwnerHash")', function() {
        // TODO: update the code to test the property characterOwnerHash
        expect(instance).to.have.property('characterOwnerHash');
        // expect(instance.characterOwnerHash).to.be(expectedValueLiteral);
      });

      it('should have the property expiresOn (base name: "ExpiresOn")', function() {
        // TODO: update the code to test the property expiresOn
        expect(instance).to.have.property('expiresOn');
        // expect(instance.expiresOn).to.be(expectedValueLiteral);
      });

      it('should have the property intellectualProperty (base name: "IntellectualProperty")', function() {
        // TODO: update the code to test the property intellectualProperty
        expect(instance).to.have.property('intellectualProperty');
        // expect(instance.intellectualProperty).to.be(expectedValueLiteral);
      });

      it('should have the property scopes (base name: "Scopes")', function() {
        // TODO: update the code to test the property scopes
        expect(instance).to.have.property('scopes');
        // expect(instance.scopes).to.be(expectedValueLiteral);
      });

      it('should have the property tokenType (base name: "TokenType")', function() {
        // TODO: update the code to test the property tokenType
        expect(instance).to.have.property('tokenType');
        // expect(instance.tokenType).to.be(expectedValueLiteral);
      });

    });
  });

}));
