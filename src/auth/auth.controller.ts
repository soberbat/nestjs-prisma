// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthType } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signin')
  signIn(@Body() dto: AuthType) {
    return this.AuthService.signin();
  }

  @Post('signup')
  signUp() {
    return this.AuthService.signup();
  }
}
