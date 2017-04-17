/**
 * Variation of address for given parameters
 *
 * zip_code String
 * city String  (optional)
 * street String  (optional)
 * returns inline_response_200_8
 **/
const examples = {};
examples['step 01'] = {
  address: [
    {
      links: [
        {
          rel: 'next',
          href: '/address/auto-complete?zip_code=11000&city=Praha',
        },
      ],
      city: 'Praha',
    },
  ],
};
examples['step 02'] = {
  address: [
    {
      city_part: 'Josefov',
      links: [
        {
          rel: 'next',
          href: '/address/auto-complete?zip_code=11000&city=Praha&city_part=Josefov',
        },
      ],
      city: 'Praha',
    },
    {
      city_part: 'Malá Strana',
      links: [
        {
          rel: 'next',
          href: '/address/auto-complete?zip_code=11000&city=Praha&city_part=Malá Strana',
        },
      ],
      city: 'Praha',
    },
    {
      city_part: 'Nové Město',
      links: [
        {
          rel: 'next',
          href: '/address/auto-complete?zip_code=11000&city=Praha&city_part=Nové Město',
        },
      ],
      city: 'Praha',
    },
    {
      city_part: 'Staré Město',
      links: [
        {
          rel: 'next',
          href: '/address/auto-complete?zip_code=11000&city=Praha&city_part=Staré Město',
        },
      ],
      city: 'Praha',
    },
    {
      city_part: 'Vinohrady',
      links: [
        {
          rel: 'next',
          href: '/address/auto-complete?zip_code=11000&city=Praha&city_part=Vinohrady',
        },
      ],
      city: 'Praha',
    },
  ],
};
examples['step 03'] = {
  address: [
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: '17. listopadu',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: '28. října',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Alšovo nábřeží',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Anenská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Anenské náměstí',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Anežská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Bartolomějská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Benediktská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Betlémská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Betlémské náměstí',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Boršov',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Bílkova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Břehová',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Celetná',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Divadelní',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Dlouhá',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Dušní',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Dvořákovo nábřeží',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Elišky Krásnohorské',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Havelská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Havelská ulička',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Havířská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Haštalská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Haštalské náměstí',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Hradební',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Husova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Jakubská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Jalovcová',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Jilská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Jáchymova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Kamzíková',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Kaprova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Karlova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Karoliny Světlé',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Klášterská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Konviktská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Kostečná',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Kozí',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Kožná',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Krocínova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Králodvorská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Křižovnická',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Křižovnické náměstí',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Liliová',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Linhartská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Maiselova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Malá Štupartská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Malé náměstí',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Mariánské náměstí',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Martinská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Masná',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Melantrichova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Michalská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Mikulášská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Na Františku',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Na Perštýně',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Na můstku',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Na příkopě',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Na rejdišti',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Na zábradlí',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Novotného lávka',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Nám. Franze Kafky',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Náprstkova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Národní',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Ovocný trh',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Pařížská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Perlová',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Platnéřská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Provaznická',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Průchodní',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Revoluční',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Rybná',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Rytířská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Rámová',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Salvátorská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Seminářská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Skořepka',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Smetanovo nábřeží',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Staroměstské náměstí',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Staré Město',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Střelecký ostrov',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Stříbrná',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Templová',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Týn',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Týnská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Týnská ulička',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'U Dobřenských',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'U Obecního domu',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'U Prašné brány',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'U milosrdných',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'U obecního dvora',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'U radnice',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'U staré školy',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Uhelný trh',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'V kolkovně',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'V kotcích',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Valentinská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Vejvodova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Veleslavínova',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Vězeňská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Za Haštalem',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Zlatá',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'náměstí Curieových',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'náměstí Jana Palacha',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'náměstí Republiky',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Řetězová',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Řásnovka',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Široká',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Štupartská',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Žatecká',
    },
    {
      city: 'Praha',
      city_part: 'Staré Město',
      street: 'Železná',
    },
  ],
};
examples['404'] = {
  errors: [
    {
      code: 'ERR_NO_DATA_FOUND',
      error_message: 'No data for given parameters',
    },
  ],
};

const addressAutoComplete = (args, res) => {
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    if (args.zip_code.value === '00000' || !args.zip_code.value) {
      res.statusCode = 404;
      res.end(JSON.stringify(examples['404'] || {}, null, 2));
    }
    if (args.city_part.value) {
      res.end(JSON.stringify(examples['step 03'] || {}, null, 2));
    }
    if (args.city.value) {
      res.end(JSON.stringify(examples['step 02'] || {}, null, 2));
    }
    if (args.zip_code.value) {
      res.end(JSON.stringify(examples['step 01'] || {}, null, 2));
    }
  } else {
    res.end();
  }
};

export default addressAutoComplete;
