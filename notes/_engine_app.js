

/* ---------- MINI QUIZZES (inside lessons) ---------- */
const QUIZ = {};

QUIZ.w1o1 = [
 {t:"check", type:"single", q:"Which of these is NOT a stated reason for doing research in the week 1 lecture?",
  opts:[["Solve problems and improve the human condition",0],["Generate new knowledge to drive innovation and prosperity",0],["Guarantee a product's commercial success before building it",1],["Provide intellectual challenge",0]],
  why:"The lecture gives four payoffs: solve problems/improve the human condition, generate new knowledge for innovation and prosperity (including the newer commercial-university role), and intellectual challenge. Guaranteeing commercial success is not research — and no method can guarantee it."}
];

QUIZ.w1r1 = [
 {t:"check", type:"single", q:"A team builds a theory of why users abandon checkout, then gathers data to test it. In the theory–observation loop, gathering the data is…",
  opts:[["theory construction",0],["observation & experiment, providing facts that evaluate the theory",1],["dissemination",0],["literature synthesis",0]],
  why:"The lecture's loop: theories make predictions; observation & experiment supply the facts that confirm, refine or refute. The Rossi–Hall muon experiment is the model example."}
];

QUIZ.w1r2 = [
 {t:"multi", type:"multi", q:"According to the lecture, which flaws are correctly matched to their methods? Select all that apply.",
  opts:[["Lab experiment — cannot study large-scale software development in the lab; too many variables to control",1],["Case study — results may not generalise beyond one project; researcher chooses the questions, biasing the study",1],["Survey — suffers self-selection bias and respondents may say what they think you want",1],["Interview — completely unbiased because it is face-to-face",0]],
  why:"All three classic flaws are lecture content. 'Interviews are unbiased' is false — any single method has weaknesses; that's why triangulation exists."},
 {t:"check", type:"single", q:"The UX article's rule of thumb for quantitative testing of each design option is…",
  opts:[["5+ users",0],["20+ users",1],["100+ users",0],["sample size does not matter for quantitative work",0]],
  why:"The article cites the Nielsen Norman Group balance of science and budget: test each design option with 20+ users. Qualitative work needs far fewer because it chases insight, not numbers."}
];

QUIZ.w1r3 = [
 {t:"check", type:"single", q:"A product team notices low checkout conversion in analytics, then watches session recordings to understand why, then interviews staff in the affected markets. This is best described as…",
  opts:[["pure quantitative research",0],["pure qualitative research",0],["hypothesis-driven mixed usage: quantitative first to find the pain, qualitative to learn why",1],["action research",0]],
  why:"This is the article's own Pikachu example: tracking found the drop-off (quant), session review formed hypotheses (qual), interviews confirmed the payment-option cause (qual). The article's thesis: design research to prove/disprove hypotheses, and mixing is normal."}
];

QUIZ.w1e1 = [
 {t:"check", type:"single", q:"'The well-being of the subject should take precedence over the interests of science and society' — this principle, plus written consent and caution with dependent relationships, comes from…",
  opts:[["The Nuremberg Code (1947)",0],["The Declaration of Helsinki (1960)",1],["The National Statement (2007)",0],["The Belmont Report on AI (2019)",0]],
  why:"That exact sentence is Helsinki 1960. Nuremberg (1947) is the earlier code: informed consent absolutely essential, free to stop, qualified researchers, favourable risk/benefit ratio."}
];

QUIZ.w1e2 = [
 {t:"multi", type:"multi", q:"The four values of ethical research (National Statement) include… Select all that apply.",
  opts:[["Research merit and integrity",1],["Justice",1],["Beneficence",1],["Respect",1],["Profitability",0]],
  why:"The four values are merit & integrity, justice, beneficence, respect. Profitability is never an ethical value in this framework."}
];

QUIZ.w1e3 = [
 {t:"case", type:"single", q:"Scenario: a researcher quietly records employees' screens 'to study workflow' without telling them, and the dataset later leaks with names attached. Which pair of dimensions is directly violated?",
  opts:[["Informed consent and confidentiality",1],["Coercion and deception",0],["Right of withdrawal and vulnerable groups",0],["Illegal practices and beneficence",0]],
  why:"Undisclosed recording violates informed consent (they didn't know what was collected) and the leak violates confidentiality (identity/data not protected). Deception and coercion aren't the core issues here."}
];

QUIZ.w1e4 = [
 {t:"multi", type:"multi", q:"Which situations require EXTRA ethical care (beyond standard consent)? Select all.",
  opts:[["Testing an educational app on young children",1],["A lecturer recruiting her own students for a study",1],["Telling participants they interact with a peer when it is a chatbot",1],["Re-running an anonymous public survey with a new sample",0]],
  why:"Children = vulnerable group (guardian consent + child assent). Own students = dependent relationship (coercion risk). Fake peer = deception (needs justification + debrief). A fresh anonymous survey is standard practice."}
];

QUIZ.w1h1 = [
 {t:"check", type:"single", q:"In Hudson et al. (2003), why was the Wizard-of-Oz approach chosen over building real sensors first?",
  opts:[["Real sensors were too accurate and would have shortened the study",0],["With so much uncertainty, building sensors first risked spending effort on sensors ill-suited to the task; human coding simulated many possible sensors cheaply",1],["Ethics rules banned real sensors in offices",0],["It eliminated the need for participant consent",0]],
  why:"The paper is explicit: given the five open questions (can it work, how, how accurate, which sensors, simplest sensors), simulating sensors via human coding of A/V recordings let them test many sensor combinations before committing to hardware."}
];

QUIZ.w1h2 = [
 {t:"check", type:"single", q:"How was 'true' interruptibility established in the study?",
  opts:[["The researchers inferred it from the video afterwards",0],["Experience sampling — about two random audio prompts per hour asking subjects to self-report interruptibility on a 5-point scale",1],["Coworkers rated each subject's interruptibility daily",0],["Keyboard activity thresholds set by the experimenters",0]],
  why:"Experience sampling (the 'beeper study' method) collected 672 self-reports; the models then predicted those self-reports from the simulated sensor features. Ground truth came from the person, not the camera."}
];

QUIZ.w1h3 = [
 {t:"multi", type:"multi", q:"Which statements about the results are TRUE? Select all that apply.",
  opts:[["Decision trees gave the best accuracy at 78.1% against a 68.0% base rate",1],["Models tailored to individual subjects consistently outperformed the general model",0],["The five-way (1–5) model reached only 45.1% exact accuracy",1],["An 'easiest sensors' model using anyone-talking, phone, keyboard, mouse and time of day still reached 76.5%",1]],
  why:"Personalised models did NOT consistently help (69.1/81.9/74.6/76.0) — small per-person training data was blamed. The other three numbers are straight from the paper."}
];

QUIZ.w1a1 = [
 {t:"check", type:"single", q:"How were family interactions with Alexa captured in Beneteau et al. (2019)?",
  opts:[["Families submitted daily diary entries",0],["A custom audio system saved 1 minute before and 3 minutes after each trigger word, uploaded to a secure server; families could delete clips",1],["The Echo Dot's own cloud history was requested from Amazon",0],["Researchers filmed living rooms with video cameras",0]],
  why:"The custom buffer system (inspired by Porcheron et al.'s open-source code) recorded 4-minute clips around the wake word, with record-a-thought and delete buttons — an ethics feature as much as a data feature."}
];

QUIZ.w1a2 = [
 {t:"multi", type:"multi", q:"Which are Alexa's three signal types that a communication breakdown occurred? Select all.",
  opts:[["Acting on Misunderstanding (AoM)",1],["Neutral Clarification Response (e.g. 'Sorry, I'm not sure')",1],["Specific Clarification Response (e.g. 'Did you mean X?')",1],["Prosodic changes",0]],
  why:"AoM / NR / SR are Alexa's signals (table 4). Prosodic change is a HUMAN repair strategy (table 2) — a classic swapped-category trap."}
];

QUIZ.w1a3 = [
 {t:"case", type:"single", q:"Scenario: after Alexa gives a neutral 'Sorry, I'm not sure', a mother tells her daughter 'try again' and the daughter repeats the question louder. The mother's 'try again' is an example of…",
  opts:[["a discourse scaffold — direct instruction",1],["a repair type — overarticulation",0],["an Alexa signal — specific clarification",0],["code switching",0]],
  why:"Direct instruction (telling a family member what to say) is one of the six discourse scaffolds. The daughter's louder repetition is the repair type (repetition + increased volume). Keeping scaffolds vs repairs straight is the tested skill."}
];

QUIZ.w1a4 = [
 {t:"check", type:"single", q:"The paper's central finding for designers is that…",
  opts:[["families rarely experience breakdowns with Alexa",0],["the burden of repairing breakdowns currently rests on families, and assistants should use specific clarification responses and artificial code-switching to share that burden",1],["voice assistants should avoid asking questions to users",0],["bilingual families had no extra difficulties",0]],
  why:"All 10 families had breakdowns; neutral responses dominate and don't help; children under ~5 and bilingual users struggled most. The design recs: code-switching, discourse scaffolding, specific clarification, joint media engagement."}
];

QUIZ.w1wsa1 = [
 {t:"case", type:"single", q:"Workshop 1A activity 1: your team must decide how many students to interview about family engagement in onboarding. The strongest justification is…",
  opts:[["200+, so results are statistically significant",0],["~6–12, enough to reach thematic saturation — this is an insights (qualitative) study, not a measurement study",1],["exactly 5, because that is the focus-group price",0],["as many as possible within 20 minutes",0]],
  why:"Qualitative sampling stops at saturation (new interviews add no new themes). Sample size follows method logic — a concept the week 2 budget activity makes explicit."}
];

QUIZ.w1wsa2 = [
 {t:"case", type:"single", q:"Activity 2 twist: 20% of interaction timestamps are captured wrongly with no way to reconstruct. What is the correct response?",
  opts:[["Delete the whole dataset and start over",0],["Quantify the corruption, analyse the clean 80% separately, treat corrupted records as missing rather than zero, and avoid fine-grained timing claims",1],["Average the corrupted values with correct ones to smooth the error",0],["Ignore it — 20% is within normal tolerance",0]],
  why:"Data quality bounds your claims. You report and isolate the corruption, avoid analyses the bad data can't support, and triangulate with other sources. Averaging or ignoring would bake bias into every temporal conclusion."}
];

