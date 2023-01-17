export type SignupDTO = {
  name: string;
  username: string;
  deviceId: string;
  password: string;
};

export type SigninDTO = {
  deviceId: string;
  password: string;
};
