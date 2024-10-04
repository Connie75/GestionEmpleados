import { Local } from './local.model';

export class LocalModel implements Local {
  constructor(
    public name: string,
    public address: string,
    public phone: string
  ) {}
}
