import axios from "axios";
const FilterService = {

    async addFilter(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/Admin/getAllReceiptByFilter',data).then((response) => {
                console.log(response)
                // console.log("eyo")
                return response.data
            }).catch(error => {
                console.log("error",error);
                
                return error.response.data;

            });
        } catch (error) {
            console.log(error);
        }
    },
    async addFilterPending(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/Admin/getPendingReceiptByFilter',data).then((response) => {
                console.log(response)
                // console.log("eyo")
                return response.data
            }).catch(error => {
                console.log("error",error);
                
                return error.response.data;

            });
        } catch (error) {
            console.log(error);
        }
    },
    async addRedeemByFilter(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/Admin/getAllRedeemByFilter',data).then((response) => {
                console.log(response)
                // console.log("eyo")
                return response.data
            }).catch(error => { 
                console.log("error",error);
                
                return error.response.data;

            });
        } catch (error) {
            console.log(error);
        }
    },
    async addRewardByFilter(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/Admin/getAllRewardByFilter',data).then((response) => {
                console.log(response)
                // console.log("eyo")
                return response.data
            }).catch(error => {
                console.log("error",error);
                
                return error.response.data;

            });
        } catch (error) {
            console.log(error);
        }
    },
    async getAllCustomerByFilter(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/Admin/getAllCustomerByFilter',data).then((response) => {
                console.log(response)
                // console.log("eyo")
                return response.data
            }).catch(error => {
                console.log("error",error);
                
                return error.response.data;

            });
        } catch (error) {
            console.log(error);
        }
    },
    async getAllRedeemDropDown() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Admin/getAllRedeemDropDown').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getAllRewardDropDown() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Admin/getAllRewardDropDown').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
  };
  
  export default FilterService;