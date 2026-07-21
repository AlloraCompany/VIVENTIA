export interface DoctorDetails {
  id: string
  name: string
  slug: string
  specialty: string
  image: string
  shortBio: string
  fullBio: string
  philosophy: string
  education: string[]
  specialties: string[]
  areas: string[]
  trajectory: string
}

export const doctorsData: DoctorDetails[] = [
  {
    id: "1",
    name: "Dra. Isadora Valente",
    slug: "dra-isadora-valente",
    specialty: "Médica Psiquiatra",
    image: "/images/doctors/dra-isadora.jpg",
    shortBio: "Médica pela Universidade Federal do Ceará e Psiquiatra pela Universidade Estadual de Londrina. Atendimento humanizado com foco em diagnóstico preciso e tratamento individualizado.",
    fullBio: "A Dra. Isadora Valente é médica pela Universidade Federal do Ceará e psiquiatra pela Universidade Estadual de Londrina. Com vasta experiência no tratamento de transtornos psiquiátricos, alia rigor científico a uma escuta ativa e humanizada. Seu trabalho é guiado pela convicção de que cuidar da saúde mental é uma forma de continuar vivendo por inteiro.",
    philosophy: "O paciente que chega ao consultório não traz apenas sintomas — traz uma história, medos e esperanças. Meu papel é criar um espaço seguro onde possamos, juntos, construir um caminho para uma vida mais plena e significativa.",
    education: [
      "Graduação em Medicina - Universidade Federal do Ceará (UFC)",
      "Residência em Psiquiatria - Universidade Estadual de Londrina (UEL)",
      "Diretora Clínica | CRM SC - 33.278 | RQE 32182"
    ],
    specialties: [
      "Depressão e Transtornos de Humor",
      "Ansiedade e Transtorno do Pânico",
      "TDAH",
      "TOC",
      "Bipolaridade",
      "Transtornos Alimentares",
      "Vícios em álcool, tabaco e drogas",
      "Transtorno de Borderline"
    ],
    areas: [
      "Avaliação psiquiátrica completa",
      "Tratamento medicamentoso personalizado",
      "Acompanhamento humanizado e individualizado",
      "Atendimento presencial e online"
    ],
    trajectory: "A Dra. Isadora Valente combina formação sólida em medicina e psiquiatria com um olhar profundamente humano sobre o sofrimento psíquico. Atende pacientes adultos em consultório, com ênfase em diagnóstico preciso, escuta ativa e plano terapêutico construído junto ao paciente.",
  }
]

export function getDoctorBySlug(slug: string): DoctorDetails | undefined {
  return doctorsData.find(doctor => doctor.slug === slug)
}

export function getAllDoctorSlugs(): string[] {
  return doctorsData.map(doctor => doctor.slug)
}