QUIZ.w1wsa3 = [
 {t:"case", type:"single", q:"Activity 3: a 2-minute video must convince an internal review team AND an external developer company that the mentor-family proposal beats the failing auto-match feature. The best content strategy is…",
  opts:[["Full technical detail of the logging pipeline so the external company can reproduce it",0],["Lead with the problem, 1–2 headline numbers plus anonymised interview quotes, the proposal, and a concrete ask — offer method detail separately",1],["No data at all, to keep it short",0],["A dramatic re-enactment with actors replacing all evidence",0]],
  why:"Mixed audience = findings and implications first, evidence as headline numbers + human quotes, decision ask at the end. Method detail goes in an appendix for whoever needs it."}
];

QUIZ.w1wsb1 = [
 {t:"case", type:"single", q:"A lecturer tells students they must join his study to receive good grades. Which dimension is engaged, and what is the correct fix?",
  opts:[["Coercion — participation must be genuinely voluntary and clearly not affect grades",1],["Deception — debrief them after grades are released",0],["Informed consent — students must know the hypothesis",0],["Vulnerable groups — wait until they graduate",0]],
  why:"Authority over grades removes free refusal — that's coercion (the workshop's own example). The fix is voluntary recruitment with explicit no-grade-impact wording, not debriefing or delay."}
];

QUIZ.w1wsb2 = [
 {t:"case", type:"single", q:"In the Hudson audit, the handling of 54 unanswered self-report prompts (classified as 'least interruptible') was criticised because…",
  opts:[["No-response data should always be deleted immediately",0],["Automatically assigning a state to people who didn't answer may misrepresent them; better to treat them as missing unless justified, with sensitivity analysis",1],["54 is too small a number to matter",0],["The coders were not blind to the hypothesis",0]],
  why:"The workshop's sample answer: retain as missing by default, run sensitivity analyses, document transparently. The authors did check (most non-responders were on the phone) — but the default must be missing, not a guessed state."}
];

QUIZ.w1wsb3 = [
 {t:"case", type:"single", q:"You are writing the ethics proposal to repeat Hudson at Monash with 20 staff. For the RECRUITMENT process, which document set is the tutors' model answer?",
  opts:[["Research protocol with inclusion/exclusion criteria; recruitment email/invitation; Participant Information Statement; Informed Consent Form + consent log; scheduling/recruitment log",1],["A single consent form — everything else is optional",0],["Only the final dataset, to prove the study worked",0],["The funding application",0]],
  why:"The workshop decomposes recruitment into 5 sub-processes (eligibility → approach → information → consent → scheduling), each with its own people and documents. An excellent application shows the committee every sub-process, person and document."}
];

QUIZ.w2o1 = [
 {t:"check", type:"single", q:"Which pairing of paper to contribution is correct?",
  opts:[["X-Raydar — fairness audit",0],["Underdiagnosis paper — open-source comprehensive classification",0],["DCL — dynamic knowledge graph + contrastive learning for report generation",1],["Underdiagnosis paper — NLP label extraction",0]],
  why:"X-Raydar = comprehensive classification + open source; Nature Medicine = fairness audit; DCL = report generation with a dynamic graph. Mixing these up is the obvious wrong-answer pattern."}
];

QUIZ.w2l1 = [
 {t:"check", type:"single", q:"A systematic literature review that maps the latest state of a field (without supporting one specific project) is which type of review?",
  opts:[["Context review",0],["Survey of research in a field",1],["Meta-review",0],["Annotated bibliography",0]],
  why:"Surveys (including systematic reviews) define the state of the field or resolve conflicting evidence. Context reviews support YOUR study; meta-reviews review other reviews."}
];

QUIZ.w2l2 = [
 {t:"check", type:"single", q:"The week 2 lecture's verdict on chronological literature reviews in IT/CS is…",
  opts:[["They are the gold standard for IT",0],["They make it easy to reach the most important recent concepts quickly",0],["They are not generally considered appropriate in IT/CS; thematic is preferred, often with chronological order inside themes",1],["They are banned by the National Statement",0]],
  why:"Chronological shows idea development but is slow to reach key current concepts; the lecture says IT/CS generally prefers thematic, with a thematic-overall/chronological-within hybrid as common practice."}
];

QUIZ.w2l3 = [
 {t:"multi", type:"multi", q:"A good stand-alone review's CONCLUSION should… Select all that apply.",
  opts:[["Summarise the major themes that emerged",1],["Identify areas of controversy, strengths and weaknesses (gaps, weak frameworks)",1],["Formulate questions needing further research and connect the topic to the larger field",1],["Introduce every source again in full detail",0]],
  why:"Intro defines scope and criteria; body clusters and synthesises in your own words with minimal quotes; conclusion summarises, critiques and points to future work. Re-describing sources belongs in the body — once."}
];

QUIZ.w2m1 = [
 {t:"check", type:"single", q:"'Quantitizing' data means…",
  opts:[["converting quantitative results into narratives",0],["converting qualitative data into numerical codes so it can be analysed statistically",1],["deleting outliers from a dataset",0],["mixing two datasets into one spreadsheet",0]],
  why:"Qualitized = quant results → narrative, analysed qualitatively. Quantitized = qual data → numeric codes → statistics. The direction trips people up."}
];

QUIZ.w2m2 = [
 {t:"check", type:"single", q:"In Tashakkori & Teddlie's scheme, MULTI-method research is best described as…",
  opts:[["mixing qualitative and quantitative at every stage of one study",0],["using both qualitative and quantitative procedures but applied principally within quantitative, often theory-driven studies",1],["reviewing other researchers' methods",0],["a synonym for mixed model research",0]],
  why:"Multi-method ≈ mainly quantitative with both procedure types. Mixed methods = genuine combination in parallel or sequential phases. Mixed model = mixing in all stages (questions, methods, collection, analysis, inferences)."},
];

QUIZ.w2m3 = [
 {t:"check", type:"single", q:"In mixed-methods triangulation, when qualitative and quantitative results DIVERGE, the correct interpretation is…",
  opts:[["the study has failed and must be discarded",0],["divergence is not inherently damaging — it can reveal a more holistic picture and force productive revision of initial concepts",1],["the quantitative result is always right",0],["the qualitative result is always right",0]],
  why:"Denzin's point: convergence strengthens validity, but divergence can be informative and productive — it may be the reconciliation of the two paradigms showing you something new."}
];

QUIZ.w2c1 = [
 {t:"case", type:"single", q:"Scenario: the company wants 'increased efficiency AND improved user experience'. Which split of research questions is best configured?",
  opts:[["One question: is the system good?",0],["RQ1 (why): what friction do students hit during enrolment/timetabling and how does it affect satisfaction/completion? RQ2 (what/where): where do delays, errors and drop-offs occur in the workflow, per the logs?",1],["RQ1: which vendor system is cheapest? RQ2: which developer is fastest?",0],["No research questions — buy an analytics dashboard",0]],
  why:"Broad goals must decompose into narrow answerable questions, typically one why (people) and one what/where (logs). 'Is the system good?' is unanswerable as stated."}
];

QUIZ.w2c2 = [
 {t:"case", type:"single", q:"Mid-project, management asks you to cut one week. Which cut does the LEAST damage to the study?",
  opts:[["The analysis phase — findings can be presented raw",0],["The piloting — instruments can be tested on the fly",0],["The reporting buffer — shrink slide polish and rehearsal, never the dependency chain recruitment→collection→transcription→analysis",1],["Recruitment — fewer participants never hurts",0]],
  why:"The chain is a dependency chain: analysis depends on transcription depends on collection depends on recruitment. Cut the end polish (buffer, video, slides) before touching the evidence pipeline."}
];

QUIZ.w2c3 = [
 {t:"data", type:"single", q:"Broadcast recruitment costs $1/approach with a 5% completion rate. What is the effective cost per completed survey?",
  extra:"<table class='tb'><tr><th>Channel</th><th>Cost/approach</th><th>Completion</th></tr><tr><td>Broadcast</td><td>$1</td><td>5%</td></tr><tr><td>Targeted</td><td>$5</td><td>15%</td></tr><tr><td>In-person</td><td>$10</td><td>80%</td></tr></table>",
  opts:[["$1",0],["$20",1],["$5",0],["$0.05",0]],
  why:"Effective cost = price ÷ completion rate = $1 ÷ 0.05 = $20. Targeted = $33, in-person = $12.50 — the cheapest per completion AND the only channel where specific diversity can be requested."}
];

QUIZ.w2c4 = [
 {t:"multi", type:"multi", q:"Petrol prices rise: in-person recruitment is now $15/approach (80% completion), interviews $125, focus groups $10/participant. Which statements follow? Select all that apply.",
  opts:[["In-person effective cost rises to $15 ÷ 0.8 = $18.75 per completion — no longer the cheapest channel",1],["Broadcast remains the diversity channel of choice",0],["You should re-run the whole allocation with the new numbers rather than keeping the old plan",1],["The completion-rate formula no longer applies",0]],
  why:"Recompute: in-person $18.75 (was $12.50). Broadcast still has NO diversity. The formula is unchanged — the inputs changed. A good plan is re-planned when prices move."}
];

QUIZ.w2x1 = [
 {t:"check", type:"single", q:"Why did X-Raydar need the X-Raydar-NLP component at all?",
  opts:[["To translate reports into other languages",0],["Manually labelling 1.9M images was infeasible, so an NLP model (trained on 23,230 manually annotated reports) extracted the 37-finding labels from the historical free-text reports",1],["To encrypt patient data",0],["To generate the final radiology reports",0]],
  why:"The NLP turns existing reports into training labels at scale. X-Raydar-NLP: RoBERTa, semi-supervised, 0.921 sensitivity / 0.994 specificity / 0.990 AUC on its 4,551-report test set. Report generation is DCL's job, not this paper's."}
];

QUIZ.w2x2 = [
 {t:"check", type:"single", q:"On the 1,427-image consensus set, X-Raydar vs the historical (time-pressured) radiologists showed…",
  opts:[["balanced accuracy 0.763 vs 0.678 — a +13.3% improvement, with the gap narrowest for critical findings (+5.6%)",1],["balanced accuracy equal on all 37 findings",0],["inferior performance on the majority of findings",0],["sensitivity lower than the human reporters",0]],
  why:"At a 0.50 threshold the model traded specificity (0.904 vs 0.979) for much higher sensitivity (0.623 vs 0.378). Superior on 27 findings, non-inferior on 9, inferior on 1 (paraspinal mass, n=3)."}
];

