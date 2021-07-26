import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Car } from "./entities/car";
import { NewCarInput } from "./entities/dto/new-car.input";


@Injectable()
export class CarsService {
    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

    public async getAllCars(): Promise<Car[]> {
        return await this.carRepository.find({}).catch((err) => {
            throw new InternalServerErrorException(err)
        })

    }

    public async addCar(newCarData: NewCarInput): Promise<Car> {
        const newCar = this.carRepository.create(newCarData)
        return await this.carRepository.save(newCar).catch((err) => {
            throw err
        })
    }
}