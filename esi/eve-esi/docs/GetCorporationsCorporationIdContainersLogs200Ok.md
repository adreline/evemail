# EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | action string | 
**characterId** | **Number** | ID of the character who performed the action. | 
**containerId** | **Number** | ID of the container | 
**containerTypeId** | **Number** | Type ID of the container | 
**locationFlag** | **String** | location_flag string | 
**locationId** | **Number** | location_id integer | 
**loggedAt** | **Date** | Timestamp when this log was created | 
**newConfigBitmask** | **Number** | new_config_bitmask integer | [optional] 
**oldConfigBitmask** | **Number** | old_config_bitmask integer | [optional] 
**passwordType** | **String** | Type of password set if action is of type SetPassword or EnterPassword | [optional] 
**quantity** | **Number** | Quantity of the item being acted upon | [optional] 
**typeId** | **Number** | Type ID of the item being acted upon | [optional] 


<a name="ActionEnum"></a>
## Enum: ActionEnum


* `add` (value: `"add"`)

* `assemble` (value: `"assemble"`)

* `configure` (value: `"configure"`)

* `enterPassword` (value: `"enter_password"`)

* `lock` (value: `"lock"`)

* `move` (value: `"move"`)

* `repackage` (value: `"repackage"`)

* `setName` (value: `"set_name"`)

* `setPassword` (value: `"set_password"`)

* `unlock` (value: `"unlock"`)




<a name="LocationFlagEnum"></a>
## Enum: LocationFlagEnum


* `assetSafety` (value: `"AssetSafety"`)

* `autoFit` (value: `"AutoFit"`)

* `bonus` (value: `"Bonus"`)

* `booster` (value: `"Booster"`)

* `boosterBay` (value: `"BoosterBay"`)

* `capsule` (value: `"Capsule"`)

* `cargo` (value: `"Cargo"`)

* `corpDeliveries` (value: `"CorpDeliveries"`)

* `corpSAG1` (value: `"CorpSAG1"`)

* `corpSAG2` (value: `"CorpSAG2"`)

* `corpSAG3` (value: `"CorpSAG3"`)

* `corpSAG4` (value: `"CorpSAG4"`)

* `corpSAG5` (value: `"CorpSAG5"`)

* `corpSAG6` (value: `"CorpSAG6"`)

* `corpSAG7` (value: `"CorpSAG7"`)

* `crateLoot` (value: `"CrateLoot"`)

* `deliveries` (value: `"Deliveries"`)

* `droneBay` (value: `"DroneBay"`)

* `dustBattle` (value: `"DustBattle"`)

* `dustDatabank` (value: `"DustDatabank"`)

* `fighterBay` (value: `"FighterBay"`)

* `fighterTube0` (value: `"FighterTube0"`)

* `fighterTube1` (value: `"FighterTube1"`)

* `fighterTube2` (value: `"FighterTube2"`)

* `fighterTube3` (value: `"FighterTube3"`)

* `fighterTube4` (value: `"FighterTube4"`)

* `fleetHangar` (value: `"FleetHangar"`)

* `frigateEscapeBay` (value: `"FrigateEscapeBay"`)

* `hangar` (value: `"Hangar"`)

* `hangarAll` (value: `"HangarAll"`)

* `hiSlot0` (value: `"HiSlot0"`)

* `hiSlot1` (value: `"HiSlot1"`)

* `hiSlot2` (value: `"HiSlot2"`)

* `hiSlot3` (value: `"HiSlot3"`)

* `hiSlot4` (value: `"HiSlot4"`)

* `hiSlot5` (value: `"HiSlot5"`)

* `hiSlot6` (value: `"HiSlot6"`)

* `hiSlot7` (value: `"HiSlot7"`)

* `hiddenModifiers` (value: `"HiddenModifiers"`)

* `implant` (value: `"Implant"`)

* `impounded` (value: `"Impounded"`)

* `junkyardReprocessed` (value: `"JunkyardReprocessed"`)

* `junkyardTrashed` (value: `"JunkyardTrashed"`)

* `loSlot0` (value: `"LoSlot0"`)

* `loSlot1` (value: `"LoSlot1"`)

* `loSlot2` (value: `"LoSlot2"`)

* `loSlot3` (value: `"LoSlot3"`)

* `loSlot4` (value: `"LoSlot4"`)

* `loSlot5` (value: `"LoSlot5"`)

* `loSlot6` (value: `"LoSlot6"`)

* `loSlot7` (value: `"LoSlot7"`)