QUIZ.w2x3 = [
 {t:"multi", type:"multi", q:"Which are genuine limitations the X-Raydar authors themselves state? Select all that apply.",
  opts:[["The consensus ground truth is small (1,427 images), so some findings have tiny sample sizes",1],["Potential model bias by ethnicity, sex or socioeconomic status was NOT studied because data were unavailable",1],["Only radiologists in three UK hospital networks were compared",1],["The model was validated exclusively on UK data",0]],
  why:"MIMIC-CXR is a US external set — generalisation was actually tested. The other three are stated limitations; the bias gap is exactly what paper 2 investigates."}
];

QUIZ.w2b1 = [
 {t:"check", type:"single", q:"In the underdiagnosis paper, 'underdiagnosis' is operationalised as…",
  opts:[["the false NEGATIVE rate of disease labels",0],["the false POSITIVE rate of the 'No Finding' label — sick patients falsely declared healthy",1],["the overall AUC gap between datasets",0],["the number of missing labels in the training data",0]],
  why:"A false positive on 'No Finding' = a sick patient declared healthy = no treatment. Underdiagnosis rate = FPr of 'No Finding'. Overdiagnosis = FNr (healthy flagged sick)."}
];

QUIZ.w2b2 = [
 {t:"multi", type:"multi", q:"The paper's evidence that the effect is SELECTIVE bias rather than general noise includes… Select all that apply.",
  opts:[["Under-served groups show high 'No Finding' FPr WITHOUT a matching rise in FNr — the two move inversely",1],["Intersectional groups (e.g. Hispanic female, 0–20 & Medicaid) are hit harder than either group alone",1],["The pattern is consistent across MIMIC-CXR, CheXpert and the combined ALL dataset",1],["The model's overall AUC was below random chance",0]],
  why:"If it were undirected noise, FPr and FNr would rise together. Instead under-served groups are aggressively flagged healthy while overdiagnosis stays lowest for privileged groups. AUCs were normal (0.80–0.86)."}
];

QUIZ.w2d1 = [
 {t:"multi", type:"multi", q:"How does DCL's dynamic graph differ from earlier fixed knowledge graphs? Select all that apply.",
  opts:[["It adds nodes or redefines relations per case, using knowledge extracted from the top-3 retrieved similar reports",1],["It uses RadGraph triplets (suggestive of / located at / modify) discovered via Stanza entity extraction",1],["It remains frozen after pre-construction",0],["Its encoder uses the adjacency matrix as a visible mask so nodes only influence linked nodes",1]],
  why:"All true except freezing — the whole point is that the graph updates per case. Fixed graphs couldn't cover dataset-specific keywords and let unrelated organs influence each other."}
];

QUIZ.w2d2 = [
 {t:"check", type:"single", q:"Why does the DCL paper treat CIDEr as more meaningful than BLEU for report generation?",
  opts:[["CIDEr is easier to compute",0],["BLEU rewards n-gram overlap, which biased datasets let models game by repeating frequent sentences; CIDEr rewards topic terms and penalises frequent ones",1],["BLEU cannot be computed on medical text",0],["CIDEr measures inference speed",0]],
  why:"The paper explicitly warns that CRG systems can score well on BLEU by parroting common sentences. CIDEr (captioning metric) weights terminology and penalises repetition — hence DCL's SOTA CIDEr 0.586 (IU-Xray) is the headline."}
];

QUIZ.w2s1 = [
 {t:"check", type:"single", q:"The studio guide's key rule for choosing synthesis-matrix column headings is…",
  opts:[["Copy the papers' section headings for consistency",0],["Use concepts you identify as important to the topic — never just replicate the section headings of the papers",1],["Always use alphabetical order of authors",0],["One column per author biography",0]],
  why:"Headings must come from the concepts you're comparing (task, data, method, limits…), not from 'Introduction/Methods/Results'. Copying section headings produces description, not synthesis."}
];

QUIZ.w2s2 = [
 {t:"check", type:"single", q:"Reading the abstracts of papers that CITE your seed paper is called…",
  opts:[["backward snowballing",0],["forward snowballing",1],["chronological review",0],["meta-reviewing",0]],
  why:"Backward = references your seed cites; forward = newer papers citing your seed. Both are how a 3-paper starter set grows into a literature base."}
];

QUIZ.w2s3 = [
 {t:"multi", type:"multi", q:"Which are legitimate indicators of literature quality from the studio guide? Select all that apply.",
  opts:[["Venue — strength and fit of the publication outlet",1],["Citations — how much and by whom, in what publications",1],["Authors — track record in the research area",1],["Paper length — longer is always better",0]],
  why:"Venue, citations and authors are the three indicators. Length says nothing; a short paper in Nature Medicine outranks a long one in an unreviewed outlet."}
];

