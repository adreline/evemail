# EveSwaggerInterface.AllianceApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlliances**](AllianceApi.md#getAlliances) | **GET** /alliances/ | List all alliances
[**getAlliancesAllianceId**](AllianceApi.md#getAlliancesAllianceId) | **GET** /alliances/{alliance_id}/ | Get alliance information
[**getAlliancesAllianceIdCorporations**](AllianceApi.md#getAlliancesAllianceIdCorporations) | **GET** /alliances/{alliance_id}/corporations/ | List alliance's corporations
[**getAlliancesAllianceIdIcons**](AllianceApi.md#getAlliancesAllianceIdIcons) | **GET** /alliances/{alliance_id}/icons/ | Get alliance icon


<a name="getAlliances"></a>
# **getAlliances**
> ['Number'] getAlliances(opts)

List all alliances

List all active player alliances  --- Alternate route: `/dev/alliances/`  Alternate route: `/legacy/alliances/`  Alternate route: `/v1/alliances/`  Alternate route: `/v2/alliances/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.AllianceApi();

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
apiInstance.getAlliances(opts, callback);
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

<a name="getAlliancesAllianceId"></a>
# **getAlliancesAllianceId**
> GetAlliancesAllianceIdOk getAlliancesAllianceId(allianceId, opts)

Get alliance information

Public information about an alliance  --- Alternate route: `/dev/alliances/{alliance_id}/`  Alternate route: `/legacy/alliances/{alliance_id}/`  Alternate route: `/v3/alliances/{alliance_id}/`  Alternate route: `/v4/alliances/{alliance_id}/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.AllianceApi();

var allianceId = 56; // Number | An EVE alliance ID

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
apiInstance.getAlliancesAllianceId(allianceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allianceId** | **Number**| An EVE alliance ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetAlliancesAllianceIdOk**](GetAlliancesAllianceIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAlliancesAllianceIdCorporations"></a>
# **getAlliancesAllianceIdCorporations**
> ['Number'] getAlliancesAllianceIdCorporations(allianceId, opts)

List alliance's corporations

List all current member corporations of an alliance  --- Alternate route: `/dev/alliances/{alliance_id}/corporations/`  Alternate route: `/legacy/alliances/{alliance_id}/corporations/`  Alternate route: `/v1/alliances/{alliance_id}/corporations/`  Alternate route: `/v2/alliances/{alliance_id}/corporations/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.AllianceApi();

var allianceId = 56; // Number | An EVE alliance ID

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
apiInstance.getAlliancesAllianceIdCorporations(allianceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allianceId** | **Number**| An EVE alliance ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

**['Number']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAlliancesAllianceIdIcons"></a>
# **getAlliancesAllianceIdIcons**
> GetAlliancesAllianceIdIconsOk getAlliancesAllianceIdIcons(allianceId, opts)

Get alliance icon

Get the icon urls for a alliance  --- Alternate route: `/legacy/alliances/{alliance_id}/icons/`  Alternate route: `/v1/alliances/{alliance_id}/icons/`  --- This route expires daily at 11:05  --- [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/alliances/{alliance_id}/icons/)

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.AllianceApi();

var allianceId = 56; // Number | An EVE alliance ID

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
apiInstance.getAlliancesAllianceIdIcons(allianceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allianceId** | **Number**| An EVE alliance ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetAlliancesAllianceIdIconsOk**](GetAlliancesAllianceIdIconsOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

