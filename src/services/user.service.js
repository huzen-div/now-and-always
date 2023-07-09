import axios from 'axios';
import authHeader from './auth-header';
class UserService {
  getBanner() {
    return axios.get(process.env.VUE_APP_BASE_API + '/Product/getBanner', { headers: authHeader() }).then((response) => {
      return response.data
    })
  }
}
export default new UserService();