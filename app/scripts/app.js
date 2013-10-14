'use strict';

window.app = angular.module('witHotelApp', ['ngwh.controllers', 'ngwh.services', 'angularSmoothscroll']);

//bundling controllers
window.angular.module('ngwh.controllers', ['ngwh.controllers.main','ngwh.controllers.booking']);

//bundling services
window.angular.module('ngwh.services', ['ngwh.services.booking']);