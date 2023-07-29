import axios from 'axios';
class AuthService {
    validateAdminToken() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Authen/validateAdminToken').then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    }
    adminLogin(payload){
        try {
            return axios.post(process.env.VUE_APP_BASE_API + '/Authen/adminLogin',payload).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    }
    
}
export default new AuthService();