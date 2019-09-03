import {Entity} from 'typeorm'
import {AbstractBalanceEntity} from '@app/orm/abstract-entities/abstract-balance.entity';

@Entity('balance')
export class BalanceEntity extends AbstractBalanceEntity {}
