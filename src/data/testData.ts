export interface UserCredentials {
  email: string;
  password: string;
}   

export const validUsers: Record<string, UserCredentials> = {
  admin: {
    email: 'admin@gmail.com',
    password: '@12345678'
  }

};

export const pageUrls = {
  loginPage: 'https://ndosisimplifiedautomation.vercel.app/#practice'
};


  