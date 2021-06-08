<template>
<div>
  <Header/>
  <div class="position-relative pt-9">
    <div class="wrapper"><h1>Welcome</h1></div>
    <div class="title">진료 내역을 살펴보세요!</div>
  </div>

  <div class="container px-3" style="margin-top:20px;">
    <div class="row justify-content-between">
      <table class="tbl" style="width:15%;">
        <thead>
          <tr>
            <th scope="col">진료 내역</th>
          </tr>
        </thead>
        <tbody>
          <span  v-for="e in content" :key="e.id">
            <router-link class="col-sm-6 col-lg-4 p-4" :to="{ name: 'info_list', params: {listId: e.id }}">
            <tr><td scope="row">
              <h2 v-if="e.id == $route.params.listId" style="color:#1366FF;">{{e.name}}</h2>
                <h4 v-if="e.id != $route.params.listId">{{e.name}}</h4>
            </td></tr>
            </router-link>
          </span>
        </tbody>
      </table>

      <table class="tbl" style="width:24%; ">
          <colgroup>
            <col style="width:40%">
            <col style="width:60%">
          </colgroup>
        <thead>
          <tr>
            <th scope="col">의료진 정보</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">병원</td>
            <td scope="row">A 병원</td>
          </tr>
          <tr>
            <td scope="row">의사</td>
            <td scope="row">
              <span  v-for="e in content" :key="e.id">
                <span v-if="e.id == $route.params.listId">{{e.doctor}}</span>
              </span>
            </td>
          </tr>
          <tr >
            <td scope="row">추가 의료진</td>
            <td scope="row">
              <span  v-for="e in content" :key="e.id">
                <span v-if="e.id == $route.params.listId">{{e.mediteam}}</span>
              </span>
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
              <th scope="col">진단서 조회</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td scope="row">병명 : </td>
            <td scope="row">
              <span  v-for="e in content" :key="e.id">
                <span v-if="e.id == $route.params.listId">{{e.disease}}</span>
              </span>
            </td>
          </tr>
          <tr style="height:224px;">
            <td scope="row">병증 : </td>
            <td scope="row">
              <span  v-for="e in content" :key="e.id">
                <span v-if="e.id == $route.params.listId">{{e.note}}</span>
              </span>
            </td>
          </tr>
          <tr style="height:150px;">
            <td scope="row">처방약 : </td>
            <td scope="row">
              <span  v-for="e in content" :key="e.id">
                <span v-if="e.id == $route.params.listId">{{e.medicine}}</span>
              </span>
            </td>
          </tr>
          <tr style="height:150px;">
            <td scope="row">추가 치료 : </td>
            <td scope="row">
              <span  v-for="e in content" :key="e.id">
                <span v-if="e.id == $route.params.listId">{{e.addnote}}</span>
              </span>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

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

<script>
import Header from '@/components/header'
import {Medidata} from '../js/medidata'
export default {
  components: {
    Header,
  },
  data () {
    return {
      database: {
        hospital: 'A',
      },
      content: Medidata
    }
  },
}
</script>
