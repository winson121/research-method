<script>
(function(){
"use strict";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const TAGLBL={check:"Bite-size check",multi:"Choose all that apply",case:"Scenario",data:"Data analysis",single:"Question",type:"Question"};
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),1600);}

/* ---------- MINI QUIZZES ---------- */
const QUIZ={};

QUIZ.w3o1=[
 {t:"check",type:"single",q:"In the Daniela case, why does the survey open with a Demographic Data section?",
  opts:[["Because respondents recruited randomly through Facebook may not be representative of the wider population — the demographics let the team read results by segment and measure the skew",1],["Because Facebook Ads Manager refuses to run campaigns without demographic questions",0],["Because Likert scales are only valid when matched to age and sex",0],["Because the government requires all COVID surveys to collect names first",0]],
  why:"The case states it plainly: the recruitment channel is a convenience channel, so the team captures age/sex/education to understand trends per population segment rather than assuming the sample mirrors the public."},
 {t:"multi",type:"multi",q:"Which design decisions did Daniela's team actually make? Select all that apply.",
  opts:[["Keep the survey under 10 minutes to fill out",1],["Prioritise closed-ended multiple choice over open-ended questions",1],["Use 5-point Likert scales (1 = not confident at all … 5 = very confident) for confidence ratings",1],["Include an 'Other' option for the preventive-behaviours question",1],["Write long open-ended essays for every topic",0]],
  why:"All four appear in the case: time cap, closed-first question forms, 5-point Likert for organisational confidence, and 'Other' for unlisted preventive measures. Long open essays contradict the closed-first decision."}
];

QUIZ.w3o2=[
 {t:"check",type:"single",q:"In the Cortana case, why were interviews chosen over another survey?",
  opts:[["To form a holistic understanding of the end users — the personal interaction allows flexibility to approach emotions, sensitive issues and the participants' own terminology",1],["Because interviews are cheaper than surveys",0],["Because residents could not read",0],["Because audio recordings require no analysis",0]],
  why:"The case says interviews were necessary to form a holistic understanding, thanks to the flexibility of personal interaction. Cost and literacy are never cited; recordings still need transcription and analysis."},
 {t:"case",type:"single",q:"Sarah opens her first interview with Vera by asking about Vera's favourite board games. This is an example of…",
  opts:[["rapport building before substantive questions",1],["a leading question",0],["an unstructured interview with no schedule",0],["debriefing after the interview",0]],
  why:"General, easy, non-sensitive questions at the start build rapport — exactly the opening-question pattern from 'Strategies for Qualitative Interviews', and what the slides call situational, participant-centred interviewing."}
];

QUIZ.w3s1=[
 {t:"check",type:"single",q:"The cleanest statement of the survey-vs-questionnaire distinction is…",
  opts:[["A questionnaire is the written set of questions; a survey is that set plus the whole process — designing and distributing the questions, collecting, aggregating and analysing responses",1],["They are exact synonyms and the difference never matters",0],["A survey is the paper, a questionnaire is the website",0],["A questionnaire always has more questions than a survey",0]],
  why:"Both the lecture slide and the SurveyMonkey article define it this way: the questionnaire is just the instrument; the survey is the instrument plus method and analysis."},
 {t:"check",type:"single",q:"Which of these is a questionnaire but NOT (by itself) a survey?",
  opts:[["A signup form collecting emails for a mailing list, with no analysis of responses",1],["A customer-satisfaction study: designed questions, sampled 500 customers, aggregated and analysed the answers",0],["A SETU-style course evaluation whose results are statistically summarised for the university",0],["A market-research project comparing brand awareness before and after a campaign",0]],
  why:"Standalone forms (email capture, payments, personal accounts) are the reading's example of questionnaires without a survey — no sampling design, no aggregation, no analysis."}
];

QUIZ.w3s2=[
 {t:"multi",type:"multi",q:"According to the Part A slides, a questionnaire is appropriate when… Select all that apply.",
  opts:[["We have a good idea of what to expect",1],["We have (a) literate respondents, or (b) time to administer it to them",1],["We are interested in counts and frequencies",1],["We want to generalise to the larger population",1],["We need to explore deeply emotional, sensitive territory that self-report can't capture",0]],
  why:"The four listed conditions are the slide's exact list. Sensitive emotional territory is the case where the Part B introduction says interviews take over."},
 {t:"check",type:"single",q:"Snowball sampling means…",
  opts:[["More respondents are identified through existing respondents — recruitment chains through networks",1],["Every population member has an equal chance of selection",0],["Recruiting whoever walks past the researcher",0],["Paying a panel company for a random sample",0]],
  why:"Simple random = equal chance of selection; snowball = respondents nominate further respondents, which is powerful for hidden or hard-to-reach groups but biases toward the connected."}
];

QUIZ.w3s2b=[
 {t:"case",type:"single",q:"You must survey Monash students and guarantee every faculty is represented in proportion to its size. The correct approach is…",
  opts:[["Stratified sampling — split the student list by faculty (strata) and randomly sample within each faculty in proportion to its size",1],["Cluster sampling — randomly pick two faculties and survey everyone in them",0],["Convenience sampling — survey your own tutorials",0],["Snowball sampling — ask respondents to forward the link",0]],
  why:"Guaranteeing proportional subgroup representation = stratified. Cluster would randomly drop whole faculties; convenience and snowball offer no representation guarantee."},
 {t:"multi",type:"multi",q:"Which of these are PROBABILITY sampling methods (every population member has a known, non-zero chance of selection)? Select all.",
  opts:[["Simple random sampling",1],["Systematic sampling",1],["Stratified sampling",1],["Cluster sampling",1],["Snowball sampling",0],["Convenience sampling",0]],
  why:"The first four all draw from a frame with known selection probabilities. Snowball and convenience are non-probability — selection chances are unknown and uncontrolled."}
];

QUIZ.w3s2c=[
 {t:"check",type:"single",q:"“Rate your experience of Zoom: Impossible to use 0········10 Extremely easy to use” (example survey Q8) is which form?",
  opts:[["A semantic differential — two bipolar anchored adjectives with numbered steps between",1],["A Likert agreement scale",0],["A dichotomous question",0],["An open-ended question",0]],
  why:"Bipolar opposite poles (impossible ↔ extremely easy) joined by numbered steps is the semantic differential. Likert states one claim and asks agreement with it."},
 {t:"case",type:"single",q:"Classify this item: “How many hours did you spend studying last week? (0 / 1–5 / 6–10 / 11+)”.",
  opts:[["Behavioural + closed numeric bands on a ratio-level variable",1],["Attitudinal + Likert",0],["Factual/demographic + dichotomous",0],["Open-ended",0]],
  why:"It asks about behaviour (what they did), answered in non-overlapping numeric bands — hours are ratio-level (a true zero exists), so averaging them later is legal."}
];

QUIZ.w3s2d=[
 {t:"check",type:"single",q:"The same 200 first-years surveyed every semester for three years to track how their study habits change is a…",
  opts:[["Longitudinal panel study — the same people re-measured across waves",1],["Cross-sectional study — one snapshot",0],["Census",0],["Focus group",0]],
  why:"Same individuals followed over time = longitudinal (panel). Snapshots of different cohorts each semester would be repeated cross-sections."},
 {t:"case",type:"single",q:"Your population is recently arrived refugees with varying English literacy. Per the slide's appropriateness conditions, you should…",
  opts:[["Administer the questionnaire face-to-face — a trained person reads items aloud and records answers (the 'time to administer' branch)",1],["Email a 15-page online form",0],["Post the link on social media only",0],["Skip consent to save their time",0]],
  why:"The slide's condition (b): questionnaires are appropriate with literate respondents OR when you have time to administer to non-literate respondents."}
];

QUIZ.w3s3=[
 {t:"case",type:"single",q:"A questionnaire asks: “Don't you agree that the new library app is a huge improvement?” The primary flaw is…",
  opts:[["Leading wording — the stem demands assent and tells the respondent which answer is expected",1],["A double negative",0],["Overlapping response categories",0],["The question is unanswerable because respondents don't use libraries",0]],
  why:"“Don't you agree” is the classic leading/acquiescence pattern (pitfall 1). There is no negation, no category list, and nothing making it unanswerable."},
 {t:"multi",type:"multi",q:"Which are legitimate safeguards when a survey must ask a sensitive question (income, health, ethnicity)? Select all.",
  opts:[["Offer banded ranges instead of demanding an exact figure",1],["Include a 'Prefer not to say' option",1],["Briefly explain why the data is being collected",1],["Place it as the very first question so it's over with",0]],
  why:"Bands + refusal + justification reduce lying and abandonment. Front-loading a sensitive item maximises early drop-off; sensitive items go later, after rapport."}
];

