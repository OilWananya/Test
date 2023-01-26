<template>
    <div>
        <b-modal
            ref="modalEdit"
            centered
            hide-footer
            @show="show"
            @hidden="hide"
            body-class="p-4"
            v-model="isShowModal"
        >
            <template #modal-header>
                <div>แก้ไขจำนวนเงินฝาก</div>
            </template>
            <div>
               ของวันที่ {{detail.datetime}} 
            </div>
            <div>
                จากอีเมล {{detail.email}}
            </div>
            <DepositComponent 
                type="update"
                :total="detail.amount"
                @getTotal="getTotal"
            />
        </b-modal>
    </div>
</template>

<script>
import InputText from "../Inputs/InputText.vue";
import { required } from "vuelidate/lib/validators";
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
    validations:{
        detail:{
            amount :{ required }
        }
    },
    methods:{
        show() {
            this.isShowModal = true;
        },
        hide() {
            this.isShowModal = false;
        },
        getTotal(data){
            const dataList = this.$store.state.stateDeposit;
            const arr = [];
            dataList.map((element) => { 
                if(element.email == this.$cookies.get("emailTestClickNext")){
                    element.amount = data;
                }
            })
            // arr.push(dataList)
            console.log(dataList)
            this.$store.commit('setDeposit',dataList);
            this.isShowModal = false;
        }
    }
}
</script>

<style>

</style>