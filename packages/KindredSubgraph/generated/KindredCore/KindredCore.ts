// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BlackListed extends ethereum.Event {
  get params(): BlackListed__Params {
    return new BlackListed__Params(this);
  }
}

export class BlackListed__Params {
  _event: BlackListed;

  constructor(event: BlackListed) {
    this._event = event;
  }

  get blacklistee(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class FinalYieldDistribution extends ethereum.Event {
  get params(): FinalYieldDistribution__Params {
    return new FinalYieldDistribution__Params(this);
  }
}

export class FinalYieldDistribution__Params {
  _event: FinalYieldDistribution;

  constructor(event: FinalYieldDistribution) {
    this._event = event;
  }

  get participants(): Array<Address> {
    return this._event.parameters[0].value.toAddressArray();
  }

  get shares(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class LoanTaken extends ethereum.Event {
  get params(): LoanTaken__Params {
    return new LoanTaken__Params(this);
  }
}

export class LoanTaken__Params {
  _event: LoanTaken;

  constructor(event: LoanTaken) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PaymentMade extends ethereum.Event {
  get params(): PaymentMade__Params {
    return new PaymentMade__Params(this);
  }
}

export class PaymentMade__Params {
  _event: PaymentMade;

  constructor(event: PaymentMade) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get poolId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PoolRegistered extends ethereum.Event {
  get params(): PoolRegistered__Params {
    return new PoolRegistered__Params(this);
  }
}

export class PoolRegistered__Params {
  _event: PoolRegistered;

  constructor(event: PoolRegistered) {
    this._event = event;
  }

  get poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get payAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get users(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get dueDates(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }
}

export class KindredCore__poolsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: i32;
  value6: i32;
  value7: Address;
  value8: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: i32,
    value6: i32,
    value7: Address,
    value8: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set(
      "value5",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value5))
    );
    map.set(
      "value6",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value6))
    );
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    return map;
  }

  getPayAmount(): BigInt {
    return this.value0;
  }

  getCurrentPot(): BigInt {
    return this.value1;
  }

  getExpectedTermPot(): BigInt {
    return this.value2;
  }

  getLatefee(): BigInt {
    return this.value3;
  }

  getShares(): BigInt {
    return this.value4;
  }

  getCurrentDueDate(): i32 {
    return this.value5;
  }

  getStage(): i32 {
    return this.value6;
  }

  getVault(): Address {
    return this.value7;
  }

  getToken(): Address {
    return this.value8;
  }
}

export class KindredCore__usersResult {
  value0: boolean;
  value1: boolean;

  constructor(value0: boolean, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }

  getIsBlacklisted(): boolean {
    return this.value0;
  }

  getIsParticipant(): boolean {
    return this.value1;
  }
}

export class KindredCore extends ethereum.SmartContract {
  static bind(address: Address): KindredCore {
    return new KindredCore("KindredCore", address);
  }

