# EsiMetaSpec.WebUIApi

All URIs are relative to *https://esi.evetech.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDiffVersionAVersionB**](WebUIApi.md#getDiffVersionAVersionB) | **GET** /diff/{version_a}/{version_b}/ | Diff route
[**getUi**](WebUIApi.md#getUi) | **GET** /ui/ | SwaggerUI route (v3)


<a name="getDiffVersionAVersionB"></a>
# **getDiffVersionAVersionB**
> 'String' getDiffVersionAVersionB(versionA, versionB, opts)

Diff route

Diff two ESI specs

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.WebUIApi();

var versionA = "versionA_example"; // String | Swagger spec version to compare with

var versionB = "versionB_example"; // String | Swagger spec version to compare against

var opts = { 
  'userAgent': "userAgent_example", // String | Client identifier, takes precedence over headers
  'xUserAgent': "xUserAgent_example" // String | Client identifier, takes precedence over User-Agent
  'datasource': "tranquility", // String | The server name you would like data from
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiffVersionAVersionB(versionA, versionB, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionA** | **String**| Swagger spec version to compare with | 
 **versionB** | **String**| Swagger spec version to compare against | 
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html; charset=utf-8

<a name="getUi"></a>
# **getUi**
> 'String' getUi(opts)

SwaggerUI route (v3)

ESI web UI. This is an open source project. If you find ESI web UI specific bugs, please report them to https://github.com/esi/esi-swagger-ui/issues

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.WebUIApi();

var opts = { 
  'userAgent': "userAgent_example", // String | Client identifier, takes precedence over headers
  'xUserAgent': "xUserAgent_example" // String | Client identifier, takes precedence over User-Agent
  'datasource': "tranquility", // String | The server name you would like data from
  'version': "latest" // String | The Swagger spec version to display
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUi(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **version** | **String**| The Swagger spec version to display | [optional] [default to latest]

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html; charset=utf-8

