# EveSwaggerInterface.GetCharactersCharacterIdWalletJournal200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn | [optional] 
**balance** | **Number** | Wallet balance after transaction occurred | [optional] 
**contextId** | **Number** | An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id | [optional] 
**contextIdType** | **String** | The type of the given context_id if present | [optional] 
**_date** | **Date** | Date and time of transaction | 
**description** | **String** | The reason for the transaction, mirrors what is seen in the client | 
**firstPartyId** | **Number** | The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name | [optional] 
**id** | **Number** | Unique journal reference ID | 
**reason** | **String** | The user stated reason for the transaction. Only applies to some ref_types | [optional] 
**refType** | **String** | \"The transaction type for the given. transaction. Different transaction types will populate different attributes.\" | 
**secondPartyId** | **Number** | The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name | [optional] 
**tax** | **Number** | Tax amount received. Only applies to tax related transactions | [optional] 
**taxReceiverId** | **Number** | The corporation ID receiving any tax paid. Only applies to tax related transactions | [optional] 


<a name="ContextIdTypeEnum"></a>
## Enum: ContextIdTypeEnum


* `structureId` (value: `"structure_id"`)

* `stationId` (value: `"station_id"`)

* `marketTransactionId` (value: `"market_transaction_id"`)

* `characterId` (value: `"character_id"`)

* `corporationId` (value: `"corporation_id"`)

* `allianceId` (value: `"alliance_id"`)

* `eveSystem` (value: `"eve_system"`)

* `industryJobId` (value: `"industry_job_id"`)

* `contractId` (value: `"contract_id"`)

* `planetId` (value: `"planet_id"`)

* `systemId` (value: `"system_id"`)

* `typeId` (value: `"type_id"`)




<a name="RefTypeEnum"></a>
## Enum: RefTypeEnum


* `accelerationGateFee` (value: `"acceleration_gate_fee"`)

* `advertisementListingFee` (value: `"advertisement_listing_fee"`)

* `agentDonation` (value: `"agent_donation"`)

* `agentLocationServices` (value: `"agent_location_services"`)

* `agentMiscellaneous` (value: `"agent_miscellaneous"`)

* `agentMissionCollateralPaid` (value: `"agent_mission_collateral_paid"`)

* `agentMissionCollateralRefunded` (value: `"agent_mission_collateral_refunded"`)

* `agentMissionReward` (value: `"agent_mission_reward"`)

* `agentMissionRewardCorporationTax` (value: `"agent_mission_reward_corporation_tax"`)

* `agentMissionTimeBonusReward` (value: `"agent_mission_time_bonus_reward"`)

* `agentMissionTimeBonusRewardCorporationTax` (value: `"agent_mission_time_bonus_reward_corporation_tax"`)

* `agentSecurityServices` (value: `"agent_security_services"`)

* `agentServicesRendered` (value: `"agent_services_rendered"`)

* `agentsPreward` (value: `"agents_preward"`)

* `allianceMaintainanceFee` (value: `"alliance_maintainance_fee"`)

* `allianceRegistrationFee` (value: `"alliance_registration_fee"`)

* `assetSafetyRecoveryTax` (value: `"asset_safety_recovery_tax"`)

* `bounty` (value: `"bounty"`)

* `bountyPrize` (value: `"bounty_prize"`)

* `bountyPrizeCorporationTax` (value: `"bounty_prize_corporation_tax"`)

* `bountyPrizes` (value: `"bounty_prizes"`)

* `bountyReimbursement` (value: `"bounty_reimbursement"`)

* `bountySurcharge` (value: `"bounty_surcharge"`)

* `brokersFee` (value: `"brokers_fee"`)

* `cloneActivation` (value: `"clone_activation"`)

* `cloneTransfer` (value: `"clone_transfer"`)

* `contrabandFine` (value: `"contraband_fine"`)

* `contractAuctionBid` (value: `"contract_auction_bid"`)

* `contractAuctionBidCorp` (value: `"contract_auction_bid_corp"`)

* `contractAuctionBidRefund` (value: `"contract_auction_bid_refund"`)

* `contractAuctionSold` (value: `"contract_auction_sold"`)

* `contractBrokersFee` (value: `"contract_brokers_fee"`)

* `contractBrokersFeeCorp` (value: `"contract_brokers_fee_corp"`)

* `contractCollateral` (value: `"contract_collateral"`)

* `contractCollateralDepositedCorp` (value: `"contract_collateral_deposited_corp"`)

* `contractCollateralPayout` (value: `"contract_collateral_payout"`)

* `contractCollateralRefund` (value: `"contract_collateral_refund"`)

* `contractDeposit` (value: `"contract_deposit"`)

* `contractDepositCorp` (value: `"contract_deposit_corp"`)

* `contractDepositRefund` (value: `"contract_deposit_refund"`)

* `contractDepositSalesTax` (value: `"contract_deposit_sales_tax"`)

* `contractPrice` (value: `"contract_price"`)

* `contractPricePaymentCorp` (value: `"contract_price_payment_corp"`)

* `contractReversal` (value: `"contract_reversal"`)

* `contractReward` (value: `"contract_reward"`)

* `contractRewardDeposited` (value: `"contract_reward_deposited"`)

* `contractRewardDepositedCorp` (value: `"contract_reward_deposited_corp"`)

* `contractRewardRefund` (value: `"contract_reward_refund"`)

* `contractSalesTax` (value: `"contract_sales_tax"`)

* `copying` (value: `"copying"`)

