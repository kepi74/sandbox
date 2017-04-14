var examples = {};
examples['application/json'] = {
  "payments": [
    {
      "online_payment": {
        "status": "NOT_POSSIBLE"
      },
      "amount": 300,
      "amount_paid": 300,
      "document_number": 402000003639,
      "status_description": "Uhrazeno",
      "status": "PAID",
      "print_id": 402000003639,
      "due_date": "2016-04-15T12:50:14+0200",
      "issue_date": "2016-04-26T12:50:14+0200",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_POSSIBLE"
      },
      "amount": 225,
      "amount_paid": 225,
      "document_number": 402000001513,
      "status_description": "Uhrazeno",
      "status": "PAID",
      "print_id": 402000001513,
      "due_date": "2015-04-15T12:50:14+0200",
      "issue_date": "2015-04-17T12:50:14+0200",
      "currency": "CZK"
    }
  ],
  "variable_symbol": "002900018370"
};

module.exports = function(args, res, next) {
  /**
   * Payment information
   *
   * contract_number Integer Service identifier.
   * from date Date from. (optional)
   * to date Date to, defaults to current date. (optional)
   * limit Integer Maximum number of objects returned. (optional)
   * returns inline_response_200_7
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

