// 1. Interfaz de producto
interface Transport {
  name: string;
  deliver(): string;
}

// 2. Productos concretos
class Ship implements Transport {
  deliver(): string {
    return 'delivering products by sea'
  }
  name: string = Ship.name
}

class Truck implements Transport {
  deliver(): string {
    return 'delivering products by land'
  }
  name: string = Truck.name
  public type = 'Camion de carga'
}

// 3. Clase creadora
abstract class TransportCreator {
  public abstract createTransport(): Transport

  public doSomething(): string {
    const transport = this.createTransport();
    return `Creator Transport: ${transport.name} is ${transport.deliver()} `
  }
}

// 4. Creadores concretos
class ShipCreator extends TransportCreator {
  public createTransport(): Transport {
    return new Ship()
  }
}

class TruckCreator extends TransportCreator {
  public createTransport(): Transport {
    return new Truck()
  }
}

function deliverProducts(tranCreator: TransportCreator) {
  console.log('Delivering Products or anything');
  console.log(tranCreator.doSomething())
}


console.log('ShipTransport');
deliverProducts(new ShipCreator());
console.log('');

console.log('TruckTransport');
deliverProducts(new TruckCreator());
console.log('');
