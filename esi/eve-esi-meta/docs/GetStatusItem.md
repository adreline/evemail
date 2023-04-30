# EsiMetaSpec.GetStatusItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **String** | ESI Endpoint cluster advertising this route | 
**method** | **String** | Swagger defined method | 
**route** | **String** | Swagger defined route, not including version prefix | 
**status** | **String** | Vague route status. Green is good, yellow is degraded, meaning slow or potentially dropping requests. Red means most requests are not succeeding and/or are very slow (5s+) on average. | 
**tags** | **[String]** | Swagger tags applicable to this route | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `green` (value: `"green"`)

* `yellow` (value: `"yellow"`)

* `red` (value: `"red"`)




