// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: 'http://localhost:3000/',
  firebase: {
    apiKey: 'AIzaSyA-D3JdsLEoOOWoJRDpR95NDVhkvyZV6Hg',
    authDomain: 'ng-angular-blog.firebaseapp.com',
    databaseURL: 'https://ng-angular-blog-default-rtdb.firebaseio.com',
    projectId: 'ng-angular-blog',
    storageBucket: 'ng-angular-blog.appspot.com',
    messagingSenderId: '71628625901',
    appId: '1:71628625901:web:e2289a33aa9486cd2f79e4',
    measurementId: 'G-2RHZB4C65V',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