  generateDemoTimestamps(): Array<BigInt> {
    let result = super.call(
      "generateDemoTimestamps",
      "generateDemoTimestamps():(uint256[4])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_generateDemoTimestamps(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "generateDemoTimestamps",
      "generateDemoTimestamps():(uint256[4])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getPoolsParticipatingIn(user: Address): Array<BigInt> {
    let result = super.call(
      "getPoolsParticipatingIn",
      "getPoolsParticipatingIn(address):(uint256[])",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigIntArray();
  }

  try_getPoolsParticipatingIn(
    user: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getPoolsParticipatingIn",
      "getPoolsParticipatingIn(address):(uint256[])",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  isLate(user: Address, poolId: BigInt): boolean {
    let result = super.call("isLate", "isLate(address,uint256):(bool)", [
      ethereum.Value.fromAddress(user),
      ethereum.Value.fromUnsignedBigInt(poolId)
    ]);

    return result[0].toBoolean();
  }

  try_isLate(user: Address, poolId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isLate", "isLate(address,uint256):(bool)", [
      ethereum.Value.fromAddress(user),
      ethereum.Value.fromUnsignedBigInt(poolId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  madePaymentsForDueDate(
    users: Address,
    poolId: BigInt,
    dueDate: BigInt
  ): boolean {
    let result = super.call(
      "madePaymentsForDueDate",
      "madePaymentsForDueDate(address,uint256,uint256):(bool)",
      [
        ethereum.Value.fromAddress(users),
        ethereum.Value.fromUnsignedBigInt(poolId),
        ethereum.Value.fromUnsignedBigInt(dueDate)
      ]
    );

    return result[0].toBoolean();
  }

  try_madePaymentsForDueDate(
    users: Address,
    poolId: BigInt,
    dueDate: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "madePaymentsForDueDate",
      "madePaymentsForDueDate(address,uint256,uint256):(bool)",
      [
        ethereum.Value.fromAddress(users),
        ethereum.Value.fromUnsignedBigInt(poolId),
        ethereum.Value.fromUnsignedBigInt(dueDate)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  pools(poolId: BigInt): KindredCore__poolsResult {
    let result = super.call(
      "pools",
      "pools(uint256):(uint256,uint256,uint256,uint256,uint256,uint8,uint8,address,address)",
      [ethereum.Value.fromUnsignedBigInt(poolId)]
    );

    return new KindredCore__poolsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toI32(),
      result[6].toI32(),
      result[7].toAddress(),
      result[8].toAddress()
    );
  }

  try_pools(poolId: BigInt): ethereum.CallResult<KindredCore__poolsResult> {
    let result = super.tryCall(
      "pools",
      "pools(uint256):(uint256,uint256,uint256,uint256,uint256,uint8,uint8,address,address)",
      [ethereum.Value.fromUnsignedBigInt(poolId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new KindredCore__poolsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toI32(),
        value[6].toI32(),
        value[7].toAddress(),
        value[8].toAddress()
      )
    );
  }

  users(partipants: Address, poolId: BigInt): KindredCore__usersResult {
    let result = super.call("users", "users(address,uint256):(bool,bool)", [
      ethereum.Value.fromAddress(partipants),
      ethereum.Value.fromUnsignedBigInt(poolId)
    ]);

    return new KindredCore__usersResult(
      result[0].toBoolean(),
      result[1].toBoolean()
    );
  }

  try_users(
    partipants: Address,
    poolId: BigInt
  ): ethereum.CallResult<KindredCore__usersResult> {
    let result = super.tryCall("users", "users(address,uint256):(bool,bool)", [
      ethereum.Value.fromAddress(partipants),
      ethereum.Value.fromUnsignedBigInt(poolId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new KindredCore__usersResult(value[0].toBoolean(), value[1].toBoolean())
    );
  }
}

export class AddToBlacklistCall extends ethereum.Call {
  get inputs(): AddToBlacklistCall__Inputs {
    return new AddToBlacklistCall__Inputs(this);
  }

  get outputs(): AddToBlacklistCall__Outputs {
    return new AddToBlacklistCall__Outputs(this);
  }
}

export class AddToBlacklistCall__Inputs {
  _call: AddToBlacklistCall;

  constructor(call: AddToBlacklistCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _user(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _recalibrateLoan(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class AddToBlacklistCall__Outputs {
  _call: AddToBlacklistCall;

  constructor(call: AddToBlacklistCall) {
    this._call = call;
  }
}

export class DistributeYieldCall extends ethereum.Call {
  get inputs(): DistributeYieldCall__Inputs {
    return new DistributeYieldCall__Inputs(this);
  }

  get outputs(): DistributeYieldCall__Outputs {
    return new DistributeYieldCall__Outputs(this);
  }
}

export class DistributeYieldCall__Inputs {
  _call: DistributeYieldCall;

  constructor(call: DistributeYieldCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get sharesDistribution(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class DistributeYieldCall__Outputs {
  _call: DistributeYieldCall;

  constructor(call: DistributeYieldCall) {
    this._call = call;
  }
}

export class PayPoolCall extends ethereum.Call {
  get inputs(): PayPoolCall__Inputs {
    return new PayPoolCall__Inputs(this);
  }

  get outputs(): PayPoolCall__Outputs {
    return new PayPoolCall__Outputs(this);
  }
}

export class PayPoolCall__Inputs {
  _call: PayPoolCall;

  constructor(call: PayPoolCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PayPoolCall__Outputs {
  _call: PayPoolCall;

  constructor(call: PayPoolCall) {
    this._call = call;
  }
}

export class RegisterCall extends ethereum.Call {
  get inputs(): RegisterCall__Inputs {
    return new RegisterCall__Inputs(this);
  }

  get outputs(): RegisterCall__Outputs {
    return new RegisterCall__Outputs(this);
  }
}

export class RegisterCall__Inputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }

  get poolToRegister(): RegisterCallPoolToRegisterStruct {
    return changetype<RegisterCallPoolToRegisterStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class RegisterCallPoolToRegisterStruct extends ethereum.Tuple {
  get participants(): Array<Address> {
    return this[0].toAddressArray();
  }

  get dueDates(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get payAmount(): BigInt {
    return this[2].toBigInt();
  }

  get currentPot(): BigInt {
    return this[3].toBigInt();
  }

  get expectedTermPot(): BigInt {
    return this[4].toBigInt();
  }

  get latefee(): BigInt {
    return this[5].toBigInt();
  }

  get shares(): BigInt {
    return this[6].toBigInt();
  }

  get currentDueDate(): i32 {
    return this[7].toI32();
  }

  get stage(): i32 {
    return this[8].toI32();
  }

  get vault(): Address {
    return this[9].toAddress();
  }

  get token(): Address {
    return this[10].toAddress();
  }
}

export class TakeLoanCall extends ethereum.Call {
  get inputs(): TakeLoanCall__Inputs {
    return new TakeLoanCall__Inputs(this);
  }

  get outputs(): TakeLoanCall__Outputs {
    return new TakeLoanCall__Outputs(this);
  }
}

export class TakeLoanCall__Inputs {
  _call: TakeLoanCall;

  constructor(call: TakeLoanCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class TakeLoanCall__Outputs {
  _call: TakeLoanCall;

  constructor(call: TakeLoanCall) {
    this._call = call;
  }
}