/* ---------- WEEK 1 BANK (30) ---------- */
const BANK_W1 = [
 {t:"single", q:"Which definition element appears in BOTH the Bennett (1991) and Leedy & Ormrod (2013) definitions of research?",
  opts:[["That it is systematic",1],["That it uses surveys",0],["That it is funded",0],["That it involves human participants",0]],
  why:"Both definitions centre on 'systematic' enquiry/process. Neither requires surveys, funding, or humans — those are design choices."},
 {t:"single", q:"The Rossi–Hall muon experiment appears in the lecture as an example of…",
  opts:[["a failed theory",0],["observation confirming a theory's novel, previously unobserved prediction (time dilation)",1],["an ethics violation",0],["a survey method",0]],
  why:"Muons travelling >0.99c decayed slower than their half-life predicts; counts at two altitudes qualitatively confirmed special relativity's novel prediction — the ideal theory–observation loop."},
 {t:"multi", q:"Which of the following are research methods named in the lecture? Select all that apply.",
  opts:[["Observation",1],["Experiment",1],["Simulation",1],["Focus group",1],["Profit analysis",0]],
  why:"The lecture's list: observation, experiment, design, simulation, survey, interview, focus group, case study, action research. Profit analysis is not a research method."},
 {t:"single", q:"'Engineers are doers, scientists are thinkers' — in the lecture's contrast, engineers prefer…",
  opts:[["explicit knowledge",0],["contingent knowledge and designing artefacts",1],["to avoid theories entirely",0],["qualitative methods only",0]],
  why:"Science: explicit knowledge, experiments to test theories, thinkers. Engineering: contingent knowledge, design artefacts using theories, doers."},
 {t:"single", q:"A researcher interviews 8 experts to understand WHY a system fails. The week 1 framework classifies this as…",
  opts:[["quantitative research",0],["qualitative research — why & how questions, insights over numbers",1],["simulation",0],["action research",0]],
  why:"Why/how + small sample + insight = qualitative. The UX article: qualitative methods deal with why & how and don't need large samples."},
 {t:"single", q:"The Nuremberg Code's absolute requirement is…",
  opts:[["written consent only",0],["informed consent — participants must also be free to stop at any time, with qualified researchers and a favourable risk/benefit ratio",1],["payment for participation",0],["ethics committee approval in all cases",0]],
  why:"Nuremberg 1947: informed consent is absolutely essential; freedom to stop; qualified researchers; favourable risk/benefit. Written consent is Helsinki's emphasis."},
 {t:"multi", q:"'Justice' in the National Statement's four values means… Select the best description.",
  opts:[["Inclusion and recruitment of participants is fair",1],["Benefits are fairly distributed",1],["Outcomes are accessible to participants",1],["Every participant must be paid equally",0]],
  why:"Justice = fair recruitment, fair distribution of benefit, accessible outcomes. Equal payment is not the value being described."},
 {t:"single", q:"Under 'beneficence', researchers must…",
  opts:[["maximise the scientific value at any cost",0],["ensure potential benefit justifies risk, participants understand risks, and researchers remain responsible",1],["avoid all risk, even trivial",0],["publish positive results only",0]],
  why:"Beneficence = benefit must justify risk/harm, participants understand risks, researchers are responsible. It manages risk; it doesn't require zero risk."},
 {t:"case", q:"SCENARIO: researchers test a VR horror experience on first-year students without warning, and the door is locked 'to preserve immersion'. Which dimensions are breached?",
  opts:[["Psychological harm (no warning/support) and right of withdrawal (cannot leave)",1],["Only copyright",0],["Confidentiality and justice",0],["None — immersive methods are exempt",0]],
  why:"Distressing content without warning = psychological harm; locked door = no withdrawal. Both need explicit mitigation: warnings, support, free exit."},
 {t:"case", q:"SCENARIO: a study scrapes a public Facebook group's political comments, then a paper quotes the 'hostile' ones with usernames visible. The week 1B workshop flags…",
  opts:[["Nothing — public means free to use",0],["Consent (users never agreed to research use), confidentiality (authors identifiable), and psychological harm (authors exposed to abuse)",1],["Only illegal practices",0],["Only data ownership",0]],
  why:"This is the workshop's Example 2. Public visibility is not consent to research; publishing identifiable 'hostile' quotes endangers the authors."},
 {t:"case", q:"SCENARIO: you must repeat Hudson's interruptibility study at Monash with 20 staff. Managers offer to nominate 'cooperative' employees. The ethical problem is…",
  opts:[["It is perfectly efficient",0],["Recruitment must be voluntary and managers must not know who declined — employment relationships create coercion pressure",1],["It violates copyright",0],["It is deception and therefore always allowed",0]],
  why:"The workshop's Activity 3 consideration: staff must not feel pressured by the employment relationship or the researcher's authority; managers shouldn't know who declined."},
 {t:"single", q:"In Hudson et al. (2003), the 128 'simulated sensors' were produced by…",
  opts:[["128 physical sensors installed in offices",0],["human coders logging 23 event types from recordings, expanded into time-window variants (Imm, All-1, Any-1, All-5, Any-5, Count-5)",1],["self-report diaries",0],["keyboard loggers only",0]],
  why:"23 coded event types × window variants = 128 features. The human-as-sensor trick is the Wizard-of-Oz core."},
 {t:"single", q:"The information-gain ranking of individual sensors showed the strongest predictors were…",
  opts:[["desk touches and food",0],["occupant talk and telephone — holding 8 of the top 9 positions",1],["door position and day of week",0],["monitor gaze alone",0]],
  why:"Talk and telephone dominate (interruption while speaking is socially unacceptable; phone calls can't include you via eye contact). Then sit/stand, guest talking, keyboard/monitor."},
 {t:"single", q:"'Base accuracy' of 68% in the Hudson paper means…",
  opts:[["the accuracy of a random guess",0],["the accuracy of always predicting 'interruptible' — the trivial baseline the models must beat",1],["the accuracy of human observers",0],["the target accuracy set by the funders",0]],
  why:"Base rate = majority-class predictor. Decision trees reached 78.1% vs this 68.0% baseline; that 10-point gain over base is the real achievement."},
 {t:"multi", q:"Which privacy protections did Hudson's setup include? Select all that apply.",
  opts:[["A keyboard key to temporarily disable recording",1],["Retroactive destruction of any recording period on request, before viewing",1],["Cameras positioned on the work area and door",0]],
  why:"The pause key and retroactive deletion are the paper's stated protections (workshop 1B checks them). Camera placement is a RISK (captures visitors), not a protection."},
 {t:"case", q:"SCENARIO: your replication of Hudson logs 54 prompts where the participant is present but doesn't answer. The most defensible treatment is…",
  opts:[["Code them all as 'most interruptible' to be safe",0],["Treat as missing by default, justify any imputation, and run sensitivity analyses",1],["Delete those days entirely",0],["Guess based on keyboard activity",0]],
  why:"Hudson classified non-responses as least interruptible (usually on phone/with guest, and removing them barely changed accuracy). The ethical-analysis best practice remains: missing by default + sensitivity analysis."},
 {t:"single", q:"Beneteau et al. (2019) is best classified as…",
  opts:[["a lab experiment",0],["a qualitative four-week field study using inductive coding, validated by speech-language pathologists",1],["a randomised controlled trial",0],["a simulation study",0]],
  why:"Naturalistic home deployment, interviews, 14.5h of audio, open coding of 59 breakdowns, SLP validation — textbook qualitative field study."},
 {t:"single", q:"How many families, and for how long, did the Alexa study run?",
  opts:[["5 families for 1 week",0],["10 diverse families for 4 weeks, with pre/post home interviews",1],["50 families for 1 year",0],["20 families for 2 weeks",0]],
  why:"10 families (income at/below county median, never owned an assistant, child aged 4–17, 2 bilingual), Echo Dot for 4 weeks, US$100 gift cards, kept the device, IRB approved."},
 {t:"case", q:"SCENARIO: a 4-year-old says 'Alexa, count to ten in Spanish' and Alexa translates the word 'count'. The paper uses this to show…",
  opts:[["the child's speech disorder",0],["Alexa's pragmatic deficit — she is literal, cannot code-switch to the user's language or context, and misses the social use of language",1],["that bilingual homes should avoid voice assistants",0],["a neutral clarification response",0]],
  why:"Family J's example: 'count to ten in Spanish' gets a translation of 'count'. Like the untranslated jokes and the Spanish singer's name, it shows Alexa has no pragmatics — no adaptation to communication partner or context."},
 {t:"single", q:"The Alexa study's design recommendations include all EXCEPT…",
  opts:[["artificial code-switching to the speaker",0],["specific clarification responses instead of neutral ones",0],["designing for joint media engagement (the whole family, not one user)",0],["making assistants more literal to reduce ambiguity",1]],
  why:"The recs are MORE social intelligence (code-switching, scaffolding, specific clarification, joint engagement) — the opposite of 'more literal'."},
 {t:"single", q:"Workshop 1A activity 2: which study design family did the workshop slides point to for comparing the new family-matching feature against the existing product?",
  opts:[["Feasibility study",0],["Comparative study",1],["Pure literature review",0],["Meta-review",0]],
  why:"With a feature in use by 20% of clients and detailed logs for both cohorts, the natural design is a comparative (A/B-style) study of metrics between cohorts."},
 {t:"case", q:"SCENARIO (workshop 1A activity 2): the dev team can build exactly ONE more logging metric before testing. The strongest choice is…",
  opts:[["A prettier dashboard for managers",0],["A cohort/feature identifier linking each interaction to the feature version and family-match exposure — without it the impact comparison cannot be computed",1],["Server CPU temperature",0],["Number of UI colours",0]],
  why:"The analysis needs a clean link between exposure (feature on/off) and behaviour. Without that identifier you can't attribute any difference to the feature — correlation needs a defined comparison."},
 {t:"multi", q:"Which documents belong to the CONSENT sub-process of recruitment in the Hudson-replication proposal? Select all that apply.",
  opts:[["Participant Information Statement (PIS)",1],["Informed Consent Form + consent log",1],["Explanatory statement for colleagues who share the office",1],["Data retention schedule",0]],
  why:"PIS, consent form/log and the colleagues' explanatory statement are the workshop's consent-row documents. Retention belongs to data curation."},
 {t:"case", q:"SCENARIO: in your replication, two coders will analyse the videos. What did workshop 1B's analysis-process documentation include for quality?",
  opts:[["Nothing — coding is judgment, not process",0],["A coding manual/codebook, coder training records, and an inter-coder agreement report from double-coding a sample",1],["Only the final spreadsheet",0],["The ethics approval number",0]],
  why:"Analysis quality = codebook + training records + inter-coder agreement report (Hudson reported 93.4% agreement on 5% double-coded data). Ethics approval belongs to the proposal, not analysis QA."},
 {t:"single", q:"A participant asks to withdraw two weeks in, after some data was anonymised and merged. Per workshop 1B, the correct handling is…",
  opts:[["Refuse — withdrawal is never possible",0],["Explain the documented withdrawal process honestly: what can still be removed, what can't after anonymisation/publication, and action the deletions that are possible",1],["Delete the entire study",0],["Pretend the request never arrived",0]],
  why:"Right of withdrawal includes honest limits: data irreversibly anonymised or already published may be unremovable — the process must say so up front and do everything still possible."},
 {t:"single", q:"Which statement about the week 1 definition of research is TRUE?",
  opts:[["Any internet search counts as research",0],["Research may expand OR verify existing knowledge — verification studies are research too",1],["Research must always discover something entirely new",0],["Only university staff can do research",0]],
  why:"Bennett's definition explicitly includes expanding/VERIFYING existing knowledge. Systematic + purposeful is the test, not novelty, job title, or tool used."},
 {t:"multi", q:"Which of these are 'poor practices' flagged in the ethics workshop slides? Select all that apply.",
  opts:[["Data fabrication for conference travel grants",1],["Publishing without checking who has access to the data",1],["Piloting your instrument before full collection",0],["Keeping a consent log",0]],
  why:"The slides' fraud case: AI-fabricated pneumonia research presented in Copenhagen to obtain travel grants. Poor curation/access practice is the second flag. Piloting and consent logs are GOOD practice."},
 {t:"case", q:"FINAL SCENARIO: your team designs a study where students are told a new tutoring chatbot is 'another student' for the first session, to measure natural interaction. Choose the complete ethical assessment.",
  opts:[["Fine — deception is always acceptable",0],["Deception requiring explicit justification and ethics approval, with debriefing afterwards; the benefit must outweigh the loss of informed consent",1],["Illegal in all jurisdictions",0],["Only a confidentiality issue",0]],
  why:"Deception is not automatically banned, but it overrides informed consent, so it needs justification, committee approval, and debriefing — exactly the workshop's framing of the 'student who is actually a chatbot' example."}
];


BANK_W1.push(
 {t:"case", q:"SCENARIO: a colleague proposes studying office productivity by reading everyone's email 'because it is already on the server'. Your response, in week 1 terms:",
  opts:[["Great — existing data is free",0],["Invasion of privacy and a consent failure: collection must be necessary, proportionate and disclosed; emails exceed what the research question needs",1],["Only a copyright question",0],["Fine if the IT department approves",0]],
  why:"'Already collected' does not mean 'consented for this use'. Proportionality and disclosure are the tests — the workshop's own privacy-dimension scenario (scraping private messages)."},
 {t:"single", q:"Experience sampling, as used by Hudson et al., is best described as…",
  opts:[["asking participants once at the end",0],["eliciting in-situ self-reports at random intervals during normal activity (the 'beeper study' method)",1],["sampling participants from an experience pool",0],["sampling only expert users",0]],
  why:"Experience sampling collects self-reports in the moment of everyday life — here ~2 random audio prompts/hour — avoiding recall bias."}
);

