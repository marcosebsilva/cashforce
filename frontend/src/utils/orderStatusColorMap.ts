type ObjectWithStringIndex = {
    [key: string]: string;
}

const orderStatusColorMap: ObjectWithStringIndex = {
    'Pendente de confirmação': '#FFC107',
    'Pedido confirmado': '#00AD8C',
    'Não reconhece o pedido': '#F44336',
    'Mercadoria não recebida': '#FF9800',
    'Recebida com avaria': '#E57373',
    'Devolvida': '#9E9E9E',
    'Recebida com devolução parcial': '#9C27B0',
    'Recebida e confirmada': '#2196F3',
    'Pagamento Autorizado': '#388E3C',
};

export function getOrderStatusColor(status: string): string {
    return orderStatusColorMap[status];
}