QUIZ.w3s4=[
 {t:"check",type:"single",q:"Why did Daniela's team pilot the survey internally before the public launch?",
  opts:[["To check the survey displays correctly, the questions are meaningful and make sense, and it fills within the intended 10 minutes",1],["Because piloting is legally required for all online surveys",0],["To increase the response rate by 10%",0],["So colleagues could answer on behalf of the public",0]],
  why:"The case gives the three pilot checks verbatim: display, meaningfulness, timing. A pilot fixes instruments before they cost you real respondents."},
 {t:"multi",type:"multi",q:"Which are good Likert-scale design rules? Select all that apply.",
  opts:[["Use balanced, labelled anchors at both ends (e.g. 1 = not confident at all, 5 = very confident)",1],["Use an odd number of points so undecided respondents have a neutral middle",1],["Label both anchored ends so every respondent shares the same scale (1 = not confident at all … 5 = very confident)",1],["Use a 0–100 unlabelled slider so every respondent invents their own interpretation",0]],
  why:"Balanced anchors, an honest midpoint and labelled points make answers comparable. Unlabelled long sliders re-introduce the vagueness problem."}
];

QUIZ.w3i1=[
 {t:"check",type:"single",q:"The 'interview society' (David Silverman, 1993) refers to…",
  opts:[["The modern condition in which interviews pervade news, talk shows, documentaries and job seeking — so people already know how to 'play the game' of presenting themselves in interviews",1],["A society where everyone must pass a structured interview to vote",0],["The job market of the 1990s only",0],["A legal body that licenses interviewers",0]],
  why:"Silverman's point: interviews are no longer only professional practice — they pervade and produce our cultural experiences, which research interviews can leverage."}
];

QUIZ.w3i2=[
 {t:"check",type:"single",q:"Epistemology, as used in the lecture, is…",
  opts:[["The study of what does and does not constitute your knowledge",1],["The study of population sampling",0],["The study of body language in interviews",0],["The study of questionnaire layout",0]],
  why:"Ontology = the concepts and categories of the subject area and their relations; epistemology = what counts as knowledge. Both are 'before you interview' checkpoints."},
 {t:"case",type:"single",q:"Studying 'sexism' as a study of discourse rather than of attitudes would primarily change…",
  opts:[["The questions you ask — ontology (what the phenomenon IS) shapes the line of inquiry",1],["The consent form font",0],["The transcription software",0],["Nothing — the questions stay identical",0]],
  why:"The slide's example: sexism as attitudes, as discourse, or as institutions are different ontological takes, and each generates different questions."}
];

QUIZ.w3i3=[
 {t:"case",type:"single",q:"A researcher has a comprehensive list of questions, runs every interview identically, and needs no follow-up interviews. This is a…",
  opts:[["Structured (respondent) interview",1],["Unstructured (informer) interview",0],["Focus group",0],["Debate-based interview",0]],
  why:"Rigid style + comprehensive question list + no follow-ups needed = the slide's definition of the structured respondent interview."},
 {t:"case",type:"single",q:"A researcher wants a key informant to talk freely about a sensitive topic, with few if any prepared questions, accepting that the participant's narrative may redirect the conversation. This is a…",
  opts:[["Unstructured informer interview",1],["Structured respondent interview",0],["Semi-structured respondent interview",0],["Survey",0]],
  why:"Few/no prepared questions, conversation-like progress, sensitivity, narrative redirection — the slide's exact description of the unstructured informer interview."}
];

QUIZ.w3i4=[
 {t:"check",type:"single",q:"In the Cortana case, when does the collected audio actually produce insight?",
  opts:[["Only after it is transcribed and analysed",1],["The moment recording starts",0],["When the ethics committee approves the proposal",0],["As soon as recruitment reaches 15 participants",0]],
  why:"The case's closing line: the audio could provide insight into design areas and constraints — but only after transcription and analysis."}
];

QUIZ.w3wsa1=[
 {t:"case",type:"single",q:"Another group presents: “How often do you exercise and eat well? [Never / Rarely / Frequently / Sometimes]”. Your sharpest single critique is…",
  opts:[["It is double-barrelled (two behaviours fused) AND the frequency labels are out of order (Sometimes placed after Frequently)",1],["It is a perfectly fine question with no issues",0],["The flaw is only that it has four options instead of five",0],["The flaw is that exercise is unhealthy to ask about",0]],
  why:"Two pitfall patterns stacked: one number cannot represent both behaviours, and the scale scrambles the low→high continuum so the data can't even be ordered."}
];

QUIZ.w3wsa2=[
 {t:"check",type:"single",q:"Your group writes: “Q: How many close friends have you made at uni? (0/1–2/3–5/6+) — Type: closed bands; Scale: as shown.” Which justification element is still missing?",
  opts:[["Why the question is asked — what it measures and how it feeds the topic",1],["The font size of the question",0],["The name of the survey platform",0],["Nothing — type plus scale is a complete justification",0]],
  why:"The sheet demands the justification for the question (why you are asking it) AND the form (type, wording, scale). Wording is covered, type/scale covered — the purpose statement is absent."}
];

QUIZ.w3wsa3=[
 {t:"check",type:"single",q:"Which feedback note best follows the Activity 3 template?",
  opts:[["Strength: targets an actionable topic. Issue: 'Don't you agree' leads the respondent. Rewrite: 'The university provides enough social events for new students (Strongly disagree → Strongly agree)'. Designer question: what would you change if 80% agree?",1],["This question is bad",0],["I liked your questionnaire overall",0],["You should add more questions",0]],
  why:"A usable note = quoted question + named strength + named issue + concrete rewrite + a question back to the designers. Pure praise or pure criticism gives the group nothing to act on."}
];

QUIZ.w3wsb1=[
 {t:"check",type:"single",q:"Your group must narrow “Grocery Shopping and Technology”. Which is a well-formed mini-topic?",
  opts:[["In-store technology — self-checkout, scan-and-go, store apps; it is a theme you could ask 4+ questions about and it sits inside the narrowed focus",1],["Shopping",0],["Do you like self-checkout? Yes/No",0],["Technology",0]],
  why:"A mini-topic is a named theme broad enough for 4+ questions but small enough to share no territory with the other four. 'Shopping' and 'Technology' are the whole focus; a yes/no question is a question, not a topic."}
];

QUIZ.w3wsb2=[
 {t:"case",type:"single",q:"Your 10-minute schedule has a trust/privacy question, a grand-tour opener, a critical incident, and a catch-all. The best order is…",
  opts:[["Grand tour → critical incident → trust/privacy → catch-all",1],["Trust/privacy first while the participant is fresh",0],["Catch-all first so nothing is forgotten",0],["Order does not matter in interviews",0]],
  why:"The funnel: broad and easy first (participant narrates their own frame), specifics next, sensitive content late once trust exists, catch-all always last."}
];

QUIZ.w3wsb3=[
 {t:"case",type:"single",q:"In the practice interview (teaching exercise, no consent form), what must the interviewer still do before starting?",
  opts:[["Be clear about what the data will be used for and what will happen to it afterwards",1],["Nothing — teaching exercises have no ethical expectations",0],["Get the observer to sign the consent form",0],["Hide the recorder until the interview is over",0]],
  why:"The sheet is explicit: although there is no information sheet or consent form in the exercise, the interviewer must still state the data's purpose and fate. That is the habit the consent form formalises in real research."}
];

QUIZ.w3a1=[
 {t:"check",type:"single",q:"'Intelligent verbatim' transcription is…",
  opts:[["Every word kept, with fillers and stumbles lightly removed — readable but still faithful",1],["A summary of what the participant probably meant",0],["A transcript typed by the participant themselves",0],["Only the interviewer's questions",0]],
  why:"Verbatim keeps everything including um/uh; intelligent verbatim tidies fillers and false starts; edited/summary versions are for communication, not analysis."},
 {t:"check",type:"single",q:"Why does the unit require you to transcribe your own interview rather than outsourcing it?",
  opts:[["Because doing it yourself exposes you to nuances in the data and surfaces latent topics you would otherwise miss",1],["Because outsourcing transcription is illegal in Australia",0],["Because it makes the transcript longer",0],["Because the teaching team cannot read outsourced transcripts",0]],
  why:"Moodle's stated reason: transcribing interviews you conducted is a key research skill — it helps you understand nuances and expose latent topics."}
];

QUIZ.w3a2=[
 {t:"check",type:"single",q:"On the ITI5125 consent form, audio recording and 'the interviewer transcribing this recording, using their personal computer' appear as…",
  opts:[["Separate consent items — a participant could agree to the interview but decline the recording or the personal-computer transcription",1],["One bundled item you must accept all of",0],["Optional decorations with no meaning",0],["Clauses the participant is forbidden to read",0]],
  why:"The form lists them as distinct Yes/No rows: participation, recording, and transcription-on-a-personal-computer are individually consented. The personal-computer clause honestly discloses a privacy risk."},
 {t:"check",type:"single",q:"The withdrawal clause ('you can withdraw up to the time that names are removed and marking has commenced') is best described as…",
  opts:[["An honest boundary — withdrawal is real but impossible once de-identification and marking have begun, so the form defines the deadline instead of pretending withdrawal is unlimited",1],["Proof participants can never withdraw",0],["A clause that makes the interview compulsory",0],["A promise that data is published immediately",0]],
  why:"Good consent forms define real boundaries: voluntary participation, withdrawal until de-identification/marking — after that the data can no longer be separated from the marking process."}
];

