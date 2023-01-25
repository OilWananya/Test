<template>
    <div class="container">
        <div>ประวัติรายการฝาก - ถอน</div>
         <b-table
          responsive
          striped
          hover
          :fields="fields"
          :items="list"
          :busy="isBusy"
          show-empty
          empty-text="No matching records found"
        >
          <template v-slot:cell(datetime)="data">
            <div>
              <span>{{
                $moment(data.item.datetime).format("DD/MM/YYYY HH:mm:ss")
              }}</span>
            </div>
          </template>
          <template v-slot:cell(status)="data">
            <div>
              <span v-if="data.item.status" class="deposit-text">ฝาก</span>
              <span v-else class="withdraw-text">ถอน</span>
            </div>
          </template>
          <template v-slot:cell(action)="data">
                <b-button
                    v-if="data.item.status"
                    class="btn-update"
                    @click.prevent="modalEdit(data.item)"
                >
                    <div>Edit</div>
                </b-button>
                <b-button
                    v-else
                    class="btn-update"
                    @click.prevent="modalDelete"
                >
                    <div>Delete</div>
                </b-button>
            </template>
         </b-table>
         <ModalUpdate 
            ref="modalUpdate"
            :detail="dataList"
         />
    </div>
</template>

<script>
import ModalUpdate from '../../components/Transaction/ModalUpdate.vue'
export default {
    components:{
        ModalUpdate
    },
    data(){
        return{
            dataList : {}
        }
    },
    props:{
        list:{
            required:true,
            type:Array
        },
        fields:{
            required:true,
            type:Array
        },
        isBusy:{
            required:false,
            type:Boolean
        }
    },
    methods:{
        modalEdit(data){
            this.dataList = data
            this.$nextTick().then(() => {
                this.$refs.modalUpdate.show();
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.deposit-text{
    color: green;
}
.withdraw-text{
    color: red;
}
</style>