/* ---------- WEEK 2 BANK (35) ---------- */
const BANK_W2 = [
 {t:"single", q:"The three moves a literature review makes with published work are…",
  opts:[["summarise, synthesise, explore boundaries",1],["copy, paste, cite",0],["introduce, interrupt, conclude",0],["collect, spend, file",0]],
  why:"Synthesise relevant work, summarise recent advances and implications (state of the art), explore the boundaries of previous work — the lecture's exact trio."},
 {t:"single", q:"A review of reviews (meta-review) is most appropriate when…",
  opts:[["you have exactly three papers",0],["the field's body of work is very large (e.g. health research)",1],["you want to avoid reading anything",0],["only when required by law",0]],
  why:"Meta-reviews sit above other reviews/meta-analyses; the lecture's example is health, where the literature is huge. Your studio trio is far too small for one."},
 {t:"multi", q:"Which belong in the INTRODUCTION of a stand-alone literature review? Select all that apply.",
  opts:[["Define and identify the topic and why the review exists",1],["Point to general trends in what has been published",1],["Explain the criteria used to analyse and compare articles",1],["Group articles into thematic clusters",0]],
  why:"Clustering belongs to the BODY. The intro sets scope, trends and evaluation criteria."},
 {t:"single", q:"'Students often start chronological and transition to thematic' — why, according to the lecture?",
  opts:[["chronological is required for ethics approval",0],["chronological matches how you first read the field; thematic reflects a mature conceptual model of the problem",1],["thematic is cheaper",0],["markers prefer alphabetical",0]],
  why:"The lecture's observation: early reading is date-ordered, so early drafts are chronological; as your conceptual model forms, themes take over. Common final form: thematic with chronology inside themes."},
 {t:"case", q:"SCENARIO: your review column headings are 'Introduction / Methods / Results / Discussion' — one per paper. What's wrong?",
  opts:[["Nothing — that is the IMRaD standard",0],["You've replicated the papers' section headings, which produces description, not synthesis; headings must be concepts relevant to your topic",1],["The order should be alphabetical",0],["You need more colours",0]],
  why:"The studio's first rule: never copy section headings. Concept headings (task, data, method, ground truth, limits) force comparison across papers."},
 {t:"single", q:"Forward snowballing means…",
  opts:[["reading a paper's reference list",0],["finding and screening papers that cite your seed paper",1],["reviewing your own older drafts",0],["citing more papers than anyone else",0]],
  why:"Backward = what your seed cites; forward = what cites your seed. Both grow a starter set systematically."},
 {t:"single", q:"Which is the STRONGEST quality indicator for a venue, per the studio guide's spirit?",
  opts:[["High volume of papers",0],["Rigorous peer review and reputation in the field",1],["Long history of accepting your group",0],["Open-access fees",0]],
  why:"Venue quality = peer-review rigour and standing in the field (Lancet Digital Health, Nature Medicine, CVPR). Volume, favours and fees aren't quality."},
 {t:"single", q:"Qualitative paradigms are typically associated with…",
  opts:[["deductivism, positivism and causality",0],["inductive approaches, constructivism and socially constructed realities",1],["randomised control trials",0],["null hypothesis testing",0]],
  why:"Qual: inductive, constructivism, meaning/process, textual data. Quant: deductive, positivism, variables, causality. The encyclopedia's core contrast."},
 {t:"single", q:"'Fitness for purpose' in pragmatist mixed-methods means…",
  opts:[["choosing the cheapest method",0],["choosing methods by their ability to answer the research question in its actual context — what works",1],["always mixing both paradigms equally",0],["fitting the funder's preference",0]],
  why:"Pragmatism: paradigms are malleable; methodological decisions follow what best serves the question and context, not philosophical loyalty."},
 {t:"multi", q:"Which are differences between the three design families (Tashakkori & Teddlie)? Select all that apply.",
  opts:[["Multi-method — both procedure types, principally within quantitative studies",1],["Mixed methods — qual + quant in parallel or sequential phases, mixing in questions and inferences",1],["Mixed model — mixing in ALL stages including questions, collection, analysis",1],["They are interchangeable synonyms",0]],
  why:"Each term is distinct; 'interchangeable synonyms' is the trap. Mixed MODEL is the most thoroughly integrated."},
 {t:"single", q:"A hypothesis-driven team runs qualitative interviews first to shape concepts, then large-scale quantitative tests to check they generalise. This sequencing is…",
  opts:[["forbidden by the paradigm wars",0],["a normal mixed-methods design — exploratory qual first, confirmatory quant second",1],["multi-method research",0],["a meta-review",0]],
  why:"Sequential exploratory mixing is textbook mixed methods (also the UX article's recommended flow). Paradigm wars is the outdated objection, not the rule."},
 {t:"single", q:"A good research question for the student-administration scenario must be…",
  opts:[["broad enough to cover everything",0],["narrow and answerable — distinct questions that lead to insight",1],["written by management verbatim",0],["unrelated to available data",0]],
  why:"'Improve the system' is unanswerable; the activity's core skill is decomposing it into distinct, answerable questions (one why + one what/where is the classic split)."},
 {t:"case", q:"SCENARIO: your $3000 plan needs 35 survey completers. Broadcast gives 5% completion at $1/approach. How many approaches do you buy for exactly 25 broadcast completions?",
  opts:[["25",0],["500",1],["50",0],["250",0]],
  why:"Approaches × rate = completions → approaches = 25 ÷ 0.05 = 500, costing $500. The model budget adds ~67 targeted approaches ($335) for ~10 more completers as a diversity floor."},
 {t:"data", q:"Using the workshop price table: you need 6 interviewees and will recruit in person (80% completion, $10/approach). Approaches and cost?",
  extra:"<table class='tb'><tr><th>Channel</th><th>$/approach</th><th>Completion</th></tr><tr><td>In-person</td><td>$10</td><td>80%</td></tr></table>",
  opts:[["6 approaches, $60",0],["7.5 → round up to 8 approaches, $80",1],["5 approaches, $50",0],["48 approaches, $480",0]],
  why:"6 ÷ 0.8 = 7.5 → always round UP (you can't approach half a person): 8 × $10 = $80. Rounding down leaves you short of completers."},
 {t:"multi", q:"Why does the model budget DROP deep-learning log analysis ($500/300 users)? Select all that apply.",
  opts:[["It requires clean data — $600 of cleaning for this dataset, ~$1,100 total",1],["The research questions need WHY (people), not detailed WHERE metrics",1],["Statistical analysis on dirty data answers the what/where question for $200",1],["Deep learning is unethical",0]],
  why:"The reasoning earns marks: dependency (cleaning bill), question fit, and the cheaper substitute. 'Unethical' is nonsense — it's a budget/logic choice."},
 {t:"case", q:"SCENARIO: management wants the $500 video AND the $300 slides AND in-depth analysis of all interviews, but the total exceeds $3000. The defensible cut is…",
  opts:[["Cut the interviews entirely",0],["Cut the video (lowest insight-per-dollar); keep slides + report; if buffer survives, buy in-depth analysis for the 2 richest interviews only",1],["Cut the survey",0],["Cut transcription and guess themes",0]],
  why:"Protect the evidence pipeline; cut communication polish first. The answers file: video dropped, slides kept, report kept (written findings outlive the talk), selective in-depth upgrade if budget allows."},
 {t:"multi", q:"Which statements about piloting are supported by the configuring-research materials? Select all that apply.",
  opts:[["Pilot the survey on ~5 students before full rollout",1],["Mock-interview one participant before real interviews",1],["Piloting rewrites instruments before real collection — that's its purpose",1],["Piloting is mandated by the ethics board in all cases",0]],
  why:"Pilots test instrument quality (wording, length, flow). Ethics covers consent/privacy — piloting is a methods decision, not a legal mandate."},
 {t:"single", q:"Stratifying student participants by year level, domestic/international, full/part-time is done primarily to…",
  opts:[["increase the sample size",0],["avoid hearing only one kind of student (e.g. tech-comfortable volunteers) — diversity of perspective",1],["reduce cost",0],["satisfy the AGM",0]],
  why:"Stratification is a guard against self-selection bias — the same survey-flaw logic from week 1."},
 {t:"single", q:"In the X-Raydar taxonomy, findings were grouped by criticality into…",
  opts:[["two levels: benign and serious",0],["three levels: critical, urgent, non-urgent",1],["five levels by organ",0],["no grouping was used",0]],
  why:"37 radiological findings across 8 anatomical areas, each tagged critical/urgent/non-urgent, plus 8 report-specific (technical) labels = 45 categories."},
 {t:"single", q:"X-Raydar-NLP was trained on…",
  opts:[["1.9 million manually annotated reports",0],["23,230 manually annotated reports (via the AnnotateX tool), tested on 4,551 held-out reports",1],["zero annotated reports — fully unsupervised",0],["the MIMIC-CXR labels only",0]],
  why:"Manual annotation of everything was infeasible; 23,230 annotated reports trained the RoBERTa labeler semi-supervised, then it labelled the whole dataset."},
 {t:"multi", q:"Which test sets were used to evaluate X-Raydar? Select all that apply.",
  opts:[["Auto-labelled set, n=103,328 (NLP labels)",1],["Consensus set, n=1,427 (two radiologists + third for disagreement)",1],["MIMIC-CXR external set, n=252,374, no fine-tuning",1],["A live prospective clinical trial",0]],
  why:"All three are retrospective test sets. No prospective trial — a stated limitation and the reason the paper positions X-Raydar as a second reader, not a replacement."},
 {t:"case", q:"SCENARIO: a quiz shows you X-Raydar's consensus AUC 0.864 vs auto-labelled 0.919. The best explanation is…",
  opts:[["the model got worse over time",0],["the consensus set is stricter human ground truth (so scores are honestly lower), while the auto set shares the NLP's labelling method — test-set construction changes the score",1],["the auto set is larger so it must be harder",0],["AUC is unrelated to labelling",0]],
  why:"Same model, three scores: 0.919 (auto, same labeller as training) &gt; 0.864 (human consensus, stricter) &gt; ~0.842 (external MIMIC). Ground-truth method is a variable in every benchmark."},
 {t:"single", q:"The +13.3% balanced-accuracy improvement over historic reporters is best interpreted as…",
  opts:[["proof AI beats radiologists in ideal conditions",0],["evidence the model exceeds the level of real-world, time-constrained reporting — suggesting value as a second reader and for more comprehensive reports",1],["evidence radiologists are careless",0],["a calculation error",0]],
  why:"The authors are careful: the benchmark is historical under-reporting in practice, not unconstrained expert performance; intended roles are second-reader + comprehensiveness."},
 {t:"single", q:"Underdiagnosis, as defined in the Nature Medicine paper, is…",
  opts:[["falsely claiming a healthy patient is sick",0],["falsely claiming a sick patient is healthy — an FP on 'No Finding' — delaying treatment",1],["any model error",0],["a low AUC",0]],
  why:"That's why it's uniquely harmful: the patient gets NO treatment when they need it most. Overdiagnosis (FN on 'No Finding') is the mirror image."},
 {t:"data", q:"In the CXR dataset, which subgroup pattern did the bias paper find? (Recall: underdiagnosis = 'No Finding' FPr.)",
  extra:"<table class='tb'><tr><th>Subgroup</th><th>Underdiagnosis pattern</th></tr><tr><td>Female vs male</td><td>higher in one…</td></tr><tr><td>0–20 vs 40–60</td><td>higher in one…</td></tr><tr><td>Medicaid vs other insurance</td><td>higher in one…</td></tr></table>",
  opts:[["Higher for male, 40–60, private insurance",0],["Higher for female, 0–20, Medicaid — with intersectional groups (e.g. Hispanic female) hit hardest",1],["Identical across all subgroups",0],["Higher only for patients over 80 in all datasets",0]],
  why:"Female, Black, Hispanic, under-20 and Medicaid patients were underdiagnosed more; intersections compound. The &gt;80 exception belongs to the small NIH subset only."},
 {t:"single", q:"The inverse relationship between 'No Finding' FPr and FNr across under-served groups proves…",
  opts:[["the model is generally noisy",0],["selective underdiagnosis — these groups are aggressively flagged healthy WITHOUT a corresponding rise in false-sick errors",1],["the labels are perfect",0],["fairness is achievable by thresholding",0]],
  why:"Undirected noise would raise both error types together. One-directional error = systematic bias, consistent with bias amplification from clinical records."},
 {t:"single", q:"'Bias amplification' in the paper means…",
  opts:[["the model creates bias from nothing",0],["labels extracted from clinical records already contain human underdiagnosis — the model learns and magnifies that existing error",1],["researchers amplified their speakers",0],["the dataset was enlarged",0]],
  why:"Clinical notes are not neutral ground truth; models trained on them risk systematising and scaling the very disparities documented in care."},
 {t:"multi", q:"According to the bias paper, post-hoc fairness fixes (per-group thresholds for equal FPr/FNr) are problematic because… Select all that apply.",
  opts:[["They can require deliberately WORSENING performance for some subgroups — ethically unclear",1],["They need group membership known at decision time",1],["Fairness metrics are not simultaneously satisfiable when base rates differ (impossibility results)",1],["They are always illegal",0]],
  why:"All three are the paper's stated caveats — plus the note that equal-FPr-only thresholds can still induce large FNr disparities. 'Illegal' overstates it; the point is ethical and technical."},
 {t:"single", q:"DCL retrieves the top-n similar reports per image in order to…",
  opts:[["copy their text into the output",0],["extract case-specific knowledge (Stanza entities → RadGraph triplets) that adds nodes or redefines relations in the dynamic graph",1],["evaluate BLEU scores",0],["de-identify the data",0]],
  why:"Retrieval feeds graph construction: entities from the top-3 similar reports become triplets that update the per-case graph. The queue holds 65,536 (MIMIC) / 1,380 (IU) report representations."},
 {t:"multi", q:"Which training objectives does DCL combine? Select all that apply.",
  opts:[["Report generation loss (L-RG)",1],["Image–Report Contrastive loss (L-IRC)",1],["Image–Report Matching loss (L-IRM)",1],["Reinforcement reward from radiologists",0]],
  why:"Total loss = L-RG + L-IRC + L-IRM. The multimodal encoder used for IRM is training-only; ablations show IRC contributes more than IRM."},
 {t:"single", q:"Removing pretrained weights from DCL's ViT collapses performance because…",
  opts:[["GPUs overheat",0],["Transformers lack CNN-style inductive biases and generalise poorly on small, unbalanced data — pretraining supplies what the dataset can't",1],["SciBert refuses to tokenise",0],["RadGraph triplets expire",0]],
  why:"The paper's ablation (setting f): transformers need pretrained inductive bias when data is scarce and skewed — a key lesson for any ML-methods quiz."},
 {t:"single", q:"On MIMIC-CXR, DCL's clinical-efficacy F1 of 0.373 vs MGSK's 0.371 is best described as…",
  opts:[["a crushing 10-fold improvement",0],["a small but state-of-the-art edge, with the larger claim carried by CIDEr (0.281) on descriptive accuracy",1],["a regression",0],["unmeasurable",0]],
  why:"CE metrics are close across SOTA systems; DCL's differentiation is CIDEr (topic accuracy, anti-parroting) plus the dynamic-graph mechanism itself."},
 {t:"case", q:"FINAL SCENARIO: your literature review on chest-X-ray AI has exactly three seed papers (X-Raydar, bias, DCL). Your tutor asks for the strongest single synthesis insight. The best answer is:",
  opts:[["The three papers use identical methods",0],["They form a loop: X-Raydar opensources comprehensive detection while admitting bias is unstudied; the bias paper shows NLP-labelled models systematically underdiagnose under-served groups — and both rely on the same NLP-labelling paradigm the bias paper warns about; DCL then extends the pipeline from labels to free-text reports",1],["DCL came first chronologically",0],["They should never be cited together",0]],
  why:"Cross-paper synthesis = connecting contributions AND methods (shared NLP labelling) AND gaps (bias unstudied → bias measured). That's synthesis-matrix thinking at its best."}
];

