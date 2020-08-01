import Token from "./Token";
import AppStorage from "./AppStorage";

class User {
    responseAfterLogin({token, user}) {
        if (Token.isValid(token)) {
            AppStorage.store(token, user)
        }
    }

    hasToken() {
        const storeToken = localStorage.getItem('token');
        if (storeToken) {
             return Token.isValid(storeToken) ? true : this.logout()
        }

        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear()
        window.location = '/sign-in'
    }

    user() {
        if (this.loggedIn()) {
            return localStorage.getItem('user');
        }
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(localStorage.getItem('user'));
            return payload.sub;
        }
        return false;
    }

    own(id) {
        return this.id() === id
    }

}

export default User = new User();
