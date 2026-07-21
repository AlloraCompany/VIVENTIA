// Fonte única de verdade para contato da clínica.
// Altere o número/telefone aqui e ele se propaga para todo o site.

export const WHATSAPP_NUMBER = '5548999516465'
export const PHONE_TEL = '+5548999516465'
export const PHONE_DISPLAY = '48 9951-6465'

// Mensagens pré-preenchidas por contexto de contato.
export const WHATSAPP_MESSAGES = {
  agendamento:
    'Olá, vim pelo site e gostaria de mais informações sobre agendamentos e consultas.',
  consulta: 'Olá! Gostaria de agendar uma consulta.',
  parceria:
    'Olá, tenho interesse em atender na Viventia e gostaria de mais informações sobre parceria.',
} as const

// Monta o link do WhatsApp com a mensagem já codificada.
export function whatsappUrl(
  message: string = WHATSAPP_MESSAGES.agendamento,
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
