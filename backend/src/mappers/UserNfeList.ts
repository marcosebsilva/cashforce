import { orders } from "models/orders";
import { formatCurrency } from "../utils/formatCurrency";

// type definitions is using too much optional fiels
// this is due the nature of the dump sql provided
export type UsersNfeList = {
    id: number;
    nNf?: string;
    providerName?: string;
    providerId?: number;
    buyerName?: string;
    buyerId?: number;
    value?: string;
    emissionDate?: string;
    status?: string;
}

const orderStatusBuyerMap = [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida',
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado',
];

export const mapUsersNfeList = (usersNfeList: orders[]): UsersNfeList[] => {
    return usersNfeList.map((userNfe) => ({
        id: userNfe.id,
        nNf: userNfe.nNf,
        providerName: userNfe.provider.name,
        providerId: userNfe.providerId,
        buyerName: userNfe.buyer.name,
        buyerId: userNfe.buyerId,
        value: formatCurrency(userNfe.value || '', 'BRL'),
        emissionDate: userNfe.emissionDate,
        status: orderStatusBuyerMap[Number(userNfe.orderStatusBuyer)],
    }))
}