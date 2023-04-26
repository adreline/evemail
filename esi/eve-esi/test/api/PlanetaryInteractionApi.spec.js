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
    instance = new EveSwaggerInterface.PlanetaryInteractionApi();
  });

  describe('(package)', function() {
    describe('PlanetaryInteractionApi', function() {
      describe('getCharactersCharacterIdPlanets', function() {
        it('should call getCharactersCharacterIdPlanets successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdPlanets call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdPlanets(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok);
              expect(data.lastUpdate).to.be.a(Date);
              expect(data.lastUpdate).to.be(new Date());
              expect(data.numPins).to.be.a('number');
              expect(data.numPins).to.be(0);
              expect(data.ownerId).to.be.a('number');
              expect(data.ownerId).to.be(0);
              expect(data.planetId).to.be.a('number');
              expect(data.planetId).to.be(0);
              expect(data.planetType).to.be.a('string');
              expect(data.planetType).to.be("temperate");
              expect(data.solarSystemId).to.be.a('number');
              expect(data.solarSystemId).to.be(0);
              expect(data.upgradeLevel).to.be.a('number');
              expect(data.upgradeLevel).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdPlanetsPlanetId', function() {
        it('should call getCharactersCharacterIdPlanetsPlanetId successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdPlanetsPlanetId call and complete the assertions
          /*
          var characterId = 56;
          var planetId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.getCharactersCharacterIdPlanetsPlanetId(characterId, planetId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdOk);
            {
              let dataCtr = data.links;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdLink);
                expect(data.destinationPinId).to.be.a('number');
                expect(data.destinationPinId).to.be("0");
                expect(data.linkLevel).to.be.a('number');
                expect(data.linkLevel).to.be(0);
                expect(data.sourcePinId).to.be.a('number');
                expect(data.sourcePinId).to.be("0");

                      }
            }
            {
              let dataCtr = data.pins;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin);
                {
                  let dataCtr = data.contents;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdContent);
                    expect(data.amount).to.be.a('number');
                    expect(data.amount).to.be("0");
                    expect(data.typeId).to.be.a('number');
                    expect(data.typeId).to.be(0);
    
                          }
                }
                expect(data.expiryTime).to.be.a(Date);
                expect(data.expiryTime).to.be(new Date());
                expect(data.extractorDetails).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails);
                      expect(data.extractorDetails.cycleTime).to.be.a('number');
                  expect(data.extractorDetails.cycleTime).to.be(0);
                  expect(data.extractorDetails.headRadius).to.be.a('number');
                  expect(data.extractorDetails.headRadius).to.be(0.0);
                  {
                    let dataCtr = data.extractorDetails.heads;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdHead);
                      expect(data.headId).to.be.a('number');
                      expect(data.headId).to.be(0);
                      expect(data.latitude).to.be.a('number');
                      expect(data.latitude).to.be(0.0);
                      expect(data.longitude).to.be.a('number');
                      expect(data.longitude).to.be(0.0);
      
                            }
                  }
                  expect(data.extractorDetails.productTypeId).to.be.a('number');
                  expect(data.extractorDetails.productTypeId).to.be(0);
                  expect(data.extractorDetails.qtyPerCycle).to.be.a('number');
                  expect(data.extractorDetails.qtyPerCycle).to.be(0);
                expect(data.factoryDetails).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdFactoryDetails);
                      expect(data.factoryDetails.schematicId).to.be.a('number');
                  expect(data.factoryDetails.schematicId).to.be(0);
                expect(data.installTime).to.be.a(Date);
                expect(data.installTime).to.be(new Date());
                expect(data.lastCycleStart).to.be.a(Date);
                expect(data.lastCycleStart).to.be(new Date());
                expect(data.latitude).to.be.a('number');
                expect(data.latitude).to.be(0.0);
                expect(data.longitude).to.be.a('number');
                expect(data.longitude).to.be(0.0);
                expect(data.pinId).to.be.a('number');
                expect(data.pinId).to.be("0");
                expect(data.schematicId).to.be.a('number');
                expect(data.schematicId).to.be(0);
                expect(data.typeId).to.be.a('number');
                expect(data.typeId).to.be(0);

                      }
            }
            {
              let dataCtr = data.routes;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdRoute);
                expect(data.contentTypeId).to.be.a('number');
                expect(data.contentTypeId).to.be(0);
                expect(data.destinationPinId).to.be.a('number');
                expect(data.destinationPinId).to.be("0");
                expect(data.quantity).to.be.a('number');
                expect(data.quantity).to.be(0.0);
                expect(data.routeId).to.be.a('number');
                expect(data.routeId).to.be("0");
                expect(data.sourcePinId).to.be.a('number');
                expect(data.sourcePinId).to.be("0");
                {
                  let dataCtr = data.waypoints;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be("0");
                  }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationsCorporationIdCustomsOffices', function() {
        it('should call getCorporationsCorporationIdCustomsOffices successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationsCorporationIdCustomsOffices call and complete the assertions
          /*
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationsCorporationIdCustomsOffices(corporationId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdCustomsOffices200Ok);
              expect(data.allianceTaxRate).to.be.a('number');
              expect(data.allianceTaxRate).to.be(0.0);
              expect(data.allowAccessWithStandings).to.be.a('boolean');
              expect(data.allowAccessWithStandings).to.be(false);
              expect(data.allowAllianceAccess).to.be.a('boolean');
              expect(data.allowAllianceAccess).to.be(false);
              expect(data.badStandingTaxRate).to.be.a('number');
              expect(data.badStandingTaxRate).to.be(0.0);
              expect(data.corporationTaxRate).to.be.a('number');
              expect(data.corporationTaxRate).to.be(0.0);
              expect(data.excellentStandingTaxRate).to.be.a('number');
              expect(data.excellentStandingTaxRate).to.be(0.0);
              expect(data.goodStandingTaxRate).to.be.a('number');
              expect(data.goodStandingTaxRate).to.be(0.0);
              expect(data.neutralStandingTaxRate).to.be.a('number');
              expect(data.neutralStandingTaxRate).to.be(0.0);
              expect(data.officeId).to.be.a('number');
              expect(data.officeId).to.be("0");
              expect(data.reinforceExitEnd).to.be.a('number');
              expect(data.reinforceExitEnd).to.be(0);
              expect(data.reinforceExitStart).to.be.a('number');
              expect(data.reinforceExitStart).to.be(0);
              expect(data.standingLevel).to.be.a('string');
              expect(data.standingLevel).to.be("bad");
              expect(data.systemId).to.be.a('number');
              expect(data.systemId).to.be(0);
              expect(data.terribleStandingTaxRate).to.be.a('number');
              expect(data.terribleStandingTaxRate).to.be(0.0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUniverseSchematicsSchematicId', function() {
        it('should call getUniverseSchematicsSchematicId successfully', function(done) {
          // TODO: uncomment, update parameter values for getUniverseSchematicsSchematicId call and complete the assertions
          /*
          var schematicId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getUniverseSchematicsSchematicId(schematicId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetUniverseSchematicsSchematicIdOk);
            expect(data.cycleTime).to.be.a('number');
            expect(data.cycleTime).to.be(0);
            expect(data.schematicName).to.be.a('string');
            expect(data.schematicName).to.be("");

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
