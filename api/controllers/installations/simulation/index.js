import standardResponses from '../../common/standardResponses';

const response = {
  errorFieldNotPlausible: (field = 'high_tariff', placeholders = null) => (res) => {
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
  errorFieldNumberMin: (field = 'high_tariff', placeholders = null) => (res) => {
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
  errorFieldNumeric: (field = 'high_tariff', placeholders = null) => (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_NUMERIC',
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
  errorFieldRequired: (field = 'high_tariff', placeholders = null) => (res) => {
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
  errorFieldSimulationTryLater: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_FIELD_SIMULATION_TRY_LATER',
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
  errorSimulationNotPossibleForInstallation: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_SIMULATION_NOT_POSSIBLE_FOR_INSTALLATION',
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
  errorSimulationNotPossibleYet: (res) => {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_SIMULATION_NOT_POSSIBLE_YET',
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
  success: (res) => {
    res.writeHead(202, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(
      {
        simulation: {
          offsetting_advances: 100,
          payments_diff: 100,
          since: '2017-01-01',
          total_incl_tax: 200,
          until: '2017-02-01',
        },
      },
      null,
      2,
    ));
  },
};

const highCodes = { ...standardResponses };
highCodes['1000'] = response.errorFieldRequired('high_tariff');
highCodes['1001'] = response.errorFieldNotPlausible('high_tariff');
highCodes['1002'] = response.errorFieldNumberMin('high_tariff');
highCodes['1003'] = response.errorFieldNumeric('high_tariff');
highCodes['1004'] = response.errorFieldSimulationTryLater;
highCodes['1005'] = response.errorSimulationNotPossibleForInstallation;
highCodes['1006'] = response.errorSimulationNotPossibleYet;

const lowCodes = {};
lowCodes['1000'] = response.errorFieldRequired('low_tariff');
lowCodes['1001'] = response.errorFieldNotPlausible('low_tariff');
lowCodes['1002'] = response.errorFieldNumberMin('low_tariff');
lowCodes['1003'] = response.errorFieldNumeric('low_tariff');

const installationsSimulation = (args, res) => {
  const { high_tariff, low_tariff } = args.body.value;
  const highHandler = highCodes[high_tariff] || null;
  const lowHandler = lowCodes[low_tariff] || null;
  if (highHandler) {
    highHandler(res);
  } else if (lowHandler) {
    lowHandler(res);
  } else {
    response.success(res);
  }
};

export default installationsSimulation;