/* ---------- QUESTION BANK ---------- */
const BANK_W3=[
 {t:"single",q:"Which statement matches the lecture's survey-vs-questionnaire distinction?",
  opts:[["A survey is the broader term — content, method AND analysis; a questionnaire is the written set of questions it contains",1],["A questionnaire is broader than a survey",0],["The two terms have different meanings only in Australia",0],["A survey must always be conducted face-to-face",0]],
  why:"The slide's table: survey = broader term describing content, method and analysis; questionnaire = includes a written set of questions."},
 {t:"single",q:"Questionnaires with 40 questions have roughly what response-rate penalty compared with 10-question ones (SurveyMonkey study cited in the reading)?",
  opts:[["About a 10% lower response rate",1],["About a 50% lower response rate",0],["A 10% higher response rate",0],["No difference — length never matters",0]],
  why:"The reading's figure: 40-question questionnaires get ~10% fewer responses than 10-question ones. And people spend ~10 minutes regardless, so length buys nothing but speed-reading."},
 {t:"multi",q:"The Part A slides say a survey can obtain which kinds of information? Select all that apply.",
  opts:[["Facts and knowledge (biography)",1],["Opinions and beliefs",1],["Attitudes",1],["Motives",1],["Actions (past behaviour) and likely future behaviour",1],["The respondent's exact blood chemistry",0]],
  why:"The slide lists exactly the first five families. 'Likely future behaviour' is the sixth item — blood chemistry is a lab measurement, not survey data."},
 {t:"single",q:"All of the following are conditions for using a questionnaire EXCEPT…",
  opts:[["You need to explore emotions and sensitive issues in depth",1],["You have a good idea of what to expect",0],["Respondents are literate (or you have time to administer it)",0],["You want counts, frequencies, and generalisation to the population",0]],
  why:"The four slide conditions are the 'good idea', 'literate/time', 'counts/frequencies' and 'generalisation' options. Deep sensitive exploration is what interviews are for — the Part B introduction says so."},
 {t:"case",q:"A UX team knows almost nothing about why night-shift nurses ignore a medication app's alerts. Before any survey, the week-3 logic suggests they should first…",
  opts:[["Run exploratory qualitative work (e.g. interviews) to learn the territory — questionnaires need a good idea of what to expect",1],["Send a 60-question survey to all hospitals",0],["Buy a larger survey panel",0],["Skip research and redesign the alert sound",0]],
  why:"Interviews need little prior knowledge and get 'behind' responses; a questionnaire doesn't. Classic sequence: qualitative exploration first, then instrumented survey."},
 {t:"single",q:"Simple random sampling is defined by…",
  opts:[["Every member of the population having an equal chance of selection",1],["Respondents recruiting their friends",0],["Interviewing whoever is easiest to reach",0],["Selecting the most knowledgeable informant",0]],
  why:"Equal chance of selection is the definition; the other options describe snowball, convenience and purposive/informer strategies."},
 {t:"case",q:"A researcher studying undocumented migrant workers' technology use cannot sample from a list. The best fit from the lecture's approaches is…",
  opts:[["Snowball sampling — respondents identify further respondents, reaching a hidden population",1],["Simple random sampling from the electoral roll",0],["A census of the population",0],["Convenience sampling at the researcher's university",0]],
  why:"Snowball sampling exists precisely for hard-to-reach or hidden groups where no sampling frame exists; its cost is bias toward the well-connected, which demographics can help you read."},
 {t:"case",q:"Daniela's team recruits COVID-survey respondents through Facebook ads. What is the methodological risk, and their mitigation?",
  opts:[["Facebook users may not represent the wider population — mitigated by opening with a Demographic Data section (age, sex, education) so results can be read by segment",1],["Facebook users are too old — mitigated by excluding everyone over 50",0],["Ads are too expensive — mitigated by shortening the survey",0],["There is no risk; online samples are always representative",0]],
  why:"The case names both halves: the representativeness risk of the channel, and the demographics section as the measuring instrument for the skew."},
 {t:"multi",q:"Which question-design rules did Daniela's team apply? Select all that apply.",
  opts:[["Keep the survey under 10 minutes",1],["Prioritise closed-ended multiple choice over open-ended questions",1],["Formulate perception questions on 5-point Likert scales",1],["Offer WHO-based options plus an 'Other' free-text escape",1],["Ask every question open-ended to capture nuance",0]],
  why:"All four are in the case study text. 'Every question open-ended' directly contradicts the closed-first priority."},
 {t:"single",q:"The main purpose of the team's internal pilot was to…",
  opts:[["Verify the survey displays correctly, questions are meaningful and make sense, and completion fits the intended 10 minutes — fixing issues before public release",1],["Collect the first wave of publishable data",0],["Replace the need for consent",0],["Increase the sample size",0]],
  why:"Pilot = dress rehearsal of the instrument with colleagues/friends. Its checks are display, meaningfulness, timing — and it is part of the week-2 dependency logic (pilot before real collection)."},
 {t:"case",q:"Which of these question stems is LEAST leading?",
  opts:[["“How useful do you find the campus Wi-Fi?”",1],["“Don't you agree that the campus Wi-Fi is excellent?”",0],["“Most students love the campus Wi-Fi — what do you like about it?”",0],["“The campus Wi-Fi has improved dramatically, hasn't it?”",0]],
  why:"Only the first asks neutrally. The others stack an expected answer via agreement demand, bandwagon appeal, or tag questions."},
 {t:"single",q:"“Do you agree that students should not have to take an exam at the end of their course?” suffers primarily from…",
  opts:[["A double negative plus acquiescence bias — 'agree' + 'should not' flips the logic and the Yes/No format collapses nuance",1],["Overlapping income bands",0],["An unordered frequency scale",0],["A missing 'Other' option",0]],
  why:"This is workshop Q5. The fix pattern: affirmative statement + balanced 5-point agree–disagree scale."},
 {t:"single",q:"“What do you think can be done about global warming?” fails mainly because…",
  opts:[["It is an oversized, unbounded open question — answers will be incomparable essays that can't be aggregated into counts and frequencies",1],["It is a leading question about smoking",0],["Its categories overlap",0],["It asks two questions at once about swimming",0]],
  why:"Workshop Q3. The fix pattern: narrow to one aspect, give structured options (forced priority or own-behaviour checklist)."},
 {t:"multi",q:"A well-built closed question's response options should be… Select all that apply.",
  opts:[["Mutually exclusive (no two options can both be true)",1],["Collectively exhaustive (incl. an 'Other' or 'None' escape)",1],["In a logical order when they have a natural order",1],["Labelled with anchored endpoints where a scale is used",1],["Worded so one option is obviously the 'right' answer",0]],
  why:"Exclusivity, exhaustiveness, order and anchors are the four craft rules. Signposting a 'right' answer is leading — pitfall 1."},
 {t:"case",q:"“How much food do you think the average family throws away in a week?” — the cleanest fix is to ask instead…",
  opts:[["Roughly how much food YOUR household threw away last week, in kg bands with a 'Not sure' option",1],["The exact same question but with a 0–100 slider",0],["The same question, asked twice for reliability",0],["Nothing — respondents clearly know the national average",0]],
  why:"Workshop Q8. Respondents can report their own behaviour, not the average family's; define the unit and give an honest escape hatch."},
 {t:"case",q:"A frequency scale reads: Never / Frequently / Sometimes / Rarely. The flaw and fix are…",
  opts:[["The labels are out of logical order — re-sequence Never / Rarely / Sometimes / Frequently or switch to numeric bands per month",1],["The scale has too few points — add ten more",0],["Frequencies must never be asked — delete the question",0],["The flaw is that 'Never' is negative",0]],
  why:"Workshop Q2. Ordered response categories are what make frequency data sortable; numeric bands (0 / 1–2 / 3–5 / 6+) remove all label ambiguity."},
 {t:"case",q:"Bands for daily screen time read: 0 / 1–3 / 4–10 / 10–14 / More than 14 hours. The defect is…",
  opts:[["Overlap at the boundary — a student with exactly 10 hours fits both '4–10' and '10–14'; bands must be mutually exclusive",1],["There are too few bands",0],["Screen time should be asked in dollars",0],["Nothing is wrong with these bands",0]],
  why:"Boundary overlap forces a 10-hour respondent to choose arbitrarily between two boxes — the pitfall the example survey's Q12 demonstrates live."},
 {t:"case",q:"“How much do you earn?” as a bare open question will most likely produce…",
  opts:[["Refusals, rounding chaos and item-level abandonment — biasing every analysis that uses income toward those comfortable disclosing it",1],["Perfect data because everyone loves this question",0],["Answers that are too precise to analyse",0],["No effect whatsoever on response quality",0]],
  why:"Workshop Q9. Sensitive items need banded ranges, 'Prefer not to say', and optional placement — otherwise non-response bias hits exactly this variable."},
 {t:"multi",q:"Which of the following are real pitfalls from the workshop's critique list? Select all that apply.",
  opts:[["Leading / loaded wording",1],["Double-barrelled questions",1],["Vague or undefined terms",1],["Unordered or unbalanced scales",1],["Asking one clear thing at a time",0]],
  why:"The first four are on the pitfall taxonomy. 'One clear thing at a time' is the fix pattern, not a pitfall."},
 {t:"case",q:"Your team's questionnaire asks “Don't you agree the university should run more events?” Another group says it's leading. The strongest defence-or-fix move is…",
  opts:[["Concede and rewrite neutrally: “The university provides enough social events for new students (Strongly disagree → Strongly agree)” — the data then means the same thing for every respondent",1],["Insist it's fine because you agree with it",0],["Change it to “Do you agree…?” because dropping 'don't' fixes leading",0],["Delete the topic entirely",0]],
  why:"Removing 'don't' still leaves an agree-demand stem; the fix is a neutral statement plus a balanced scale — the critique template's move 4."},
 {t:"single",q:"In the Cortana case, the observation that preceded the interviews established…",
  opts:[["That residents rely heavily on staff for medication and understaffing makes medication late — motivating the smart-pill-dispenser idea and the mobility questions",1],["That residents refused to use any technology",0],["That staff wanted fewer residents",0],["That Cortana was already installed in the home",0]],
  why:"Observations found the medication-delay problem; interviews then explored routines, medication challenges, smart-assistant experience and mobility in depth."},
 {t:"multi",q:"Which case details are stated in the Cortana study? Select all that apply.",
  opts:[["15 residents were interviewed, aged 60–80",1],["The resident group was 8 male and 7 female",1],["10 staff members were interviewed",1],["Interviews were conducted face-to-face at the nursing home and audio recorded",1],["Residents were paid $100 each",0]],
  why:"The first four appear in the case text. No payment is mentioned anywhere."},
 {t:"single",q:"Sarah kept her guiding questions open and started with board games and hobbies. Together these show…",
  opts:[["Rapport-building plus open questions that let participants 'open up and provide meaningful answers'",1],["A structured interview with a comprehensive list",0],["That the schedule was ignored entirely",0],["Deception of the participant",0]],
  why:"The case explicitly links open guiding questions to meaningful answers, and the general warm-up questions to rapport — the craft rules in action."},
 {t:"single",q:"“Interviews were once the domain of professional practice” but now pervade news, talk shows, documentaries and job seeking — this observation is attributed to…",
  opts:[["David Silverman (1993), who called modern culture an 'interview society'",1],["William Hudson (2003)",0],["The Belmont Report",0],["SurveyMonkey's 2026 study",0]],
  why:"Silverman 1993 is the citation on the interview slides. It matters because research interviews exploit the public's fluency with 'playing the interview game'."},
 {t:"single",q:"Before deciding on research interviews, the lecture says to ask four things. Which is NOT one of them?",
  opts:[["Which transcription vendor is cheapest",1],["What is your research topic / what do you wish to explore or explain",0],["What are your research questions",0],["What is the purpose of your research, and what might represent knowledge or evidence",0]],
  why:"The four checks are topic, research questions, purpose, and what counts as knowledge/evidence. Vendors come much later."},
 {t:"single",q:"Ontology, in the lecture's example, is what changes when you study sexism as…",
  opts:[["Attitudes versus as discourse versus as institutions — different concepts/categories of the phenomenon, each demanding different questions",1],["A 5-point versus a 7-point scale",0],["A survey versus the same survey online",0],["Ethics-approved versus exempt",0]],
  why:"Ontology = the concepts and categories of the subject area and their relations. The sexism example shows one word hiding three different studies."},
 {t:"case",q:"A researcher uses an interview protocol to guide the conversation, incorporates conversational aspects, and wants flexibility to dig deeper. This is a…",
  opts:[["Semi-structured respondent interview",1],["Structured interview",0],["Unstructured informer interview",0],["Focus group",0]],
  why:"'Protocol guides' + 'conversational' + 'flexibility' is the slide's semi-structured definition; structured would be rigid with a comprehensive list."},
 {t:"multi",q:"Which are listed as ADVANTAGES of interviews? Select all that apply.",
  opts:[["Flexible — the line of inquiry is modifiable",1],["Benefit from non-verbal communication",1],["Get 'behind' the immediate response (the why)",1],["Usable with relatively little prior knowledge of a situation",1],["Always cheaper than questionnaires",0]],
  why:"The first four are the slide's advantage list. Cost goes the other way — interviews are time-consuming and therefore expensive."},
 {t:"multi",q:"Which are listed as DISADVANTAGES of interviews? Select all that apply.",
  opts:[["Not standardised (for semi-structured and unstructured forms)",1],["Not replicable (for any form)",1],["Time-consuming, therefore expensive — typically face-to-face",1],["Recruitment can be challenging, and analysis takes time and effort",1],["They can never be used with sensitive topics",0]],
  why:"Unstructured interviews are actually recommended FOR sensitive topics — that's an advantage. The other four are the slide's exact cost list."},
 {t:"case",q:"A participant says: “The self-checkout is annoying.” Which follow-up is a genuine probe rather than a leading or closed question?",
  opts:[["“Tell me more — what happened last time you used it?”",1],["“You find it annoying because it's slow, right?”",0],["“Would you say it's very annoying or extremely annoying?”",0],["“Do you prefer staffed checkouts, yes or no?”",0]],
  why:"Probes elicit elaboration, clarification or examples without steering. The other options supply the answer, force a closed choice, or narrow the scale."},
 {t:"case",q:"In a 10-minute practice interview, where should “Is there any shopping technology you would NOT be willing to use?” sit, and why?",
  opts:[["Late — sensitive/line-drawing content goes after trust is built, before the catch-all close",1],["First — it hooks attention",0],["Nowhere — hypothetical questions are banned",0],["In the consent preamble",0]],
  why:"The funnel ordering: rapport → broad/grand tour → specifics → sensitive late → catch-all. Boundary questions are the trust topic's core."},
 {t:"case",q:"Your interviewee answers a grand-tour question with three interesting threads, but your schedule says 'next question'. Best practice is to…",
  opts:[["Follow the thread with a probe, then return to the schedule — the schedule guides, it does not command",1],["Ignore the threads and read the next question verbatim",0],["Abandon the schedule entirely and free-associate",0],["Correct the interviewee for going off-topic",0]],
  why:"Semi-structured interviewing is protocol-guided, not protocol-bound. The flexibility to chase answers is precisely the advantage over structured surveys."},
 {t:"case",q:"Which pre-interview statement satisfies the workshop's requirement for the practice interview?",
  opts:[["“This is for an ITI5125 exercise, takes 10 minutes, I'll record it for the teaching team only, you can skip anything or stop anytime — okay to record?”",1],["“Let's start.”",0],["“Sign here or you fail the unit.”",0],["“Don't worry about what the recording is for.”",0]],
  why:"Even without a formal consent form in the exercise, the interviewer must state purpose, data fate, voluntariness and get a verbal yes before recording."},
 {t:"case",q:"The observer notes the interviewer nodded vigorously and said “Exactly!” after every answer. The methodological problem is…",
  opts:[["Interviewer feedback trains the interviewee to perform — neutral reactions keep answers honest",1],["Nodding improves data quality",0],["The observer should have nodded instead",0],["Nothing — encouragement is a listed advantage",0]],
  why:"Engaging is listed as a participant-experience advantage, but during answers the interviewer must stay neutral; visible approval biases subsequent responses."},
 {t:"case",q:"Your participant goes quiet for six seconds after a probe. The skilled move is to…",
  opts:[["Stay silent and let them think — filling pauses kills reflection",1],["Repeat the question louder",0],["Ask a yes/no question to break the tension",0],["Answer for them to be helpful",0]],
  why:"Tolerating silence is a conduct rule: the pause is often where the considered, honest answer forms. Filling it short-circuits that."},
 {t:"single",q:"On the ITI5125 consent form, what does the clause “I understand that my name will not be deliberately shared with the teaching team” provide?",
  opts:[["De-identification — the transcript is marked without the participant's name, so marking can proceed without exposing identity",1],["Payment for participation",0],["A guarantee the audio is published",0],["Permission to skip the interview",0]],
  why:"It's the pseudonymisation promise: data is viewed by the teaching team for marking, but identity is deliberately withheld."},
 {t:"case",q:"A participant signs the consent form but later emails: “Actually, please withdraw my interview.” Under the form's terms you must…",
  opts:[["Honour the withdrawal if names have not yet been removed and marking has not commenced — the form defines exactly this deadline",1],["Ignore the email because a signature is permanent",0],["Publish the transcript faster",0],["Ask the teaching team to grade the participant lower",0]],
  why:"The withdrawal clause is bounded but real: up to the point names are removed and marking starts, withdrawal must be honoured; after that the data can no longer be separated."},
 {t:"single",q:"Which transcript excerpt is intelligent verbatim?",
  opts:[["“I use the app because, um, I can't be — I can't be bothered writing a list” → “I use the app because I can't be bothered writing a list”",1],["“Uses app, hates lists.” (one-line summary)",0],["“[Participant spoke about grocery applications]” (edited paraphrase)",0],["The audio file itself, unlabelled",0]],
  why:"Intelligent verbatim = every word, fillers and false starts lightly cleaned. Option 2 is a summary, option 3 is an edited paraphrase — neither is a faithful analysis transcript."},
 {t:"case",q:"The provided example survey opens: “The survey is completely anonymous” (Q1) and three questions later asks “What is your full name?” (Q2). Best description:",
  opts:[["An internal contradiction that undermines both the anonymity claim and informed consent — drop the name or drop the claim",1],["A clever attention check",0],["Perfectly fine because the name is optional in spirit",0],["A leading question",0]],
  why:"Claiming anonymity while collecting direct identifiers is a design self-contradiction — respondents can't trust the instrument, and 'anonymous' is then false in any ethics statement."},
 {t:"case",q:"In the example survey, Q11 asks “Why are assignments so hard and how do you manage to complete them?” with options “I don't study enough / material is complex / deadlines are tight”. The stacked problems are…",
  opts:[["Loaded premise (assumes assignments ARE hard) + double-barrelled (why hard + how managed) + exhaustive-looking options that all blame the respondent, leaving disagreement nowhere to go",1],["Too many demographic questions",0],["The scale is unordered",0],["Nothing — this is a model question",0]],
  why:"Three pitfall patterns in one item, exactly what the critique template trains you to unpack: loaded stem, two asks, and a closed list with no legitimate refusal position."},
 {t:"data",q:"Your group's pilot: 10-question draft gets 220/400 completions; 40-question draft gets 10% fewer. About how many completions would the long draft get from 400?",
  opts:[["About 198 — a 10% drop from 220",1],["About 210",0],["About 180",0],["About 240",0]],
  why:"10% of 220 is 22; 220 − 22 = 198. The reading's practical message: ten extra minutes of questions costs you a tenth of your data."},
 {t:"case",q:"A researcher wants every faculty represented proportionally in a student survey. Best approach?",
  opts:[["Stratified sampling — create faculty strata and randomly sample within each in proportion to size",1],["Cluster sampling — randomly choose two faculties and survey all their students",0],["Systematic sampling of the whole enrolment list",0],["Voluntary link on the student portal",0]],
  why:"Proportional subgroup representation is the definition of stratified sampling. Cluster randomly discards whole subgroups; voluntary links self-select."},
 {t:"case",q:"Ordered enrolment list of 5,000 students; random start at #137; then every 100th student is emailed the survey. This is…",
  opts:[["Systematic sampling — random start plus a fixed sampling interval (k = 100)",1],["Simple random sampling",0],["Stratified sampling",0],["Quota sampling",0]],
  why:"Random start + every k-th element = systematic. Its one danger is a hidden list pattern sharing the interval's period."},
 {t:"single",q:"The key difference between cluster and stratified sampling is…",
  opts:[["Stratified samples individuals WITHIN every stratum; cluster randomly selects WHOLE groups and surveys everyone inside the chosen ones",1],["They are two names for the same method",0],["Cluster requires a complete list of individuals; stratified does not",0],["Stratified is non-probability; cluster is probability",0]],
  why:"Both are probability methods, but stratification guarantees within-group representation while clustering trades precision for fieldwork savings."},
 {t:"multi",q:"Sort these into probability vs non-probability. Which are NON-probability? Select all.",
  opts:[["Convenience sampling",1],["Snowball sampling",1],["Purposive sampling",1],["Quota sampling",1],["Systematic sampling",0],["Stratified sampling",0]],
  why:"Convenience, snowball, purposive and quota all lack known selection probabilities. Systematic and stratified are probability methods built on a frame."},
 {t:"case",q:"A market-researcher fixes targets of 40 men and 40 women, then surveys the first 80 shoppers who agree at one mall. This is…",
  opts:[["Quota sampling — subgroup targets filled by whoever is available; it is NON-probability despite looking like stratified",1],["Stratified random sampling",0],["Cluster sampling",0],["Simple random sampling",0]],
  why:"Quotas look like strata but the filling is convenience, so selection probabilities are unknown. The quiz loves this contrast."},
 {t:"case",q:"Daniela's one-time COVID snapshot vs re-surveying the same respondents monthly for a year. The two designs are…",
  opts:[["Cross-sectional (one point in time) vs longitudinal (same people re-measured across waves)",1],["Longitudinal vs cross-sectional",0],["Both cross-sectional",0],["Both censuses",0]],
  why:"One snapshot = cross-sectional; following the same people = longitudinal (panel). Order matters in the answer as much as in the design."},
 {t:"single",q:"A 0–10 scale anchored only at its ends by bipolar adjectives ('Extremely bad ····· Extremely good', example survey Q10) is a…",
  opts:[["Semantic differential",1],["Likert scale",0],["Dichotomous item",0],["Ranking task",0]],
  why:"Bipolar adjective poles = semantic differential. A Likert item states a single claim to agree/disagree with, not two opposite adjectives."},
 {t:"multi",q:"Which of these are CLOSED question forms? Select all that apply.",
  opts:[["Dichotomous (Yes/No)",1],["Single-answer multiple choice",1],["Multi-select checklist",1],["Likert rating",1],["Free-text essay box",0]],
  why:"The first four all offer fixed response options. A free-text box is open-ended — richer, but the analysis cost is why Daniela rationed it."},
 {t:"case",q:"The SETU course-evaluation survey is emailed to all students but only some click the link. The sampling is best described as…",
  opts:[["Voluntary self-selection — the keen and the dissatisfied over-answer, so results skew away from the silent satisfied majority",1],["Simple random sampling",0],["Stratified sampling",0],["Census, because everyone was invited",0]],
  why:"Inviting everyone is not sampling everyone: respondents select themselves in. Non-response bias, not coverage, is the defect."},
 {t:"case",q:"Classify all three items: (1) “What is your faculty?” (2) “How often do you back up your files?” (3) “The uni's IT support responds quickly.”",
  opts:[["(1) factual/demographic, (2) behavioural, (3) attitudinal — and (3) wants a Likert scale, (2) a frequency scale, (1) categories",1],["All three are demographic",0],["(1) attitudinal, (2) factual, (3) behavioural",0],["All three are behavioural",0]],
  why:"Who you are = factual/demographic; what you do = behavioural (frequency scale); what you think = attitudinal (agreement scale). Match form to class."}
];

