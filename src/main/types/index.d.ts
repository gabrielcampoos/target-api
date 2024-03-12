declare namespace Express {
  interface Request {
    user: {
      id: string;
      name: string;
      profile: string;
      username: string;
      companyName: string;
    };
  }
}
