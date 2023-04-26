# EveSwaggerInterface.IndustryApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterIdIndustryJobs**](IndustryApi.md#getCharactersCharacterIdIndustryJobs) | **GET** /characters/{character_id}/industry/jobs/ | List character industry jobs
[**getCharactersCharacterIdMining**](IndustryApi.md#getCharactersCharacterIdMining) | **GET** /characters/{character_id}/mining/ | Character mining ledger
[**getCorporationCorporationIdMiningExtractions**](IndustryApi.md#getCorporationCorporationIdMiningExtractions) | **GET** /corporation/{corporation_id}/mining/extractions/ | Moon extraction timers
[**getCorporationCorporationIdMiningObservers**](IndustryApi.md#getCorporationCorporationIdMiningObservers) | **GET** /corporation/{corporation_id}/mining/observers/ | Corporation mining observers
[**getCorporationCorporationIdMiningObserversObserverId**](IndustryApi.md#getCorporationCorporationIdMiningObserversObserverId) | **GET** /corporation/{corporation_id}/mining/observers/{observer_id}/ | Observed corporation mining
[**getCorporationsCorporationIdIndustryJobs**](IndustryApi.md#getCorporationsCorporationIdIndustryJobs) | **GET** /corporations/{corporation_id}/industry/jobs/ | List corporation industry jobs
[**getIndustryFacilities**](IndustryApi.md#getIndustryFacilities) | **GET** /industry/facilities/ | List industry facilities
[**getIndustrySystems**](IndustryApi.md#getIndustrySystems) | **GET** /industry/systems/ | List solar system cost indices


<a name="getCharactersCharacterIdIndustryJobs"></a>
# **getCharactersCharacterIdIndustryJobs**
> [GetCharactersCharacterIdIndustryJobs200Ok] getCharactersCharacterIdIndustryJobs(characterId, opts)

List character industry jobs

List industry jobs placed by a character  --- Alternate route: `/dev/characters/{character_id}/industry/jobs/`  Alternate route: `/legacy/characters/{character_id}/industry/jobs/`  Alternate route: `/v1/characters/{character_id}/industry/jobs/`  --- This route is cached for up to 300 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.IndustryApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'includeCompleted': true, // Boolean | Whether to retrieve completed character industry jobs. Only includes jobs from the past 90 days
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdIndustryJobs(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **includeCompleted** | **Boolean**| Whether to retrieve completed character industry jobs. Only includes jobs from the past 90 days | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdIndustryJobs200Ok]**](GetCharactersCharacterIdIndustryJobs200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdMining"></a>
# **getCharactersCharacterIdMining**
> [GetCharactersCharacterIdMining200Ok] getCharactersCharacterIdMining(characterId, opts)

Character mining ledger

Paginated record of all mining done by a character for the past 30 days   --- Alternate route: `/dev/characters/{character_id}/mining/`  Alternate route: `/legacy/characters/{character_id}/mining/`  Alternate route: `/v1/characters/{character_id}/mining/`  --- This route is cached for up to 600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.IndustryApi();

var characterId = 56; // Number | An EVE character ID

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
apiInstance.getCharactersCharacterIdMining(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdMining200Ok]**](GetCharactersCharacterIdMining200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationCorporationIdMiningExtractions"></a>
# **getCorporationCorporationIdMiningExtractions**
> [GetCorporationCorporationIdMiningExtractions200Ok] getCorporationCorporationIdMiningExtractions(corporationId, opts)

Moon extraction timers

Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.   --- Alternate route: `/dev/corporation/{corporation_id}/mining/extractions/`  Alternate route: `/legacy/corporation/{corporation_id}/mining/extractions/`  Alternate route: `/v1/corporation/{corporation_id}/mining/extractions/`  --- This route is cached for up to 1800 seconds  --- Requires one of the following EVE corporation role(s): Station_Manager 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.IndustryApi();

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
apiInstance.getCorporationCorporationIdMiningExtractions(corporationId, opts, callback);
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

[**[GetCorporationCorporationIdMiningExtractions200Ok]**](GetCorporationCorporationIdMiningExtractions200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationCorporationIdMiningObservers"></a>
# **getCorporationCorporationIdMiningObservers**
> [GetCorporationCorporationIdMiningObservers200Ok] getCorporationCorporationIdMiningObservers(corporationId, opts)

Corporation mining observers

Paginated list of all entities capable of observing and recording mining for a corporation   --- Alternate route: `/dev/corporation/{corporation_id}/mining/observers/`  Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/`  Alternate route: `/v1/corporation/{corporation_id}/mining/observers/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.IndustryApi();

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
apiInstance.getCorporationCorporationIdMiningObservers(corporationId, opts, callback);
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

[**[GetCorporationCorporationIdMiningObservers200Ok]**](GetCorporationCorporationIdMiningObservers200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationCorporationIdMiningObserversObserverId"></a>
# **getCorporationCorporationIdMiningObserversObserverId**
> [GetCorporationCorporationIdMiningObserversObserverId200Ok] getCorporationCorporationIdMiningObserversObserverId(corporationIdobserverId, opts)

Observed corporation mining

Paginated record of all mining seen by an observer   --- Alternate route: `/dev/corporation/{corporation_id}/mining/observers/{observer_id}/`  Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/{observer_id}/`  Alternate route: `/v1/corporation/{corporation_id}/mining/observers/{observer_id}/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.IndustryApi();

var corporationId = 56; // Number | An EVE corporation ID

var observerId = 789; // Number | A mining observer id

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
apiInstance.getCorporationCorporationIdMiningObserversObserverId(corporationIdobserverId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **observerId** | **Number**| A mining observer id | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationCorporationIdMiningObserversObserverId200Ok]**](GetCorporationCorporationIdMiningObserversObserverId200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdIndustryJobs"></a>
# **getCorporationsCorporationIdIndustryJobs**
> [GetCorporationsCorporationIdIndustryJobs200Ok] getCorporationsCorporationIdIndustryJobs(corporationId, opts)

List corporation industry jobs

List industry jobs run by a corporation  --- Alternate route: `/dev/corporations/{corporation_id}/industry/jobs/`  Alternate route: `/legacy/corporations/{corporation_id}/industry/jobs/`  Alternate route: `/v1/corporations/{corporation_id}/industry/jobs/`  --- This route is cached for up to 300 seconds  --- Requires one of the following EVE corporation role(s): Factory_Manager 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.IndustryApi();

var corporationId = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'includeCompleted': false, // Boolean | Whether to retrieve completed corporation industry jobs. Only includes jobs from the past 90 days
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
apiInstance.getCorporationsCorporationIdIndustryJobs(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **includeCompleted** | **Boolean**| Whether to retrieve completed corporation industry jobs. Only includes jobs from the past 90 days | [optional] [default to false]
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdIndustryJobs200Ok]**](GetCorporationsCorporationIdIndustryJobs200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIndustryFacilities"></a>
# **getIndustryFacilities**
> [GetIndustryFacilities200Ok] getIndustryFacilities(opts)

List industry facilities

Return a list of industry facilities  --- Alternate route: `/dev/industry/facilities/`  Alternate route: `/legacy/industry/facilities/`  Alternate route: `/v1/industry/facilities/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.IndustryApi();

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
apiInstance.getIndustryFacilities(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**[GetIndustryFacilities200Ok]**](GetIndustryFacilities200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIndustrySystems"></a>
# **getIndustrySystems**
> [GetIndustrySystems200Ok] getIndustrySystems(opts)

List solar system cost indices

Return cost indices for solar systems  --- Alternate route: `/dev/industry/systems/`  Alternate route: `/legacy/industry/systems/`  Alternate route: `/v1/industry/systems/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.IndustryApi();

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
apiInstance.getIndustrySystems(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**[GetIndustrySystems200Ok]**](GetIndustrySystems200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

