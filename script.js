// Database object me sabhi subjects ka alag-alag section hai
const subjectsData = {
  cdp: [
    {
      id: 1,
      title: "प्रश्न 1. (कथन-कारण)",
      text: "कथन (A): बाल्यावस्था को 'मिथ्या परिपक्वता' का काल कहा जाता है\nकारण (R): इस अवस्था में बालक में तेजी से शारीरिक विकास होता है और वह आत्मनिर्भर बनने का प्रयास करता है।",
      options: [
        "(अ) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या है।",
        "(ब) (A) और (R) दोनों सही हैं परन्तु (R), (A) की सही व्याख्या नहीं है।",
        "(स) (A) सही है परन्तु (R) window.subjectsData = window.subjectsData || {};

window.subjectsData.english = [
  {
    id: 1,
    title: "Question 1. (Parts of Speech)",
    text: "Identify the part of speech of the highlighted word:\nShe sings 'beautifully'.",
    options: ["(A) Adjective", "(B) Adverb", "(C) Verb", "(D) Noun"],
    answer: "(B) Adverb",
    explanation: "'Beautifully' modifies the verb 'sings', so it is an adverb of manner."
  },
  {
    id: 2,
    title: "Question 2. (Assertion & Reason - Pedagogy)",
    text: "Assertion (A): In foundational language pedagogy, establishing oral-aural proficiency (listening and speaking) must systematically precede the formal introduction of graphic skills (reading and writing).\nReason (R): Morphological awareness enables learners to segment complex words into root morphemes and affixes during advanced academic reading.",
    options: [
      "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "(B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(C) (A) is true, but (R) is false.",
      "(D) (A) is false, but (R) is true."
    ],
    answer: "(B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
    explanation: ""
  },
  {
    id: 3,
    title: "Question 3. (Teaching-Learning Material)",
    text: "Which of the following pedagogical practices best demonstrates the authentic use of 'Realia' and low-cost locally available Teaching-Learning Material (TLM) in an English language classroom?",
    options: [
      "(A) Projecting high-resolution 3D flashcards of exotic vegetables downloaded from an international digital repository.",
      "(B) Instructing learners to copy the definitions of local agricultural tools from a prescribed bilingual dictionary.",
      "(C) Purchasing commercially manufactured plastic miniature models of a supermarket for classroom display.",
      "(D) Bringing used bus tickets, empty local grocery wrappers, and community pamphlets into the classroom to teach functional vocabulary and authentic discourse."
    ],
    answer: "(D) Bringing used bus tickets, empty local grocery wrappers, and community pamphlets into the classroom to teach functional vocabulary and authentic discourse.",
    explanation: ""
  },
  {
    id: 4,
    title: "Question 4. (Digital Content Integration)",
    text: "Evaluate the following statements regarding the safe, inclusive, and pedagogically appropriate integration of Digital Content in an English language classroom:\n[J] Digital resources must be vetted for age-appropriate metadata, learner data privacy, and distraction-free interfaces before classroom integration.\n[K] Interactive digital content is pedagogically optimal when it scaffolds collaborative peer discourse rather than replacing active human interaction.\n[L] To foster autonomous inquiry in primary learners, teachers should mandate unrestricted browsing of unmoderated open-web hyperlinks during classroom hours.\n[M] Synchronized closed captions and adjustable audio playback rates facilitate inclusive comprehension for learners with diverse processing speeds.\n\nSelect the correct option based on the statements above:",
    options: [
      "(A) Only J, K and M",
      "(B) Only J, L and M",
      "(C) Only K and M",
      "(D) J, K, L and M"
    ],
    answer: "(A) Only J, K and M",
    explanation: ""
  },
  {
    id: 5,
    title: "Question 5. (Assertion & Reason - Grammar)",
    text: "Assertion (A): Functional grammar emphasizes the rote memorization of isolated prescriptive rules and decontextualized paradigm tables prior to any communicative exposure.\nReason (R): Grammatical competence in a second language is most effectively internalized when learners inductively notice form-meaning-use relationships within authentic communicative contexts.",
    options: [
      "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "(B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(C) (A) is false, but (R) is true.",
      "(D) (A) is true, but (R) is false."
    ],
    answer: "(C) (A) is false, but (R) is true.",
    explanation: ""
  },
  {
    id: 6,
    title: "Question 6. (Reading Skills)",
    text: "Which of the following classroom activities exemplifies 'Intensive Reading' aimed at developing detailed semantic and syntactic accuracy?",
    options: [
      "(A) Rapidly running one's eyes over a railway timetable to locate the departure platform of a specific express train.",
      "(B) Deconstructing a short editorial text line-by-line to examine lexical nuances, cohesive devices, and syntactic structures.",
      "(C) Reading a simplified mystery novel during leisure hours to enjoy the narrative flow and build general reading stamina.",
      "(D) Glancing through the title, topic sentences, and concluding summary of an article to identify its central theme."
    ],
    answer: "(B) Deconstructing a short editorial text line-by-line to examine lexical nuances, cohesive devices, and syntactic structures.",
    explanation: ""
  },
  {
    id: 7,
    title: "Question 7. (Assessment Sequence)",
    text: "Arrange the following four pedagogical stages in the correct chronological sequence for implementing 'Peer and Self-Assessment' to evaluate writing proficiency in an upper-primary English classroom:\n[1] Revising the written draft and formulating autonomous learning targets based on reflective insights.\n[2] Applying the agreed-upon rubric to evaluate drafts and recording evidence-based constructive feedback.\n[3] Collaboratively co-constructing transparent assessment criteria and performance rubrics with learners.\n[4] Teacher modeling the evaluation process using an anonymous sample script to calibrate learner judgment.\n\nSelect the option that represents the correct sequence:",
    options: [
      "(A) 3, 2, 4, 1",
      "(B) 4, 3, 2, 1",
      "(C) 3, 4, 2, 1",
      "(D) 3, 4, 1, 2"
    ],
    answer: "(C) 3, 4, 2, 1",
    explanation: ""
  },
  {
    id: 8,
    title: "Question 8. (Matching - Remedial Pedagogy)",
    text: "Match List-I (Specific Learner Difficulty) with List-II (Targeted Remedial Teaching Strategy) in an inclusive English classroom:",
    table: {
      h1: "List-I (Learner Difficulty)",
      h2: "List-II (Remedial Strategy)",
      rows: [
        ["[A] Phonological decoding deficit", "[1] Low-anxiety role-plays with graded situational prompts"],
        ["[B] Syntactic fossilization in writing", "[2] Multisensory grapheme-phoneme mapping drills"],
        ["[C] Pragmatic and socio-linguistic hesitation", "[3] Chunking complex texts with graphic organizers"],
        ["[D] Working-memory overload in reading", "[4] Consciousness-raising tasks with contrastively scaffolded sentence frames"]
      ]
    },
    options: [
      "(A) A-2, B-4, C-1, D-3",
      "(B) A-2, B-1, C-4, D-3",
      "(C) A-4, B-2, C-1, D-3",
      "(D) A-2, B-4, C-3, D-1"
    ],
    answer: "(A) A-2, B-4, C-1, D-3",
    explanation: ""
  },
  {
    id: 9,
    title: "Question 9. (Reading Comprehension)",
    text: "Passage: 'When a dominant global language systematically displaces indigenous vernaculars within formal schooling, it threatens to hollow out the cognitive ecology of entire communities. Every ancestral tongue encodes centuries of empirical observations. However, educational policymakers must not throw the baby out with the bathwater by rejecting global lingua francas altogether. An additive multilingual pedagogy ensures international competence without cultural amnesia.'\n\nWhich of the following statements best encapsulates the central analytical thesis of the passage?",
    options: [
      "(A) Global lingua francas must be completely eradicated from formal schooling to protect indigenous floral taxonomies.",
      "(B) Socioeconomic mobility can only be achieved by replacing regional dialects with a single standardized international language.",
      "(C) Preserving indigenous cognitive-ecological knowledge while achieving global competence requires an additive mother-tongue-based multilingual pedagogy.",
      "(D) Vernacular languages lack the epistemic complexity required to describe modern micro-climatic phenomena."
    ],
    answer: "(C) Preserving indigenous cognitive-ecological knowledge while achieving global competence requires an additive mother-tongue-based multilingual pedagogy.",
    explanation: ""
  },
  {
    id: 10,
    title: "Question 10. (Vocabulary & Idioms)",
    text: "In the context of the passage, what do the phrasal verb 'hollow out' and the idiomatic expression 'throw the baby out with the bathwater' respectively signify?",
    options: [
      "(A) To excavate physical caves in a landscape; and to conserve water resources during ecological crises.",
      "(B) To enrich the foundational structure of a language; and to prioritize infant healthcare over formal education.",
      "(C) To translate ancient manuscripts into modern scripts; and to eliminate outdated grammatical rules selectively.",
      "(D) To erode the internal vitality and core substance of a system; and to discard something valuable while trying to get rid of something undesirable."
    ],
    answer: "(D) To erode the internal vitality and core substance of a system; and to discard something valuable while trying to get rid of something undesirable.",
    explanation: ""
  },
  {
    id: 11,
    title: "Question 11. (Grammatical Analysis)",
    text: "Examine the grammatical structure of the sentence: 'Should a community abandon its ancestral tongue in pursuit of uniform socioeconomic mobility, the epistemic frameworks that sustain its biodiversity might irreversibly vanish.'\n[J] The inverted clause 'Should a community abandon...' functions as a subordinate adverbial clause of condition.\n[K] The embedded clause 'that sustain its biodiversity' is a restrictive relative (adjective) clause modifying 'epistemic frameworks'.\n[L] The modal auxiliary 'might' in the principal clause expresses deontic obligation rather than epistemic possibility.\n[M] The plural verb 'sustain' in the relative clause grammatically agrees with its plural antecedent 'frameworks'.\n\nSelect the correct option:",
    options: [
      "(A) Only J, K and L",
      "(B) Only J, K and M",
      "(C) Only K and M",
      "(D) J, K, L and M"
    ],
    answer: "(B) Only J, K and M",
    explanation: ""
  }
];

      text: "निम्नलिखित में से कौन-से कारक बच्चे के सामाजिक विकास को प्रभावित करते हैं?\n1. परिवार एवं सहपाठी\n2. विद्यालय का वातावरण\n3. आनुवंशिक गुण\n4. खेल का मैदान",
      options: [
        "(अ) केवल 1, 2 और 3",
        "(ब) केवल 1, 2 और 4",
        "(स) केवल 2, 3 और 4",
        "(द) 1, 2, 3 और 4 सभी"
      ],
      answer: "(ब) केवल 1, 2 और 4",
      explanation: "आनुवंशिक गुण मुख्य रूप से शारीरिक और मानसिक विकास को प्रभावित करते हैं, जबकि सामाजिक विकास में पर्यावरण, परिवार, विद्यालय और खेलकूद की मुख्य भूमिका होती है।"
    },
    {
      id: 3,
      title: "प्रश्न 3. (जोड़ी मिलान)",
      text: "सूची-I (सिद्धान्त) को सूची-II (प्रतिपादक) से सुमेलित कीजिए:",
      table: {
        h1: "सूची-I (सिद्धान्त)",
        h2: "सूची-II (प्रतिपादक)",
        rows: [
          ["a. संज्ञानात्मक विकास का सिद्धांत", "1. जीन पियाजे"],
          ["b. मनोसामाजिक विकास का सिद्धांत", "2. एरिक एरिक्सन"],
          ["c. नैतिक विकास का सिद्धांत", "3. लॉरेंस कोहलबर्ग"],
          ["d. सामाजिक-सांस्कृतिक सिद्धांत", "4. लेव वाइगोत्स्की"]
        ]
      },
      options: [
        "(अ) a-1, b-2, c-3, d-4",
        "(ब) a-2, b-1, c-4, d-3",
        "(स) a-1, b-3, c-2, d-4",
        "(द) a-4, b-2, c-1, d-3"
      ],
      answer: "(अ) a-1, b-2, c-3, d-4",
      explanation: ""
    },
    {
      id: 4,
      title: "प्रश्न 4. (कथन-कारण)",
      text: "कथन (A): वाइगोत्स्की के अनुसार, बच्चों का संज्ञानात्मक विकास सामाजिक और संस्कृति की अंतःक्रिया का परिणाम है।\nकारण (R): भाषा विकास संज्ञानात्मक विकास में महत्वपूर्ण भूमिका निभाता है।",
      options: [
        "(अ) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या है।",
        "(ब) (A) और (R) दोनों सही हैं परन्तु (R), (A) की सही व्याख्या नहीं है।",
        "(स) (A) सही है परन्तु (R) गलत है।",
        "(द) (A) गलत है परन्तु (R) सही है।"
      ],
      answer: "(ब) (A) और (R) दोनों सही हैं परन्तु (R), (A) की सही व्याख्या नहीं है।",
      explanation: ""
    },
    {
      id: 5,
      title: "प्रश्न 5. (कूट आधारित)",
      text: "बुद्धि के बहु-कारक सिद्धांत (Multi-factor Theory) के संबंध में निम्नलिखित में से कौन-से कथन सही हैं?\n1. इसका प्रतिपादन ई. एल. थॉर्नडाइक ने किया था।\n2. इसे 'बालू का ढेर' या 'अणु सिद्धांत' भी कहा जाता है।\n3. इसके अनुसार बुद्धि स्वतंत्र इकाइयों का समूह है।",
      options: [
        "(अ) केवल 1 और 2",
        "(ब) केवल 2 और 3",
        "(स) केवल 1 और 3",
        "(द) 1, 2 और 3 सभी"
      ],
      answer: "(द) 1, 2 और 3 सभी",
      explanation: ""
    },
    {
      id: 6,
      title: "प्रश्न 6. (जोड़ी मिलान)",
      text: "सूची-I (अधिगम वक्र के प्रकार) को सूची-II (विशेषता) से मिलाएँ:",
      table: {
        h1: "सूची-I (अधिगम वक्र)",
        h2: "सूची-II (विशेषता)",
        rows: [
          ["a. सरल रेखीय वक्र", "1. अधिगम की गति एक समान होती है"],
          ["b. उत्तल वक्र (धनात्मक)", "2. प्रारंभ में गति तीव्र, बाद में मंद"],
          ["c. अवतल वक्र (ऋणात्मक)", "3. प्रारंभ में गति मंद, बाद में तीव्र"],
          ["d. एस-आकार का वक्र", "4. मिश्रित वक्र (शुरुआत में धीमी, मध्य में तीव्र, अंत में धीमी)"]
        ]
      },
      options: [
        "(अ) a-1, b-2, c-3, d-4",
        "(ब) a-2, b-1, c-4, d-3",
        "(स) a-3, b-4, c-1, d-2",
        "(द) a-4, b-3, c-2, d-1"
      ],
      answer: "(अ) a-1, b-2, c-3, d-4",
      explanation: ""
    },
    {
      id: 7,
      title: "प्रश्न 7. (कथन-कारण)",
      text: "कथन (A): समावेशी शिक्षा (Inclusive Education) में सभी बच्चों को उनकी योग्यताओं के अंतर के बावजूद सामान्य कक्षाओं में शिक्षा दी जाती है।\nकारण (R): समावेशन का उद्देश्य भेदभाव को समाप्त करना और सभी को समान अवसर प्रदान करना है।",
      options: [
        "(अ) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या है।",
        "(ब) (A) और (R) दोनों सही हैं परन्तु (R), (A) की सही व्याख्या नहीं है।",
        "(स) (A) सही है परन्तु (R) गलत है।",
        "(द) (A) गलत है परन्तु (R) सही है।"
      ],
      answer: "(अ) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या है।",
      explanation: ""
    },
    {
      id: 8,
      title: "प्रश्न 8. (कूट आधारित)",
      text: "जीन पियाजे के संज्ञानात्मक विकास के 'मूर्त संक्रियात्मक अवस्था' (Concrete Operational Stage) की मुख्य विशेषताएँ क्या हैं?\n1. संरक्षण (Conservation) का गुण आ जाना\n2. वर्गीकरण और क्रमबद्धता की क्षमता\n3. अमूर्त चिंतन और प्रतीकात्मक सोच\n4. विकेंद्रीकरण (Decentration)",
      options: [
        "(अ) केवल 1, 2 और 3",
        "(ब) केवल 1, 2 और 4",
        "(स) केवल 2, 3 और 4",
        "(द) 1, 2, 3 और 4 सभी"
      ],
      answer: "(ब) केवल 1, 2 और 4",
      explanation: "अमूर्त चिंतन औपचारिक संक्रियात्मक अवस्था की विशेषता है।"
    },
    {
      id: 9,
      title: "प्रश्न 9. (जोड़ी मिलान)",
      text: "सूची-I (अधिगम विकार) को सूची-II (संबंधित कठिनाई) से सुमेलित करें:",
      table: {
        h1: "सूची-I (विकार)",
        h2: "सूची-II (कठिनाई)",
        rows: [
          ["a. डिस्लेक्सिया (Dyslexia)", "1. पठन संबंधी विकार"],
          ["b. डिस्ग्राफिया (Dysgraphia)", "2. लेखन संबंधी विकार"],
          ["c. डिस्कैलकुलिया (Dyscalculia)", "3. गणितीय गणना संबंधी विकार"],
          ["d. डिस्प्रैक्सिया (Dyspraxia)", "4. शारीरिक कौशल / गति समन्वय संबंधी विकार"]
        ]
      },
      options: [
        "(अ) a-1, b-2, c-3, d-4",
        "(ब) a-2, b-1, c-3, d-4",
        "(स) a-1, b-3, c-2, d-4",
        "(द) a-4, b-3, c-2, d-1"
      ],
      answer: "(अ) a-1, b-2, c-3, d-4",
      explanation: ""
    },
    {
      id: 10,
      title: "प्रश्न 10. (कथन-कारण)",
      text: "कथन (A): बच्चों में सीखने की गति को बेहतर बनाने के लिए दंड का अत्यधिक प्रयोग करना चाहिए।\nकारण (R): दंड भय उत्पन्न करता है जो स्थायी अधिगम के लिए सबसे उपयुक्त और सकारात्मक माध्यम है।",
      options: [
        "(अ) (A) और (R) दोनों सही हैं।",
        "(ब) (A) और (R) दोनों गलत हैं।",
        "(स) (A) सही है परन्तु (R) गलत है।",
        "(द) (A) गलत है परन्तु (R) सही है।"
      ],
      answer: "(ब) (A) और (R) दोनों गलत हैं।",
      explanation: "आधुनिक शिक्षा प्रणाली में शारीरिक या मानसिक दंड पूर्णतः वर्जित है।"
    },
    {
      id: 11,
      title: "प्रश्न 11. (कूट आधारित)",
      text: "लॉरेंस कोहलबर्ग के नैतिक विकास के चरणों में 'पारंपरिक नैतिकता का स्तर' (Conventional Morality) के अंतर्गत आने वाले चरण कौन-से हैं?\n1. आज्ञाकारिता एवं सजा से बचाव विन्यास\n2. अच्छा लड़का - अच्छी लड़की विन्यास\n3. कानून एवं व्यवस्था विन्यास\n4. सामाजिक अनुबंध विन्यास",
      options: [
        "(अ) केवल 1 और 2",
        "(ब) केवल 2 और 3",
        "(स) केवल 3 और 4",
        "(द) केवल 1 और 4"
      ],
      answer: "(ब) केवल 2 और 3",
      explanation: "1 पूर्व-पारंपरिक और 4 उत्तर-पारंपरिक स्तर में आता है।"
    },
    {
      id: 12,
      title: "प्रश्न 12. (जोड़ी मिलान)",
      text: "सूची-I (अभिप्रेरणा सिद्धांत) और सूची-II (प्रतिपादक) का मिलान करें:",
      table: {
        h1: "सूची-I",
        h2: "सूची-II",
        rows: [
          ["a. आवश्यकता पदानुक्रम सिद्धांत", "1. अब्राहम मैस्लो"],
          ["b. मूलप्रवृत्ति सिद्धांत", "2. विलियम मैकडूगल"],
          ["c. प्रणोद न्यूनता सिद्धांत", "3. सी. एल. हल"],
          ["d. उपलब्धि अभिप्रेरणा सिद्धांत", "4. डेविड सी. मैक्लीलैंड"]
        ]
      },
      options: [
        "(अ) a-1, b-2, c-3, d-4",
        "(ब) a-2, b-1, c-4, d-3",
        "(स) a-3, b-4, c-1, d-2",
        "(द) a-4, b-3, c-2, d-1"
      ],
      answer: "(अ) a-1, b-2, c-3, d-4",
      explanation: ""
    },
    {
      id: 13,
      title: "प्रश्न 13. (कथन-कारण)",
      text: "कथन (A): सीखने की प्रक्रिया में त्रुटियाँ (Errors) स्वाभाविक हैं और ये शिक्षक को शिक्षण रणनीतियों में सुधार करने का अवसर देती हैं।\nकारण (R): त्रुटियाँ इस बात का संकेत हैं कि बच्चा सीखने में पूरी तरह असमर्थ है और उसे विशेष विद्यालय भेजना चाहिए।",
      options: [
        "(अ) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या है।",
        "(ब) (A) और (R) दोनों सही हैं परन्तु (R), (A) की सही व्याख्या नहीं है।",
        "(स) (A) सही है परन्तु (R) गलत है।",
        "(द) (A) गलत है परन्तु (R) सही है।"
      ],
      answer: "(स) (A) सही है परन्तु (R) गलत है।",
      explanation: ""
    },
    {
      id: 14,
      title: "प्रश्न 14. (कूट आधारित)",
      text: "सतत एवं व्यापक मूल्यांकन (CCE) के क्या मुख्य उद्देश्य हैं?\n1. विद्यार्थियों के केवल ज्ञानात्मक पक्ष का आकलन करना\n2. सीखने के दौरान आने वाली कठिनाइयों का निदान करना (Remedial Teaching)\n3. परीक्षा के भय और तनाव को कम करना\n4. वर्ष के अंत में एक बार ही परीक्षा आयोजित करना",
      options: [
        "(अ) केवल 1 और 3",
        "(ब) केवल 2 और 3",
        "(स) केवल 1 और 4",
        "(द) 2, 3 और 4"
      ],
      answer: "(ब) केवल 2 और 3",
      explanation: ""
    },
    {
      id: 15,
      title: "प्रश्न 15. (जोड़ी मिलान)",
      text: "सूची-I (बुद्धि परीक्षण) को सूची-II (प्रकार) से सुमेलित करें:",
      table: {
        h1: "सूची-I",
        h2: "सूची-II",
        rows: [
          ["a. भाटिया बैटरी परीक्षण", "1. अशाब्दिक सामूहिक बुद्धि परीक्षण"],
          ["b. रेवेन्स प्रोग्रेसिव मैट्रिसेस", "2. अशाब्दिक व्यक्तिगत बुद्धि परीक्षण"],
          ["c. स्टैनफोर्ड-बिने परीक्षण", "3. शाब्दिक व्यक्तिगत बुद्धि परीक्षण"],
          ["d. आर्मी अल्फा परीक्षण", "4. शाब्दिक सामूहिक बुद्धि परीक्षण"]
        ]
      },
      options: [
        "(अ) a-2, b-1, c-3, d-4",
        "(ब) a-1, b-2, c-3, d-4",
        "(स) a-3, b-4, c-1, d-2",
        "(द) a-4, b-3, c-2, d-1"
      ],
      answer: "(अ) a-2, b-1, c-3, d-4",
      explanation: ""
    },
    {
      id: 16,
      title: "प्रश्न 16. (कथन-कारण)",
      text: "कथन (A): विद्यालयों में जेंडर रूढ़िवादिता (Gender Stereotyping) को कम करने के लिए शिक्षकों को समान अवसर और भूमिकाएँ देनी चाहिए।\nकारण (R): लड़का-लड़की की जैविक भिन्नता उनके मानसिक और बौद्धिक विकास को पूरी तरह नियंत्रित करती है।",
      options: [
        "(अ) (A) और (R) दोनों सही हैं।",
        "(ब) (A) सही है परन्तु (R) गलत है।",
        "(स) (A) गलत है परन्तु (R) सही है।",
        "(द) (A) और (R) दोनों गलत हैं।"
      ],
      answer: "(ब) (A) सही है परन्तु (R) गलत है।",
      explanation: ""
    },
    {
      id: 17,
      title: "प्रश्न 17. (कूट आधारित)",
      text: "निम्नलिखित में से कौन-सी विशेषताएँ एक प्रतिभाशाली बालक (Gifted Child) की हैं?\n1. उच्च जिज्ञासा और अन्वेषण प्रवृत्ति\n2. अमूर्त चिंतन की योग्यता\n3. समस्याओं के प्रति रूढ़िवादी दृष्टिकोण\n4. तीव्र स्मरण शक्ति",
      options: [
        "(अ) केवल 1, 2 और 3",
        "(ब) केवल 1, 2 और 4",
        "(स) केवल 2, 3 और 4",
        "(द) 1, 2, 3 और 4 सभी"
      ],
      answer: "(ब) केवल 1, 2 और 4",
      explanation: ""
    },
    {
      id: 18,
      title: "प्रश्न 18. (जोड़ी मिलान)",
      text: "सूची-I (अधिगम के नियम - थॉर्नडाइक) और सूची-II (अर्थ) का मिलान करें:",
      table: {
        h1: "सूची-I",
        h2: "सूची-II",
        rows: [
          ["a. तत्परता का नियम", "1. कार्य करने के लिए मानसिक रूप से तैयार होना"],
          ["b. अभ्यास का नियम", "2. बार-बार दोहराना या उपयोग-अनुपयोग"],
          ["c. प्रभाव का नियम", "3. संतोष या असंतोष की अनुभूति"]
        ]
      },
      options: [
        "(अ) a-1, b-2, c-3",
        "(ब) a-3, b-2, c-1",
        "(स) a-2, b-1, c-3",
        "(द) a-1, b-3, c-2"
      ],
      answer: "(अ) a-1, b-2, c-3",
      explanation: ""
    },
    {
      id: 19,
      title: "प्रश्न 19. (कथन-कारण)",
      text: "कथन (A): आरटीई अधिनियम 2009 (RTE Act 2009) के अनुसार 6 से 14 वर्ष तक के प्रत्येक बच्चे को निःशुल्क और अनिवार्य शिक्षा का अधिकार है।\nकारण (R): शिक्षा देश के आर्थिक विकास के लिए कोई महत्व नहीं रखती, यह मात्र एक औपचारिकता है।",
      options: [
        "(अ) (A) और (R) दोनों सही हैं।",
        "(ब) (A) सही है परन्तु (R) गलत है।",
        "(स) (A) गलत है परन्तु (R) सही है।",
        "(द) (A) और (R) दोनों गलत हैं।"
      ],
      answer: "(ब) (A) सही है परन्तु (R) गलत है।",
      explanation: ""
    },
    {
      id: 20,
      title: "प्रश्न 20. (कूट आधारित)",
      text: "गार्डनर के बहु-बुद्धि सिद्धांत (Multiple Intelligences) में निम्नलिखित में से किन बुद्धियों का उल्लेख किया गया है?\n1. भाषाई बुद्धि\n2. संगीतात्मक बुद्धि\n3. अंतः वैयक्तिक बुद्धि\n4. आध्यात्मिक बुद्धि (मुख्य 8 में से)",
      options: [
        "(अ) केवल 1, 2 और 3",
        "(ब) केवल 1, 3 और 4",
        "(स) केवल 2, 3 और 4",
        "(द) 1, 2, 3 और 4"
      ],
      answer: "(अ) केवल 1, 2 और 3",
      explanation: "गार्डनर के मूल 8 प्रकारों में भाषाई, तार्किक-गणितीय, स्थानिक, संगीतात्मक, शारीरिक गतिसंवेदी, अंतः वैयक्तिक, अंतरवैयक्तिक और प्राकृतिक हैं। आध्यात्मिक मूल 8 में शामिल नहीं है।"
    },
    {
      id: 21,
      title: "प्रश्न 21. (जोड़ी मिलान)",
      text: "सूची-I (मनोवैज्ञानिक) को सूची-II (उनकी प्रसिद्ध पुस्तक/अवधारणा) से मिलाएँ:",
      table: {
        h1: "सूची-I",
        h2: "सूची-II",
        rows: [
          ["a. जीन पियाजे", "1. द मोरल जजमेंट ऑफ़ द चाइल्ड"],
          ["b. बी. एफ. स्किनर", "2. द बिहेवियर ऑफ़ ऑर्गेनिज्म्स"],
          ["c. सिगमंड फ्रायड", "3. द इंटरप्रिटेशन ऑफ़ ड्रीम्स"],
          ["d. ई. एल. थॉर्नडाइक", "4. एनिमल इंटेलिजेंस"]
        ]
      },
      options: [
        "(अ) a-1, b-2, c-3, d-4",
        "(ब) a-2, b-1, c-4, d-3",
        "(स) a-3, b-4, c-1, d-2",
        "(द) a-4, b-3, c-2, d-1"
      ],
      answer: "(अ) a-1, b-2, c-3, d-4",
      explanation: ""
    },
    {
      id: 22,
      title: "प्रश्न 22. (कथन-कारण)",
      text: "कथन (A): बच्चों के समाजीकरण में प्राथमिक संस्था के रूप में परिवार और पास-पड़ोस की महत्वपूर्ण भूमिका होती है।\nकारण (R): विद्यालय और जनसंचार माध्यम समाजीकरण की द्वितीयक (Secondary) संस्थाएँ हैं।",
      options: [
        "(अ) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या है।",
        "(ब) (A) और (R) दोनों सही हैं परन्तु (R), (A) की सही व्याख्या नहीं है।",
        "(स) (A) सही है परन्तु (R) गलत है।",
        "(द) (A) गलत है परन्तु (R) सही है।"
      ],
      answer: "(ब) (A) और (R) दोनों सही हैं परन्तु (R), (A) की सही व्याख्या नहीं है।",
      explanation: ""
    },
    {
      id: 23,
      title: "प्रश्न 23. (कूट आधारित)",
      text: "राष्ट्रीय पाठ्यचर्या की रूपरेखा 2005 (NCF 2005) के अनुसार शिक्षण का मार्गदर्शक सिद्धांत क्या है?\n1. ज्ञान को स्कूल के बाहरी जीवन से जोड़ना\n2. रटने की शिक्षा प्रणाली से दूर ले जाना\n3. परीक्षा को अधिक लचीला बनाना और कक्षा की गतिविधियों से जोड़ना\n4. केवल पाठ्यपुस्तकों पर ही ज्ञान को सीमित रखना",
      options: [
        "(अ) केवल 1, 2 और 3",
        "(ब) केवल 2, 3 और 4",
        "(स) केवल 1, 3",
        "(द) 1, 2, 3 और 4 सभी"
      ],
      answer: "(अ) केवल 1, 2 और 3",
      explanation: ""
    },
    {
      id: 24,
      title: "प्रश्न 24. (जोड़ी मिलान)",
      text: "सूची-I (बुद्धि के सिद्धांत) और सूची-II (प्रतिपादक) का मिलान करें:",
      table: {
        h1: "सूची-I",
        h2: "सूची-II",
        rows: [
          ["a. एक-कारक सिद्धांत", "1. अल्फ्रेड बिने"],
          ["b. द्वि-कारक सिद्धांत", "2. स्पीयरमैन"],
          ["c. त्रि-आयामी सिद्धांत", "3. जे. पी. गिलफोर्ड"],
          ["d. पदानुक्रमिक सिद्धांत", "4. फिलिप वर्नोन"]
        ]
      },
      options: [
        "(अ) a-1, b-2, c-3, d-4",
        "(ब) a-2, b-1, c-4, d-3",
        "(स) a-3, b-4, c-1, d-2",
        "(द) a-4, b-3, c-2, d-1"
      ],
      answer: "(अ) a-1, b-2, c-3, d-4",
      explanation: ""
    },
    {
      id: 25,
      title: "प्रश्न 25. (कथन-कारण)",
      text: "कथन (A): शिक्षक को कक्षा कक्ष में वैयक्तिक विभिन्नताओं (Individual Differences) को ध्यान में रखकर शिक्षण विधियों का चयन करना चाहिए।\nकारण (R): सभी बच्चे एक जैसी गति से सीखते हैं और उनकी सीखने की शैलियाँ पूर्णतः समान होती हैं।",
      options: [
        "(अ) (A) और (R) दोनों सही हैं।",
        "(ब) (A) सही है परन्तु (R) गलत है।",
        "(स) (A) गलत है परन्तु (R) सही है।",
        "(द) (A) और (R) दोनों गलत हैं।"
      ],
      answer: "(ब) (A) सही है परन्तु (R) गलत है।",
      explanation: "प्रत्येक बालक अद्वितीय होता है और उनकी सीखने की गति व शैली भिन्न होती है।"
    }
  ],
  hindi: [
    {
      id: 1,
      title: "प्रश्न 1. (हिन्दी वर्णमाला)",
      text: "निम्नलिखित में से कंठ्य ध्वनि कौन-सी है?",
      options: ["(अ) च, छ", "(ब) क, ख", "(स) ट, ठ", "(द) त, थ"],
      answer: "(ब) क, ख",
      explanation: "क-वर्ग (क, ख, ग, घ, ङ) का उच्चारण स्थान कंठ है।"
    }
  ],
  english: [
    {
      id: 1,
      title: "Question 1. (Parts of Speech)",
      text: "Identify the part of speech of the highlighted word:\nShe sings 'beautifully'.",
      options: ["(A) Adjective", "(B) Adverb", "(C) Verb", "(D) Noun"],
      answer: "(B) Adverb",
      explanation: "'Beautifully' modifies the verb 'sings', so it is an adverb of manner."
    }, 
window.subjectsData = window.subjectsData || {};

window.subjectsData.english = [
  {
    id: 1,
    title: "Question 1. (Parts of Speech)",
    text: "Identify the part of speech of the highlighted word:\nShe sings 'beautifully'.",
    options: ["(A) Adjective", "(B) Adverb", "(C) Verb", "(D) Noun"],
    answer: "(B) Adverb",
    explanation: "'Beautifully' modifies the verb 'sings', so it is an adverb of manner."
  },
  {
    id: 2,
    title: "Question 2. (Assertion & Reason - Pedagogy)",
    text: "Assertion (A): In foundational language pedagogy, establishing oral-aural proficiency (listening and speaking) must systematically precede the formal introduction of graphic skills (reading and writing).\nReason (R): Morphological awareness enables learners to segment complex words into root morphemes and affixes during advanced academic reading.",
    options: [
      "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "(B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(C) (A) is true, but (R) is false.",
      "(D) (A) is false, but (R) is true."
    ],
    answer: "(B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
    explanation: ""
  },
  {
    id: 3,
    title: "Question 3. (Teaching-Learning Material)",
    text: "Which of the following pedagogical practices best demonstrates the authentic use of 'Realia' and low-cost locally available Teaching-Learning Material (TLM) in an English language classroom?",
    options: [
      "(A) Projecting high-resolution 3D flashcards of exotic vegetables downloaded from an international digital repository.",
      "(B) Instructing learners to copy the definitions of local agricultural tools from a prescribed bilingual dictionary.",
      "(C) Purchasing commercially manufactured plastic miniature models of a supermarket for classroom display.",
      "(D) Bringing used bus tickets, empty local grocery wrappers, and community pamphlets into the classroom to teach functional vocabulary and authentic discourse."
    ],
    answer: "(D) Bringing used bus tickets, empty local grocery wrappers, and community pamphlets into the classroom to teach functional vocabulary and authentic discourse.",
    explanation: ""
  },
  {
    id: 4,
    title: "Question 4. (Digital Content Integration)",
    text: "Evaluate the following statements regarding the safe, inclusive, and pedagogically appropriate integration of Digital Content in an English language classroom:\n[J] Digital resources must be vetted for age-appropriate metadata, learner data privacy, and distraction-free interfaces before classroom integration.\n[K] Interactive digital content is pedagogically optimal when it scaffolds collaborative peer discourse rather than replacing active human interaction.\n[L] To foster autonomous inquiry in primary learners, teachers should mandate unrestricted browsing of unmoderated open-web hyperlinks during classroom hours.\n[M] Synchronized closed captions and adjustable audio playback rates facilitate inclusive comprehension for learners with diverse processing speeds.\n\nSelect the correct option based on the statements above:",
    options: [
      "(A) Only J, K and M",
      "(B) Only J, L and M",
      "(C) Only K and M",
      "(D) J, K, L and M"
    ],
    answer: "(A) Only J, K and M",
    explanation: ""
  },
  {
    id: 5,
    title: "Question 5. (Assertion & Reason - Grammar)",
    text: "Assertion (A): Functional grammar emphasizes the rote memorization of isolated prescriptive rules and decontextualized paradigm tables prior to any communicative exposure.\nReason (R): Grammatical competence in a second language is most effectively internalized when learners inductively notice form-meaning-use relationships within authentic communicative contexts.",
    options: [
      "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "(B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(C) (A) is false, but (R) is true.",
      "(D) (A) is true, but (R) is false."
    ],
    answer: "(C) (A) is false, but (R) is true.",
    explanation: ""
  },
  {
    id: 6,
    title: "Question 6. (Reading Skills)",
    text: "Which of the following classroom activities exemplifies 'Intensive Reading' aimed at developing detailed semantic and syntactic accuracy?",
    options: [
      "(A) Rapidly running one's eyes over a railway timetable to locate the departure platform of a specific express train.",
      "(B) Deconstructing a short editorial text line-by-line to examine lexical nuances, cohesive devices, and syntactic structures.",
      "(C) Reading a simplified mystery novel during leisure hours to enjoy the narrative flow and build general reading stamina.",
      "(D) Glancing through the title, topic sentences, and concluding summary of an article to identify its central theme."
    ],
    answer: "(B) Deconstructing a short editorial text line-by-line to examine lexical nuances, cohesive devices, and syntactic structures.",
    explanation: ""
  },
  {
    id: 7,
    title: "Question 7. (Assessment Sequence)",
    text: "Arrange the following four pedagogical stages in the correct chronological sequence for implementing 'Peer and Self-Assessment' to evaluate writing proficiency in an upper-primary English classroom:\n[1] Revising the written draft and formulating autonomous learning targets based on reflective insights.\n[2] Applying the agreed-upon rubric to evaluate drafts and recording evidence-based constructive feedback.\n[3] Collaboratively co-constructing transparent assessment criteria and performance rubrics with learners.\n[4] Teacher modeling the evaluation process using an anonymous sample script to calibrate learner judgment.\n\nSelect the option that represents the correct sequence:",
    options: [
      "(A) 3, 2, 4, 1",
      "(B) 4, 3, 2, 1",
      "(C) 3, 4, 2, 1",
      "(D) 3, 4, 1, 2"
    ],
    answer: "(C) 3, 4, 2, 1",
    explanation: ""
  },
  {
    id: 8,
    title: "Question 8. (Matching - Remedial Pedagogy)",
    text: "Match List-I (Specific Learner Difficulty) with List-II (Targeted Remedial Teaching Strategy) in an inclusive English classroom:",
    table: {
      h1: "List-I (Learner Difficulty)",
      h2: "List-II (Remedial Strategy)",
      rows: [
        ["[A] Phonological decoding deficit", "[1] Low-anxiety role-plays with graded situational prompts"],
        ["[B] Syntactic fossilization in writing", "[2] Multisensory grapheme-phoneme mapping drills"],
        ["[C] Pragmatic and socio-linguistic hesitation", "[3] Chunking complex texts with graphic organizers"],
        ["[D] Working-memory overload in reading", "[4] Consciousness-raising tasks with contrastively scaffolded sentence frames"]
      ]
    },
    options: [
      "(A) A-2, B-4, C-1, D-3",
      "(B) A-2, B-1, C-4, D-3",
      "(C) A-4, B-2, C-1, D-3",
      "(D) A-2, B-4, C-3, D-1"
    ],
    answer: "(A) A-2, B-4, C-1, D-3",
    explanation: ""
  },
  {
    id: 9,
    title: "Question 9. (Reading Comprehension)",
    text: "Passage: 'When a dominant global language systematically displaces indigenous vernaculars within formal schooling, it threatens to hollow out the cognitive ecology of entire communities. Every ancestral tongue encodes centuries of empirical observations. However, educational policymakers must not throw the baby out with the bathwater by rejecting global lingua francas altogether. An additive multilingual pedagogy ensures international competence without cultural amnesia.'\n\nWhich of the following statements best encapsulates the central analytical thesis of the passage?",
    options: [
      "(A) Global lingua francas must be completely eradicated from formal schooling to protect indigenous floral taxonomies.",
      "(B) Socioeconomic mobility can only be achieved by replacing regional dialects with a single standardized international language.",
      "(C) Preserving indigenous cognitive-ecological knowledge while achieving global competence requires an additive mother-tongue-based multilingual pedagogy.",
      "(D) Vernacular languages lack the epistemic complexity required to describe modern micro-climatic phenomena."
    ],
    answer: "(C) Preserving indigenous cognitive-ecological knowledge while achieving global competence requires an additive mother-tongue-based multilingual pedagogy.",
    explanation: ""
  },
  {
    id: 10,
    title: "Question 10. (Vocabulary & Idioms)",
    text: "In the context of the passage, what do the phrasal verb 'hollow out' and the idiomatic expression 'throw the baby out with the bathwater' respectively signify?",
    options: [
      "(A) To excavate physical caves in a landscape; and to conserve water resources during ecological crises.",
      "(B) To enrich the foundational structure of a language; and to prioritize infant healthcare over formal education.",
      "(C) To translate ancient manuscripts into modern scripts; and to eliminate outdated grammatical rules selectively.",
      "(D) To erode the internal vitality and core substance of a system; and to discard something valuable while trying to get rid of something undesirable."
    ],
    answer: "(D) To erode the internal vitality and core substance of a system; and to discard something valuable while trying to get rid of something undesirable.",
    explanation: ""
  },
  {
    id: 11,
    title: "Question 11. (Grammatical Analysis)",
    text: "Examine the grammatical structure of the sentence: 'Should a community abandon its ancestral tongue in pursuit of uniform socioeconomic mobility, the epistemic frameworks that sustain its biodiversity might irreversibly vanish.'\n[J] The inverted clause 'Should a community abandon...' functions as a subordinate adverbial clause of condition.\n[K] The embedded clause 'that sustain its biodiversity' is a restrictive relative (adjective) clause modifying 'epistemic frameworks'.\n[L] The modal auxiliary 'might' in the principal clause expresses deontic obligation rather than epistemic possibility.\n[M] The plural verb 'sustain' in the relative clause grammatically agrees with its plural antecedent 'frameworks'.\n\nSelect the correct option:",
    options: [
      "(A) Only J, K and L",
      "(B) Only J, K and M",
      "(C) Only K and M",
      "(D) J, K, L and M"
    ],
    answer: "(B) Only J, K and M",
    explanation: ""
  }

  ],
  evs: [
    {
      id: 1,
      title: "प्रश्न 1. (पारिस्थितिकी तंत्र)",
      text: "पारिस्थितिकी तंत्र (Ecosystem) में ऊर्जा का मुख्य स्रोत क्या है?",
      options: ["(अ) सूर्य का प्रकाश", "(ब) एटीपी (ATP)", "(स) ग्लूकोज", "(द) चंद्रमा"],
      answer: "(अ) सूर्य का प्रकाश",
      explanation: "सूर्य का प्रकाश पारिस्थितिकी तंत्र में ऊर्जा का प्राथमिक एवं मुख्य स्रोत है।"
    }
  ],
  gk: [
    {
      id: 1,
      title: "प्रश्न 1. (छत्तीसगढ़ सामान्य ज्ञान)",
      text: "छत्तीसगढ़ राज्य की स्थापना किस वर्ष हुई थी?",
      options: ["(अ) 1 नवंबर 1999", "(ब) 1 नवंबर 2000", "(स) 1 नवंबर 2001", "(द) 26 जनवरी 2000"],
      answer: "(ब) 1 नवंबर 2000",
      explanation: "मध्य प्रदेश पुनर्गठन अधिनियम के अंतर्गत 1 नवंबर 2000 को छत्तीसगढ़ 26वें राज्य के रूप में अस्तित्व में आया।"
    }
  ]
};

// DOM Elements
const menuToggle = document.getElementById("menuToggle");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const themeToggle = document.getElementById("themeToggle");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");
const questionsContainer = document.getElementById("questionsContainer");
const currentSubjectTitle = document.getElementById("currentSubjectTitle");
const jumpInput = document.getElementById("jumpInput");
const jumpBtn = document.getElementById("jumpBtn");
const navItems = document.querySelectorAll(".nav-item");

let currentSubjectKey = "cdp";

// Title Map for display
const subjectNames = {
  cdp: "बाल विकास एवं शिक्षाशास्त्र (CDP)",
  hindi: "सामान्य हिन्दी",
  english: "General English",
  evs: "पर्यावरण अध्ययन (EVS)",
  gk: "सामान्य ज्ञान (GK)"
};

// Subject Render function
function renderQuestions(subjectKey) {
  currentSubjectKey = subjectKey;
  currentSubjectTitle.textContent = subjectNames[subjectKey];
  questionsContainer.innerHTML = "";
  
  const list = subjectsData[subjectKey] || [];
  
  if (list.length === 0) {
    questionsContainer.innerHTML = "<p>Is subject ke questions jald hi update kiye jayenge.</p>";
    return;
  }

  list.forEach(q => {
    const card = document.createElement("article");
    card.className = "question-card";
    card.id = `q-${q.id}`;

    let tableHTML = "";
    if (q.table) {
      let rowsHTML = q.table.rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("");
      tableHTML = `
        <table class="matching-table">
          <thead>
            <tr><th>${q.table.h1}</th><th>${q.table.h2}</th></tr>
          </thead>
          <tbody>
            ${rowsHTML}
          </tbody>
        </table>
      `;
    }

    let optionsHTML = q.options.map(opt => `<div class="option-item">${opt}</div>`).join("");

    card.innerHTML = `
      <div class="q-header">${q.title}</div>
      <div class="q-text">${q.text}</div>
      ${tableHTML}
      <div class="q-options">
        ${optionsHTML}
      </div>
      <button class="ans-toggle-btn" onclick="toggleAnswer(${q.id})">उत्तर देखें / छुपाएं</button>
      <div class="ans-box" id="ans-${q.id}">
        <strong>उत्तर:</strong> ${q.answer}
        ${q.explanation ? `<br><strong>स्पष्टीकरण:</strong> ${q.explanation}` : ""}
      </div>
    `;

    questionsContainer.appendChild(card);
  });
}

// Toggle Answer Box
window.toggleAnswer = function(id) {
  const ansBox = document.getElementById(`ans-${id}`);
  if (ansBox) {
    ansBox.classList.toggle("show");
  }
};

// Sidebar Toggle Handlers
function openMenu() {
  sidebar.classList.add("open");
  overlay.classList.add("open");
}

function closeMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("open");
}

menuToggle.addEventListener("click", openMenu);
closeSidebar.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Dark/Light Theme Toggle
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

// Navigation Click Handlers
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(btn => btn.classList.remove("active"));
    item.classList.add("active");
    renderQuestions(item.dataset.subject);
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Scroll to Top and Bottom
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMenu();
});

scrollBottomBtn.addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  closeMenu();
});

// Jump to Question Handler
jumpBtn.addEventListener("click", () => {
  const qNum = parseInt(jumpInput.value);
  if (!qNum) return;

  const targetCard = document.getElementById(`q-${qNum}`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    alert("Question " + qNum + " is section me maujood nahi hai.");
  }
});

// Enter key support for Jump input
jumpInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    jumpBtn.click();
  }
});

// Initial Render
renderQuestions("cdp");
