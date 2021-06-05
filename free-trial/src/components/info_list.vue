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
          <tr>
            <td scope="row">2021.02.02 - A병원</td>
          </tr>
          <tr>
            <td scope="row">2021.02.09 - A병원</td>
          </tr>
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
            <td scope="row">박의사</td>
          </tr>
          <tr >
            <td scope="row">간호사</td>
            <td scope="row">김간호</td>
          </tr>
          <tr >
            <td scope="row">추가 의료진</td>
            <td scope="row">물리치료사 - 김물치<br>
                            간호조무사 - 이조무</td>
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
            <td scope="row"><input v-on:input="typing" v-bind:value="message" disabled/>
            </td>
          </tr>
          <tr style="height:224px;">
            <td scope="row">병증 : </td>
            <td scope="row"> <textarea v-model="message" disabled/></td>
          </tr>
          <tr style="height:150px;">
            <td scope="row">처방약 : </td>
            <td scope="row"><textarea v-model="message" disabled/></td>
          </tr>
          <tr style="height:150px;">
            <td scope="row">추가 치료 : </td>
            <td scope="row"><textarea v-model="message" disabled/></td>
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

  input, textarea{
    width:100%;
    height:100%;
  }
</style>
