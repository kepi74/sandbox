/* eslint-disable camelcase */

export { default as addressAuto_completeGET } from './address/auto-complete';

export { default as contractsCommodityAddressPOST } from './contracts/commodity/address';
// TODO: success
// TODO: errors
export const contractsCommodityBbpPOST = (args, res) => {
  /**
   * Changes pre-payment amount.
   *
   * installation Integer Installation id.
   * body Body_3 New pre-payment amount and date from which it should be changed.
   * no response value expected for this operation
   **/
  res.end();
};

// TODO: success
// TODO: errors
export const contractsCommodityEbillPOST = (args, res) => {
  /**
   * Ebill activation.
   *
   * installation Integer Installation id.
   * body Body_4 Ebill email address.
   * no response value expected for this operation
   **/
  res.end();
};

export { default as contractsCommodityGET } from './contracts/commodity';

export { default as contractsServicesContract_numberGET } from './contracts/services';

// TODO: response
export const hdoRegionCodeGET = (args, res) => {
  /**
   * Get HDO times
   *
   * region String
   * code String
   * date String  (optional)
   * returns Hdo
   **/
  const examples = {};
  examples['application/json'] = {
    code: 1.3579000000000001069366817318950779736042022705078125,
    validity: {
      from: '2000-01-23T04:56:07.000+00:00',
      to: '2000-01-23T04:56:07.000+00:00',
    },
    region: 'aeiou',
    command: 'aeiou',
    tariffs: [{
      times: [{
        ranges: [''],
        days: 'aeiou',
      }],
      name: 'aeiou',
    }],
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

export { default as installationsGET } from './installations';

export { default as installationsIdConsumptionGET } from './installations/consumption';

// TODO: success
// TODO: errors
export const installationsIdMetersPOST = (args, res) => {
  /**
   * Submit meter read.
   *
   * serial_number Integer Meter id.
   * id Integer Installation identifier
   * body Body_5 Meter read values.
   * no response value expected for this operation
   **/
  res.end();
};

// TODO: success
// TODO: errors
export const partnersIdEmailPOST = (args, res) => {
  /**
   * Changes email address.
   *
   * id Integer Id of business partner.
   * body Body_1 New contact address.
   * no response value expected for this operation
   **/
  res.end();
};

export { default as partnersIdGET } from './partners';

// TODO: success
// TODO: errors
export const partnersIdMobilePOST = (args, res) => {
  /**
   * Changes mobile number.
   *
   * id Integer Id of business partner.
   * body Body_2 New mobile number.
   * no response value expected for this operation
   **/
  res.end();
};

exports.paymentsDetailBbpBankGET = require('./payments/detail/bbp/bank');

exports.paymentsDetailBbpGET = require('./payments/detail/bbp');

// TODO: response
exports.paymentsDetailInvoicesBankGET = (args, res) => {
  /**
   * Bank information
   *
   * variable_symbol Integer Contract account id.
   * returns inline_response_200_3
   **/
  const examples = {};
  examples['application/json'] = '{\n   "variable_symbol": "006360111111",\n   "eon_bank":    {\n      "account_number": "19-17608231",\n      "code_number": "0100",\n      "country": "CZ"\n   }\n}';
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

exports.paymentsDetailInvoicesGET = require('./payments/detail/invoices');

exports.paymentsDetailServicesGET = require('./payments/detail/services');

exports.rootGET = require('./root');

exports.servicesGET = require('./services');

// TODO: success
// TODO: errors
exports.usersChange_passwordPOST = (args, res) => {
  /**
   * Changes user password.
   *
   * body Body New contact address.
   * no response value expected for this operation
   **/
  res.end();
};

// TODO: response
exports.validationAddressGET = (args, res) => {
  /**
   * Get address validation rules.
   *
   * returns inline_response_200_9
   **/
  const examples = {};
  examples['application/json'] = {
    fields: [{
      name: 'aeiou',
      rules: [{
        args: '{}',
        operation: 'aeiou',
      }],
    }],
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

// TODO: response
exports.validationContactsGET = (args, res) => {
  /**
   * Get contacts validation rules.
   *
   * returns inline_response_200_10
   **/
  const examples = {};
  examples['application/json'] = {
    fields: [{
      name: 'aeiou',
      rules: [{
        args: '{}',
        operation: 'aeiou',
      }],
    }],
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

exports.validationMeter_readingGET = require('./validation/meter-reading');

exports.validationPre_paymentGET = require('./validation/pre-payment');
