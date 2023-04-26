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
    describe('GetCorporationsCorporationIdContainersLogs200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdContainersLogs200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdContainersLogs200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok);
      });

      it('should have the property action (base name: "action")', function() {
        // TODO: update the code to test the property action
        expect(instance).to.have.property('action');
        // expect(instance.action).to.be(expectedValueLiteral);
      });

      it('should have the property characterId (base name: "character_id")', function() {
        // TODO: update the code to test the property characterId
        expect(instance).to.have.property('characterId');
        // expect(instance.characterId).to.be(expectedValueLiteral);
      });

      it('should have the property containerId (base name: "container_id")', function() {
        // TODO: update the code to test the property containerId
        expect(instance).to.have.property('containerId');
        // expect(instance.containerId).to.be(expectedValueLiteral);
      });

      it('should have the property containerTypeId (base name: "container_type_id")', function() {
        // TODO: update the code to test the property containerTypeId
        expect(instance).to.have.property('containerTypeId');
        // expect(instance.containerTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property locationFlag (base name: "location_flag")', function() {
        // TODO: update the code to test the property locationFlag
        expect(instance).to.have.property('locationFlag');
        // expect(instance.locationFlag).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "location_id")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property loggedAt (base name: "logged_at")', function() {
        // TODO: update the code to test the property loggedAt
        expect(instance).to.have.property('loggedAt');
        // expect(instance.loggedAt).to.be(expectedValueLiteral);
      });

      it('should have the property newConfigBitmask (base name: "new_config_bitmask")', function() {
        // TODO: update the code to test the property newConfigBitmask
        expect(instance).to.have.property('newConfigBitmask');
        // expect(instance.newConfigBitmask).to.be(expectedValueLiteral);
      });

      it('should have the property oldConfigBitmask (base name: "old_config_bitmask")', function() {
        // TODO: update the code to test the property oldConfigBitmask
        expect(instance).to.have.property('oldConfigBitmask');
        // expect(instance.oldConfigBitmask).to.be(expectedValueLiteral);
      });

      it('should have the property passwordType (base name: "password_type")', function() {
        // TODO: update the code to test the property passwordType
        expect(instance).to.have.property('passwordType');
        // expect(instance.passwordType).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property typeId (base name: "type_id")', function() {
        // TODO: update the code to test the property typeId
        expect(instance).to.have.property('typeId');
        // expect(instance.typeId).to.be(expectedValueLiteral);
      });

    });
  });

}));
