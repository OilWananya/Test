<template>
    <div class="div-input">
        <div :class="['px-1 input-custom', { error: isValidate }]">
            <label>
                {{ textFloat }}
                <span v-if="isRequired" class="text-danger">*</span>
            </label>
            <div>
                <input
                    :class="['custom-input', { error: isValidate }]"
                    :type="type"
                    :placeholder="placeholder"
                    :name="name"
                    :required="required"
                    :value="value"
                    :size="size"
                    @input="$emit('input', $event.target.value)"
                    @change="onDataChange"
                    @keypress="$emit('onkeypress', $event)"
                    ref="input"
                    :maxlength="maxlength"
                />
            </div>
        </div>
        <span v-if="detail" class="text-desc">{{ detail }}</span>
        <div v-if="v && v.$error" class="text-center mt-2">
            <span class="text-error" v-if="v.required == false">
                กรุณากรอกข้อมูลให้ครบถ้วน
            </span>
            <span class="text-error" v-else-if="v.minLength == false">
                กรุณากรอกรหัสผ่านอย่างน้อย {{ v.$params.minLength.min }}
            </span>
            <span class="text-error" v-else-if="v.email == false">
                กรุณากรอกอีเมลที่ถูกต้อง (เช่น email@example.com)"
            </span>
            <span class="text-error" v-else-if="v.sameAsPassword == false">
                รหัสผ่านไม่ตรงกัน
            </span>
            <span class="text-error" v-else-if="v.password == false">
                รหัสผ่านจะต้องประกอบด้วยตัวอักษร a-z และ 1-9 มีความยาวไม่ต่ำกว่า 6 ตัวอักษร
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        type: {
            required: true,
            type: String
        },
        placeholder:{
            required: true,
            type:String
        },
        name:{
            required:true,
            type:String
        },
        required:{
            required:false,
            type:Boolean
        },
        value: {
            required: false,
            type: [String , Number]
        },
        size: {
            required: false,
            type: String
        },
        isValidate:{
            required:false,
            type:Boolean
        },
        maxlength:{
            required:false,
            type: [Number, String]
        },
        detail: {
            required: false,
            type: String
        },
        v: {
            required: false,
            type: Object
        },
        textFloat:{
            required:false,
            type:String
        },
        isRequired:{
            required:false,
            type:Boolean
        }
    },
    methods:{
        onDataChange(event){
            this.$emit("onDataChange", event.target.value);
            
        },
        onKeypress(event) {
            this.$emit("onKeypress",event.target.value);
        },
    }
}
</script>

<style lang="scss" scoped>
.div-input {
  position: relative;
}
.input-custom > input:disabled {
  background-color: transparent;
}
.input-custom > label {
  color: gray;
  font-size: 16px;
  margin-bottom: 2px;
  margin: auto;
}
.input-custom > input {
  color: gray;
  background-color: transparent;
  border: 0px;
  border-radius: 0px;
  padding: 5px 10px;
  text-align: right;
}
.text-danger{
    color: red;
}
.text-error{
    color: red;
    font-size: 14px;
}
.custom-input.error {
  border: 1px solid red;
}
@media (max-width: 767.98px) {
  .input-custom > label {
    font-size: 15px;
    width: 100%;
  }
}
</style>