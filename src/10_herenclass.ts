import { Car } from "./9_privconstructor";

export class ElectricCar extends Car {
    batteryLife: number;

    constructor(make: string, batteryLife: number) {
        super(make);
        this.batteryLife = batteryLife;
    };

    charge(): void {
        console.log('Charging the car');
    };
};

const electricCar = new ElectricCar('Renault', 100);
electricCar.getMake();