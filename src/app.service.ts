import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello ca nha iu cua Kem, dong nay la de test CI/CD!';
  }
}
