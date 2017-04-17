const examples = {};
examples['application/json'] = {
  payments: [
    {
      online_payment: {
        status: 'NOT_POSSIBLE',
      },
      amount: -9206,
      amount_paid: 9206,
      document_number: 9111435438,
      status_description: 'Přeplatek',
      status: 'OVERPAYMENT',
      due_date: '2017-02-02T00:00:00+0100',
      links: [
        {
          rel: 'download-invoice',
          href: 'https://login-test.eon.cz/api/ece/selfcare/mo/doc/v1/resource-download?installation=4500317250&documentNumber=009111435438',
        },
      ],
      issue_date: '2017-01-19T00:00:00+0100',
      period: {
        to: '2016-12-16T22:59:59+0000',
        from: '2015-12-16T23:00:00+0000',
      },
      currency: 'CZK',
    },
    {
      online_payment: {
        status: 'NOT_POSSIBLE',
      },
      amount: -13076,
      amount_paid: 13076,
      document_number: 9107706498,
      status_description: 'Přeplatek',
      status: 'OVERPAYMENT',
      due_date: '2016-02-11T00:00:00+0100',
      links: [
        {
          rel: 'download-invoice',
          href: 'https://login-test.eon.cz/api/ece/selfcare/mo/doc/v1/resource-download?installation=4500317250&documentNumber=009107706498',
        },
      ],
      issue_date: '2016-01-28T00:00:00+0100',
      period: {
        to: '2015-12-16T22:59:59+0000',
        from: '2015-01-07T23:00:00+0000',
      },
      currency: 'CZK',
    },
    {
      online_payment: {
        status: 'NOT_POSSIBLE',
      },
      amount: -8324,
      amount_paid: 8324,
      document_number: 9107254936,
      status_description: 'Přeplatek',
      status: 'OVERPAYMENT',
      due_date: '2015-02-12T00:00:00+0100',
      links: [
        {
          rel: 'download-invoice',
          href: 'https://login-test.eon.cz/api/ece/selfcare/mo/doc/v1/resource-download?installation=4500317250&documentNumber=009107254936',
        },
      ],
      issue_date: '2015-01-29T00:00:00+0100',
      period: {
        to: '2015-01-07T22:59:59+0000',
        from: '2014-01-06T23:00:00+0000',
      },
      currency: 'CZK',
    },
    {
      online_payment: {
        status: 'NOT_POSSIBLE',
      },
      amount: -669,
      amount_paid: 669,
      document_number: 9102216957,
      status_description: 'Přeplatek',
      status: 'OVERPAYMENT',
      due_date: '2014-02-13T00:00:00+0100',
      links: [
        {
          rel: 'download-invoice',
          href: 'https://login-test.eon.cz/api/ece/selfcare/mo/doc/v1/resource-download?installation=4500317250&documentNumber=009102216957',
        },
      ],
      issue_date: '2014-01-30T00:00:00+0100',
      period: {
        to: '2014-01-06T22:59:59+0000',
        from: '2013-01-09T23:00:00+0000',
      },
      currency: 'CZK',
    },
    {
      online_payment: {
        status: 'NOT_POSSIBLE',
      },
      amount: -405,
      amount_paid: 405,
      document_number: 9100489308,
      status_description: 'Přeplatek',
      status: 'OVERPAYMENT',
      due_date: '2013-02-13T00:00:00+0100',
      links: [
        {
          rel: 'download-invoice',
          href: 'https://login-test.eon.cz/api/ece/selfcare/mo/doc/v1/resource-download?installation=4500317250&documentNumber=009100489308',
        },
      ],
      issue_date: '2013-01-30T00:00:00+0100',
      period: {
        to: '2013-01-09T22:59:59+0000',
        from: '2011-12-22T23:00:00+0000',
      },
      currency: 'CZK',
    },
    {
      online_payment: {
        status: 'NOT_POSSIBLE',
      },
      amount: -1507,
      amount_paid: 1507,
      document_number: 9100163504,
      status_description: 'Přeplatek',
      status: 'OVERPAYMENT',
      due_date: '2012-02-09T00:00:00+0100',
      links: [
        {
          rel: 'download-invoice',
          href: 'https://login-test.eon.cz/api/ece/selfcare/mo/doc/v1/resource-download?installation=4500317250&documentNumber=009100163504',
        },
      ],
      issue_date: '2012-01-26T00:00:00+0100',
      period: {
        to: '2011-12-22T22:59:59+0000',
        from: '2010-12-07T23:00:00+0000',
      },
      currency: 'CZK',
    },
  ],
  links: [
    {
      rel: 'bank-for-invoices',
      href: '/payments/detail/invoices/bank?variable_symbol=006350022027',
    },
    {
      rel: 'validate-e-bill',
      href: '/validation/ebill?installation=4500317250',
    },
  ],
};

const paymentsDetailInvoices = (args, res) => {
  /**
   * Payment information.
   *
   * installation Integer Installation id.
   * from date Date from. (optional)
   * to date Date to, defaults to current date. (optional)
   * limit Integer Maximum number of objects returned. (optional)
   * returns inline_response_200_2
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

export default paymentsDetailInvoices;
