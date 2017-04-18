import standardResponses from '../../common/standardResponses';

const response = {
  errorFieldRequired: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_REQUIRED',
            error_message: '',
            parameters: 'mobile',
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  errorFieldPattern: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_PATTERN',
            error_message: '',
            parameters: 'mobile',
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: report invalid validation for max length
  errorFieldNumberExactLength: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_NUMBER_EXACT_LENGTH',
            error_message: '',
            parameters: 'mobile',
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

const mobileCodes = { ...standardResponses };
mobileCodes['1000'] = response.errorFieldRequired;
mobileCodes['1001'] = response.errorFieldPattern;
mobileCodes['1002'] = response.errorFieldNumberExactLength;
mobileCodes['1003'] = response.errorEditInProgress;

const partnersMobile = (args, res) => {
  /**
   * Changes mobile number.
   *
   * id Integer Id of business partner.
   * body Body_2 New mobile number.
   * no response value expected for this operation
   **/
  const { mobile } = args.body.value;
  const handler = mobileCodes[mobile] || response.success;
  handler(res);
};

export default partnersMobile;
