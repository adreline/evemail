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
    instance = new EveSwaggerInterface.FleetsApi();
  });

  describe('(package)', function() {
    describe('FleetsApi', function() {
      describe('deleteFleetsFleetIdMembersMemberId', function() {
        it('should call deleteFleetsFleetIdMembersMemberId successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteFleetsFleetIdMembersMemberId call
          /*
          var fleetId = 789;
          var memberId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.deleteFleetsFleetIdMembersMemberId(fleetId, memberId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteFleetsFleetIdSquadsSquadId', function() {
        it('should call deleteFleetsFleetIdSquadsSquadId successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteFleetsFleetIdSquadsSquadId call
          /*
          var fleetId = 789;
          var squadId = 789;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.deleteFleetsFleetIdSquadsSquadId(fleetId, squadId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteFleetsFleetIdWingsWingId', function() {
        it('should call deleteFleetsFleetIdWingsWingId successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteFleetsFleetIdWingsWingId call
          /*
          var fleetId = 789;
          var wingId = 789;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.deleteFleetsFleetIdWingsWingId(fleetId, wingId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdFleet', function() {
        it('should call getCharactersCharacterIdFleet successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdFleet call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdFleet(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdFleetOk);
            expect(data.fleetId).to.be.a('number');
            expect(data.fleetId).to.be("0");
            expect(data.role).to.be.a('string');
            expect(data.role).to.be("fleet_commander");
            expect(data.squadId).to.be.a('number');
            expect(data.squadId).to.be("0");
            expect(data.wingId).to.be.a('number');
            expect(data.wingId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFleetsFleetId', function() {
        it('should call getFleetsFleetId successfully', function(done) {
          // TODO: uncomment, update parameter values for getFleetsFleetId call and complete the assertions
          /*
          var fleetId = 789;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getFleetsFleetId(fleetId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetFleetsFleetIdOk);
            expect(data.isFreeMove).to.be.a('boolean');
            expect(data.isFreeMove).to.be(false);
            expect(data.isRegistered).to.be.a('boolean');
            expect(data.isRegistered).to.be(false);
            expect(data.isVoiceEnabled).to.be.a('boolean');
            expect(data.isVoiceEnabled).to.be(false);
            expect(data.motd).to.be.a('string');
            expect(data.motd).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFleetsFleetIdMembers', function() {
        it('should call getFleetsFleetIdMembers successfully', function(done) {
          // TODO: uncomment, update parameter values for getFleetsFleetIdMembers call and complete the assertions
          /*
          var fleetId = 789;
          var opts = {};
          opts.acceptLanguage = "en";
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.language = "en";
          opts.token = "token_example";

          instance.getFleetsFleetIdMembers(fleetId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetFleetsFleetIdMembers200Ok);
              expect(data.characterId).to.be.a('number');
              expect(data.characterId).to.be(0);
              expect(data.joinTime).to.be.a(Date);
              expect(data.joinTime).to.be(new Date());
              expect(data.role).to.be.a('string');
              expect(data.role).to.be("fleet_commander");
              expect(data.roleName).to.be.a('string');
              expect(data.roleName).to.be("");
              expect(data.shipTypeId).to.be.a('number');
              expect(data.shipTypeId).to.be(0);
              expect(data.solarSystemId).to.be.a('number');
              expect(data.solarSystemId).to.be(0);
              expect(data.squadId).to.be.a('number');
              expect(data.squadId).to.be("0");
              expect(data.stationId).to.be.a('number');
              expect(data.stationId).to.be("0");
              expect(data.takesFleetWarp).to.be.a('boolean');
              expect(data.takesFleetWarp).to.be(false);
              expect(data.wingId).to.be.a('number');
              expect(data.wingId).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFleetsFleetIdWings', function() {
        it('should call getFleetsFleetIdWings successfully', function(done) {
          // TODO: uncomment, update parameter values for getFleetsFleetIdWings call and complete the assertions
          /*
          var fleetId = 789;
          var opts = {};
          opts.acceptLanguage = "en";
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.language = "en";
          opts.token = "token_example";

          instance.getFleetsFleetIdWings(fleetId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetFleetsFleetIdWings200Ok);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              {
                let dataCtr = data.squads;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetFleetsFleetIdWingsSquad);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
  
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
      describe('postFleetsFleetIdMembers', function() {
        it('should call postFleetsFleetIdMembers successfully', function(done) {
          // TODO: uncomment, update parameter values for postFleetsFleetIdMembers call
          /*
          var fleetId = 789;
          var invitation = new EveSwaggerInterface.PostFleetsFleetIdMembersInvitation();
          invitation.characterId = 0;
          invitation.role = "fleet_commander";
          invitation.squadId = "0";
          invitation.wingId = "0";
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postFleetsFleetIdMembers(fleetId, invitation, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postFleetsFleetIdWings', function() {
        it('should call postFleetsFleetIdWings successfully', function(done) {
          // TODO: uncomment, update parameter values for postFleetsFleetIdWings call and complete the assertions
          /*
          var fleetId = 789;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postFleetsFleetIdWings(fleetId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.PostFleetsFleetIdWingsCreated);
            expect(data.wingId).to.be.a('number');
            expect(data.wingId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postFleetsFleetIdWingsWingIdSquads', function() {
        it('should call postFleetsFleetIdWingsWingIdSquads successfully', function(done) {
          // TODO: uncomment, update parameter values for postFleetsFleetIdWingsWingIdSquads call and complete the assertions
          /*
          var fleetId = 789;
          var wingId = 789;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postFleetsFleetIdWingsWingIdSquads(fleetId, wingId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.PostFleetsFleetIdWingsWingIdSquadsCreated);
            expect(data.squadId).to.be.a('number');
            expect(data.squadId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putFleetsFleetId', function() {
        it('should call putFleetsFleetId successfully', function(done) {
          // TODO: uncomment, update parameter values for putFleetsFleetId call
          /*
          var fleetId = 789;
          var newSettings = new EveSwaggerInterface.PutFleetsFleetIdNewSettings();
          newSettings.isFreeMove = false;
          newSettings.motd = "";
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.putFleetsFleetId(fleetId, newSettings, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putFleetsFleetIdMembersMemberId', function() {
        it('should call putFleetsFleetIdMembersMemberId successfully', function(done) {
          // TODO: uncomment, update parameter values for putFleetsFleetIdMembersMemberId call
          /*
          var fleetId = 789;
          var memberId = 56;
          var movement = new EveSwaggerInterface.PutFleetsFleetIdMembersMemberIdMovement();
          movement.role = "fleet_commander";
          movement.squadId = "0";
          movement.wingId = "0";
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.putFleetsFleetIdMembersMemberId(fleetId, memberId, movement, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putFleetsFleetIdSquadsSquadId', function() {
        it('should call putFleetsFleetIdSquadsSquadId successfully', function(done) {
          // TODO: uncomment, update parameter values for putFleetsFleetIdSquadsSquadId call
          /*
          var fleetId = 789;
          var naming = new EveSwaggerInterface.PutFleetsFleetIdSquadsSquadIdNaming();
          naming.name = "";
          var squadId = 789;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.putFleetsFleetIdSquadsSquadId(fleetId, naming, squadId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putFleetsFleetIdWingsWingId', function() {
        it('should call putFleetsFleetIdWingsWingId successfully', function(done) {
          // TODO: uncomment, update parameter values for putFleetsFleetIdWingsWingId call
          /*
          var fleetId = 789;
          var naming = new EveSwaggerInterface.PutFleetsFleetIdWingsWingIdNaming();
          naming.name = "";
          var wingId = 789;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.putFleetsFleetIdWingsWingId(fleetId, naming, wingId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
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
