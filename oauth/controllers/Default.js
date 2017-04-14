'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.oauth2AuthorizeGET = function oauth2AuthorizeGET (req, res, next) {
  Default.oauth2AuthorizeGET(req.swagger.params, res, next);
};

module.exports.oauth2RevokePOST = function oauth2RevokePOST (req, res, next) {
  Default.oauth2RevokePOST(req.swagger.params, res, next);
};

module.exports.oauth2TokenPOST = function oauth2TokenPOST (req, res, next) {
  Default.oauth2TokenPOST(req.swagger.params, res, next);
};

module.exports.oauth2UserinfoGET = function oauth2UserinfoGET (req, res, next) {
  Default.oauth2UserinfoGET(req.swagger.params, res, next);
};

module.exports.rootGET = function rootGET (req, res, next) {
  Default.oauth2RootGET(req.swagger.params, res, next);
};

