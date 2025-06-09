class Car{
	constructor(brand,model){
		this.brand = brand;
		this.model = model;
		this.type = "Car";
	}
	getCar(){
		console.log(`${this.brand} ${this.model}`);
	}
}

class Bike{
	constructor(brand,model){
		this.brand = brand;
		this.model = model;
		this.type = "Bike";
	}
	getBike(){
		console.log(`${this.brand} ${this.model}`);
	}
}

class VehicleFactory{
	createVehicle(brand,model,type){
		switch(type){
			case 1:
				return new Car(brand,model);
			break
			
			case 2:
				return new Bike(brand,model);
			break;
		}
	}
}

let v1 = new VehicleFactory();

let c = v1.createVehicle("Porche","boxter",1);
c.getCar();