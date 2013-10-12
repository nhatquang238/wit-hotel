'use strict';

window.app = angular.module('witHotelApp', ['ngwh.controllers', 'angularSmoothscroll']);

//bundling controllers
window.angular.module('ngwh.controllers', ['ngwh.controllers.main']);

//bundling services
window.angular.module('ngwh.services', ['ngwh.services.booking']);