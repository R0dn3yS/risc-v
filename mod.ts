import { SystemInterface } from './system-interface/mod.ts';
import { ROMDevice } from './system-interface/rom.ts';
import { RAMDevice } from './system-interface/ram.ts';

import { toHexString } from './util.ts';

class RVI32System {
	rom = new ROMDevice();
	ram = new RAMDevice();

	bus = new SystemInterface(this.rom, this.ram);
}

const rv = new RVI32System();

rv.rom.load(new Uint32Array([
	0xdeadbeef,
	0xc0decafe,
]));

console.log(toHexString(rv.bus.read(0x10000000)));
console.log(toHexString(rv.bus.read(0x10000004)));