* `locked` (value: `"Locked"`)

* `medSlot0` (value: `"MedSlot0"`)

* `medSlot1` (value: `"MedSlot1"`)

* `medSlot2` (value: `"MedSlot2"`)

* `medSlot3` (value: `"MedSlot3"`)

* `medSlot4` (value: `"MedSlot4"`)

* `medSlot5` (value: `"MedSlot5"`)

* `medSlot6` (value: `"MedSlot6"`)

* `medSlot7` (value: `"MedSlot7"`)

* `officeFolder` (value: `"OfficeFolder"`)

* `pilot` (value: `"Pilot"`)

* `planetSurface` (value: `"PlanetSurface"`)

* `quafeBay` (value: `"QuafeBay"`)

* `quantumCoreRoom` (value: `"QuantumCoreRoom"`)

* `reward` (value: `"Reward"`)

* `rigSlot0` (value: `"RigSlot0"`)

* `rigSlot1` (value: `"RigSlot1"`)

* `rigSlot2` (value: `"RigSlot2"`)

* `rigSlot3` (value: `"RigSlot3"`)

* `rigSlot4` (value: `"RigSlot4"`)

* `rigSlot5` (value: `"RigSlot5"`)

* `rigSlot6` (value: `"RigSlot6"`)

* `rigSlot7` (value: `"RigSlot7"`)

* `secondaryStorage` (value: `"SecondaryStorage"`)

* `serviceSlot0` (value: `"ServiceSlot0"`)

* `serviceSlot1` (value: `"ServiceSlot1"`)

* `serviceSlot2` (value: `"ServiceSlot2"`)

* `serviceSlot3` (value: `"ServiceSlot3"`)

* `serviceSlot4` (value: `"ServiceSlot4"`)

* `serviceSlot5` (value: `"ServiceSlot5"`)

* `serviceSlot6` (value: `"ServiceSlot6"`)

* `serviceSlot7` (value: `"ServiceSlot7"`)

* `shipHangar` (value: `"ShipHangar"`)

* `shipOffline` (value: `"ShipOffline"`)

* `skill` (value: `"Skill"`)

* `skillInTraining` (value: `"SkillInTraining"`)

* `specializedAmmoHold` (value: `"SpecializedAmmoHold"`)

* `specializedCommandCenterHold` (value: `"SpecializedCommandCenterHold"`)

* `specializedFuelBay` (value: `"SpecializedFuelBay"`)

* `specializedGasHold` (value: `"SpecializedGasHold"`)

* `specializedIndustrialShipHold` (value: `"SpecializedIndustrialShipHold"`)

* `specializedLargeShipHold` (value: `"SpecializedLargeShipHold"`)

* `specializedMaterialBay` (value: `"SpecializedMaterialBay"`)

* `specializedMediumShipHold` (value: `"SpecializedMediumShipHold"`)

* `specializedMineralHold` (value: `"SpecializedMineralHold"`)

* `specializedOreHold` (value: `"SpecializedOreHold"`)

* `specializedPlanetaryCommoditiesHold` (value: `"SpecializedPlanetaryCommoditiesHold"`)

* `specializedSalvageHold` (value: `"SpecializedSalvageHold"`)

* `specializedShipHold` (value: `"SpecializedShipHold"`)

* `specializedSmallShipHold` (value: `"SpecializedSmallShipHold"`)

* `structureActive` (value: `"StructureActive"`)

* `structureFuel` (value: `"StructureFuel"`)

* `structureInactive` (value: `"StructureInactive"`)

* `structureOffline` (value: `"StructureOffline"`)

* `subSystemBay` (value: `"SubSystemBay"`)

* `subSystemSlot0` (value: `"SubSystemSlot0"`)

* `subSystemSlot1` (value: `"SubSystemSlot1"`)

* `subSystemSlot2` (value: `"SubSystemSlot2"`)

* `subSystemSlot3` (value: `"SubSystemSlot3"`)

* `subSystemSlot4` (value: `"SubSystemSlot4"`)

* `subSystemSlot5` (value: `"SubSystemSlot5"`)

* `subSystemSlot6` (value: `"SubSystemSlot6"`)

* `subSystemSlot7` (value: `"SubSystemSlot7"`)

* `unlocked` (value: `"Unlocked"`)

* `wallet` (value: `"Wallet"`)

* `wardrobe` (value: `"Wardrobe"`)




<a name="PasswordTypeEnum"></a>
## Enum: PasswordTypeEnum


* `config` (value: `"config"`)

* `general` (value: `"general"`)




