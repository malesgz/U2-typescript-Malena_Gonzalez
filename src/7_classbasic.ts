class Car {
    make: string = 'Etios';

    drive(): void {
        console.log(`Driving a ${this.make}`);
    };
};

const car = new Car();
car.drive(); 