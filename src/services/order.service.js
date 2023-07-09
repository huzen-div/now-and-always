import axios from "axios";
const OrderService = {
    async getAllOrder() {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Admin/getAllReceipt').then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    },
    async getDetal(custGuid,recGuid) {
        try {
            return axios.get(process.env.VUE_APP_BASE_API + '/Admin/getReceiptDetail?custGuid='+custGuid+'&recGuid='+recGuid).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
  };
  
  export default OrderService;