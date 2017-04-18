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
            parameters: 'email',
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
            parameters: 'email',
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  errorFieldEmail: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_EMAIL',
            error_message: '',
            parameters: 'email',
            placeholders: null,
          },
        ],
      },
      null,
      2,
    ));
  },
  // TODO: report invalid validation for max length
  errorFieldMaxLength: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_MAX_LENGTH',
            error_message: '',
            parameters: 'email',
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

const emailCodes = { ...standardResponses };
emailCodes['1000'] = response.errorFieldRequired;
emailCodes['1001'] = response.errorFieldPattern;
emailCodes['1002'] = response.errorFieldEmail;
emailCodes['1003'] = response.errorFieldMaxLength;
emailCodes['1004'] = response.errorEditInProgress;

const partnersEmail = (args, res) => {
  /**
   * Changes email address.
   *
   * id Integer Id of business partner.
   * body Body_1 New contact address.
   * no response value expected for this operation
   **/
  const { email } = args.body.value;
  const handler = emailCodes[email] || response.success;
  handler(res);
};

export default partnersEmail;
