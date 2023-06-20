import { server, invoke } from './common';

export const authService = {
  login: (data: LoginFormData) => invoke(server.post('/auth/login', data)),
  signup: (data: SignupFormData) => invoke(server.post('/auth/signup', data)),
};
