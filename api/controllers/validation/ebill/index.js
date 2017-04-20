const examples = {};
examples['application/json'] = {
  links: [
    {
      rel: 'e-bill',
      href: '/contracts/commodity/ebill?installation=4500317250',
    },
  ],
  fields: [
    {
      default: 'jiri.rektorys@seznam.cz',
      name: 'email1',
      rules: [
        {
          operation: 'required',
          code: 'ERR_FIELD_REQUIRED',
        },
        {
          operation: 'email',
          pattern: '^[-a-zA-Z0-9~!$%^&*_=+}{\'?]+(\.[-a-zA-Z0-9~!$%^&*_=+}{\'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+[a-zA-Z][a-zA-Z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?',
          code: 'ERR_FIELD_EMAIL',
        },
        {
          operation: 'pattern',
          pattern: '^[^\s]{3,200}$',
          code: 'ERR_FIELD_PATTERN',
        },
      ],
    },
    {
      name: 'email2',
      rules: [
        {
          operation: 'email',
          pattern: '^[-a-zA-Z0-9~!$%^&*_=+}{\'?]+(\.[-a-zA-Z0-9~!$%^&*_=+}{\'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+[a-zA-Z][a-zA-Z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?',
          code: 'ERR_FIELD_EMAIL',
        },
        {
          operation: 'pattern',
          pattern: '^[^\s]{3,200}$',
          code: 'ERR_FIELD_PATTERN',
        },
      ],
    },
    {
      name: 'email3',
      rules: [
        {
          operation: 'email',
          pattern: '^[-a-zA-Z0-9~!$%^&*_=+}{\'?]+(\.[-a-zA-Z0-9~!$%^&*_=+}{\'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+[a-zA-Z][a-zA-Z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?',
          code: 'ERR_FIELD_EMAIL',
        },
        {
          operation: 'pattern',
          pattern: '^[^\s]{3,200}$',
          code: 'ERR_FIELD_PATTERN',
        }
      ]
    },
    {
      name: 'email4',
      rules: [
        {
          operation: 'email',
          pattern: '^[-a-zA-Z0-9~!$%^&*_=+}{\'?]+(\.[-a-zA-Z0-9~!$%^&*_=+}{\'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+[a-zA-Z][a-zA-Z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?',
          code: 'ERR_FIELD_EMAIL',
        },
        {
          operation: 'pattern',
          pattern: '^[^\s]{3,200}$',
          code: 'ERR_FIELD_PATTERN',
        }
      ]
    },
    {
      name: 'campaign_date',
      rules: {
        operation: 'date',
        pattern: '^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$',
        code: 'ERR_FIELD_DATE',
      },
    },
  ],
};

const validationEbill = (args, res) => {
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
};

export default validationEbill;
