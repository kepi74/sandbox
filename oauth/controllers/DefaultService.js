'use strict';

exports.oauth2AuthorizeGET = function(args, res, next) {
  /**
   * [CZ] Získání stránky s přihlášením a asociace k Oauth2. Po přihlášení vrazí na {callback_url}?code={auth_code}.   [EN] Asociation with Oauth2 and get the login page. After login returns to {callback_url}?code={auth_code}. 
   *
   * response_type String [CZ] Způsob návratu po autentizaci, musí být nastaveno na code.  [EN] Must be se to code. 
   * client_id String [CZ] Vygenerované id aplikace (uživatelské jméno aplikace).  [EN] Generated application id (application user name). 
   * redirect_uri String [CZ] Návratová adresa po autentizaci.  [EN] Callback URL after login. 
   * scope String [CZ] Scope pro informace o uživateli, podporovaná je openid.  [EN] Authentication scope, openid only suported.  (optional)
   * state String [CZ] Bezpečnostní hash, který oauth vrátí při úspěšném loginu v parametru 'state'.  [EN] Security hash, it will be returned to callback url in 'state' param.  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.oauth2RevokePOST = function(args, res, next) {
  /**
   * [CZ] Zrušení platnosti tokenu.  [EN] Token revocation. 
   *
   * token String [CZ] Přístupový token.  [EN] Access token.  (optional)
   * token_type_hint String [CZ] Typ předaného tokenu.  [EN] Token type.  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.oauth2TokenPOST = function(args, res, next) {
  /**
   * [CZ] Manipulace s tokenem - vyžádání, obnova.  [EN] Token request, renewal. 
   *
   * grant_type String [CZ] Typ operace - podporované jsou     - authorization_code - získání tokenu pomocí OTP získaného přes authorize endpoint.     - password - získání tokenu přes jméno a heslo     - refresh_token - obnova tokenu pomocí refresh token  [EN] Grant type - supported     - authorization_code - get the token though OTP from authorize endpoint     - password - get the token by providing username and password     - refresh_token - token renewal though refresh token 
   * client_id String [CZ] Vygenerované ID aplikace, požadované pro každou operaci pokud není použita Basic authorization.  [EN] Generated appliaction ID, required for every grant if Basic authorization not preset. 
   * code String [CZ] Jednorázové heslo obdržené při návratu na callback_url, povinný pouze při authorization_code operaci.  [EN] One type password received by returning to callback_url, required with authorization_code grant.  (optional)
   * redirect_uri String [CZ] Callback url definovaná pro aplikaci, povinná při authorization_code operaci.  [EN] Callback url defined for application, required with authorization_code grant.  (optional)
   * client_secret String [CZ] Heslo pro aplikaci, nepožadováno při operaci password.  [EN] Application password, not required with password grant.  (optional)
   * username String [CZ] Uživatelské jméno povinné při operaci password.  [EN] Username required with password grant.  (optional)
   * password String [CZ] Uživatelské heslo povinné při operaci password.  [EN] User password required with password grant.  (optional)
   * scope String [CZ] Rozsah autorizace povinný pro operaci password.  [EN] Authorization scope required with password grant.  (optional)
   * refresh_token String [CZ] Refresh token povinný při operaci refresh_token obdržený s access tokenem.  [EN] Refresh token required with refresh_token grant received earlier with access token.  (optional)
   * returns out-post-oauth-token
   **/
  var examples = {};
  examples['application/json'] = [ {
  "scope" : "openid",
  "token_type" : "Bearer",
  "expires_in" : 3600,
  "refresh_token" : "6583215d3a2aedf6268e923d15fcb03e",
  "id_token" : "eyJhbGciOiJSUzI1NiJ9.eyJhdXRoX3RpbWUiOjE0NjQ3OTA1MjksImV4cCI6MTQ2NDc5NDEyOSwiYXpwIjoicWNPT2tQcXJJM1hWelpveVBoVlBCWVZPSExjYSIsImF0X2hhc2giOiJGSmk0UHB0X2ZYRHVjUWp5VXZmWHZBIiwiYXVkIjpbInFjT09rUHFySTNYVnpab3lQaFZQQllWT0hMY2EiXSwiaXNzIjoiaHR0cHM6XC9cL2xvY2FsaG9zdDo5NDQzXC9vYXV0aDJcL3Rva2VuIiwiaWF0IjoxNDY0NzkwNTI5fQ.EZukbnCEvT1Yu8d3hXuRDAD4NUxRBh84E8JGwrpyj6j_s0C8V1jifRj37_UtlkzQEYlM0UfXUrpD_cK_FYwYb-rR1c1oeTIDGKyhxeqJ1NlGpH-_E2038NSpj0LlQhzKLMBSvwwuZcoyxFINrWeqGlcC0j2NHBNVMA65G0ID2hs",
  "access_token" : "46d0311c987c5af757d3f264c1fd2545"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.oauth2UserinfoGET = function(args, res, next) {
  /**
   * [CZ] Informace o přihlášeném uživateli.  [EN] Logged in user info. 
   *
   * schema String [CZ] Schéma uživatelských atributů.  [EN] User attribute schema. 
   * returns out-get-oauth2-userinfo
   **/
  var examples = {};
  examples['application/json'] = [ {
  "sub" : "B15209@eon-distribuce.carbon",
  "organization" : "EBSCZ",
  "email" : "bretislav.kabele@eon.com",
  "roles" : "Application/partnersky-portal,Application/B15209_DefaultApplication_PRODUCTION,Application/nEMS,Application/partnersky-portal/ECP,Application/nEMS2,Application/nEMS/GEOF,Application/nEMS3,Application/test,Application/nEMS4,Application/partnersky-portal/BOZP,Application/test-csharp,Application/aaaaa,admin,Application/partnersky-portal/all,Internal/everyone,Application/registrace",
  "surname" : "Kábele",
  "firstname" : "Břetislav"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.oauth2RootGET = function(args, res, next) {
  /**
   * [CZ] Informace o přihlášeném uživateli.  [EN] Logged in user info. 
   *
   * schema String [CZ] Schéma uživatelských atributů.  [EN] User attribute schema. 
   * returns out-get-oauth2-userinfo
   **/
  var examples = {};
  examples['application/json'] = {
  "links": [
    {
      "rel": "authorize",
      "href": "/authorize"
    },
    {
      "rel": "login",
      "href": "/token"
    },
    {
      "rel": "registration",
      "href": "https://login-test.eon.cz/registrace/"
    },
    {
      "rel": "changePwd",
      "href": "https://login-test.eon.cz/registrace/b2c-portal/reset "
    },
    {
      "rel": "forgotPwd",
      "href": "https://login-test.eon.cz/registrace/b2c-portal/reset"
    }
  ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