* `corporateRewardPayout` (value: `"corporate_reward_payout"`)

* `corporateRewardTax` (value: `"corporate_reward_tax"`)

* `corporationAccountWithdrawal` (value: `"corporation_account_withdrawal"`)

* `corporationBulkPayment` (value: `"corporation_bulk_payment"`)

* `corporationDividendPayment` (value: `"corporation_dividend_payment"`)

* `corporationLiquidation` (value: `"corporation_liquidation"`)

* `corporationLogoChangeCost` (value: `"corporation_logo_change_cost"`)

* `corporationPayment` (value: `"corporation_payment"`)

* `corporationRegistrationFee` (value: `"corporation_registration_fee"`)

* `courierMissionEscrow` (value: `"courier_mission_escrow"`)

* `cspa` (value: `"cspa"`)

* `cspaofflinerefund` (value: `"cspaofflinerefund"`)

* `dailyChallengeReward` (value: `"daily_challenge_reward"`)

* `datacoreFee` (value: `"datacore_fee"`)

* `dnaModificationFee` (value: `"dna_modification_fee"`)

* `dockingFee` (value: `"docking_fee"`)

* `duelWagerEscrow` (value: `"duel_wager_escrow"`)

* `duelWagerPayment` (value: `"duel_wager_payment"`)

* `duelWagerRefund` (value: `"duel_wager_refund"`)

* `essEscrowTransfer` (value: `"ess_escrow_transfer"`)

* `externalTradeDelivery` (value: `"external_trade_delivery"`)

* `externalTradeFreeze` (value: `"external_trade_freeze"`)

* `externalTradeThaw` (value: `"external_trade_thaw"`)

* `factorySlotRentalFee` (value: `"factory_slot_rental_fee"`)

* `fluxPayout` (value: `"flux_payout"`)

* `fluxTax` (value: `"flux_tax"`)

* `fluxTicketRepayment` (value: `"flux_ticket_repayment"`)

* `fluxTicketSale` (value: `"flux_ticket_sale"`)

* `gmCashTransfer` (value: `"gm_cash_transfer"`)

* `industryJobTax` (value: `"industry_job_tax"`)

* `infrastructureHubMaintenance` (value: `"infrastructure_hub_maintenance"`)

* `inheritance` (value: `"inheritance"`)

* `insurance` (value: `"insurance"`)

* `itemTraderPayment` (value: `"item_trader_payment"`)

* `jumpCloneActivationFee` (value: `"jump_clone_activation_fee"`)

* `jumpCloneInstallationFee` (value: `"jump_clone_installation_fee"`)

* `killRightFee` (value: `"kill_right_fee"`)

* `lpStore` (value: `"lp_store"`)

* `manufacturing` (value: `"manufacturing"`)

* `marketEscrow` (value: `"market_escrow"`)

* `marketFinePaid` (value: `"market_fine_paid"`)

* `marketProviderTax` (value: `"market_provider_tax"`)

* `marketTransaction` (value: `"market_transaction"`)

* `medalCreation` (value: `"medal_creation"`)

* `medalIssued` (value: `"medal_issued"`)

* `milestoneRewardPayment` (value: `"milestone_reward_payment"`)

* `missionCompletion` (value: `"mission_completion"`)

* `missionCost` (value: `"mission_cost"`)

* `missionExpiration` (value: `"mission_expiration"`)

* `missionReward` (value: `"mission_reward"`)

* `officeRentalFee` (value: `"office_rental_fee"`)

* `operationBonus` (value: `"operation_bonus"`)

* `opportunityReward` (value: `"opportunity_reward"`)

* `planetaryConstruction` (value: `"planetary_construction"`)

* `planetaryExportTax` (value: `"planetary_export_tax"`)

* `planetaryImportTax` (value: `"planetary_import_tax"`)

* `playerDonation` (value: `"player_donation"`)

* `playerTrading` (value: `"player_trading"`)

* `projectDiscoveryReward` (value: `"project_discovery_reward"`)

* `projectDiscoveryTax` (value: `"project_discovery_tax"`)

* `reaction` (value: `"reaction"`)

* `redeemedIskToken` (value: `"redeemed_isk_token"`)

* `releaseOfImpoundedProperty` (value: `"release_of_impounded_property"`)

* `repairBill` (value: `"repair_bill"`)

* `reprocessingTax` (value: `"reprocessing_tax"`)

* `researchingMaterialProductivity` (value: `"researching_material_productivity"`)

* `researchingTechnology` (value: `"researching_technology"`)

* `researchingTimeProductivity` (value: `"researching_time_productivity"`)

* `resourceWarsReward` (value: `"resource_wars_reward"`)

* `reverseEngineering` (value: `"reverse_engineering"`)

* `seasonChallengeReward` (value: `"season_challenge_reward"`)

* `securityProcessingFee` (value: `"security_processing_fee"`)

* `shares` (value: `"shares"`)

* `skillPurchase` (value: `"skill_purchase"`)

* `sovereignityBill` (value: `"sovereignity_bill"`)

* `storePurchase` (value: `"store_purchase"`)

* `storePurchaseRefund` (value: `"store_purchase_refund"`)

* `structureGateJump` (value: `"structure_gate_jump"`)

* `transactionTax` (value: `"transaction_tax"`)

* `upkeepAdjustmentFee` (value: `"upkeep_adjustment_fee"`)

* `warAllyContract` (value: `"war_ally_contract"`)

* `warFee` (value: `"war_fee"`)

* `warFeeSurrender` (value: `"war_fee_surrender"`)




