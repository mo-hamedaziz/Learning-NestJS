/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    findAllUsers(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);
            if (rolesArray.length === 0) throw new NotFoundException('User Role not found!');

            return rolesArray;
        }

        return this.users;
    }

    findOneUser(id: number) {
        const user = this.users.find(user => user.id === id);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }  

    createUser(newUser: CreateUserDto) {
        const id = this.users.length + 1;
        this.users.push({ id, ...newUser });
        return { id, ...newUser };
    }   

    updateUser(id: number, updatedUser: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser };
            }

            return user;
        });

        return this.users.find(user => user.id === id);
    }

    deleteUser(id: number) {
        const removedUser = this.users.find(user => user.id === id);
        this.users = this.users.filter(user => user.id !== id);

        return removedUser ? removedUser : { message: 'User not found' };
    }
}
