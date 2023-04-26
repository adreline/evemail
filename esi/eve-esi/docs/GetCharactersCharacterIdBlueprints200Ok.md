# EveSwaggerInterface.GetCharactersCharacterIdBlueprints200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemId** | **Number** | Unique ID for this item. | 
**locationFlag** | **String** | Type of the location_id | 
**locationId** | **Number** | References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint. | 
**materialEfficiency** | **Number** | Material Efficiency Level of the blueprint. | 
**quantity** | **Number** | A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet). | 
**runs** | **Number** | Number of runs remaining if the blueprint is a copy, -1 if it is an original. | 
**timeEfficiency** | **Number** | Time Efficiency Level of the blueprint. | 
**typeId** | **Number** | type_id integer | 


<a name="LocationFlagEnum"></a>
## Enum: LocationFlagEnum


* `autoFit` (value: `"AutoFit"`)

* `cargo` (value: `"Cargo"`)

* `corpseBay` (value: `"CorpseBay"`)

* `droneBay` (value: `"DroneBay"`)

* `fleetHangar` (value: `"FleetHangar"`)

* `deliveries` (value: `"Deliveries"`)

* `hiddenModifiers` (value: `"HiddenModifiers"`)

* `hangar` (value: `"Hangar"`)

* `hangarAll` (value: `"HangarAll"`)

* `loSlot0` (value: `"LoSlot0"`)

* `loSlot1` (value: `"LoSlot1"`)

* `loSlot2` (value: `"LoSlot2"`)

* `loSlot3` (value: `"LoSlot3"`)

* `loSlot4` (value: `"LoSlot4"`)

* `loSlot5` (value: `"LoSlot5"`)

* `loSlot6` (value: `"LoSlot6"`)

* `loSlot7` (value: `"LoSlot7"`)

* `medSlot0` (value: `"MedSlot0"`)

* `medSlot1` (value: `"MedSlot1"`)

* `medSlot2` (value: `"MedSlot2"`)

* `medSlot3` (value: `"MedSlot3"`)

* `medSlot4` (value: `"MedSlot4"`)

* `medSlot5` (value: `"MedSlot5"`)

* `medSlot6` (value: `"MedSlot6"`)

* `medSlot7` (value: `"MedSlot7"`)

* `hiSlot0` (value: `"HiSlot0"`)

* `hiSlot1` (value: `"HiSlot1"`)

* `hiSlot2` (value: `"HiSlot2"`)

* `hiSlot3` (value: `"HiSlot3"`)

* `hiSlot4` (value: `"HiSlot4"`)

* `hiSlot5` (value: `"HiSlot5"`)

* `hiSlot6` (value: `"HiSlot6"`)

* `hiSlot7` (value: `"HiSlot7"`)

* `assetSafety` (value: `"AssetSafety"`)

* `locked` (value: `"Locked"`)

* `unlocked` (value: `"Unlocked"`)

* `implant` (value: `"Implant"`)

* `quafeBay` (value: `"QuafeBay"`)

* `rigSlot0` (value: `"RigSlot0"`)

* `rigSlot1` (value: `"RigSlot1"`)

* `rigSlot2` (value: `"RigSlot2"`)

* `rigSlot3` (value: `"RigSlot3"`)

* `rigSlot4` (value: `"RigSlot4"`)

* `rigSlot5` (value: `"RigSlot5"`)

* `rigSlot6` (value: `"RigSlot6"`)

* `rigSlot7` (value: `"RigSlot7"`)

* `shipHangar` (value: `"ShipHangar"`)

* `specializedFuelBay` (value: `"SpecializedFuelBay"`)

* `specializedOreHold` (value: `"SpecializedOreHold"`)

* `specializedGasHold` (value: `"SpecializedGasHold"`)

* `specializedMineralHold` (value: `"SpecializedMineralHold"`)

* `specializedSalvageHold` (value: `"SpecializedSalvageHold"`)

* `specializedShipHold` (value: `"SpecializedShipHold"`)

* `specializedSmallShipHold` (value: `"SpecializedSmallShipHold"`)

* `specializedMediumShipHold` (value: `"SpecializedMediumShipHold"`)

* `specializedLargeShipHold` (value: `"SpecializedLargeShipHold"`)

* `specializedIndustrialShipHold` (value: `"SpecializedIndustrialShipHold"`)

* `specializedAmmoHold` (value: `"SpecializedAmmoHold"`)

* `specializedCommandCenterHold` (value: `"SpecializedCommandCenterHold"`)

* `specializedPlanetaryCommoditiesHold` (value: `"SpecializedPlanetaryCommoditiesHold"`)

* `specializedMaterialBay` (value: `"SpecializedMaterialBay"`)

* `subSystemSlot0` (value: `"SubSystemSlot0"`)

* `subSystemSlot1` (value: `"SubSystemSlot1"`)

* `subSystemSlot2` (value: `"SubSystemSlot2"`)

* `subSystemSlot3` (value: `"SubSystemSlot3"`)

* `subSystemSlot4` (value: `"SubSystemSlot4"`)

* `subSystemSlot5` (value: `"SubSystemSlot5"`)

* `subSystemSlot6` (value: `"SubSystemSlot6"`)

* `subSystemSlot7` (value: `"SubSystemSlot7"`)

* `fighterBay` (value: `"FighterBay"`)

* `fighterTube0` (value: `"FighterTube0"`)

* `fighterTube1` (value: `"FighterTube1"`)

* `fighterTube2` (value: `"FighterTube2"`)

* `fighterTube3` (value: `"FighterTube3"`)

* `fighterTube4` (value: `"FighterTube4"`)

* `module` (value: `"Module"`)




