# EveSwaggerInterface.PutFleetsFleetIdMembersMemberIdMovement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **String** | If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is moved to the `wing_commander` role, only `wing_id` should be specified. If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified. | 
**squadId** | **Number** | squad_id integer | [optional] 
**wingId** | **Number** | wing_id integer | [optional] 


<a name="RoleEnum"></a>
## Enum: RoleEnum


* `fleetCommander` (value: `"fleet_commander"`)

* `wingCommander` (value: `"wing_commander"`)

* `squadCommander` (value: `"squad_commander"`)

* `squadMember` (value: `"squad_member"`)




