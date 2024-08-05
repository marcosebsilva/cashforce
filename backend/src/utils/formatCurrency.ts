export function formatCurrency(value: string, currency: string): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency,
    }).format(Number(value));
}