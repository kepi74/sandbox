const examples = {};
examples['application/json'] = {
  variable_symbol: '006350022027',
  eon_bank: {
    account_number: '19-17608231',
    code_number: '0100',
    country: 'CZ',
  },
};

const paymentsDetailBbpBank = (args, res) => {
  /**
   * Bank information
   *
   * variable_symbol Integer Contract account id.
   * returns inline_response_200_3
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

export default paymentsDetailBbpBank;
