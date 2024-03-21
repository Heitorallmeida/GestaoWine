import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Manager } from './manager.entity';

@Injectable()
export class ManagerService {
  constructor(
    @Inject('MANAGER_REPOSITORY')
    private managerRepository: Repository<Manager>,
  ) {}

  async findAll(): Promise<Manager[]> {
    return this.managerRepository.find();
  }
  
  async findById(id): Promise<Manager> {
    return this.managerRepository.findOne({where:{id: id}, relations: ['experiences', 'hardSkills', 'certificates']});
  }

  async create(name: string, lastname: string): Promise<Manager> {
    const manager = new Manager();

    manager.name = name;
    manager.lastname = lastname;
    
    return await this.managerRepository.save(manager)
  }
}