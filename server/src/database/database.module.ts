import { Connection } from "typeorm"
import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
    imports: [TypeOrmModule.forRoot()],
    exports: []
})

export class DatabaseModule {
    constructor(private connection: Connection) {
        if(connection.isConnected) {
            console.log("DB connected successfully")
        }

    }
}