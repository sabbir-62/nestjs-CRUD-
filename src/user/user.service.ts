import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

  create(createUserDto: CreateUserDto) : Promise<User> {
    let user: User = new User();
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    return this.userRepository.save(user)
  }

  findAll() : Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.find();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user: User = new User();
    user.name = updateUserDto.name;
    user.age = updateUserDto.age;
    user.id = id;
    return this.userRepository.save(user)
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
