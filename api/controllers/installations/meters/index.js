import standardResponses from '../../common/standardResponses';

const response = {
  errorFieldRequired: (field = 'date', placeholders = null) => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_REQUIRED',
            error_message: '',
            parameters: field,
            placeholders,
          },
        ],
      },
      null,
      2,
    ));
  },
  errorFieldDate: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_DATE',
            error_message: '',
            parameters: 'date',
            placeholders: ['2017-04-03', '2017-04-18'],
          },
        ],
      },
      null,
      2,
    ));
  },
  errorFieldDateInRange: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_DATE_IN_RANGE',
            error_message: '',
            parameters: 'date',
            placeholders: ['2017-04-03', '2017-04-18'],
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: not implemented on API?
  errorFieldNumberNoZero: (field = 'high_tariff', placeholders = '19401') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_NUMBER_NO_ZERO',
            error_message: '',
            parameters: field,
            placeholders,
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: not implemented on API?
  errorFieldNumber: (field = 'high_tariff', placeholders = '19401') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_NUMBER',
            error_message: '',
            parameters: field,
            placeholders,
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: not implemented on API?
  errorFieldNumberMin: (field = 'high_tariff', placeholders = '19401') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_NUMBER_MIN',
            error_message: '',
            parameters: field,
            placeholders,
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: not implemented on API?
  errorFieldNumberLength: (field = 'high_tariff') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_NUMBER_LENGTH',
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
  // TODO: not implemented on API?
  errorFieldNumberNotPlausible: (field = 'high_tariff', placeholders = '19401') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_NOT_PLAUSIBLE',
            error_message: '',
            parameters: field,
            placeholders,
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: not implemented on API?
  errorReadingError: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_READING_ERROR',
            error_message: '',
            parameters: null,
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  errorInputLow: (field = 'high_tariff', placeholders = '21721') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_INPUT_LOW',
            error_message: '',
            parameters: field,
            placeholders,
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

const highCodes = { ...standardResponses };
highCodes['1000'] = response.errorFieldRequired('date', ['2017-04-03', '2017-04-18']);
highCodes['1001'] = response.errorFieldRequired('high_tariff', '19401');
highCodes['1002'] = response.errorFieldDate;
highCodes['1003'] = response.errorFieldDateInRange;
highCodes['1004'] = response.errorFieldNumberNoZero('high_tariff', '19401');
highCodes['1005'] = response.errorFieldNumber('high_tariff', '19401');
highCodes['1006'] = response.errorFieldNumberMin('high_tariff', '19401');
highCodes['1007'] = response.errorFieldNumberLength('high_tariff', '19401');
highCodes['1008'] = response.errorFieldNumberNotPlausible('high_tariff', '19401');
highCodes['1009'] = response.errorReadingError;
highCodes['1010'] = response.errorInputLow('high_tariff', '21721');

const lowCodes = {};
lowCodes['1000'] = response.errorFieldRequired('low_tariff', '108779');
lowCodes['1001'] = response.errorFieldNumberNoZero('low_tariff', '108779');
lowCodes['1002'] = response.errorFieldNumber('low_tariff', '108779');
lowCodes['1003'] = response.errorFieldNumberMin('low_tariff', '108779');
lowCodes['1004'] = response.errorFieldNumberLength('low_tariff', '108779');
lowCodes['1005'] = response.errorFieldNotPlausible('low_tariff', '108779');
lowCodes['1006'] = response.errorInputLow('low_tariff', '122223');

const installationsMeters = (args, res) => {
  /**
   * Submit meter read.
   *
   * serial_number Integer Meter id.
   * id Integer Installation identifier
   * body Body_5 Meter read values.
   * no response value expected for this operation
   **/
  const { high_tariff, low_tariff } = args.body.value;
  const highHandler = highCodes[high_tariff] || null;
  const lowHandler = lowCodes[low_tariff] || null;
  if (highHandler) {
    highHandler(res);
  } else if (lowHandler) {
    lowHandler(res);
  } else {
    response.succes(res);
  }
};

export default installationsMeters;
