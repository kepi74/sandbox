const examples = {};
examples['application/json'] = {
  contract_from: '2015-05-01',
  validity: {
    from: '2015-05-01',
    to: '2016-04-30',
  },
  payment_periodicity: 'YEARLY',
  price: 225,
  payment_method: 'BANK_TRANSFER',
  technical_name: 'SERVIS_PLUS',
  currency: 'CZK',
  prolongation: true,
  contact_address: {
    zip_code: '397 01',
    city: 'Písek',
    city_part: 'Budějovické Předměstí',
    street: 'Rokycanova',
    house_number: 1222,
    orientation_number: null,
  },
};

module.exports = function (args, res, next) {
  /**
   *
   * contract_number Integer Contract identifier.
   * returns Service-contract
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

