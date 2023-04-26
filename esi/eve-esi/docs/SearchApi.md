# EveSwaggerInterface.SearchApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterIdSearch**](SearchApi.md#getCharactersCharacterIdSearch) | **GET** /characters/{character_id}/search/ | Search on a string


<a name="getCharactersCharacterIdSearch"></a>
# **getCharactersCharacterIdSearch**
> GetCharactersCharacterIdSearchOk getCharactersCharacterIdSearch(categories, characterIdsearch, opts)

Search on a string

Search for entities that match a given sub-string.  --- Alternate route: `/dev/characters/{character_id}/search/`  Alternate route: `/legacy/characters/{character_id}/search/`  Alternate route: `/v3/characters/{character_id}/search/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.SearchApi();

var categories = ["categories_example"]; // [String] | Type of entities to search for

var characterId = 56; // Number | An EVE character ID

var search = "search_example"; // String | The string to search on

var opts = { 
  'acceptLanguage': "en", // String | Language to use in the response
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'language': "en" // String | Language to use in the response, takes precedence over Accept-Language
  'strict': false, // Boolean | Whether the search should be a strict match
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdSearch(categories, characterIdsearch, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categories** | [**[String]**](String.md)| Type of entities to search for | 
 **characterId** | **Number**| An EVE character ID | 
 **search** | **String**| The string to search on | 
 **acceptLanguage** | **String**| Language to use in the response | [optional] [default to en]
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **language** | **String**| Language to use in the response, takes precedence over Accept-Language | [optional] [default to en]
 **strict** | **Boolean**| Whether the search should be a strict match | [optional] [default to false]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**GetCharactersCharacterIdSearchOk**](GetCharactersCharacterIdSearchOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

