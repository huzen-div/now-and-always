import axios from "axios";
const PendingService = {
    async getList() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Admin/getPendingReceipt').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getDetails(recGuid) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Admin/getReceiptDetailForApprove?recGuid='+recGuid).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async createApproveReceipt(payload) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API + '/Admin/createApproveReceipt',payload).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async getCategory() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Master/getCategory').then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async getProductByCategory(cateGuid) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Master/getProductByCategory?cateGuid='+cateGuid).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
  };
  
  export default PendingService;