var CODES_ERR_EDIT_IN_PROGRESS = '0001';

var examples = {
  errEditInProgress: {
    errors: [
      {
        code: "ERR_EDIT_IN_PROGRESS",
        error_message: "Cannot request another change request. Request already queued today",
        parameters: [],
        placeholders: []
      }
    ]
  }
};

function(args, res, next) {
  /**
   * Changes the contact address.
   *
   * installation Integer Installation id.
   * body Address New contact address.
   * no response value expected for this operation
   **/
  res.setHeader('Content-Type', 'application/json');
  switch (args.house_number.value) {
    case CODES_ERR_EDIT_IN_PROGRESS:
      res.end(JSON.stringify(examples.errEditInProgress || {}, null, 2));
  }
  res.end();
}

