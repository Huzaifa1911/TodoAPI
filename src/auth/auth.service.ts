import { Injectable } from '@nestjs/common';
import { SigninDTO, SignupDTO } from './dto';

@Injectable()
export class AuthService {
  signup(body: SignupDTO) {
    const {} = body;
  }
  signin(body: SigninDTO) {
    const {} = body;
  }
}
