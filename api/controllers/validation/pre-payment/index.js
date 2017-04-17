const examples = {};
examples['application/json'] = {
  current_value: '3900.00 ',
  in_progress: false,
  links: [
    {
      rel: 'change-prepayment',
      href: '/contracts/commodity/bbp?installation=4500317250',
    },
  ],
  fields: [
    {
      name: 'value',
      rules: [
        {
          operation: 'max_string_length',
          args: 5,
        },
        {
          operation: 'pattern',
          args: '^[1-9]{1}[0-9]{1,3}0$',
        },
        {
          operation: 'min_value',
          args: 400,
        },
      ],
    },
    {
      default: '2017-06-01',
      name: 'change_from',
      rules: {
        operation: 'list',
        args: [
          '2017-06-01',
          '2017-07-01',
          '2017-08-01',
          '2017-09-01',
          '2017-10-01',
          '2017-11-01',
          '2017-12-01',
        ],
      },
    },
  ],
};

module.exports = function (args, res, next) {
  /**
   * Get pre-payment validation rules.
   *
   * returns inline_response_200_11
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

