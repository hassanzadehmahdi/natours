// app.use(
//   contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'", "'unsafe-inline'"],
//       scriptSrc: ["'self'", "'unsafe-evel'"],
//       imgSrc: ["'self'", 'data:', 'blob:'],
//       childSrc: ["'self'", "'blob:'"],
//       //workerSrc: ["'self'", "'unsafe-inline'"],
//       styleSrcElem: ["'self'", "'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css'"],
//       scriptSrcElem: ["'self'", "'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'"],
//       //fontSrc: ["'self'", "'unsafe-inline https://fonts.gstatic.com/*'"],
//       connectSrc: [
//         "'self'",
//         "'https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com'",
//       ],
//       //workerSrc: ["'self'", "'unsafe-inline'"],
//       objectSrc: ["'none'"],
//       upgradeInsecureRequests: [],
//     },
//     reportOnly: true,
//   })
// );

// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: [
//         "'self'",
//         'https://*.mapbox.com',
//         'https://*.stripe.com',
//         'blob',
//       ],
//       baseUri: ["'self'"],
//       fontSrc: ["'self'", 'https:', 'data:'],
//       scriptSrc: ["'self'", 'https://*.cloudflare.com'],
//       imgSrc: ["'self'", 'https://www.gstatic.com'],
//       scriptSrc: [
//         "'self'",
//         'https://*.stripe.com',
//         'https://cdnjs.cloudflare.com',
//         'https://api.mapbox.com',
//         'https://js.stripe.com',
//         'blob',
//       ],
//       frameSrc: ["'self'", 'https://*.stripe.com'],
//       objectSrc: ["'none'"],
//       styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
//       upgradeInsecureRequests: [],
//     },
//   })
// );

//"script-src 'self' https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"
//"script-src 'self' http://* 'unsafe-inline' 'unsafe-eval' 'default-src *'"

// app.use((req, res, next) => {
//   res.setHeader(
//     'Content-Security-Policy',
//     "connect-src 'self' http://127.0.0.1:3000/api/v1/users/login",
//     "connect-src 'self' https://api.mapbox.com/styles/v1/iranianphoenix/ckiaa399u6djw19rx6lskcwkn?access_token=pk.eyJ1IjoiaXJhbmlhbnBob2VuaXgiLCJhIjoiY2tpOHN5NWxqMDh4YTJ4cGp6cndqOWdsdiJ9.Ij9SoHgTFOl_Fb-BT1NVfQ"
//   );
//   next();
// });

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', req.headers.origin);
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });
