# EveSwaggerInterface.OpportunitiesApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterIdOpportunities**](OpportunitiesApi.md#getCharactersCharacterIdOpportunities) | **GET** /characters/{character_id}/opportunities/ | Get a character's completed tasks
[**getOpportunitiesGroups**](OpportunitiesApi.md#getOpportunitiesGroups) | **GET** /opportunities/groups/ | Get opportunities groups
[**getOpportunitiesGroupsGroupId**](OpportunitiesApi.md#getOpportunitiesGroupsGroupId) | **GET** /opportunities/groups/{group_id}/ | Get opportunities group
[**getOpportunitiesTasks**](OpportunitiesApi.md#getOpportunitiesTasks) | **GET** /opportunities/tasks/ | Get opportunities tasks
[**getOpportunitiesTasksTaskId**](OpportunitiesApi.md#getOpportunitiesTasksTaskId) | **GET** /opportunities/tasks/{task_id}/ | Get opportunities task


<a name="getCharactersCharacterIdOpportunities"></a>
# **getCharactersCharacterIdOpportunities**
> [GetCharactersCharacterIdOpportunities200Ok] getCharactersCharacterIdOpportunities(characterId, opts)

Get a character's completed tasks

Return a list of tasks finished by a character  --- Alternate route: `/dev/characters/{character_id}/opportunities/`  Alternate route: `/legacy/characters/{character_id}/opportunities/`  Alternate route: `/v1/characters/{character_id}/opportunities/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.OpportunitiesApi();

var characterId = 56; // Number | An EVE character ID

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
apiInstance.getCharactersCharacterIdOpportunities(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdOpportunities200Ok]**](GetCharactersCharacterIdOpportunities200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOpportunitiesGroups"></a>
# **getOpportunitiesGroups**
> ['Number'] getOpportunitiesGroups(opts)

Get opportunities groups

Return a list of opportunities groups  --- Alternate route: `/dev/opportunities/groups/`  Alternate route: `/legacy/opportunities/groups/`  Alternate route: `/v1/opportunities/groups/`  --- This route expires daily at 11:05

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.OpportunitiesApi();

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
apiInstance.getOpportunitiesGroups(opts, callback);
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

<a name="getOpportunitiesGroupsGroupId"></a>
# **getOpportunitiesGroupsGroupId**
> GetOpportunitiesGroupsGroupIdOk getOpportunitiesGroupsGroupId(groupId, opts)

Get opportunities group

Return information of an opportunities group  --- Alternate route: `/dev/opportunities/groups/{group_id}/`  Alternate route: `/legacy/opportunities/groups/{group_id}/`  Alternate route: `/v1/opportunities/groups/{group_id}/`  --- This route expires daily at 11:05

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.OpportunitiesApi();

var groupId = 56; // Number | ID of an opportunities group

var opts = { 
  'acceptLanguage': "en", // String | Language to use in the response
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'language': "en" // String | Language to use in the response, takes precedence over Accept-Language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOpportunitiesGroupsGroupId(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| ID of an opportunities group | 
 **acceptLanguage** | **String**| Language to use in the response | [optional] [default to en]
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **language** | **String**| Language to use in the response, takes precedence over Accept-Language | [optional] [default to en]

### Return type

[**GetOpportunitiesGroupsGroupIdOk**](GetOpportunitiesGroupsGroupIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOpportunitiesTasks"></a>
# **getOpportunitiesTasks**
> ['Number'] getOpportunitiesTasks(opts)

Get opportunities tasks

Return a list of opportunities tasks  --- Alternate route: `/dev/opportunities/tasks/`  Alternate route: `/legacy/opportunities/tasks/`  Alternate route: `/v1/opportunities/tasks/`  --- This route expires daily at 11:05

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.OpportunitiesApi();

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
apiInstance.getOpportunitiesTasks(opts, callback);
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

<a name="getOpportunitiesTasksTaskId"></a>
# **getOpportunitiesTasksTaskId**
> GetOpportunitiesTasksTaskIdOk getOpportunitiesTasksTaskId(taskId, opts)

Get opportunities task

Return information of an opportunities task  --- Alternate route: `/dev/opportunities/tasks/{task_id}/`  Alternate route: `/legacy/opportunities/tasks/{task_id}/`  Alternate route: `/v1/opportunities/tasks/{task_id}/`  --- This route expires daily at 11:05

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.OpportunitiesApi();

var taskId = 56; // Number | ID of an opportunities task

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
apiInstance.getOpportunitiesTasksTaskId(taskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **Number**| ID of an opportunities task | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetOpportunitiesTasksTaskIdOk**](GetOpportunitiesTasksTaskIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

