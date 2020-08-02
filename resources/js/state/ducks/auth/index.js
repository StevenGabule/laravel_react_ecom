import reducer from './reducers';
import {
  authError,
  authLoad,
  authLogin,
  authLogout,
  authRequest
} from './actions';

import authSaga from './sagas';

export { authSaga, authError, authLoad, authLogin, authLogout, authRequest };

export default reducer;
