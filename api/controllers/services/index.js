var examples = {};
examples['application/json'] = {
  "services": [
    {
      "id": "fa234d79d3da517105c1cf808887caf7",
      "name": "Tesco Clubcard ",
      "state": "ACTIVE",
      "links": [
        {
          "rel": "partner",
          "href": "/partners/5500091174"
        },
        {
          "rel": "validate-callback",
          "href": "/validation/callback?code=TESCO"
        }
      ],
      "partner": {
        "id": 5500091174,
        "surname": "Rektorys",
        "firstname": "Jiří"
      },
      "code": "TESCO",
      "type": "FREE"
    },
    {
      "id": "2c383296ecaabb104b2420c37b85780d",
      "name": "E.ON Servis kotlů",
      "state": "INACTIVE",
      "links": [
        {
          "rel": "partner",
          "href": "/partners/5500091174"
        },
        {
          "rel": "validate-callback",
          "href": "/validation/callback?code=SERVIS_KOTLU"
        }
      ],
      "partner": {
        "id": 5500091174,
        "surname": "Rektorys",
        "firstname": "Jiří"
      },
      "code": "SERVIS_KOTLU",
      "type": "PAID"
    },
    {
      "id": "693789dfa3ed30f0d8e2b45c20fcfeba",
      "name": "E.ON Zdraví",
      "state": "INACTIVE",
      "links": [
        {
          "rel": "partner",
          "href": "/partners/5500091174"
        },
        {
          "rel": "validate-callback",
          "href": "/validation/callback?code=ZDRAVI"
        }
      ],
      "partner": {
        "id": 5500091174,
        "surname": "Rektorys",
        "firstname": "Jiří"
      },
      "code": "ZDRAVI",
      "type": "PAID"
    },
    {
      "id": "0456e30d07d3d1baae26f32fb407ea4f",
      "pod_string": "859182400102646743_",
      "name": "E.ON Servis+",
      "state": "ACTIVE_PAID",
      "links": [
        {
          "rel": "contract",
          "href": "/contracts/services/2020002746"
        },
        {
          "rel": "payments",
          "href": "/payments/detail/services?contract_number=2020002746"
        },
        {
          "rel": "partner",
          "href": "/partners/5500091174"
        },
        {
          "rel": "validate-callback",
          "href": "/validation/callback?code=SERVIS_PLUS"
        },
        {
          "rel": "services-tech-info",
          "href": "/services/SERVIS_PLUS/technical-information?contract_number=2020002746"
        }
      ],
      "code": "SERVIS_PLUS",
      "type": "PAID",
      "pod": 859182400102646743
    },
    {
      "id": "296a6b8fdd2a7be180c6d89cdaa1ff51",
      "pod_string": "859182400102646743_",
      "name": "E.ON Zajištění",
      "state": "ACTIVE_PAID",
      "links": [
        {
          "rel": "contract",
          "href": "/contracts/services/2010003422"
        },
        {
          "rel": "payments",
          "href": "/payments/detail/services?contract_number=2010003422"
        },
        {
          "rel": "partner",
          "href": "/partners/5500091174"
        },
        {
          "rel": "validate-callback",
          "href": "/validation/callback?code=ZAJISTENI"
        },
        {
          "rel": "services-tech-info",
          "href": "/services/ZAJISTENI/technical-information?contract_number=2010003422"
        }
      ],
      "code": "ZAJISTENI",
      "type": "PAID",
      "pod": 859182400102646743
    },
    {
      "id": "898083977cb5f5445d1d6eb236bd3b95",
      "pod_string": "859182400102646743_",
      "name": "Elektronická faktura – E-Bill",
      "state": "ACTIVE",
      "links": [
        {
          "rel": "partner",
          "href": "/partners/5500091174"
        },
        {
          "rel": "validate-callback",
          "href": "/validation/callback?code=EBILL"
        }
      ],
      "code": "EBILL",
      "type": "FREE",
      "pod": 859182400102646743
    },
    {
      "id": "82794420e8a857ce1b4d02b6fe8274a4",
      "pod_string": "859182400102646743_",
      "name": "Oznamování časů HDO",
      "state": "INACTIVE",
      "links": [
        {
          "rel": "partner",
          "href": "/partners/5500091174"
        },
        {
          "rel": "validate-callback",
          "href": "/validation/callback?code=HDO"
        }
      ],
      "code": "HDO",
      "type": "FREE",
      "pod": 859182400102646743
    },
    {
      "id": "c3679ec10e485b038a3739e74680bf05",
      "pod_string": "859182400102646743_",
      "name": "Oznamování odstávek",
      "state": "ACTIVE",
      "links": [
        {
          "rel": "partner",
          "href": "/partners/5500091174"
        },
        {
          "rel": "validate-callback",
          "href": "/validation/callback?code=ODSTAVKY"
        }
      ],
      "code": "ODSTAVKY",
      "type": "FREE",
      "pod": 859182400102646743
    },
    {
      "id": "a89ba4a5fb158a659653e32582d35530",
      "pod_string": "859182400102646743_",
      "name": "Benefit",
      "state": "ACTIVE",
      "links": [
        {
          "rel": "partner",
          "href": "/partners/5500091174"
        },
        {
          "rel": "validate-callback",
          "href": "/validation/callback?code=BENEFIT"
        }
      ],
      "code": "BENEFIT",
      "type": "FREE",
      "pod": 859182400102646743
    }
  ]
};

module.exports = function(args, res, next) {
  /**
   *
   * status String Service statuses to filter the list by (CSV format) (optional)
   * returns inline_response_200_5
   **/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

