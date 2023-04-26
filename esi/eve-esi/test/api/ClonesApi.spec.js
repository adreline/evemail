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

  beforeEach(function() {
    instance = new EveSwaggerInterface.ClonesApi();
  });

  describe('(package)', function() {
    describe('ClonesApi', function() {
      describe('getCharactersCharacterIdClones', function() {
        it('should call getCharactersCharacterIdClones successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdClones call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdClones(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdClonesOk);
            expect(data.homeLocation).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdClonesHomeLocation);
                  expect(data.homeLocation.locationId).to.be.a('number');
              expect(data.homeLocation.locationId).to.be("0");
              expect(data.homeLocation.locationType).to.be.a('string');
              expect(data.homeLocation.locationType).to.be("station");
            {
              let dataCtr = data.jumpClones;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdClonesJumpClone);
                {
                  let dataCtr = data.implants;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                expect(data.jumpCloneId).to.be.a('number');
                expect(data.jumpCloneId).to.be(0);
                expect(data.locationId).to.be.a('number');
                expect(data.locationId).to.be("0");
                expect(data.locationType).to.be.a('string');
                expect(data.locationType).to.be("station");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");

                      }
            }
            expect(data.lastCloneJumpDate).to.be.a(Date);
            expect(data.lastCloneJumpDate).to.be(new Date());
            expect(data.lastStationChangeDate).to.be.a(Date);
            expect(data.lastStationChangeDate).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdImplants', function() {
        it('should call getCharactersCharacterIdImplants successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdImplants call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdImplants(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a('number');
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
