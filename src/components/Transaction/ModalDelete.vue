<template>
    <div>
        <b-modal
            ref="modalDelete"
            centered
            @show="show"
            @hidden="hide"
            body-class="p-4"
            v-model="isShowModal"
        >
            <template #modal-header>
                <div>ยืนยันการลบ</div>
            </template>
            <div>
               จำนวนเงินถอน {{detail.amount}} 
            </div>
            <div>
               ของวันที่ {{detail.datetime}} 
            </div>
            <div>
                จากอีเมล {{detail.email}}
            </div>
             <template #modal-footer>
            <b-row>
                <b-col
                ><b-button class="btn-confirm" @click.prevent="confirmDelete">
                    ยืนยัน
                </b-button></b-col
                >
                <b-col
                ><b-button @click="hide" class="btn-cancel"> ยกเลิก </b-button></b-col
                >
            </b-row>
            </template>
        </b-modal>
    </div>
</template>

<script>
import InputText from "../Inputs/InputText.vue";
import DepositComponent from "../Financial/DepositComponent.vue";
export default {
    components:{
        InputText,
        DepositComponent
    },
    props:{
        detail : {
            required:true,
            type:Object
        }
    },
    data() {
        return {
            isShowModal: false,
            errMsg : "",
            total:"",
        };
    },
    methods:{
        show() {
            this.isShowModal = true;
        },
        hide() {
            this.isShowModal = false;
        },
        confirmDelete(){
            const dataList = this.$store.state.stateDeposit;
            dataList.map((element , index) => { 
                if(element.datetime == this.detail.datetime && element.amount == this.detail.amount){
                    dataList.splice(index, 1);
                }
            })
            this.$store.commit('stateDeposit',dataList);
            this.isShowModal = false;
            this.$router.push('/transaction');
        }
    }
}
</script>

<style>

</style>