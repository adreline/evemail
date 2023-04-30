# EsiMetaSpec.MetaApi

All URIs are relative to *https://esi.evetech.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHeaders**](MetaApi.md#getHeaders) | **GET** /headers/ | Debug request headers
[**getPing**](MetaApi.md#getPing) | **GET** /ping | Ping route
[**getStatus**](MetaApi.md#getStatus) | **GET** /status.json | ESI health status
[**getVerify**](MetaApi.md#getVerify) | **GET** /verify/ | Verify access token
[**getVersions**](MetaApi.md#getVersions) | **GET** /versions/ | List versions


<a name="getHeaders"></a>
# **getHeaders**
> {'String': 'String'} getHeaders()

Debug request headers

Echo the request headers for debugging purposes. Note that the 'Connection' header and any 'X-' headers are not included

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.MetaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHeaders(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{'String': 'String'}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPing"></a>
# **getPing**
> 'String' getPing()

Ping route

Ping the ESI routers

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.MetaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPing(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain; charset=utf-8

<a name="getStatus"></a>
# **getStatus**
> [GetStatusItem] getStatus(opts)

ESI health status

Provides a general health indicator per route and method

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.MetaApi();

var opts = { 
  'version': "latest" // String | The version of metrics to request. Note that alternate versions are grouped together
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStatus(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| The version of metrics to request. Note that alternate versions are grouped together | [optional] [default to latest]

### Return type

[**[GetStatusItem]**](GetStatusItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVerify"></a>
# **getVerify**
> GetVerifyOk getVerify(opts)

Verify access token

Verify authorization tokens in ESI's auth cache

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.MetaApi();

var opts = { 
  'userAgent': "userAgent_example", // String | Client identifier, takes precedence over headers
  'xUserAgent': "xUserAgent_example" // String | Client identifier, takes precedence over User-Agent
  'datasource': "tranquility", // String | The server name you would like data from
  'token': "token_example", // String | Access token to use if unable to set a header
  'authorization': "authorization_example" // String | Access token, in the format of \"Bearer <access token>\"
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVerify(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 
 **authorization** | **String**| Access token, in the format of \"Bearer <access token>\" | [optional] 

### Return type

[**GetVerifyOk**](GetVerifyOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVersions"></a>
# **getVersions**
> ['String'] getVersions(opts)

List versions

List all endpoint versions

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.MetaApi();

var opts = { 
  'userAgent': "userAgent_example", // String | Client identifier, takes precedence over headers
  'xUserAgent': "xUserAgent_example" // String | Client identifier, takes precedence over User-Agent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVersions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

**['String']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

