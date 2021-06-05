/*
# Copyright Lambda256 Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
*/

const shim = require('fabric-shim');
const util = require('util');

var Chaincode = class {

  // Initialize the chaincode
  async Init(stub) {
    // 체인코드 배포할 때 Init Parameter : ["init","hospital","A","Doctor","Mr.Kim","list","3"]
    
    console.info('========= luniverstar Init =========');
    let ret = stub.getFunctionAndParameters();
    console.info(ret);
    let args = ret.params;
    // initialize only if 6 parameters passed.
    if (args.length != 6) {
      return shim.error('Incorrect number of arguments. Expecting 6');
    }
    let Hospital = args[0];
    let Doctor = args[2];
    let listnum = args[4];
    let Hval = args[1];
    let Dval = args[3];
    let Lval = args[5];

    if (typeof parseInt(Lval) !== 'number') {
      return shim.error('Expecting integer value for asset holding');
    }

    try {
      await stub.putState(Hospital, Buffer.from(Hval));
      try {
        await stub.putState(Doctor, Buffer.from(Dval));
        try {
          await stub.putState(listnum, Buffer.from(Lval));
          return shim.success();
        } catch (err) {
          return shim.error(err);
        }
      } catch (err) {
        return shim.error(err);
      }
    } catch (err) {
      return shim.error(err);
    }
  }

  async Invoke(stub) {
    let ret = stub.getFunctionAndParameters();
    console.info(ret);
    let method = this[ret.fcn];
    if (!method) {
      // method가 아래 선언한 invork, delete, query가 아닌 경우 
      console.log('no method of name:' + ret.fcn + ' found');
      return shim.success();
    }
    try {
      // 찾은 method 실행
      let payload = await method(stub, ret.params);
      return shim.success(payload);
    } catch (err) {
      console.log(err);
      return shim.error(err);
    }
  }

  async invoke(stub, args) {
    if (args.length != 2) {
      // 매개변수가 틀린 경우 에러 발생
      throw new Error('Incorrect number of arguments. Expecting 2');
    }

    let A = args[0];
    if (!A) { 
      // asset이 비어있으면 에러 발생
      throw new Error('asset holding must not be empty');
    }

    // Get the state from the ledger
    // 원장 상태 가져오기
    let Avalbytes = await stub.getState(A);
    if (!Avalbytes) {
      // getstate한 A의 상태를 가져오지 못하는 경우 에러 발생
      throw new Error('Failed to get state of asset holder A');
    }
    let Aval = parseInt(Avalbytes.toString());

    // Perform the execution 실행
    let amount = parseInt(args[1]);
    if (typeof amount !== 'number') {
      // 전송할 '값'이 없는 경우 에러 발생 
      throw new Error('Expecting integer value for amount to be transferred');
    }

    // 모든 값이 정상적이라면 값을 더함
    Aval = Aval + amount;
    console.info(util.format('Aval = %d\n', Aval));

    // Write the states back to the ledger
    // 상태를 다시 원장에 기록
    await stub.putState(A, Buffer.from(Aval.toString()));

  }

  // Deletes an entity from state
  async delete(stub, args) {
    if (args.length != 1) {
      // 매개변수 에러
      throw new Error('Incorrect number of arguments. Expecting 1');
    }

    let A = args[0];

    // Delete the key from the state in ledger
    await stub.deleteState(A);
  }

  // query callback representing the query of a chaincode
  // 체인 코드의 쿼리를 나타내는 쿼리 콜백
  async query(stub, args) {
    if (args.length != 1) {
      // 매개변수 에러
      throw new Error('Incorrect number of arguments. Expecting name of the person to query')
    }

    let jsonResp = {};
    let A = args[0]; // 사용자

    // Get the state from the ledger
    let Avalbytes = await stub.getState(A);
    if (!Avalbytes) {
      // A에 대한 상태를 얻지 못한 경우 에러 발생
      jsonResp.error = 'Failed to get state for ' + A;
      throw new Error(JSON.stringify(jsonResp));
    }

    jsonResp.name = A;
    jsonResp.amount = Avalbytes.toString();
    console.info('Query Response:');
    console.info(jsonResp);
    return Avalbytes;
  }
};

shim.start(new Chaincode());
