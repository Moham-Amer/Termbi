import { httpClient } from '../../../lib/axios';
import { userStorage } from '../../auth/storage';

class ProfileServices {
    #profileEndPoint = 'https://sanad.tamkeen-dev.com/api/profile'
    #ordersEndPoint = 'https://sanad.tamkeen-dev.com/api/orders'
    #updateProfileEndPoint = 'https://sanad.tamkeen-dev.com/api/customer-profile/update'
    async getProfile() {
        //fetch user profile data from stoarge
        const id = userStorage.get()
       const first_name = userStorage.get('first_name')
       const last_name = userStorage.get('last_name')
       const email = userStorage.get('email')
       const phone = userStorage.get('phone')
       return { id, first_name, last_name, email, phone };
        // const response = await httpClient.get(`${this.#profileEndPoint}?id=${id}`);
        // return response.data;
    }

    async updateProfile(payload) {
        const response = await httpClient.put(this.#updateProfileEndPoint, payload);
        return response.data;
    }

    async getOrders() {
        const response = await httpClient.get(this.#ordersEndPoint);
        return response.data;
    }
}

export default new ProfileServices;