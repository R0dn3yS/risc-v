import { SystemInterface } from './system-interface/mod.ts';
import { ROMDevice } from './system-interface/rom.ts';
import { RAMDevice } from './system-interface/ram.ts';

class RVI32System {
	rom = new ROMDevice();
	ram = new RAMDevice();

	bus = new SystemInterface(this.rom, this.ram);
}

