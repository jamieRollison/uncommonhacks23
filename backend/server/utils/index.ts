import { Link } from '../models';

export const shortenLink = async (long: string) => await Link.create({ long })
    .then((link: any) => link.short)
    .catch((err: any) => {
      throw err;
    });