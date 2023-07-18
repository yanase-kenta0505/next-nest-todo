import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Prisma } from '@prisma/client';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
  ) {}

  @Get()
  async getTodos() {
    return this.todoService.todos({})
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.todoService.todo({
      id: Number(id)
    })
  }

  @Post()
  async createTodo(@Body() data: Prisma.TodoUncheckedCreateInput) {
    const {title, content, userId} = data

    return this.todoService.createTodo({
      title,
      content,
      userId
    })
  }

  @Patch(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() data: Prisma.TodoUpdateInput
  ) {
    return this.todoService.updateTodo({
      where: {
        id: Number(id)
      },
      data
    })
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo({
      id: Number(id)
    })
  }
}
