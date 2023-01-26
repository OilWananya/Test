<template>
    <div class="mt-3">
        <div class="text-center">จำนวนเงินคงเหลือ {{ cashBalance }} บาท</div>
        <DepositComponent type="deposit" :total="amount" @closeModal="() => { console.log('close modal') }"
            @getTotal="getTotalFromDeposit" @withdrawAmount="withdrawAmount" />
        <ModalDisplay type="deposit" ref="modalDisplay" :total="amount" @confirmDeposit="setDeposit" />
    </div>
</template>

<script>
import DepositComponent from '../../../components/Financial/DepositComponent.vue';
import ModalDisplay from "../../../components/Financial/ModalDisplay.vue";
export default {
    name: 'FinancialPage',
    components: {
        DepositComponent,
        ModalDisplay
    },
    data() {
        return {
            amount: 0,
            dataList: [],
            cashBalance: this.$store.state.cashBalance
        }
    },
    created() {
        this.dataList = this.$store.state.stateDeposit;
        let addAmount = 0;
        let deleteAmount = 0;
        this.dataList.map((element, index) => {
            if (element.status) {
                addAmount = element.amount + addAmount;
                this.amount = addAmount;
            } else {
                deleteAmount = addAmount - element.amount;
                this.amount = deleteAmount;
            }

        })
    },
    methods: {
        closeEditModal() {
            console.log('close modal')
            this.$refs.modalDisplay.hide()
        },
        setDeposit() {
            console.log('dep')
            this.$store.commit('setCashBalance', (this.cashBalance+ parseFloat(this.amount)))
            let totalAmount = this.amount
            this.form = {
                datetime: new Date().toLocaleString(),
                amount: parseFloat(totalAmount),
                status: true,
                email: this.$cookies.get("emailTestClickNext")
            }
            this.$store.commit('setDeposit', [...this.$store.state.stateDeposit, this.form]);
            this.$nextTick().then(() => {
                this.$refs.modalDisplay.hide();
            }).catch((e) => { console.log(e) })
            console.log(this.$route)
            this.$router.push('/transaction')

        },
        getTotalFromDeposit(val) {
            this.amount = val;
            this.$refs.modalDisplay.show();
        },
        withdrawAmount(val) {
            console.log('withdraw', val, this.$store.state.stateDeposit)
            if (this.cashBalance < val) {
                alert(' เงิน ไม่พอ ')
                return
            }
            else {
                this.$store.commit('setCashBalance', (this.cashBalance - val))
            }
            this.form = {
                datetime: new Date().toLocaleString(),
                amount: parseFloat(val),
                status: false,
                email: this.$cookies.get("emailTestClickNext")
            }
            this.$store.commit('setDeposit', [...this.$store.state.stateDeposit, this.form]);
            this.$nextTick().then(() => {
                this.$refs.modalDisplay.hide();
            }).catch((e) => { console.log(e) })
            console.log(this.$route)
            this.$router.push('/transaction')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>