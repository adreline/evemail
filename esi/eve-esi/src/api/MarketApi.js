/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.17
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdOrders200Ok', 'model/GetCharactersCharacterIdOrdersHistory200Ok', 'model/GetCorporationsCorporationIdOrders200Ok', 'model/GetCorporationsCorporationIdOrdersHistory200Ok', 'model/GetMarketsGroupsMarketGroupIdNotFound', 'model/GetMarketsGroupsMarketGroupIdOk', 'model/GetMarketsPrices200Ok', 'model/GetMarketsRegionIdHistory200Ok', 'model/GetMarketsRegionIdHistoryError520', 'model/GetMarketsRegionIdHistoryNotFound', 'model/GetMarketsRegionIdHistoryUnprocessableEntity', 'model/GetMarketsRegionIdOrders200Ok', 'model/GetMarketsRegionIdOrdersNotFound', 'model/GetMarketsRegionIdOrdersUnprocessableEntity', 'model/GetMarketsStructuresStructureId200Ok', 'model/InternalServerError', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdOrders200Ok'), require('../model/GetCharactersCharacterIdOrdersHistory200Ok'), require('../model/GetCorporationsCorporationIdOrders200Ok'), require('../model/GetCorporationsCorporationIdOrdersHistory200Ok'), require('../model/GetMarketsGroupsMarketGroupIdNotFound'), require('../model/GetMarketsGroupsMarketGroupIdOk'), require('../model/GetMarketsPrices200Ok'), require('../model/GetMarketsRegionIdHistory200Ok'), require('../model/GetMarketsRegionIdHistoryError520'), require('../model/GetMarketsRegionIdHistoryNotFound'), require('../model/GetMarketsRegionIdHistoryUnprocessableEntity'), require('../model/GetMarketsRegionIdOrders200Ok'), require('../model/GetMarketsRegionIdOrdersNotFound'), require('../model/GetMarketsRegionIdOrdersUnprocessableEntity'), require('../model/GetMarketsStructuresStructureId200Ok'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.MarketApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetCharactersCharacterIdOrders200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdOrdersHistory200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdOrders200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdOrdersHistory200Ok, root.EveSwaggerInterface.GetMarketsGroupsMarketGroupIdNotFound, root.EveSwaggerInterface.GetMarketsGroupsMarketGroupIdOk, root.EveSwaggerInterface.GetMarketsPrices200Ok, root.EveSwaggerInterface.GetMarketsRegionIdHistory200Ok, root.EveSwaggerInterface.GetMarketsRegionIdHistoryError520, root.EveSwaggerInterface.GetMarketsRegionIdHistoryNotFound, root.EveSwaggerInterface.GetMarketsRegionIdHistoryUnprocessableEntity, root.EveSwaggerInterface.GetMarketsRegionIdOrders200Ok, root.EveSwaggerInterface.GetMarketsRegionIdOrdersNotFound, root.EveSwaggerInterface.GetMarketsRegionIdOrdersUnprocessableEntity, root.EveSwaggerInterface.GetMarketsStructuresStructureId200Ok, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.ServiceUnavailable, root.EveSwaggerInterface.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdOrders200Ok, GetCharactersCharacterIdOrdersHistory200Ok, GetCorporationsCorporationIdOrders200Ok, GetCorporationsCorporationIdOrdersHistory200Ok, GetMarketsGroupsMarketGroupIdNotFound, GetMarketsGroupsMarketGroupIdOk, GetMarketsPrices200Ok, GetMarketsRegionIdHistory200Ok, GetMarketsRegionIdHistoryError520, GetMarketsRegionIdHistoryNotFound, GetMarketsRegionIdHistoryUnprocessableEntity, GetMarketsRegionIdOrders200Ok, GetMarketsRegionIdOrdersNotFound, GetMarketsRegionIdOrdersUnprocessableEntity, GetMarketsStructuresStructureId200Ok, InternalServerError, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Market service.
   * @module api/MarketApi
   * @version 1.17
   */

  /**
   * Constructs a new MarketApi. 
   * @alias module:api/MarketApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdOrders operation.
     * @callback module:api/MarketApi~getCharactersCharacterIdOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdOrders200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List open orders from a character
     * List open market orders placed by a character  --- Alternate route: `/dev/characters/{character_id}/orders/`  Alternate route: `/v2/characters/{character_id}/orders/`  --- This route is cached for up to 1200 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/MarketApi~getCharactersCharacterIdOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdOrders200Ok>}
     */
    this.getCharactersCharacterIdOrders = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdOrders");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdOrders200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/orders/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdOrdersHistory operation.
     * @callback module:api/MarketApi~getCharactersCharacterIdOrdersHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdOrdersHistory200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List historical orders by a character
     * List cancelled and expired market orders placed by a character up to 90 days in the past.  --- Alternate route: `/dev/characters/{character_id}/orders/history/`  Alternate route: `/legacy/characters/{character_id}/orders/history/`  Alternate route: `/v1/characters/{character_id}/orders/history/`  --- This route is cached for up to 3600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/MarketApi~getCharactersCharacterIdOrdersHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdOrdersHistory200Ok>}
     */
    this.getCharactersCharacterIdOrdersHistory = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdOrdersHistory");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdOrdersHistory200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/orders/history/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdOrders operation.
     * @callback module:api/MarketApi~getCorporationsCorporationIdOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdOrders200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List open orders from a corporation
     * List open market orders placed on behalf of a corporation  --- Alternate route: `/dev/corporations/{corporation_id}/orders/`  Alternate route: `/v3/corporations/{corporation_id}/orders/`  --- This route is cached for up to 1200 seconds  --- Requires one of the following EVE corporation role(s): Accountant, Trader 
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/MarketApi~getCorporationsCorporationIdOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdOrders200Ok>}
     */
    this.getCorporationsCorporationIdOrders = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdOrders");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCorporationsCorporationIdOrders200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/orders/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdOrdersHistory operation.
     * @callback module:api/MarketApi~getCorporationsCorporationIdOrdersHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdOrdersHistory200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List historical orders from a corporation
     * List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.  --- Alternate route: `/dev/corporations/{corporation_id}/orders/history/`  Alternate route: `/v2/corporations/{corporation_id}/orders/history/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant, Trader 
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/MarketApi~getCorporationsCorporationIdOrdersHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdOrdersHistory200Ok>}
     */
    this.getCorporationsCorporationIdOrdersHistory = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdOrdersHistory");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCorporationsCorporationIdOrdersHistory200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/orders/history/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMarketsGroups operation.
     * @callback module:api/MarketApi~getMarketsGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get item groups
     * Get a list of item groups  --- Alternate route: `/dev/markets/groups/`  Alternate route: `/legacy/markets/groups/`  Alternate route: `/v1/markets/groups/`  --- This route expires daily at 11:05
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/MarketApi~getMarketsGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getMarketsGroups = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/markets/groups/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMarketsGroupsMarketGroupId operation.
     * @callback module:api/MarketApi~getMarketsGroupsMarketGroupIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMarketsGroupsMarketGroupIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get item group information
     * Get information on an item group  --- Alternate route: `/dev/markets/groups/{market_group_id}/`  Alternate route: `/legacy/markets/groups/{market_group_id}/`  Alternate route: `/v1/markets/groups/{market_group_id}/`  --- This route expires daily at 11:05
     * @param {Number} marketGroupId An Eve item group ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.acceptLanguage Language to use in the response (default to en)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:model/String} opts.language Language to use in the response, takes precedence over Accept-Language (default to en)
     * @param {module:api/MarketApi~getMarketsGroupsMarketGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetMarketsGroupsMarketGroupIdOk}
     */
    this.getMarketsGroupsMarketGroupId = function(marketGroupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'marketGroupId' is set
      if (marketGroupId === undefined || marketGroupId === null) {
        throw new Error("Missing the required parameter 'marketGroupId' when calling getMarketsGroupsMarketGroupId");
      }


      var pathParams = {
        'market_group_id': marketGroupId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'language': opts['language'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage'],
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetMarketsGroupsMarketGroupIdOk;

      return this.apiClient.callApi(
        '/markets/groups/{market_group_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMarketsPrices operation.
     * @callback module:api/MarketApi~getMarketsPricesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetMarketsPrices200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List market prices
     * Return a list of prices  --- Alternate route: `/dev/markets/prices/`  Alternate route: `/legacy/markets/prices/`  Alternate route: `/v1/markets/prices/`  --- This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/MarketApi~getMarketsPricesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetMarketsPrices200Ok>}
     */
    this.getMarketsPrices = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetMarketsPrices200Ok];

      return this.apiClient.callApi(
        '/markets/prices/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMarketsRegionIdHistory operation.
     * @callback module:api/MarketApi~getMarketsRegionIdHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetMarketsRegionIdHistory200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List historical market statistics in a region
     * Return a list of historical market statistics for the specified type in a region  --- Alternate route: `/dev/markets/{region_id}/history/`  Alternate route: `/legacy/markets/{region_id}/history/`  Alternate route: `/v1/markets/{region_id}/history/`  --- This route expires daily at 11:05
     * @param {Number} regionId Return statistics in this region
     * @param {Number} typeId Return statistics for this type
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/MarketApi~getMarketsRegionIdHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetMarketsRegionIdHistory200Ok>}
     */
    this.getMarketsRegionIdHistory = function(regionId, typeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'regionId' is set
      if (regionId === undefined || regionId === null) {
        throw new Error("Missing the required parameter 'regionId' when calling getMarketsRegionIdHistory");
      }

      // verify the required parameter 'typeId' is set
      if (typeId === undefined || typeId === null) {
        throw new Error("Missing the required parameter 'typeId' when calling getMarketsRegionIdHistory");
      }


      var pathParams = {
        'region_id': regionId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'type_id': typeId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetMarketsRegionIdHistory200Ok];

      return this.apiClient.callApi(
        '/markets/{region_id}/history/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMarketsRegionIdOrders operation.
     * @callback module:api/MarketApi~getMarketsRegionIdOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetMarketsRegionIdOrders200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List orders in a region
     * Return a list of orders in a region  --- Alternate route: `/dev/markets/{region_id}/orders/`  Alternate route: `/legacy/markets/{region_id}/orders/`  Alternate route: `/v1/markets/{region_id}/orders/`  --- This route is cached for up to 300 seconds
     * @param {module:model/String} orderType Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders
     * @param {Number} regionId Return orders in this region
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {Number} opts.typeId Return orders only for this type
     * @param {module:api/MarketApi~getMarketsRegionIdOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetMarketsRegionIdOrders200Ok>}
     */
    this.getMarketsRegionIdOrders = function(orderType, regionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'orderType' is set
      if (orderType === undefined || orderType === null) {
        throw new Error("Missing the required parameter 'orderType' when calling getMarketsRegionIdOrders");
      }

      // verify the required parameter 'regionId' is set
      if (regionId === undefined || regionId === null) {
        throw new Error("Missing the required parameter 'regionId' when calling getMarketsRegionIdOrders");
      }


      var pathParams = {
        'region_id': regionId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'order_type': orderType,
        'page': opts['page'],
        'type_id': opts['typeId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetMarketsRegionIdOrders200Ok];

      return this.apiClient.callApi(
        '/markets/{region_id}/orders/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMarketsRegionIdTypes operation.
     * @callback module:api/MarketApi~getMarketsRegionIdTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List type IDs relevant to a market
     * Return a list of type IDs that have active orders in the region, for efficient market indexing.  --- Alternate route: `/dev/markets/{region_id}/types/`  Alternate route: `/legacy/markets/{region_id}/types/`  Alternate route: `/v1/markets/{region_id}/types/`  --- This route is cached for up to 600 seconds
     * @param {Number} regionId Return statistics in this region
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {module:api/MarketApi~getMarketsRegionIdTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getMarketsRegionIdTypes = function(regionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'regionId' is set
      if (regionId === undefined || regionId === null) {
        throw new Error("Missing the required parameter 'regionId' when calling getMarketsRegionIdTypes");
      }


      var pathParams = {
        'region_id': regionId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/markets/{region_id}/types/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMarketsStructuresStructureId operation.
     * @callback module:api/MarketApi~getMarketsStructuresStructureIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetMarketsStructuresStructureId200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List orders in a structure
     * Return all orders in a structure  --- Alternate route: `/dev/markets/structures/{structure_id}/`  Alternate route: `/legacy/markets/structures/{structure_id}/`  Alternate route: `/v1/markets/structures/{structure_id}/`  --- This route is cached for up to 300 seconds
     * @param {Number} structureId Return orders in this structure
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/MarketApi~getMarketsStructuresStructureIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetMarketsStructuresStructureId200Ok>}
     */
    this.getMarketsStructuresStructureId = function(structureId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'structureId' is set
      if (structureId === undefined || structureId === null) {
        throw new Error("Missing the required parameter 'structureId' when calling getMarketsStructuresStructureId");
      }


      var pathParams = {
        'structure_id': structureId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetMarketsStructuresStructureId200Ok];

      return this.apiClient.callApi(
        '/markets/structures/{structure_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
