var examples = {};
examples['application/json'] = {
  "payments": [
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "Datum splatnosti 15.1.2018",
      "status": "UNPAID",
      "due_date": "2018-01-15T00:00:00+0100",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "Datum splatnosti 15.12.2017",
      "status": "UNPAID",
      "due_date": "2017-12-15T00:00:00+0100",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "Datum splatnosti 15.11.2017",
      "status": "UNPAID",
      "due_date": "2017-11-15T00:00:00+0100",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "Datum splatnosti 16.10.2017",
      "status": "UNPAID",
      "due_date": "2017-10-16T00:00:00+0200",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "Datum splatnosti 15.9.2017",
      "status": "UNPAID",
      "due_date": "2017-09-15T00:00:00+0200",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "Datum splatnosti 15.8.2017",
      "status": "UNPAID",
      "due_date": "2017-08-15T00:00:00+0200",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "Datum splatnosti 17.7.2017",
      "status": "UNPAID",
      "due_date": "2017-07-17T00:00:00+0200",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "Datum splatnosti 15.6.2017",
      "status": "UNPAID",
      "due_date": "2017-06-15T00:00:00+0200",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "Datum splatnosti 15.5.2017",
      "status": "UNPAID",
      "due_date": "2017-05-15T00:00:00+0200",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "Platba za 7 dní",
      "status": "UNPAID_UPCOMING",
      "due_date": "2017-04-18T00:00:00+0200",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "NOT_ALLOWED"
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "27 dnů po splatnosti",
      "status": "UNPAID_OVERDUE",
      "due_date": "2017-03-15T00:00:00+0100",
      "currency": "CZK"
    },
    {
      "online_payment": {
        "status": "READY",
        "links": [
          {
            "rel": "online-payment",
            "href": "https://platby-test.eon.cz/payment/init?DocumentId=700010223136&DueDate=2017-02-15&PaymentType=BBP&Amount=3900&Currency=CZK&genTime=0.75166700+1491903941&integrity=b5bd36720ee77f1c61419759aad1939b&source=e24&Email="
          }
        ]
      },
      "amount": 3900,
      "amount_paid": 0,
      "status_description": "55 dnů po splatnosti",
      "status": "UNPAID_OVERDUE",
      "due_date": "2017-02-15T00:00:00+0100",
      "currency": "CZK"
    }
  ],
  "links": [
    {
      "rel": "bank-for-prepayments",
      "href": "/payments/detail/bbp/bank?variable_symbol=006350022027"
    }
  ]
};

module.exports = function(args, res, next) {
  /**
   * Pre-payment information. Contains list of pre-payments. If user payment type supports online payment, link to bank detail and variable symbol is provided in the response. 
   *
   * installation Integer Installation id.
   * from date Date from. (optional)
   * to date Date to, defaults to current date. (optional)
   * limit Integer Maximum number of objects returned. (optional)
   * returns inline_response_200_4
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

