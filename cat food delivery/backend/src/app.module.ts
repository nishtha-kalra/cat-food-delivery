import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommsModule } from './comms/comms.module';

@Module({
  imports: [UserModule, CommsModule],
})
export class AppModule {}