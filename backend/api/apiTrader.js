import { randomBytes } from 'crypto';

const trader = new Map();

export const save = ({ firstname, lastname, phoneNumber, address }) => {
    const tra = { id: randomBytes(16).toString('hex'), firstname, lastname, phoneNumber, address };
    trader.set(tra.id, tra);
    return tra;
}

export const getAll = () => {
    return [...trader.values()];
}