/* ---------- STEP-THROUGH PLAYERS ---------- */
const PLAYERS={
 scan5:{title:"The 5-scan question critique — run every survey question through this",steps:[
  {t:"Scan 1 · Is it leading or loaded?",d:"Any value words, prestige appeals ('most doctors think…'), or agree-demands ('don't you agree')? If yes, strip them and state the claim neutrally. Workshop Q4 and Q7 die here."},
  {t:"Scan 2 · Is it one question or two?",d:"Multiple asks fused with 'and'/'how…and…' = double-barrelled. Split it. Workshop Q1 and Q5 die here."},
  {t:"Scan 3 · Can the respondent actually know?",d:"'How much does the average family throw away?' — they can't. Convert to own behaviour with a bounded timeframe and a defined unit. Workshop Q8 dies here."},
  {t:"Scan 4 · Are the options clean?",d:"Check order (low→high), exhaustiveness ('Other'/'None'), exclusivity (no boundary overlap like '4–10 / 10–14'), and balanced anchors for scales. Workshop Q2 and the example survey's Q12 die here."},
  {t:"Scan 5 · Is it sensitive, and is it protected?",d:"Income, ethnicity, health, cheating: band it, add 'Prefer not to say', justify why it's asked, and place it late. Workshop Q9, Q10 and the example survey's Q16 live or die here."}
 ],quiz:[
  {t:"case",type:"single",q:"Run the scan: “Most doctors recommend Brand X; how likely are you to switch?”",
   opts:[["Fails Scan 1 — prestige/bandwagon preamble leads the answer; delete it and ask about their own likelihood neutrally",1],["Fails Scan 4 — overlapping bands",0],["Fails Scan 3 — respondent can't know",0],["Passes all five scans",0]],
   why:"The preamble supplies the socially desirable answer before the question is asked. That is Scan 1."}
 ]},
 surv6:{title:"Designing a survey that works — Daniela's pipeline as a reusable recipe",steps:[
  {t:"1 · Fix the goal and the population",d:"What decision will this data inform, and whose views count? Daniela: design a public-health platform → the general public across states/territories."},
  {t:"2 · Choose topics (3–5)",d:"The factors you believe matter, each broad enough for several questions. Daniela: medical conditions, preventive behaviours, system-response perception, public-health awareness."},
  {t:"3 · Pick question forms",d:"Closed multiple-choice first (counts, frequencies, fast analysis); open questions only where the space is unmapped. Keep total time under ~10 minutes."},
  {t:"4 · Build scales and categories",d:"Likert for attitudes/confidence (5-point, labelled anchors); single/multi-choice with WHO-grounded options; always an 'Other' escape."},
  {t:"5 · Pilot the instrument",d:"Run it internally: does it display everywhere, do questions make sense, does it fit the time cap? Fix before the public launch."},
  {t:"6 · Launch, monitor, analyse",d:"Deploy through your channels (ads, panels, email), watch completions, then aggregate and analyse — this wider process is what makes it a survey, not just a questionnaire."}
 ],quiz:[
  {t:"multi",type:"multi",q:"Which steps did Daniela's team perform? Select all.",
   opts:[["Fixed 4 topics before writing questions",1],["Prioritised closed MC and Likert scales",1],["Piloted internally for display, sense and timing",1],["Launched publicly before any pilot",0]],
   why:"The case shows the pipeline executed in order; launching unpiloted is what the pipeline exists to prevent."}
 ]},
 samp5:{title:"Choosing a sampling strategy — five questions that pick the method for you",steps:[
  {t:"1 · Define the population precisely",d:"'All Australians' vs 'Australian adults on Facebook' vs 'first-year IT students at one campus' — each definition opens different doors. Write it down before choosing a method."},
  {t:"2 · Do you have a sampling frame?",d:"A complete list of the population (enrolment register, electoral roll, customer database)? Yes → probability methods are on the table. No → jump to step 4."},
  {t:"3 · Frame available? Pick within the probability family",d:"Plain list, no subgroup worries → simple random or systematic (random start + every k-th). Subgroup balance matters (faculty, sex, age) → stratified. Travel/fieldwork is the big cost → cluster (randomly pick whole groups)."},
  {t:"4 · No frame? Pick within the non-probability family",d:"Hidden or hard-to-reach group → snowball. Need rough subgroup balance fast → quota. Need experts or extreme cases → purposive. Cheapest reach right now → convenience or voluntary links — and say so openly."},
  {t:"5 · Measure and report the bias",d:"Whichever you chose: collect demographics, compare your sample against the population, and state the limits. Daniela's demographics-first design is this step, done properly."}
 ],quiz:[
  {t:"case",type:"single",q:"No list of members exists; the population is hard to reach and recruitment must start from a few trusted contacts. Best fit?",
   opts:[["Snowball sampling — respondents identify further respondents; the standard solution when no frame exists",1],["Simple random sampling",0],["Systematic sampling",0],["Stratified sampling",0]],
   why:"No frame rules out the whole probability family; snowball is built for exactly this recruitment situation."}
 ]},
 int6:{title:"Anatomy of a research interview — before, during, after",steps:[
  {t:"1 · Before — decide and narrow",d:"Answer the four pre-interview questions (topic, RQs, purpose, evidence) and check your epistemological/ontological position. Then narrow the focus with your group — population, context, timeframe."},
  {t:"2 · Before — mini-topics",d:"Partition the narrowed focus into 4–6 named mini-topics, each describable and justifiable. (Workshop 3B Activity 1.)"},
  {t:"3 · Before — schedule with probes",d:"Order questions funnel-style (rapport → grand tour → structural → sensitive late → catch-all), with 2–3 planned probes per question. (Activity 2.)"},
  {t:"4 · During — open well",d:"Consent preamble first: purpose, data fate, voluntariness, verbal yes. Then rapport questions (Vera's board games) before substance."},
  {t:"5 · During — follow the thread",d:"Ask one question at a time; probe for elaboration, examples and meaning; stay neutral; tolerate silence; keep the talk ratio ≤20/80."},
  {t:"6 · After — transcribe and reflect",d:"Recording only becomes data after transcription (intelligent verbatim default). Reflect per role: what worked, what to fix, which schedule items move. (Activities 3–4.)"}
 ],quiz:[
  {t:"single",q:"Which is ordered correctly for the DURING phase?",
   opts:[["Consent preamble → rapport → grand tour → structural probes → sensitive topics → catch-all",1],["Catch-all → consent → sensitive topics → rapport",0],["Rapport → sensitive topics → consent preamble",0],["Any order works identically",0]],
   why:"Trust is built before it's spent: consent and rapport first, sensitive content late, catch-all last."}
 ]},
 sched5:{title:"Ordering a 10-minute interview schedule — the funnel, with a clock",steps:[
  {t:"0:00 · Consent preamble (1 min)",d:"Purpose, data use, voluntariness, verbal yes to record. Write it as item 0 so it can't be skipped."},
  {t:"1:00 · Rapport + grand tour (1–2 min)",d:"Easy opener the participant can't get wrong: 'paint me the picture of how you usually…'. Their vocabulary becomes your vocabulary."},
  {t:"3:00 · Topic 1: structural questions (≈4 min)",d:"Zoom into mini-topic 1: enumerate, contrast, critical incidents. Use planned probes; drop a marked 'flex' question if time tightens."},
  {t:"7:00 · Topic 2: structural + sensitive (≈2–3 min)",d:"Second mini-topic; place its most personal question last within the topic — late placement buys candour."},
  {t:"9:00 · Catch-all close (1 min)",d:"'Is there anything I haven't asked that I should know?' Then thanks, and confirm what happens to the recording."}
 ],quiz:[
  {t:"single",q:"Why does the funnel put sensitive questions late?",
   opts:[["Candour scales with trust — once a participant has successfully described their own experience, they answer personal questions more honestly",1],["Because early questions are always lost to the recorder warm-up",0],["Because ethics rules forbid sensitive questions before minute 8",0],["No reason — it's pure habit",0]],
   why:"The rationale is psychological, not legal: disclosure follows trust. That's also why rapport questions open the schedule."}
 ]}
};

