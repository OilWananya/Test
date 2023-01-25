<template>
    <div>
        <b-container>
            <div class="flex-column">
                <form id="form">
                    <div class="mb-2 py-3">
                        <InputText
                            v-model="form.email"
                            size="lg"
                            textFloat="Email"
                            placeholder="Email"
                            type="email"
                            name="email"
                            isRequired
                            :isValidate="$v.form.email.$error"
                            :v="$v.form.email"
                            @onkeypress="handleSubmit"
                            @onDataChange="(val) => (form.email = val)"
                        />
                        <InputText
                            v-model="form.password"
                            size="lg"
                            textFloat="Password"
                            placeholder="Password"
                            type="password"
                            name="password"
                            maxlength="13"
                            isRequired
                            :isValidate="$v.form.password.$error"
                            :v="$v.form.password"
                            @onkeypress="handleSubmit"
                            @onDataChange="(val) => (form.password = val)"
                        />
                        <div class="panel-error">
                            <span v-if="error" class="text-white">{{ error }}</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <b-button
                            block
                            type="button"
                            size="lg"
                            @click="checkForm"
                            class="btn-login font-weight-bold my-2"
                        >
                            <div class="d-flex">
                                <div class=" mx-auto">
                                    Login
                                </div>
                            </div>
                        </b-button>
                    </div>
                </form>
            </div> 
        </b-container> 
    </div>
</template>

<script>
import { required, email , helpers , minLength } from "vuelidate/lib/validators";
const password = helpers.regex("password",/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9!-_]+)$/);
import InputText from "../Inputs/InputText.vue"
export default {
    name : 'LoginPanel',
    components:{
        InputText
    },
    data(){
        return{
            error : "",
            form : {
                email : "",
                password : ""
            }
        }
    },
    validations: {
            form: {
                email: { 
                    required , 
                    email 
                },
                password: {
                    required,
                    minLength: minLength(6),
                    password
                }
            }
    },
    methods:{
        checkForm(){
            this.$v.form.$touch();
            if (this.$v.form.$error) return;
            this.$cookies.set("setLoginTestClickNext", true);
            this.$cookies.set("emailTestClickNext",this.form.email);
            window.location.href = "/Financial";
        },
        handleSubmit(){
            this.$v.form.$touch();
            if (this.$v.form.$error) return;
        },
        onDataChange(){
            this.$v.form.$touch();
            if (this.$v.form.$error) return;
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-login {
  font-size: 16px;
  background-color: gray;
  color: white;
  border: none;
}
.btn-login:active {
  background-color: red;
  color: white ;
  border: none;
}
</style>