/* Grammar rules. Text fields are trusted HTML ({ru, en}); examples are English.
   TAGS maps every question of every test to a rule id (comma-separated, in order). */
window.TAGS = {
  mcq1: 'voc,mod,voc,prep,verb,voc,q,prep,q,pres,past,voc,comp,q,comp,pres,q,pron,voc,past',
  mcq2: 'voc,voc,q,voc,prep,verb,perf,perf,mod,verb,pass,link,pron,voc,verb,mod,cond,mod,perf,voc',
  mcq3: 'pron,rel,fut,comp,rel,cond,link,rel,comp,comp,q,pron,q,pron,comp',
  mcq4: 'pron,cond,rel,verb,comp,comp,comp,cond,link,pron,cond,comp,link,rel,comp',
  mcq5: 'voc,q,comp,link,comp,voc,verb,pron,pass,cond,verb,verb,voc,pass,voc',
  mcq6: 'verb,past,mod,cond,verb,pres,perf,verb,fut,past,cond,past,prep,mod,verb',
  mcq7: 'q,past,fut,pres,mod,link,q,verb,q,cond,comp,q,verb,q,voc,rel,pron,link,link,link',
  mcq8: 'perf,past,past,fut,past,perf,fut,fut,past,past,perf,fut,past,perf,past',
  mcq9: 'mod,cond,cond,mod,mod,pass,pass,pass,mod,cond,cond,pass,pass,cond,mod',
  mcq10: 'rel,rel,rel,comp,comp,link,link,pron,pron,pron,pron,pron,comp,comp,link',
  mcq11: 'prep,verb,verb,verb,verb,voc,voc,voc,voc,voc,voc,voc,voc,verb,verb'
};

