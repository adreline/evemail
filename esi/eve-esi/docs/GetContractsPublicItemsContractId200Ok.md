# EveSwaggerInterface.GetContractsPublicItemsContractId200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isBlueprintCopy** | **Boolean** | is_blueprint_copy boolean | [optional] 
**isIncluded** | **Boolean** | true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract | 
**itemId** | **Number** | Unique ID for the item being sold. Not present if item is being requested by contract rather than sold with contract | [optional] 
**materialEfficiency** | **Number** | Material Efficiency Level of the blueprint | [optional] 
**quantity** | **Number** | Number of items in the stack | 
**recordId** | **Number** | Unique ID for the item, used by the contract system | 
**runs** | **Number** | Number of runs remaining if the blueprint is a copy, -1 if it is an original | [optional] 
**timeEfficiency** | **Number** | Time Efficiency Level of the blueprint | [optional] 
**typeId** | **Number** | Type ID for item | 


