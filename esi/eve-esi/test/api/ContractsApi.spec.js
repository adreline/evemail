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
    instance = new EveSwaggerInterface.ContractsApi();
  });

  describe('(package)', function() {
    describe('ContractsApi', function() {
      describe('getCharactersCharacterIdContracts', function() {
        it('should call getCharactersCharacterIdContracts successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdContracts call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCharactersCharacterIdContracts(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok);
              expect(data.acceptorId).to.be.a('number');
              expect(data.acceptorId).to.be(0);
              expect(data.assigneeId).to.be.a('number');
              expect(data.assigneeId).to.be(0);
              expect(data.availability).to.be.a('string');
              expect(data.availability).to.be("public");
              expect(data.buyout).to.be.a('number');
              expect(data.buyout).to.be(0.0);
              expect(data.collateral).to.be.a('number');
              expect(data.collateral).to.be(0.0);
              expect(data.contractId).to.be.a('number');
              expect(data.contractId).to.be(0);
              expect(data.dateAccepted).to.be.a(Date);
              expect(data.dateAccepted).to.be(new Date());
              expect(data.dateCompleted).to.be.a(Date);
              expect(data.dateCompleted).to.be(new Date());
              expect(data.dateExpired).to.be.a(Date);
              expect(data.dateExpired).to.be(new Date());
              expect(data.dateIssued).to.be.a(Date);
              expect(data.dateIssued).to.be(new Date());
              expect(data.daysToComplete).to.be.a('number');
              expect(data.daysToComplete).to.be(0);
              expect(data.endLocationId).to.be.a('number');
              expect(data.endLocationId).to.be("0");
              expect(data.forCorporation).to.be.a('boolean');
              expect(data.forCorporation).to.be(false);
              expect(data.issuerCorporationId).to.be.a('number');
              expect(data.issuerCorporationId).to.be(0);
              expect(data.issuerId).to.be.a('number');
              expect(data.issuerId).to.be(0);
              expect(data.price).to.be.a('number');
              expect(data.price).to.be(0.0);
              expect(data.reward).to.be.a('number');
              expect(data.reward).to.be(0.0);
              expect(data.startLocationId).to.be.a('number');
              expect(data.startLocationId).to.be("0");
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("outstanding");
              expect(data.title).to.be.a('string');
              expect(data.title).to.be("");
              expect(data.type).to.be.a('string');
              expect(data.type).to.be("unknown");
              expect(data.volume).to.be.a('number');
              expect(data.volume).to.be(0.0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdContractsContractIdBids', function() {
        it('should call getCharactersCharacterIdContractsContractIdBids successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdContractsContractIdBids call and complete the assertions
          /*
          var characterId = 56;
          var contractId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdContractsContractIdBids(characterId, contractId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdBids200Ok);
              expect(data.amount).to.be.a('number');
              expect(data.amount).to.be(0.0);
              expect(data.bidId).to.be.a('number');
              expect(data.bidId).to.be(0);
              expect(data.bidderId).to.be.a('number');
              expect(data.bidderId).to.be(0);
              expect(data.dateBid).to.be.a(Date);
              expect(data.dateBid).to.be(new Date());
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdContractsContractIdItems', function() {
        it('should call getCharactersCharacterIdContractsContractIdItems successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdContractsContractIdItems call and complete the assertions
          /*
          var characterId = 56;
          var contractId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdContractsContractIdItems(characterId, contractId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok);
              expect(data.isIncluded).to.be.a('boolean');
              expect(data.isIncluded).to.be(false);
              expect(data.isSingleton).to.be.a('boolean');
              expect(data.isSingleton).to.be(false);
              expect(data.quantity).to.be.a('number');
              expect(data.quantity).to.be(0);
              expect(data.rawQuantity).to.be.a('number');
              expect(data.rawQuantity).to.be(0);
              expect(data.recordId).to.be.a('number');
              expect(data.recordId).to.be("0");
              expect(data.typeId).to.be.a('number');
              expect(data.typeId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getContractsPublicBidsContractId', function() {
        it('should call getContractsPublicBidsContractId successfully', function(done) {
          // TODO: uncomment, update parameter values for getContractsPublicBidsContractId call and complete the assertions
          /*
          var contractId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;

          instance.getContractsPublicBidsContractId(contractId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetContractsPublicBidsContractId200Ok);
              expect(data.amount).to.be.a('number');
              expect(data.amount).to.be(0.0);
              expect(data.bidId).to.be.a('number');
              expect(data.bidId).to.be(0);
              expect(data.dateBid).to.be.a(Date);
              expect(data.dateBid).to.be(new Date());
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getContractsPublicItemsContractId', function() {
        it('should call getContractsPublicItemsContractId successfully', function(done) {
          // TODO: uncomment, update parameter values for getContractsPublicItemsContractId call and complete the assertions
          /*
          var contractId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;

          instance.getContractsPublicItemsContractId(contractId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetContractsPublicItemsContractId200Ok);
              expect(data.isBlueprintCopy).to.be.a('boolean');
              expect(data.isBlueprintCopy).to.be(false);
              expect(data.isIncluded).to.be.a('boolean');
              expect(data.isIncluded).to.be(false);
              expect(data.itemId).to.be.a('number');
              expect(data.itemId).to.be("0");
              expect(data.materialEfficiency).to.be.a('number');
              expect(data.materialEfficiency).to.be(0);
              expect(data.quantity).to.be.a('number');
              expect(data.quantity).to.be(0);
              expect(data.recordId).to.be.a('number');
              expect(data.recordId).to.be("0");
              expect(data.runs).to.be.a('number');
              expect(data.runs).to.be(0);
              expect(data.timeEfficiency).to.be.a('number');
              expect(data.timeEfficiency).to.be(0);
              expect(data.typeId).to.be.a('number');
              expect(data.typeId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getContractsPublicRegionId', function() {
        it('should call getContractsPublicRegionId successfully', function(done) {
          // TODO: uncomment, update parameter values for getContractsPublicRegionId call and complete the assertions
          /*
          var regionId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;

          instance.getContractsPublicRegionId(regionId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetContractsPublicRegionId200Ok);
              expect(data.buyout).to.be.a('number');
              expect(data.buyout).to.be(0.0);
              expect(data.collateral).to.be.a('number');
              expect(data.collateral).to.be(0.0);
              expect(data.contractId).to.be.a('number');
              expect(data.contractId).to.be(0);
              expect(data.dateExpired).to.be.a(Date);
              expect(data.dateExpired).to.be(new Date());
              expect(data.dateIssued).to.be.a(Date);
              expect(data.dateIssued).to.be(new Date());
              expect(data.daysToComplete).to.be.a('number');
              expect(data.daysToComplete).to.be(0);
              expect(data.endLocationId).to.be.a('number');
              expect(data.endLocationId).to.be("0");
              expect(data.forCorporation).to.be.a('boolean');
              expect(data.forCorporation).to.be(false);
              expect(data.issuerCorporationId).to.be.a('number');
              expect(data.issuerCorporationId).to.be(0);
              expect(data.issuerId).to.be.a('number');
              expect(data.issuerId).to.be(0);
              expect(data.price).to.be.a('number');
              expect(data.price).to.be(0.0);
              expect(data.reward).to.be.a('number');
              expect(data.reward).to.be(0.0);
              expect(data.startLocationId).to.be.a('number');
              expect(data.startLocationId).to.be("0");
              expect(data.title).to.be.a('string');
              expect(data.title).to.be("");
              expect(data.type).to.be.a('string');
              expect(data.type).to.be("unknown");
              expect(data.volume).to.be.a('number');
              expect(data.volume).to.be(0.0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationsCorporationIdContracts', function() {
        it('should call getCorporationsCorporationIdContracts successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationsCorporationIdContracts call and complete the assertions
          /*
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationsCorporationIdContracts(corporationId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdContracts200Ok);
              expect(data.acceptorId).to.be.a('number');
              expect(data.acceptorId).to.be(0);
              expect(data.assigneeId).to.be.a('number');
              expect(data.assigneeId).to.be(0);
              expect(data.availability).to.be.a('string');
              expect(data.availability).to.be("public");
              expect(data.buyout).to.be.a('number');
              expect(data.buyout).to.be(0.0);
              expect(data.collateral).to.be.a('number');
              expect(data.collateral).to.be(0.0);
              expect(data.contractId).to.be.a('number');
              expect(data.contractId).to.be(0);
              expect(data.dateAccepted).to.be.a(Date);
              expect(data.dateAccepted).to.be(new Date());
              expect(data.dateCompleted).to.be.a(Date);
              expect(data.dateCompleted).to.be(new Date());
              expect(data.dateExpired).to.be.a(Date);
              expect(data.dateExpired).to.be(new Date());
              expect(data.dateIssued).to.be.a(Date);
              expect(data.dateIssued).to.be(new Date());
              expect(data.daysToComplete).to.be.a('number');
              expect(data.daysToComplete).to.be(0);
              expect(data.endLocationId).to.be.a('number');
              expect(data.endLocationId).to.be("0");
              expect(data.forCorporation).to.be.a('boolean');
              expect(data.forCorporation).to.be(false);
              expect(data.issuerCorporationId).to.be.a('number');
              expect(data.issuerCorporationId).to.be(0);
              expect(data.issuerId).to.be.a('number');
              expect(data.issuerId).to.be(0);
              expect(data.price).to.be.a('number');
              expect(data.price).to.be(0.0);
              expect(data.reward).to.be.a('number');
              expect(data.reward).to.be(0.0);
              expect(data.startLocationId).to.be.a('number');
              expect(data.startLocationId).to.be("0");
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("outstanding");
              expect(data.title).to.be.a('string');
              expect(data.title).to.be("");
              expect(data.type).to.be.a('string');
              expect(data.type).to.be("unknown");
              expect(data.volume).to.be.a('number');
              expect(data.volume).to.be(0.0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationsCorporationIdContractsContractIdBids', function() {
        it('should call getCorporationsCorporationIdContractsContractIdBids successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationsCorporationIdContractsContractIdBids call and complete the assertions
          /*
          var contractId = 56;
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationsCorporationIdContractsContractIdBids(contractId, corporationId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdContractsContractIdBids200Ok);
              expect(data.amount).to.be.a('number');
              expect(data.amount).to.be(0.0);
              expect(data.bidId).to.be.a('number');
              expect(data.bidId).to.be(0);
              expect(data.bidderId).to.be.a('number');
              expect(data.bidderId).to.be(0);
              expect(data.dateBid).to.be.a(Date);
              expect(data.dateBid).to.be(new Date());
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationsCorporationIdContractsContractIdItems', function() {
        it('should call getCorporationsCorporationIdContractsContractIdItems successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationsCorporationIdContractsContractIdItems call and complete the assertions
          /*
          var contractId = 56;
          var corporationId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCorporationsCorporationIdContractsContractIdItems(contractId, corporationId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdContractsContractIdItems200Ok);
              expect(data.isIncluded).to.be.a('boolean');
              expect(data.isIncluded).to.be(false);
              expect(data.isSingleton).to.be.a('boolean');
              expect(data.isSingleton).to.be(false);
              expect(data.quantity).to.be.a('number');
              expect(data.quantity).to.be(0);
              expect(data.rawQuantity).to.be.a('number');
              expect(data.rawQuantity).to.be(0);
              expect(data.recordId).to.be.a('number');
              expect(data.recordId).to.be("0");
              expect(data.typeId).to.be.a('number');
              expect(data.typeId).to.be(0);
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
