export class AuthData {
  constructor(
    public token: string,
    public user: string,
  ) {}

  public toJSON(): object {
    return {
      user: this.user,
      token: this.token,
    };
  }

  public static fromJson(json: { token: string; user: string }): AuthData {
    const user: AuthData = new AuthData(json.token, json.user);
    return user;
  }

  public static clone(user: AuthData): AuthData {
    return new AuthData(user.token, user.user);
  }
}