/* ---------- GLOSSARY ---------- */
const GLOSS=[
 ["Survey","The broader term covering a questionnaire plus the whole process: design, delivery/distribution, collection, aggregation and analysis of responses."],
 ["Questionnaire","A written set of questions — the instrument itself. Can stand alone (email signup) but usually sits inside a survey."],
 ["Likert scale","A symmetric rating scale for attitudes (typically 5-point, e.g. 1 = not confident at all … 5 = very confident); odd points allow a neutral middle."],
 ["Closed vs open question","Closed: fixed response options (fast, countable, needs prior knowledge of the space). Open: free text (rich, slow to analyse, good for motives and the unexpected)."],
 ["Leading question","Wording that telegraphs the desired answer (value words, prestige appeals, 'don't you agree'). Measures compliance, not opinion."],
 ["Double-barrelled question","Two questions fused into one; a single answer cannot represent both. Fix: split."],
 ["Double negative","A negation inside an agree/disagree stem ('agree that students should NOT have to…'); respondents mis-parse it. Fix: affirmative statement + balanced scale."],
 ["Acquiescence (yes-bias)","The tendency to agree with statements, amplified by 'Do you agree…' stems. Fix: neutral statements with balanced agree–disagree scales."],
 ["Social desirability bias","Answering to look good rather than to report truth — strongest on sensitive items (income, cheating). Mitigate with bands, anonymity assurances, 'Prefer not to say'."],
 ["Simple random sampling","Every population member has an equal chance of selection; needs a sampling frame."],
 ["Snowball sampling","Existing respondents identify further respondents; the way to reach hidden/hard-to-reach groups, at the cost of network bias."],
 ["Non-response bias","When the people who don't answer differ systematically from those who do; sensitive or long instruments make it worse."],
 ["Pilot study","A dress rehearsal of an instrument with a small friendly sample to catch display problems, unclear questions and timing overruns before real collection."],
 ["Exhaustive & exclusive options","Every respondent can find a box (exhaustive — add 'Other'/'None'), and no respondent fits two boxes (exclusive — no boundary overlap)."],
 ["Prefer not to say","The standard escape hatch for sensitive items; its absence manufactures refusals and lies."],
 ["Interview society","Silverman (1993): interviews pervade modern culture (news, talk shows, job seeking), so people arrive already knowing how to perform them."],
 ["Epistemology","The study of what does and does not constitute knowledge — a 'before you interview' checkpoint alongside your research questions."],
 ["Ontology","The concepts and categories of the subject area and their relations; e.g. sexism as attitudes vs discourse vs institutions implies three different studies."],
 ["Structured interview","Rigid respondent interview with a comprehensive question list; no follow-ups needed; comparable across participants but inflexible."],
 ["Semi-structured interview","A protocol guides but doesn't command; conversational; the default for UX research — flexibility to dig into answers."],
 ["Unstructured interview","Few if any prepared questions; conversation-like; suits sensitive topics and key informers; narratives may redirect the interview."],
 ["Respondent vs informer","Respondent interviews ask participants about themselves; informer interviews ask key informants about a situation or organisation."],
 ["Interview schedule","The ordered list of topics/questions (with probes) that keeps interviews consistent across participants."],
 ["Grand tour question","A broad open question ('walk me through your last…') that lets the participant set the frame and surface what matters to them."],
 ["Probe","A short follow-up that elicits detail without steering: 'Tell me more', 'What do you mean by…?', 'Can you give an example?'"],
 ["Catch-all question","The closing 'anything I haven't asked?' — the safety net for what the schedule didn't anticipate."],
 ["Rapport","Trust built before substance (easy opener questions, neutrality, patience); the currency you spend when asking sensitive questions."],
 ["Verbatim transcription","Every word kept, including fillers, false starts and pauses."],
 ["Intelligent verbatim","Every word kept with fillers and stumbles lightly removed — readable and still faithful; the default for interview analysis."],
 ["Consent form / explanatory statement","The document stating purpose, researcher and investigator identities, what is consented to (participation, recording, transcription), storage, de-identification, voluntariness, withdrawal deadline and data access."],
 ["Matrix question","A grid of rows (items) × columns (scale) that saves space but risks scale ambiguity and rendering bugs; state the time frame explicitly."],
 ["Systematic sampling","Random start on an ordered list, then every k-th member. Beware hidden list patterns matching the interval k."],
 ["Stratified sampling","Population split into subgroups (strata) that matter; random sampling within every stratum, usually proportional — guarantees subgroup representation."],
 ["Cluster sampling","Population split into natural groups (classes, suburbs); whole clusters are randomly chosen and everyone inside is surveyed. Cheaper, less precise."],
 ["Convenience sampling","Whoever is easiest to reach; fast, cheap, almost never representative."],
 ["Purposive (judgemental) sampling","Researcher hand-picks participants believed to be informative — experts, key informants, extreme cases."],
 ["Quota sampling","Target numbers per subgroup filled by whoever is available. Looks like stratified but is non-probability — filling is convenience."],
 ["Voluntary (self-selection) sampling","Respondents opt themselves in (link posts, SETU). The keen and the annoyed over-answer; classic non-response bias."],
 ["Cross-sectional survey","One questionnaire at one point in time — a population snapshot (Daniela's COVID survey)."],
 ["Longitudinal survey","The same people (panel) or repeated population samples measured across waves; shows change but costs time and suffers attrition."],
 ["Dichotomous question","Closed item with exactly two options (Yes/No, True/False); fine for facts and screening, too blunt for attitudes."],
 ["Semantic differential","Attitude scale between two bipolar anchored adjectives ('Impossible to use ····· Extremely easy to use'); each numbered step is ordinal."],
 ["Nominal / ordinal / ratio","Scale levels: nominal = unordered categories (faculty); ordinal = ordered without equal gaps (Likert, frequency); ratio = numbers with a true zero (hours, kg) — the level decides which statistics are legal."]
];

