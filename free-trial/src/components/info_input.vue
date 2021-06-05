<template>
<div>
  <Header/>
  <div class="position-relative pt-9">
    <div class="wrapper"><h1>Welcome</h1></div>
    <div class="title">환자를 선택하고 진료하세요!</div>
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
          <tr>
            <td scope="row">김ㅇㅇ</td>
          </tr>
          <tr >
            <td scope="row">박ㅍㅍ</td>
          </tr>
          <tr >
            <td scope="row">이ㅁㅁ</td>
          </tr>
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
            <td scope="row">김ㅇㅇ</td>
          </tr>
          <tr >
            <td scope="row">나이</td>
            <td scope="row">24 살</td>
          </tr>
          <tr >
            <td scope="row">체중</td>
            <td scope="row">55 kg</td>
          </tr>
          <tr >
            <td scope="row">특이사항</td>
            <td scope="row">xx 알레르기</td>
          </tr>
          <tr >
            <td scope="row">과거 진료 내역</td>
            <td scope="row"><a href="/list">click</a></td>
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
            <td scope="row"><input v-on:input="typing" v-bind:value="message" placeholder="" /></td>
          </tr>
          <tr style="height:210px;">
            <td scope="row">병증 : </td>
            <td scope="row"><textarea v-model="message" placeholder="" /></td>
          </tr>
          <tr style="height:150px;">
            <td scope="row">처방약 : </td>
            <td scope="row"><textarea v-model="message" placeholder="" /></td>
          </tr>
          <tr style="height:150px;">
            <td scope="row">추가 치료 : </td>
            <td scope="row"><textarea v-model="message" placeholder="ex. 물리치료" /></td>
          </tr>
          <tr>
            <td scope="row"></td>
            <td scope="row">
              <button type="submit" class="button-submit flex-box-80"
                  style="width:80%; font-weight:400 !important;" v-on:click="fund()">Input</button>
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
