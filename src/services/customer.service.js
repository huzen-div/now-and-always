import axios from "axios";
const CustomerService = {
    async getCustomerDetail(custGuid) {
        try {
            return axios.get(`${process.env.VUE_APP_BASE_API}/Admin/getCustomerDetailGroupByCustGuid?CustGuid=${custGuid}`).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getListMember(payload) {
        try {
            return axios.post(`${process.env.VUE_APP_BASE_API}/Admin/getListMember`, payload).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getMemberProfile(memberGuid) {
        try {
            return axios.get(`${process.env.VUE_APP_BASE_API}/Admin/getMemberProfile?memberGuid=${memberGuid}`).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getBenefitDescription(memberGuid) {
        try {
            return axios.get(`${process.env.VUE_APP_BASE_API}/Admin/getBenefitDescription?memberGuid=${memberGuid}`).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getAllCoupon(memberGuid) {
        try {
            return axios.get(`${process.env.VUE_APP_BASE_API}/Admin/getAllCoupon?memberGuid=${memberGuid}`).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getMemberHistory(historyClass,memberGuid) {
        try {
            return axios.get(`${process.env.VUE_APP_BASE_API}/Admin/getMemberHistory?historyClass=${historyClass}&memberGuid=${memberGuid}`).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
};

export default CustomerService;