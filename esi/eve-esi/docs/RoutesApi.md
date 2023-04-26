# EveSwaggerInterface.RoutesApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRouteOriginDestination**](RoutesApi.md#getRouteOriginDestination) | **GET** /route/{origin}/{destination}/ | Get route


<a name="getRouteOriginDestination"></a>
# **getRouteOriginDestination**
> ['Number'] getRouteOriginDestination(destination, origin, opts)

Get route

Get the systems between origin and destination  --- Alternate route: `/dev/route/{origin}/{destination}/`  Alternate route: `/legacy/route/{origin}/{destination}/`  Alternate route: `/v1/route/{origin}/{destination}/`  --- This route is cached for up to 86400 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.RoutesApi();

var destination = 56; // Number | destination solar system ID

var origin = 56; // Number | origin solar system ID

var opts = { 
  'avoid': [3.4], // [Number] | avoid solar system ID(s)
  'connections': [new EveSwaggerInterface.[Number]()], // [[Number]] | connected solar system pairs
  'datasource': "tranquility", // String | The server name you would like data from
  'flag': "shortest", // String | route security preference
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRouteOriginDestination(destination, origin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination** | **Number**| destination solar system ID | 
 **origin** | **Number**| origin solar system ID | 
 **avoid** | [**[Number]**](Number.md)| avoid solar system ID(s) | [optional] 
 **connections** | [**[[Number]]**]([Number].md)| connected solar system pairs | [optional] 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **flag** | **String**| route security preference | [optional] [default to shortest]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

**['Number']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

