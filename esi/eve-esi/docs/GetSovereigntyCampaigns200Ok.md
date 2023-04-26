# EveSwaggerInterface.GetSovereigntyCampaigns200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attackersScore** | **Number** | Score for all attacking parties, only present in Defense Events.  | [optional] 
**campaignId** | **Number** | Unique ID for this campaign. | 
**constellationId** | **Number** | The constellation in which the campaign will take place.  | 
**defenderId** | **Number** | Defending alliance, only present in Defense Events  | [optional] 
**defenderScore** | **Number** | Score for the defending alliance, only present in Defense Events.  | [optional] 
**eventType** | **String** | Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as \"Defense Events\", station_freeport as \"Freeport Events\".  | 
**participants** | [**[GetSovereigntyCampaignsParticipant]**](GetSovereigntyCampaignsParticipant.md) | Alliance participating and their respective scores, only present in Freeport Events.  | [optional] 
**solarSystemId** | **Number** | The solar system the structure is located in.  | 
**startTime** | **Date** | Time the event is scheduled to start.  | 
**structureId** | **Number** | The structure item ID that is related to this campaign.  | 


<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum


* `tcuDefense` (value: `"tcu_defense"`)

* `ihubDefense` (value: `"ihub_defense"`)

* `stationDefense` (value: `"station_defense"`)

* `stationFreeport` (value: `"station_freeport"`)




