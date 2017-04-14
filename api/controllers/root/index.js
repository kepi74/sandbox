  var examples = {};
  examples['application/json'] = {
  "links": [
    {
      "rel": "installations",
      "href": "/installations"
    },
    {
      "rel": "services",
      "href": "/services"
    },
    {
      "rel": "auto-complete",
      "href": "/address/auto-complete"
    },
    {
      "rel": "change-password",
      "href": "/users/change-password"
    },
    {
      "rel": "retail-offices",
      "href": "/contacts/retail-offices"
    },
    {
      "rel": "eon-contacts",
      "href": "/contacts/addresses"
    },
    {
      "rel": "error-messages",
      "href": "/error-messages/list?language=CZE"
    },
    {
      "rel": "outages",
      "href": "/outages"
    }
  ]
};

module.exports = function(args, res, next) {
  /**
   * Root API.
   *
   * returns inline_response_200
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

