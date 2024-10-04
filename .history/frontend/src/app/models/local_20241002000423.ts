import { Local } from './local';

export class LocalModel implements Local {
  constructor(
    public name: string,
    public address: string,
    public phone: string
  ) {}
}
