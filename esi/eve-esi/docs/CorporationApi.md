# EveSwaggerInterface.CorporationApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCorporationsCorporationId**](CorporationApi.md#getCorporationsCorporationId) | **GET** /corporations/{corporation_id}/ | Get corporation information
[**getCorporationsCorporationIdAlliancehistory**](CorporationApi.md#getCorporationsCorporationIdAlliancehistory) | **GET** /corporations/{corporation_id}/alliancehistory/ | Get alliance history
[**getCorporationsCorporationIdBlueprints**](CorporationApi.md#getCorporationsCorporationIdBlueprints) | **GET** /corporations/{corporation_id}/blueprints/ | Get corporation blueprints
[**getCorporationsCorporationIdContainersLogs**](CorporationApi.md#getCorporationsCorporationIdContainersLogs) | **GET** /corporations/{corporation_id}/containers/logs/ | Get all corporation ALSC logs
[**getCorporationsCorporationIdDivisions**](CorporationApi.md#getCorporationsCorporationIdDivisions) | **GET** /corporations/{corporation_id}/divisions/ | Get corporation divisions
[**getCorporationsCorporationIdFacilities**](CorporationApi.md#getCorporationsCorporationIdFacilities) | **GET** /corporations/{corporation_id}/facilities/ | Get corporation facilities
[**getCorporationsCorporationIdIcons**](CorporationApi.md#getCorporationsCorporationIdIcons) | **GET** /corporations/{corporation_id}/icons/ | Get corporation icon
[**getCorporationsCorporationIdMedals**](CorporationApi.md#getCorporationsCorporationIdMedals) | **GET** /corporations/{corporation_id}/medals/ | Get corporation medals
[**getCorporationsCorporationIdMedalsIssued**](CorporationApi.md#getCorporationsCorporationIdMedalsIssued) | **GET** /corporations/{corporation_id}/medals/issued/ | Get corporation issued medals
[**getCorporationsCorporationIdMembers**](CorporationApi.md#getCorporationsCorporationIdMembers) | **GET** /corporations/{corporation_id}/members/ | Get corporation members
[**getCorporationsCorporationIdMembersLimit**](CorporationApi.md#getCorporationsCorporationIdMembersLimit) | **GET** /corporations/{corporation_id}/members/limit/ | Get corporation member limit
[**getCorporationsCorporationIdMembersTitles**](CorporationApi.md#getCorporationsCorporationIdMembersTitles) | **GET** /corporations/{corporation_id}/members/titles/ | Get corporation's members' titles
[**getCorporationsCorporationIdMembertracking**](CorporationApi.md#getCorporationsCorporationIdMembertracking) | **GET** /corporations/{corporation_id}/membertracking/ | Track corporation members
[**getCorporationsCorporationIdRoles**](CorporationApi.md#getCorporationsCorporationIdRoles) | **GET** /corporations/{corporation_id}/roles/ | Get corporation member roles
[**getCorporationsCorporationIdRolesHistory**](CorporationApi.md#getCorporationsCorporationIdRolesHistory) | **GET** /corporations/{corporation_id}/roles/history/ | Get corporation member roles history
[**getCorporationsCorporationIdShareholders**](CorporationApi.md#getCorporationsCorporationIdShareholders) | **GET** /corporations/{corporation_id}/shareholders/ | Get corporation shareholders
[**getCorporationsCorporationIdStandings**](CorporationApi.md#getCorporationsCorporationIdStandings) | **GET** /corporations/{corporation_id}/standings/ | Get corporation standings
[**getCorporationsCorporationIdStarbases**](CorporationApi.md#getCorporationsCorporationIdStarbases) | **GET** /corporations/{corporation_id}/starbases/ | Get corporation starbases (POSes)
[**getCorporationsCorporationIdStarbasesStarbaseId**](CorporationApi.md#getCorporationsCorporationIdStarbasesStarbaseId) | **GET** /corporations/{corporation_id}/starbases/{starbase_id}/ | Get starbase (POS) detail
[**getCorporationsCorporationIdStructures**](CorporationApi.md#getCorporationsCorporationIdStructures) | **GET** /corporations/{corporation_id}/structures/ | Get corporation structures
[**getCorporationsCorporationIdTitles**](CorporationApi.md#getCorporationsCorporationIdTitles) | **GET** /corporations/{corporation_id}/titles/ | Get corporation titles
[**getCorporationsNpccorps**](CorporationApi.md#getCorporationsNpccorps) | **GET** /corporations/npccorps/ | Get npc corporations


<a name="getCorporationsCorporationId"></a>
# **getCorporationsCorporationId**
> GetCorporationsCorporationIdOk getCorporationsCorporationId(corporationId, opts)

Get corporation information

Public information about a corporation  --- Alternate route: `/dev/corporations/{corporation_id}/`  Alternate route: `/v5/corporations/{corporation_id}/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationId(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetCorporationsCorporationIdOk**](GetCorporationsCorporationIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdAlliancehistory"></a>
# **getCorporationsCorporationIdAlliancehistory**
> [GetCorporationsCorporationIdAlliancehistory200Ok] getCorporationsCorporationIdAlliancehistory(corporationId, opts)

Get alliance history

Get a list of all the alliances a corporation has been a member of  --- Alternate route: `/dev/corporations/{corporation_id}/alliancehistory/`  Alternate route: `/v3/corporations/{corporation_id}/alliancehistory/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdAlliancehistory(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**[GetCorporationsCorporationIdAlliancehistory200Ok]**](GetCorporationsCorporationIdAlliancehistory200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdBlueprints"></a>
# **getCorporationsCorporationIdBlueprints**
> [GetCorporationsCorporationIdBlueprints200Ok] getCorporationsCorporationIdBlueprints(corporationId, opts)

Get corporation blueprints

Returns a list of blueprints the corporation owns  --- Alternate route: `/dev/corporations/{corporation_id}/blueprints/`  Alternate route: `/v3/corporations/{corporation_id}/blueprints/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdBlueprints(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdBlueprints200Ok]**](GetCorporationsCorporationIdBlueprints200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdContainersLogs"></a>
# **getCorporationsCorporationIdContainersLogs**
> [GetCorporationsCorporationIdContainersLogs200Ok] getCorporationsCorporationIdContainersLogs(corporationId, opts)

Get all corporation ALSC logs

Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation  --- Alternate route: `/dev/corporations/{corporation_id}/containers/logs/`  Alternate route: `/v3/corporations/{corporation_id}/containers/logs/`  --- This route is cached for up to 600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdContainersLogs(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdContainersLogs200Ok]**](GetCorporationsCorporationIdContainersLogs200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdDivisions"></a>
# **getCorporationsCorporationIdDivisions**
> GetCorporationsCorporationIdDivisionsOk getCorporationsCorporationIdDivisions(corporationId, opts)

Get corporation divisions

Return corporation hangar and wallet division names, only show if a division is not using the default name  --- Alternate route: `/dev/corporations/{corporation_id}/divisions/`  Alternate route: `/v2/corporations/{corporation_id}/divisions/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdDivisions(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**GetCorporationsCorporationIdDivisionsOk**](GetCorporationsCorporationIdDivisionsOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdFacilities"></a>
# **getCorporationsCorporationIdFacilities**
> [GetCorporationsCorporationIdFacilities200Ok] getCorporationsCorporationIdFacilities(corporationId, opts)

Get corporation facilities

Return a corporation's facilities  --- Alternate route: `/dev/corporations/{corporation_id}/facilities/`  Alternate route: `/v2/corporations/{corporation_id}/facilities/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Factory_Manager 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdFacilities(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdFacilities200Ok]**](GetCorporationsCorporationIdFacilities200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdIcons"></a>
# **getCorporationsCorporationIdIcons**
> GetCorporationsCorporationIdIconsOk getCorporationsCorporationIdIcons(corporationId, opts)

Get corporation icon

Get the icon urls for a corporation  --- Alternate route: `/dev/corporations/{corporation_id}/icons/`  Alternate route: `/v2/corporations/{corporation_id}/icons/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdIcons(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetCorporationsCorporationIdIconsOk**](GetCorporationsCorporationIdIconsOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdMedals"></a>
# **getCorporationsCorporationIdMedals**
> [GetCorporationsCorporationIdMedals200Ok] getCorporationsCorporationIdMedals(corporationId, opts)

Get corporation medals

Returns a corporation's medals  --- Alternate route: `/dev/corporations/{corporation_id}/medals/`  Alternate route: `/v2/corporations/{corporation_id}/medals/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdMedals(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdMedals200Ok]**](GetCorporationsCorporationIdMedals200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdMedalsIssued"></a>
# **getCorporationsCorporationIdMedalsIssued**
> [GetCorporationsCorporationIdMedalsIssued200Ok] getCorporationsCorporationIdMedalsIssued(corporationId, opts)

Get corporation issued medals

Returns medals issued by a corporation  --- Alternate route: `/dev/corporations/{corporation_id}/medals/issued/`  Alternate route: `/v2/corporations/{corporation_id}/medals/issued/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdMedalsIssued(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdMedalsIssued200Ok]**](GetCorporationsCorporationIdMedalsIssued200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdMembers"></a>
# **getCorporationsCorporationIdMembers**
> ['Number'] getCorporationsCorporationIdMembers(corporationId, opts)

Get corporation members

Return the current member list of a corporation, the token's character need to be a member of the corporation.  --- Alternate route: `/dev/corporations/{corporation_id}/members/`  Alternate route: `/v4/corporations/{corporation_id}/members/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdMembers(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

**['Number']**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdMembersLimit"></a>
# **getCorporationsCorporationIdMembersLimit**
> 'Number' getCorporationsCorporationIdMembersLimit(corporationId, opts)

Get corporation member limit

Return a corporation's member limit, not including CEO himself  --- Alternate route: `/dev/corporations/{corporation_id}/members/limit/`  Alternate route: `/v2/corporations/{corporation_id}/members/limit/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdMembersLimit(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

**'Number'**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdMembersTitles"></a>
# **getCorporationsCorporationIdMembersTitles**
> [GetCorporationsCorporationIdMembersTitles200Ok] getCorporationsCorporationIdMembersTitles(corporationId, opts)

Get corporation's members' titles

Returns a corporation's members' titles  --- Alternate route: `/dev/corporations/{corporation_id}/members/titles/`  Alternate route: `/v2/corporations/{corporation_id}/members/titles/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdMembersTitles(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdMembersTitles200Ok]**](GetCorporationsCorporationIdMembersTitles200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdMembertracking"></a>
# **getCorporationsCorporationIdMembertracking**
> [GetCorporationsCorporationIdMembertracking200Ok] getCorporationsCorporationIdMembertracking(corporationId, opts)

Track corporation members

Returns additional information about a corporation's members which helps tracking their activities  --- Alternate route: `/dev/corporations/{corporation_id}/membertracking/`  Alternate route: `/v2/corporations/{corporation_id}/membertracking/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdMembertracking(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdMembertracking200Ok]**](GetCorporationsCorporationIdMembertracking200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdRoles"></a>
# **getCorporationsCorporationIdRoles**
> [GetCorporationsCorporationIdRoles200Ok] getCorporationsCorporationIdRoles(corporationId, opts)

Get corporation member roles

Return the roles of all members if the character has the personnel manager role or any grantable role.  --- Alternate route: `/dev/corporations/{corporation_id}/roles/`  Alternate route: `/v2/corporations/{corporation_id}/roles/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdRoles(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdRoles200Ok]**](GetCorporationsCorporationIdRoles200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdRolesHistory"></a>
# **getCorporationsCorporationIdRolesHistory**
> [GetCorporationsCorporationIdRolesHistory200Ok] getCorporationsCorporationIdRolesHistory(corporationId, opts)

Get corporation member roles history

Return how roles have changed for a coporation's members, up to a month  --- Alternate route: `/dev/corporations/{corporation_id}/roles/history/`  Alternate route: `/v2/corporations/{corporation_id}/roles/history/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdRolesHistory(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdRolesHistory200Ok]**](GetCorporationsCorporationIdRolesHistory200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdShareholders"></a>
# **getCorporationsCorporationIdShareholders**
> [GetCorporationsCorporationIdShareholders200Ok] getCorporationsCorporationIdShareholders(corporationId, opts)

Get corporation shareholders

Return the current shareholders of a corporation.  --- Alternate route: `/dev/corporations/{corporation_id}/shareholders/`  Alternate route: `/legacy/corporations/{corporation_id}/shareholders/`  Alternate route: `/v1/corporations/{corporation_id}/shareholders/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdShareholders(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdShareholders200Ok]**](GetCorporationsCorporationIdShareholders200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdStandings"></a>
# **getCorporationsCorporationIdStandings**
> [GetCorporationsCorporationIdStandings200Ok] getCorporationsCorporationIdStandings(corporationId, opts)

Get corporation standings

Return corporation standings from agents, NPC corporations, and factions  --- Alternate route: `/dev/corporations/{corporation_id}/standings/`  Alternate route: `/v2/corporations/{corporation_id}/standings/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdStandings(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdStandings200Ok]**](GetCorporationsCorporationIdStandings200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdStarbases"></a>
# **getCorporationsCorporationIdStarbases**
> [GetCorporationsCorporationIdStarbases200Ok] getCorporationsCorporationIdStarbases(corporationId, opts)

Get corporation starbases (POSes)

Returns list of corporation starbases (POSes)  --- Alternate route: `/dev/corporations/{corporation_id}/starbases/`  Alternate route: `/v2/corporations/{corporation_id}/starbases/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdStarbases(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdStarbases200Ok]**](GetCorporationsCorporationIdStarbases200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdStarbasesStarbaseId"></a>
# **getCorporationsCorporationIdStarbasesStarbaseId**
> GetCorporationsCorporationIdStarbasesStarbaseIdOk getCorporationsCorporationIdStarbasesStarbaseId(corporationIdstarbaseId, systemId, opts)

Get starbase (POS) detail

Returns various settings and fuels of a starbase (POS)  --- Alternate route: `/dev/corporations/{corporation_id}/starbases/{starbase_id}/`  Alternate route: `/v2/corporations/{corporation_id}/starbases/{starbase_id}/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var starbaseId = 789; // Number | An EVE starbase (POS) ID

var systemId = 56; // Number | The solar system this starbase (POS) is located in,

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdStarbasesStarbaseId(corporationIdstarbaseId, systemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **starbaseId** | **Number**| An EVE starbase (POS) ID | 
 **systemId** | **Number**| The solar system this starbase (POS) is located in, | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**GetCorporationsCorporationIdStarbasesStarbaseIdOk**](GetCorporationsCorporationIdStarbasesStarbaseIdOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdStructures"></a>
# **getCorporationsCorporationIdStructures**
> [GetCorporationsCorporationIdStructures200Ok] getCorporationsCorporationIdStructures(corporationId, opts)

Get corporation structures

Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th  --- Alternate route: `/dev/corporations/{corporation_id}/structures/`  Alternate route: `/v4/corporations/{corporation_id}/structures/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Station_Manager 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'acceptLanguage': "en", // String | Language to use in the response
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'language': "en" // String | Language to use in the response, takes precedence over Accept-Language
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdStructures(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **acceptLanguage** | **String**| Language to use in the response | [optional] [default to en]
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **language** | **String**| Language to use in the response, takes precedence over Accept-Language | [optional] [default to en]
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdStructures200Ok]**](GetCorporationsCorporationIdStructures200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdTitles"></a>
# **getCorporationsCorporationIdTitles**
> [GetCorporationsCorporationIdTitles200Ok] getCorporationsCorporationIdTitles(corporationId, opts)

Get corporation titles

Returns a corporation's titles  --- Alternate route: `/dev/corporations/{corporation_id}/titles/`  Alternate route: `/v2/corporations/{corporation_id}/titles/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CorporationApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdTitles(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdTitles200Ok]**](GetCorporationsCorporationIdTitles200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsNpccorps"></a>
# **getCorporationsNpccorps**
> ['Number'] getCorporationsNpccorps(opts)

Get npc corporations

Get a list of npc corporations  --- Alternate route: `/dev/corporations/npccorps/`  Alternate route: `/v2/corporations/npccorps/`  --- This route expires daily at 11:05

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.CorporationApi();

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsNpccorps(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

**['Number']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