/* ---------- ENGINE ---------- */
function renderQ(q,host,num){
 const card=document.createElement("div");card.className="quiz";
 const top=document.createElement("div");top.className="qtop";
 const tag=document.createElement("span");tag.className="qtag"+((q.type==="multi"||q.t==="multi")?" multi":(q.t==="case"?" case":""));
 tag.textContent=TAGLBL[q.t]||((q.type==="multi"||q.t==="multi")?"Choose all that apply":"Question");top.appendChild(tag);
 if(num){const n=document.createElement("span");n.className="src";n.textContent="Q"+num;top.appendChild(n);}
 card.appendChild(top);
 const qt=document.createElement("div");qt.className="qt";qt.textContent=q.q;card.appendChild(qt);
 if(q.extra){const ex=document.createElement("div");ex.className="qextra";ex.innerHTML=q.extra;card.appendChild(ex);}
 const why=document.createElement("div");why.className="why";why.innerHTML="<b>Why:</b> "+q.why;
 if((q.type==="multi"||q.t==="multi")){
  const picked=new Set();
  q.opts.forEach((o,i)=>{const b=document.createElement("button");b.className="opt";b.textContent=o[0];
   b.onclick=()=>{if(card.classList.contains("done"))return;b.classList.toggle("picked");picked.has(i)?picked.delete(i):picked.add(i);};
   card.appendChild(b);});
  const chk=document.createElement("button");chk.className="btn primary";chk.style.cssText="margin-top:10px;padding:9px 16px;font-size:13.5px";chk.textContent="Check answer";
  chk.onclick=()=>{if(card.classList.contains("done")||picked.size===0)return;card.classList.add("done");
   let allOk=true;
   q.opts.forEach((o,i)=>{const b=card.querySelectorAll(".opt")[i];b.disabled=true;
    if(o[1])b.classList.add("correct");
    if(picked.has(i)&&!o[1]){b.classList.add("wrong");allOk=false;}
    if(o[1]&&!picked.has(i))allOk=false;});
   why.classList.add("show");card.appendChild(why);answered(host,card,allOk);};
  card.appendChild(chk);
 }else{
  q.opts.forEach((o)=>{const b=document.createElement("button");b.className="opt";b.textContent=o[0];
   b.onclick=()=>{if(card.classList.contains("done"))return;card.classList.add("done");
    card.querySelectorAll(".opt").forEach((x,j)=>{x.disabled=true;if(q.opts[j][1])x.classList.add("correct");});
    if(!o[1])b.classList.add("wrong");
    why.classList.add("show");card.appendChild(why);answered(host,card,!!o[1]);};
   card.appendChild(b);});
 }
 return card;
}
function answered(host,card,ok){
 card.dataset.ok=ok?"1":"0";
 if(host&&host._bank){const total=host._bank.length,done=$$(".quiz.done",host).length;
  const bar=$("#"+host._bar);if(bar)bar.style.width=(done/total*100)+"%";
  const stat=$("#"+host._stat);if(stat)stat.textContent=done+" of "+total+" answered";
  if(done===total){const right=$$(".quiz.done",host).filter(c=>c.dataset.ok==="1").length;
   stat.textContent=done+" of "+total+" answered · "+right+"/"+total+" correct";toast("Bank complete — "+right+"/"+total+" correct");}}
 if(host&&host._mock)mockCount();
}

