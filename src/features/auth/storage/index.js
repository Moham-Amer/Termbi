import { dataStorage } from '../../../lib/storage';

export const userStorage = dataStorage('id');
export const authStorage = dataStorage('auth');
export const userInfoStorage = dataStorage('user');
export const tokenStorage = dataStorage('access_token');
