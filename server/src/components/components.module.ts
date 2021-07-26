import { Module } from "@nestjs/common";
import { CarsModule } from "./cars/car.module";

@Module({
    imports: [CarsModule]
})
export class ComponentsModule {

}