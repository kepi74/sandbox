const Default = require('./DefaultService');
/* eslint-disable camelcase */

const addressAuto_completeGET = (req, res, next) => {
  Default.addressAuto_completeGET(req.swagger.params, res, next);
};

const contractsCommodityAddressPOST = (req, res, next) => {
  Default.contractsCommodityAddressPOST(req.swagger.params, res, next);
};

const contractsCommodityBbpPOST = (req, res, next) => {
  Default.contractsCommodityBbpPOST(req.swagger.params, res, next);
};

const contractsCommodityEbillPOST = (req, res, next) => {
  Default.contractsCommodityEbillPOST(req.swagger.params, res, next);
};

const contractsCommodityGET = (req, res, next) => {
  Default.contractsCommodityGET(req.swagger.params, res, next);
};

const contractsServicesContract_numberGET = (req, res, next) => {
  Default.contractsServicesContract_numberGET(req.swagger.params, res, next);
};

const hdoRegionCodeGET = (req, res, next) => {
  Default.hdoRegionCodeGET(req.swagger.params, res, next);
};

const installationsGET = (req, res, next) => {
  Default.installationsGET(req.swagger.params, res, next);
};

const installationsIdConsumptionGET = (req, res, next) => {
  Default.installationsIdConsumptionGET(req.swagger.params, res, next);
};

const installationsIdMetersPOST = (req, res, next) => {
  Default.installationsIdMetersPOST(req.swagger.params, res, next);
};

const partnersIdEmailPOST = (req, res, next) => {
  Default.partnersIdEmailPOST(req.swagger.params, res, next);
};

const partnersIdGET = (req, res, next) => {
  Default.partnersIdGET(req.swagger.params, res, next);
};

const partnersIdMobilePOST = (req, res, next) => {
  Default.partnersIdMobilePOST(req.swagger.params, res, next);
};

const paymentsDetailBbpBankGET = (req, res, next) => {
  Default.paymentsDetailBbpBankGET(req.swagger.params, res, next);
};

const paymentsDetailBbpGET = (req, res, next) => {
  Default.paymentsDetailBbpGET(req.swagger.params, res, next);
};

const paymentsDetailInvoicesBankGET = (req, res, next) => {
  Default.paymentsDetailInvoicesBankGET(req.swagger.params, res, next);
};

const paymentsDetailInvoicesGET = (req, res, next) => {
  Default.paymentsDetailInvoicesGET(req.swagger.params, res, next);
};

const paymentsDetailServicesGET = (req, res, next) => {
  Default.paymentsDetailServicesGET(req.swagger.params, res, next);
};

const rootGET = (req, res, next) => {
  Default.rootGET(req.swagger.params, res, next);
};

const servicesGET = (req, res, next) => {
  Default.servicesGET(req.swagger.params, res, next);
};

const usersChange_passwordPOST = (req, res, next) => {
  Default.usersChange_passwordPOST(req.swagger.params, res, next);
};

const validationAddressGET = (req, res, next) => {
  Default.validationAddressGET(req.swagger.params, res, next);
};

const validationContactsGET = (req, res, next) => {
  Default.validationContactsGET(req.swagger.params, res, next);
};

const validationMeter_readingGET = (req, res, next) => {
  Default.validationMeter_readingGET(req.swagger.params, res, next);
};

const validationPre_paymentGET = (req, res, next) => {
  Default.validationPre_paymentGET(req.swagger.params, res, next);
};

/* eslint-enable */

export default {
  addressAuto_completeGET,
  contractsCommodityAddressPOST,
  contractsCommodityBbpPOST,
  contractsCommodityEbillPOST,
  contractsCommodityGET,
  contractsServicesContract_numberGET,
  hdoRegionCodeGET,
  installationsGET,
  installationsIdConsumptionGET,
  installationsIdMetersPOST,
  partnersIdEmailPOST,
  partnersIdGET,
  partnersIdMobilePOST,
  paymentsDetailBbpBankGET,
  paymentsDetailBbpGET,
  paymentsDetailInvoicesBankGET,
  paymentsDetailInvoicesGET,
  paymentsDetailServicesGET,
  rootGET,
  servicesGET,
  usersChange_passwordPOST,
  validationAddressGET,
  validationContactsGET,
  validationMeter_readingGET,
  validationPre_paymentGET,
};
