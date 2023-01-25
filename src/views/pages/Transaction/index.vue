<template>
  <div>
    <TransactionComponent 
        :list="this.$store.state.stateDeposit"
        :fields="fields"
        :isBusy="isBusy"
    />
  </div>
</template>

<script>
import TransactionComponent from '../../../components/Transaction/TransactionComponent.vue';
export default {
    name:'TransactionPage',
    components:{
        TransactionComponent
    },
    data(){
        return{
            rows: 0,
            items: [],
            fields: [
                {
                    label: "Datetime",
                    key: "datetime",
                },
                {
                    label: "Amount",
                    key: "amount",
                },
                {
                    label: "Status",
                    key: "status",
                },
                {
                    label: "E-mail",
                    key: "email",
                },
                {
                    key : "action",
                    label: "Action"
                }
            ],
            isBusy: true,
            isLoading: true,
            pageOptions: [
                { value: 10, text: "10 / page" },
                { value: 30, text: "30 / page" },
                { value: 50, text: "50 / page" },
                { value: 100, text: "100 / page" },
            ],
            showing: 1,
            showingTo: 10,
            isBusy: true,
        }
    },
}
</script>

<style>

</style>