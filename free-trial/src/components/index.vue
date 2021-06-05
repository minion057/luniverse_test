<template>
<div>
  <Header/>
  <div class="position-relative pt-9">
    <div class="wrapper"><h1>Welcome</h1></div>
    <div class="title">로그인하세요!</div>
  </div>

  <section class="site-home-scene">
    <div class="inner-container">
        <div class="row">
          <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'info_input'}">
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
          </router-link>

          <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'info_addinput'}">
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
          </router-link>

          <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'info_list'}">
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
          </router-link>
          <div style="height: 80px;"> &nbsp;</div>
        </div>
        
        <div style="text-align:center;">
          <input v-on:input="typing" v-bind:value="message" placeholder="id" style="width:25%;margin-bottom:10px;"/>
        </div>
        <div style="text-align:center;">
          <input v-on:input="typing" v-bind:value="message" type="password" placeholder="password" style="width:25%;margin-bottom:10px;"/>
        </div>
        <div style="text-align:center;margin-bottom:50px">
          <button type="submit" class="button-submit flex-box-80"
                  style="width:10%; font-weight:400 !important;" v-on:click="fund()">Login</button>
        </div>
    </div>
  </section>
</div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header,
  },
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
