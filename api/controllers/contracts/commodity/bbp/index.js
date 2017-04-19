import standardResponses from '../../../common/standardResponses';

const response = {
  errorFieldRequired: (field = 'value') => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_REQUIRED',
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
  errorFieldDate: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_DATE',
            error_message: '',
            parameters: 'change_from',
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  errorFieldIsNaturalNoZero: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_IS_NATURAL_NO_ZERO',
            error_message: '',
            parameters: 'value',
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  errorUserInput: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_USER_INPUT',
            error_message: 'Invalid prepayments change start date \'2016-01-01\'',
            parameters: 'change_from',
            placeholders: [
              '2017-06-01',
              '2017-07-01',
              '2017-08-01',
              '2017-09-01',
              '2017-10-01',
              '2017-11-01',
              '2017-12-01',
            ],
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: is implemented?
  errorFieldMaxLength: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_MAX_LENGTH',
            error_message: '',
            parameters: 'value',
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: is implemented?
  errorFieldNumber: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_NUMBER',
            error_message: '',
            parameters: 'value',
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: is implemented?
  errorFieldNumberMin: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_NUMBER',
            error_message: '',
            parameters: 'value',
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
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
  success: (res) => {
    res.writeHead(202, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {},
      null,
      2,
    ));
  },
};

const valueCodes = { ...standardResponses };
valueCodes['1000'] = response.errorFieldRequired('value');
valueCodes['1001'] = response.errorFieldRequired('change_from');
valueCodes['1002'] = response.errorFieldDate;
valueCodes['1003'] = response.errorFieldIsNaturalNoZero;
valueCodes['1004'] = response.errorUserInput;
valueCodes['1005'] = response.errorFieldMaxLength;
valueCodes['1006'] = response.errorFieldNumber;
valueCodes['1007'] = response.errorFieldNumberMin;
valueCodes['1008'] = response.errorEditInProgress;

const contractsCommodityBbp = (args, res) => {
  /**
   * Changes pre-payment amount.
   *
   * installation Integer Installation id.
   * body Body_3 New pre-payment amount and date from which it should be changed.
   * no response value expected for this operation
   **/
  const { value } = args.body.value;
  const handler = valueCodes[value] || response.success;
  handler(res);
};

export default contractsCommodityBbp;
