const globalConst = {
    authHeader(){
        let user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            return 'Bearer ' + user.token;
        } else {
            return '';
        }
    },
    gender:{
        Men:"M",
        Women:"F",
        Other:"O",
    },
    onlyNumber($event) {
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
        }
    },
    statusApprove:{
        approve:"APPV",
        reject:"REJT"
    },
    addCurrency(amount) {
        if(amount){
            return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
    },
}
export default globalConst