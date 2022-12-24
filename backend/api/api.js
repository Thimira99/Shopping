import { randomBytes } from 'crypto';

const customers = new Map();

export const save = ({ firstname, lastname, phoneNumber, address }) => {
    const cus = { id: randomBytes(16).toString('hex'), firstname, lastname, phoneNumber, address };
    customers.set(cus.id, cus);
    return cus;
}

export const getCustomer = (id) => {
    const gCus = customers.get(id);

    if (!gCus) {
        throw new Error("Not Found");
    }

    return gCus;
}

export const getAll = () => {
    return [...customers.values()];
}
