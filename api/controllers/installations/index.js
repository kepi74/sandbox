var examples = {};
examples['application/json'] = {
  "installations": [
    {
      "id": 4500317250,
      "address": {
        "house_number": 1222,
        "city_part": "Budějovické Předměstí",
        "orientation_number": null,
        "zip_code": "397 01",
        "street": "Rokycanova",
        "addressId": "8a8657f4b82505d6f19ca8ff21a0ddce",
        "city": "Písek"
      },
      "segment": "ELECTRICITY",
      "pod_string": "859182400102646743_",
      "links": [
        {
          "rel": "invoices",
          "href": "/payments/detail/invoices?installation=4500317250"
        },
        {
          "rel": "prepayments",
          "href": "/payments/detail/bbp?installation=4500317250"
        },
        {
          "rel": "partner",
          "href": "/partners/5500091174"
        },
        {
          "rel": "contract",
          "href": "/contracts/commodity?pod=859182400102646743"
        },
        {
          "rel": "consumption",
          "href": "/installations/4500317250/consumption"
        },
        {
          "rel": "validate-meter-read",
          "href": "/validation/meter-reading?installation=4500317250"
        },
        {
          "rel": "single-outage",
          "href": "/outages?pod=859182400102646743"
        }
      ],
      "partner": 5500091174,
      "type": "CONSUMPTION",
      "pod": 859182400102646743,
      "consumption_place": 3500286344
    }
  ]
};

module.exports = function(args, res, next) {
  /**
   * Basic endpont for household information.
   *
   * returns inline_response_200_1
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

