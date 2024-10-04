import { Local } from './local';

export class Local implements Local {
  constructor(
    public name: string,
    public address: string,
    public phone: string
  ) {}
}
