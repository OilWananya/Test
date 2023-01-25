<template>
    <div>
        <div v-if="amount" class="text-center">จำนวนเงินคงเหลือ {{amount}} บาท</div>
        <DepositComponent 
            type="deposit"
            :total="amount"
            @getTotal="getTotalFromDeposit"
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
            amount:0
        }
    },
    methods:{
        setDeposit(){
            const arr = [];
            let totalAmount = this.amount
            this.form = {
                datetime : new Date().toLocaleString(),
                amount : parseFloat(totalAmount),
                status : true ,
                email : this.$cookies.get("emailTestClickNext") 
            }
            arr.push(this.form);
            this.$store.commit('setDeposit',arr);
            this.$nextTick().then(() => {
                this.$refs.modalDisplay.hide();
                this.$router.push("/transaction");
            })
        },
        getTotalFromDeposit(val){
            this.amount = val;
            this.$refs.modalDisplay.show();
        }
    }
}
</script>

<style lang="scss" scoped>

</style>