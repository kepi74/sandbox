const examples = {};
examples['application/json'] = {
  fields: [
    {
      name: 'high_tariff',
      rules: [
        {
          operation: 'required',
          code: 'ERR_FIELD_REQUIRED',
        },
        {
          operation: 'numeric',
          code: 'ERR_FIELD_NUMERIC',
          args: [
            19401,
            null,
          ],
        },
      ],
    },
    {
      name: 'low_tariff',
      rules: [
        {
          operation: 'required',
          code: 'ERR_FIELD_REQUIRED',
        },
        {
          operation: 'numeric',
          code: 'ERR_FIELD_NUMERIC',
          args: [
            108779,
            null,
          ],
        },
      ],
    },
  ],
  last_meter_reading: {
    high_tariff: 19400,
    date: '2016-12-07',
    low_tariff: 108778,
    units: 'kWh',
  },
  meter_number: 7212483,
};

const validationSimulationCheck = (args, res) => {
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

export default validationSimulationCheck;
