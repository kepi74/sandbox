var examples = {};
examples['application/json'] = {
  "links": [
    {
      "rel": "submit-meter-read",
      "href": "/installations/4500317250/meters"
    }
  ],
  "meter_number": 7212483,
  "last_meter_reading": {
    "low_tariff": 108778,
    "date": "2016-12-07",
    "units": "kWh",
    "high_tariff": 19400
  },
  "fields": [
    {
      "default": "2017-04-12",
      "name": "date",
      "rules": [
        {
          "operation": "required",
          "code": "ERR_FIELD_REQUIRED"
        },
        {
          "operation": "date",
          "pattern": "^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$",
          "code": "ERR_FIELD_DATE"
        },
        {
          "operation": "date_in_range",
          "args": [
            "2017-03-28",
            "2017-04-12"
          ],
          "code": "ERR_FIELD_DATE_IN_RANGE"
        }
      ]
    },
    {
      "default": 19401,
      "name": "high_tariff",
      "rules": [
        {
          "operation": "required",
          "code": "ERR_FIELD_REQUIRED"
        },
        {
          "operation": "numeric",
          "args": [
            19401,
            null,
            999999
          ],
          "code": "ERR_FIELD_NUMERIC"
        }
      ]
    },
    {
      "default": 108779,
      "name": "low_tariff",
      "rules": [
        {
          "operation": "required",
          "code": "ERR_FIELD_REQUIRED"
        },
        {
          "operation": "numeric",
          "args": [
            108779,
            null,
            999999
          ],
          "code": "ERR_FIELD_NUMERIC"
        }
      ]
    }
  ]
};

module.exports = function(args, res, next) {
  /**
   * Get meter reading validation rules.
   *
   * returns inline_response_200_12
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

