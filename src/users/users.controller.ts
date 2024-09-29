/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() // GET /users
    findAllUsers() {
        return [];
    }

    @Get(':id') // GET /users/:id
    findOneUser(@Param('id') id: string) {
        return { id };
    }

    @Post() // POST /users
    createUser(@Body() newUser: any) {
        return newUser;
    }

    @Patch(':id') // PATCH /users/:id
    updateUser(@Param('id') id: string, @Body() updatedUser: any) {
        return { id, ...updatedUser };
    }

    @Delete(':id') // DELETE /users/:id
    deleteUser(@Param('id') id: string) {
        return { id };
    }
}
