import 'bootstrap/dist/css/bootstrap.min.css';
require('./bootstrap');
import User from "./helpers/User";
window.User = User;

import Exception from './helpers/Exception'
window.Exception = Exception

require('./pages');