/* mini quizzes */
$$("[data-quiz]").forEach(c=>{const data=QUIZ[c.dataset.quiz];if(!data)return;(Array.isArray(data)?data:[data]).forEach(q=>c.appendChild(renderQ(q,null)));});

/* bank */
function renderBank(hostId,data,bar,stat){const host=document.getElementById(hostId);if(!host)return;host._bank=data;host._bar=bar;host._stat=stat;
 const st=$("#"+stat);if(st)st.textContent="0 of "+data.length+" answered";
 data.forEach((q,i)=>host.appendChild(renderQ(q,host,i+1)));}
Object.assign(QUIZ, QUIZ_EXTRA);
const BANK_ALL = BANK_W3.concat(BANK_W3_EXTRA);
renderBank("bankW3",BANK_ALL,"bankW3bar","bankW3stat");
const bn=$("#bankN");if(bn)bn.textContent=BANK_ALL.length;
const dq=$("#dashQCount");if(dq)dq.textContent=BANK_ALL.length;

/* players */
$$("[data-player]").forEach(box=>{
 const p=PLAYERS[box.dataset.player];if(!p)return;
 const wrap=document.createElement("div");wrap.className="player";
 const top=document.createElement("div");top.className="pt";top.textContent=p.title;wrap.appendChild(top);
 const lab=document.createElement("div");lab.className="psmall";lab.style.cssText="font-size:12px;color:var(--ink3);margin:6px 0";wrap.appendChild(lab);
 const area=document.createElement("div");area.className="pstep";wrap.appendChild(area);
 const dots=document.createElement("div");dots.className="pdots";wrap.appendChild(dots);
 const tt=document.createElement("div");tt.className="pt";tt.style.cssText="font-size:16px;margin:10px 0 2px";wrap.appendChild(tt);
 const bd=document.createElement("p");bd.className="pd";wrap.appendChild(bd);
 const nav=document.createElement("div");nav.className="pnav";wrap.appendChild(nav);
 const back=document.createElement("button");back.className="btn";back.textContent="Back";nav.appendChild(back);
 const next=document.createElement("button");next.className="btn primary";nav.appendChild(next);
 const pq=document.createElement("div");pq.className="pquiz";wrap.appendChild(pq);
 let cur=0;
 const n=p.steps.length;
 const dotEls=p.steps.map(()=>{const d=document.createElement("span");d.className="pdot";dots.appendChild(d);return d;});
 function draw(){
  dotEls.forEach((d,i)=>{d.className="pdot"+(i===cur?" on":i<cur?" done":"");});
  lab.textContent="Step "+(cur+1)+" of "+n;tt.textContent=p.steps[cur].t;bd.textContent=p.steps[cur].d;
  back.disabled=cur===0;back.style.opacity=cur===0?.4:1;
  next.textContent=cur===n-1?"Finish · take checkpoint quiz":"Next step";
 }
 next.onclick=()=>{if(cur<n-1){cur++;draw();}else if(p.quiz&&p.quiz.length){pq.classList.add("show");pq.innerHTML="";p.quiz.forEach(q=>pq.appendChild(renderQ(q,null)));next.disabled=true;next.style.opacity=.4;next.textContent="Checkpoint complete ✓";}};
 back.onclick=()=>{if(cur>0){cur--;draw();}};
 box.appendChild(wrap);draw();
});

