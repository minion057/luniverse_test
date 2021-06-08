<template>
<div>
  <Header/>
  <div class="position-relative pt-9">
    <div class="wrapper"><h1>Welcome</h1></div>
    <div class="title">환자를 선택하고 진료하세요!</div>
  </div>

  <div style="text-align:center">
    <strong class="f24 font-weight-700 mb4" v-bind:value="database">{{database.input}}
          <span class="f17 font-weight-700">&nbsp; 개의 진료</span></strong>
    <strong class="f24 font-weight-700 mb4" >&nbsp;/&nbsp;</strong>
    <strong class="f24 font-weight-700 mb4" v-bind:value="database">{{database.add}}
          <span class="f17 font-weight-700">&nbsp; 개의 의무기록</span></strong>
  </div>

  <div class="container px-3" style="margin-top:20px;">
    <div class="row justify-content-between">
      <table class="tbl" style="width:20%;">
        <thead>
          <tr>
            <th scope="col">환자 목록</th>
          </tr>
        </thead>
        <tbody>
          <span  v-for="e in content" :key="e.id">            
            <tr><td scope="row">
              <div style="padding:0px 50px 0px 50px;">
                <h2 v-if="e.id == $route.params.doctorId" style="color:#1366FF;">{{e.name}}</h2>
                <h4 v-if="e.id != $route.params.doctorId">
                  <a v-bind:href="e.id" style="color:black;" >{{e.name}}</a>
                </h4>
              </div>
            </td></tr>
          </span><!--
          <span  v-for="e in content" :key="e.id">
            <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'info_input', params: {doctorId: e.id }}">
            <tr><td scope="row">
              <div style="padding:0px 50px 0px 50px;">
                <h2 v-if="e.id == $route.params.doctorId" style="color:#1366FF;">{{e.name}}</h2>
                <h4 v-if="e.id != $route.params.doctorId">{{e.name}}</h4>
              </div>
            </td></tr>
            </router-link>
          </span>-->
        </tbody>
      </table>

      <table class="tbl" style="width:19%; padding-left:1%;">
        <thead>
          <tr>
            <th scope="col">환자 정보</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">이름</td>
            <td scope="row">
              <span  v-for="e in content" :key="e.id">
                <span v-if="e.id == $route.params.doctorId">{{e.name}}</span>
              </span>
            </td>
          </tr>
          <tr >
            <td scope="row">나이</td>
            <td scope="row">
              <span  v-for="e in content" :key="e.id">
                <span v-if="e.id == $route.params.doctorId">{{e.age}}</span>
              </span>살
            </td>
          </tr>
          <tr >
            <td scope="row">체중</td>
            <td scope="row">
              <span  v-for="e in content" :key="e.id">
                <span v-if="e.id == $route.params.doctorId">{{e.weight}}</span>
              </span>kg
            </td>
          </tr>
          <tr >
            <td scope="row">특이사항</td>
            <td scope="row">
              <span  v-for="e in content" :key="e.id">
                <span v-if="e.id == $route.params.doctorId">{{e.note}}</span>
              </span>
            </td>
          </tr>
          <tr >
            <td scope="row">과거 진료 내역</td>
            <td scope="row">
              <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'info_list', params: {listId: 1} }">click</router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="tbl" style="width:60%;">
        <table class="tbl">
          <colgroup>
            <col style="width:15%">
            <col style="width:85%">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">진단서 작성</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td scope="row">병명 : </td>
            <td scope="row"><input v-on:input="typing" placeholder="" /></td>
          </tr>
          <tr style="height:210px;">
            <td scope="row">병증 : </td>
            <td scope="row"><textarea v-model="disease" placeholder="" /></td>
          </tr>
          <tr style="height:150px;">
            <td scope="row">처방약 : </td>
            <td scope="row"><textarea v-model="medicine" placeholder="" /></td>
          </tr>
          <tr style="height:150px;">
            <td scope="row">추가 치료 : </td>
            <td scope="row"><textarea v-model="note" placeholder="ex. 물리치료" /></td>
          </tr>
          <tr>
            <td scope="row"></td>
            <td scope="row">
              <button type="submit" class="button-submit flex-box-80"
                  style="width:80%; font-weight:400 !important;" v-on:click="input()">Input</button>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from '@/components/header'
import {Config} from '../js/config'
import {Database} from '../js/database'

export default {
  components: {
    Header,
  },
  data () {
    return {
      database: Database,
      content: [
        {
          id: '1',
          name: '박환자',
          age: '24',
          weight: '50',
          note: 'xx 알레르기'
        },
        {
          id: '2',
          name: '이환자',
          age: '80',
          weight: '45',
          note: '귀가 어두움'
        },
        {
          id: '3',
          name: '김환자',
          age: '24',
          weight: '50',
          note: ''
        },
        {
          id: '4',
          name: '홍환자',
          age: '24',
          weight: '50',
          note: 'xx 알레르기'
        },
      ]
    }
  },
  computed: {
    walletAddress() {
      return Config.walletAddress
    },
    apiKey() {
      return Config.dapp.apiKey
    },
    txActionName() {
      return Config.txActionName
    },
    userName() {
      return Config.userName
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.axios.get(`http://localhost:8081/tx/v1.0/histories?next=0`,{
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': `application/json`
        },
      })
        .then((response) => {
          var i = parseInt(this.database.input.replace(/,/g,""));
          var a = parseInt(this.database.add.replace(/,/g,""));
          
          var temp = response.data;
          i = i + temp.fundingCount;
          a = a + temp.likeCount;

          i = i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.database.input = i;
          a = a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.database.add = a;
          
        })
        .catch((error) => {
          alert(error);
        })
    },
    input(){
      let n = parseInt(this.database.input.replace(/,/g,""));
      this.axios.post(`http://localhost:8081/tx/v1.0/transactions/input`,{
          'from': this.walletAddress.pd,
          'inputs' : {
            'receiverAddress': this.walletAddress.user,
            'valueAmount': '100000000000000000000'
          }
      },
      {
        headers: {
            'api-key': this.apiKey
        }
      }
      )
        .then(() => {
          alert('전송 성공');
          n = n + 1;
          n = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.database.input=n;
          this.$router.go();
        })
        .catch((error) => {
        alert(error);
          alert('전송 실패!')
        });
    },
  }
}
</script>
<style scoped>
  .position-relative{
    background-color: #1B2733 !important;
    height: 390px;
  }
  .inner-container{
    padding-top: 60px !important;
  }

  input, textarea{
    width:100%;
    height:100%;
  }
</style>
