import { Local } from './local.model';

export class LocalMOdel implements Local {
  constructor(
    public name: string,
    public address: string,
    public phone: string
  ) {}
}
