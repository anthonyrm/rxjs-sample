export interface UserResponse {
  results: User[];
}

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
}
