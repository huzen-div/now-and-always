import axios from "axios";
const MasterDataService = {
    async Delete(data) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Admin/deleteBannerByGuid?bannerGuid='+data).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getRedeemMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getRedeem').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getRedeemBranchMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getRedeemBranch').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getRedeemCodeMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getRedeemCode').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getRedeemCondMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getRedeemCond').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getSMSMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getSMS').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getLevelMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getLevel').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getAgingMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getAging').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getAffSpecMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getAffSpec').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getBenefitHdMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getBenefitHD').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getBenefitItMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getBenefitIT').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getBenefitDetailMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getBenefitDetail').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getJobTypeMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getJobType').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getServChannelMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getServChannel').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getUserMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getUser').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getRoleMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getRole').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    
    async getStoreMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getStore').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getBranchMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getBranch').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getRewardMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getReward').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getRewardCondMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getRewardCond').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getProductMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getProduct').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getProductCateMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getProductCate').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getBannerMs() {
        try {
            return await axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getBanner').then((response) => {
                return response.data;
            })
        } catch (error) {
            throw error.response?.data; 
        }
    },
    async getUserMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getUser').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getBroadCastHdMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getBroadCastHD').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getBroadCastItMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getBroadCastIT').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getProductCampaignMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getProductCampaign').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getStoreCampaignMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getStoreCampaign').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getRoleMs() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/MasterData/getRole').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
  };
  
  export default MasterDataService;