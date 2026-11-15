/* Extra comprehension texts (written for practice, not from the worksheets) */
window.FILES.push(
{
  id: 'file3', extra: true, icon: '💼',
  title: 'File 3 — The Four-Day Week',
  topic: { ru: 'Экономика и работа: эксперимент с 4-дневной неделей', en: 'Economy & work: the four-day week trial' },
  summary: {
    ru: 'В 2022 году в Великобритании прошёл крупнейший эксперимент с 4-дневной рабочей неделей. Каковы результаты и почему не все согласны?',
    en: 'In 2022 Britain ran the largest trial of a four-day working week. What were the results, and why does not everyone agree?'
  },
  transcript: 'In 2022, Britain launched the world\'s largest trial of a four-day working week. Around 2,900 employees from 61 companies took part for six months. They worked four days a week but kept one hundred per cent of their pay. In exchange, they promised to keep one hundred per cent of their productivity. The results surprised many economists. Most companies said that productivity stayed the same or even improved. Employees reported less stress, better sleep and more time for their families. Fewer people were sick, and fewer people left their jobs. At the end of the trial, 56 of the 61 companies decided to continue with the four-day week. However, critics warn that the model does not suit every sector. Hospitals, schools and shops cannot simply close one day a week. Some managers also fear that workers will feel more pressure to do the same amount of work in less time. Supporters answer that the future of work is not about working longer, but about working smarter.',
  sections: [
    { type: 'match', title: 'Glossary — match each word with its meaning', pairs: [
      ['trial', 'A test to see if something works'],
      ['employee', 'A person who works for a company'],
      ['pay', 'The money you receive for your work'],
      ['productivity', 'The amount of work produced in a given time'],
      ['to report', 'To say or describe officially'],
      ['sick', 'Ill, not well'],
      ['sector', 'A part of the economy'],
      ['to suit', 'To be right or acceptable for'],
      ['critic', 'A person who says that something is bad']
    ]},
    { type: 'mcq', title: 'Main idea', items: [
      { q: 'This document is about:', o: ['a new law forcing all companies to close on Fridays', 'an experiment in which employees worked four days a week for the same pay', 'why British workers want higher salaries'], a: [1] }
    ]},
    { type: 'tf', title: 'True or False', items: [
      { q: 'Employees lost 20% of their pay during the trial.', a: false },
      { q: 'The trial lasted six months.', a: true },
      { q: 'Most companies stopped the four-day week after the trial.', a: false }
    ]},
    { type: 'fill', title: 'Fill in the blanks',
      text: 'Around 2,900 [[employees]] from [[61]] companies took part for [[six]] months. They worked four days a week but kept one hundred per cent of their [[pay]].\nEmployees reported less [[stress]], better [[sleep]] and more time for their [[families]]. Fewer people were [[sick]].' },
    { type: 'multi', title: 'Choose the correct answer(s)', items: [
      { q: 'According to the text, what were the benefits for employees?', o: ['Less stress', 'Better sleep', 'Higher salaries', 'More time for their families', 'Longer summer holidays'], a: [0, 1, 3] }
    ]},
    { type: 'open', title: 'Answer the questions', items: [
      { q: 'What did the employees promise in exchange for working four days?', a: 'They promised to keep one hundred per cent of their productivity.', k: ['productivity'] },
      { q: 'Why are some critics against the four-day week?', a: 'Because the model does not suit every sector: hospitals, schools and shops cannot close one day a week. Workers may also feel more pressure.', k: ['sector|hospitals|schools|shops', 'pressure'] },
      { q: 'What did most companies decide at the end of the trial?', a: '56 of the 61 companies decided to continue with the four-day week.', k: ['continue', '56'] }
    ]},
    { type: 'dictation', title: 'Dictation',
      text: 'However, critics warn that the model does not suit every sector. Supporters answer that the future of work is not about working longer, but about working smarter.' }
  ]
},
{
  id: 'file4', extra: true, icon: '🚌',
  title: 'File 4 — Rosa Parks',
  topic: { ru: 'История и права человека: автобусный бойкот в Монтгомери', en: 'History & civil rights: the Montgomery bus boycott' },
  summary: {
    ru: '1955 год, Алабама: Роза Паркс отказалась уступить место в автобусе белому пассажиру. Её арест положил начало бойкоту, который изменил историю США.',
    en: '1955, Alabama: Rosa Parks refused to give up her bus seat to a white passenger. Her arrest started a boycott that changed American history.'
  },
  transcript: 'December 1, 1955. Montgomery, Alabama. After a long day at work, Rosa Parks, a 42-year-old African American seamstress, gets on a city bus and sits down. At that time, the law in the South required black passengers to give up their seats to white passengers. When the driver orders her to stand up, Rosa Parks quietly refuses. She is arrested and fined. Her arrest sparks a protest that will change American history. The black community of Montgomery decides to boycott the city buses. For 381 days, thousands of people walk to work, share cars or take taxis rather than ride the buses. The boycott is led by a young pastor named Martin Luther King Jr., who becomes a national figure. The bus company loses a lot of money. Finally, in 1956, the Supreme Court rules that segregation on buses is unconstitutional. Many years later, Rosa Parks explained: "People always say that I didn\'t give up my seat because I was tired, but that isn\'t true. The only tired I was, was tired of giving in." Today she is remembered as a symbol of the civil rights movement.',
  sections: [
    { type: 'match', title: 'Glossary — match each word with its meaning', pairs: [
      ['seamstress', 'A woman who sews clothes as a job'],
      ['to refuse', 'To say that you will not do something'],
      ['fined', 'Made to pay money as a punishment'],
      ['to spark', 'To cause something to start'],
      ['to boycott', 'To refuse to use or buy something as a protest'],
      ['pastor', 'A Christian minister'],
      ['segregation', 'Separating people because of their race'],
      ['unconstitutional', 'Against the constitution'],
      ['to give in', 'To stop resisting; to accept defeat']
    ]},
    { type: 'mcq', title: 'Guessing from context', items: [
      { q: '"Her arrest sparks a protest that will change American history." Here, "sparks" means:', o: ['stops', 'causes / starts', 'hides'], a: [1] },
      { q: '"The only tired I was, was tired of giving in." Rosa Parks means that:', o: ['she was physically exhausted after work', 'she was tired of accepting injustice', 'she was tired of taking the bus'], a: [1] }
    ]},
    { type: 'tf', title: 'True or False', items: [
      { q: 'Rosa Parks refused to give up her seat because she was physically tired.', a: false },
      { q: 'The boycott lasted more than a year.', a: true },
      { q: 'Martin Luther King Jr. led the boycott.', a: true }
    ]},
    { type: 'fill', title: 'Fill in the blanks',
      text: 'At that time, the law in the [[South]] required black passengers to give up their [[seats]] to white passengers.\nShe is [[arrested]] and [[fined]].\nFor [[381]] days, thousands of people [[walk]] to work.\nIn 1956, the Supreme [[Court]] rules that [[segregation]] on buses is unconstitutional.' },
    { type: 'multi', title: 'Choose the correct answer(s)', items: [
      { q: 'How did people go to work during the boycott?', o: ['They walked.', 'They shared cars.', 'They took taxis.', 'They took the city buses.', 'They stayed at home for a year.'], a: [0, 1, 2] },
      { q: 'Think about the whole document. What does it show?', o: ["One person's courage can help change the law.", 'Peaceful protest can be effective.', 'Laws are always fair.', 'Economic pressure can be a weapon of protest.'], a: [0, 1, 3] }
    ]},
    { type: 'open', title: 'Answer the questions', items: [
      { q: 'Who was Rosa Parks?', a: 'She was a 42-year-old African American seamstress from Montgomery, Alabama.', k: ['seamstress', 'african american|black'] },
      { q: 'Why did the bus company lose a lot of money?', a: 'Because the black community boycotted the buses for 381 days: people walked, shared cars or took taxis.', k: ['boycott'] },
      { q: 'What was the final result of the boycott?', a: 'In 1956, the Supreme Court ruled that segregation on buses was unconstitutional.', k: ['supreme court|court', 'segregation|unconstitutional'] }
    ]},
    { type: 'dictation', title: 'Dictation',
      text: 'People always say that I didn\'t give up my seat because I was tired, but that isn\'t true. The only tired I was, was tired of giving in.' }
  ]
},
{
  id: 'file5', extra: true, icon: '👕',
  title: 'File 5 — Fast Fashion',
  topic: { ru: 'Общество и экология: цена дешёвой одежды', en: 'Society & environment: the cost of cheap clothes' },
  summary: {
    ru: 'Быстрая мода: дёшево для покупателя, дорого для планеты и рабочих. Вода, пластик и катастрофа на фабрике Rana Plaza.',
    en: 'Fast fashion: cheap for consumers, expensive for the planet and the workers. Water, plastic and the Rana Plaza disaster.'
  },
  transcript: 'Fast fashion is the business of producing cheap, trendy clothes very quickly. Big brands now release new collections every few weeks instead of twice a year. For consumers, it is a great deal: they can follow the latest trends without spending much money. But the real cost is paid by the planet and by the workers. The fashion industry is one of the world\'s biggest polluters. Producing a single cotton T-shirt requires around 2,700 litres of water, enough for one person to drink for two and a half years. Many clothes are made of polyester, a plastic fibre that releases microplastics into the oceans every time we wash it. Most of these clothes are worn only a few times before being thrown away. In 2013, the collapse of the Rana Plaza factory in Bangladesh killed more than 1,100 garment workers and shocked the world. It revealed the dangerous conditions and the low wages behind our cheap clothes. Today, more and more young people are turning to second-hand shops, clothing apps and repair workshops. As the activist Orsola de Castro puts it: "The most sustainable garment is the one already in your wardrobe."',
  sections: [
    { type: 'match', title: 'Glossary — match each word with its meaning', pairs: [
      ['trendy', 'Very fashionable at the moment'],
      ['to release', 'To make available to the public'],
      ['consumer', 'A person who buys goods or services'],
      ['polluter', 'Someone or something that makes air, water or land dirty'],
      ['fibre', 'A thin thread used to make cloth'],
      ['collapse', 'The sudden fall of a building'],
      ['garment', 'A piece of clothing'],
      ['wage', 'Money paid for work, usually per hour or week'],
      ['sustainable', 'Able to continue without damaging the environment'],
      ['second-hand', 'Already used by someone else']
    ]},
    { type: 'mcq', title: 'Main idea', items: [
      { q: 'This document is about:', o: ['how to dress well without spending money', 'the hidden environmental and human cost of cheap clothes', 'the history of cotton in Bangladesh'], a: [1] }
    ]},
    { type: 'tf', title: 'True or False', items: [
      { q: 'Big brands release new collections only twice a year.', a: false },
      { q: 'Polyester is a natural fibre.', a: false },
      { q: 'The Rana Plaza factory was in Bangladesh.', a: true }
    ]},
    { type: 'fill', title: 'Fill in the blanks',
      text: 'Producing a single cotton T-shirt requires around 2,700 litres of [[water]].\nPolyester is a [[plastic]] fibre that releases [[microplastics]] into the [[oceans]] every time we [[wash]] it.\nThe collapse killed more than 1,100 garment [[workers]]. It revealed the dangerous [[conditions]] and the low [[wages]] behind our cheap clothes.' },
    { type: 'multi', title: 'Choose the correct answer(s)', items: [
      { q: 'What are young people doing to fight fast fashion?', o: ['Going to second-hand shops', 'Using clothing apps', 'Going to repair workshops', 'Buying more new clothes', 'Boycotting all clothes brands'], a: [0, 1, 2] }
    ]},
    { type: 'open', title: 'Answer the questions', items: [
      { q: 'Why is fast fashion "a great deal" for consumers?', a: 'Because they can follow the latest trends without spending much money: the clothes are cheap.', k: ['trends', 'cheap|money'] },
      { q: 'Why is polyester a problem for the environment?', a: 'Because it is a plastic fibre that releases microplastics into the oceans every time we wash it.', k: ['plastic|microplastics', 'ocean'] },
      { q: 'What did the Rana Plaza disaster reveal?', a: 'It revealed the dangerous working conditions and the low wages behind our cheap clothes.', k: ['dangerous|conditions', 'wages'] }
    ]},
    { type: 'dictation', title: 'Dictation',
      text: 'Most of these clothes are worn only a few times before being thrown away. The most sustainable garment is the one already in your wardrobe.' }
  ]
},
{
  id: 'file6', extra: true, icon: '🤖',
  title: 'File 6 — AI at Work',
  topic: { ru: 'Технологии и экономика: искусственный интеллект и рабочие места', en: 'Technology & economy: AI and jobs' },
  summary: {
    ru: 'Искусственный интеллект меняет работу. Заберёт ли машина рабочие места, какие навыки понадобятся и какие вопросы стоят перед правительствами?',
    en: 'Artificial intelligence is changing work. Will machines take our jobs, which skills will we need, and what questions do governments face?'
  },
  transcript: 'Artificial intelligence is changing the way we work faster than any technology before it. Tools that can write texts, translate documents, analyse data or create images are now available to anyone with a smartphone. For companies, the promise is huge: tasks that used to take hours can be done in a few seconds, and productivity could rise significantly. But many workers are worried. Will a machine take their job? Economists are divided. Some believe that AI will destroy millions of jobs, especially in offices, customer service and translation. Others point out that every technological revolution has also created new jobs that nobody could imagine before. What most experts agree on is that jobs will change. Workers will need to learn new skills, and the ability to think critically, communicate and adapt will become more valuable than ever. Governments, too, face difficult questions. How should AI be regulated? Who is responsible when it makes a mistake? How can we protect people\'s personal data? One thing is certain: the students of today will work alongside AI tomorrow.',
  sections: [
    { type: 'match', title: 'Glossary — match each word with its meaning', pairs: [
      ['tool', 'Something you use to do a job'],
      ['to analyse', 'To study something in detail'],
      ['task', 'A piece of work to be done'],
      ['worried', 'Anxious, afraid that something bad will happen'],
      ['divided', 'Not in agreement'],
      ['skill', 'An ability you learn and practise'],
      ['valuable', 'Very useful or important'],
      ['to regulate', 'To control something with rules or laws'],
      ['alongside', 'Together with, next to']
    ]},
    { type: 'mcq', title: 'Main idea', items: [
      { q: 'This document is about:', o: ['how to build a robot', 'the impact of artificial intelligence on work and society', 'why smartphones are dangerous for students'], a: [1] }
    ]},
    { type: 'tf', title: 'True or False', items: [
      { q: 'All economists agree that AI will destroy millions of jobs.', a: false },
      { q: 'Previous technological revolutions also created new jobs.', a: true },
      { q: 'According to the text, critical thinking will become less important.', a: false }
    ]},
    { type: 'fill', title: 'Fill in the blanks',
      text: 'Tasks that used to take [[hours]] can be done in a few [[seconds]], and [[productivity]] could rise significantly.\nSome believe that AI will [[destroy]] millions of jobs, especially in offices, customer [[service]] and [[translation]].\nWorkers will need to learn new [[skills]].' },
    { type: 'multi', title: 'Choose the correct answer(s)', items: [
      { q: 'Which questions do governments face, according to the text?', o: ['How should AI be regulated?', 'Who is responsible when AI makes a mistake?', 'How can personal data be protected?', 'How can AI replace all teachers?'], a: [0, 1, 2] },
      { q: 'Which abilities will become more valuable?', o: ['Thinking critically', 'Communicating', 'Adapting', 'Memorising phone numbers'], a: [0, 1, 2] }
    ]},
    { type: 'open', title: 'Answer the questions', items: [
      { q: 'Why are companies interested in AI?', a: 'Because tasks that used to take hours can be done in seconds, so productivity could rise significantly.', k: ['productivity|faster|seconds'] },
      { q: 'Why are economists divided?', a: 'Some think AI will destroy millions of jobs; others point out that every technological revolution has also created new jobs.', k: ['destroy', 'new jobs|create'] }
    ]},
    { type: 'dictation', title: 'Dictation',
      text: 'What most experts agree on is that jobs will change. One thing is certain: the students of today will work alongside AI tomorrow.' }
  ]
}
);
