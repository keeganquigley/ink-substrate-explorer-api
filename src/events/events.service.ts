import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateEventInput } from './dtos/create-event.input'
import { Event } from './entity/event.entity'

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(createEventInput: CreateEventInput): Promise<Event> {
    return this.eventRepository.save(createEventInput)
  }

  async findAll(contract: string): Promise<Event[]> {
    const events = await this.eventRepository.find({ where: { contract } })
    if (!events) {
      throw new NotFoundException(`Event of contract: ${contract} not found`)
    }
    return events
  }
}
