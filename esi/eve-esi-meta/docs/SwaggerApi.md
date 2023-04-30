# EsiMetaSpec.SwaggerApi

All URIs are relative to *https://esi.evetech.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDevSwagger**](SwaggerApi.md#getDevSwagger) | **GET** /_dev/swagger.json | Get _dev spec (versioned)
[**getDevSwagger_0**](SwaggerApi.md#getDevSwagger_0) | **GET** /dev/swagger.json | Get dev swagger spec
[**getLatestSwagger**](SwaggerApi.md#getLatestSwagger) | **GET** /_latest/swagger.json | Get _latest spec (versioned)
[**getLatestSwagger_0**](SwaggerApi.md#getLatestSwagger_0) | **GET** /latest/swagger.json | Get latest swagger spec
[**getLegacySwagger**](SwaggerApi.md#getLegacySwagger) | **GET** /_legacy/swagger.json | Get _legacy spec (versioned)
[**getLegacySwagger_0**](SwaggerApi.md#getLegacySwagger_0) | **GET** /legacy/swagger.json | Get legacy swagger spec
[**getMetaSwagger**](SwaggerApi.md#getMetaSwagger) | **GET** /swagger.json | Get meta swagger spec
[**getV1Swagger**](SwaggerApi.md#getV1Swagger) | **GET** /v1/swagger.json | Get v1 swagger spec
[**getV2Swagger**](SwaggerApi.md#getV2Swagger) | **GET** /v2/swagger.json | Get v2 swagger spec
[**getV3Swagger**](SwaggerApi.md#getV3Swagger) | **GET** /v3/swagger.json | Get v3 swagger spec
[**getV4Swagger**](SwaggerApi.md#getV4Swagger) | **GET** /v4/swagger.json | Get v4 swagger spec
[**getV5Swagger**](SwaggerApi.md#getV5Swagger) | **GET** /v5/swagger.json | Get v5 swagger spec
[**getV6Swagger**](SwaggerApi.md#getV6Swagger) | **GET** /v6/swagger.json | Get v6 swagger spec


<a name="getDevSwagger"></a>
# **getDevSwagger**
> Object getDevSwagger(opts)

Get _dev spec (versioned)

The _dev ESI swagger specification. The underscore swagger specs do not have a basePath, giving you an easy way to generate stable clients on versioned routes.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getDevSwagger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDevSwagger_0"></a>
# **getDevSwagger_0**
> Object getDevSwagger_0(opts)

Get dev swagger spec

The dev ESI swagger specification.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getDevSwagger_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestSwagger"></a>
# **getLatestSwagger**
> Object getLatestSwagger(opts)

Get _latest spec (versioned)

The _latest ESI swagger specification. The underscore swagger specs do not have a basePath, giving you an easy way to generate stable clients on versioned routes.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getLatestSwagger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestSwagger_0"></a>
# **getLatestSwagger_0**
> Object getLatestSwagger_0(opts)

Get latest swagger spec

The latest ESI swagger specification.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getLatestSwagger_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLegacySwagger"></a>
# **getLegacySwagger**
> Object getLegacySwagger(opts)

Get _legacy spec (versioned)

The _legacy ESI swagger specification. The underscore swagger specs do not have a basePath, giving you an easy way to generate stable clients on versioned routes.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getLegacySwagger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLegacySwagger_0"></a>
# **getLegacySwagger_0**
> Object getLegacySwagger_0(opts)

Get legacy swagger spec

The legacy ESI swagger specification.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getLegacySwagger_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMetaSwagger"></a>
# **getMetaSwagger**
> Object getMetaSwagger(opts)

Get meta swagger spec

The meta ESI swagger specification.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getMetaSwagger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV1Swagger"></a>
# **getV1Swagger**
> Object getV1Swagger(opts)

Get v1 swagger spec

The v1 ESI swagger specification.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getV1Swagger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV2Swagger"></a>
# **getV2Swagger**
> Object getV2Swagger(opts)

Get v2 swagger spec

The v2 ESI swagger specification.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getV2Swagger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV3Swagger"></a>
# **getV3Swagger**
> Object getV3Swagger(opts)

Get v3 swagger spec

The v3 ESI swagger specification.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getV3Swagger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV4Swagger"></a>
# **getV4Swagger**
> Object getV4Swagger(opts)

Get v4 swagger spec

The v4 ESI swagger specification.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getV4Swagger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV5Swagger"></a>
# **getV5Swagger**
> Object getV5Swagger(opts)

Get v5 swagger spec

The v5 ESI swagger specification.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getV5Swagger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV6Swagger"></a>
# **getV6Swagger**
> Object getV6Swagger(opts)

Get v6 swagger spec

The v6 ESI swagger specification.

### Example
```javascript
var EsiMetaSpec = require('esi_meta_spec');

var apiInstance = new EsiMetaSpec.SwaggerApi();

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
apiInstance.getV6Swagger(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

