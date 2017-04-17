const examples = {};
examples['application/json'] = {
  consumption: [
    {
      period: {
        from: '2007-12-08 00:00:00',
        to: '2009-01-02 00:00:00',
      },
      high_tariff: 3830,
      low_tariff: 21613,
      unit: 'KWh',
    },
    {
      period: {
        from: '2009-01-03 00:00:00',
        to: '2009-12-29 00:00:00',
      },
      high_tariff: 3159,
      low_tariff: 16315,
      unit: 'KWh',
    },
    {
      period: {
        from: '2009-12-30 00:00:00',
        to: '2010-12-07 00:00:00',
      },
      high_tariff: 2520,
      low_tariff: 16807,
      unit: 'KWh',
    },
    {
      period: {
        from: '2010-12-08 00:00:00',
        to: '2011-12-22 00:00:00',
      },
      high_tariff: 2471,
      low_tariff: 14708,
      unit: 'KWh',
    },
    {
      period: {
        from: '2011-12-23 00:00:00',
        to: '2013-01-09 00:00:00',
      },
      high_tariff: 2577,
      low_tariff: 14598,
      unit: 'KWh',
    },
    {
      period: {
        from: '2013-01-10 00:00:00',
        to: '2014-01-06 00:00:00',
      },
      high_tariff: 2492,
      low_tariff: 13412,
      unit: 'KWh',
    },
    {
      period: {
        from: '2014-01-07 00:00:00',
        to: '2015-01-07 00:00:00',
      },
      high_tariff: 2369,
      low_tariff: 12003,
      unit: 'KWh',
    },
    {
      period: {
        from: '2015-01-08 00:00:00',
        to: '2015-09-25 00:00:00',
      },
      high_tariff: 1504,
      low_tariff: 8284,
      unit: 'KWh',
    },
    {
      period: {
        from: '2015-09-26 00:00:00',
        to: '2015-12-16 00:00:00',
      },
      high_tariff: 504,
      low_tariff: 2771,
      unit: 'KWh',
    },
    {
      period: {
        from: '2015-12-17 00:00:00',
        to: '2016-12-16 00:00:00',
      },
      high_tariff: 2219,
      low_tariff: 13018,
      unit: 'KWh',
    },
  ],
};

const consumption = (args, res) => {
  /**
   * Returns consumption data for given installation. Electricity values are separated
   * into high ('high_tariff') and low tariff ('low_tariff'). Low tariff is ommited
   * if installation contract is for single tariff only. Gass consumption uses only
   * one tariff ('tariff'). By default consumption data are limited to start
   * and end of the contract.
   *
   * id Integer Installation identifier
   * from String  (optional)
   * to String  (optional)
   * returns inline_response_200_6
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

export default consumption;
