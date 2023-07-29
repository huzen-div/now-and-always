import axios from "axios";
const DashboardService = {
    async getCustomer() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomer').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCustomerfilter(data) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomer?dateFrom='+data.rewHistDateFrom+'&dateTo='+data.rewHistDateTo).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCustomerByFilter(data) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomer?dateFrom='+data.rewHistDateFrom+'&dateTo='+data.rewHistDateTo).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCustomerBySex() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerBySex').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCustomerBySexByFilter(data) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerBySex?dateFrom='+data.rewHistDateFrom+'&dateTo='+data.rewHistDateTo).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCustomerByAge() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerByAge').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCustomerByAgeByFilter(data) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerByAge?dateFrom='+data.rewHistDateFrom+'&dateTo='+data.rewHistDateTo).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountCustomerByRegion() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerByRegion').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountCustomerByRegionByFilter(data) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerByRegion?dateFrom='+data.rewHistDateFrom+'&dateTo='+data.rewHistDateTo).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountCustomerByLifetime() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerByLifetime').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountCustomerByLifetimeByFilter(data) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerByLifetime?dateFrom='+data.rewHistDateFrom+'&dateTo='+data.rewHistDateTo).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountCustomerByTotalPoint() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerByTotalPoint').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountCustomerByTotalPointByFilter(data) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerByTotalPoint?dateFrom='+data.rewHistDateFrom+'&dateTo='+data.rewHistDateTo).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountCustomerByRemainPoint() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerByRemainPoint').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountCustomerByRemainPointByFilter(data) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountCustomerByRemainPoint?dateFrom='+data.rewHistDateFrom+'&dateTo='+data.rewHistDateTo).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountReward() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountReward').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountRedeem() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountRedeem').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountReceipt() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountReceipt').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getCountReceiptByFilter(data) {
       
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountReceipt?dateFrom='+data.rewHistDateFrom+'&dateTo='+data.rewHistDateTo).then((response) => {
                
                
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },

    async getCountQty_AmtByDate(req) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountQty_AmtByDate?dateFrom='+req.dateFrom+'&dateTo='+req.dateTo).then((response) => {
                return response.data
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    // async getCountQty_AmtByDateByFilter(data) {
    //     try {
    //         return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountQty_AmtByDate?dateFrom='+data.dateFrom+'&dateTo='+data.dateTo).then((response) => {
    //             return response.data
    //         }).catch(error => {
    //             return error.response.data;
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
    async getCountQty_AmtByProduct(req) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountQty_AmtByProduct?dateFrom='+req.dateFrom+'&dateTo='+req.dateTo).then((response) => {
                return response.data
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async getCountQty_AmtBySaleChannel(req) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountQty_AmtBySaleChannel?dateFrom='+req.dateFrom+'&dateTo='+req.dateTo).then((response) => {
                return response.data
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async getCountQty_AmtByCategory(req) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountQty_AmtByCategory?dateFrom='+req.dateFrom+'&dateTo='+req.dateTo).then((response) => {
                return response.data
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async getCountQty_AmtByStore(req) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Dashboard/getCountQty_AmtByStore?dateFrom='+req.dateFrom+'&dateTo='+req.dateTo).then((response) => {
                return response.data
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
  };
   
  export default DashboardService;