import axios from "axios";
const ImportService = {
    //Redeem
    async checkFileRedeem(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Redeem_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileRedeem(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Redeem_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Redeem Branch
    async checkFileRedeemBranch(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/RedeemBranch_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileRedeemBranch(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/RedeemBranch_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Redeem Code
    async checkFileRedeemCode(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/RedeemCode_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileRedeemCode(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/RedeemCode_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Redeem Condition
    async checkFileRedeemCond(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/RedeemCond_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileRedeemCond(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/RedeemCond_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //SMS
    async checkFileSMS(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/SMS_Upload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async uploadFileSMS(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/SMS_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Level
    async checkFileLevel(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Level_Upload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async uploadFileLevel(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Level_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Aging
    async checkFileAging(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Aging_Upload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async uploadFileAging(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Aging_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //AffiliateSpec
    async checkFileAffSpec(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/AffSpec_Upload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async uploadFileAffSpec(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/AffSpec_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //BenefitHd
    async checkFileBenefitHd(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BenefitHD_Upload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async uploadFileBenefitHd(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BenefitHD_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //BenefitIt
    async checkFileBenefitIt(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BenefitIT_Upload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async uploadFileBenefitIt(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BenefitIT_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Benefit Detail
    async checkFileBenefitDetail(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BenefitDetail_Upload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async uploadFileBenefitDetail(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BenefitDetail_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //JobType
    async checkFileJobType(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/JobType_Upload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async uploadFileJobType(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/JobType_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //ServChannel
    async checkFileServChannel(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/ServChannel_Upload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async uploadFileServChannel(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/ServChannel_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //User
    async checkFileUser(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/User_Upload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async uploadFileUser(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/User_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Store
    async checkFileStore(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Store_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileStore(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Store_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Store Campaign
    async checkFileStoreCampaign(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/StoreCampaign_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileStoreCampaign(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/StoreCampaign_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Branch
    async checkFileBranch(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Branch_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileBranch(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Branch_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Banner
    async checkFileBanner(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Banner_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileBanner(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Banner_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //BoardCastHd
    async checkFileBoardCastHd(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BoardCastHd_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileBoardCastHd(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BoardCastHd_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //BoardCastIt
    async checkFileBoardCastIt(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BoardCastIt_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileBoardCastIt(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BoardCastIt_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Product
    async checkFileProduct(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Product_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileProduct(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Product_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //ProductCategory
    async checkFileProductCategory(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/ProductCate_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileProductCategory(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/ProductCate_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Product Campaign
    async checkFileProductCampaign(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/ProductCampaign_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileProductCampaign(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/ProductCampaign_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    
    //Reward
    async checkFileReward(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Reward_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileReward(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/Reward_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Reward Condition
    async checkFileRewardCondition(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/RewardCond_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileRewardCondition(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/RewardCond_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //User
    async checkFileUser(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/User_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async UploadFileUser(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/User_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Broadcast Hd
    async checkBroadCastHd(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BroadCastHD_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async saveBroadCastHd(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BroadCastHD_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },

    //Broadcast It
    async checkBroadCastIt(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BroadCastIT_Upload',data).then((response) => {
                
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
    async saveBroadCastIt(data) {
        try {
            return axios.post(process.env.VUE_APP_BASE_API+'/MasterData/BroadCastIT_SaveUpload',data).then((response) => {
                return response.data;
            }).catch(error => {
                return error.response.data;
            });
        } catch (error) {
            console.log(error);
        }
    },
};
  
  export default ImportService;