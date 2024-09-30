import { Module } from '@nestjs/common';
import { CommsController } from './comms.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [CommsController],
})
export class CommsModule {}