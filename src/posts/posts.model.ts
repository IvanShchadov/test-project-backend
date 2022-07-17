import {Column, DataType, Model, Table, BelongsTo, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unique id'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Title', description: 'Title'})
  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @ApiProperty({example: 'Content', description: 'Content'})
  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @ApiProperty({example: 'url', description: 'Image'})
  @Column({type: DataType.STRING})
  image: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @BelongsTo(() => User)
  author: User;
}