import { randomUUID } from "crypto";
import { BeforeInsert, BeforeUpdate, Column, PrimaryColumn } from "typeorm";

export class BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt!: Date;

  @BeforeInsert()
  beforeInsert() {
    this.id = randomUUID();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
