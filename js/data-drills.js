/* Extra drill questions per rule topic (shown in each rule's practice, the review and the mock exam).
   Compact format: [question, options, correctIndex, ru explanation, en explanation] */
(function () {
  const D = {
    pres: [
      ['Water ___ at 100 degrees Celsius.', ['boil', 'boils', 'is boiling', 'boiled'], 1, 'Общая истина → Present Simple; water = it → -s.', 'General truth → present simple; water = it → -s.'],
      ['Look! The children ___ in the garden.', ['play', 'plays', 'are playing', 'played'], 2, 'Look! — действие прямо сейчас → Present Continuous.', 'Look! — happening now → present continuous.'],
      ['___ your brother work in a bank?', ['Do', 'Does', 'Is', 'Has'], 1, 'your brother = he → вопрос через Does.', 'your brother = he → Does.'],
      ["She ___ coffee; she prefers tea.", ["doesn't like", "don't like", "isn't liking", 'not likes'], 0, "she → doesn't + глагол без -s; like — глагол состояния, не Continuous.", "she → doesn't + base verb; like is stative."],
      ['I ___ what you mean.', ['am understanding', 'understand', 'understands', 'am understand'], 1, 'understand — глагол состояния → Present Simple.', 'understand is stative → present simple.'],
      ['My parents ___ to the theatre once a month.', ['goes', 'are going', 'go', 'going'], 2, 'Регулярность (once a month), they → go.', 'Routine (once a month), they → go.'],
      ['He ___ late for class.', ['always is', 'is always', 'always does be', 'is being always'], 1, 'Наречие частоты ставится ПОСЛЕ to be.', 'Frequency adverbs go AFTER the verb to be.'],
      ['This week I ___ from home because the office is closed.', ['work', 'am working', 'works', 'worked'], 1, 'Временная ситуация (this week) → Present Continuous.', 'Temporary situation → present continuous.'],
      ['The shop ___ at 9 a.m. every day.', ['opens', 'is opening', 'open', 'opened'], 0, 'Расписание/регулярность → Present Simple, the shop = it.', 'Schedule/routine → present simple.'],
      ["What ___? — I'm a student.", ['are you doing', 'do you do', 'you do', 'does you do'], 1, 'What do you do? — вопрос о профессии.', 'What do you do? asks about your job.']
    ],
    past: [
      ['We ___ the museum last Saturday.', ['visit', 'have visited', 'visited', 'were visiting'], 2, 'last Saturday → Past Simple.', 'last Saturday → past simple.'],
      ['What ___ at 8 pm yesterday? — I was watching TV.', ['did you do', 'were you doing', 'have you done', 'you were doing'], 1, 'Процесс в момент прошлого (at 8 pm) → Past Continuous.', 'Action in progress at a past moment → past continuous.'],
      ['When I arrived at the station, the train ___.', ['already left', 'had already left', 'has already left', 'was already leave'], 1, 'Раньше другого прошлого действия → Past Perfect.', 'Before another past action → past perfect.'],
      ["She couldn't open the door because she ___ her keys.", ['has lost', 'had lost', 'loses', 'was losing'], 1, 'Потеряла ДО того, как не смогла открыть → had lost.', 'Lost before the past moment → had lost.'],
      ['I ___ in Paris when I was a child.', ['use to live', 'used to live', 'was used to live', 'am used to living'], 1, 'Состояние в прошлом, которого больше нет → used to + V.', 'Past state no longer true → used to + V.'],
      ['___ you see the match last night?', ['Do', 'Have', 'Did', 'Were'], 2, 'last night → вопрос в Past Simple через Did.', 'last night → Did.'],
      ['They ___ each other two years ago.', ['meet', 'met', 'have met', 'had meet'], 1, '… ago → Past Simple: met.', '… ago → past simple: met.'],
      ['He told me he ___ ill the week before.', ['is', 'has been', 'had been', 'will be'], 2, 'Косвенная речь + the week before → Past Perfect.', 'Reported speech + the week before → past perfect.'],
      ['While she ___, she cut her finger.', ['cooked', 'was cooking', 'has cooked', 'cooks'], 1, 'while + длительный процесс → Past Continuous.', 'while + action in progress → past continuous.'],
      ['My grandfather ___ born in 1950.', ['is', 'was', 'has been', 'were'], 1, 'to be born в прошлом → was born.', 'was born.']
    ],
    perf: [
      ['I ___ this film three times.', ['saw', 'have seen', 'see', 'had see'], 1, 'Опыт без указания времени → Present Perfect.', 'Experience, no time stated → present perfect.'],
      ['She ___ in Lyon for five years and still lives there.', ['lived', 'has lived', 'lives', 'is living'], 1, 'for + период до сих пор → has lived.', 'for + period up to now → has lived.'],
      ["We haven't finished the project ___.", ['already', 'yet', 'still', 'ever'], 1, 'В отрицании в конце → yet.', 'Negative, end position → yet.'],
      ['Have you ___ eaten sushi?', ['ever', 'never', 'yet', 'since'], 0, 'Вопрос об опыте → ever.', 'Question about experience → ever.'],
      ["I've known her ___ 2019.", ['for', 'since', 'ago', 'from'], 1, 'since + точка отсчёта (2019).', 'since + starting point.'],
      ["I've been waiting for you ___ two hours!", ['since', 'for', 'during', 'ago'], 1, 'for + период (two hours).', 'for + period.'],
      ['They ___ married in 2015.', ['have got', 'got', 'have been getting', 'has got'], 1, 'Точный год → Past Simple, не Present Perfect.', 'Specific year → past simple.'],
      ["It's the first time I ___ abroad.", ['travel', 'travelled', 'have travelled', 'am travelling'], 2, "It's the first time + Present Perfect.", "It's the first time + present perfect."],
      ["He's tired because he ___ all day.", ['works', 'has been working', 'worked', 'had work'], 1, 'Длительный процесс с результатом сейчас → Present Perfect Continuous.', 'Long activity with a present result → present perfect continuous.'],
      ['___ you finished your homework yet?', ['Did', 'Have', 'Are', 'Do'], 1, 'yet → Present Perfect: Have you finished…?', 'yet → present perfect.']
    ],
    fut: [
      ["I'm hungry. — I ___ make you a sandwich.", ['am going to', 'will', 'am', 'shall to'], 1, 'Решение в момент речи → will.', 'Decision made now → will.'],
      ["We ___ visit our grandparents next weekend; we've already bought the tickets.", ['will', 'are going to', 'go', 'would'], 1, 'План, принятый заранее → be going to.', 'Plan decided earlier → be going to.'],
      ['If you ___ late, call me.', ['will be', 'are', 'would be', 'be'], 1, 'После if (будущее) → Present Simple.', 'After "if" → present simple.'],
      ["I'll wait here until you ___ back.", ['will come', 'come', 'came', 'coming'], 1, 'После until → Present Simple.', 'After "until" → present simple.'],
      ['Be careful! You ___ fall!', ['are going to', 'will to', 'going', 'are falling to'], 0, 'Прогноз по видимым признакам → be going to.', 'Prediction from evidence → be going to.'],
      ["What ___ this evening? — I'm meeting friends.", ['do you do', 'are you doing', 'will you doing', 'you are doing'], 1, 'Договорённости → Present Continuous.', 'Arrangements → present continuous.'],
      ['The conference ___ at 9 a.m. tomorrow, according to the programme.', ['starts', 'will starting', 'is start', 'start'], 0, 'Расписание/программа → Present Simple.', 'Timetable → present simple.'],
      ["Don't call me at 8; I ___ dinner then.", ['will have', 'will be having', 'have', 'am have'], 1, 'Процесс в момент будущего → will be + -ing.', 'In progress at a future time → will be + -ing.'],
      ["I promise I ___ tell anyone.", ["won't", "don't", 'am not going', 'not will'], 0, "Обещание → will / won't.", "Promise → will / won't."],
      ['As soon as the results ___ published, we will inform you.', ['will be', 'are', 'were', 'would be'], 1, 'После as soon as → Present (пассив: are published).', 'After "as soon as" → present (passive).']
    ],
    q: [
      ['___ do you go to the gym? — Twice a week.', ['How long', 'How often', 'How much', 'How far'], 1, 'Частота → How often.', 'Frequency → How often.'],
      ['Can you tell me where ___?', ['is the station', 'the station is', 'does the station be', 'is station'], 1, 'Косвенный вопрос → прямой порядок слов.', 'Indirect question → statement order.'],
      ['___ wrote this book?', ['Who', 'Whom', 'Who did', 'Which did'], 0, 'Вопрос к подлежащему → Who + глагол, без did.', 'Subject question → Who + verb, no did.'],
      ["She's French, ___ she?", ['is', "isn't", "doesn't", "wasn't"], 1, "Утверждение с is → хвостик isn't she?", "Positive with is → isn't she?"],
      ["You didn't call him, ___ you?", ["didn't", 'did', 'do', 'have'], 1, 'Отрицание → положительный хвостик did you?', 'Negative → positive tag: did you?'],
      ['___ is it from Paris to Lyon? — About 460 km.', ['How long', 'How far', 'How much', 'How many'], 1, 'Расстояние → How far.', 'Distance → How far.'],
      ['I wonder ___ he will accept the offer.', ['if', 'that', 'what', 'does'], 0, 'Косвенный да/нет-вопрос → if / whether.', 'Indirect yes/no question → if / whether.'],
      ['What ___ yesterday?', ['did happen', 'happened', 'was happen', 'has happened'], 1, 'What — подлежащее → без did: What happened?', 'What is the subject → What happened?'],
      ['___ people came to the party?', ['How much', 'How many', 'How long', 'How often'], 1, 'people — исчисляемое → How many.', 'Countable → How many.'],
      ["Let's go, ___?", ['shall we', 'will you', "don't we", 'do we'], 0, "Let's… → shall we?", "Let's… → shall we?"]
    ],
    mod: [
      ["You ___ wear a uniform at school; it's compulsory.", ['can', 'have to', "needn't", 'might'], 1, 'Обязательно (правило) → have to / must.', 'Obligation → have to / must.'],
      ['You ___ bring food; we have plenty.', ["mustn't", "don't have to", "can't", "shouldn't to"], 1, "Не нужно → don't have to (mustn't = запрещено).", "No necessity → don't have to."],
      ['When I was five, I ___ swim.', ['can', 'could', 'must', 'should'], 1, 'Умение в прошлом → could.', 'Past ability → could.'],
      ['You look ill. You ___ see a doctor.', ['should', 'must to', 'would', 'ought'], 0, 'Совет → should (ought нужно с to).', 'Advice → should (ought needs "to").'],
      ["He ___ be at work — his car isn't here.", ['must', "can't", 'should', 'has to'], 1, "Уверены, что нет → can't be.", "Certain it's not true → can't be."],
      ["I can't find my phone. I ___ have left it at home.", ['must', "can't", "mustn't", "needn't"], 0, 'Уверенный вывод о прошлом → must have + V3.', 'Logical conclusion about the past → must have + V3.'],
      ['You ___ have called! I was worried.', ['should', 'must', 'can', 'may'], 0, 'Упрёк → should have + V3.', 'Criticism → should have + V3.'],
      ['___ I open the window? — Yes, of course.', ['Must', 'May', 'Need', 'Ought'], 1, 'Просьба о разрешении → May I…?', 'Asking permission → May I…?'],
      ["We'd better ___ now or we'll miss the train.", ['to leave', 'leaving', 'leave', 'left'], 2, 'had better + глагол без to.', 'had better + bare infinitive.'],
      ['She ___ speak three languages when she was twenty.', ['could', 'can', 'is able', 'must'], 0, 'Умение в прошлом → could.', 'Past ability → could.']
    ],
    cond: [
      ['If you heat ice, it ___.', ['melt', 'melts', 'will melted', 'would melt'], 1, 'Нулевой тип (всегда): If + Present, Present.', 'Zero conditional: present + present.'],
      ['If I ___ more money, I would buy a car.', ['have', 'had', 'would have', 'will have'], 1, 'Второй тип: If + Past, would.', 'Second conditional: If + past, would.'],
      ["If we ___ the bus, we'll be late.", ['miss', 'will miss', 'missed', 'would miss'], 0, 'Первый тип: If + Present, will.', 'First conditional: If + present, will.'],
      ['If she had left earlier, she ___ the train.', ['would catch', 'caught', 'would have caught', 'will catch'], 2, 'Третий тип: would have + V3.', 'Third conditional: would have + V3.'],
      ["I'd travel more if I ___ so busy.", ['am not', "weren't", "won't be", "wouldn't be"], 1, 'Второй тип: If + Past (weren\'t).', 'Second conditional: If + past (weren\'t).'],
      ['I wish I ___ taller.', ['am', 'were', 'will be', 'would be'], 1, 'Сожаление о настоящем: wish + Past (were).', 'Present regret: wish + past (were).'],
      ['I wish I ___ to the party yesterday.', ['went', 'had gone', 'would go', 'have gone'], 1, 'Сожаление о прошлом: wish + Past Perfect.', 'Past regret: wish + past perfect.'],
      ['You can borrow my car ___ you drive carefully.', ['unless', 'as long as', 'whether', 'despite'], 1, 'as long as = при условии, что.', 'as long as = only if.'],
      ["___ you study, you won't pass.", ['If', 'Unless', 'Provided', 'As long as'], 1, 'Unless = if not: если не будешь учиться.', 'Unless = if not.'],
      ["If I ___ you, I'd apologise.", ['am', 'were', 'would be', 'had'], 1, 'Совет: If I were you.', 'Advice: If I were you.']
    ],
    pass: [
      ['The Mona Lisa ___ by Leonardo da Vinci.', ['painted', 'was painted', 'has painted', 'is painting'], 1, 'Пассив в прошлом: was + V3.', 'Past passive: was + V3.'],
      ['Thousands of cars ___ in this factory every year.', ['produce', 'are produced', 'produced', 'are producing'], 1, 'Пассив в настоящем, мн. ч.: are + V3.', 'Present passive, plural: are + V3.'],
      ['The results ___ next week.', ['will announce', 'will be announced', 'are announcing', 'announced'], 1, 'Будущий пассив: will be + V3.', 'Future passive: will be + V3.'],
      ['The road ___ at the moment, so take another route.', ['is repairing', 'is being repaired', 'has repaired', 'repairs'], 1, 'Пассив, процесс сейчас: is being + V3.', 'Continuous passive: is being + V3.'],
      ['Three new schools ___ since 2020.', ['have been built', 'have built', 'were build', 'are built'], 0, 'since → Present Perfect пассив: have been + V3.', 'since → present perfect passive.'],
      ['I need to have my hair ___.', ['cut', 'to cut', 'cutting', 'cuts'], 0, 'have something done: have my hair cut (cut — V3).', 'have something done: cut is the past participle.'],
      ['This bag is made ___ leather.', ['from', 'of', 'by', 'with'], 1, 'be made of + материал.', 'be made of + material.'],
      ['Smoking is not ___ in restaurants.', ['allow', 'allowing', 'allowed', 'to allow'], 2, 'be allowed — пассив.', 'be allowed (passive).'],
      ['The thief ___ by a neighbour.', ['was seen', 'saw', 'has seen', 'is seeing'], 0, 'by + исполнитель → пассив: was seen.', 'by + agent → passive.'],
      ['It ___ that the economy will grow next year.', ['is expected', 'expects', 'is expecting', 'expected'], 0, 'It is expected that… — безличный пассив.', 'Impersonal passive: It is expected that…']
    ],
    verb: [
      ['I enjoy ___ to music.', ['listen', 'to listen', 'listening', 'listened'], 2, 'enjoy + -ing.', 'enjoy + -ing.'],
      ['We hope ___ you soon.', ['see', 'to see', 'seeing', 'seen'], 1, 'hope + to + V.', 'hope + to + V.'],
      ['My parents let me ___ out late.', ['to stay', 'staying', 'stay', 'stayed'], 2, 'let + объект + V (без to).', 'let + object + bare infinitive.'],
      ['She asked me ___ her with her homework.', ['help', 'to help', 'helping', 'helped'], 1, 'ask somebody to do.', 'ask somebody to do.'],
      ["I'm looking forward ___ from you.", ['to hear', 'hearing', 'to hearing', 'hear'], 2, 'look forward to + -ing.', 'look forward to + -ing.'],
      ['He stopped ___ ten years ago and feels much healthier.', ['smoke', 'to smoke', 'smoking', 'smoked'], 2, 'stop doing — перестать.', 'stop doing = quit.'],
      ['Please remember ___ the lights before you leave.', ['turning off', 'to turn off', 'turn off', 'turned off'], 1, 'remember to do — не забыть сделать.', 'remember to do = don\'t forget.'],
      ['They made us ___ for an hour.', ['wait', 'to wait', 'waiting', 'waited'], 0, 'make + объект + V (без to).', 'make + object + bare infinitive.'],
      ['Would you mind ___ the window?', ['open', 'to open', 'opening', 'opened'], 2, 'mind + -ing.', 'mind + -ing.'],
      ['He refused ___ the question.', ['answer', 'to answer', 'answering', 'answered'], 1, 'refuse + to + V.', 'refuse + to + V.']
    ],
    pron: [
      ["That isn't my coat. Mine is the blue one, and this one is ___.", ['her', 'hers', 'she', 'herself'], 1, 'Без существительного → hers.', 'Standing alone → hers.'],
      ['He hurt ___ while playing football.', ['him', 'his', 'himself', 'he'], 2, 'Действие на себя → himself.', 'Action on oneself → himself.'],
      ['Is there ___ sugar in my coffee?', ['some', 'any', 'many', 'a few'], 1, 'Вопрос, неисчисляемое → any.', 'Question, uncountable → any.'],
      ["I have ___ friends in this city, so I'm never lonely.", ['a few', 'few', 'little', 'a little'], 0, 'a few (несколько, достаточно) + исчисляемые.', 'a few (some, enough) + countable.'],
      ['How ___ water do you drink per day?', ['many', 'much', 'few', 'lot'], 1, 'water — неисчисляемое → much.', 'Uncountable → much.'],
      ['___ of my two brothers lives in Paris; they both live in London.', ['Either', 'Neither', 'None', 'Both'], 1, 'Ни один из двух → Neither.', 'Not one of two → Neither.'],
      ["There's ___ at the door. Can you open it?", ['anybody', 'somebody', 'nobody', 'everybody'], 1, 'Утверждение → somebody.', 'Positive sentence → somebody.'],
      ['They built the house ___.', ['themselves', 'theirs', 'them', 'their'], 0, 'Сами → themselves.', 'By themselves → themselves.'],
      ['___ of the students passed: the test was too difficult.', ['Neither', 'None', 'No', 'Nobody'], 1, 'Больше двух → None of…', 'More than two → None of…'],
      ["She doesn't know ___ about economics.", ['nothing', 'anything', 'something', 'none'], 1, "Отрицание doesn't → anything (без двойного отрицания).", "After doesn't → anything."]
    ],
    rel: [
      ['The man ___ lives next door is a doctor.', ['which', 'who', 'whose', 'whom'], 1, 'Человек-подлежащее → who.', 'Person as subject → who.'],
      ['The book ___ I bought yesterday is great.', ['who', 'whom', 'which', 'where'], 2, 'Вещь → which (или that, или Ø).', 'Thing → which (or that / Ø).'],
      ['This is the restaurant ___ we had our first date.', ['which', 'where', 'when', 'who'], 1, 'Место → where.', 'Place → where.'],
      ['I met a girl ___ father is a famous actor.', ['who', 'whose', 'which', 'whom'], 1, 'Чей отец → whose.', 'Possession → whose.'],
      ['My sister, ___ lives in Rome, is a teacher.', ['that', 'who', 'which', 'whose'], 1, 'С запятыми, человек → who (that нельзя).', 'Non-defining, person → who (not that).'],
      ['The students, most of ___ were tired, left early.', ['who', 'whom', 'which', 'them'], 1, 'После предлога (of), люди → whom.', 'After a preposition, people → whom.'],
      ['Do you remember the day ___ we met?', ['which', 'where', 'when', 'whose'], 2, 'Время → when.', 'Time → when.'],
      ['The car ___ he bought is very expensive.', ['Ø', 'who', 'what', 'whose'], 0, 'Дополнение без запятых можно опустить (Ø); which/that тоже верно.', 'Object pronoun can be omitted (Ø); which/that also fine.'],
      ['London, ___ is the capital of the UK, has 9 million people.', ['that', 'which', 'where', 'who'], 1, 'С запятыми, вещь/город-подлежащее → which.', 'Non-defining, thing as subject → which.'],
      ["What's the name of the person ___ you spoke to?", ['which', 'whom', 'whose', 'where'], 1, 'Человек-дополнение → whom (или who).', 'Person as object → whom (or who).']
    ],
    comp: [
      ['This exercise is ___ than the last one.', ['easyer', 'more easy', 'easier', 'most easy'], 2, 'easy → easier (y → i + er).', 'easy → easier.'],
      ['Everest is ___ mountain in the world.', ['the higher', 'the highest', 'highest', 'the most high'], 1, 'in the world → превосходная: the highest.', 'in the world → superlative.'],
      ['My new flat is ___ bigger than my old one.', ['much', 'very', 'more', 'most'], 0, 'Усиление сравнительной → much/far/a lot (не very).', 'Strengthen a comparative → much/far (not very).'],
      ['She runs ___ than me.', ['fast', 'faster', 'more fast', 'fastest'], 1, 'fast → faster.', 'fast → faster.'],
      ["This film isn't ___ good as the book.", ['as', 'than', 'more', 'such'], 0, 'not as … as.', 'not as … as.'],
      ['It was ___ a boring film that I fell asleep.', ['so', 'such', 'too', 'very'], 1, 'such + a + прил. + сущ.', 'such + a + adj + noun.'],
      ['The coffee is ___ hot to drink.', ['too', 'enough', 'so', 'such'], 0, 'too + прил. + to do — слишком.', 'too + adj + to do.'],
      ['He drives very ___.', ['careful', 'carefully', 'more careful', 'carefulness'], 1, 'Описывает глагол → наречие carefully.', 'Modifies a verb → adverb.'],
      ['The ___ you sleep, the ___ you feel.', ['more / better', 'most / best', 'more / good', 'much / well'], 0, 'The more…, the better…', 'The more…, the better…'],
      ['Today is ___ day of the year.', ['the worse', 'the worst', 'the baddest', 'worst'], 1, 'bad → worse → the worst.', 'bad → worse → the worst.']
    ],
    link: [
      ['___ it was raining, we went for a walk.', ['Despite', 'Although', 'However', 'Because of'], 1, 'Перед предложением (it was raining) → Although.', 'Before a clause → Although.'],
      ['___ the traffic, we arrived on time.', ['Although', 'In spite of', 'Even though', 'However'], 1, 'Перед существительным → In spite of / Despite.', 'Before a noun → in spite of / despite.'],
      ['The plan is risky. ___, it could bring big profits.', ['Although', 'However', 'Despite', 'Unless'], 1, 'Контраст между предложениями → However,', 'Contrast between sentences → However,'],
      ['I stayed at home ___ I was ill.', ['because', 'because of', 'despite', 'so'], 0, 'Причина + предложение → because.', 'Reason + clause → because.'],
      ['The flight was cancelled ___ the storm.', ['because', 'because of', 'although', 'so'], 1, 'Причина + существительное → because of.', 'Reason + noun → because of.'],
      ['Some people love fast food, ___ others hate it.', ['whereas', 'despite', 'unless', 'because of'], 0, 'Сравнение двух фактов → whereas.', 'Contrasting two facts → whereas.'],
      ['Prices rose; ___, sales fell.', ['however', 'consequently', 'although', 'despite'], 1, 'Следствие → consequently.', 'Result → consequently.'],
      ['She saves money ___ buy a house.', ['in order to', 'so that', 'because', 'despite'], 0, 'Цель + глагол → in order to.', 'Purpose + verb → in order to.'],
      ["I'll go out ___ it rains or not.", ['if', 'whether', 'unless', 'although'], 1, 'whether … or not.', 'whether … or not.'],
      ['Many countries, ___ France and Spain, depend on tourism.', ['such as', 'as well', 'however', 'despite'], 0, 'Пример → such as.', 'Example → such as.']
    ],
    prep: [
      ['The meeting is ___ Monday.', ['in', 'on', 'at', '—'], 1, 'Дни недели → on.', 'Days → on.'],
      ['I was born ___ 2005.', ['on', 'at', 'in', '—'], 2, 'Год → in.', 'Years → in.'],
      ['See you ___ the morning!', ['at', 'on', 'in', 'by'], 2, 'Часть дня → in the morning (но at night).', 'Part of the day → in the morning (but at night).'],
      ["She's very good ___ maths.", ['in', 'on', 'at', 'with'], 2, 'good at + предмет/занятие.', 'good at + subject/activity.'],
      ['It depends ___ the weather.', ['of', 'on', 'from', 'at'], 1, 'depend on.', 'depend on.'],
      ["I'm waiting ___ the bus.", ['to', 'for', 'on', 'at'], 1, 'wait for.', 'wait for.'],
      ["He's responsible ___ the marketing team.", ['of', 'for', 'about', 'on'], 1, 'responsible for.', 'responsible for.'],
      ["We'll leave ___ next Friday.", ['on', 'in', 'at', '— (no preposition)'], 3, 'С next/last/this/every предлог не нужен.', 'No preposition with next/last/this/every.'],
      ["She's afraid ___ spiders.", ['from', 'of', 'at', 'about'], 1, 'afraid of.', 'afraid of.'],
      ['My office is ___ the third floor.', ['in', 'at', 'on', 'by'], 2, 'Этаж → on the third floor.', 'Floors → on.']
    ],
    voc: [
      ['Can you ___ me some money until Friday?', ['borrow', 'lend', 'rent', 'owe'], 1, 'Дать в долг → lend (borrow — взять).', 'Give temporarily → lend.'],
      ['Unemployment has ___ sharply this year.', ['raised', 'risen', 'rose', 'arisen'], 1, 'rise (без объекта) → has risen.', 'rise (no object) → has risen.'],
      ['We need to ___ a decision today.', ['do', 'make', 'give', 'put'], 1, 'make a decision.', 'make a decision.'],
      ['I ___ a lot of mistakes in the test.', ['did', 'made', 'took', 'had'], 1, 'make a mistake.', 'make a mistake.'],
      ['The film was so ___ that I fell asleep.', ['bored', 'boring', 'tired', 'interested'], 1, 'Фильм вызывает скуку → boring (-ing).', 'The film causes boredom → boring.'],
      ["Please ___ the TV, I'm trying to sleep.", ['turn up', 'turn down', 'turn on', 'put on'], 1, 'turn down — убавить звук.', 'turn down = lower the volume.'],
      ['She ___ smoking last year.', ['gave up', 'gave in', 'set off', 'put up'], 0, 'give up — бросить привычку.', 'give up = stop a habit.'],
      ["I can't ___ with this noise any longer!", ['put up', 'look after', 'call off', 'find out'], 0, 'put up with — терпеть.', 'put up with = tolerate.'],
      ['He works ___ — he lives in Canada now.', ['foreign', 'abroad', 'foreigner', 'stranger'], 1, 'За границей → abroad (наречие).', 'In another country → abroad.'],
      ['Can you ___ the meaning of this word in the dictionary?', ['look up', 'look after', 'look for', 'look into'], 0, 'look up — посмотреть в словаре.', 'look up = check in a dictionary.']
    ]
  };
  Object.keys(D).forEach(tag => {
    window.GRAMMAR.push({
      id: 'drill-' + tag, title: 'Extra drill', part: 'Drill', level: '—', drill: true, tag,
      questions: D[tag].map(([q, o, a, ru, en]) => ({ q, o, a: [a], ex: { ru, en } }))
    });
  });
})();
