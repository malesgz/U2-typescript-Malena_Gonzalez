export class Car {
    make: string;

    constructor(make: string) {
        this.make = make;
    };

    getMake(): void {
        return this.drive();
    };

    private drive(): void {
        console.log(`Driving a ${this.make}`);
    };
};

const car = new Car('Etios');
car.getMake(); 