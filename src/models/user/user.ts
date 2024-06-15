export class User {
  constructor(
    public username: string,
    public password: string,
  ) {}

  public toJSON(): object {
    return {
      username: this.username,
      password: this.password,
    };
  }

  public static fromJson(json: { username: string; password: string }): User {
    return new User(json.username, json.password);
  }

  public static clone(user: User): User {
    return new User(user.username, user.password);
  }
}
