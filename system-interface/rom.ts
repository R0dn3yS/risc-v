import { MMIODevice } from './mod.ts';

export const ROMSize = 1024 * 1024;

export class ROMDevice implements MMIODevice {
	private ram = new Uint32Array((ROMSize / 4) / 4);

	read(address: number) {
		return this.ram[address & ((ROMSize / 4) - 1)];
	}

	write(address: number, value: number) {
		// Do nothing, you can't write to ROM
	}

	load(data: Uint32Array) {
		for (let i = 0; i < (ROMSize / 4); i++) {
			if (i >= data.length) {
				this.ram[i] = 0xffffffff;
			} else {
				this.ram[i] = data[i];
			}
		}
	}
}