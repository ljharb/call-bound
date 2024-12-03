import callBind from 'call-bind';

declare function callBoundIntrinsic(name: string, allowMissing?: boolean): ReturnType<typeof callBind>;

export = callBoundIntrinsic;