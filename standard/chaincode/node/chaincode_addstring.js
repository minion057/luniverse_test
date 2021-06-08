const shim = require('fabric-shim');
const util = require('util');

var Chaincode = class {

  // Initialize the chaincode
  async Init(stub) {
    console.info('========= luniverstar Init =========');
    let ret = stub.getFunctionAndParameters();
    console.info(ret);
/*
    let date = "date";
    let dateval = new Date();
    let doctor = "doctor";
    let doctorval = "Dr.Kim";
    */
    let patient = "patient";
    let patientval = "P1_id";
    let medidata = "medidata"
    let medidataval = "medidata"
    try {
      await stub.putState(patient, Buffer.from(patientval));
      try {
        await stub.putState(medidata, Buffer.from(medidataval));
        return shim.success();
      } catch (err) {
        return shim.error(err);
      } 
    }catch (err) {
      return shim.error(err);
    }      
/*
    try {
      await stub.putState(date, Buffer.from(dateval));
      try {
        await stub.putState(doctor, Buffer.from(doctorval));
        try {
          await stub.putState(patient, Buffer.from(patientval));
          try {
            await stub.putState(medidata, Buffer.from(medidataval))
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
    } catch (err) {
      return shim.error(err);
    }*/
  }

  async Invoke(stub) {
    let ret = stub.getFunctionAndParameters();
    console.info(ret);
    let method = this[ret.fcn];
    if (!method) {
      console.log('no method of name:' + ret.fcn + ' found');
      return shim.success();
    }
    try {
      let payload = await method(stub, ret.params);
      return shim.success(payload);
    } catch (err) {
      console.log(err);
      return shim.error(err);
    }
  }

  async invoke(stub, args) {
    if (args.length != 2) {
      throw new Error('Incorrect number of arguments. Expecting 2');
    }

    let A = args[0];
    if (!A) {
      throw new Error('asset holding must not be empty');
    }

    // Get the state from the ledger
    let Avalbytes = await stub.getState(A);
    if (!Avalbytes) {
      throw new Error('Failed to get state of asset holder A');
    }
    let Aval = Avalbytes.toString();

    Aval = Aval + amount;
    console.info(util.format('Aval = %s\n', Aval));

    // Write the states back to the ledger
    await stub.putState(A, Buffer.from(Aval.toString()));

  }

  // Deletes an entity from state
  async delete(stub, args) {
    if (args.length != 1) {
      throw new Error('Incorrect number of arguments. Expecting 1');
    }

    let A = args[0];

    // Delete the key from the state in ledger
    await stub.deleteState(A);
  }

  // query callback representing the query of a chaincode
  async query(stub, args) {
    if (args.length != 1) {
      throw new Error('Incorrect number of arguments. Expecting name of the person to query')
    }

    let jsonResp = {};
    let A = args[0];

    // Get the state from the ledger
    let Avalbytes = await stub.getState(A);
    if (!Avalbytes) {
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