window.RULES = [
{
  id: 'pres', icon: '⏱️',
  title: { ru: 'Present Simple и Present Continuous', en: 'Present Simple & Present Continuous' },
  short: { ru: 'Present Simple — факты, привычки, расписания (he/she/it + <b>-s</b>). Present Continuous — то, что происходит сейчас (<b>am/is/are + -ing</b>).',
           en: 'Present simple — facts, habits, timetables (he/she/it + <b>-s</b>). Present continuous — what is happening now (<b>am/is/are + -ing</b>).' },
  sections: [
    { h: { ru: 'Present Simple: образование', en: 'Present simple: form' },
      table: [['', '+', '−', '?'], ['I / you / we / they', 'work', "don't work", 'Do … work?'], ['he / she / it', 'work<b>s</b>', "doesn't work", 'Does … work?']],
      list: [
        { ru: 'В 3-м лице ед. ч. (he, she, it, Bob, my sister) глагол получает <b>-s</b>: <i>He usually gets up at 7.</i>', en: 'Third person singular adds <b>-s</b>: <i>He usually gets up at 7.</i>' },
        { ru: 'В вопросе и отрицании <b>-s</b> уходит во вспомогательный глагол <b>does</b>, а основной глагол — без -s: <i>Where <b>does</b> Julia <b>study</b>?</i>', en: 'In questions and negatives the <b>-s</b> moves to <b>does</b>; the main verb has no -s: <i>Where <b>does</b> Julia <b>study</b>?</i>' },
        { ru: 'Орфография: -es после s, sh, ch, x, o (watches, goes); согласная + y → -ies (study → studies).', en: 'Spelling: -es after s, sh, ch, x, o (watches, goes); consonant + y → -ies (study → studies).' }
      ] },
    { h: { ru: 'Когда используется Present Simple', en: 'When to use the present simple' },
      list: [
        { ru: 'Привычки и регулярные действия: <i>They rarely go to the cinema.</i>', en: 'Habits and routines: <i>They rarely go to the cinema.</i>' },
        { ru: 'Факты и общие истины: <i>English is spoken in many countries.</i>', en: 'Facts and general truths.' },
        { ru: 'Расписания (даже о будущем): <i>The train <b>leaves</b> at 6.45 tomorrow.</i>', en: 'Timetables (even for the future): <i>The train <b>leaves</b> at 6.45 tomorrow.</i>' },
        { ru: 'После <b>when, if, as soon as, before, after, until</b>, когда речь о будущем: <i>When the manager <b>comes</b>, I will speak to him.</i>', en: 'After <b>when, if, as soon as, before, after, until</b> with future meaning.' }
      ] },
    { h: { ru: 'Наречия частоты — место в предложении', en: 'Adverbs of frequency — position' },
      text: { ru: '<b>Перед</b> основным глаголом, но <b>после</b> глагола to be: <i>They <b>rarely</b> go…</i> / <i>He is <b>always</b> late.</i>', en: '<b>Before</b> the main verb, <b>after</b> the verb to be: <i>They <b>rarely</b> go…</i> / <i>He is <b>always</b> late.</i>' } },
    { h: { ru: 'Present Continuous', en: 'Present continuous' },
      list: [
        { ru: 'Форма: <b>am / is / are + V-ing</b>. <i>I am working. She isn\'t sleeping. Are you listening?</i>', en: 'Form: <b>am / is / are + V-ing</b>.' },
        { ru: 'Действие прямо сейчас (now, at the moment), временная ситуация (this week), заранее договорённые планы: <i>I\'m meeting Tom tonight.</i>', en: 'Actions now, temporary situations, fixed plans: <i>I\'m meeting Tom tonight.</i>' },
        { ru: '<b>Глаголы состояния не ставятся в Continuous</b>: know, like, love, hate, want, need, believe, understand, mean, own, belong. <i>I know</i> (не <s>I am knowing</s>).', en: '<b>Stative verbs are not used in the continuous</b>: know, like, want, need, believe, understand, mean, own…' }
      ] },
    { h: { ru: 'Усилительное do / does', en: 'Emphatic do / does' },
      text: { ru: 'Для усиления в утвердительном предложении: <b>do/does + глагол без -s</b>. <i>Anything the government <b>does tend</b> to cost twice as much.</i> (не <s>does tends</s>)', en: 'For emphasis: <b>do/does + base verb</b>. <i>Anything the government <b>does tend</b> to cost twice as much.</i>' } }
  ],
  memo: { h: { ru: 'Заучить: наречия частоты', en: 'Learn: adverbs of frequency' }, items: ['always (100%)', 'usually', 'often', 'sometimes', 'rarely / seldom', 'never (0%)', 'every day / once a week'] },
  traps: [['He go to work.', 'He goes to work.'], ['Does he goes?', 'Does he go?'], ['They go rarely to the cinema.', 'They rarely go to the cinema.'], ['I am knowing the answer.', 'I know the answer.'], ['When he will come, …', 'When he comes, …']]
},
{
  id: 'past', icon: '⌛',
  title: { ru: 'Прошедшие времена и used to', en: 'Past tenses & used to' },
  short: { ru: 'Past Simple — законченное действие с указанием времени (yesterday, last…, ago). Past Continuous — процесс. Past Perfect (had + V3) — то, что было ещё раньше.',
           en: 'Past simple — finished action at a stated time (yesterday, last…, ago). Past continuous — action in progress. Past perfect (had + V3) — an earlier past.' },
  sections: [
    { h: { ru: 'Past Simple', en: 'Past simple' },
      table: [['', '+', '−', '?'], ['все лица / all', 'worked / went', "didn't work / go", 'Did … work / go?']],
      list: [
        { ru: 'Правильные глаголы: <b>-ed</b>; неправильные — 2-я форма (go → went). После <b>did / didn\'t</b> — глагол в начальной форме: <i>Did you <b>talk</b>…?</i> (не <s>did you talked</s>).', en: 'Regular verbs: <b>-ed</b>; irregular: 2nd form. After <b>did/didn\'t</b> use the base form.' },
        { ru: 'Маркеры: <b>yesterday, last week/night/summer, … ago, in 2010, when I was a child</b>.', en: 'Markers: <b>yesterday, last…, … ago, in 2010, when I was a child</b>.' },
        { ru: '<b>ago</b> = «тому назад», ставится после периода: <i>Sally went there <b>8 years ago</b>.</i> (не <s>since 8 years</s>)', en: '<b>ago</b> follows the period: <i>8 years ago</i>.' },
        { ru: 'Рождение и возраст — через to be: <i>My sister <b>was</b> born in 1995. I <b>was</b> 18.</i>', en: 'Birth and age use to be: <i>was born</i>, <i>I was 18</i>.' }
      ] },
    { h: { ru: 'Past Continuous', en: 'Past continuous' },
      text: { ru: '<b>was / were + V-ing</b> — процесс в момент прошлого, часто прерванный коротким действием в Past Simple: <i>While I <b>was cooking</b>, the phone <b>rang</b>.</i>', en: '<b>was/were + V-ing</b> — action in progress, often interrupted: <i>While I <b>was cooking</b>, the phone <b>rang</b>.</i>' } },
    { h: { ru: 'Past Perfect', en: 'Past perfect' },
      list: [
        { ru: '<b>had + V3</b> — действие, которое произошло <b>раньше</b> другого прошлого действия: <i>By the time we arrived, the film <b>had already started</b>.</i>', en: '<b>had + V3</b> — an action before another past action.' },
        { ru: 'С периодом до события: <i>We <b>had known</b> each other for ten years before we got married.</i>', en: 'Duration up to a past event.' },
        { ru: 'В косвенной речи Past Simple сдвигается в Past Perfect: <i>"I finished it" → He said he <b>had finished</b> it the day before.</i>', en: 'Reported speech: past simple → past perfect.' }
      ] },
    { h: { ru: 'used to и would — привычки в прошлом', en: 'used to & would — past habits' },
      list: [
        { ru: '<b>used to + V</b> — раньше (а теперь нет): <i>My dad <b>used to tell</b> us stories.</i>', en: '<b>used to + V</b> — past habit/state no longer true.' },
        { ru: 'В вопросе/отрицании после did: <b>use to</b> (без -d): <i>I <b>didn\'t use to</b> like reading.</i>', en: 'After did: <b>use to</b> (no -d).' },
        { ru: '<b>would + V</b> — только повторяющиеся действия (не состояния): <i>I <b>would</b> play football every day.</i>', en: '<b>would</b> — repeated actions only, not states.' },
        { ru: 'Не путать с <b>be used to + -ing</b> (= привык) — см. «Глагольные конструкции».', en: 'Don\'t confuse with <b>be used to + -ing</b> (= be accustomed).' }
      ] }
  ],
  memo: { h: { ru: 'Заучить: неправильные глаголы', en: 'Learn: irregular verbs' }, table: [
    ['be', 'was / were', 'been'], ['become', 'became', 'become'], ['begin', 'began', 'begun'], ['bring', 'brought', 'brought'], ['buy', 'bought', 'bought'],
    ['catch', 'caught', 'caught'], ['choose', 'chose', 'chosen'], ['come', 'came', 'come'], ['cost', 'cost', 'cost'], ['do', 'did', 'done'],
    ['drink', 'drank', 'drunk'], ['drive', 'drove', 'driven'], ['eat', 'ate', 'eaten'], ['fall', 'fell', 'fallen'], ['feel', 'felt', 'felt'],
    ['fight', 'fought', 'fought'], ['find', 'found', 'found'], ['forget', 'forgot', 'forgotten'], ['get', 'got', 'got'], ['give', 'gave', 'given'],
    ['go', 'went', 'gone / been'], ['grow', 'grew', 'grown'], ['hang', 'hung', 'hung'], ['have', 'had', 'had'], ['hear', 'heard', 'heard'],
    ['hurt', 'hurt', 'hurt'], ['keep', 'kept', 'kept'], ['know', 'knew', 'known'], ['lead', 'led', 'led'], ['leave', 'left', 'left'],
    ['lend', 'lent', 'lent'], ['let', 'let', 'let'], ['lose', 'lost', 'lost'], ['make', 'made', 'made'], ['meet', 'met', 'met'],
    ['pay', 'paid', 'paid'], ['put', 'put', 'put'], ['read', 'read', 'read'], ['rise', 'rose', 'risen'], ['say', 'said', 'said'],
    ['see', 'saw', 'seen'], ['sell', 'sold', 'sold'], ['send', 'sent', 'sent'], ['shoot', 'shot', 'shot'], ['sleep', 'slept', 'slept'],
    ['speak', 'spoke', 'spoken'], ['spend', 'spent', 'spent'], ['steal', 'stole', 'stolen'], ['take', 'took', 'taken'], ['teach', 'taught', 'taught'],
    ['tell', 'told', 'told'], ['think', 'thought', 'thought'], ['throw', 'threw', 'thrown'], ['understand', 'understood', 'understood'], ['wear', 'wore', 'worn'],
    ['win', 'won', 'won'], ['write', 'wrote', 'written']] },
  traps: [['I have seen him yesterday.', 'I saw him yesterday.'], ['Sally went there since 8 years.', 'Sally went there 8 years ago.'], ['Did you went?', 'Did you go?'], ['I am born in 2006.', 'I was born in 2006.'], ['I didn\'t used to like it.', 'I didn\'t use to like it.']]
},
{
  id: 'perf', icon: '🔗',
  title: { ru: 'Present Perfect (Simple и Continuous)', en: 'Present Perfect (simple & continuous)' },
  short: { ru: '<b>have/has + V3</b> — связь прошлого с настоящим: опыт (ever/never), результат (already/yet/just), период до сих пор (for/since). С точным временем в прошлом (yesterday, last…, ago) — <b>нельзя</b>.',
           en: '<b>have/has + V3</b> links past and present: experience (ever/never), result (already/yet/just), period up to now (for/since). Never with a finished time (yesterday, last…, ago).' },
  sections: [
    { h: { ru: 'Образование', en: 'Form' },
      table: [['', '+', '−', '?'], ['I/you/we/they', 'have worked', "haven't worked", 'Have … worked?'], ['he/she/it', 'has worked', "hasn't worked", 'Has … worked?'], ['Continuous', 'have/has been working', "haven't been working", 'Have … been working?']] },
    { h: { ru: 'Когда используется', en: 'Uses' },
      list: [
        { ru: '<b>Опыт</b> в жизни (когда — неважно): <i>Have you <b>ever</b> been to the USA?</i>', en: '<b>Experience</b>: <i>Have you <b>ever</b> been to the USA?</i>' },
        { ru: '<b>Результат</b> сейчас: <i>I <b>have already</b> watched 7 documentaries.</i>', en: '<b>Result</b> now: <i>I <b>have already</b> watched 7 documentaries.</i>' },
        { ru: '<b>Период до настоящего</b> с for / since: <i>I <b>have lived</b> here <b>since</b> 2023. I <b>haven\'t seen</b> him <b>for ages</b>.</i>', en: '<b>Unfinished period</b> with for/since.' },
        { ru: 'После превосходной степени: <i>This is the best tea I\'<b>ve ever</b> tasted.</i>', en: 'After a superlative: <i>the best tea I\'ve <b>ever</b> tasted</i>.' }
      ] },
    { h: { ru: 'for или since', en: 'for vs since' },
      list: [
        { ru: '<b>for</b> + период: for three years, for ages, for a long time.', en: '<b>for</b> + period of time.' },
        { ru: '<b>since</b> + точка отсчёта: since 2023, since Monday, since he <b>had</b> the accident (после since — Past Simple).', en: '<b>since</b> + starting point; a clause after since is in the past simple.' }
      ] },
    { h: { ru: 'Present Perfect Continuous', en: 'Present perfect continuous' },
      text: { ru: '<b>have/has been + V-ing</b> — длительность процесса, который продолжается: <i>How long <b>have you been learning</b> English? Prices <b>have been rising</b> since January.</i>', en: '<b>have/has been + V-ing</b> — duration of an ongoing activity.' } },
    { h: { ru: 'Present Perfect или Past Simple?', en: 'Present perfect or past simple?' },
      text: { ru: 'Есть законченное время (yesterday, last week, in August, ago) → <b>Past Simple</b>: <i>The last time I <b>saw</b> her was in August.</i> Нет точного времени / период до сих пор → <b>Present Perfect</b>.', en: 'Finished time stated → <b>past simple</b>. No finished time / up to now → <b>present perfect</b>.' } }
  ],
  memo: { h: { ru: 'Заучить: маркеры', en: 'Learn: time markers' }, items: ['ever / never', 'already (+)', 'yet (− / ?) — в конце', 'just', 'so far / up to now', 'recently / lately', 'for + period', 'since + point', 'How long…?'] },
  traps: [['I live here since 2023.', 'I have lived here since 2023.'], ['I have seen him last week.', 'I saw him last week.'], ['I didn\'t see him for ages.', 'I haven\'t seen him for ages.'], ['The best tea I\'ve never tasted.', 'The best tea I\'ve ever tasted.'], ['I have already watched it yesterday.', 'I watched it yesterday.']]
},
{
  id: 'fut', icon: '🔮',
  title: { ru: 'Будущее время', en: 'Future forms' },
  short: { ru: '<b>will</b> — решение сейчас, прогноз, обещание. <b>be going to</b> — план или прогноз по видимым признакам. После <b>when / as soon as / if</b> о будущем — <b>Present Simple</b>.',
           en: '<b>will</b> — instant decision, prediction, promise. <b>be going to</b> — plan or evidence-based prediction. After <b>when / as soon as / if</b> use the <b>present simple</b>.' },
  sections: [
    { h: { ru: 'Формы будущего', en: 'Future forms' },
      table: [['Форма / Form', 'Значение / Meaning', 'Example'],
        ['will + V', 'решение, прогноз, обещание', 'I\'ll call you tomorrow.'],
        ['am/is/are going to + V', 'план; прогноз по признакам', 'Look at those clouds! It\'s going to rain.'],
        ['Present Continuous', 'договорённость', 'I\'m meeting him at 6.'],
        ['Present Simple', 'расписание', 'The train leaves at 6.45.'],
        ['will be + V-ing', 'процесс в момент будущего', 'This time next week I\'ll be lying on a beach.']] },
    { h: { ru: 'Придаточные времени и условия', en: 'Time and condition clauses' },
      text: { ru: 'После <b>when, as soon as, before, after, until, if, unless</b> будущее выражается <b>Present Simple</b> (а не will): <i>I\'ll call you as soon as I <b>get</b> home. When you <b>phone</b> Mark, remind him…</i>', en: 'After <b>when, as soon as, before, after, until, if, unless</b> use the <b>present simple</b> for the future.' } },
    { h: { ru: 'be going to — не забыть to be', en: 'be going to — don\'t forget "be"' },
      text: { ru: '<i>I<b>\'m going</b> to go to a pitching contest.</i> (не <s>I going to</s>, не <s>I will to go</s>)', en: '<i>I<b>\'m going</b> to go…</i> (not <s>I going to</s>, not <s>I will to go</s>)' } }
  ],
  traps: [['When the manager will come, …', 'When the manager comes, …'], ['I will to go.', 'I will go.'], ['I going to study.', 'I\'m going to study.'], ['I\'ll call you as soon as I will get home.', '… as soon as I get home.']]
},
{
  id: 'q', icon: '❓',
  title: { ru: 'Вопросы, порядок слов, разделительные вопросы', en: 'Questions, word order & question tags' },
  short: { ru: 'Прямой вопрос: (вопросительное слово) + <b>вспомогательный глагол + подлежащее + глагол</b>. Косвенный вопрос (I\'d like to know…, Did you understand…) — <b>обычный порядок слов</b>, без do/does.',
           en: 'Direct question: (question word) + <b>auxiliary + subject + verb</b>. Indirect question (I\'d like to know…) — <b>statement word order</b>, no do/does.' },
  sections: [
    { h: { ru: 'Схема вопроса', en: 'Question pattern' },
      table: [['Q-word', 'Aux', 'Subject', 'Verb', '…'], ['Where', 'does', 'Julia', 'study', '?'], ['How', 'do', 'you', 'spell', 'your name?'], ['—', 'Did', 'you', 'talk', 'to him?'], ['Where', 'are', 'you', '—', 'from?']] },
    { h: { ru: 'Вопросительные слова', en: 'Question words' },
      list: [
        { ru: '<b>How much</b> — цена, неисчисляемые (How much does it cost?); <b>How many</b> — исчисляемые.', en: '<b>How much</b> — price / uncountable; <b>How many</b> — countable.' },
        { ru: '<b>How long</b> — как долго; <b>How far</b> — как далеко; <b>How often</b> — как часто; <b>How old</b> — возраст.', en: '<b>How long / far / often / old</b>.' },
        { ru: '<b>Who</b> как подлежащее — без do: <i>Who saw Janet?</i> → <i><b>Who</b> did you say saw Janet?</i>', en: '<b>Who</b> as subject — no do: <i>Who saw Janet?</i>' },
        { ru: 'Вопрос к дополнению с предлогом: <i><b>Whom</b> (Who) did you prepare the conference <b>with</b>?</i> — whom в формальном стиле.', en: 'Object of a preposition: <i>Whom did you prepare it with?</i> (formal).' }
      ] },
    { h: { ru: 'Косвенные вопросы', en: 'Indirect questions' },
      list: [
        { ru: '<i>What does this expression mean?</i> → <i>I\'d like to know what <b>this expression means</b>.</i>', en: '<i>I\'d like to know what <b>this expression means</b>.</i>' },
        { ru: '<i>Did you understand <b>what she was worrying</b> about?</i> <i>I asked the secretary <b>when she could</b> take care of it.</i>', en: 'Statement order after the question word.' },
        { ru: 'Да/нет-вопрос → <b>if / whether</b>: <i>I don\'t know <b>whether</b> he will come or not.</i>', en: 'Yes/no question → <b>if / whether</b>.' }
      ] },
    { h: { ru: 'Разделительные вопросы (question tags)', en: 'Question tags' },
      list: [
        { ru: 'Утверждение + отрицательный хвостик и наоборот; берём <b>тот же вспомогательный глагол</b>: <i>You\'d (= would) have done the same, <b>wouldn\'t you</b>?</i>', en: 'Positive → negative tag, using the <b>same auxiliary</b>: <i>You\'d have done the same, <b>wouldn\'t you</b>?</i>' },
        { ru: 'Нет вспомогательного → do/does/did: <i>He went, <b>didn\'t he</b>?</i> Особые: <i>I am…, <b>aren\'t I</b>? Let\'s…, <b>shall we</b>?</i>', en: 'No auxiliary → do/does/did. Special: <i>aren\'t I?</i>, <i>shall we?</i>' }
      ] },
    { h: { ru: 'have как действие', en: '"have" as an action' },
      text: { ru: 'have breakfast / a shower / a good time — обычный глагол, вопрос через do/did: <i><b>Did you have</b> breakfast?</i> (не <s>Had you breakfast?</s>)', en: 'have breakfast/a shower = action verb → <i><b>Did you have</b> breakfast?</i>' } }
  ],
  memo: { h: { ru: 'Заучить: хвостики', en: 'Learn: tags' }, items: ['You are…, aren\'t you?', 'She can…, can\'t she?', 'He went…, didn\'t he?', 'You\'d (would)…, wouldn\'t you?', 'You\'d (had)…, hadn\'t you?', 'I am…, aren\'t I?', 'Let\'s…, shall we?'] },
  traps: [['Where Julia does study?', 'Where does Julia study?'], ['I\'d like to know what does this mean.', 'I\'d like to know what this means.'], ['How many does it cost?', 'How much does it cost?'], ['Had you breakfast?', 'Did you have breakfast?'], ['Where you are from?', 'Where are you from?']]
},
{
  id: 'mod', icon: '🔑',
  title: { ru: 'Модальные глаголы', en: 'Modal verbs' },
  short: { ru: 'Модальный глагол + <b>глагол без to</b> (must go, can speak). Исключения: have to, ought to, be able to. О прошлом: <b>must / can\'t / should / might + have + V3</b>.',
           en: 'Modal + <b>bare infinitive</b> (must go, can speak). Exceptions: have to, ought to, be able to. For the past: <b>must / can\'t / should / might + have + V3</b>.' },
  sections: [
    { h: { ru: 'Обязанность, запрет, отсутствие необходимости', en: 'Obligation, prohibition, no necessity' },
      table: [['Modal', 'Значение / Meaning', 'Example'],
        ['must / have to', 'нужно, обязан', 'You must eat healthy.'],
        ['mustn\'t', 'НЕЛЬЗЯ (запрет)', 'You mustn\'t smoke here.'],
        ['needn\'t / don\'t have to', 'не нужно (необязательно)', 'We needn\'t hurry.'],
        ['should / ought to', 'следует (совет)', 'You should put on your coat.'],
        ['had better', 'лучше бы (совет/предупреждение)', 'We\'d better go home.']] },
    { h: { ru: 'Способность и просьбы', en: 'Ability and requests' },
      list: [
        { ru: '<b>can / could / be able to</b>: <i>Sandra can <b>speak</b> Spanish. I was so upset that I <b>couldn\'t</b> sleep.</i>', en: '<b>can / could / be able to</b>.' },
        { ru: 'Вежливая просьба: <i><b>Could</b> you speak slower, please?</i>', en: 'Polite request: <i>Could you…?</i>' }
      ] },
    { h: { ru: 'Предположения (дедукция)', en: 'Deduction' },
      table: [['', 'Настоящее / Present', 'Прошлое / Past'], ['уверен, что да', 'must be', 'must have + V3'], ['уверен, что нет', 'can\'t be', 'can\'t have + V3'], ['возможно', 'may / might / could be', 'might / could have + V3']],
      ex: ['She must be at home: the lights are on.', 'She must have forgotten that we had class today.', 'He can\'t have stolen the money — he was with me.'] },
    { h: { ru: 'Упрёк и сожаление о прошлом', en: 'Criticism / regret about the past' },
      text: { ru: '<b>should have + V3</b> — надо было (но не сделали): <i>You <b>should have told</b> me earlier!</i>', en: '<b>should have + V3</b> — it was a good idea but didn\'t happen.' } },
    { h: { ru: 'dare not', en: 'dare not' },
      text: { ru: 'Как модальный: <b>dare not + V</b>: <i>They dare not <b>say</b> it in public.</i>', en: 'As a modal: <b>dare not + V</b>.' } }
  ],
  traps: [['You must to eat healthy.', 'You must eat healthy.'], ['Sandra can speaks Spanish.', 'Sandra can speak Spanish.'], ['We mustn\'t hurry, we have time.', 'We needn\'t hurry, we have time.'], ['She must forget (about yesterday).', 'She must have forgotten.'], ['You should told me.', 'You should have told me.']]
},
{
  id: 'cond', icon: '🔀',
  title: { ru: 'Условные предложения и I wish', en: 'Conditionals & wishes' },
  short: { ru: '1-й тип: If + Present, <b>will</b>. 2-й: If + Past, <b>would</b>. 3-й: If + Past Perfect, <b>would have + V3</b>. В части с if <b>никогда не ставим will/would</b>.',
           en: '1st: If + present, <b>will</b>. 2nd: If + past, <b>would</b>. 3rd: If + past perfect, <b>would have + V3</b>. Never will/would in the if-clause.' },
  sections: [
    { h: { ru: 'Типы условных предложений', en: 'Conditional types' },
      table: [['Тип / Type', 'If-часть', 'Главная часть', 'Example'],
        ['0 — всегда', 'Present', 'Present', 'If you heat ice, it melts.'],
        ['1 — реально', 'Present', 'will + V', 'If it rains, we will cancel the match.'],
        ['2 — нереально сейчас', 'Past (were)', 'would + V', 'If I took the TOEIC tomorrow, I would get 650.'],
        ['3 — нереально в прошлом', 'had + V3', 'would have + V3', 'If I had known, I would have told you!'],
        ['mixed', 'had + V3', 'would + V (сейчас)', 'If I hadn\'t come, we wouldn\'t be together now.']] },
    { h: { ru: 'Важные детали', en: 'Key details' },
      list: [
        { ru: 'Совет: <i>If I <b>were</b> you, I would accept.</i> (were для всех лиц)', en: 'Advice: <i>If I <b>were</b> you…</i>' },
        { ru: '<b>unless</b> = if not: <i>Unless you hurry, you will miss the bus.</i> После unless глагол утвердительный.', en: '<b>unless</b> = if not (positive verb after it).' },
        { ru: '<b>provided / as long as</b> = при условии, что.', en: '<b>provided / as long as</b> = only if.' },
        { ru: '<b>If it hadn\'t been for</b> + сущ. = если бы не…: <i>If it hadn\'t been for the bad weather, I would not have crashed.</i>', en: '<b>If it hadn\'t been for</b> + noun = without…' },
        { ru: 'Вместо would / will в главной части могут быть might, could: <i>…I might not have made such a mistake.</i>', en: 'might/could can replace would.' }
      ] },
    { h: { ru: 'I wish — сожаление', en: 'I wish — regrets' },
      table: [['Сожаление о…', 'Форма', 'Example'], ['настоящем', 'wish + Past Simple', 'I wish I had a better bicycle.'], ['способности', 'wish + could', 'I wish I could speak Chinese.'], ['прошлом', 'wish + Past Perfect', 'I wish you had informed me more fully.']] }
  ],
  traps: [['If I will see him, I\'ll tell him.', 'If I see him, I\'ll tell him.'], ['If I would have known, …', 'If I had known, …'], ['If I was you…', 'If I were you…'], ['I wish I have a car.', 'I wish I had a car.'], ['Unless you don\'t hurry…', 'Unless you hurry…']]
},
{
  id: 'pass', icon: '🔄',
  title: { ru: 'Пассивный залог и have something done', en: 'Passive voice & causative' },
  short: { ru: 'Пассив = <b>be (в нужном времени) + V3</b>. Важно действие, а не тот, кто его делает: <i>The bridge will be built.</i>',
           en: 'Passive = <b>be (in the right tense) + V3</b>. The action matters more than who does it.' },
  sections: [
    { h: { ru: 'Формы пассива', en: 'Passive forms' },
      table: [['Время / Tense', 'Форма', 'Example'],
        ['Present Simple', 'am/is/are + V3', 'This table is made of wood.'],
        ['Present Continuous', 'is being + V3', 'The road is being repaired.'],
        ['Past Simple', 'was/were + V3', 'The suspect was arrested yesterday.'],
        ['Present Perfect', 'has/have been + V3', 'It has been researched in recent years.'],
        ['Future', 'will be + V3', 'The new bridge will be built next year.'],
        ['Modal', 'can/must be + V3', 'Stricter measures must be taken.']] },
    { h: { ru: 'Полезные конструкции', en: 'Useful structures' },
      list: [
        { ru: '<b>be made of</b> (материал): <i>made of wood</i>; <b>be allowed to</b>: <i>Students are not allowed to use phones.</i>', en: '<b>be made of</b>; <b>be allowed to</b>.' },
        { ru: '<b>It is thought / said that…</b> или <b>X is thought to be…</b>: <i>Carbyne is thought to be the most resistant material.</i>', en: '<b>It is said that…</b> / <b>X is thought to be…</b>' },
        { ru: '<b>have / get something done</b> — кто-то делает это для вас: <i>I had my car <b>repaired</b>. Get things <b>done</b>.</i>', en: '<b>have/get something done</b> (causative).' },
        { ru: 'Исполнитель вводится через <b>by</b>: <i>arrested by the police</i>.', en: 'The agent is introduced with <b>by</b>.' }
      ] }
  ],
  memo: { h: { ru: 'Заучить', en: 'Learn' }, items: ['be made of / from', 'be allowed to', 'be supposed to', 'be born', 'have sth done', 'get things done', 'It is said / thought / believed that…'] },
  traps: [['The suspect arrested yesterday.', 'The suspect was arrested yesterday.'], ['English is speaking here.', 'English is spoken here.'], ['I had my car repair.', 'I had my car repaired.'], ['This table is making of wood.', 'This table is made of wood.']]
},
{
  id: 'verb', icon: '🧩',
  title: { ru: 'Глагольные конструкции: -ing, to + V, V', en: 'Verb patterns: -ing, to + V, bare infinitive' },
  short: { ru: 'После одних глаголов идёт <b>-ing</b> (enjoy, avoid, suggest), после других — <b>to + V</b> (decide, want). После <b>предлога</b> — всегда -ing, даже после to в <b>look forward to / be used to</b>.',
           en: 'Some verbs take <b>-ing</b> (enjoy, avoid, suggest), others <b>to + V</b> (decide, want). After a <b>preposition</b> always -ing — even "to" in <b>look forward to / be used to</b>.' },
  sections: [
    { h: { ru: 'Глагол + объект + to + V', en: 'Verb + object + to + V' },
      text: { ru: '<b>want / ask / tell / expect / allow / advise / remind somebody to do</b>: <i>Our manager wants <b>you to come</b>. The teacher asked us <b>to study</b>.</i> (не <s>wants that you come</s>)', en: '<b>want/ask/tell/expect/allow sb to do</b>: <i>wants <b>you to come</b></i>.' } },
    { h: { ru: 'Глагол + объект + V (без to)', en: 'Verb + object + bare infinitive' },
      text: { ru: '<b>let, make</b> (и модальные): <i>She lets me <b>do</b> it. They made him <b>wait</b>.</i>', en: '<b>let, make</b>: <i>She lets me <b>do</b> it.</i>' } },
    { h: { ru: 'to — предлог: дальше -ing', en: '"to" as a preposition → -ing' },
      list: [
        { ru: '<b>look forward to + -ing</b>: <i>I\'m looking forward to <b>meeting</b> him.</i>', en: '<b>look forward to + -ing</b>.' },
        { ru: '<b>be / get used to + -ing</b> (= привык): <i>I\'m used to <b>waking up</b> early.</i>', en: '<b>be/get used to + -ing</b> (= accustomed).' },
        { ru: 'Сравните: <b>used to + V</b> (раньше): <i>My dad used to <b>tell</b> stories.</i>', en: 'Compare: <b>used to + V</b> (past habit).' }
      ] },
    { h: { ru: 'Глаголы, меняющие смысл', en: 'Verbs that change meaning' },
      table: [['', '+ -ing', '+ to + V'],
        ['stop', 'перестать: stop smoking', 'остановиться, чтобы: stopped to have a coffee'],
        ['remember', 'помнить, что делал: remember meeting him', 'не забыть сделать: remember to call'],
        ['forget', 'забыть, что делал', 'забыть сделать: don\'t forget to lock'],
        ['try', 'попробовать (эксперимент)', 'стараться, пытаться']] },
    { h: { ru: 'Сослагательное наклонение', en: 'Subjunctive' },
      text: { ru: 'После <b>insist / suggest / recommend / demand that</b> — глагол в начальной форме для всех лиц: <i>The teacher insists that the children <b>obey</b> the rules.</i>', en: 'After <b>insist/suggest/demand that</b> use the base form: <i>…that the children <b>obey</b>.</i>' } },
    { h: { ru: 'Отрицание инфинитива', en: 'Negative infinitive' },
      text: { ru: '<b>not to + V</b>: <i>Promise <b>not to say</b> anything.</i>', en: '<b>not to + V</b>: <i>Promise <b>not to say</b> anything.</i>' } }
  ],
  memo: { h: { ru: 'Заучить: списки глаголов', en: 'Learn: verb lists' }, table: [
    ['+ -ing', 'enjoy, avoid, finish, mind, suggest, consider, keep, practise, deny, risk, admit, miss, can\'t stand, it\'s worth, look forward to, be used to'],
    ['+ to + V', 'want, decide, hope, plan, promise, agree, refuse, manage, afford, learn, offer, expect, seem, would like, need, love/like (also -ing)'],
    ['+ obj + to + V', 'want, ask, tell, expect, allow, advise, encourage, invite, remind, teach, help'],
    ['+ V (no to)', 'let, make, can, could, must, should, will, would, had better, would rather, dare not']] },
  traps: [['I look forward to meet you.', 'I look forward to meeting you.'], ['She avoided to answer.', 'She avoided answering.'], ['He wants that you come.', 'He wants you to come.'], ['Let me to do it.', 'Let me do it.'], ['She suggested to take a break.', 'She suggested taking a break.'], ['I\'m used to wake up early.', 'I\'m used to waking up early.']]
},
{
  id: 'pron', icon: '👥',
  title: { ru: 'Местоимения и количественные слова', en: 'Pronouns, determiners & quantifiers' },
  short: { ru: '<b>my/our/their + существительное</b>, но <b>mine/ours/theirs</b> — без существительного. <b>much/little</b> — неисчисляемые, <b>many/few</b> — исчисляемые. В отрицании — <b>any</b>, без двойного отрицания.',
           en: '<b>my/our/their + noun</b>, but <b>mine/ours/theirs</b> alone. <b>much/little</b> — uncountable, <b>many/few</b> — countable. Negatives take <b>any</b>; no double negatives.' },
  sections: [
    { h: { ru: 'Таблица местоимений', en: 'Pronoun table' },
      table: [['Subject', 'Object', 'Possessive adj.', 'Possessive pron.', 'Reflexive'],
        ['I', 'me', 'my', 'mine', 'myself'], ['you', 'you', 'your', 'yours', 'yourself'], ['he', 'him', 'his', 'his', 'himself'], ['she', 'her', 'her', 'hers', 'herself'],
        ['it', 'it', 'its', '—', 'itself'], ['we', 'us', 'our', 'ours', 'ourselves'], ['they', 'them', 'their', 'theirs', 'themselves']] },
    { h: { ru: 'Притяжательные и возвратные', en: 'Possessives and reflexives' },
      list: [
        { ru: '<i>Is this pen <b>yours</b>? — Yes, it\'s <b>mine</b>.</i> <i>He probably took <b>ours</b>.</i> <i>He wasn\'t biologically <b>theirs</b>.</i>', en: 'Possessive pronouns stand alone.' },
        { ru: 'Возвратные: <i>We didn\'t want to eat it all <b>by ourselves</b>. They enjoyed <b>themselves</b>.</i>', en: 'Reflexives: <i>by ourselves</i>, <i>enjoy themselves</i>.' },
        { ru: '<b>their</b> (их) ≠ <b>there</b> (там) ≠ <b>they\'re</b> (they are).', en: '<b>their</b> ≠ <b>there</b> ≠ <b>they\'re</b>.' }
      ] },
    { h: { ru: 'some / any / no', en: 'some / any / no' },
      list: [
        { ru: '<b>some</b> — утверждение; <b>any</b> — вопрос и отрицание: <i>There isn\'t <b>any</b> milk.</i>', en: '<b>some</b> — positive; <b>any</b> — questions/negatives.' },
        { ru: 'Только одно отрицание: <i>He didn\'t mention <b>anything</b></i> = <i>He mentioned <b>nothing</b></i>. (не <s>didn\'t mention nothing</s>)', en: 'One negative only.' },
        { ru: '<b>No one / Nobody</b> + утвердительный глагол: <i>No one ever had a better opportunity.</i>', en: '<b>No one</b> + positive verb.' }
      ] },
    { h: { ru: 'Количество', en: 'Quantity' },
      table: [['', 'Исчисляемые / Countable', 'Неисчисляемые / Uncountable'], ['много', 'many (friends)', 'much (money)'], ['мало (плохо)', 'few', 'little'], ['немного (хорошо)', 'a few', 'a little'], ['оба типа', 'a lot of / lots of / some / any', '']] },
    { h: { ru: 'Из двух — neither / either', en: 'Two items — neither / either' },
      text: { ru: '<b>neither</b> (ни один из двух), <b>either</b> (любой из двух), <b>both</b> (оба); для трёх и более — <b>none</b>: <i><b>Neither</b> of the two candidates was elected.</i>', en: '<b>neither / either / both</b> for two; <b>none</b> for three or more.' } },
    { h: { ru: 'this / that', en: 'this / that' },
      text: { ru: '<b>that</b> — о том, что только что сказали или далеко: <i>What\'s <b>that</b>? I couldn\'t hear you.</i>', en: '<b>that</b> — something just said or far away.' } }
  ],
  traps: [['Is this pen your?', 'Is this pen yours?'], ['He has much friends.', 'He has many friends.'], ['I didn\'t say nothing.', 'I didn\'t say anything.'], ['None of the two…', 'Neither of the two…'], ['There house is big.', 'Their house is big.']]
},
{
  id: 'rel', icon: '🔗',
  title: { ru: 'Относительные местоимения (who, which, whose…)', en: 'Relative clauses (who, which, whose…)' },
  short: { ru: '<b>who</b> — люди, <b>which</b> — вещи, <b>that</b> — и то и другое (только без запятых), <b>whose</b> — чей, <b>whom</b> — человек-дополнение / после предлога, <b>where</b> — место.',
           en: '<b>who</b> — people, <b>which</b> — things, <b>that</b> — both (no commas only), <b>whose</b> — possession, <b>whom</b> — person as object / after a preposition, <b>where</b> — place.' },
  sections: [
    { h: { ru: 'Таблица', en: 'Table' },
      table: [['Pronoun', 'Для чего / For', 'Example'],
        ['who', 'люди (подлежащее)', 'Judith, who is in charge of supplies, …'],
        ['which', 'вещи, животные', 'The file which you deleted was crucial.'],
        ['that', 'люди и вещи (без запятых)', 'The cheese that was in the fridge…'],
        ['whose', 'чей (принадлежность)', 'The woman whose car was stolen…'],
        ['whom', 'человек-дополнение; после предлога', 'Bill\'s lawyer, whom you met, …'],
        ['where', 'место', 'the town where I was born'],
        ['Ø', 'дополнение без запятых', 'The employee (that) I fired…']] },
    { h: { ru: 'С запятыми и без', en: 'Defining vs non-defining' },
      list: [
        { ru: '<b>Без запятых</b> (определяющее) — информация нужна, чтобы понять, о ком речь. Можно <b>that</b>; если местоимение — дополнение, его можно <b>опустить</b>: <i>The employee <b>Ø</b> I fired is suing us.</i>', en: '<b>Defining</b> (no commas): "that" allowed; object pronoun can be omitted.' },
        { ru: '<b>С запятыми</b> (дополнительная информация) — <b>нельзя that</b> и нельзя опускать: <i>Paris, <b>which</b> I visited last year, … / Judith, <b>who</b> is in charge…</i>', en: '<b>Non-defining</b> (commas): no "that", no omission.' },
        { ru: 'Подлежащее придаточного опускать нельзя: <i>Where is the cheese <b>which</b> was in the fridge?</i>', en: 'A subject pronoun can never be omitted.' }
      ] },
    { h: { ru: 'После предлога', en: 'After prepositions' },
      text: { ru: 'После предлога о людях — <b>whom</b>, о вещах — <b>which</b>: <i>many spectators, most of <b>whom</b> were in their teens</i>; <i>the house in <b>which</b> they lived</i>.', en: 'After a preposition: <b>whom</b> (people), <b>which</b> (things).' } }
  ],
  traps: [['The file who you deleted…', 'The file which you deleted…'], ['Judith, that is in charge, …', 'Judith, who is in charge, …'], ['most of who were teens', 'most of whom were teens'], ['The woman who\'s car was stolen', 'The woman whose car was stolen'], ['the town which I was born', 'the town where I was born']]
},
{
  id: 'comp', icon: '📊',
  title: { ru: 'Сравнение, степень и наречия (good / well, too, such)', en: 'Comparison, degree & adverbs (good/well, too, such)' },
  short: { ru: 'Короткие прилагательные: <b>-er / the -est</b>; длинные: <b>more / the most</b>. Никогда «more easier». Равенство: <b>as … as</b>. <b>too</b> — слишком, <b>such a</b> + прил. + сущ.',
           en: 'Short adjectives: <b>-er / the -est</b>; long: <b>more / the most</b>. Never "more easier". Equality: <b>as … as</b>. <b>too</b> = excessive; <b>such a</b> + adj + noun.' },
  sections: [
    { h: { ru: 'Образование', en: 'Form' },
      table: [['', 'Comparative', 'Superlative'], ['short: tall', 'taller', 'the tallest'], ['-y: easy, tidy', 'easier, tidier', 'the easiest, the tidiest'], ['CVC: big', 'bigger', 'the biggest'], ['long: helpful, expensive', 'more helpful', 'the most expensive'],
        ['good / well', 'better', 'the best'], ['bad / badly', 'worse', 'the worst'], ['far', 'further / farther', 'the furthest'], ['little', 'less', 'the least'], ['much / many', 'more', 'the most']] },
    { h: { ru: 'Конструкции', en: 'Structures' },
      list: [
        { ru: 'Усиление сравнительной: <b>a lot / much / far + comparative</b>: <i>a lot easier, far more vivid</i>.', en: '<b>a lot / much / far</b> + comparative.' },
        { ru: '<b>one of the + превосходная + мн. ч.</b>: <i>one of the tallest waterfalls</i>; <b>by far the</b> tidiest.', en: '<b>one of the + superlative + plural</b>; <b>by far the…</b>' },
        { ru: 'Равенство: <b>as + adj + as</b>; отрицание: <b>not as/so … as</b>; <i>twice as strong as</i>.', en: '<b>as … as</b>, <b>not as … as</b>, <b>twice as … as</b>.' },
        { ru: '<b>less / the least</b> — «менее / наименее»: <i>less expensive</i>.', en: '<b>less / the least</b>.' },
        { ru: '<b>The more…, the better…</b> — чем больше, тем лучше.', en: '<b>The more…, the better…</b>' },
        { ru: 'Сравнение глаголов: <b>more than</b>: <i>They dislike the new CEO more than the former one.</i>', en: '<b>more than</b> with verbs.' }
      ] },
    { h: { ru: 'Прилагательное или наречие', en: 'Adjective or adverb' },
      list: [
        { ru: 'Прилагательное описывает существительное / после be: <i>He is <b>good</b> with numbers.</i> Наречие описывает глагол: <i>He speaks Spanish <b>well</b>.</i>', en: 'Adjective after be / before nouns; adverb modifies verbs.' },
        { ru: 'fluent → fluently, careful → carefully, good → <b>well</b>, fast → fast, hard → <b>hard</b> (<b>hardly</b> = едва).', en: 'good → well; hard → hard (hardly = almost not).' },
        { ru: '<i>Jenny dresses <b>as well as</b> Joey</i> — так же хорошо, как.', en: '<i>as well as</i> = equally well.' }
      ] },
    { h: { ru: 'Степень: too, so, such, quite, enough', en: 'Degree: too, so, such, quite, enough' },
      table: [['Word', 'Pattern', 'Example'], ['too', 'too + adj (слишком)', 'It\'s too expensive!'], ['so', 'so + adj', 'I am so hungry.'], ['such', 'such (a) + adj + noun', 'Max is such a nice guy. They are such good friends.'], ['quite', 'quite + adj (довольно)', 'It\'s quite big.'], ['enough', 'adj + enough / enough + noun', 'old enough, enough money']] }
  ],
  traps: [['more easier', 'easier'], ['the most tidiest', 'the tidiest'], ['He speaks English very good.', 'He speaks English very well.'], ['Max is so nice guy.', 'Max is such a nice guy.'], ['She is as tall than her sister.', 'She is as tall as her sister.'], ['the world\'s more resistant material', 'the world\'s most resistant material']]
},
{
  id: 'link', icon: '🪢',
  title: { ru: 'Связки и союзы', en: 'Linking words & conjunctions' },
  short: { ru: '<b>although / even though / though + предложение</b>; <b>despite / in spite of + существительное или -ing</b>; <b>however / nevertheless</b> — между предложениями (с запятой). <b>unless</b> = if not.',
           en: '<b>although/even though + clause</b>; <b>despite/in spite of + noun/-ing</b>; <b>however/nevertheless</b> link sentences. <b>unless</b> = if not.' },
  sections: [
    { h: { ru: 'Группы связок', en: 'Groups' },
      table: [['Функция / Function', 'Слова / Words'],
        ['Контраст / contrast', 'although, even though, though, despite, in spite of, however, nevertheless, whereas, while, yet'],
        ['Условие / condition', 'if, unless, provided (that), as long as, whether … or not'],
        ['Альтернатива', 'rather than, instead of'],
        ['Добавление / addition', 'and, as well as, moreover, furthermore, in addition (to)'],
        ['Причина / reason', 'because, since, as, because of + noun, due to + noun'],
        ['Результат / result', 'so, therefore, hence, consequently, as a result'],
        ['Пример / example', 'for instance, for example, such as'],
        ['Цель / purpose', 'in order to, so as to, so that']] },
    { h: { ru: 'Контраст — грамматика', en: 'Contrast — grammar' },
      list: [
        { ru: '<b>Although / Even though</b> + подлежащее + глагол: <i>He can\'t ski, <b>although</b> he\'s been trying for years.</i>', en: '<b>although</b> + clause.' },
        { ru: '<b>Despite / In spite of</b> + существительное / -ing: <i><b>Despite</b> the bad weather…</i>', en: '<b>despite</b> + noun / -ing.' },
        { ru: '<b>However / Nevertheless</b> — в начале нового предложения или после «;», с запятой: <i>He was tired; <b>nevertheless</b>, he kept working.</i>', en: '<b>however / nevertheless</b> + comma, between sentences.' },
        { ru: 'Инверсия с though: <i><b>Interesting though</b> it may be, I am sick of it.</i>', en: 'Inversion: <i>Interesting though it may be…</i>' },
        { ru: 'Не используем although и but вместе в одном предложении.', en: 'Never "although … but".' }
      ] },
    { h: { ru: 'Другие важные', en: 'Other key items' },
      list: [
        { ru: '<b>rather than</b> — вместо того чтобы: <i>one vegan dish, rather than having to use meat</i>.', en: '<b>rather than</b> = instead of.' },
        { ru: '<b>whether … or not</b>: <i>Whether you like it or not, …</i>', en: '<b>whether … or not</b>.' },
        { ru: '<b>as expected</b> — как и ожидалось; <b>for instance</b> — например.', en: '<b>as expected</b>; <b>for instance</b>.' },
        { ru: '<b>since</b> = так как (причина) и «с» (время).', en: '<b>since</b> = because / from (time).' }
      ] }
  ],
  memo: { h: { ru: 'Заучить', en: 'Learn' }, items: ['although + clause', 'despite + noun/-ing', 'however, …', 'nevertheless, …', 'unless = if not', 'whether … or not', 'rather than', 'as well as', 'for instance', 'hence / therefore'] },
  traps: [['Despite it rained, we went out.', 'Although it rained, we went out. / Despite the rain, …'], ['Although he was tired, but he worked.', 'Although he was tired, he worked.'], ['He was tired, however he worked.', 'He was tired. However, he worked.'], ['Unless you don\'t hurry…', 'Unless you hurry…']]
},
{
  id: 'prep', icon: '📍',
  title: { ru: 'Предлоги', en: 'Prepositions' },
  short: { ru: 'Время: <b>at</b> + часы, <b>on</b> + дни и даты, <b>in</b> + месяцы, годы, части дня. Место: <b>in</b> + город/страна, <b>at</b> + точка (at home, at work).',
           en: 'Time: <b>at</b> + clock times, <b>on</b> + days/dates, <b>in</b> + months/years/parts of the day. Place: <b>in</b> + city/country, <b>at</b> + point (at home, at work).' },
  sections: [
    { h: { ru: 'Время', en: 'Time' },
      table: [['at', 'on', 'in', 'Ø (без предлога)'], ['at 10, at 7am, at night, at noon, at the weekend', 'on Monday, on Thursday, on 1 April, on my birthday', 'in May, in 2023, in summer, in the morning, in recent years', 'last week, next Monday, this year, every day, tomorrow, yesterday']] },
    { h: { ru: 'Место', en: 'Place' },
      table: [['in', 'at', 'on'], ['in Los Angeles, in France, in the room, in the fridge', 'at home, at work, at school, at the station, at a conference', 'on the table, on the bus, on the wall, on the first floor']] },
    { h: { ru: 'Прилагательное + предлог', en: 'Adjective + preposition' },
      text: { ru: 'interested <b>in</b>, good <b>at</b> / good <b>with</b>, afraid <b>of</b>, proud <b>of</b>, tired <b>of</b>, responsible <b>for</b>, famous <b>for</b>, different <b>from</b>, keen <b>on</b>, married <b>to</b>, made <b>of</b>, similar <b>to</b>.', en: 'interested in, good at/with, afraid of, proud of, tired of, responsible for, famous for, different from, keen on, married to, made of, similar to.' } },
    { h: { ru: 'Глагол + предлог', en: 'Verb + preposition' },
      text: { ru: 'depend <b>on</b>, listen <b>to</b>, wait <b>for</b>, belong <b>to</b>, apply <b>for</b>, deal <b>with</b>, focus <b>on</b>, insist <b>on</b>, blame sth <b>on</b> sb, spend money <b>on</b>, look forward <b>to</b>, protect <b>from</b>.', en: 'depend on, listen to, wait for, belong to, apply for, deal with, focus on, insist on, blame sth on sb, spend on, look forward to.' } }
  ],
  traps: [['I live at Los Angeles.', 'I live in Los Angeles.'], ['The appointment is on 10.', 'The appointment is at 10.'], ['I\'m interested on economics.', 'I\'m interested in economics.'], ['See you on next Monday.', 'See you next Monday.'], ['I wait you.', 'I wait for you.']]
},
{
  id: 'voc', icon: '📚',
  title: { ru: 'Лексика: сочетания, фразовые глаголы, похожие слова', en: 'Vocabulary: collocations, phrasal verbs, confusing words' },
  short: { ru: 'Устойчивые сочетания и фразовые глаголы нужно <b>заучивать</b>: make a decision, do a favour, spend money, it took me 2 hours, lend ≠ borrow, rise ≠ raise.',
           en: 'Collocations and phrasal verbs must be <b>learned by heart</b>: make a decision, do a favour, spend money, it took me 2 hours, lend ≠ borrow, rise ≠ raise.' },
  sections: [
    { h: { ru: 'make или do', en: 'make or do' },
      table: [['make', 'do'], ['a decision, a mistake, money, a plan, progress, an effort, a phone call, friends, noise', 'a favour, homework, business, your best, the shopping, a job, an exercise, research, damage']] },
    { h: { ru: 'Похожие глаголы', en: 'Confusing verbs' },
      table: [['Пара / Pair', 'Разница / Difference', 'Example'],
        ['lend / borrow', 'дать в долг / взять в долг', 'Could you lend me your book? Can I borrow your pen?'],
        ['rise / raise', 'подниматься (без объекта) / поднимать что-то', 'Prices have risen. They raised taxes.'],
        ['spend / take', 'тратить (человек) / занимать (время)', 'He spends money on clothes. It took me two hours.'],
        ['say / tell', 'сказать что / сказать кому', 'He said that… / He told me that…'],
        ['speak / talk', 'speak a language / talk to someone', 'Sandra can speak Spanish.'],
        ['wear / put on', 'носить / надеть', 'Put on your coat.'],
        ['win / earn', 'выиграть / заработать', 'She earns less money than him.']] },
    { h: { ru: 'Похожие слова', en: 'Confusing words' },
      list: [
        { ru: '<b>foreign</b> (иностранный, прил.) / <b>foreigner</b> (иностранец) / <b>abroad</b> (за границей, нареч.) / <b>stranger</b> (незнакомец).', en: '<b>foreign</b> (adj) / <b>foreigner</b> / <b>abroad</b> (adv) / <b>stranger</b>.' },
        { ru: '<b>compulsory</b> (обязательный) ≠ <b>optional</b> (по выбору).', en: '<b>compulsory</b> ≠ <b>optional</b>.' },
        { ru: '<b>-ed</b> = что чувствую, <b>-ing</b> = какой предмет: I\'m <b>tired / bored</b>; the lesson is <b>tiring / boring</b>.', en: '<b>-ed</b> = feeling; <b>-ing</b> = cause: bored / boring.' },
        { ru: 'Возраст: <b>I am 30 (years old)</b>, не <s>I have 30 years</s>.', en: 'Age: <b>I am 30 (years old)</b>.' },
        { ru: '<b>landscape</b> (пейзаж), <b>sight</b> (зрелище), <b>view</b> (вид из окна/с горы).', en: '<b>landscape</b>, <b>sight</b>, <b>view</b>.' },
        { ru: 'Сочетания: exceed <b>expectations</b>, a serious <b>threat to</b>, the last time, the <b>United Kingdom</b>.', en: 'Collocations: exceed expectations, a threat to, the United Kingdom.' }
      ] }
  ],
  memo: { h: { ru: 'Заучить: фразовые глаголы', en: 'Learn: phrasal verbs' }, table: [
    ['put on / take off', 'надеть / снять'], ['turn up / turn down', 'прибавить / убавить (звук)'], ['call off', 'отменить'], ['look after', 'присматривать'], ['look for', 'искать'],
    ['look up', 'посмотреть (в словаре)'], ['look into', 'расследовать, изучить'], ['look forward to', 'ждать с нетерпением'], ['give up', 'бросить (привычку)'], ['give in', 'сдаться, уступить'],
    ['put up with', 'терпеть'], ['find out', 'узнать'], ['carry on', 'продолжать'], ['set off', 'отправиться в путь'], ['get up', 'вставать'],
    ['make redundant', 'сократить (уволить)'], ['take part in', 'участвовать'], ['deal with', 'справляться с']] },
  traps: [['Could you borrow me your book?', 'Could you lend me your book?'], ['It spent me two hours.', 'It took me two hours.'], ['Prices have raised.', 'Prices have risen.'], ['Can you make me a favour?', 'Can you do me a favour?'], ['I am boring in this lesson.', 'I am bored in this lesson.'], ['I have 30 years.', 'I am 30 years old.']]
}
];
