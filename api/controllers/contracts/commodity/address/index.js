import standardResponses from '../../../common/standardResponses';

const response = {
  errorEditInProgress: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_EDIT_IN_PROGRESS',
            error_message: 'Cannot request another change request. Request already queued today',
            parameters: [],
            placeholders: [],
          },
        ],
      },
      null,
      2,
    ));
  },
  errorFieldPattern: (field = 'zip_code') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_PATTERN',
            error_message: '',
            parameters: field,
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  errorFieldRequired: (field = 'zip_code') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_REQUIRED',
            error_message: 'Missing mandatory param',
            parameters: field,
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: Report invalid funkcionality of endpoint ERR_FIELD_LENGTH
  errorFieldLength: (field = 'house_number') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_LENGTH',
            error_message: '',
            parameters: field,
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: Report invalid funkcionality of endpoint ERR_NOT_FOUND_PSC
  errorNotFoundPSC: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_NOT_FOUND_PSC',
            error_message: 'Missing mandatory param',
            parameters: 'zip_code',
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  errorUserInput: (field = 'zip_code') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_USER_INPUT',
            error_message: 'Invalid ZIP code',
            parameters: field,
            placeholders: [],
          },
        ],
      },
      null,
      2,
    ));
  },
  success: (res) => {
    res.writeHead(202, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {},
      null,
      2,
    ));
  },
};

const zipCodes = { ...standardResponses };
zipCodes['1000'] = response.errorFieldRequired('zip_code');
zipCodes['1001'] = response.errorFieldPattern('zip_code');
zipCodes['1002'] = response.errorUserInput('zip_code');
zipCodes['1003'] = response.errorNotFoundPSC;

const houseNumberCodes = { ...standardResponses };
houseNumberCodes['1000'] = response.errorFieldRequired('house_number');
houseNumberCodes['1001'] = response.errorFieldLength('house_number');
houseNumberCodes['1002'] = response.errorEditInProgress;

const orientationNumberCodes = { ...standardResponses };
orientationNumberCodes['1000'] = response.errorFieldLength('orientation_number');

const contractsCommodityAddress = (args, res) => {
  /**
   * Changes the contact address.
   *
   * installation Integer Installation id.
   * body Address New contact address.
   * no response value expected for this operation
   **/
  const { zip_code, house_number, orientation_number } = args.body.value;
  const orientationNumberHandler = orientationNumberCodes[orientation_number] || null;
  const houseNumberHandler = houseNumberCodes[house_number] || null;
  const zipHandler = zipCodes[zip_code] || null;

  if (orientationNumberHandler) {
    orientationNumberHandler(res);
  } else if (houseNumberHandler) {
    houseNumberHandler(res);
  } else if (zipHandler) {
    zipHandler(res);
  } else {
    response.success(res);
  }
};

export default contractsCommodityAddress;