/* ---------- two more W2 bank items (35 total) ---------- */
BANK_W2.push(
 {t:"case", q:"SCENARIO: your 3-month plan hits week 5 and transcription is running late. Applying the dependency chain, the first thing to protect is…",
  opts:[["The AGM slide design",0],["Analysis time downstream — because transcription feeds analysis, absorb the delay inside the reporting buffer rather than skipping analysis or cutting collection quality",1],["The focus-group room booking",0],["The pilot study",0]],
  why:"Dependencies flow forward: recruitment → collection → transcription → analysis → report. A delay upstream must be absorbed at the flexible end (buffer/polish), never by deleting the middle links."},
 {t:"data", q:"Targeted recruitment is $5/approach at 15% completion. Budgeting $335 buys how many approaches and roughly how many survey completers?",
  opts:[["67 approaches → about 10 completers",1],["335 approaches → 50 completers",0],["45 approaches → 7 completers",0],["335 approaches → 500 completers",0]],
  why:"$335 ÷ $5 = 67 approaches; 67 × 0.15 ≈ 10 completions. This is the model budget's 'diversity floor' block — broadcast alone cannot provide diversity."}
);

/* ---------- STEP-THROUGH PLAYER DATA ---------- */
const PLAYERS = {
 proc5:{title:"The research process in IT — 5 steps", steps:[
   {t:"Identify the problem or question", d:"Start from a real problem or curiosity. Vague goals ('improve the system') get refined into narrow, answerable questions."},
   {t:"Review the literature", d:"Find out what's known: terminology, existing solutions, gaps. This is where week 2's literature-review skills plug in."},
   {t:"Design the study", d:"Choose methods that fit the questions — qual, quant, or mixed — and plan instruments, participants, ethics and budget (configuring research)."},
   {t:"Collect and analyse data", d:"Run the plan: recruit, collect, clean, code, compute. Pilot first — every instrument gets tested before full rollout."},
   {t:"Report and disseminate", d:"Communicate findings to the audience that needs them, at the depth they need — paper, report, video, AGM slides."}],
  quiz:[{t:"check",type:"single",q:"A sequencing question: which order is correct?",
   opts:[["Report → design → collect → literature → question",0],["Question → literature → design → collect & analyse → report",1],["Literature → report → collect → question → design",0],["Collect → question → design → report → literature",0]],
   why:"You can't design before you know the field, and you can't report before you have findings. Question first, dissemination last."}]},
 ethics4:{title:"The four values of ethical research", steps:[
   {t:"Research merit & integrity", d:"The research is justifiable, uses appropriate methods, is run by qualified researchers, and is conducted with integrity. No merit → no ethics approval."},
   {t:"Justice", d:"Who participates and who benefits must be fair: recruitment is equitable, benefits and burdens are fairly distributed, outcomes are accessible to participants."},
   {t:"Beneficence", d:"Potential benefit must justify risk or harm; participants must understand the risks; researchers remain responsible for minimising harm."},
   {t:"Respect", d:"Privacy, confidentiality and cultural sensitivities are honoured; vulnerable participants get specific protection; consent is informed and ongoing."}],
  quiz:[{t:"check",type:"single",q:"A study is scientifically excellent but recruits only from the researcher's own well-off network while claiming to speak for all students. Which value is weakest?",
   opts:[["Merit & integrity",0],["Justice",1],["Beneficence",0],["Respect",0]],
   why:"Fair inclusion/recruitment and fair distribution of benefits are justice issues — the sample can't support claims about everyone."}]},
 litreview3:{title:"Anatomy of a stand-alone literature review", steps:[
   {t:"Introduction", d:"Define and identify the topic; establish WHY the review exists; point to general trends in what's been published; explain the criteria you'll use to analyse and compare articles."},
   {t:"Body", d:"Group articles into thematic clusters (possibly chronological or methodological within themes); proceed logically cluster to cluster; emphasise findings in YOUR OWN words — quotes to an absolute minimum."},
   {t:"Conclusion", d:"Summarise major themes; identify controversies, strengths and weaknesses (gaps, weak frameworks, methodological problems); formulate questions for future research and connect the topic to the larger field."}],
  quiz:[{t:"multi",type:"multi",q:"Which belong in the BODY? Select all.",
   opts:[["Grouping articles into thematic clusters",1],["Logical progression from cluster to cluster",1],["Explaining why the review exists",0],["Minimal quotation, own-words synthesis",1]],
   why:"'Why the review exists' is intro work. The body is where clustering, ordering and synthesis happen."}]},
 mmhist:{title:"Four periods of research history (Denzin & Lincoln)", steps:[
   {t:"Traditional — 1900–1950", d:"Quantitative methodology and positivism dominate the social sciences, though mixed practice quietly exists (e.g. interviews alongside observation — the Hawthorne studies)."},
   {t:"Modernist — 1950–1970", d:"Positivism loses its stronghold; postpositivism appears; early explicit mixed designs emerge as field experiments get explained with participant observation."},
   {t:"Constructivist ascendance — 1970–1990", d:"The 'qualitative revolution': constructivism, interpretivism, naturalism gain ground; the paradigm wars rage — purists claim mixing corrupts science."},
   {t:"Pragmatism & compatibility — 1990–now", d:"Mixed methods becomes its own field: paradigms are seen as malleable, methods chosen by fitness for purpose, opposing views held in a dialectical stance."}],
  quiz:[{t:"single",type:"single",q:"The 'paradigm wars' argued that…",
   opts:[["quantitative and qualitative methods could not be combined without corrupting science",1],["all research should be qualitative",0],["statistics should be banned",0],["mixed methods were already dominant",0]],
   why:"Purists in both camps claimed the paradigms were incompatible. The compatibility thesis and pragmatism ended the war by making method choice question-driven."}]},
 configpipe:{title:"Configuring research — the full pipeline", steps:[
   {t:"Select the research focus", d:"'Improve the infrastructure' is unanswerable. Pick one element — the model answer chose the enrolment & timetabling journey: most-used, most visible, touched by students AND staff."},
   {t:"Form 2 distinct research questions", d:"Split the goal by question type: a WHY question (friction, satisfaction — answered by people) and a WHAT/WHERE question (delays, drop-offs — answered by logs)."},
   {t:"Inventory existing data", d:"Server/app logs (response times, errors, drop-off), enrolment records (clash rates, re-enrolment, processing time), helpdesk ticket categories. Cheap, quantitative — tells you WHAT happens."},
   {t:"Identify data needed from people", d:"What only humans can tell you: satisfaction, friction, reasons for abandonment. Surveys for breadth, interviews for depth, focus groups for interaction. Watch the dependency: stratified criteria so you hear more than one kind of user."},
   {t:"Select methods, participants & plan", d:"Match each RQ to a method; schedule around the dependency chain; pilot every instrument; then budget per the price table — cost ÷ completion rate rules recruitment."}],
  quiz:[{t:"multi",type:"multi",q:"Which statements about the pipeline are correct? Select all.",
   opts:[["The same research plan can answer every possible question",0],["Logs answer what/where; interviews and surveys answer why",1],["Participant criteria (stratification) guard against hearing only one kind of user",1],["Broadcast recruitment alone can satisfy a specific diversity requirement",0]],
   why:"No plan answers everything (that's why you narrow the focus). Broadcast has NO diversity by definition; only in-person recruitment can request specific diversity."},
   {t:"case",type:"single",q:"Your team inherits another team's notes mid-pipeline (the 'round robin'). The correct move is…",
   opts:[["Throw them away and restart",0],["Review their notes first, continue from where they left off, and improve rather than discard — as the activity instructs",1],["Ignore the pipeline entirely",0],["Outsource the decision",0]],
   why:"The round-robin activity simulates real organisations: teams continue each other's work. You review, build on, and refine — continuity is the skill being practised."}]},
 xraydar:{title:"How X-Raydar was built — 4 stations", steps:[
   {t:"Data & auto-labelling", d:"1.9M frontal images from 6 UK hospitals; a RoBERTa NLP (X-Raydar-NLP) trained on 23,230 manually annotated reports extracts 37-finding labels from historical free-text reports — manual labelling at that scale was impossible."},
   {t:"The taxonomy", d:"45 categories designed by 3 senior radiologists: 37 findings across 8 anatomical areas, grouped by criticality (critical / urgent / non-urgent) + 8 technical labels. Balances clinical completeness with parsimony for AI training."},
   {t:"The vision model", d:"InceptionV3 multi-label classifier with a custom loss encoding NLP label uncertainty + class weighting; final score averages models trained at 299², 512² and 1024² resolutions."},
   {t:"Three test sets", d:"Auto-labelled (n=103,328 — same labeller as training), consensus (n=1,427 — two radiologists + adjudicator), and MIMIC-CXR (n=252,374 — external, US ER, no fine-tuning). Mean AUCs: 0.919 / 0.864 / 0.842."}],
  quiz:[{t:"check",type:"single",q:"Which test set gives the most honest estimate of real-world performance, and why?",
   opts:[["Auto-labelled — it's biggest",0],["Consensus — independent expert humans set the ground truth, even though it's smallest",1],["MIMIC — it's American",0],["All are equally honest",0]],
   why:"Ground truth quality trumps size: the consensus set was annotated by radiologists under research conditions (with a third resolving disagreements), so its 0.864 is the most trustworthy number."}]},
 dcl:{title:"How DCL generates a report — 4 stations", steps:[
   {t:"Retrieve similar reports", d:"For each image, find the top-3 most similar reports from a queue (65,536 reports for MIMIC-CXR) by visual-feature similarity. Contrastive learning (IRC) keeps this retrieval accurate."},
   {t:"Update the knowledge graph", d:"Extract entities from those reports with Stanza, pull RadGraph triplets (suggestive of / located at / modify), and add nodes or redefine relations — each case gets its own graph on top of the 28-entity base."},
   {t:"Encode & attend", d:"A relational self-attention encoder passes messages along graph edges (adjacency = visible mask); cross-attention then lets the image feature absorb knowledge from the graph."},
   {t:"Decode & train", d:"A Transformer decoder writes the report. Three losses: generation (RG), image–report contrastive (IRC), matching (IRM). SciBert inits the graph nodes; a pretrained ViT supplies the visual inductive bias."}],
  quiz:[{t:"check",type:"single",q:"Why is SciBert (not random vectors) used to initialise graph entities?",
   opts:[["It is required by RadGraph",0],["Rare, case-specific nodes appear too few times to learn good embeddings from scratch — pretrained embeddings give them meaning immediately",1],["It speeds up the GPU",0],["It replaces the need for retrieval",0]],
   why:"The paper is explicit: random init fails for rare added nodes. SciBert embeddings + level encoding (root/organ/disease) give every node a meaningful starting representation."}]}
};
/* fix configpipe quiz broken option */
PLAYERS.configpipe.quiz[1].opts = [["Throw them away and restart",0],["Review their notes first, continue from where they left off, and improve rather than discard — as the activity instructs",1],["Ignore the pipeline entirely",0],["Outsource the decision",0]];
PLAYERS.configpipe.quiz[1].why = "The round-robin activity simulates real organisations: teams continue each other's work. You review, build on, and refine — continuity is the skill being practised.";

