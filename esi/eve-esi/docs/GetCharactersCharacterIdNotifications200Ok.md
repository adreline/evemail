# EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isRead** | **Boolean** | is_read boolean | [optional] 
**notificationId** | **Number** | notification_id integer | 
**senderId** | **Number** | sender_id integer | 
**senderType** | **String** | sender_type string | 
**text** | **String** | text string | [optional] 
**timestamp** | **Date** | timestamp string | 
**type** | **String** | type string | 


<a name="SenderTypeEnum"></a>
## Enum: SenderTypeEnum


* `character` (value: `"character"`)

* `corporation` (value: `"corporation"`)

* `alliance` (value: `"alliance"`)

* `faction` (value: `"faction"`)

* `other` (value: `"other"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `acceptedAlly` (value: `"AcceptedAlly"`)

* `acceptedSurrender` (value: `"AcceptedSurrender"`)

* `agentRetiredTrigravian` (value: `"AgentRetiredTrigravian"`)

* `allAnchoringMsg` (value: `"AllAnchoringMsg"`)

* `allMaintenanceBillMsg` (value: `"AllMaintenanceBillMsg"`)

* `allStrucInvulnerableMsg` (value: `"AllStrucInvulnerableMsg"`)

* `allStructVulnerableMsg` (value: `"AllStructVulnerableMsg"`)

* `allWarCorpJoinedAllianceMsg` (value: `"AllWarCorpJoinedAllianceMsg"`)

* `allWarDeclaredMsg` (value: `"AllWarDeclaredMsg"`)

* `allWarInvalidatedMsg` (value: `"AllWarInvalidatedMsg"`)

* `allWarRetractedMsg` (value: `"AllWarRetractedMsg"`)

* `allWarSurrenderMsg` (value: `"AllWarSurrenderMsg"`)

* `allianceCapitalChanged` (value: `"AllianceCapitalChanged"`)

* `allianceWarDeclaredV2` (value: `"AllianceWarDeclaredV2"`)

* `allyContractCancelled` (value: `"AllyContractCancelled"`)

* `allyJoinedWarAggressorMsg` (value: `"AllyJoinedWarAggressorMsg"`)

* `allyJoinedWarAllyMsg` (value: `"AllyJoinedWarAllyMsg"`)

* `allyJoinedWarDefenderMsg` (value: `"AllyJoinedWarDefenderMsg"`)

* `battlePunishFriendlyFire` (value: `"BattlePunishFriendlyFire"`)

* `billOutOfMoneyMsg` (value: `"BillOutOfMoneyMsg"`)

* `billPaidCorpAllMsg` (value: `"BillPaidCorpAllMsg"`)

* `bountyClaimMsg` (value: `"BountyClaimMsg"`)

* `bountyESSShared` (value: `"BountyESSShared"`)

* `bountyESSTaken` (value: `"BountyESSTaken"`)

* `bountyPlacedAlliance` (value: `"BountyPlacedAlliance"`)

* `bountyPlacedChar` (value: `"BountyPlacedChar"`)

* `bountyPlacedCorp` (value: `"BountyPlacedCorp"`)

* `bountyYourBountyClaimed` (value: `"BountyYourBountyClaimed"`)

* `buddyConnectContactAdd` (value: `"BuddyConnectContactAdd"`)

* `charAppAcceptMsg` (value: `"CharAppAcceptMsg"`)

* `charAppRejectMsg` (value: `"CharAppRejectMsg"`)

* `charAppWithdrawMsg` (value: `"CharAppWithdrawMsg"`)

* `charLeftCorpMsg` (value: `"CharLeftCorpMsg"`)

* `charMedalMsg` (value: `"CharMedalMsg"`)

* `charTerminationMsg` (value: `"CharTerminationMsg"`)

* `cloneActivationMsg` (value: `"CloneActivationMsg"`)

* `cloneActivationMsg2` (value: `"CloneActivationMsg2"`)

* `cloneMovedMsg` (value: `"CloneMovedMsg"`)

* `cloneRevokedMsg1` (value: `"CloneRevokedMsg1"`)

* `cloneRevokedMsg2` (value: `"CloneRevokedMsg2"`)

* `combatOperationFinished` (value: `"CombatOperationFinished"`)

* `contactAdd` (value: `"ContactAdd"`)

* `contactEdit` (value: `"ContactEdit"`)

* `containerPasswordMsg` (value: `"ContainerPasswordMsg"`)

* `contractRegionChangedToPochven` (value: `"ContractRegionChangedToPochven"`)

* `corpAllBillMsg` (value: `"CorpAllBillMsg"`)

* `corpAppAcceptMsg` (value: `"CorpAppAcceptMsg"`)

* `corpAppInvitedMsg` (value: `"CorpAppInvitedMsg"`)

* `corpAppNewMsg` (value: `"CorpAppNewMsg"`)

* `corpAppRejectCustomMsg` (value: `"CorpAppRejectCustomMsg"`)

* `corpAppRejectMsg` (value: `"CorpAppRejectMsg"`)

* `corpBecameWarEligible` (value: `"CorpBecameWarEligible"`)

* `corpDividendMsg` (value: `"CorpDividendMsg"`)

* `corpFriendlyFireDisableTimerCompleted` (value: `"CorpFriendlyFireDisableTimerCompleted"`)

* `corpFriendlyFireDisableTimerStarted` (value: `"CorpFriendlyFireDisableTimerStarted"`)

* `corpFriendlyFireEnableTimerCompleted` (value: `"CorpFriendlyFireEnableTimerCompleted"`)

* `corpFriendlyFireEnableTimerStarted` (value: `"CorpFriendlyFireEnableTimerStarted"`)

* `corpKicked` (value: `"CorpKicked"`)

* `corpLiquidationMsg` (value: `"CorpLiquidationMsg"`)

* `corpNewCEOMsg` (value: `"CorpNewCEOMsg"`)

* `corpNewsMsg` (value: `"CorpNewsMsg"`)

* `corpNoLongerWarEligible` (value: `"CorpNoLongerWarEligible"`)

* `corpOfficeExpirationMsg` (value: `"CorpOfficeExpirationMsg"`)

* `corpStructLostMsg` (value: `"CorpStructLostMsg"`)

* `corpTaxChangeMsg` (value: `"CorpTaxChangeMsg"`)

* `corpVoteCEORevokedMsg` (value: `"CorpVoteCEORevokedMsg"`)

* `corpVoteMsg` (value: `"CorpVoteMsg"`)

* `corpWarDeclaredMsg` (value: `"CorpWarDeclaredMsg"`)

* `corpWarDeclaredV2` (value: `"CorpWarDeclaredV2"`)

* `corpWarFightingLegalMsg` (value: `"CorpWarFightingLegalMsg"`)

* `corpWarInvalidatedMsg` (value: `"CorpWarInvalidatedMsg"`)

* `corpWarRetractedMsg` (value: `"CorpWarRetractedMsg"`)

* `corpWarSurrenderMsg` (value: `"CorpWarSurrenderMsg"`)

* `customsMsg` (value: `"CustomsMsg"`)

* `declareWar` (value: `"DeclareWar"`)

* `districtAttacked` (value: `"DistrictAttacked"`)

* `dustAppAcceptedMsg` (value: `"DustAppAcceptedMsg"`)

* `eSSMainBankLink` (value: `"ESSMainBankLink"`)

* `entosisCaptureStarted` (value: `"EntosisCaptureStarted"`)

* `expertSystemExpired` (value: `"ExpertSystemExpired"`)

* `expertSystemExpiryImminent` (value: `"ExpertSystemExpiryImminent"`)

* `fWAllianceKickMsg` (value: `"FWAllianceKickMsg"`)

* `fWAllianceWarningMsg` (value: `"FWAllianceWarningMsg"`)

* `fWCharKickMsg` (value: `"FWCharKickMsg"`)

* `fWCharRankGainMsg` (value: `"FWCharRankGainMsg"`)

* `fWCharRankLossMsg` (value: `"FWCharRankLossMsg"`)

* `fWCharWarningMsg` (value: `"FWCharWarningMsg"`)

* `fWCorpJoinMsg` (value: `"FWCorpJoinMsg"`)

* `fWCorpKickMsg` (value: `"FWCorpKickMsg"`)

* `fWCorpLeaveMsg` (value: `"FWCorpLeaveMsg"`)

* `fWCorpWarningMsg` (value: `"FWCorpWarningMsg"`)

* `facWarCorpJoinRequestMsg` (value: `"FacWarCorpJoinRequestMsg"`)

* `facWarCorpJoinWithdrawMsg` (value: `"FacWarCorpJoinWithdrawMsg"`)

* `facWarCorpLeaveRequestMsg` (value: `"FacWarCorpLeaveRequestMsg"`)

* `facWarCorpLeaveWithdrawMsg` (value: `"FacWarCorpLeaveWithdrawMsg"`)

* `facWarLPDisqualifiedEvent` (value: `"FacWarLPDisqualifiedEvent"`)

* `facWarLPDisqualifiedKill` (value: `"FacWarLPDisqualifiedKill"`)

* `facWarLPPayoutEvent` (value: `"FacWarLPPayoutEvent"`)

* `facWarLPPayoutKill` (value: `"FacWarLPPayoutKill"`)

* `gameTimeAdded` (value: `"GameTimeAdded"`)

* `gameTimeReceived` (value: `"GameTimeReceived"`)

* `gameTimeSent` (value: `"GameTimeSent"`)

* `giftReceived` (value: `"GiftReceived"`)

* `iHubDestroyedByBillFailure` (value: `"IHubDestroyedByBillFailure"`)

* `incursionCompletedMsg` (value: `"IncursionCompletedMsg"`)

* `industryOperationFinished` (value: `"IndustryOperationFinished"`)

* `industryTeamAuctionLost` (value: `"IndustryTeamAuctionLost"`)

* `industryTeamAuctionWon` (value: `"IndustryTeamAuctionWon"`)

* `infrastructureHubBillAboutToExpire` (value: `"InfrastructureHubBillAboutToExpire"`)

* `insuranceExpirationMsg` (value: `"InsuranceExpirationMsg"`)

* `insuranceFirstShipMsg` (value: `"InsuranceFirstShipMsg"`)

* `insuranceInvalidatedMsg` (value: `"InsuranceInvalidatedMsg"`)

* `insuranceIssuedMsg` (value: `"InsuranceIssuedMsg"`)

* `insurancePayoutMsg` (value: `"InsurancePayoutMsg"`)

* `invasionCompletedMsg` (value: `"InvasionCompletedMsg"`)

* `invasionSystemLogin` (value: `"InvasionSystemLogin"`)

* `invasionSystemStart` (value: `"InvasionSystemStart"`)

* `jumpCloneDeletedMsg1` (value: `"JumpCloneDeletedMsg1"`)

* `jumpCloneDeletedMsg2` (value: `"JumpCloneDeletedMsg2"`)

* `killReportFinalBlow` (value: `"KillReportFinalBlow"`)

* `killReportVictim` (value: `"KillReportVictim"`)

* `killRightAvailable` (value: `"KillRightAvailable"`)

* `killRightAvailableOpen` (value: `"KillRightAvailableOpen"`)

* `killRightEarned` (value: `"KillRightEarned"`)

* `killRightUnavailable` (value: `"KillRightUnavailable"`)

* `killRightUnavailableOpen` (value: `"KillRightUnavailableOpen"`)

* `killRightUsed` (value: `"KillRightUsed"`)

* `locateCharMsg` (value: `"LocateCharMsg"`)

* `madeWarMutual` (value: `"MadeWarMutual"`)

* `mercOfferRetractedMsg` (value: `"MercOfferRetractedMsg"`)

* `mercOfferedNegotiationMsg` (value: `"MercOfferedNegotiationMsg"`)

* `missionCanceledTriglavian` (value: `"MissionCanceledTriglavian"`)

* `missionOfferExpirationMsg` (value: `"MissionOfferExpirationMsg"`)

* `missionTimeoutMsg` (value: `"MissionTimeoutMsg"`)

* `moonminingAutomaticFracture` (value: `"MoonminingAutomaticFracture"`)

* `moonminingExtractionCancelled` (value: `"MoonminingExtractionCancelled"`)

* `moonminingExtractionFinished` (value: `"MoonminingExtractionFinished"`)

* `moonminingExtractionStarted` (value: `"MoonminingExtractionStarted"`)

* `moonminingLaserFired` (value: `"MoonminingLaserFired"`)

* `mutualWarExpired` (value: `"MutualWarExpired"`)

* `mutualWarInviteAccepted` (value: `"MutualWarInviteAccepted"`)

* `mutualWarInviteRejected` (value: `"MutualWarInviteRejected"`)

* `mutualWarInviteSent` (value: `"MutualWarInviteSent"`)

* `nPCStandingsGained` (value: `"NPCStandingsGained"`)

* `nPCStandingsLost` (value: `"NPCStandingsLost"`)

* `offerToAllyRetracted` (value: `"OfferToAllyRetracted"`)

* `offeredSurrender` (value: `"OfferedSurrender"`)

* `offeredToAlly` (value: `"OfferedToAlly"`)

* `officeLeaseCanceledInsufficientStandings` (value: `"OfficeLeaseCanceledInsufficientStandings"`)

* `oldLscMessages` (value: `"OldLscMessages"`)

* `operationFinished` (value: `"OperationFinished"`)

* `orbitalAttacked` (value: `"OrbitalAttacked"`)

* `orbitalReinforced` (value: `"OrbitalReinforced"`)

* `ownershipTransferred` (value: `"OwnershipTransferred"`)

* `raffleCreated` (value: `"RaffleCreated"`)

* `raffleExpired` (value: `"RaffleExpired"`)

* `raffleFinished` (value: `"RaffleFinished"`)

* `reimbursementMsg` (value: `"ReimbursementMsg"`)

* `researchMissionAvailableMsg` (value: `"ResearchMissionAvailableMsg"`)

* `retractsWar` (value: `"RetractsWar"`)

* `seasonalChallengeCompleted` (value: `"SeasonalChallengeCompleted"`)

* `sovAllClaimAquiredMsg` (value: `"SovAllClaimAquiredMsg"`)

* `sovAllClaimLostMsg` (value: `"SovAllClaimLostMsg"`)

* `sovCommandNodeEventStarted` (value: `"SovCommandNodeEventStarted"`)

* `sovCorpBillLateMsg` (value: `"SovCorpBillLateMsg"`)

* `sovCorpClaimFailMsg` (value: `"SovCorpClaimFailMsg"`)

* `sovDisruptorMsg` (value: `"SovDisruptorMsg"`)

* `sovStationEnteredFreeport` (value: `"SovStationEnteredFreeport"`)

* `sovStructureDestroyed` (value: `"SovStructureDestroyed"`)

* `sovStructureReinforced` (value: `"SovStructureReinforced"`)

* `sovStructureSelfDestructCancel` (value: `"SovStructureSelfDestructCancel"`)

* `sovStructureSelfDestructFinished` (value: `"SovStructureSelfDestructFinished"`)

* `sovStructureSelfDestructRequested` (value: `"SovStructureSelfDestructRequested"`)

* `sovereigntyIHDamageMsg` (value: `"SovereigntyIHDamageMsg"`)

* `sovereigntySBUDamageMsg` (value: `"SovereigntySBUDamageMsg"`)

* `sovereigntyTCUDamageMsg` (value: `"SovereigntyTCUDamageMsg"`)

* `stationAggressionMsg1` (value: `"StationAggressionMsg1"`)

* `stationAggressionMsg2` (value: `"StationAggressionMsg2"`)

* `stationConquerMsg` (value: `"StationConquerMsg"`)

* `stationServiceDisabled` (value: `"StationServiceDisabled"`)

* `stationServiceEnabled` (value: `"StationServiceEnabled"`)

* `stationStateChangeMsg` (value: `"StationStateChangeMsg"`)

* `storyLineMissionAvailableMsg` (value: `"StoryLineMissionAvailableMsg"`)

* `structureAnchoring` (value: `"StructureAnchoring"`)

* `structureCourierContractChanged` (value: `"StructureCourierContractChanged"`)

* `structureDestroyed` (value: `"StructureDestroyed"`)

* `structureFuelAlert` (value: `"StructureFuelAlert"`)

* `structureImpendingAbandonmentAssetsAtRisk` (value: `"StructureImpendingAbandonmentAssetsAtRisk"`)

* `structureItemsDelivered` (value: `"StructureItemsDelivered"`)

* `structureItemsMovedToSafety` (value: `"StructureItemsMovedToSafety"`)

* `structureLostArmor` (value: `"StructureLostArmor"`)

* `structureLostShields` (value: `"StructureLostShields"`)

* `structureOnline` (value: `"StructureOnline"`)

* `structureServicesOffline` (value: `"StructureServicesOffline"`)

* `structureUnanchoring` (value: `"StructureUnanchoring"`)

* `structureUnderAttack` (value: `"StructureUnderAttack"`)

* `structureWentHighPower` (value: `"StructureWentHighPower"`)

* `structureWentLowPower` (value: `"StructureWentLowPower"`)

* `structuresJobsCancelled` (value: `"StructuresJobsCancelled"`)

* `structuresJobsPaused` (value: `"StructuresJobsPaused"`)

* `structuresReinforcementChanged` (value: `"StructuresReinforcementChanged"`)

* `towerAlertMsg` (value: `"TowerAlertMsg"`)

* `towerResourceAlertMsg` (value: `"TowerResourceAlertMsg"`)

* `transactionReversalMsg` (value: `"TransactionReversalMsg"`)

* `tutorialMsg` (value: `"TutorialMsg"`)

* `warAdopted_` (value: `"WarAdopted "`)

* `warAllyInherited` (value: `"WarAllyInherited"`)

* `warAllyOfferDeclinedMsg` (value: `"WarAllyOfferDeclinedMsg"`)

* `warConcordInvalidates` (value: `"WarConcordInvalidates"`)

* `warDeclared` (value: `"WarDeclared"`)

* `warEndedHqSecurityDrop` (value: `"WarEndedHqSecurityDrop"`)

* `warHQRemovedFromSpace` (value: `"WarHQRemovedFromSpace"`)

* `warInherited` (value: `"WarInherited"`)

* `warInvalid` (value: `"WarInvalid"`)

* `warRetracted` (value: `"WarRetracted"`)

* `warRetractedByConcord` (value: `"WarRetractedByConcord"`)

* `warSurrenderDeclinedMsg` (value: `"WarSurrenderDeclinedMsg"`)

* `warSurrenderOfferMsg` (value: `"WarSurrenderOfferMsg"`)




