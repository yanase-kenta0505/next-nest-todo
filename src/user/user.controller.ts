import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { TodoService } from 'src/todo/todo.service';
import { Prisma, User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers({})
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUser({
      id: Number(id)
    })
  }

  @Post()
  async createUser(@Body() createUserInput: Pick<Prisma.UserCreateInput, 'name' | 'email'>): Promise<User> {
    const { name, email } = createUserInput;

    return this.userService.createUser({
      name,
      email
    })
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserInput: Prisma.UserUpdateInput) {
    return this.userService.updateUser({
      where: {
        id: Number(id)
      },
      data: updateUserInput
    })
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser({
      id: Number(id)
    })
  }
}