/* ---------- GLOSSARY ---------- */
const GLOSS = [
 ["Systematic enquiry","The defining feature of research: careful, organised, purposeful — discovering or verifying knowledge (Bennett 1991; Leedy & Ormrod 2013)."],
 ["Wizard of Oz study","Simulating a smart system with hidden human labour — here, humans coded recordings to act as sensors before any sensor existed. Great for feasibility; raises observation-privacy issues."],
 ["Experience sampling","Collecting in-the-moment self-reports at random intervals (the 'beeper study'); Hudson used ~2 prompts/hour on a 5-point interruptibility scale."],
 ["Information gain","How much entropy a feature removes when sorting data; used to rank sensors. Only relative values matter, and it indicates usefulness, not direction."],
 ["Base rate / base accuracy","Accuracy of the trivial majority-class predictor (always 'interruptible' = 68%); the baseline models must beat."],
 ["Balanced accuracy","Mean of sensitivity and specificity; X-Raydar's 0.763 vs historic reporters' 0.678."],
 ["AUC","Area under the ROC curve; threshold-free ranking quality. X-Raydar: 0.919 auto / 0.864 consensus / 0.842 MIMIC."],
 ["Informed consent","Participants understand and agree to what's collected and why — absolutely essential since Nuremberg (1947)."],
 ["Right of withdrawal","Participants may stop at any time; honest limits apply after anonymisation/publication."],
 ["Coercion vs deception","Coercion = pressure making refusal costly (grades, employment). Deception = misleading about the study; needs justification + approval + debrief."],
 ["Vulnerable groups","Participants needing extra protection (children, patients, dependants): guardian consent + age-appropriate assent."],
 ["Triangulation","Combining data sources/methods to validate findings from multiple directions; divergence can be informative, not just failure."],
 ["Qualitative / Quantitative","Why & how (insights, text, small n) vs how many & how much (numbers, generalisation, larger n)."],
 ["Quantitizing / Qualitizing","Converting qual data to numeric codes for statistics / converting quant results into narratives for qualitative analysis."],
 ["Mixed methods / multi-method / mixed model","Genuine qual+quant combining (parallel or sequential) / both procedure types mainly within quantitative work / mixing at every stage."],
 ["Fitness for purpose","Pragmatist principle: choose methods that work for the question in context, not by paradigm loyalty."],
 ["Synthesis matrix","A concept-columns table comparing sources — never copy papers' section headings."],
 ["Backward / forward snowballing","Screening what your seed paper cites / what cites it."],
 ["Underdiagnosis (FPr of 'No Finding')","Falsely declaring a sick patient healthy; the fairness metric that matters most in triage."],
 ["Bias amplification","Models trained on human-generated labels learning and magnifying the biases already present in those labels."],
 ["Intersectional bias","Belonging to two under-served groups stacking the penalty (e.g. Hispanic female patients)."],
 ["Consensus set","Small gold-standard test set annotated by 2 experts + a third adjudicator (X-Raydar: n=1,427, 14.75 min/image)."],
 ["Multi-label classification","One image, many possible findings at once (37 for X-Raydar) — not a single-label pick."],
 ["CIDEr vs BLEU","CIDEr rewards topic terms and penalises frequent sentences; BLEU can be gamed by repeating common sentences on biased datasets."],
 ["Dynamic knowledge graph","A per-case graph: base entities + nodes/relations added from retrieved similar reports via Stanza + RadGraph triplets."],
 ["Saturation","Stopping qualitative recruitment when new interviews add no new themes — why ~6–12 interviews can be enough."],
 ["Cost per completion","Price per approach ÷ completion rate — the formula that decides recruitment ($20 / $33 / $12.50 in the workshop table)."],
 ["Dependency chain","recruitment → collection → transcription → analysis → report → presentation; cut polish, never the chain."]
];
GLOSS[18][1] = "Falsely declaring a sick patient healthy; the fairness metric that matters most in triage.";

/* ================= ENGINE ================= */
(function(){
const $=(s,c)=>(c||document).querySelector(s), $$=(s,c)=>[...(c||document).querySelectorAll(s)];
const TAGLBL={check:"Bite-size check",multi:"Choose all that apply",case:"Scenario",data:"Data analysis",single:"Question",type:"Question"};
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),1600);}
function escDiv(){const d=document.createElement("div");return d;}