/* glossary */
const gl=$("#glossList");
if(gl)GLOSS.forEach(([term,def])=>{const d=document.createElement("details");const s=document.createElement("summary");s.textContent=term;const b=document.createElement("div");b.className="dbody";const p=document.createElement("p");p.className="small";p.textContent=def;b.appendChild(p);d.appendChild(s);d.appendChild(b);gl.appendChild(d);});

/* router */
const SEC_ORDER=["dashboard","w3-overview","w3-surveys","w3-ws3a","w3-interviews","w3-ws3b","w3-craft","w3-assign","w3-sprint","w3-bank","mock","glossary"];
function route(){
 let id=(location.hash||"#dashboard").slice(1);
 if(!document.getElementById(id))id="dashboard";
 $$(".view").forEach(v=>v.classList.toggle("active",v.id===id));
 $$("#drawer a").forEach(a=>a.classList.toggle("active",a.dataset.nav===id));
 window.scrollTo({top:0});
}
window.addEventListener("hashchange",route);

/* drawer */
const drawer=$("#drawer"),scrim=$("#scrim");
$("#burger").onclick=()=>{drawer.classList.add("open");scrim.classList.add("open");};
const closeDrawer=()=>{drawer.classList.remove("open");scrim.classList.remove("open");};
scrim.onclick=closeDrawer;$("#drawerClose").onclick=closeDrawer;
$$("#drawer a").forEach(a=>a.addEventListener("click",closeDrawer));

/* progress */
const PKEY="iti5125.w3.progress.v1";
let prog={};try{prog=JSON.parse(localStorage.getItem(PKEY)||"{}")}catch(e){}
const W3S=["w3-overview","w3-surveys","w3-ws3a","w3-interviews","w3-ws3b","w3-craft","w3-assign","w3-sprint","w3-bank"];
function saveProg(){localStorage.setItem(PKEY,JSON.stringify(prog));}
function refreshProg(){
 const c3=W3S.filter(s=>prog[s]).length;
 $("#pbW3").style.width=(c3/W3S.length*100)+"%";
 $$("#drawer a").forEach(a=>{if(a.dataset.nav)a.classList.toggle("done",!!prog[a.dataset.nav]);});
 const total=W3S.length,done=c3,pct=Math.round(done/total*100);
 const ring=$("#ring"),R=15.5,C=2*Math.PI*R;
 ring.innerHTML='<svg width="38" height="38"><circle cx="19" cy="19" r="'+R+'" fill="none" stroke="var(--chip)" stroke-width="4"/><circle cx="19" cy="19" r="'+R+'" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+(C*(1-pct/100))+'"/></svg><span class="val">'+pct+'%</span>';
 const cb=$("#continueBtn");if(cb){const nxt=SEC_ORDER.find(s=>!prog[s]&&s!=="dashboard"&&s!=="mock"&&s!=="glossary");cb.href="#"+(nxt||"mock");cb.textContent=nxt?"Continue where I left off":"All sections read — take the simulated quiz";}
}
$$(".markread").forEach(b=>b.onclick=()=>{prog[b.dataset.sec]=true;saveProg();refreshProg();toast("Progress saved ✓");});
refreshProg();

/* search */
const SB=$("#searchBox"),SR=$("#searchRes");
const IDX=[];
$$(".view").forEach(v=>{const h=v.querySelector("h2");if(h&&v.id!=="dashboard")IDX.push({id:v.id,title:h.textContent.trim(),txt:v.textContent.toLowerCase()});});
if(SB)SB.oninput=()=>{
 const q=SB.value.trim().toLowerCase();SR.innerHTML="";
 if(q.length<2)return;
 const hits=IDX.filter(e=>e.txt.includes(q)).slice(0,8);
 if(!hits.length){SR.innerHTML='<div class="small" style="padding:8px 4px">No matches — try another keyword.</div>';return;}
 hits.forEach(h=>{const a=document.createElement("a");a.className="sres";a.href="#"+h.id;a.innerHTML="<b>"+h.title.replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</b> · "+(h.txt.split(q)[0]||"").slice(-60)+"…";a.onclick=closeDrawer;SR.appendChild(a);});
};

/* mock quiz */
let MQ=[],mTimer=null,mSecs=20*60;
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function mockCount(){const done=$$("#mockQs .quiz.done").length;$("#mockCount").textContent=done+" / "+MQ.length+" answered";}
function fmt(s){return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");}
function startMock(){
 MQ=shuffle(BANK_ALL.map(q=>({...q,_w:3}))).slice(0,20);
 $("#mockStartCard").style.display="none";$("#mockResult").style.display="none";$("#mockLive").style.display="block";
 const host=$("#mockQs");host.innerHTML="";host._mock=true;host._bank=MQ;
 MQ.forEach((q,i)=>host.appendChild(renderQ(q,host,i+1)));
 mockCount();mSecs=20*60;$("#mockTimer").textContent=fmt(mSecs);
 clearInterval(mTimer);mTimer=setInterval(()=>{mSecs--;$("#mockTimer").textContent=fmt(mSecs);if(mSecs<=0){clearInterval(mTimer);finishMock(true);}},1000);
 window.scrollTo({top:0});
}
function finishMock(auto){
 clearInterval(mTimer);
 const cards=$$("#mockQs .quiz");let right=0,answeredN=0;
 cards.forEach(c=>{if(c.classList.contains("done")){answeredN++;if(c.dataset.ok==="1")right++;}});
 $("#mockLive").style.display="none";$("#mockResult").style.display="block";
 const pct=Math.round(right/MQ.length*100);
 const res=$("#mockResult");res.innerHTML="";
 const card=document.createElement("div");card.className="card";card.style.textAlign="center";
 card.innerHTML='<div class="score-big">'+right+'<span style="font-size:22px;color:var(--ink3)"> / '+MQ.length+'</span></div>'
  +'<p class="small">'+(auto?"Time expired — unanswered questions scored zero.":"Quiz finished.")+' '+answeredN+' answered · '+pct+'% correct</p>'
  +'<p class="small">'+(pct>=80?"Quiz-ready. Keep this level and the weekly quiz is yours.":pct>=60?"Solid — review the rationales below, then retake.":"Revisit the flagged sections, then retake — the bank is your friend.")+'</p>';
 const rb=document.createElement("button");rb.className="btn primary";rb.style.maxWidth="320px";rb.textContent="Retake (new random 20)";rb.onclick=startMock;card.appendChild(rb);
 const gb=document.createElement("a");gb.className="btn";gb.href="#dashboard";gb.textContent="Back to dashboard";gb.style.marginLeft="8px";card.appendChild(gb);
 res.appendChild(card);
 const rev=document.createElement("div");rev.className="card";
 rev.innerHTML="<b>Review</b><p class='small'>Every question with the correct answer and rationale.</p>";
 MQ.forEach((q,i)=>{
  const correctTxt=q.opts.filter(o=>o[1]).map(o=>o[0]).join(" · ");
  const your=cards[i].classList.contains("done")?(cards[i].dataset.ok==="1"?"✅ correct":"❌ wrong"):"⏱ not answered";
  const d=document.createElement("details");const s=document.createElement("summary");
  s.textContent="Q"+(i+1)+" [W3] "+your+" — "+q.q.slice(0,80)+(q.q.length>80?"…":"");
  const b=document.createElement("div");b.className="dbody";
  b.innerHTML='<p class="small"><b>Correct:</b> '+correctTxt.replace(/</g,"&lt;")+'</p><p class="small"><b>Why:</b> '+q.why+'</p>';
  d.appendChild(s);d.appendChild(b);rev.appendChild(d);
 });
 res.appendChild(rev);window.scrollTo({top:0});
}
const ms=$("#mockStart");if(ms)ms.onclick=startMock;
const mf=$("#mockFinish");if(mf)mf.onclick=()=>finishMock(false);

route();
})();
</script>
</body>
</html>
