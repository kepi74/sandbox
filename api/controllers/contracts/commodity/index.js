var examples = {};
examples['application/json'] = {
  "id": 9400112409,
  "segment": "ELECTRICITY",
  "product_line": "Variant",
  "product_deliveries": "Aku",
  "price_list": "Variant 24 Září 2015",
  "contact_address": {
    "addressId": "8a8657f4b82505d6f19ca8ff21a0ddce",
    "zip_code": "397 01",
    "city": "Písek",
    "city_part": "Budějovické Předměstí",
    "street": "Rokycanova",
    "house_number": 1222,
    "orientation_number": null
  },
  "technical_details": {
    "object_usage": null,
    "distribution_rate": "D26d",
    "tariff": "Dvoutarif",
    "phases_count": 3,
    "breaker": 50
  },
  "installation": {
    "id": 4500317250,
    "segment": "ELECTRICITY",
    "consumption_place": 3500286344,
    "type": "CONSUMPTION",
    "pod": 859182400102646743,
    "pod_string": "859182400102646743_",
    "address": {
      "addressId": "8a8657f4b82505d6f19ca8ff21a0ddce",
      "zip_code": "397 01",
      "city": "Písek",
      "city_part": "Budějovické Předměstí",
      "street": "Rokycanova",
      "house_number": 1222,
      "orientation_number": null
    }
  },
  "invoices": {
    "method": "BANK_TRANSFER",
    "bank": {
      "account_number": "000000-0394095013",
      "code_number": "0800",
      "country": "CZ"
    }
  },
  "prepayments": {
    "method": "BANK_TRANSFER",
    "bank": {
      "account_number": "000000-0394095013",
      "code_number": "0800",
      "country": "CZ"
    }
  },
  "links": [
    {
      "rel": "validate-address",
      "href": "/validation/address"
    },
    {
      "rel": "validate-prepayment",
      "href": "/validation/pre-payment?installation=4500317250"
    },
    {
      "rel": "validate-e-bill",
      "href": "/validation/ebill?installation=4500317250"
    },
    {
      "rel": "validate-simulation",
      "href": "/validation/simulation-check?installation=4500317250"
    },
    {
      "rel": "hdo",
      "href": "/hdo/ZAPAD/250"
    }
  ]
};

module.exports = function(args, res, next) {
  /**
   *
   * pod Integer Pod id (EAN/EIC).
   * returns Contract
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

