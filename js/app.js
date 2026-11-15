(() => {
'use strict';

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
};
const shuffle = a => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const range = n => Array.from({ length: n }, (_, i) => i);
const LETTERS = 'abcdefgh';
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;

const GRAMMAR = window.GRAMMAR, FILES = window.FILES, VOCAB = window.VOCAB;

/* ---------- i18n ---------- */
const T = {
  ru: {
    brand: 'English Prep', nav_home: 'Главная', nav_exam: 'Контроль', nav_grammar: 'Грамматика', nav_files: 'Тексты',
    nav_vocab: 'Лексика', nav_oral: 'Устный', nav_mock: 'Пробный тест',
    hero_title: 'Подготовка к контролю по <span>английскому</span>',
    hero_lead: 'Все задания курса в интерактивном виде: грамматические тесты, тексты на понимание, диктанты с озвучкой, лексика и подготовка к устной презентации.',
    start_grammar: 'Начать с грамматики', how_exam: 'Как проходит контроль',
    st_tests: 'тестов пройдено', st_words: 'слов выучено', st_mock: 'лучший пробный',
    sections: 'Разделы',
    c_exam: 'Протокол контроля', c_exam_d: 'Когда, как и что сдаём: письменный тест и устная презентация.',
    c_grammar: 'Грамматика (QCM)', c_grammar_d: '7 тестов, 120 вопросов с объяснениями.',
    c_files: 'Понимание текста', c_files_d: 'File 1 и File 2: вопросы, пропуски, диктанты с озвучкой.',
    c_vocab: 'Лексика', c_vocab_d: 'Слова по темам: список, карточки, тест, сопоставление.',
    c_oral: 'Устная презентация', c_oral_d: 'План, фразы, критерии B2 и таймер на 5 минут.',
    c_mock: 'Пробный экзамен', c_mock_d: 'Случайные вопросы на время — как на настоящем QCM.',
    exam_title: 'Как проходит контроль', exam_sub: 'L1 Économie / Gestion / CUPGE — семестр 1',
    eval1: 'Оценивание 1 — Сессия 1 (CC)', eval1_kind: 'Письменно (коэф. 1)',
    eval2: 'Оценивание 2 — Сессия 1 (CC)', eval2_kind: 'Устно (коэф. 1)',
    when: 'Когда', how: 'Как', what: 'Что', rules: 'Правила', criteria: 'Критерии',
    e1_when: 'TD 8', e1_how: 'очно', e1_what: 'QCM по грамматике + понимание письменного / устного текста (1 ч 50 мин)',
    e2_when: 'на TD 9 и TD 10', e2_how: 'индивидуальный устный ответ перед группой',
    e2_what: 'представить (на английском) очень свежую тему из новостей: экономика, политика, общество, культура (начиная с июля 2026)',
    e2_r1: '5 минут выступления', e2_r2: 'это не «озвученный текст»: не читать с листа, а сделать PowerPoint — план, визуальные документы и/или графики, карты для комментария',
    e2_r3: 'носитель: только USB-флешка — ОБЯЗАТЕЛЬНО', e2_r4: 'предварительное согласование темы с преподавателем (TD 2)',
    e2_crit: 'шкала уровня B2 CECRL — устная речь',
    course: 'Курс', course_txt: 'очно или дистанционно (20 ч TD) на сайте perso.univ-lemans.fr/~edauby (вводить в адресную строку, а не в поисковик). Понимание письменных и/или устных текстов, повторение грамматики (QCM). Нужно: компьютер или смартфон + наушники, плеер VLC.',
    sem2: 'Семестр 2', sem2_txt: 'Опция TOEIC — отобранные студенты уровня B1/B2.',
    abs: 'Пропуски', abs_txt: 'ABI (неуважительный) vs ABJ (уважительный). Университет ≠ лицей. Пропуск → Сессия 2.',
    mdl: 'Maison des Langues', mdl_txt: 'Здание C.I.E.L (1 этаж): книги, CD, DVD, мастерские и тьюторинг.',
    prep_for: 'Как готовиться на этом сайте',
    prep1: 'Оценивание 1 → грамматика, тексты (File 1, File 2) и пробный экзамен.',
    prep2: 'Оценивание 2 → раздел «Устный»: план, фразы, критерии B2 и таймер.',
    grammar_title: 'Грамматика — QCM', grammar_sub: 'Выберите вариант — сразу увидите правильный ответ и объяснение.',
    questions: 'вопросов', best: 'лучший', not_started: 'не начат', start: 'Начать', continue: 'Продолжить',
    answered: 'Отвечено', reset: 'Сбросить', result: 'Результат', retry: 'Ещё раз', next_test: 'Следующий тест', all_tests: 'Все тесты',
    great: 'Отлично! Вы готовы.', good: 'Хорошо! Повторите ошибки.', weak: 'Нужно ещё потренироваться — прочитайте объяснения.',
    correct: 'Верно!', wrong: 'Неверно.', answer_is: 'Правильный ответ',
    files_title: 'Понимание текста', files_sub: 'Задания из рабочих листов. Тексты для диктанта озвучиваются браузером.',
    check: 'Проверить', show_answer: 'Показать ответ', hide_answer: 'Скрыть ответ', your_answer: 'Ваш ответ…',
    model: 'Образец ответа', key_ideas: 'Ключевые слова', show_answers: 'Показать ответы',
    true_: 'True (верно)', false_: 'False (неверно)', select_all: 'Выберите все правильные варианты, затем нажмите «Проверить».',
    match_hint: 'Нажмите на слово, затем на его значение.', match_done: 'Все пары найдены!', mistakes: 'ошибок', again: 'Заново',
    listen: 'Слушать всё', slow: 'Медленно', stop: 'Стоп', sentence: 'Предложение', prev: 'Назад', next: 'Далее',
    type_dict: 'Напишите то, что услышали…', show_text: 'Показать текст', hide_text: 'Скрыть текст',
    words_ok: 'слов верно', no_tts: 'Ваш браузер не поддерживает озвучку текста.',
    vocab_title: 'Лексика', vocab_sub: 'Темы из курса и полезные слова для экзамена и презентации.', search: 'Поиск слова (EN или RU)…',
    words: 'слов', known: 'выучено', t_list: 'Список', t_cards: 'Карточки', t_quiz: 'Тест', t_match: 'Пары',
    flip: 'Перевернуть', i_know: 'Знаю', repeat: 'Повторить', tap_flip: 'нажмите, чтобы перевернуть',
    dir: 'Направление', shuffle: 'Перемешать', of: 'из', no_results: 'Ничего не найдено.',
    quiz_q: 'Выберите перевод', quiz_end: 'Тест завершён', new_quiz: 'Новый тест', new_pairs: 'Новые пары',
    oral_title: 'Устная презентация', oral_sub: '5 минут, на английском, свежая тема из новостей, PowerPoint на USB-флешке.',
    timer: 'Таймер выступления', t_start: 'Старт', t_pause: 'Пауза', t_reset: 'Сброс', time_up: 'Время вышло!',
    plan: 'Структура презентации', criteria_b2: 'Самопроверка по критериям B2', phrases: 'Полезные фразы', all_phrases: 'Все фразы →',
    topics: 'Идеи тем', tips: 'Советы',
    mock_title: 'Пробный экзамен', mock_sub: 'Случайные вопросы из всех 7 тестов. Ответы и объяснения — только в конце.',
    mock_q: 'вопросов', mock_min: 'мин', mock_start: 'Начать экзамен', finish: 'Завершить', review: 'Разбор ответов',
    time_left: 'Осталось', unanswered: 'без ответа', mock_confirm: 'Завершить экзамен? Есть вопросы без ответа.',
    footer: 'Тренажёр составлен по материалам курса (рабочие листы, QCM 1–7). Прогресс хранится только в вашем браузере.',
    theme: 'Сменить тему', lang_label: 'Язык интерфейса', saved: 'Сохранено', back: '← Назад',
    audio_blocked: 'Браузер заблокировал звук — нажмите кнопку ещё раз.', audio_error: 'Не удалось воспроизвести. Проверьте звук и наличие английского голоса в системе.',
    audio_title: 'Аудио и текст', audio_on: 'Включить аудио', audio_off: 'Выключить аудио', speed: 'Скорость',
    play_from: 'Нажмите, чтобы слушать с этого предложения',
    transcript_note: 'Текстовая версия составлена по материалам рабочего листа; озвучивает браузер (английский голос). Нажмите на предложение, чтобы слушать с него.',
    th_auto: 'Тема: как в системе', th_light: 'Тема: светлая', th_dark: 'Тема: тёмная'
  },
  en: {
    brand: 'English Prep', nav_home: 'Home', nav_exam: 'Exam', nav_grammar: 'Grammar', nav_files: 'Texts',
    nav_vocab: 'Vocabulary', nav_oral: 'Oral', nav_mock: 'Mock test',
    hero_title: 'Get ready for your <span>English</span> assessment',
    hero_lead: 'Every course exercise, made interactive: grammar MCQs, comprehension files, spoken dictations, vocabulary and oral presentation prep.',
    start_grammar: 'Start with grammar', how_exam: 'How the exam works',
    st_tests: 'tests completed', st_words: 'words learned', st_mock: 'best mock',
    sections: 'Sections',
    c_exam: 'Exam protocol', c_exam_d: 'When, how and what: written test and oral presentation.',
    c_grammar: 'Grammar (MCQ)', c_grammar_d: '7 tests, 120 questions with explanations.',
    c_files: 'Comprehension', c_files_d: 'File 1 and File 2: questions, gap fills, spoken dictations.',
    c_vocab: 'Vocabulary', c_vocab_d: 'Words by topic: list, flashcards, quiz, matching.',
    c_oral: 'Oral presentation', c_oral_d: 'Structure, phrases, B2 criteria and a 5-minute timer.',
    c_mock: 'Mock exam', c_mock_d: 'Random timed questions, just like the real MCQ.',
    exam_title: 'How the assessment works', exam_sub: 'L1 Economics / Management / CUPGE — semester 1',
    eval1: 'Assessment 1 — Session 1 (CC)', eval1_kind: 'Written (coef. 1)',
    eval2: 'Assessment 2 — Session 1 (CC)', eval2_kind: 'Oral (coef. 1)',
    when: 'When', how: 'How', what: 'What', rules: 'Rules', criteria: 'Criteria',
    e1_when: 'TD 8', e1_how: 'in person', e1_what: 'Grammar MCQ + written / oral comprehension (1 h 50)',
    e2_when: 'during TD 9 and TD 10', e2_how: 'individual oral in front of the class',
    e2_what: 'present (in English) a very recent news topic: economic, political, social or cultural (from July 2026 on)',
    e2_r1: '5 minutes of speaking', e2_r2: 'not a written text read aloud: do not read from paper, make a PowerPoint — outline, visual documents and/or graphs, maps to comment on',
    e2_r3: 'support: USB key only — MANDATORY', e2_r4: 'topic validated beforehand by the teacher (TD 2)',
    e2_crit: 'CEFR B2 level grid — spoken production',
    course: 'Course', course_txt: 'in person or remote (20 h TD) at perso.univ-lemans.fr/~edauby (type it in the address bar, not a search engine). Written and/or oral comprehension, grammar revision (MCQ). Equipment: computer or smartphone + headphones, VLC media player.',
    sem2: 'Semester 2', sem2_txt: 'TOEIC option — selected students, level B1/B2.',
    abs: 'Absences', abs_txt: 'ABI (unjustified) vs ABJ (justified). University ≠ high school. Absence → Session 2.',
    mdl: 'Maison des Langues', mdl_txt: 'C.I.E.L building (1st floor): books, CDs, DVDs, remediation workshops and tutoring.',
    prep_for: 'How to prepare here',
    prep1: 'Assessment 1 → grammar, comprehension files (File 1, File 2) and the mock exam.',
    prep2: 'Assessment 2 → the Oral section: structure, phrases, B2 criteria and timer.',
    grammar_title: 'Grammar — MCQ', grammar_sub: 'Pick an option to instantly see the right answer and an explanation.',
    questions: 'questions', best: 'best', not_started: 'not started', start: 'Start', continue: 'Continue',
    answered: 'Answered', reset: 'Reset', result: 'Result', retry: 'Try again', next_test: 'Next test', all_tests: 'All tests',
    great: 'Excellent! You are ready.', good: 'Good! Review your mistakes.', weak: 'Keep practising — read the explanations.',
    correct: 'Correct!', wrong: 'Wrong.', answer_is: 'Correct answer',
    files_title: 'Comprehension', files_sub: 'Exercises from the worksheets. Dictation texts are read aloud by your browser.',
    check: 'Check', show_answer: 'Show answer', hide_answer: 'Hide answer', your_answer: 'Your answer…',
    model: 'Model answer', key_ideas: 'Key words', show_answers: 'Show answers',
    true_: 'True', false_: 'False', select_all: 'Select all the correct options, then press “Check”.',
    match_hint: 'Tap a word, then its meaning.', match_done: 'All pairs found!', mistakes: 'mistakes', again: 'Again',
    listen: 'Play all', slow: 'Slow', stop: 'Stop', sentence: 'Sentence', prev: 'Previous', next: 'Next',
    type_dict: 'Type what you hear…', show_text: 'Show text', hide_text: 'Hide text',
    words_ok: 'words correct', no_tts: 'Your browser does not support text-to-speech.',
    vocab_title: 'Vocabulary', vocab_sub: 'Course topics and useful words for the exam and your presentation.', search: 'Search a word (EN or RU)…',
    words: 'words', known: 'learned', t_list: 'List', t_cards: 'Flashcards', t_quiz: 'Quiz', t_match: 'Match',
    flip: 'Flip', i_know: 'I know it', repeat: 'Repeat', tap_flip: 'tap to flip',
    dir: 'Direction', shuffle: 'Shuffle', of: 'of', no_results: 'No results.',
    quiz_q: 'Choose the definition', quiz_end: 'Quiz finished', new_quiz: 'New quiz', new_pairs: 'New pairs',
    oral_title: 'Oral presentation', oral_sub: '5 minutes, in English, a recent news topic, PowerPoint on a USB key.',
    timer: 'Presentation timer', t_start: 'Start', t_pause: 'Pause', t_reset: 'Reset', time_up: 'Time is up!',
    plan: 'Presentation structure', criteria_b2: 'B2 self-assessment', phrases: 'Useful phrases', all_phrases: 'All phrases →',
    topics: 'Topic ideas', tips: 'Tips',
    mock_title: 'Mock exam', mock_sub: 'Random questions from all 7 tests. Answers and explanations only at the end.',
    mock_q: 'questions', mock_min: 'min', mock_start: 'Start exam', finish: 'Finish', review: 'Review',
    time_left: 'Time left', unanswered: 'unanswered', mock_confirm: 'Finish the exam? Some questions are unanswered.',
    footer: 'Built from the course materials (worksheets, MCQ 1–7). Your progress is stored only in your browser.',
    theme: 'Toggle theme', lang_label: 'Interface language', saved: 'Saved', back: '← Back',
    audio_blocked: 'The browser blocked audio — press the button again.', audio_error: 'Could not play. Check your sound and that an English voice is installed.',
    audio_title: 'Audio & transcript', audio_on: 'Turn audio on', audio_off: 'Turn audio off', speed: 'Speed',
    play_from: 'Click to listen from this sentence',
    transcript_note: 'Transcript based on the worksheet; read aloud by your browser (English voice). Click a sentence to listen from there.',
    th_auto: 'Theme: system', th_light: 'Theme: light', th_dark: 'Theme: dark'
  }
};
let lang = store.get('ep_lang', 'ru');
if (!T[lang]) lang = 'ru';
const t = k => (T[lang] && T[lang][k]) || T.en[k] || k;
const L = o => (o && typeof o === 'object') ? (o[lang] || o.en) : o;

/* ---------- progress ---------- */
const prog = store.get('ep_progress', { g: {}, known: {}, mock: 0 });
prog.g = prog.g || {}; prog.known = prog.known || {}; prog.mock = prog.mock || 0;
const saveProg = () => store.set('ep_progress', prog);

/* ---------- state (kept in memory so a language switch keeps answers) ---------- */
const S = { g: {}, f: {}, v: {}, mock: { phase: 'setup' }, oral: { total: 300, left: 300, running: false } };
const checks = store.get('ep_checks', {});

/* ---------- speech ---------- */
const TTS = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
let voice = null;
function pickVoice() {
  if (!TTS) return;
  const vs = speechSynthesis.getVoices();
  voice = vs.find(v => /en[-_]GB/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null;
}
if (TTS) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
const splitSentences = s => s.replace(/([.!?]["”]?)\s+(?=["“A-Z0-9])/g, '$1\u0000').split('\u0000').filter(Boolean);
/* Sentence-by-sentence player: Chrome silently cuts utterances longer than ~15 s
   and may drop speak() called right after cancel(), so we queue short chunks. */
const player = { key: null, sents: [], i: 0, rate: 1, playing: false, gen: 0 };
function utter(text, rate) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = voice ? voice.lang : 'en-GB';
  if (voice) u.voice = voice;
  u.rate = rate;
  return u;
}
function playerUI() {
  document.querySelectorAll('[data-act="a-toggle"]').forEach(b => {
    const on = player.playing && player.key === b.dataset.key;
    b.innerHTML = on ? '⏸ ' + t('audio_off') : '▶ ' + t('audio_on');
    b.setAttribute('aria-pressed', String(on));
  });
  document.querySelectorAll('.ts.speaking').forEach(el => el.classList.remove('speaking'));
  if (player.playing) {
    const el = document.querySelector(`.ts[data-key="${player.key}"][data-i="${player.i}"]`);
    if (el) { el.classList.add('speaking'); }
  }
}
function stopAudio() {
  player.gen++; player.playing = false;
  if (TTS) speechSynthesis.cancel();
  playerUI();
}
function playSeq(key, sents, rate = 1, start = 0) {
  if (!TTS) { toast(t('no_tts')); return; }
  const busy = speechSynthesis.speaking || speechSynthesis.pending;
  stopAudio();
  if (speechSynthesis.paused) speechSynthesis.resume();
  const gen = player.gen;
  Object.assign(player, { key, sents, i: start, rate, playing: true });
  const next = () => {
    if (gen !== player.gen) return;
    if (player.i >= player.sents.length) { player.playing = false; playerUI(); return; }
    const u = utter(player.sents[player.i], player.rate);
    u.onend = () => { if (gen !== player.gen) return; player.i++; next(); };
    u.onerror = e => {
      if (gen !== player.gen || e.error === 'interrupted' || e.error === 'canceled') return;
      player.playing = false; playerUI(); toast(t(e.error === 'not-allowed' ? 'audio_blocked' : 'audio_error'));
    };
    speechSynthesis.speak(u);
    playerUI();
  };
  // iOS Safari only allows speech started synchronously inside the tap handler;
  // Chrome may drop speak() issued right after cancel(), so delay only in that case.
  if (busy) setTimeout(next, 80); else next();
}
function speak(text, rate = 1) { playSeq('_single', [text], rate); }

/* ---------- toast ---------- */
let toastT;
function toast(msg) {
  const el = $('#toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 1800);
}

/* ---------- shared renderers ---------- */
const gapText = s => esc(s).replace(/___/g, '<span class="gap"></span>');

function optsHTML(q, sel, reveal, act, attrs) {
  const right = sel !== undefined && q.a.includes(sel);
  return '<div class="opts' + (q.o.every(o => o.length < 28) ? ' two' : '') + '">' + q.o.map((o, oi) => {
    let cls = 'opt';
    if (reveal && sel !== undefined) {
      if (oi === sel) cls += right ? ' correct' : ' wrong';
      else if (!right && q.a.includes(oi)) cls += ' correct';
    } else if (sel === oi) cls += ' selected';
    const dis = reveal && sel !== undefined ? ' disabled' : '';
    return `<button class="${cls}" data-act="${act}" ${attrs} data-o="${oi}"${dis}><span class="letter">${LETTERS[oi]}</span><span>${esc(o)}</span></button>`;
  }).join('') + '</div>';
}

function explainHTML(q, sel) {
  const right = q.a.includes(sel);
  const ans = q.a.map(i => `${LETTERS[i]}) ${esc(q.o[i])}`).join(' / ');
  return `<div class="explain ${right ? 'ok' : 'bad'}"><b>${right ? '✓ ' + t('correct') : '✗ ' + t('wrong') + ' ' + t('answer_is') + ': ' + ans}</b>${q.ex ? '<br>' + esc(L(q.ex)) : ''}</div>`;
}

function matchHTML(key, lefts, rights, st) {
  const n = lefts.length;
  if (!st.order) st.order = shuffle(range(n));
  const isDone = i => st.done.includes(i);
  const cls = (side, i) => {
    let c = 'chip';
    if (isDone(i)) c += ' done';
    else if (st.sel && st.sel.side === side && st.sel.i === i) c += ' sel';
    if (st.err && ((side === 'l' && st.err.l === i) || (side === 'r' && st.err.r === i))) c += ' err';
    return c;
  };
  let h = `<p class="muted small">${t('match_hint')}</p><div class="match"><div class="match-col">`;
  h += range(n).map(i => `<button class="${cls('l', i)}" data-act="m" data-key="${key}" data-side="l" data-i="${i}"${isDone(i) ? ' disabled' : ''}><b>${esc(lefts[i])}</b></button>`).join('');
  h += '</div><div class="match-col">';
  h += st.order.map(i => `<button class="${cls('r', i)}" data-act="m" data-key="${key}" data-side="r" data-i="${i}"${isDone(i) ? ' disabled' : ''}>${esc(rights[i])}</button>`).join('');
  h += '</div></div>';
  if (st.done.length === n) h += `<div class="explain ok" style="margin-top:14px"><b>🎉 ${t('match_done')}</b> ${st.miss} ${t('mistakes')}. <button class="btn btn-sm" data-act="m-reset" data-key="${key}">${t('again')}</button></div>`;
  return h;
}
const matchStore = {};
function getMatch(key) { return (matchStore[key] = matchStore[key] || { done: [], sel: null, err: null, miss: 0 }); }

function diffWords(ref, inp) {
  const norm = w => w.toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9']/g, '');
  const R = ref.split(/\s+/).filter(w => norm(w)), I = inp.split(/\s+/).filter(w => norm(w));
  const r = R.map(norm), u = I.map(norm), n = r.length, m = u.length;
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = r[i] === u[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  let i = 0, j = 0, ok = 0; const out = [];
  while (i < n || j < m) {
    if (i < n && j < m && r[i] === u[j]) { out.push(['ok', R[i]]); ok++; i++; j++; }
    else if (j < m && (i >= n || dp[i][j + 1] >= dp[i + 1][j])) { out.push(['extra', I[j]]); j++; }
    else { out.push(['miss', R[i]]); i++; }
  }
  return { out, ok, total: n };
}

function ring(p) {
  const c = 2 * Math.PI * 54, col = p >= 80 ? 'var(--ok)' : p >= 50 ? 'var(--accent)' : 'var(--bad)';
  return `<svg class="result-ring" viewBox="0 0 120 120" role="img" aria-label="${p}%"><circle cx="60" cy="60" r="54" fill="none" stroke="var(--surface-2)" stroke-width="12"/><circle cx="60" cy="60" r="54" fill="none" stroke="${col}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - p / 100)}" transform="rotate(-90 60 60)"/><text x="60" y="68" text-anchor="middle" font-size="26" font-weight="800" fill="var(--text)">${p}%</text></svg>`;
}
const verdict = p => p >= 80 ? t('great') : p >= 50 ? t('good') : t('weak');
const sayBtn = (text, small) => TTS ? `<button class="icon-btn say${small ? ' btn-sm' : ''}" data-act="say" data-text="${esc(text)}" aria-label="Listen" title="Listen">🔊</button>` : '';

/* ---------- pages ---------- */
function totalWords() { return VOCAB.reduce((s, tp) => s + tp.words.length, 0); }
function knownCount(tid) { return Object.keys(prog.known).filter(k => !tid || k.startsWith(tid + ':')).length; }

function pageHome() {
  const done = GRAMMAR.filter(g => prog.g[g.id]).length;
  const cards = [
    ['#/exam', '📋', '', 'c_exam'], ['#/grammar', '✍️', '', 'c_grammar'], ['#/files', '🎧', 'accent', 'c_files'],
    ['#/vocab', '📚', 'ok', 'c_vocab'], ['#/oral', '🎤', 'accent', 'c_oral'], ['#/mock', '⏱️', '', 'c_mock']
  ];
  return `<section class="hero">
    <div><h1>${t('hero_title')}</h1><p class="hero-lead">${t('hero_lead')}</p>
      <div class="hero-actions"><a class="btn btn-primary" href="#/grammar">${t('start_grammar')} →</a><a class="btn" href="#/exam">${t('how_exam')}</a></div></div>
    <div class="stats">
      <div class="stat"><b>${done}/${GRAMMAR.length}</b><span>${t('st_tests')}</span></div>
      <div class="stat"><b>${knownCount()}</b><span>${t('st_words')}</span></div>
      <div class="stat"><b>${prog.mock ? prog.mock + '%' : '—'}</b><span>${t('st_mock')}</span></div>
    </div></section>
    <h2>${t('sections')}</h2>
    <div class="grid grid-3">${cards.map(c => `<a class="card" href="${c[0]}"><div class="card-icon ${c[2]}">${c[1]}</div><h3>${t(c[3])}</h3><p class="muted small">${t(c[3] + '_d')}</p></a>`).join('')}</div>`;
}

function pageExam() {
  return `<div class="page-head"><h1>${t('exam_title')}</h1><p class="muted">${t('exam_sub')}</p></div>
  <div class="grid grid-2">
    <div class="card"><div class="row"><span class="badge primary">${t('eval1_kind')}</span></div><h2 style="margin-top:10px">${t('eval1')}</h2>
      <table class="info-table"><tr><th>${t('when')}</th><td><b>${t('e1_when')}</b></td></tr><tr><th>${t('how')}</th><td>${t('e1_how')}</td></tr><tr><th>${t('what')}</th><td>${t('e1_what')}</td></tr></table></div>
    <div class="card"><div class="row"><span class="badge accent">${t('eval2_kind')}</span></div><h2 style="margin-top:10px">${t('eval2')}</h2>
      <table class="info-table"><tr><th>${t('when')}</th><td><b>${t('e2_when')}</b></td></tr><tr><th>${t('how')}</th><td>${t('e2_how')}</td></tr><tr><th>${t('what')}</th><td>${t('e2_what')}</td></tr>
      <tr><th>${t('rules')}</th><td><ul style="margin:0;padding-left:18px"><li><b>${t('e2_r1')}</b></li><li>${t('e2_r2')}</li><li><b>${t('e2_r3')}</b></li><li>${t('e2_r4')}</li></ul></td></tr>
      <tr><th>${t('criteria')}</th><td>${t('e2_crit')}</td></tr></table></div>
  </div>
  <div class="card" style="margin-top:16px"><h2>${t('prep_for')}</h2>
    <div class="grid grid-2"><a class="card" href="#/grammar"><h3>✍️ ${t('eval1')}</h3><p class="muted small">${t('prep1')}</p></a><a class="card" href="#/oral"><h3>🎤 ${t('eval2')}</h3><p class="muted small">${t('prep2')}</p></a></div></div>
  <div class="card"><table class="info-table">
    <tr><th>${t('course')}</th><td>${t('course_txt')}</td></tr><tr><th>${t('sem2')}</th><td>${t('sem2_txt')}</td></tr>
    <tr><th>${t('abs')}</th><td>${t('abs_txt')}</td></tr><tr><th>${t('mdl')}</th><td>${t('mdl_txt')}</td></tr></table></div>`;
}

function pageGrammarList() {
  return `<div class="page-head"><h1>${t('grammar_title')}</h1><p class="muted">${t('grammar_sub')}</p></div>
  <div class="grid grid-3">${GRAMMAR.map(g => {
    const p = prog.g[g.id], st = S.g[g.id], inProg = st && Object.keys(st.ans).length;
    return `<a class="card" href="#/grammar/${g.id}"><div class="row"><span class="badge primary">${g.level}</span><span class="badge">${esc(g.part)}</span></div>
      <h3 style="margin-top:12px">${esc(g.title)}</h3><p class="muted small">${g.questions.length} ${t('questions')}</p>
      ${p ? `<div class="row small"><span>${t('best')}: <b>${p.best}/${p.total}</b></span></div><div class="progress" style="margin-top:6px"><i style="width:${pct(p.best, p.total)}%"></i></div>`
        : `<p class="small muted">${inProg ? t('continue') + '…' : t('not_started')}</p>`}</a>`;
  }).join('')}</div>
  <a class="card" href="#/mock" style="margin-top:16px"><div class="row"><div class="card-icon accent" style="margin:0">⏱️</div><div><h3>${t('c_mock')}</h3><p class="muted small">${t('c_mock_d')}</p></div></div></a>`;
}

function pageGrammar(id) {
  const gi = GRAMMAR.findIndex(g => g.id === id);
  if (gi < 0) return notFound();
  const g = GRAMMAR[gi], st = (S.g[id] = S.g[id] || { ans: {} });
  const n = g.questions.length, answered = Object.keys(st.ans).length;
  const score = g.questions.reduce((s, q, qi) => s + (st.ans[qi] !== undefined && q.a.includes(st.ans[qi]) ? 1 : 0), 0);
  let h = `<div class="crumbs"><a href="#/grammar">${t('back')}</a></div>
  <div class="page-head"><h1>${esc(g.title)}</h1><p class="muted">${esc(g.part)} · ${g.level} · ${n} ${t('questions')}</p></div>
  <div class="quizbar"><span class="small">${t('answered')} <b>${answered}/${n}</b></span><div class="progress"><i style="width:${pct(answered, n)}%"></i></div>
    <span class="score">✓ ${score}</span><button class="btn btn-sm" data-act="g-reset" data-id="${id}">${t('reset')}</button></div>`;
  h += g.questions.map((q, qi) => `<div class="q" id="q${qi}"><div class="q-num">${qi + 1} / ${n}</div><div class="q-text">${gapText(q.q)}</div>
    ${optsHTML(q, st.ans[qi], true, 'g-ans', `data-id="${id}" data-q="${qi}"`)}${st.ans[qi] !== undefined ? explainHTML(q, st.ans[qi]) : ''}</div>`).join('');
  if (answered === n) {
    const p = pct(score, n), next = GRAMMAR[gi + 1];
    h += `<div class="card" style="text-align:center"><h2>${t('result')}: ${score}/${n}</h2>${ring(p)}<p>${verdict(p)}</p>
      <div class="btn-row" style="justify-content:center"><button class="btn" data-act="g-reset" data-id="${id}">${t('retry')}</button>
      ${next ? `<a class="btn btn-primary" href="#/grammar/${next.id}">${t('next_test')} →</a>` : `<a class="btn btn-primary" href="#/mock">${t('c_mock')} →</a>`}</div></div>`;
  }
  return h;
}

function pageFilesList() {
  return `<div class="page-head"><h1>${t('files_title')}</h1><p class="muted">${t('files_sub')}</p></div>
  <div class="grid grid-2">${FILES.map(f => `<a class="card" href="#/files/${f.id}"><div class="card-icon accent">${f.id === 'file1' ? '📰' : '🎬'}</div>
    <h3>${esc(f.title)}</h3><p class="muted small">${esc(L(f.topic))}</p><p class="small">${esc(L(f.summary))}</p>
    <div class="row">${[...new Set(f.sections.map(s => s.type))].map(ty => `<span class="badge">${ty}</span>`).join('')}</div></a>`).join('')}</div>`;
}

function pageFile(id) {
  const f = FILES.find(x => x.id === id);
  if (!f) return notFound();
  let h = `<div class="crumbs"><a href="#/files">${t('back')}</a></div>
  <div class="page-head"><h1>${esc(f.title)}</h1><p class="muted">${esc(L(f.summary))}</p></div>`;
  if (f.transcript) h += audioCard(id + ':audio', f.transcript);
  f.sections.forEach((sec, si) => {
    const key = `${id}:${si}`;
    h += `<div class="section-title"><span class="badge primary">${si + 1}</span><h2 style="margin:0">${esc(sec.title)}</h2></div>`;
    h += renderSection(sec, key);
  });
  const idx = FILES.findIndex(x => x.id === id), next = FILES[idx + 1];
  if (next) h += `<div class="btn-row" style="margin-top:24px"><a class="btn btn-primary" href="#/files/${next.id}">${esc(next.title)} →</a></div>`;
  return h;
}

function audioCard(key, text) {
  const st = (S.f[key] = S.f[key] || { show: true, rate: 1 });
  const sents = splitSentences(text), on = player.playing && player.key === key;
  return `<div class="card audio-card"><div class="row"><h2 style="margin:0">🎧 ${t('audio_title')}</h2></div>
    ${TTS ? `<div class="btn-row" style="margin-top:14px">
      <button class="btn btn-primary" data-act="a-toggle" data-key="${key}" aria-pressed="${on}">${on ? '⏸ ' + t('audio_off') : '▶ ' + t('audio_on')}</button>
      <div class="seg" role="group" aria-label="${t('speed')}">${[1, 0.8, 0.65].map(r => `<button data-act="a-rate" data-key="${key}" data-rate="${r}" aria-pressed="${st.rate === r}">${r}×</button>`).join('')}</div>
      <button class="btn" data-act="a-show" data-key="${key}">📄 ${st.show ? t('hide_text') : t('show_text')}</button></div>`
      : `<p class="notice" style="margin-top:12px">${t('no_tts')}</p>`}
    ${st.show || !TTS ? `<div class="transcript">${sents.map((s, i) => `<span class="ts${on && player.i === i ? ' speaking' : ''}" data-key="${key}" data-i="${i}"${TTS ? ` data-act="a-from" role="button" tabindex="0" title="${t('play_from')}"` : ''}>${esc(s)}</span>`).join(' ')}</div>
      <p class="small muted" style="margin:10px 0 0">ℹ️ ${t('transcript_note')}</p>` : ''}</div>`;
}

function renderSection(sec, key) {
  const F = S.f;
  switch (sec.type) {
    case 'open': return sec.items.map((it, ii) => {
      const k = `${key}:${ii}`, st = (F[k] = F[k] || { text: '', checked: false, shown: false });
      let res = '';
      if (st.checked) {
        const low = st.text.toLowerCase();
        res = `<div class="explain"><b>${t('key_ideas')}:</b> ${it.k.map(kw => { const alts = kw.split('|'); const ok = alts.some(a => low.includes(a)); return `<span class="badge ${ok ? 'ok' : ''}">${ok ? '✓' : '✗'} ${esc(alts[0])}</span>`; }).join(' ')}</div>`;
      }
      return `<div class="q"><div class="q-text">${esc(it.q)}</div>
        <textarea class="input" data-bind="open" data-key="${k}" placeholder="${t('your_answer')}" rows="3">${esc(st.text)}</textarea>
        <div class="btn-row" style="margin-top:10px"><button class="btn btn-sm btn-primary" data-act="open-check" data-key="${k}">${t('check')}</button>
        <button class="btn btn-sm" data-act="open-show" data-key="${k}">${st.shown ? t('hide_answer') : t('show_answer')}</button></div>
        ${res}${st.shown ? `<div class="explain ok"><b>${t('model')}:</b> ${esc(it.a)}</div>` : ''}</div>`;
    }).join('');
    case 'fill': {
      const st = (F[key] = F[key] || { vals: {}, checked: false, shown: false });
      const answers = [...sec.text.matchAll(/\[\[(.+?)\]\]/g)].map(m => m[1]);
      const norm = s => String(s || '').trim().toLowerCase().replace(/[’]/g, "'").replace(/\s+/g, ' ');
      let n = 0, ok = 0;
      const body = sec.text.split('\n').map(line => '<p>' + esc(line).replace(/\[\[(.+?)\]\]/g, () => {
        const i = n++, ans = answers[i], val = st.shown ? ans : (st.vals[i] || '');
        let cls = 'fill-input', fix = '';
        if (st.checked || st.shown) { const good = norm(val) === norm(ans); if (good) ok++; cls += good ? ' correct' : ' wrong'; if (!good) fix = `<span class="fix">${esc(ans)}</span>`; }
        return `<input class="${cls}" data-bind="fill" data-key="${key}" data-n="${i}" value="${esc(val)}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="blank ${i + 1}"${st.shown ? ' readonly' : ''}>${fix}`;
      }) + '</p>').join('');
      return `<div class="q"><div class="fill-text">${body}</div><div class="btn-row"><button class="btn btn-sm btn-primary" data-act="fill-check" data-key="${key}">${t('check')}</button>
        <button class="btn btn-sm" data-act="fill-show" data-key="${key}">${t('show_answers')}</button><button class="btn btn-sm" data-act="fill-reset" data-key="${key}">${t('reset')}</button>
        ${st.checked ? `<span class="score">${ok}/${answers.length}</span>` : ''}</div></div>`;
    }
    case 'mcq': return sec.items.map((it, ii) => {
      const k = `${key}:${ii}`, st = (F[k] = F[k] || {});
      let q = esc(it.q);
      if (it.bold) it.bold.forEach(b => { q = q.replace(esc(b), `<mark>${esc(b)}</mark>`); });
      return `<div class="q"><div class="q-text">${q}</div>${optsHTML(it, st.sel, true, 'f-ans', `data-key="${k}"`)}${st.sel !== undefined ? explainHTML(it, st.sel) : ''}</div>`;
    }).join('');
    case 'tf': return sec.items.map((it, ii) => {
      const k = `${key}:${ii}`, st = (F[k] = F[k] || {});
      const q = { o: [t('true_'), t('false_')], a: [it.a ? 0 : 1] };
      return `<div class="q"><div class="q-text">${esc(it.q)}</div>${optsHTML(q, st.sel, true, 'f-ans', `data-key="${k}"`)}${st.sel !== undefined ? explainHTML(q, st.sel) : ''}</div>`;
    }).join('');
    case 'multi': return sec.items.map((it, ii) => {
      const k = `${key}:${ii}`, st = (F[k] = F[k] || { sel: [], checked: false });
      const opts = it.o.map((o, oi) => {
        const on = st.sel.includes(oi), isA = it.a.includes(oi);
        let cls = 'opt';
        if (st.checked) cls += isA ? (on ? ' correct' : ' correct missed') : (on ? ' wrong' : '');
        else if (on) cls += ' selected';
        return `<button class="${cls}" data-act="multi" data-key="${k}" data-o="${oi}" aria-pressed="${on}"${st.checked ? ' disabled' : ''}><span class="letter">${on ? '✓' : LETTERS[oi]}</span><span>${esc(o)}</span></button>`;
      }).join('');
      const exact = st.checked && st.sel.length === it.a.length && it.a.every(a => st.sel.includes(a));
      return `<div class="q"><div class="q-text">${esc(it.q)}</div><p class="muted small">${t('select_all')}</p><div class="opts">${opts}</div>
        <div class="btn-row" style="margin-top:10px">${st.checked ? `<button class="btn btn-sm" data-act="multi-reset" data-key="${k}">${t('again')}</button>` : `<button class="btn btn-sm btn-primary" data-act="multi-check" data-key="${k}"${st.sel.length ? '' : ' disabled'}>${t('check')}</button>`}</div>
        ${st.checked ? `<div class="explain ${exact ? 'ok' : 'bad'}"><b>${exact ? '✓ ' + t('correct') : '✗ ' + t('answer_is') + ': ' + it.a.map(a => LETTERS[a]).join(', ')}</b></div>` : ''}</div>`;
    }).join('');
    case 'match': {
      const st = getMatch(key);
      return `<div class="q">${matchHTML(key, sec.pairs.map(p => p[0]), sec.pairs.map(p => p[1]), st)}</div>`;
    }
    case 'dictation': {
      const st = (F[key] = F[key] || { text: '', checked: false, show: false, i: 0 });
      const sents = splitSentences(sec.text);
      if (st.i >= sents.length) st.i = 0;
      let res = '';
      if (st.checked) {
        const d = diffWords(sec.text, st.text);
        res = `<div class="explain"><b>${d.ok}/${d.total} ${t('words_ok')} (${pct(d.ok, d.total)}%)</b><div class="diff">${d.out.map(([ty, w]) => `<span class="w-${ty}">${esc(w)}</span>`).join(' ')}</div></div>`;
      }
      return `<div class="q">${TTS ? `<div class="btn-row"><button class="btn btn-sm btn-primary" data-act="d-play" data-key="${key}" data-rate="0.95">▶ ${t('listen')}</button>
          <button class="btn btn-sm" data-act="d-play" data-key="${key}" data-rate="0.7">🐢 ${t('slow')}</button><button class="btn btn-sm" data-act="d-stop">■ ${t('stop')}</button></div>
          <div class="row" style="margin:12px 0"><button class="btn btn-sm" data-act="d-sent" data-key="${key}" data-dir="-1" aria-label="${t('prev')}"${st.i === 0 ? ' disabled' : ''}>←</button>
          <button class="btn btn-sm" data-act="d-sent" data-key="${key}" data-dir="0">🔊 ${t('sentence')} ${st.i + 1}/${sents.length}</button>
          <button class="btn btn-sm" data-act="d-sent" data-key="${key}" data-dir="1" aria-label="${t('next')}"${st.i >= sents.length - 1 ? ' disabled' : ''}>→</button></div>`
        : `<p class="notice">${t('no_tts')}</p>`}
        <textarea class="input" data-bind="dict" data-key="${key}" rows="5" placeholder="${t('type_dict')}" autocapitalize="sentences">${esc(st.text)}</textarea>
        <div class="btn-row" style="margin-top:10px"><button class="btn btn-sm btn-primary" data-act="d-check" data-key="${key}">${t('check')}</button>
        <button class="btn btn-sm" data-act="d-show" data-key="${key}">${st.show ? t('hide_text') : t('show_text')}</button></div>
        ${res}${st.show ? `<div class="explain ok">${esc(sec.text)}</div>` : ''}${sec.note ? `<p class="small muted" style="margin-top:12px">ℹ️ ${esc(L(sec.note))}</p>` : ''}</div>`;
    }
  }
  return '';
}

/* ----- vocabulary ----- */
function vocabItem(tid, wi, w) {
  const known = prog.known[`${tid}:${wi}`];
  return `<div class="vitem${known ? ' known' : ''}">${sayBtn(w[0], true)}<b>${esc(w[0])}</b><span>${lang === 'ru' ? esc(w[1]) + ' <span class="muted small">· ' + esc(w[2]) + '</span>' : esc(w[2]) + ' <span class="muted small">· ' + esc(w[1]) + '</span>'}</span><span class="ex">${esc(w[3])}</span></div>`;
}
function searchResults(qs) {
  const q = qs.trim().toLowerCase();
  if (!q) return '';
  const res = [];
  VOCAB.forEach(tp => tp.words.forEach((w, wi) => { if ((w[0] + ' ' + w[1] + ' ' + w[2]).toLowerCase().includes(q)) res.push(vocabItem(tp.id, wi, w)); }));
  return res.length ? `<div class="vlist">${res.slice(0, 40).join('')}</div>` : `<p class="muted">${t('no_results')}</p>`;
}
function pageVocabList() {
  const q = S.v.search || '';
  return `<div class="page-head"><h1>${t('vocab_title')}</h1><p class="muted">${t('vocab_sub')}</p></div>
  <input class="input" type="search" data-bind="vsearch" placeholder="${t('search')}" value="${esc(q)}" aria-label="${t('search')}" style="margin-bottom:12px">
  <div id="vresults" style="margin-bottom:16px">${searchResults(q)}</div>
  <div class="grid grid-3">${VOCAB.map(tp => {
    const kn = knownCount(tp.id), n = tp.words.length;
    return `<a class="card" href="#/vocab/${tp.id}"><div class="card-icon ok">${tp.icon}</div><h3>${esc(L(tp.title))}</h3>
      <p class="muted small">${n} ${t('words')} · ${kn} ${t('known')}</p><div class="progress"><i style="width:${pct(kn, n)}%"></i></div></a>`;
  }).join('')}</div>`;
}

function newQuiz(tp) {
  const n = tp.words.length;
  return { qs: shuffle(range(n)).slice(0, Math.min(10, n)).map(wi => ({ wi, opts: shuffle([wi, ...shuffle(range(n).filter(x => x !== wi)).slice(0, 3)]) })), i: 0, ans: {} };
}
function newVMatch(tp) { return { items: shuffle(range(tp.words.length)).slice(0, 6), done: [], sel: null, err: null, miss: 0 }; }

function pageVocab(id) {
  const tp = VOCAB.find(x => x.id === id);
  if (!tp) return notFound();
  const st = (S.v[id] = S.v[id] || { tab: 'list', card: { order: range(tp.words.length), i: 0, flipped: false } });
  const tabs = ['list', 'cards', 'quiz', 'match'];
  let h = `<div class="crumbs"><a href="#/vocab">${t('back')}</a></div>
  <div class="page-head"><h1>${tp.icon} ${esc(L(tp.title))}</h1><p class="muted">${tp.words.length} ${t('words')} · ${knownCount(id)} ${t('known')}</p></div>
  <div class="tabs" role="tablist">${tabs.map(tb => `<button role="tab" aria-selected="${st.tab === tb}" data-act="v-tab" data-id="${id}" data-tab="${tb}">${t('t_' + tb)}</button>`).join('')}</div>`;
  if (st.tab === 'list') h += `<div class="vlist">${tp.words.map((w, wi) => vocabItem(id, wi, w)).join('')}</div>`;
  if (st.tab === 'cards') {
    const c = st.card, wi = c.order[c.i], w = tp.words[wi], dir = S.v.dir || 'en';
    const front = dir === 'en' ? `<div class="flash-word">${esc(w[0])}</div>` : `<div class="flash-word">${esc(lang === 'ru' ? w[1] : w[2])}</div>`;
    const back = `<div class="flash-word">${esc(dir === 'en' ? w[1] : w[0])}</div><div class="muted">${esc(w[2])}</div><div class="small" style="font-style:italic">${esc(w[3])}</div>`;
    h += `<div class="row" style="margin-bottom:14px"><span class="small muted">${t('dir')}:</span><div class="seg"><button aria-pressed="${dir === 'en'}" data-act="v-dir" data-dir="en">EN → ${lang === 'ru' ? 'RU' : 'def.'}</button><button aria-pressed="${dir === 'ru'}" data-act="v-dir" data-dir="ru">${lang === 'ru' ? 'RU' : 'def.'} → EN</button></div>
      <span class="spacer"></span><button class="btn btn-sm" data-act="v-shuffle" data-id="${id}">🔀 ${t('shuffle')}</button></div>
      <div class="flash-wrap"><div class="flash${c.flipped ? ' flipped' : ''}" data-act="v-flip" data-id="${id}" role="button" tabindex="0" aria-label="${t('flip')}">
        <div class="flash-face">${front}<span class="flash-hint">${t('tap_flip')}</span></div><div class="flash-face flash-back">${back}</div></div>
      <p class="muted small" style="text-align:center;margin:12px 0">${c.i + 1} ${t('of')} ${tp.words.length}${prog.known[id + ':' + wi] ? ' · ✓ ' + t('known') : ''}</p>
      <div class="btn-row" style="justify-content:center"><button class="btn" data-act="v-card" data-id="${id}" data-dir="-1" aria-label="${t('prev')}">←</button>${sayBtn(w[0])}
        <button class="btn" data-act="v-known" data-id="${id}" data-k="0">↻ ${t('repeat')}</button><button class="btn btn-primary" data-act="v-known" data-id="${id}" data-k="1">✓ ${t('i_know')}</button>
        <button class="btn" data-act="v-card" data-id="${id}" data-dir="1" aria-label="${t('next')}">→</button></div></div>`;
  }
  if (st.tab === 'quiz') {
    const qz = (st.quiz = st.quiz || newQuiz(tp));
    if (qz.i >= qz.qs.length) {
      const sc = qz.qs.reduce((s, q, i) => s + (qz.ans[i] === q.wi ? 1 : 0), 0), p = pct(sc, qz.qs.length);
      h += `<div class="card" style="text-align:center"><h2>${t('quiz_end')}: ${sc}/${qz.qs.length}</h2>${ring(p)}<p>${verdict(p)}</p><button class="btn btn-primary" data-act="v-newquiz" data-id="${id}">${t('new_quiz')}</button></div>`;
    } else {
      const q = qz.qs[qz.i], w = tp.words[q.wi], sel = qz.ans[qz.i];
      const fake = { o: q.opts.map(oi => lang === 'ru' ? tp.words[oi][1] : tp.words[oi][2]), a: [q.opts.indexOf(q.wi)] };
      const selIdx = sel === undefined ? undefined : q.opts.indexOf(sel);
      h += `<div class="quizbar"><span class="small"><b>${qz.i + 1}/${qz.qs.length}</b></span><div class="progress"><i style="width:${pct(qz.i, qz.qs.length)}%"></i></div></div>
        <div class="q"><div class="q-num">${t('quiz_q')}</div><div class="row"><div class="q-text" style="margin:0;font-size:1.4rem">${esc(w[0])}</div>${sayBtn(w[0], true)}</div><div style="height:12px"></div>
        ${optsHTML(fake, selIdx, true, 'v-ans', `data-id="${id}"`)}
        ${sel !== undefined ? `<p class="ex muted small" style="margin-top:10px;font-style:italic">${esc(w[3])}</p><div class="btn-row"><button class="btn btn-primary" data-act="v-next" data-id="${id}">${t('next')} →</button></div>` : ''}</div>`;
    }
  }
  if (st.tab === 'match') {
    const m = (st.match = st.match || newVMatch(tp)), key = 'v:' + id;
    matchStore[key] = m;
    h += `<div class="q">${matchHTML(key, m.items.map(i => tp.words[i][0]), m.items.map(i => lang === 'ru' ? tp.words[i][1] : tp.words[i][2]), m)}
      <div class="btn-row" style="margin-top:12px"><button class="btn btn-sm" data-act="v-newmatch" data-id="${id}">🔀 ${t('new_pairs')}</button></div></div>`;
  }
  return h;
}

/* ----- oral ----- */
const ORAL = {
  plan: [
    { ru: 'Введение (30 с): зацепка (цифра, фото, заголовок), тема, почему выбрали, план.', en: 'Introduction (30 s): hook (figure, photo, headline), topic, why you chose it, outline.' },
    { ru: 'Контекст (1 мин): что, где, когда, кто? Источник и дата (после июля 2026).', en: 'Context (1 min): what, where, when, who? Source and date (after July 2026).' },
    { ru: 'Анализ (2 мин): причины, последствия, разные точки зрения. Комментируйте графики/карты.', en: 'Analysis (2 min): causes, consequences, different viewpoints. Comment on graphs/maps.' },
    { ru: 'Ваше мнение (1 мин): аргументы + пример.', en: 'Your opinion (1 min): arguments + an example.' },
    { ru: 'Заключение (30 с): итог, открытый вопрос к аудитории, «Thank you for your attention».', en: 'Conclusion (30 s): sum up, an open question to the audience, “Thank you for your attention”.' }
  ],
  criteria: [
    { ru: 'Я ясно и подробно описываю тему, без чтения с листа.', en: 'I describe the topic clearly and in detail, without reading.' },
    { ru: 'Моя речь логично построена: введение, части, заключение, связки.', en: 'My talk is logically organised: intro, parts, conclusion, linking words.' },
    { ru: 'Я привожу аргументы и примеры, выражаю своё мнение.', en: 'I give arguments and examples and express my opinion.' },
    { ru: 'Я использую разнообразную лексику по теме.', en: 'I use a good range of topic vocabulary.' },
    { ru: 'Грамматика хорошо контролируется: ошибки не мешают пониманию.', en: 'Good grammatical control: mistakes do not cause misunderstanding.' },
    { ru: 'Я говорю бегло, без долгих пауз.', en: 'I speak fluently, without long pauses.' },
    { ru: 'Произношение и интонация понятны.', en: 'Pronunciation and intonation are clear.' },
    { ru: 'Я комментирую слайды (графики, карты), а не читаю их.', en: 'I comment on my slides (graphs, maps) rather than reading them.' },
    { ru: 'Я могу ответить на вопросы спонтанно.', en: 'I can answer questions spontaneously.' },
    { ru: 'Я укладываюсь в 5 минут; презентация на USB-флешке; тема согласована на TD 2.', en: 'I stay within 5 minutes; slides on a USB key; topic validated at TD 2.' }
  ],
  topics: [
    { ru: '📈 Экономика: инфляция и цены, процентные ставки, торговые пошлины, безработица среди молодёжи, ИИ и рынок труда.', en: '📈 Economy: inflation and prices, interest rates, trade tariffs, youth unemployment, AI and jobs.' },
    { ru: '🏛️ Политика: выборы, новые законы, международные саммиты, конфликты и дипломатия.', en: '🏛️ Politics: elections, new laws, international summits, conflicts and diplomacy.' },
    { ru: '👥 Общество: протесты и забастовки, жильё, образование, здоровье, миграция, климат.', en: '👥 Society: protests and strikes, housing, education, health, migration, climate.' },
    { ru: '🎭 Культура: крупные фестивали, фильмы, спорт, социальные сети и технологии.', en: '🎭 Culture: major festivals, films, sport, social media and technology.' }
  ],
  tips: [
    { ru: 'Выберите тему после июля 2026 и сохраните ссылки на источники (BBC, The Guardian, Reuters, NYT).', en: 'Pick a topic from after July 2026 and keep your sources (BBC, The Guardian, Reuters, NYT).' },
    { ru: 'На слайдах — ключевые слова, картинки, графики. Не полные предложения.', en: 'Slides: key words, pictures, graphs — not full sentences.' },
    { ru: 'Отрепетируйте вслух 3–4 раза с таймером ниже.', en: 'Rehearse aloud 3–4 times with the timer below.' },
    { ru: 'Проверьте файл на флешке (.pptx и .pdf на всякий случай).', en: 'Check your file on the USB key (.pptx plus a .pdf just in case).' }
  ]
};
const fmt = s => { const a = Math.abs(s); return (s < 0 ? '−' : '') + Math.floor(a / 60) + ':' + String(a % 60).padStart(2, '0'); };
function pageOral() {
  const o = S.oral, phrases = VOCAB.find(v => v.id === 'oral');
  return `<div class="page-head"><h1>${t('oral_title')}</h1><p class="muted">${t('oral_sub')}</p></div>
  <div class="grid grid-2">
    <div class="card"><h2>⏱️ ${t('timer')}</h2><div id="oralTimer" class="big-timer${o.left < 0 ? ' over' : ''}">${fmt(o.left)}</div>
      <div class="progress" style="margin:8px 0 16px"><i id="oralBar" style="width:${Math.min(100, pct(o.total - o.left, o.total))}%"></i></div>
      <div class="btn-row" style="justify-content:center"><button class="btn btn-primary" data-act="o-toggle" id="oralBtn">${o.running ? '❚❚ ' + t('t_pause') : '▶ ' + t('t_start')}</button><button class="btn" data-act="o-reset">↺ ${t('t_reset')}</button></div></div>
    <div class="card"><h2>🧭 ${t('plan')}</h2><ol style="padding-left:20px;margin:0">${ORAL.plan.map(p => `<li style="margin-bottom:8px">${esc(L(p))}</li>`).join('')}</ol></div>
  </div>
  <div class="card" style="margin-top:16px"><h2>✅ ${t('criteria_b2')}</h2><ul class="checklist">${ORAL.criteria.map((c, i) => `<li><label><input type="checkbox" data-bind="check" data-i="${i}"${checks[i] ? ' checked' : ''}><span>${esc(L(c))}</span></label></li>`).join('')}</ul></div>
  <div class="grid grid-2" style="margin-top:16px">
    <div class="card"><h2>💡 ${t('topics')}</h2>${ORAL.topics.map(p => `<p>${esc(L(p))}</p>`).join('')}</div>
    <div class="card"><h2>📝 ${t('tips')}</h2><ul style="padding-left:20px;margin:0">${ORAL.tips.map(p => `<li style="margin-bottom:8px">${esc(L(p))}</li>`).join('')}</ul></div>
  </div>
  <div class="card"><div class="row"><h2 style="margin:0">🎤 ${t('phrases')}</h2><span class="spacer"></span><a class="btn btn-sm" href="#/vocab/oral">${t('all_phrases')}</a></div>
    <div class="vlist" style="margin-top:12px">${phrases.words.slice(0, 8).map((w, wi) => vocabItem('oral', wi, w)).join('')}</div></div>`;
}
let oralInt = null;
function oralTick() {
  const o = S.oral; o.left--;
  const el = $('#oralTimer');
  if (el) { el.textContent = fmt(o.left); el.classList.toggle('over', o.left < 0); const b = $('#oralBar'); if (b) b.style.width = Math.min(100, pct(o.total - o.left, o.total)) + '%'; }
  if (o.left === 60) toast('⏰ 1:00');
  if (o.left === 0) toast(t('time_up'));
}

/* ----- mock exam ----- */
const ALLQ = GRAMMAR.flatMap((g, gi) => g.questions.map((q, qi) => [gi, qi]));
const qOf = ([gi, qi]) => GRAMMAR[gi].questions[qi];
let mockInt = null;
function pageMock() {
  const m = S.mock;
  let h = `<div class="page-head"><h1>${t('mock_title')}</h1><p class="muted">${t('mock_sub')}</p></div>`;
  if (m.phase === 'setup') {
    h += `<div class="grid grid-3">${[[20, 15], [40, 30], [70, 50]].map(([n, min]) => `<button class="card" style="text-align:left;cursor:pointer;font:inherit;color:inherit" data-act="mock-start" data-n="${n}" data-min="${min}">
      <div class="card-icon accent">⏱️</div><h3>${n} ${t('mock_q')}</h3><p class="muted small">${min} ${t('mock_min')}</p><span class="btn btn-sm btn-primary">${t('mock_start')}</span></button>`).join('')}</div>
      ${prog.mock ? `<p class="muted" style="margin-top:16px">${t('st_mock')}: <b>${prog.mock}%</b></p>` : ''}`;
    return h;
  }
  const n = m.qs.length, answered = Object.keys(m.ans).length;
  if (m.phase === 'run') {
    h += `<div class="quizbar"><span class="timer" id="mockTimer">${fmt(Math.max(0, Math.round((m.end - Date.now()) / 1000)))}</span><div class="progress"><i style="width:${pct(answered, n)}%"></i></div>
      <span class="small"><b>${answered}/${n}</b></span><button class="btn btn-sm btn-primary" data-act="mock-finish">${t('finish')}</button></div>`;
    h += m.qs.map((ref, i) => { const q = qOf(ref); return `<div class="q"><div class="q-num">${i + 1} / ${n} · ${esc(GRAMMAR[ref[0]].title)}</div><div class="q-text">${gapText(q.q)}</div>${optsHTML(q, m.ans[i], false, 'mock-ans', `data-i="${i}"`)}</div>`; }).join('');
    h += `<div class="btn-row"><button class="btn btn-primary" data-act="mock-finish">${t('finish')}</button></div>`;
    return h;
  }
  const sc = m.qs.reduce((s, ref, i) => s + (m.ans[i] !== undefined && qOf(ref).a.includes(m.ans[i]) ? 1 : 0), 0), p = pct(sc, n);
  h += `<div class="card" style="text-align:center"><h2>${t('result')}: ${sc}/${n}</h2>${ring(p)}<p>${verdict(p)}</p>${n - answered ? `<p class="muted small">${n - answered} ${t('unanswered')}</p>` : ''}
    <button class="btn btn-primary" data-act="mock-new">${t('again')}</button></div><h2 style="margin-top:24px">${t('review')}</h2>`;
  h += m.qs.map((ref, i) => { const q = qOf(ref), sel = m.ans[i]; return `<div class="q"><div class="q-num">${i + 1} / ${n} · ${esc(GRAMMAR[ref[0]].title)}</div><div class="q-text">${gapText(q.q)}</div>
    ${optsHTML(q, sel, true, 'noop', '')}${sel !== undefined ? explainHTML(q, sel) : `<div class="explain bad"><b>${t('answer_is')}: ${q.a.map(x => LETTERS[x] + ') ' + esc(q.o[x])).join(' / ')}</b><br>${esc(L(q.ex))}</div>`}</div>`; }).join('');
  return h;
}
function mockFinish() {
  const m = S.mock; if (m.phase !== 'run') return;
  m.phase = 'done'; clearInterval(mockInt); mockInt = null;
  const n = m.qs.length, sc = m.qs.reduce((s, ref, i) => s + (m.ans[i] !== undefined && qOf(ref).a.includes(m.ans[i]) ? 1 : 0), 0);
  prog.mock = Math.max(prog.mock || 0, pct(sc, n)); saveProg();
  if (currentRoute()[0] === 'mock') { render(); window.scrollTo(0, 0); }
}
function mockTick() {
  const m = S.mock; if (m.phase !== 'run') return;
  const left = Math.round((m.end - Date.now()) / 1000), el = $('#mockTimer');
  if (el) el.textContent = fmt(Math.max(0, left));
  if (left <= 0) { toast(t('time_up')); mockFinish(); }
}

function notFound() { return `<div class="card"><h2>404</h2><a class="btn" href="#/">${t('nav_home')}</a></div>`; }

/* ---------- router ---------- */
const main = $('#main');
const currentRoute = () => location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
function render() {
  const [a, b] = currentRoute();
  let html;
  switch (a) {
    case undefined: html = pageHome(); break;
    case 'exam': html = pageExam(); break;
    case 'grammar': html = b ? pageGrammar(b) : pageGrammarList(); break;
    case 'files': html = b ? pageFile(b) : pageFilesList(); break;
    case 'vocab': html = b ? pageVocab(b) : pageVocabList(); break;
    case 'oral': html = pageOral(); break;
    case 'mock': html = pageMock(); break;
    default: html = notFound();
  }
  main.innerHTML = html;
  const sec = a || 'home';
  document.querySelectorAll('[data-nav]').forEach(el => {
    const on = el.dataset.nav === sec || (el.dataset.nav === 'grammar' && sec === 'mock' && !el.closest('.nav'));
    el.classList.toggle('active', on);
    if (on) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
  });
}
function applyStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  $('#footerText').textContent = t('footer');
  $('#themeBtn').setAttribute('aria-label', t('theme'));
  $('#langSeg').setAttribute('aria-label', t('lang_label'));
}
window.addEventListener('hashchange', () => { stopAudio(); render(); window.scrollTo(0, 0); });

/* ---------- theme ---------- */
let theme = store.get('ep_theme', 'auto');
function applyTheme() {
  if (theme === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', theme);
  $('#themeBtn').textContent = theme === 'dark' ? '☾' : theme === 'light' ? '☀' : '◐';
}
$('#themeBtn').addEventListener('click', () => { theme = theme === 'auto' ? 'light' : theme === 'light' ? 'dark' : 'auto'; store.set('ep_theme', theme); applyTheme(); toast(t('th_' + theme)); });
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; store.set('ep_lang', lang); applyStatic(); render(); }));

