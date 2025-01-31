import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FetchEventsInput } from '../events/dtos/fetch-events.input'
import { Event } from '../events/entity/event.entity'
import { EventsService } from '../events/events.service'
import { ContractsService } from './contracts.service'
import { Contract } from './entity/contract.entity'

@Resolver(() => Contract)
export class ContractsResolver {
  constructor(private contractsService: ContractsService, private eventsService: EventsService) {}

  @Query(/* istanbul ignore next */ () => Contract)
  async getContract(@Args('address', { type: () => String }) address: string) {
    return this.contractsService.findOne(address)
  }

  @Mutation(/* istanbul ignore next */ () => Boolean)
  async uploadMetadata(
    @Args('metadata', { type: /* istanbul ignore next */ () => String }) metadata: string,
    @Args('contractAddress', { type: /* istanbul ignore next */ () => String }) contractAddress: string,
  ): Promise<boolean> {
    if (Buffer.from(metadata, 'base64').toString('base64') !== metadata) {
      throw new Error('Invalid metadata')
    }

    const contract = await this.contractsService.findOne(contractAddress as string)
    return this.contractsService.uploadMetadata(contract, metadata)
  }

  @ResolveField('events', /* istanbul ignore next */ () => [Event])
  async getEvents(@Parent() contract: Contract) {
    const { address } = contract
    const args: FetchEventsInput = {
      contract: address,
    }
    return this.eventsService.fetchEvents(args)
  }
}
