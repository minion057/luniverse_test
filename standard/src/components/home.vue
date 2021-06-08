<template>
<div>
  <Header/>
  <div class="position-relative pt-9">
    <div class="wrapper"><h1>Welcome</h1></div>
    <div class="title" v-bind:value="database">{{database.org}}님 환영합니다</div>
  </div>

  <section class="site-home-scene">
    <div class="inner-container">
        <div class="row" >      
 <!--         v-for="e in content" :key="e.id"
            <router-link v-if="e.id == database.org" class="col-sm-6 col-lg-4 p-4" :to="{ name: e.url_name, params: {doctorId: e.id }}">
              <img src="@/assets/img2/user/doctor.jpg" class="photo5" alt>
              <div class="progress-wrap">
                <div style="display: flow-root">
                  <span class="pl-2 t_white f15 font-weight-700 left" id="title">{{e.title}}</span>
              </div>
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-700 mb-2" id="subtitle">{{e.subtitle}}</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">{{e.note}}</div>
            </router-link>
            <div v-if="e.id != database.org" class="col-sm-6 col-lg-4 p-4">
              <img src="@/assets/img2/user/doctor.jpg" class="photo5" alt>
              <div class="progress-wrap">
                <div style="display: flow-root">
                  <span class="pl-2 t_white f15 font-weight-700 left" id="title">{{e.title}}</span>
              </div>
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-700 mb-2" id="subtitle">{{e.subtitle}}</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">{{e.note}}</div>
            </div>-->
          

<!--  :to="{ name: 'info_input', params: {doctorId: 1} }"-->
          <div class="col-sm-6 col-lg-4 p-4" @click="select('doctor')">
            <img src="@/assets/img2/user/doctor.jpg" class="photo5" alt>
            <div class="progress-wrap">
              <div style="display: flow-root">
                <span class="pl-2 t_white f15 font-weight-700 left" id="title">의사</span>
              </div>
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-700 mb-2" id="subtitle">의사, 한의사, 치과의사</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">
              진단서를 작성할 의사라면 여기를 클릭하세요. 
            </div>
          </div>
          <!-- :to="{ name: 'info_addinput', params: {mediteamId: 1} }" -->
          <div class="col-sm-6 col-lg-4 p-4" @click="select('mediteam')">
            <img src="@/assets/img2/user/team.jpg" class="photo5" alt>
            <div class="progress-wrap">
              <div style="display: flow-root">
                <span class="pl-2 t_white f15 font-weight-700 left" id="title">의료진</span>
              </div>
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-bold mb-2" id="subtitle">간호사, 물리치료사, 방사선사 etc</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">
              의사를 제외한 의료진은 여기를 클릭하세요.
            </div>
          </div>
<!-- :to="{ name: 'info_list', params: {listId: 1} }"-->
          <div class="col-sm-6 col-lg-4 p-4" @click="select('patient')">
            <img src="@/assets/img2/user/patient.jpg" class="photo5" alt>
            <div class="progress-wrap">
              <div style="display: flow-root">
                <span class="pl-2 t_white f15 font-weight-700 left" id="title">일반 사용자</span>
              </div>
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-bold mb-2" id="subtitle">환자</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">
              자신의 진료 내역을 보려면 여기를 클릭하세요. 
            </div>
          </div>

          <div style="height: 80px;"> &nbsp;</div>
        </div>
        <!--
        <div style="text-align:center;">
          <input v-on:input="typing" v-bind:value="message" placeholder="id" style="width:25%;margin-bottom:10px;"/>
        </div>
        <div style="text-align:center;">
          <input v-on:input="typing" v-bind:value="message" type="password" placeholder="password" style="width:25%;margin-bottom:10px;"/>
        </div>
        <div style="text-align:center;margin-bottom:50px">
          <button type="submit" class="button-submit flex-box-80"
                  style="width:10%; font-weight:400 !important;" v-on:click="fund()">Login</button>
        </div>-->
    </div>
  </section>
</div>
</template>

<script>
import Header from '@/components/header'
import {Config} from '../js/config'

export default {
  components: {
    Header,
  },
  data () {
    return {
      database: {org:"org"},
      content : [
        {
          id : "doctor",
          url_name:"info_input",
          url_id:"",
          title:"의사",
          subtitle:"의사, 한의사, 치과의사",
          note:"진단서를 작성할 의사라면 여기를 클릭하세요.",
          img_src:"@/assets/img2/user/doctor.jpg"
        },
        {
          id : "mediteam",
          url_name:"info_addinput",
          url_id:"",
          title:"의료진",
          subtitle:"간호사, 물리치료사, 방사선사 etc",
          note:"의사를 제외한 의료진은 여기를 클릭하세요.",
          img_src:"@/assets/img2/user/team.jpg"
        },
        {
          id : "patient",
          url_name:"info_list",
          url_id:"",
          title:"일반 사용자",
          subtitle:"환자",
          note:"자신의 진료 내역을 보려면 여기를 클릭하세요. ",
          img_src:"@/assets/img2/user/patient.jpg"
        }
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
          var temp = response.data;
          var org = temp.org;
          org = org.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.database.org = org;          
        })
        .catch((error) => {
          alert(error);
        })
    }, select(orgid) {
      switch(orgid){
          case "doctor" :
            if(this.database.org == "doctor") {
              location.href="/doctor/1";
            } else{alert('권한이 없습니다.');}
            break;        
          case "mediteam" :
            if(this.database.org == "doctor" || this.database.org == "mediteam" ) {
              location.href="/mediteam/1";
            } else{alert('권한이 없습니다.');} 
            break;        
          case "patient" :
            location.href="/carelist/1";
            break;        
          default :
            //console.log("org이상");
            break;        
      }
    }
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
  #title{
    font-size:30px;
    margin-top: -10px;
  }
  #subtitle{
    margin-top: -30px;
    float: left;
  }

</style>
