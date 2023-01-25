<template>
    <div class="mt-3">
        <div class="text-center">จำนวนเงินคงเหลือ {{amount ? amount : 0 }} บาท</div>
        <DepositComponent 
            type="deposit"
            :total="amount"
            @getTotal="getTotalFromDeposit"
            @withdrawAmount="withdrawAmount"
        />
        <ModalDisplay
            type="deposit"
            ref="modalDisplay"
            :total="amount"
            @confirmDeposit="setDeposit"
        />
    </div>
</template>

<script>
import DepositComponent from '../../../components/Financial/DepositComponent.vue';
import ModalDisplay from "../../../components/Financial/ModalDisplay.vue";
export default {
    name:'FinancialPage',
    components:{
        DepositComponent,
        ModalDisplay
    },
    data(){
        return{
            amount:0,
            dataList : []
        }
    },
    created(){
        this.dataList = this.$store.state.stateDeposit;
        let addAmount = 0;
        let deleteAmount = 0;
        this.dataList.map((element,index) => { 
            if(element.status){
                addAmount = element.amount + addAmount;
                this.amount = addAmount;
            }else{
                deleteAmount = addAmount - element.amount;
                this.amount = deleteAmount;
            }
            
        })
    },
    methods:{
        setDeposit(){
            let totalAmount = this.amount
            this.form = {
                datetime : new Date().toLocaleString(),
                amount : parseFloat(totalAmount),
                status : true ,
                email : this.$cookies.get("emailTestClickNext") 
            }
            this.$store.commit('setDeposit',this.form);
            this.$nextTick().then(() => {
                this.$refs.modalDisplay.hide();
                this.$router.push("/transaction");
            })
            
        },
        getTotalFromDeposit(val){
            this.amount = val;
            this.$refs.modalDisplay.show();
        },
        withdrawAmount(val){
            this.form = {
                datetime : new Date().toLocaleString(),
                amount : parseFloat(val),
                status : false ,
                email : this.$cookies.get("emailTestClickNext") 
            }
            this.$store.commit('setDeposit',this.form);
            this.$nextTick().then(() => {
                this.$refs.modalDisplay.hide();
                this.$router.push("/transaction");
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>