/* ---------- events ---------- */
function matchClick(key, side, i) {
  const st = matchStore[key]; if (!st || st.done.includes(i)) return;
  if (st.sel && st.sel.side !== side) {
    const l = side === 'l' ? i : st.sel.i, r = side === 'r' ? i : st.sel.i;
    st.sel = null;
    if (l === r) st.done.push(l);
    else { st.miss++; st.err = { l, r }; setTimeout(() => { st.err = null; render(); }, 450); }
  } else st.sel = (st.sel && st.sel.side === side && st.sel.i === i) ? null : { side, i };
  render();
}

main.addEventListener('click', e => {
  const el = e.target.closest('[data-act]'); if (!el || el.disabled) return;
  const d = el.dataset, F = S.f;
  switch (d.act) {
    case 'g-ans': { const st = S.g[d.id]; if (st.ans[d.q] !== undefined) return; st.ans[d.q] = +d.o;
      const g = GRAMMAR.find(x => x.id === d.id);
      if (Object.keys(st.ans).length === g.questions.length) {
        const sc = g.questions.reduce((s, q, qi) => s + (q.a.includes(st.ans[qi]) ? 1 : 0), 0);
        const p = prog.g[d.id]; prog.g[d.id] = { best: Math.max(p ? p.best : 0, sc), total: g.questions.length }; saveProg();
      }
      render(); break; }
    case 'g-reset': S.g[d.id] = { ans: {} }; render(); window.scrollTo(0, 0); break;
    case 'f-ans': if (F[d.key].sel === undefined) { F[d.key].sel = +d.o; render(); } break;
    case 'multi': { const st = F[d.key], o = +d.o; st.sel = st.sel.includes(o) ? st.sel.filter(x => x !== o) : [...st.sel, o]; render(); break; }
    case 'multi-check': F[d.key].checked = true; render(); break;
    case 'multi-reset': F[d.key] = { sel: [], checked: false }; render(); break;
    case 'open-check': F[d.key].checked = true; F[d.key].shown = true; render(); break;
    case 'open-show': F[d.key].shown = !F[d.key].shown; render(); break;
    case 'fill-check': F[d.key].checked = true; F[d.key].shown = false; render(); break;
    case 'fill-show': F[d.key].shown = true; render(); break;
    case 'fill-reset': F[d.key] = { vals: {}, checked: false, shown: false }; render(); break;
    case 'm': matchClick(d.key, d.side, +d.i); break;
    case 'm-reset': { const st = matchStore[d.key]; st.done = []; st.sel = null; st.err = null; st.miss = 0; st.order = shuffle(st.order); render(); break; }
    case 'd-play': { const f = FILES.find(x => d.key.startsWith(x.id + ':')); playSeq(d.key, splitSentences(f.sections[+d.key.split(':')[1]].text), +d.rate); break; }
    case 'd-stop': stopAudio(); break;
    case 'd-sent': { const st = F[d.key], f = FILES.find(x => d.key.startsWith(x.id + ':')), sents = splitSentences(f.sections[+d.key.split(':')[1]].text);
      st.i = Math.max(0, Math.min(sents.length - 1, st.i + (+d.dir))); if (+d.dir) render(); playSeq(d.key, [sents[st.i]], 0.8); break; }
    case 'a-toggle': { if (player.playing && player.key === d.key) { stopAudio(); break; }
      const f = FILES.find(x => d.key === x.id + ':audio'), st = F[d.key];
      const sents = splitSentences(f.transcript), resume = player.key === d.key && player.i < sents.length ? player.i : 0;
      playSeq(d.key, sents, st.rate, resume); break; }
    case 'a-rate': { const st = F[d.key]; st.rate = +d.rate;
      el.parentNode.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === el)));
      if (player.playing && player.key === d.key) playSeq(d.key, player.sents, st.rate, player.i); break; }
    case 'a-show': F[d.key].show = !F[d.key].show; render(); break;
    case 'a-from': { const f = FILES.find(x => d.key === x.id + ':audio'); playSeq(d.key, splitSentences(f.transcript), F[d.key].rate, +d.i); break; }
    case 'd-check': F[d.key].checked = true; render(); break;
    case 'd-show': F[d.key].show = !F[d.key].show; render(); break;
    case 'say': speak(d.text, 0.9); break;
    case 'v-tab': S.v[d.id].tab = d.tab; render(); break;
    case 'v-dir': S.v.dir = d.dir; Object.values(S.v).forEach(v => { if (v && v.card) v.card.flipped = false; }); render(); break;
    case 'v-flip': S.v[d.id].card.flipped = !S.v[d.id].card.flipped; render(); break;
    case 'v-card': { const c = S.v[d.id].card, n = c.order.length; c.i = (c.i + (+d.dir) + n) % n; c.flipped = false; render(); break; }
    case 'v-shuffle': { const c = S.v[d.id].card; c.order = shuffle(c.order); c.i = 0; c.flipped = false; render(); break; }
    case 'v-known': { const c = S.v[d.id].card, k = d.id + ':' + c.order[c.i];
      if (d.k === '1') prog.known[k] = 1; else delete prog.known[k]; saveProg();
      c.i = (c.i + 1) % c.order.length; c.flipped = false; render(); break; }
    case 'v-ans': { const qz = S.v[d.id].quiz, q = qz.qs[qz.i]; if (qz.ans[qz.i] !== undefined) return; qz.ans[qz.i] = q.opts[+d.o]; render(); break; }
    case 'v-next': S.v[d.id].quiz.i++; render(); break;
    case 'v-newquiz': S.v[d.id].quiz = newQuiz(VOCAB.find(x => x.id === d.id)); render(); break;
    case 'v-newmatch': S.v[d.id].match = newVMatch(VOCAB.find(x => x.id === d.id)); render(); break;
    case 'o-toggle': { const o = S.oral; o.running = !o.running;
      if (o.running) { if (!oralInt) oralInt = setInterval(oralTick, 1000); } else { clearInterval(oralInt); oralInt = null; }
      el.textContent = o.running ? '❚❚ ' + t('t_pause') : '▶ ' + t('t_start'); break; }
    case 'o-reset': clearInterval(oralInt); oralInt = null; S.oral.running = false; S.oral.left = S.oral.total; render(); break;
    case 'mock-start': { const n = +d.n; S.mock = { phase: 'run', qs: shuffle(ALLQ).slice(0, n).map(r => r), ans: {}, end: Date.now() + (+d.min) * 60000 };
      clearInterval(mockInt); mockInt = setInterval(mockTick, 1000); render(); window.scrollTo(0, 0); break; }
    case 'mock-ans': S.mock.ans[d.i] = +d.o; { const sc = window.scrollY; render(); window.scrollTo(0, sc); } break;
    case 'mock-finish': if (Object.keys(S.mock.ans).length < S.mock.qs.length && !confirm(t('mock_confirm'))) return; mockFinish(); break;
    case 'mock-new': S.mock = { phase: 'setup' }; render(); break;
  }
});
main.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.flash, .ts')) { e.preventDefault(); e.target.click(); }
});
main.addEventListener('input', e => {
  const el = e.target, d = el.dataset;
  switch (d.bind) {
    case 'open': S.f[d.key].text = el.value; break;
    case 'dict': S.f[d.key].text = el.value; break;
    case 'fill': { const st = S.f[d.key]; st.vals[d.n] = el.value; if (st.checked || st.shown) { st.checked = false; st.shown = false; el.className = 'fill-input'; } break; }
    case 'vsearch': S.v.search = el.value; $('#vresults').innerHTML = searchResults(el.value); break;
  }
});
main.addEventListener('change', e => {
  const el = e.target;
  if (el.dataset.bind === 'check') { checks[el.dataset.i] = el.checked; store.set('ep_checks', checks); }
});

/* ---------- init ---------- */
applyTheme(); applyStatic(); render();
})();
