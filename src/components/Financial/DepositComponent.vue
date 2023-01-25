<template>
    <div>
        <InputText
            v-model="amount"
            size="lg"
            textFloat="จำนวนเงิน *"
            placeholder="กรอกจำนวนเงิน"
            type="text"
            name="total"
            maxlength="6"
            :isValidate="$v.amount.$error"
            :v="$v.amount"
            @onkeypress="isNumber($event)"
            @onDataChange="(val) => (amount = val)"
        />
        <div class="text-center">
            <span class="text-err" v-if="errMsg ? true : false">{{errMsg}}</span>
        </div>
            <div class="text-center">
                <b-button
                    block
                    type="button"
                    @click="checkAmount"
                    class="btn-confirm font-weight-bold my-2"
                >
                    <div class="d-flex">
                        <div class="mx-auto">
                            <span v-if="type == 'deposit'">ฝาก</span> 
                            <span v-else>ยืนยัน</span>
                        </div>
                    </div>
                </b-button>
                <b-button
                    block
                    type="button"
                    @click="btnCancel"
                    class="btn-cancel font-weight-bold my-2"
                >
                    <div class="d-flex">
                        <div class="mx-auto">
                            <span v-if="type == 'deposit'">ถอน</span> 
                            <span v-else>ยกเลิก</span>
                        </div>
                    </div>
                </b-button>
            </div>
    </div>
</template>

<script>
import InputText from "../Inputs/InputText.vue";
import { required } from "vuelidate/lib/validators";
export default {
    props:{
        type:{
            type:String,
            required:true
        },
        total:{
            required:true,
            type:Number
        }
    },
    components:{
        InputText,
    },
    data(){
        return{
            errMsg:"",
            amount:this.total,
            form:{
                datetime : "",
                amount : 0,
                status : true ,
                email : "" 
            }
        }
    },
    validations:{
        amount:{
            required
        }
    },
    methods:{
        checkAmount(){
            this.$v.amount.$touch();
            if (this.$v.amount.$error) return;
            if (parseFloat(this.amount) < 0 || parseFloat(this.amount) > 100000) {
                this.errMsg = "กรุณากรอกจำนวนเงินให้อยู่ระหว่าง 0 - 100,000"
            }else{
                this.errMsg = "";
                this.$nextTick().then(() => {
                    this.$emit("getTotal",parseFloat(this.amount))
                })
            }
        },
        btnCancel(){
            if(this.type === 'deposit'){
                if(parseInt(this.amount) <= 0){
                    this.errMsg = "จำนวนเงินไม่เพียงพอ"
                }else{
                    
                }
            }else{
                
            }
        },
        isNumber(evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    .btn-confirm{
        background-color: green;
        border: none;
        width: 100px;
        margin-right: 10px;
    }
    .btn-cancel{
        background-color: red;
        width: 50px;
        border: none;
        width: 100px;
    }
    .text-err{
        color: red;
    }
</style>