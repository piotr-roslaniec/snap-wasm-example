const { ethErrors } = require('eth-rpc-errors');
const { add } = require('rust-lib');

wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  switch (requestObject.method) {
    case 'hello':
      return add(2 + 2);
    default:
      throw ethErrors.rpc.methodNotFound({ data: { request: requestObject } });
  }
});
