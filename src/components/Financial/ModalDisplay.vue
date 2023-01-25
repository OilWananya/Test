<template>
  <b-modal
    ref="modalDisplayAmount"
    centered
    @show="show"
    @hidden="hide"
    body-class="p-4"
    v-model="isShowModal"
  >
    <template #modal-header>
      <div class="ft-black">ยืนยันการฝาก - ถอน</div>
    </template>
    <div>
      จำนวนเงิน {{total}} บาท
    </div>
    <template #modal-footer>
      <b-row>
        <b-col
          ><b-button class="btn-confirm" @click.prevent="$emit('confirmDeposit' , true)">
            ยืนยัน
          </b-button></b-col
        >
        <b-col
          ><b-button @click="hide" class="btn-cancel"> ยกเลิก </b-button></b-col
        >
      </b-row>
    </template>
  </b-modal>
</template>

<script>
export default {
  props:{
    total:{
      required:true,
      type:Number
    }
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods:{
    show() {
      this.isShowModal = true;
    },
    hide() {
      this.isShowModal = false;
    },
  }
}
</script>

<style>

</style>