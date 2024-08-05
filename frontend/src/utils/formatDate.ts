export default function formatDate(date: string): string {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('pt-BR').toString()
}
