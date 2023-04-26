# EveSwaggerInterface.SkillsApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterIdAttributes**](SkillsApi.md#getCharactersCharacterIdAttributes) | **GET** /characters/{character_id}/attributes/ | Get character attributes
[**getCharactersCharacterIdSkillqueue**](SkillsApi.md#getCharactersCharacterIdSkillqueue) | **GET** /characters/{character_id}/skillqueue/ | Get character's skill queue
[**getCharactersCharacterIdSkills**](SkillsApi.md#getCharactersCharacterIdSkills) | **GET** /characters/{character_id}/skills/ | Get character skills


<a name="getCharactersCharacterIdAttributes"></a>
# **getCharactersCharacterIdAttributes**
> GetCharactersCharacterIdAttributesOk getCharactersCharacterIdAttributes(characterId, opts)

Get character attributes

Return attributes of a character  --- Alternate route: `/dev/characters/{character_id}/attributes/`  Alternate route: `/legacy/characters/{character_id}/attributes/`  Alternate route: `/v1/characters/{character_id}/attributes/`  --- This route is cached for up to 120 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.SkillsApi();

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
apiInstance.getCharactersCharacterIdAttributes(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**GetCharactersCharacterIdAttributesOk**](GetCharactersCharacterIdAttributesOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdSkillqueue"></a>
# **getCharactersCharacterIdSkillqueue**
> [GetCharactersCharacterIdSkillqueue200Ok] getCharactersCharacterIdSkillqueue(characterId, opts)

Get character's skill queue

List the configured skill queue for the given character  --- Alternate route: `/dev/characters/{character_id}/skillqueue/`  Alternate route: `/legacy/characters/{character_id}/skillqueue/`  Alternate route: `/v2/characters/{character_id}/skillqueue/`  --- This route is cached for up to 120 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.SkillsApi();

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
apiInstance.getCharactersCharacterIdSkillqueue(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdSkillqueue200Ok]**](GetCharactersCharacterIdSkillqueue200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdSkills"></a>
# **getCharactersCharacterIdSkills**
> GetCharactersCharacterIdSkillsOk getCharactersCharacterIdSkills(characterId, opts)

Get character skills

List all trained skills for the given character  --- Alternate route: `/dev/characters/{character_id}/skills/`  Alternate route: `/v4/characters/{character_id}/skills/`  --- This route is cached for up to 120 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.SkillsApi();

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
apiInstance.getCharactersCharacterIdSkills(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**GetCharactersCharacterIdSkillsOk**](GetCharactersCharacterIdSkillsOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

