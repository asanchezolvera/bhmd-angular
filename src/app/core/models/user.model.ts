export interface User {
  id?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  token?: string;
  roles?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

// Validation interface for registration
export interface UserRegistration {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}
