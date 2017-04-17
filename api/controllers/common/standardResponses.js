var response = {
  '401': (res) => {
    res.writeHead(
      401,
      { 'Content-type': 'application/xml' }
    );
    res.end(
      `<ams:fault xmlns:ams="http://wso2.org/apimanager/security">
         <ams:code>900901</ams:code>
         <ams:message>Invalid Credentials</ams:message>
         <ams:description>Access failure for API: /api/ece/selfcare/mo/v1, version: v1. Make sure your have given the correct access token</ams:description>
       </ams:fault>`
    );
  },
  '403': (res) => {
    res.writeHead(
      403,
      { 'Content-type': 'application/xml' }
    );
    res.end(
      `<ams:fault xmlns:ams="http://wso2.org/apimanager/security">
         <ams:code>900906</ams:code>
         <ams:message>No matching resource found in the API for the given request</ams:message>
         <ams:description>Access failure for API: /api/ece/selfcare/mo/v1, version: v1. Check the API documentation and add a proper REST resource path to the invocation URL</ams:description>
       </ams:fault>`
    );
  },
  '404': (res) => {
    res.writeHead(
      404,
      { 'Content-type': 'application/json' }
    );
    res.end(JSON.stringify(
      {
        errors: [
          {
            code: 'ERR_NO_DATA_FOUND',
            'error_message': 'No data for given parameters'
          }
        ]
      },
      null,
      2
    ));
  },
  '500': (res) => {
    res.writeHead(
      500,
      { 'Content-type': 'application/json' }
    );
    res.end(JSON.stringify(
      {
        text: `<!DOCTYPE html><!-- \"' --></script></style></noscript></xmp>\n<meta charset=\"utf-8\">\n<meta name=\"robots\" content=\"noindex\">\n<title>Server Error</title>\n\n<style>\n\t#error-body { background: white; width: 500px; margin: 70px auto; padding: 10px 20px }\n\t#error-body h1 { font: bold 47px/1.5 sans-serif; background: none; color: #333; margin: .6em 0 }\n\t#error-body p { font: 21px/1.5 Georgia,serif; background: none; color: #333; margin: 1.5em 0 }\n\t#error-body small { font-size: 70%; color: gray }\n</style>\n\n<div id=\"error-body\">\n\t<h1>Server Error</h1>\n\n\t<p>We're sorry! The server encountered an internal error and\n\twas unable to complete your request. Please try again later.</p>\n\n\t<p><small>error 500</small></p>\n</div>\n`
      },
      null,
      2
    ));
  },
};

module.exports = response;
