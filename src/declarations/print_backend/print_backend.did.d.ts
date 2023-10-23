import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'currbala' : ActorMethod<[], bigint>,
  'topup' : ActorMethod<[bigint], bigint>,
  'withd' : ActorMethod<[bigint], bigint>,
}
