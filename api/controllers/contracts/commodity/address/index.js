const response = {
  errEditInProgress: {
    statusCode: 400,
    response: {
      errors: [
        {
          code: 'ERR_EDIT_IN_PROGRESS',
          error_message: 'Cannot request another change request. Request already queued today',
          parameters: [],
          placeholders: [],
        },
      ],
    },
  },
  errorFieldPattern: {
    statusCode: 400,
    response: {
      errors: [
        {
          code: 'ERR_FIELD_PATTERN',
          error_message: '',
          parameters: 'zip_code',
          placeholders: null,
        },
      ],
    },
  },
  errorFieldRequired: {
    statusCode: 400,
    response: {
      errors: [
        {
          code: 'ERR_FIELD_REQUIRED',
          error_message: 'Missing mandatory param',
          parameters: 'zip_code',
          placeholders: null,
        },
      ],
    },
  },
  // TODO: Report invalid funkcionality of endpoint ERR_FIELD_LENGTH
  errorFieldLength: {
    response: {
      errors: [
        {
          code: 'ERR_FIELD_LENGTH',
          error_message: '',
          parameters: '',
          placeholders: null,
        },
      ],
    },
  },
  // TODO: Report invalid funkcionality of endpoint ERR_NOT_FOUND_PSC
  errorNotFoundPSC: {
    response: {
      errors: [
        {
          code: 'ERR_NOT_FOUND_PSC',
          error_message: 'Missing mandatory param',
          parameters: 'zip_code',
          placeholders: null,
        },
      ],
    },
  },
  errorUserInput: {
    statusCode: 400,
    response: {
      errors: [
        {
          code: 'ERR_USER_INPUT',
          error_message: 'Invalid ZIP code',
          parameters: 'zip_code',
          placeholders: [],
        },
      ],
    },
  },
  success: {
    statusCode: 202,
    response: {},
  },
};

const zipCodes = {};
zipCodes['00000'] = '500';
zipCodes['00001'] = '404';
zipCodes['00003'] = '403';
zipCodes['10000'] = response.errorNotFoundPSC;
zipCodes['10001'] = response.errorUserInput;
zipCodes['10002'] = response.errorNotFoundPSC;
zipCodes['10003'] = response.errorFieldRequired;
zipCodes['10004'] = response.errorFieldPattern;

const houseNumberCodes = {};

const contractsCommodityAddress = (args, res) => {
  /**
   * Changes the contact address.
   *
   * installation Integer Installation id.
   * body Address New contact address.
   * no response value expected for this operation
   **/
  res.setHeader('Content-Type', 'application/json');
  res.end();
};

export default contractsCommodityAddress;
