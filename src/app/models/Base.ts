export abstract class Base {
  protected _id!: string;
  protected _createdAt!: Date;

  toJSON() {}
}
