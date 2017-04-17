const examples = {};
examples['application/json'] = {
  firstname: 'Jiří',
  surname: 'Rektorys',
  email: '123@a.c',
  mobile: 731410853,
  telephone: 731410854,
  address: {
    zip_code: '397 01',
    city: 'Písek',
    city_part: 'Budějovické Předměstí',
    street: 'Rokycanova',
    house_number: 1222,
    orientation_number: null,
    addressId: '8a8657f4b82505d6f19ca8ff21a0ddce',
  },
  id: 5500091174,
};

module.exports = function (args, res, next) {
  /**
   *
   * id Integer Id of business partner.
   * returns Partner
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

