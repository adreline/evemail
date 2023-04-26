# EveSwaggerInterface.PostFleetsFleetIdMembersInvitation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**characterId** | **Number** | The character you want to invite | 
**role** | **String** | If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions. | 
**squadId** | **Number** | squad_id integer | [optional] 
**wingId** | **Number** | wing_id integer | [optional] 


<a name="RoleEnum"></a>
## Enum: RoleEnum


* `fleetCommander` (value: `"fleet_commander"`)

* `wingCommander` (value: `"wing_commander"`)

* `squadCommander` (value: `"squad_commander"`)

* `squadMember` (value: `"squad_member"`)




