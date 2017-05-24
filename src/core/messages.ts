'use strict';
import 'reflect-metadata';
import {plainToClass, classToPlain} from 'class-transformer';

export class ButtplugMessage {
  constructor(public Id: number) {
  }

  toJSON() {
    let json_obj = {};
    let instance: any = this.constructor;
    json_obj[instance.name] = classToPlain(this);
    return JSON.stringify(json_obj);
  }

}

export class Ok extends ButtplugMessage {
  constructor(public Id: number) {
    super(Id);
  }
}

export class Ping extends ButtplugMessage {
  constructor(public Id: number) {
    super(Id);
  }
}

export class Test extends ButtplugMessage {
  constructor(public Id: number,
              public TestString: string) {
    super(Id);
  }
}

export class Error extends ButtplugMessage {
  constructor(public Id: number,
              public ErrorMessage: string) {
    super(Id);
  }
}

export class Device
{
  constructor(public DeviceIndex: number,
              public DeviceName: string,
              public DeviceMessages: Array<string>) {
  }
}


export class DeviceList extends ButtplugMessage {
  constructor(public Id: number,
              public Devices: Array<Device>) {
    super(Id);
  }
}

export class DeviceAdded extends ButtplugMessage {
  constructor(public Id: number,
              public DeviceIndex: number,
              public DeviceName: string,
              public DeviceMessages: Array<string>) {
    super(Id);
  }
}

export class DeviceRemoved extends ButtplugMessage {
  constructor(public Id: number,
              public DeviceIndex: number) {
    super(Id);
  }
}

export class RequestDeviceList extends ButtplugMessage {
  constructor(public Id: number) {
    super(Id);
  }
}

export class StartScanning extends ButtplugMessage {
  constructor(public Id: number) {
    super(Id);
  }
}

export class StopScanning extends ButtplugMessage {
  constructor(public Id: number) {
    super(Id);
  }
}

export class RequestLog extends ButtplugMessage {
  constructor(public Id: number,
              public LogLevel: string) {
    super(Id);
  }
}

export class Log extends ButtplugMessage {
  constructor(public Id: number,
              public LogLevel: string,
              public LogMessage: string) {
    super(Id);
  }
}

export class RequestServerInfo extends ButtplugMessage {
  constructor(public Id: number) {
    super(Id);
  }
}

export class ServerInfo extends ButtplugMessage {
  constructor(public Id: number,
              public MajorVersion: number,
              public MinorVersion: number,
              public BuildVersion: number) {
    super(Id);
  }
}

export class FleshlightLaunchRawCmd extends ButtplugMessage {
  constructor(public Id: number,
              public Speed: number,
              public Position: number) {
    super(Id);
  }
}

export class KiirooRawCmd extends ButtplugMessage {
  constructor(public Id: number,
              public Position: number) {
    super(Id);
  }
}

export class SingleMotorVibrateCmd extends ButtplugMessage {
  constructor(public Id: number,
              public Speed: number) {
    super(Id);
  }
}

let Messages = {
  Ok: Ok,
  Ping: Ping,
  Test: Test,
  Error: Error,
  DeviceList: DeviceList,
  DeviceAdded: DeviceAdded,
  DeviceRemoved: DeviceRemoved,
  RequestDeviceList: RequestDeviceList,
  StartScanning: StartScanning,
  StopScanning: StopScanning,
  RequestLog: RequestLog,
  Log: Log,
  RequestServerInfo: RequestServerInfo,
  ServerInfo: ServerInfo,
  FleshlightLaunchRawCmd: FleshlightLaunchRawCmd,
  KiirooRawCmd: KiirooRawCmd,
  SingleMotorVibrateCmd: SingleMotorVibrateCmd
};

export function FromJSON(str)
{
  // TODO We're assuming we'll always get valid json here. While it should pass
  // through the schema parser first, it'd probably be good to make sure it
  // deals with parse failures too.
  let obj = JSON.parse(str);
  return plainToClass(Messages[Object.getOwnPropertyNames(obj)[0]],
                      obj[Object.getOwnPropertyNames(obj)[0]]);
}

