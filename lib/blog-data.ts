export interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  readTime: string
  image: string
  category: string
  publishedAt: string
  author: {
    name: string
    role: string
    image: string
  }
  relatedSlugs: string[]
}

export const articles: Article[] = [
  {
    slug: 'como-diferenciar-ansiedade-de-esgotamento',
    title: 'Como diferenciar ansiedade de esgotamento?',
    excerpt: 'Entenda os sinais que seu corpo e mente dão quando algo precisa de atenção.',
    readTime: '5 min de leitura',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop',
    category: 'Saúde Mental',
    publishedAt: '2024-03-15',
    author: {
      name: 'Autor Desconhecido (IA)',
      role: 'Conteúdo gerado por IA',
      image: '/placeholder.svg',
    },
    relatedSlugs: ['sinais-silenciosos-do-burnout', 'tdah-em-adultos-sintomas-alem-da-distracao'],
    content: `
## Você sabe a diferença entre ansiedade e esgotamento?

Muitas vezes, confundimos esses dois estados emocionais porque compartilham sintomas semelhantes. No entanto, entender a diferença é fundamental para buscar o tratamento adequado.

### O que é ansiedade?

A ansiedade é uma resposta natural do corpo ao estresse. É uma sensação de medo ou apreensão sobre o que está por vir. Todos nós sentimos ansiedade em algum momento — antes de uma entrevista de emprego, ao falar em público ou ao tomar uma decisão importante.

**Sintomas comuns da ansiedade:**
- Preocupação excessiva e persistente
- Inquietação ou sensação de estar "no limite"
- Dificuldade de concentração
- Irritabilidade
- Tensão muscular
- Problemas de sono
- Palpitações cardíacas

### O que é esgotamento?

O esgotamento, ou burnout, é um estado de exaustão física, emocional e mental causado por estresse prolongado. Diferente da ansiedade, que pode surgir em situações específicas, o esgotamento é resultado de uma sobrecarga contínua.

**Sintomas comuns do esgotamento:**
- Exaustão profunda que não melhora com descanso
- Cinismo e desapego do trabalho
- Sensação de ineficácia
- Diminuição da produtividade
- Distanciamento emocional
- Sintomas físicos como dores de cabeça frequentes

### Como diferenciar?

A principal diferença está na **origem** e na **manifestação**:

| Ansiedade | Esgotamento |
|-----------|-------------|
| Excesso de energia nervosa | Falta de energia |
| Hiperatividade | Apatia |
| Medo do futuro | Desesperança |
| Pode surgir sem motivo aparente | Geralmente ligado ao trabalho |

### Quando buscar ajuda?

Se você está enfrentando esses sintomas há mais de duas semanas e eles estão interferindo na sua qualidade de vida, é hora de buscar ajuda profissional.

> "O autoconhecimento é o primeiro passo para o cuidado. Reconhecer que algo não está bem é um ato de coragem, não de fraqueza."

### Próximos passos

1. **Observe seus sintomas** — Anote quando eles aparecem e o que os desencadeia
2. **Converse com alguém de confiança** — Compartilhar pode aliviar o peso
3. **Busque ajuda profissional** — Um psiquiatra pode ajudar no diagnóstico correto
4. **Cuide do básico** — Sono, alimentação e movimento são fundamentais

Lembre-se: buscar ajuda é um sinal de força, não de fraqueza. Seu bem-estar merece atenção.
    `,
  },
  {
    slug: 'sinais-silenciosos-do-burnout',
    title: 'Sinais silenciosos do burnout',
    excerpt: 'O esgotamento profissional nem sempre é óbvio. Conheça os sintomas menos conhecidos.',
    readTime: '7 min de leitura',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=800&fit=crop',
    category: 'Burnout',
    publishedAt: '2024-03-08',
    author: {
      name: 'Autor Desconhecido (IA)',
      role: 'Conteúdo gerado por IA',
      image: '/placeholder.svg',
    },
    relatedSlugs: ['como-diferenciar-ansiedade-de-esgotamento', 'a-importancia-do-sono-para-saude-mental'],
    content: `
## Os sinais que ninguém fala sobre o burnout

Quando pensamos em burnout, geralmente imaginamos alguém completamente esgotado, incapaz de sair da cama. Mas a verdade é que o esgotamento profissional muitas vezes se manifesta de formas muito mais sutis.

### O burnout silencioso

O burnout silencioso é aquele que se instala gradualmente, sem que percebamos. É como a água que esquenta aos poucos — quando notamos, já está fervendo.

### Sinais que você pode estar ignorando

**1. Você está sempre cansado, mas não consegue dormir bem**

Mesmo dormindo 8 horas, você acorda exausto. O sono não restaura suas energias como antes. Você pode ter dificuldade para pegar no sono ou acordar várias vezes durante a noite.

**2. Pequenas tarefas parecem montanhas**

Responder um e-mail simples parece uma tarefa hercúlea. Você procrastina coisas que antes fazia sem pensar. A sensação é de estar sempre "devendo" algo.

**3. Você perdeu o interesse em coisas que amava**

Hobbies que antes te traziam alegria agora parecem mais uma obrigação. Você não tem mais energia para encontrar amigos ou fazer atividades de lazer.

**4. Irritabilidade desproporcional**

Você está explodindo por coisas pequenas? Ficando irritado com colegas, família ou até desconhecidos? Essa baixa tolerância pode ser um sinal de que seu sistema nervoso está sobrecarregado.

**5. Sintomas físicos inexplicáveis**

- Dores de cabeça frequentes
- Tensão muscular crônica
- Problemas digestivos
- Queda de cabelo
- Resfriados constantes

> "O corpo fala o que a mente cala. Quando ignoramos nossos limites emocionais, o corpo encontra formas de nos avisar."

### O ciclo do burnout

O burnout não acontece da noite para o dia. Ele segue um ciclo:

1. **Fase da empolgação** — Você está motivado e cheio de energia
2. **Fase do estresse** — Começam os primeiros sinais de sobrecarga
3. **Fase do estresse crônico** — Os sintomas se intensificam
4. **Fase do burnout** — Esgotamento completo
5. **Fase do burnout habitual** — O estado se torna "normal"

### Como interromper o ciclo?

**Reconheça os sinais precoces**

Quanto antes você identificar os sinais, mais fácil será reverter o processo. Não espere chegar ao fundo do poço.

**Estabeleça limites**

Aprenda a dizer não. Defina horários para trabalho e descanso. Desconecte-se do trabalho fora do expediente.

**Busque ajuda profissional**

Um psiquiatra pode ajudar a avaliar seu estado e propor um tratamento adequado, que pode incluir terapia, ajustes na rotina ou, em alguns casos, medicação.

### Não é frescura

Se você está se sentindo assim, saiba que não está sozinho. O burnout é uma condição real, reconhecida pela Organização Mundial da Saúde. Buscar ajuda não é fraqueza — é autocuidado.
    `,
  },
  {
    slug: 'tdah-em-adultos-sintomas-alem-da-distracao',
    title: 'TDAH em adultos: sintomas além da distração',
    excerpt: 'O TDAH vai muito além da dificuldade de concentração. Descubra como ele se manifesta na vida adulta.',
    readTime: '6 min de leitura',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=800&fit=crop',
    category: 'TDAH',
    publishedAt: '2024-03-01',
    author: {
      name: 'Autor Desconhecido (IA)',
      role: 'Conteúdo gerado por IA',
      image: '/placeholder.svg',
    },
    relatedSlugs: ['como-diferenciar-ansiedade-de-esgotamento', 'sinais-silenciosos-do-burnout'],
    content: `
## TDAH na vida adulta: muito além da "falta de foco"

Durante muito tempo, acreditou-se que o TDAH era um transtorno exclusivo da infância. Hoje sabemos que ele persiste na vida adulta em aproximadamente 60% dos casos — e muitas pessoas só descobrem que têm o transtorno depois dos 30, 40 ou até 50 anos.

### O que é TDAH?

O Transtorno de Déficit de Atenção e Hiperatividade é uma condição neurobiológica que afeta a capacidade de regular atenção, impulsos e, em alguns casos, o nível de atividade.

### Sintomas menos conhecidos em adultos

**1. Dificuldade em regular emoções**

Pessoas com TDAH frequentemente experimentam emoções mais intensas. Podem passar da euforia à frustração rapidamente. Essa desregulação emocional é um dos sintomas menos conhecidos, mas mais impactantes.

**2. Hiperfoco**

Paradoxalmente, pessoas com TDAH podem ter períodos de concentração extremamente intensa em atividades que consideram interessantes. Isso pode levar a perder a noção do tempo completamente.

**3. Paralisia de decisão**

A dificuldade em tomar decisões, mesmo as simples, é comum. Isso acontece porque o cérebro com TDAH pode ter dificuldade em priorizar informações.

**4. Procrastinação crônica**

Não é preguiça. É uma dificuldade real em iniciar tarefas, especialmente aquelas que parecem entediantes ou complexas. A procrastinação no TDAH está ligada à busca por estímulos.

**5. Dificuldade com o tempo**

Pessoas com TDAH frequentemente subestimam quanto tempo as tarefas vão levar. Chegam atrasadas, perdem prazos e têm dificuldade em planejar o futuro.

### TDAH em mulheres

O TDAH foi historicamente mais diagnosticado em homens, mas isso está mudando. Nas mulheres, o transtorno costuma se apresentar de forma diferente:

- Menos hiperatividade física, mais "hiperatividade mental"
- Mais desatenção do que impulsividade
- Tendência a mascarar os sintomas
- Frequentemente confundido com ansiedade ou depressão

> "Muitas mulheres passam a vida sendo chamadas de 'cabeça de vento' ou 'desorganizadas', quando na verdade têm um cérebro que funciona de forma diferente."

### O diagnóstico tardio

Receber o diagnóstico de TDAH na vida adulta pode ser transformador. De repente, comportamentos que sempre pareceram "defeitos de caráter" ganham uma explicação.

**Sentimentos comuns após o diagnóstico:**
- Alívio por finalmente entender
- Luto pelo tempo perdido
- Raiva por não ter sido diagnosticado antes
- Esperança por novos caminhos

### Tratamento

O tratamento do TDAH em adultos geralmente inclui:

1. **Medicação** — Estimulantes ou não-estimulantes podem ajudar a regular a atenção
2. **Psicoeducação** — Entender como o TDAH funciona
3. **Terapia comportamental** — Desenvolver estratégias de organização e planejamento
4. **Ajustes no ambiente** — Adaptar trabalho e rotina às necessidades do cérebro TDAH

### Não é um defeito, é uma diferença

O cérebro com TDAH não é defeituoso — é diferente. Com o tratamento e estratégias adequadas, pessoas com TDAH podem não apenas funcionar bem, mas também usar suas características únicas a seu favor.

Se você se identificou com esses sintomas, considere buscar uma avaliação profissional. O diagnóstico pode ser o primeiro passo para uma vida com mais clareza e menos autocrítica.
    `,
  },
  {
    slug: 'a-importancia-do-sono-para-saude-mental',
    title: 'A importância do sono para a saúde mental',
    excerpt: 'Descubra como noites mal dormidas afetam sua mente e o que fazer para melhorar.',
    readTime: '5 min de leitura',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&h=800&fit=crop',
    category: 'Bem-estar',
    publishedAt: '2024-02-22',
    author: {
      name: 'Autor Desconhecido (IA)',
      role: 'Conteúdo gerado por IA',
      image: '/placeholder.svg',
    },
    relatedSlugs: ['sinais-silenciosos-do-burnout', 'como-diferenciar-ansiedade-de-esgotamento'],
    content: `
## Sono e saúde mental: uma relação mais profunda do que você imagina

Você sabia que uma única noite de sono ruim já afeta seu humor, concentração e capacidade de tomar decisões? Agora imagine o impacto de meses ou anos dormindo mal.

### O que acontece quando dormimos?

Durante o sono, nosso cérebro não está "descansando" passivamente. Ele está extremamente ativo, realizando funções essenciais:

- **Consolidação de memórias** — O que aprendemos durante o dia é organizado e armazenado
- **Limpeza de toxinas** — O sistema glinfático remove resíduos metabólicos do cérebro
- **Regulação emocional** — Processamos experiências emocionais do dia
- **Restauração física** — Hormônios de crescimento são liberados

### Sono e transtornos mentais

A relação entre sono e saúde mental é bidirecional:

**Insônia pode causar:**
- Aumento de 10x no risco de depressão
- Maior propensão à ansiedade
- Dificuldade de concentração similar ao TDAH
- Irritabilidade e instabilidade emocional

**Transtornos mentais podem causar:**
- Dificuldade para dormir (ansiedade)
- Sono excessivo (depressão)
- Pesadelos frequentes (TEPT)
- Padrões de sono irregulares (transtorno bipolar)

> "Tratar o sono é frequentemente o primeiro passo para melhorar a saúde mental. É como construir os alicerces de uma casa."

### Higiene do sono: o básico que funciona

**1. Regularidade é a chave**

Tente dormir e acordar nos mesmos horários todos os dias, inclusive nos fins de semana. Seu relógio biológico agradece.

**2. Crie um ritual de desaceleração**

30-60 minutos antes de dormir, comece a reduzir estímulos. Diminua as luzes, evite telas, faça atividades calmas.

**3. O quarto é para dormir**

Evite trabalhar, assistir TV ou usar o celular na cama. Seu cérebro precisa associar o quarto com sono.

**4. Cuidado com os estimulantes**

Cafeína pode ficar no seu sistema por até 10 horas. Evite café, chá preto e chocolate depois das 14h.

**5. Movimento durante o dia**

Exercício físico regular melhora a qualidade do sono, mas evite atividades intensas perto da hora de dormir.

### Quando buscar ajuda?

Se você está seguindo todas as recomendações de higiene do sono e ainda assim:

- Demora mais de 30 minutos para pegar no sono
- Acorda várias vezes durante a noite
- Acorda cansado mesmo dormindo 7-8 horas
- Sente sonolência excessiva durante o dia

É hora de procurar ajuda profissional. Distúrbios como apneia do sono e insônia crônica precisam de tratamento específico.

### O mito das 8 horas

Nem todo mundo precisa de 8 horas de sono. A necessidade varia entre 7 e 9 horas para a maioria dos adultos. O mais importante é como você se sente ao acordar e ao longo do dia.

Priorizar o sono não é preguiça — é autocuidado essencial. Seu cérebro e sua saúde mental dependem disso.
    `,
  },
  {
    slug: 'medicacao-psiquiatrica-mitos-e-verdades',
    title: 'Medicação psiquiátrica: mitos e verdades',
    excerpt: 'Esclareça suas dúvidas sobre medicamentos para saúde mental com informações baseadas em evidências.',
    readTime: '8 min de leitura',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1200&h=800&fit=crop',
    category: 'Tratamento',
    publishedAt: '2024-02-15',
    author: {
      name: 'Autor Desconhecido (IA)',
      role: 'Conteúdo gerado por IA',
      image: '/placeholder.svg',
    },
    relatedSlugs: ['tdah-em-adultos-sintomas-alem-da-distracao', 'a-importancia-do-sono-para-saude-mental'],
    content: `
## Medicação psiquiátrica: vamos separar fato de ficção

Poucos assuntos geram tanta desinformação quanto medicamentos psiquiátricos. Vamos esclarecer os mitos mais comuns com base em evidências científicas.

### Mito 1: "Antidepressivos causam dependência"

**Verdade:** Antidepressivos não causam dependência no sentido clássico — não geram tolerância (necessidade de doses cada vez maiores) nem compulsão por uso. O que pode acontecer é uma síndrome de descontinuação se o medicamento for interrompido abruptamente, por isso a retirada deve ser gradual.

### Mito 2: "Medicamento muda sua personalidade"

**Verdade:** Medicamentos psiquiátricos não mudam quem você é. Eles tratam sintomas que estão impedindo você de ser você mesmo. Muitos pacientes relatam que "voltaram a se reconhecer" após o tratamento adequado.

### Mito 3: "Se começar, nunca mais vai parar"

**Verdade:** Muitos tratamentos são temporários. Para depressão, por exemplo, o tratamento geralmente dura de 6 meses a 1 ano após a remissão dos sintomas. Algumas condições crônicas podem precisar de tratamento de longo prazo, assim como diabetes ou hipertensão.

### Mito 4: "Medicamento é muleta"

**Verdade:** Medicamentos são ferramentas terapêuticas, não muletas. Assim como usamos óculos para enxergar melhor ou insulina para diabetes, medicamentos psiquiátricos corrigem desequilíbrios químicos. Não há vergonha em usar o tratamento que funciona.

### Mito 5: "Natural é sempre melhor"

**Verdade:** "Natural" não significa "seguro" ou "eficaz". Muitos suplementos não têm evidência científica robusta e podem ter interações perigosas com outros medicamentos. Alguns fitoterápicos funcionam, mas também têm efeitos colaterais e precisam de orientação profissional.

> "A melhor medicação é aquela que funciona para você, com os menores efeitos colaterais possíveis. Isso é personalizado — não existe receita única."

### Como funciona a medicação psiquiátrica?

**Antidepressivos**
Regulam neurotransmissores como serotonina, noradrenalina e dopamina. Levam de 2 a 6 semanas para fazer efeito completo.

**Ansiolíticos**
Atuam no sistema GABA, produzindo efeito calmante. Alguns são para uso contínuo, outros apenas para crises.

**Estabilizadores de humor**
Ajudam a regular as oscilações de humor em condições como transtorno bipolar.

**Estimulantes**
Usados no TDAH, ajudam a regular a atenção e reduzir a impulsividade.

### O que esperar do tratamento?

1. **Início gradual** — Começamos com doses baixas e aumentamos conforme necessário
2. **Período de ajuste** — Efeitos colaterais são mais comuns nas primeiras semanas e tendem a diminuir
3. **Acompanhamento regular** — Retornos frequentes para ajustar a medicação
4. **Comunicação aberta** — É fundamental relatar como você está se sentindo

### Efeitos colaterais: o que saber

Todos os medicamentos podem ter efeitos colaterais, mas isso não significa que você vai tê-los. Quando ocorrem:

- Muitos são temporários e melhoram em 2-4 semanas
- Existem estratégias para minimizá-los
- Se um medicamento não funciona bem, existem alternativas
- Os benefícios geralmente superam os efeitos colaterais

### Medicação + terapia

A combinação de medicação com psicoterapia costuma ser mais eficaz do que qualquer um dos tratamentos isoladamente. A medicação ajuda a criar as condições para que a terapia funcione melhor.

Se você tem dúvidas sobre medicação psiquiátrica, traga-as para sua consulta. Nenhuma pergunta é boba — entender seu tratamento é parte essencial do processo de cura.
    `,
  },
  {
    slug: 'autocuidado-alem-do-banho-de-espuma',
    title: 'Autocuidado além do banho de espuma',
    excerpt: 'O verdadeiro autocuidado vai muito além de rituais relaxantes. Descubra práticas que realmente transformam.',
    readTime: '6 min de leitura',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=800&fit=crop',
    category: 'Bem-estar',
    publishedAt: '2024-02-08',
    author: {
      name: 'Autor Desconhecido (IA)',
      role: 'Conteúdo gerado por IA',
      image: '/placeholder.svg',
    },
    relatedSlugs: ['a-importancia-do-sono-para-saude-mental', 'sinais-silenciosos-do-burnout'],
    content: `
## Autocuidado de verdade: o que ninguém te conta

A cultura pop transformou autocuidado em sinônimo de velas aromáticas, banhos de espuma e dias de spa. Embora esses momentos sejam agradáveis, o verdadeiro autocuidado vai muito além.

### O que é autocuidado real?

Autocuidado real são as ações que você toma para cuidar da sua saúde física, mental e emocional — mesmo quando não são "instagramáveis" ou prazerosas no momento.

### As faces do autocuidado

**1. Autocuidado físico**

O básico que sustenta todo o resto:
- Dormir o suficiente (mesmo quando tem série para maratonar)
- Comer alimentos nutritivos (não perfeitos, nutritivos)
- Mover o corpo regularmente
- Ir ao médico e fazer exames preventivos
- Tomar medicações conforme prescrito

**2. Autocuidado emocional**

Cuidar das suas emoções é fundamental:
- Permitir-se sentir sem julgamento
- Estabelecer limites em relacionamentos
- Buscar terapia quando necessário
- Processar experiências difíceis
- Praticar autocompaixão

**3. Autocuidado prático**

Às vezes, autocuidado é fazer coisas chatas:
- Organizar suas finanças
- Marcar aquela consulta que você está adiando
- Limpar e organizar seu espaço
- Resolver pendências burocráticas
- Planejar e preparar refeições

**4. Autocuidado social**

Humanos são seres sociais:
- Cultivar relacionamentos significativos
- Pedir ajuda quando precisar
- Dizer não quando necessário
- Afastar-se de pessoas tóxicas
- Participar de comunidades

> "Autocuidado não é o que você faz para escapar da sua vida, mas o que você faz para construir uma vida da qual não precise escapar."

### Autocuidado que não parece autocuidado

Às vezes, cuidar de si mesmo é:

- **Ter conversas difíceis** em vez de evitá-las
- **Dizer não** para um compromisso quando você precisa descansar
- **Sair da festa cedo** porque seu corpo precisa de sono
- **Desmarcar planos** quando você está no limite
- **Pedir desculpas** quando você errou
- **Ir à terapia** e falar sobre coisas desconfortáveis
- **Tomar a medicação** mesmo nos dias que você se sente bem

### O mito da produtividade

Autocuidado não é sobre se tornar mais produtivo. Você não precisa "ganhar" o direito ao descanso sendo hiper-produtivo. Descanso é uma necessidade humana básica, não uma recompensa.

### Como começar?

1. **Identifique suas necessidades reais** — O que seu corpo, mente e coração precisam agora?

2. **Comece pequeno** — Uma mudança de cada vez. Não tente revolucionar sua vida de uma vez.

3. **Seja consistente** — Autocuidado funciona melhor como prática regular do que como intervenção de emergência.

4. **Adapte às suas circunstâncias** — O que funciona para um influencer com flexibilidade de horário pode não funcionar para você. E tudo bem.

5. **Solte o perfeccionismo** — Cuidar de si 70% das vezes já é transformador.

### Quando autocuidado não é suficiente

Se você está fazendo "tudo certo" e ainda se sente mal, pode ser hora de buscar ajuda profissional. Autocuidado é fundamental, mas algumas condições precisam de tratamento especializado.

Lembre-se: cuidar de si mesmo não é egoísmo — é pré-requisito para poder cuidar de qualquer outra coisa na vida.
    `,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined)
}

export function getAllCategories(): string[] {
  const categories = new Set(articles.map((a) => a.category))
  return Array.from(categories)
}