function renderQ(q, host, num){
  const card=document.createElement("div");card.className="quiz";
  const top=document.createElement("div");top.className="qtop";
  const tag=document.createElement("span");tag.className="qtag"+(q.type==="multi"?" multi":(q.t==="case"?" case":""));
  tag.textContent=TAGLBL[q.t]||(q.type==="multi"?"Choose all that apply":"Question");top.appendChild(tag);
  if(num){const n=document.createElement("span");n.className="src";n.textContent="Q"+num;top.appendChild(n);}
  card.appendChild(top);
  const qt=document.createElement("div");qt.className="qt";qt.textContent=q.q;card.appendChild(qt);
  if(q.extra){const ex=document.createElement("div");ex.className="qextra";ex.innerHTML=q.extra;card.appendChild(ex);}
  const why=document.createElement("div");why.className="why";why.innerHTML="<b>Why:</b> "+q.why;
  if(q.type==="multi"){
    const picked=new Set();
    q.opts.forEach((o,i)=>{
      const b=document.createElement("button");b.className="opt";b.textContent=o[0];
      b.onclick=()=>{if(card.classList.contains("done"))return;b.classList.toggle("picked");picked.has(i)?picked.delete(i):picked.add(i);};
      card.appendChild(b);
    });
    const chk=document.createElement("button");chk.className="btn primary";chk.style.cssText="margin-top:10px;padding:9px 16px;font-size:13.5px";chk.textContent="Check answer";
    chk.onclick=()=>{
      if(card.classList.contains("done")||picked.size===0)return;
      card.classList.add("done");
      const correct=new Set(q.opts.map((o,i)=>o[1]?i:-1).filter(i=>i>=0));
      let allOk=true;
      q.opts.forEach((o,i)=>{const b=card.querySelectorAll(".opt")[i];b.disabled=true;
        if(o[1])b.classList.add("correct");
        if(picked.has(i)&&!o[1]){b.classList.add("wrong");allOk=false;}
        if(o[1]&&!picked.has(i))allOk=false;});
      why.classList.add("show");card.appendChild(why);
      answered(host,card,allOk);
    };
    card.appendChild(chk);
  } else {
    q.opts.forEach((o)=>{
      const b=document.createElement("button");b.className="opt";b.textContent=o[0];
      b.onclick=()=>{
        if(card.classList.contains("done"))return;card.classList.add("done");
        card.querySelectorAll(".opt").forEach((x,j)=>{x.disabled=true;if(q.opts[j][1])x.classList.add("correct");});
        if(!o[1])b.classList.add("wrong");
        why.classList.add("show");card.appendChild(why);
        answered(host,card,!!o[1]);
      };
      card.appendChild(b);
    });
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

/* banks */
function renderBank(hostId,data,bar,stat){const host=document.getElementById(hostId);if(!host)return;host._bank=data;host._bar=bar;host._stat=stat;
  data.forEach((q,i)=>host.appendChild(renderQ(q,host,i+1)));}
renderBank("bankW1",BANK_W1,"bankW1bar","bankW1stat");
renderBank("bankW2",BANK_W2,"bankW2bar","bankW2stat");
const dq=$("#dashQCount");if(dq)dq.textContent=BANK_W1.length+BANK_W2.length;

/* players */
$$("[data-player]").forEach(box=>{
  const p=PLAYERS[box.dataset.player];if(!p)return;
  const wrap=document.createElement("div");wrap.className="player";
  const top=document.createElement("div");top.className="ptop";
  const ti=document.createElement("div");ti.className="ptitle";ti.textContent=p.title;top.appendChild(ti);
  const dots=document.createElement("div");dots.className="pdots";top.appendChild(dots);wrap.appendChild(top);
  const NS="http://www.w3.org/2000/svg", n=p.steps.length;
  const svg=document.createElementNS(NS,"svg");svg.setAttribute("viewBox","0 0 640 "+(n>4?150:130));svg.classList.add("stsvg");
  const bw=Math.min(150,(560-(n-1)*16)/n), gap=(640-20-n*bw)/(n-1||1);
  const boxesG=[];
  p.steps.forEach((s,i)=>{
    const g=document.createElementNS(NS,"g");
    const r=document.createElementNS(NS,"rect");
    r.setAttribute("x",10+i*(bw+gap));r.setAttribute("y",28);r.setAttribute("width",bw);r.setAttribute("height",58);r.setAttribute("rx",11);
    r.setAttribute("fill","var(--card)");r.setAttribute("stroke","var(--line)");r.setAttribute("stroke-width","1.6");
    g.appendChild(r);
    const t1=document.createElementNS(NS,"text");t1.setAttribute("x",10+i*(bw+gap)+bw/2);t1.setAttribute("y",51);t1.setAttribute("text-anchor","middle");t1.setAttribute("font-size","12");t1.setAttribute("font-weight","700");t1.setAttribute("fill","var(--ink3)");
    t1.textContent="Step "+(i+1);g.appendChild(t1);
    const t2=document.createElementNS(NS,"text");t2.setAttribute("x",10+i*(bw+gap)+bw/2);t2.setAttribute("y",70);t2.setAttribute("text-anchor","middle");t2.setAttribute("font-size","10.5");t2.setAttribute("fill","var(--ink3)");
    t2.textContent=s.t.length>18?s.t.slice(0,17)+"…":s.t;g.appendChild(t2);
    svg.appendChild(g);boxesG.push({g,r,t1,t2});
    if(i<n-1){const a=document.createElementNS(NS,"line");
      a.setAttribute("x1",10+i*(bw+gap)+bw+2);a.setAttribute("y1",57);a.setAttribute("x2",10+(i+1)*(bw+gap)-2);a.setAttribute("y2",57);
      a.setAttribute("stroke","var(--ink3)");a.setAttribute("stroke-width","1.4");svg.appendChild(a);}
  });
  wrap.appendChild(svg);
  const lab=document.createElement("div");lab.className="pstep";wrap.appendChild(lab);
  const tt=document.createElement("div");tt.className="pt";wrap.appendChild(tt);
  const bd=document.createElement("p");bd.className="pd";wrap.appendChild(bd);
  const nav=document.createElement("div");nav.className="pnav";wrap.appendChild(nav);
  const back=document.createElement("button");back.className="btn";back.textContent="Back";nav.appendChild(back);
  const next=document.createElement("button");next.className="btn primary";nav.appendChild(next);
  const pq=document.createElement("div");pq.className="pquiz";wrap.appendChild(pq);
  let cur=0;
  const dotEls=p.steps.map(()=>{const d=document.createElement("span");d.className="pdot";dots.appendChild(d);return d;});
  function draw(){
    boxesG.forEach((b,i)=>{const on=i===cur,done=i<cur;
      b.r.setAttribute("stroke",on?"var(--accent)":done?"var(--good)":"var(--line)");
      b.r.setAttribute("stroke-width",on?"2.4":"1.6");
      b.t1.setAttribute("fill",on||done?"var(--ink)":"var(--ink3)");b.t2.setAttribute("fill",on||done?"var(--ink2)":"var(--ink3)");
      dotEls[i].className="pdot"+(on?" on":done?" done":"");});
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

/* images */
$$("img[data-img]").forEach(img=>{if(IMGS[img.dataset.img])img.src=IMGS[img.dataset.img];});

/* router */
const SEC_ORDER=["dashboard","w1-overview","w1-research","w1-ethics","w1-hudson","w1-alexa","w1-ws1a","w1-ws1b","w1-bank","w2-overview","w2-litreview","w2-mixed","w2-config","w2-xraydar","w2-bias","w2-dcl","w2-studio","w2-bank","mock","glossary"];
function route(){
  let id=(location.hash||"#dashboard").slice(1);
  if(!document.getElementById(id))id="dashboard";
  $$(".view").forEach(v=>v.classList.toggle("active",v.id===id));
  $$("#drawer a").forEach(a=>a.classList.toggle("active",a.dataset.nav===id));
  window.scrollTo({top:0});
  if(id==="mock"){} 
}
window.addEventListener("hashchange",route);

/* drawer */
const drawer=$("#drawer"),scrim=$("#scrim");
$("#burger").onclick=()=>{drawer.classList.add("open");scrim.classList.add("open");};
const closeDrawer=()=>{drawer.classList.remove("open");scrim.classList.remove("open");};
scrim.onclick=closeDrawer;$("#drawerClose").onclick=closeDrawer;
$$("#drawer a").forEach(a=>a.addEventListener("click",closeDrawer));

/* progress */
const PKEY="iti5125.w12.progress.v1";
let prog={};try{prog=JSON.parse(localStorage.getItem(PKEY)||"{}")}catch(e){}
const W1S=["w1-overview","w1-research","w1-ethics","w1-hudson","w1-alexa","w1-ws1a","w1-ws1b","w1-bank"];
const W2S=["w2-overview","w2-litreview","w2-mixed","w2-config","w2-xraydar","w2-bias","w2-dcl","w2-studio","w2-bank"];
function saveProg(){localStorage.setItem(PKEY,JSON.stringify(prog));}
function refreshProg(){
  const c1=W1S.filter(s=>prog[s]).length,c2=W2S.filter(s=>prog[s]).length;
  $("#pbW1").style.width=(c1/W1S.length*100)+"%";$("#pbW2").style.width=(c2/W2S.length*100)+"%";
  $$("#drawer a").forEach(a=>{if(a.dataset.nav)a.classList.toggle("done",!!prog[a.dataset.nav]);});
  const total=W1S.length+W2S.length,done=c1+c2,pct=Math.round(done/total*100);
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
  MQ=shuffle([...shuffle(BANK_W1.map(q=>({...q,_w:1}))).slice(0,10),...shuffle(BANK_W2.map(q=>({...q,_w:2}))).slice(0,10)]);
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
  const live=$("#mockLive"),res=$("#mockResult");live.style.display="none";res.style.display="block";
  const pct=Math.round(right/MQ.length*100);
  res.innerHTML="";
  const card=document.createElement("div");card.className="card";card.style.textAlign="center";
  card.innerHTML='<div class="score-big">'+right+'<span style="font-size:22px;color:var(--ink3)"> / '+MQ.length+'</span></div>'
    +'<p class="small">'+(auto?"Time expired — unanswered questions scored zero.":"Quiz finished.")+' '+answeredN+' answered · '+pct+'% correct</p>'
    +'<p class="small">'+(pct>=80?"Quiz-ready. Keep this level and the real 4% is yours.":pct>=60?"Solid — review the rationales below, then retake.":"Revisit the flagged sections, then retake — the bank is your friend.")+'</p>';
  const rb=document.createElement("button");rb.className="btn primary";rb.style.maxWidth="320px";rb.textContent="Retake (new random 20)";rb.onclick=startMock;card.appendChild(rb);
  const gb=document.createElement("a");gb.className="btn";gb.href="#dashboard";gb.textContent="Back to dashboard";gb.style.marginLeft="8px";card.appendChild(gb);
  res.appendChild(card);
  const rev=document.createElement("div");rev.className="card";
  rev.innerHTML="<b>Review</b><p class='small'>Every question with the correct answer and rationale.</p>";
  MQ.forEach((q,i)=>{
    const correctTxt=q.opts.filter(o=>o[1]).map(o=>o[0]).join(" · ");
    const your=cards[i].classList.contains("done")?(cards[i].dataset.ok==="1"?"✅ correct":"❌ wrong"):"⏱ not answered";
    const d=document.createElement("details");const s=document.createElement("summary");
    s.textContent="Q"+(i+1)+" ["+(q._w===1?"W1":"W2")+"] "+your+" — "+q.q.slice(0,80)+(q.q.length>80?"…":"");
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

