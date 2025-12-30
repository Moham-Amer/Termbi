import { httpClient } from '../../../lib/axios';
import { userStorage, authStorage,userInfoStorage, tokenStorage } from '../storage';

class AuthServices {
    #signUpEndPoint = 'https://sanad.tamkeen-dev.com/api/auth/register'
    #loginEndPoint = 'https://sanad.tamkeen-dev.com/api/auth/login'
    #logoutEndPoint = 'https://sanad.tamkeen-dev.com/api/logout'
    #userEndPoint = 'https://api.escuelajs.co/api/v1/auth/profile'

    async signUp(payload) {
        console.log("payload", payload);
        try {
            const response = await httpClient.post(this.#signUpEndPoint, payload);
            return response.data;
        } catch (e) {
            console.error('SignUp error response:', e.response?.data || e.message);
            throw e;
        }
    }

    async login(payload) {
        const response = await httpClient.post(this.#loginEndPoint, payload);
        return response.data;
    }

    async Logout() {
    //     console.log(tokenStorage.get());
    //     const response = await httpClient.get(this.#logoutEndPoint, {
    //         headers: {
    //             Authorization: tokenStorage.get(),
    //             'Accept': 'application/json'
    //         }
    //     });
    //   if (response.status === 200) {
    //      return response.data;
    //   }
       this.clearStorage();
      
    }

    clearStorage() {
        userStorage.remove();
        authStorage.remove();
        userInfoStorage.remove();
        tokenStorage.remove();
    }

    async getMe() {
        const id = userStorage.get()
        const response = await httpClient.get(`${this.#userEndPoint}?id=${id}`);
        return response.data;
    }
}

export default new AuthServices;