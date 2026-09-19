export type GitaVerse = {
  reference: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  explanation: string;
};

export type GitaChapter = {
  number: number;
  slug: string;
  chapter: string;
  title: string;
  subtitle: string;
  description: string;
  background: string;
  story: string;
  centralTheme: string;
  topics: string[];
  keyTerms: {
    term: string;
    meaning: string;
  }[];
  teachings: {
    title: string;
    explanation: string;
  }[];
  verses: GitaVerse[];
  studentLessons: string[];
  realLife: {
    situation: string;
    lesson: string;
  }[];
  takeaways: string[];
  questions: string[];
  quiz: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

export const gitaChapters: GitaChapter[] = [
  {
    number: 1,
    slug: "chapter-1",
    chapter: "Chapter 1",
    title: "Arjuna Vishada Yoga",
    subtitle: "The Yoga of Arjuna's Despondency",
    description:
      "Arjuna faces a deep moral and emotional conflict when he sees relatives, teachers and friends standing on opposite sides of the battlefield.",
    background:
      "The Bhagavad Gita begins on the battlefield of Kurukshetra. The Pandavas and Kauravas have gathered for a great war after a long period of conflict. Arjuna, one of the greatest warriors, asks Krishna to place his chariot between the two armies so that he can see those with whom he must fight.",
    story:
      "When Arjuna sees respected teachers, relatives, friends and loved ones among the opposing army, his confidence disappears. His body becomes weak, his mind becomes confused, and he questions whether victory is worth the suffering that the war may cause. This emotional crisis becomes the starting point for Krishna's teaching.",
    centralTheme:
      "Difficult decisions can create confusion, fear and emotional pressure. Honest questioning can become the beginning of deeper understanding.",
    topics: [
      "Arjuna's dilemma",
      "Moral conflict",
      "Duty",
      "Fear",
      "Responsibility",
      "Decision making",
    ],
    keyTerms: [
      {
        term: "Vishada",
        meaning: "Sorrow, grief or deep despondency.",
      },
      {
        term: "Dharma",
        meaning: "Duty, responsibility and the right way of conduct.",
      },
      {
        term: "Kurukshetra",
        meaning: "The battlefield where the great conflict takes place.",
      },
      {
        term: "Arjuna",
        meaning: "The Pandava warrior who receives Krishna's teachings.",
      },
    ],
    teachings: [
      {
        title: "Emotions can affect decision making",
        explanation:
          "Arjuna is a skilled warrior, but the emotional pressure of the situation makes it difficult for him to think clearly. The chapter reminds us that strong emotions can temporarily change how we see a problem.",
      },
      {
        title: "Questions are part of learning",
        explanation:
          "Arjuna does not hide his confusion. He openly expresses his doubts. Asking meaningful questions can help us understand difficult situations more clearly.",
      },
      {
        title: "Responsibility can be difficult",
        explanation:
          "Sometimes doing what we believe is our responsibility is emotionally challenging. Understanding our responsibilities requires thoughtful reflection rather than impulsive decisions.",
      },
      {
        title: "A crisis can become a learning opportunity",
        explanation:
          "Arjuna's confusion becomes the starting point for the entire teaching of the Bhagavad Gita. A difficult moment can sometimes lead to deeper self-understanding.",
      },
    ],
    verses: [
      {
        reference: "1.28",
        sanskrit:
          "दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम् ।",
        transliteration:
          "dṛṣṭvemaṁ sva-janaṁ kṛṣṇa yuyutsuṁ samupasthitam",
        meaning:
          "Arjuna sees his own people gathered and ready for battle.",
        explanation:
          "The verse captures the moment when Arjuna realizes that the conflict is not simply between two armies. People he personally knows are standing before him.",
      },
      {
        reference: "1.29",
        sanskrit:
          "सीदन्ति मम गात्राणि मुखं च परिशुष्यति ।",
        transliteration:
          "sīdanti mama gātrāṇi mukhaṁ ca pariśuṣyati",
        meaning:
          "My limbs are failing and my mouth is becoming dry.",
        explanation:
          "Arjuna describes physical symptoms of intense emotional distress. The verse shows how deeply emotional conflict can affect the body.",
      },
      {
        reference: "1.30",
        sanskrit:
          "वेपथुश्च शरीरे मे रोमहर्षश्च जायते ।",
        transliteration:
          "vepathuś ca śarīre me roma-harṣaś ca jāyate",
        meaning:
          "My body trembles and my hair stands on end.",
        explanation:
          "Arjuna's reaction demonstrates the intensity of his fear, sorrow and uncertainty.",
      },
    ],
    studentLessons: [
      "It is normal to feel confused when facing a difficult decision.",
      "Before making an important choice, pause and understand the situation.",
      "Do not be afraid to ask questions when something is unclear.",
      "Strong emotions should be recognized rather than ignored.",
      "A difficult experience can become an opportunity for learning.",
    ],
    realLife: [
      {
        situation:
          "A student has to choose between helping a friend and following an important responsibility.",
        lesson:
          "Instead of reacting immediately, the student can understand both sides and think carefully about the consequences.",
      },
      {
        situation:
          "A student becomes nervous before an examination and feels unable to concentrate.",
        lesson:
          "Recognizing the emotion is the first step. Taking a breath, organizing the problem and seeking guidance can restore clarity.",
      },
      {
        situation:
          "Someone is facing a difficult career or education decision.",
        lesson:
          "Talking honestly with a trusted teacher, parent or mentor can help turn confusion into a structured decision.",
      },
    ],
    takeaways: [
      "Confusion does not mean failure.",
      "Emotions can influence our judgment.",
      "Important decisions deserve thoughtful consideration.",
      "Questions can lead to wisdom.",
      "Seeking guidance is a strength, not a weakness.",
    ],
    questions: [
      "Why does Arjuna become confused before the battle?",
      "How can strong emotions affect decision making?",
      "Why is asking questions important when we face a difficult situation?",
      "What can students learn from Arjuna's emotional struggle?",
      "Can a difficult situation become an opportunity for learning? Explain.",
    ],
    quiz: [
      {
        question: "Why does Arjuna become distressed?",
        options: [
          "He does not know how to use a weapon",
          "He sees loved ones and respected people among the opposing army",
          "He wants to leave the kingdom",
          "He has forgotten the battlefield",
        ],
        answer:
          "He sees loved ones and respected people among the opposing army",
      },
      {
        question: "What does 'Vishada' mean?",
        options: [
          "Victory",
          "Knowledge",
          "Sorrow or despondency",
          "Meditation",
        ],
        answer: "Sorrow or despondency",
      },
      {
        question: "What becomes the starting point for Krishna's teaching?",
        options: [
          "Arjuna's confusion and questions",
          "A celebration",
          "A competition",
          "A journey to another kingdom",
        ],
        answer: "Arjuna's confusion and questions",
      },
    ],
  },

  {
    number: 2,
    slug: "chapter-2",
    chapter: "Chapter 2",
    title: "Sankhya Yoga",
    subtitle: "The Yoga of Knowledge",
    description:
      "Krishna begins giving Arjuna a deeper understanding of the self, duty, wisdom and disciplined action.",
    background:
      "After Arjuna expresses his grief and refuses to fight, Krishna begins explaining principles that go beyond the immediate situation. This chapter introduces several central ideas that appear throughout the Gita.",
    story:
      "Krishna explains that the true self is different from the temporary body. He then teaches Arjuna about performing one's duty without becoming excessively attached to the results. The chapter also describes the qualities of a person whose mind remains balanced.",
    centralTheme:
      "Wisdom means understanding what is lasting, performing one's responsibility and maintaining balance in success and failure.",
    topics: [
      "Self",
      "Duty",
      "Knowledge",
      "Karma",
      "Equanimity",
      "Wisdom",
    ],
    keyTerms: [
      {
        term: "Atman",
        meaning: "The inner self or enduring spiritual self.",
      },
      {
        term: "Sthitaprajna",
        meaning: "A person established in steady wisdom.",
      },
      {
        term: "Karma",
        meaning: "Action or deed.",
      },
      {
        term: "Buddhi",
        meaning: "Intelligence, understanding or discriminative wisdom.",
      },
    ],
    teachings: [
      {
        title: "The self is deeper than the temporary body",
        explanation:
          "Krishna teaches Arjuna to look beyond temporary physical circumstances and understand the enduring nature of the self.",
      },
      {
        title: "Focus on action",
        explanation:
          "A person should concentrate on performing their responsibility sincerely rather than allowing anxiety about future results to control their mind.",
      },
      {
        title: "Balance matters",
        explanation:
          "Success and failure are both temporary experiences. Maintaining balance helps a person continue acting wisely.",
      },
      {
        title: "Wisdom requires discipline",
        explanation:
          "A steady mind does not mean that a person has no emotions. It means that emotions do not completely control decisions.",
      },
    ],
    verses: [
      {
        reference: "2.47",
        sanskrit:
          "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।",
        transliteration:
          "karmaṇy evādhikāras te mā phaleṣu kadācana",
        meaning:
          "Your focus is on action, not on controlling the result.",
        explanation:
          "This famous teaching encourages sincere effort. It does not mean that results are unimportant; rather, we should not allow anxiety about results to prevent us from doing our best.",
      },
      {
        reference: "2.48",
        sanskrit:
          "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ।",
        transliteration:
          "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya",
        meaning:
          "Perform your duties with balance and without unhealthy attachment.",
        explanation:
          "The teaching encourages a balanced attitude while performing responsibilities.",
      },
      {
        reference: "2.50",
        sanskrit:
          "योगः कर्मसु कौशलम्",
        transliteration:
          "yogaḥ karmasu kauśalam",
        meaning:
          "Yoga is skillfulness in action.",
        explanation:
          "Responsible and thoughtful action requires attention, discipline and understanding.",
      },
    ],
    studentLessons: [
      "Concentrate on preparation and effort instead of worrying constantly about marks.",
      "Success should not make us arrogant, and failure should not make us give up.",
      "Developing concentration takes regular practice.",
      "Good decisions require both knowledge and emotional balance.",
      "Responsibility should be performed sincerely.",
    ],
    realLife: [
      {
        situation:
          "A student is preparing for a competitive examination.",
        lesson:
          "The student cannot completely control the final result, but can control preparation, revision, practice and time management.",
      },
      {
        situation:
          "Someone receives a lower score than expected.",
        lesson:
          "Instead of becoming discouraged, they can examine mistakes and improve their preparation.",
      },
      {
        situation:
          "A student gets excellent marks and begins looking down on others.",
        lesson:
          "Success is an opportunity to remain humble and continue learning.",
      },
    ],
    takeaways: [
      "Effort deserves attention.",
      "Results cannot always be controlled.",
      "Balance is an important part of wisdom.",
      "Knowledge and action should work together.",
      "A steady mind makes better decisions.",
    ],
    questions: [
      "What does Krishna teach about action and results?",
      "What is meant by a balanced mind?",
      "Why should success and failure not completely control our emotions?",
      "How can students apply the teaching of focused effort?",
      "What does 'yogaḥ karmasu kauśalam' suggest about action?",
    ],
    quiz: [
      {
        question: "What does Karma mean?",
        options: [
          "Action or deed",
          "Sleep",
          "Food",
          "Travel",
        ],
        answer: "Action or deed",
      },
      {
        question: "What should a student focus on most directly?",
        options: [
          "Other students' marks",
          "Sincere preparation and effort",
          "Only the final result",
          "Luck",
        ],
        answer: "Sincere preparation and effort",
      },
      {
        question: "What quality is associated with steady wisdom?",
        options: [
          "Constant anger",
          "Extreme excitement",
          "Balance",
          "Carelessness",
        ],
        answer: "Balance",
      },
    ],
  },

  {
    number: 3,
    slug: "chapter-3",
    chapter: "Chapter 3",
    title: "Karma Yoga",
    subtitle: "The Yoga of Action",
    description:
      "Krishna explains why responsible action is important and how action can be performed without selfish attachment.",
    background:
      "Arjuna continues to question how knowledge and action should be combined. Krishna explains that people cannot remain completely inactive and that responsible action is an important part of life.",
    story:
      "Krishna teaches that everyone is naturally involved in action. Instead of abandoning responsibilities, a person should perform them sincerely and without selfish attachment. He also emphasizes acting for the welfare of others.",
    centralTheme:
      "Responsible action, performed with the right intention, can become a path of personal growth.",
    topics: [
      "Karma Yoga",
      "Duty",
      "Selfless action",
      "Discipline",
      "Service",
      "Responsibility",
    ],
    keyTerms: [
      {
        term: "Karma Yoga",
        meaning: "The path of disciplined and selfless action.",
      },
      {
        term: "Yajna",
        meaning: "A spirit of offering, cooperation and selfless contribution.",
      },
      {
        term: "Svadharma",
        meaning: "One's own duty or responsibility.",
      },
      {
        term: "Loka-sangraha",
        meaning: "Working for the welfare and stability of society.",
      },
    ],
    teachings: [
      {
        title: "Action is unavoidable",
        explanation:
          "Everyday life requires action. Even choosing not to act can have consequences.",
      },
      {
        title: "Intention matters",
        explanation:
          "The quality of an action is influenced by why it is performed. Selfish motivation and responsible service can produce very different outcomes.",
      },
      {
        title: "Work can become service",
        explanation:
          "When our actions benefit others and are performed sincerely, ordinary responsibilities can become meaningful contributions.",
      },
      {
        title: "Lead through example",
        explanation:
          "People often learn from the behavior of those they respect. Responsible behavior can positively influence others.",
      },
    ],
    verses: [
      {
        reference: "3.8",
        sanskrit:
          "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः ।",
        transliteration:
          "niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ",
        meaning:
          "Perform your prescribed responsibility; action is better than inaction.",
        explanation:
          "The teaching emphasizes the importance of fulfilling responsibilities rather than avoiding them.",
      },
      {
        reference: "3.19",
        sanskrit:
          "तस्मादसक्तः सततं कार्यं कर्म समाचर ।",
        transliteration:
          "tasmād asaktaḥ satataṁ kāryaṁ karma samācar",
        meaning:
          "Therefore perform your necessary duties without attachment.",
        explanation:
          "Responsible work should be performed sincerely without allowing selfish attachment to dominate the mind.",
      },
    ],
    studentLessons: [
      "Complete your responsibilities even when they are not exciting.",
      "Help others without always expecting something in return.",
      "Good habits are built through repeated action.",
      "Your behavior can influence people around you.",
      "Purposeful work develops discipline.",
    ],
    realLife: [
      {
        situation:
          "A student has household responsibilities along with studies.",
        lesson:
          "Managing both responsibilities can build discipline and time-management skills.",
      },
      {
        situation:
          "A classmate is struggling with a difficult subject.",
        lesson:
          "Helping them understand the topic can turn knowledge into service.",
      },
      {
        situation:
          "A team project becomes difficult.",
        lesson:
          "Instead of waiting for someone else to solve everything, each member can contribute responsibly.",
      },
    ],
    takeaways: [
      "Action is an essential part of life.",
      "Responsibility should not always be avoided.",
      "Intention matters.",
      "Service can make work meaningful.",
      "Good examples influence others.",
    ],
    questions: [
      "Why does Krishna emphasize action?",
      "What is Karma Yoga?",
      "How can ordinary work become meaningful?",
      "Why is intention important?",
      "How can students practice selfless action?",
    ],
    quiz: [
      {
        question: "What is Karma Yoga mainly about?",
        options: [
          "Avoiding all work",
          "Disciplined and responsible action",
          "Only meditation",
          "Winning competitions",
        ],
        answer: "Disciplined and responsible action",
      },
      {
        question: "What can make an action more meaningful?",
        options: [
          "Selfless intention",
          "Laziness",
          "Anger",
          "Jealousy",
        ],
        answer: "Selfless intention",
      },
      {
        question: "What does Loka-sangraha refer to?",
        options: [
          "Personal wealth",
          "Welfare and stability of society",
          "Physical strength",
          "Sleep",
        ],
        answer: "Welfare and stability of society",
      },
    ],
  },

  {
    number: 4,
    slug: "chapter-4",
    chapter: "Chapter 4",
    title: "Jnana Karma Sannyasa Yoga",
    subtitle: "The Yoga of Knowledge and Renunciation of Action",
    description:
      "Krishna explains the relationship between knowledge, action, wisdom and the purpose of righteous action.",
    background:
      "Krishna explains that this teaching is an ancient spiritual knowledge that has been passed through teachers and students. He also explains the relationship between divine purpose and righteous action.",
    story:
      "Arjuna asks how Krishna could have taught this knowledge in ancient times. Krishna explains the distinction between ordinary human birth and divine manifestation, and then returns to the importance of knowledge and selfless action.",
    centralTheme:
      "Knowledge gives direction to action, while wise action helps transform knowledge into lived understanding.",
    topics: [
      "Knowledge",
      "Wisdom",
      "Action",
      "Teacher",
      "Purpose",
      "Righteousness",
    ],
    keyTerms: [
      {
        term: "Jnana",
        meaning: "Knowledge or spiritual understanding.",
      },
      {
        term: "Avatara",
        meaning: "Divine manifestation or descent.",
      },
      {
        term: "Guru",
        meaning: "A teacher or guide who helps transmit knowledge.",
      },
      {
        term: "Dharma",
        meaning: "Righteous responsibility and order.",
      },
    ],
    teachings: [
      {
        title: "Knowledge should guide action",
        explanation:
          "Information becomes useful when it helps a person make wiser decisions.",
      },
      {
        title: "Learning requires humility",
        explanation:
          "A sincere learner approaches teachers and knowledge with respect and thoughtful questions.",
      },
      {
        title: "Righteous action protects balance",
        explanation:
          "The chapter presents the restoration of dharma as an important purpose of divine action.",
      },
      {
        title: "Wisdom changes how we work",
        explanation:
          "Understanding the deeper purpose of an action can transform ordinary work into meaningful effort.",
      },
    ],
    verses: [
      {
        reference: "4.7",
        sanskrit:
          "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।",
        transliteration:
          "yadā yadā hi dharmasya glānir bhavati bhārata",
        meaning:
          "Whenever righteousness declines, a restoration of balance becomes necessary.",
        explanation:
          "This verse introduces one of the Gita's most famous teachings about divine intervention and restoration of dharma.",
      },
      {
        reference: "4.34",
        sanskrit:
          "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया ।",
        transliteration:
          "tad viddhi praṇipātena paripraśnena sevayā",
        meaning:
          "Seek knowledge through humility, sincere questioning and service.",
        explanation:
          "The verse presents respectful learning and meaningful questions as important parts of gaining wisdom.",
      },
    ],
    studentLessons: [
      "Do not collect information without trying to understand it.",
      "Ask teachers meaningful questions.",
      "Respect genuine knowledge and experience.",
      "Use what you learn to make better decisions.",
      "Learning should improve both understanding and behavior.",
    ],
    realLife: [
      {
        situation:
          "A student memorizes formulas without understanding them.",
        lesson:
          "Connecting formulas with concepts and examples produces deeper learning.",
      },
      {
        situation:
          "A student is confused about a difficult topic.",
        lesson:
          "Asking a teacher a clear question can open the path to understanding.",
      },
      {
        situation:
          "Someone has technical knowledge but uses it carelessly.",
        lesson:
          "Knowledge should be combined with responsibility and ethical judgment.",
      },
    ],
    takeaways: [
      "Knowledge should guide action.",
      "Questions are essential to learning.",
      "Humility strengthens education.",
      "Understanding is deeper than memorization.",
      "Righteous action supports balance.",
    ],
    questions: [
      "What is Jnana?",
      "Why are questions important in learning?",
      "How can knowledge influence action?",
      "What does the chapter say about dharma?",
      "Why should knowledge be combined with responsibility?",
    ],
    quiz: [
      {
        question: "What does Jnana mean?",
        options: [
          "Knowledge",
          "Sleep",
          "Competition",
          "Food",
        ],
        answer: "Knowledge",
      },
      {
        question: "According to the teaching, how should a learner approach knowledge?",
        options: [
          "With arrogance",
          "With humility and questions",
          "Without listening",
          "By avoiding teachers",
        ],
        answer: "With humility and questions",
      },
      {
        question: "What should knowledge ideally help us do?",
        options: [
          "Make wiser decisions",
          "Avoid all responsibilities",
          "Ignore others",
          "Stop learning",
        ],
        answer: "Make wiser decisions",
      },
    ],
  },

  {
    number: 5,
    slug: "chapter-5",
    chapter: "Chapter 5",
    title: "Karma Sannyasa Yoga",
    subtitle: "The Yoga of Renunciation",
    description:
      "Krishna explains how disciplined action and renunciation can be understood together.",
    background:
      "Arjuna asks whether renouncing action or performing action is the better path. Krishna explains that both can lead toward spiritual growth, but disciplined action performed without attachment is especially practical.",
    story:
      "The chapter compares different approaches to life and emphasizes inner renunciation rather than simply abandoning external responsibilities. A person can perform duties while maintaining an attitude of non-attachment.",
    centralTheme:
      "True renunciation is an inner attitude of freedom from selfish attachment, not simply giving up responsibilities.",
    topics: [
      "Renunciation",
      "Action",
      "Peace",
      "Equality",
      "Self-control",
      "Inner balance",
    ],
    keyTerms: [
      {
        term: "Sannyasa",
        meaning: "Renunciation or letting go of attachment.",
      },
      {
        term: "Tyaga",
        meaning: "Letting go, especially of attachment to results.",
      },
      {
        term: "Samatva",
        meaning: "Equanimity or balanced attitude.",
      },
      {
        term: "Shanti",
        meaning: "Peace.",
      },
    ],
    teachings: [
      {
        title: "Inner renunciation matters",
        explanation:
          "A person does not necessarily need to abandon responsibilities to develop inner freedom.",
      },
      {
        title: "Work without selfish attachment",
        explanation:
          "Performing duties sincerely while reducing selfish expectations can bring greater mental peace.",
      },
      {
        title: "See people with greater equality",
        explanation:
          "Wisdom encourages a person to look beyond superficial differences and recognize shared human value.",
      },
      {
        title: "Peace comes through discipline",
        explanation:
          "A disciplined mind is less controlled by endless desires and reactions.",
      },
    ],
    verses: [
      {
        reference: "5.10",
        sanskrit:
          "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः ।",
        transliteration:
          "brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ",
        meaning:
          "One who performs action while letting go of attachment remains inwardly free.",
        explanation:
          "The teaching emphasizes performing responsibilities without allowing selfish attachment to dominate the mind.",
      },
      {
        reference: "5.18",
        sanskrit:
          "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि ।",
        transliteration:
          "vidyā-vinaya-sampanne brāhmaṇe gavi hastini",
        meaning:
          "The wise person sees with a deeper sense of equality.",
        explanation:
          "The verse teaches that genuine wisdom can reduce superficial judgments based on external differences.",
      },
    ],
    studentLessons: [
      "Doing your responsibilities does not prevent inner growth.",
      "Avoid excessive attachment to praise and rewards.",
      "Treat people with dignity and respect.",
      "Practice self-control in everyday decisions.",
      "A calm mind supports better learning.",
    ],
    realLife: [
      {
        situation:
          "A student studies only when there is a reward.",
        lesson:
          "Developing intrinsic motivation can make learning more consistent.",
      },
      {
        situation:
          "Someone becomes angry whenever they do not receive recognition.",
        lesson:
          "Reducing dependence on external praise can create emotional stability.",
      },
    ],
    takeaways: [
      "Renunciation is largely an inner attitude.",
      "Responsible action and spiritual growth can coexist.",
      "Self-control supports peace.",
      "Wisdom reduces superficial judgment.",
      "Attachment can create unnecessary stress.",
    ],
    questions: [
      "What is meant by inner renunciation?",
      "How can responsibility and inner peace coexist?",
      "Why is self-control important?",
      "How can attachment create stress?",
      "What can students learn from this chapter?",
    ],
    quiz: [
      {
        question: "What is Sannyasa?",
        options: [
          "Renunciation",
          "Competition",
          "Entertainment",
          "Travel",
        ],
        answer: "Renunciation",
      },
      {
        question: "What can reduce unnecessary mental stress?",
        options: [
          "Excessive attachment",
          "Balanced action",
          "Constant comparison",
          "Anger",
        ],
        answer: "Balanced action",
      },
      {
        question: "What does Shanti mean?",
        options: [
          "Peace",
          "War",
          "Knowledge",
          "Action",
        ],
        answer: "Peace",
      },
    ],
  },

  {
    number: 6,
    slug: "chapter-6",
    chapter: "Chapter 6",
    title: "Dhyana Yoga",
    subtitle: "The Yoga of Meditation",
    description:
      "Krishna explains meditation, self-discipline and the importance of training the mind.",
    background:
      "The chapter develops the idea that the mind can become either a helpful friend or a source of difficulty depending on how it is trained.",
    story:
      "Krishna describes a disciplined approach to meditation and explains how a person should balance food, sleep, work and recreation. Arjuna later admits that controlling the mind is difficult, and Krishna explains that practice and detachment are important.",
    centralTheme:
      "A trained mind can support concentration, emotional balance and personal growth.",
    topics: [
      "Meditation",
      "Concentration",
      "Mind",
      "Practice",
      "Self-control",
      "Balance",
    ],
    keyTerms: [
      {
        term: "Dhyana",
        meaning: "Meditation or sustained contemplation.",
      },
      {
        term: "Abhyasa",
        meaning: "Repeated practice.",
      },
      {
        term: "Vairagya",
        meaning: "Detachment or freedom from excessive attachment.",
      },
      {
        term: "Manas",
        meaning: "Mind.",
      },
    ],
    teachings: [
      {
        title: "The mind needs training",
        explanation:
          "Concentration does not usually appear automatically. It develops through repeated practice.",
      },
      {
        title: "Balance supports discipline",
        explanation:
          "Healthy routines involving sleep, food, work and recreation make disciplined practice more sustainable.",
      },
      {
        title: "Practice matters",
        explanation:
          "When attention wanders, gently bringing it back is part of the practice.",
      },
      {
        title: "Do not become discouraged",
        explanation:
          "A distracted mind is not a reason to give up. Progress comes through consistent effort.",
      },
    ],
    verses: [
      {
        reference: "6.5",
        sanskrit:
          "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।",
        transliteration:
          "uddhared ātmanātmānaṁ nātmānam avasādayet",
        meaning:
          "One should uplift oneself rather than allow oneself to fall into discouragement.",
        explanation:
          "The verse encourages personal responsibility and constructive self-development.",
      },
      {
        reference: "6.35",
        sanskrit:
          "असंशयं महाबाहो मनो दुर्निग्रहं चलम् ।",
        transliteration:
          "asaṁśayaṁ mahā-bāho mano durnigrahaṁ calam",
        meaning:
          "The mind is certainly restless and difficult to control.",
        explanation:
          "Krishna acknowledges the difficulty of controlling the mind and then emphasizes practice and detachment.",
      },
    ],
    studentLessons: [
      "Concentration improves through practice.",
      "Short, regular study sessions can be more effective than irregular long sessions.",
      "Healthy sleep supports learning.",
      "When your mind wanders, return gently to the task.",
      "Do not give up because progress feels slow.",
    ],
    realLife: [
      {
        situation:
          "A student constantly checks their phone while studying.",
        lesson:
          "Creating a distraction-free study period and repeatedly returning attention to the lesson can strengthen concentration.",
      },
      {
        situation:
          "Someone starts meditation but struggles to focus.",
        lesson:
          "Difficulty concentrating is normal. Regular practice is more important than immediate perfection.",
      },
    ],
    takeaways: [
      "The mind can be trained.",
      "Practice builds concentration.",
      "Balance supports discipline.",
      "Distraction is part of the learning process.",
      "Consistency matters more than perfection.",
    ],
    questions: [
      "Why is the mind compared to something that needs training?",
      "What is Abhyasa?",
      "Why is balance important for disciplined living?",
      "How can students improve concentration?",
      "What should we do when the mind wanders?",
    ],
    quiz: [
      {
        question: "What does Dhyana mean?",
        options: [
          "Meditation",
          "Competition",
          "Travel",
          "Food",
        ],
        answer: "Meditation",
      },
      {
        question: "What helps train the mind?",
        options: [
          "Regular practice",
          "Giving up",
          "Constant distraction",
          "Avoiding all effort",
        ],
        answer: "Regular practice",
      },
      {
        question: "What does Abhyasa mean?",
        options: [
          "Repeated practice",
          "Anger",
          "Sleep",
          "Fear",
        ],
        answer: "Repeated practice",
      },
    ],
  },

  {
    number: 7,
    title: "Jnana Vijnana Yoga",
    slug: "chapter-7",
    chapter: "Jnana Vijnana Yoga",
    subtitle: "Knowledge and Realization",
    description:
      "Krishna explains how knowledge can develop into deeper realization and understanding.",
    background:
      "After discussing disciplined action and meditation, Krishna expands the teaching toward understanding the nature of reality and the relationship between knowledge and lived experience.",
    story:
      "The chapter describes different aspects of reality and explains that intellectual information alone is not enough. Deeper understanding develops when knowledge becomes personally meaningful.",
    centralTheme:
      "True learning moves beyond collecting facts and develops into deeper understanding.",
    topics: [
      "Knowledge",
      "Realization",
      "Understanding",
      "Nature",
      "Devotion",
      "Wisdom",
    ],
    keyTerms: [
      {
        term: "Jnana",
        meaning: "Knowledge.",
      },
      {
        term: "Vijnana",
        meaning: "Deeper realization or experiential understanding.",
      },
      {
        term: "Prakriti",
        meaning: "Nature or material reality.",
      },
      {
        term: "Maya",
        meaning: "The power that can make reality appear differently from its deeper nature.",
      },
    ],
    teachings: [
      {
        title: "Information is not the same as wisdom",
        explanation:
          "A person may know many facts without understanding their significance. Wisdom connects information with insight.",
      },
      {
        title: "Understanding requires reflection",
        explanation:
          "Thoughtful reflection helps us connect what we study with broader ideas and experiences.",
      },
      {
        title: "Learning can be transformative",
        explanation:
          "Deep understanding can change how a person thinks, behaves and responds to life.",
      },
    ],
    verses: [
      {
        reference: "7.2",
        sanskrit:
          "ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः ।",
        transliteration:
          "jñānaṁ te 'haṁ sa-vijñānam idaṁ vakṣyāmy aśeṣataḥ",
        meaning:
          "Knowledge together with deeper realization is being explained.",
        explanation:
          "The chapter emphasizes both conceptual knowledge and deeper understanding.",
      },
    ],
    studentLessons: [
      "Understand concepts instead of memorizing blindly.",
      "Ask why a fact is important.",
      "Connect theory with practical examples.",
      "Reflect on what you learn.",
      "Use knowledge responsibly.",
    ],
    realLife: [
      {
        situation:
          "A student memorizes a science definition but cannot explain it.",
        lesson:
          "Using diagrams, examples and simple explanations can turn memorization into understanding.",
      },
      {
        situation:
          "Someone learns programming syntax but cannot build anything.",
        lesson:
          "Practical projects turn theoretical knowledge into experience.",
      },
    ],
    takeaways: [
      "Knowledge should lead to understanding.",
      "Reflection deepens learning.",
      "Practice connects theory with experience.",
      "Wisdom changes behavior.",
      "Learning should be meaningful.",
    ],
    questions: [
      "What is the difference between information and understanding?",
      "Why is reflection important?",
      "How can practice improve knowledge?",
      "What does Vijnana suggest?",
      "How can students turn information into wisdom?",
    ],
    quiz: [
      {
        question: "What does Vijnana refer to?",
        options: [
          "Deeper realization",
          "Sleep",
          "Competition",
          "Fear",
        ],
        answer: "Deeper realization",
      },
      {
        question: "What helps transform facts into understanding?",
        options: [
          "Reflection and practice",
          "Ignoring concepts",
          "Avoiding questions",
          "Memorizing without thinking",
        ],
        answer: "Reflection and practice",
      },
    ],
  },

  {
    number: 8,
    slug: "chapter-8",
    chapter: "Chapter 8",
    title: "Akshara Brahma Yoga",
    subtitle: "The Yoga of the Imperishable",
    description:
      "The chapter explores the eternal, remembrance, consciousness and the importance of maintaining meaningful focus.",
    background:
      "Arjuna asks questions about Brahman, the self, action and what happens at the time of death. Krishna responds by explaining the importance of remembrance and spiritual focus.",
    story:
      "Krishna explains that a person's consistent mental focus has great significance. The chapter connects daily remembrance, consciousness and the ultimate direction of one's life.",
    centralTheme:
      "What we repeatedly focus on can shape our habits, character and direction.",
    topics: [
      "Brahman",
      "Remembrance",
      "Focus",
      "Consciousness",
      "Purpose",
      "Imperishable reality",
    ],
    keyTerms: [
      {
        term: "Akshara",
        meaning: "Imperishable or eternal.",
      },
      {
        term: "Brahman",
        meaning: "The ultimate spiritual reality.",
      },
      {
        term: "Adhyatma",
        meaning: "The spiritual self or inner nature.",
      },
      {
        term: "Smriti",
        meaning: "Remembrance or memory.",
      },
    ],
    teachings: [
      {
        title: "Attention shapes direction",
        explanation:
          "The things we repeatedly think about can influence our habits and priorities.",
      },
      {
        title: "Develop meaningful focus",
        explanation:
          "A purposeful life requires attention toward values that matter.",
      },
      {
        title: "Daily habits matter",
        explanation:
          "Consistent habits prepare the mind to respond according to what we have practiced.",
      },
    ],
    verses: [
      {
        reference: "8.7",
        sanskrit:
          "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च ।",
        transliteration:
          "tasmāt sarveṣu kāleṣu mām anusmara yudhya ca",
        meaning:
          "Remember the higher purpose while performing your responsibility.",
        explanation:
          "The teaching combines remembrance with action rather than suggesting that responsibility should simply be abandoned.",
      },
    ],
    studentLessons: [
      "Choose carefully what receives your attention.",
      "Build positive study habits.",
      "Keep meaningful goals visible.",
      "Combine purpose with action.",
      "Daily repetition shapes long-term habits.",
    ],
    realLife: [
      {
        situation:
          "A student spends hours thinking about distractions.",
        lesson:
          "Replacing some distractions with purposeful study routines can gradually change attention habits.",
      },
    ],
    takeaways: [
      "Focus influences direction.",
      "Habits shape character.",
      "Purpose and action should work together.",
      "Consistent remembrance supports discipline.",
    ],
    questions: [
      "Why is remembrance important in this chapter?",
      "How can repeated thoughts influence habits?",
      "How can students develop meaningful focus?",
      "Why should purpose be combined with action?",
    ],
    quiz: [
      {
        question: "What does Akshara mean?",
        options: [
          "Imperishable",
          "Temporary",
          "Competition",
          "Fear",
        ],
        answer: "Imperishable",
      },
      {
        question: "What can repeated attention influence?",
        options: [
          "Habits and direction",
          "Nothing",
          "Only physical strength",
          "Weather",
        ],
        answer: "Habits and direction",
      },
    ],
  },

  {
    number: 9,
    title: "Raja Vidya Raja Guhya Yoga",
    slug: "chapter-9",
    chapter: "Raja Vidya Raja Guhya Yoga",
    subtitle: "The Yoga of Royal Knowledge and Royal Secret",
    description:
      "Krishna presents profound spiritual knowledge and emphasizes sincere devotion, trust and inner transformation.",
    background:
      "The chapter presents a direct and accessible path of devotion while describing the relationship between the individual and the divine.",
    story:
      "Krishna explains that sincere devotion can be practiced through simple offerings and an attitude of love. The chapter emphasizes that spiritual value is not determined merely by external status.",
    centralTheme:
      "Sincerity, devotion and humility can transform ordinary actions into meaningful spiritual practice.",
    topics: [
      "Devotion",
      "Knowledge",
      "Faith",
      "Sincerity",
      "Humility",
      "Service",
    ],
    keyTerms: [
      {
        term: "Bhakti",
        meaning: "Devotion or loving dedication.",
      },
      {
        term: "Shraddha",
        meaning: "Faith, trust or sincere conviction.",
      },
      {
        term: "Seva",
        meaning: "Selfless service.",
      },
    ],
    teachings: [
      {
        title: "Sincerity matters",
        explanation:
          "A small action performed with genuine sincerity can carry deep personal meaning.",
      },
      {
        title: "Devotion develops humility",
        explanation:
          "Recognizing something greater than oneself can encourage gratitude and humility.",
      },
      {
        title: "Simple actions can be meaningful",
        explanation:
          "The chapter emphasizes sincerity rather than the external size of an offering.",
      },
    ],
    verses: [
      {
        reference: "9.26",
        sanskrit:
          "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति ।",
        transliteration:
          "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati",
        meaning:
          "A simple offering made with devotion is accepted with sincerity.",
        explanation:
          "The verse emphasizes the importance of devotion and sincerity rather than material grandeur.",
      },
    ],
    studentLessons: [
      "Do small things sincerely.",
      "Practice gratitude.",
      "Respect the efforts of others.",
      "Service can develop humility.",
      "Do not measure worth only by material value.",
    ],
    realLife: [
      {
        situation:
          "A student wants to help but has very few resources.",
        lesson:
          "Sharing time, knowledge or kindness can still be meaningful.",
      },
      {
        situation:
          "Someone receives help and forgets to appreciate it.",
        lesson:
          "Gratitude strengthens relationships and develops humility.",
      },
    ],
    takeaways: [
      "Sincerity matters more than display.",
      "Devotion can develop humility.",
      "Simple actions can carry meaning.",
      "Gratitude is valuable.",
      "Service benefits both the giver and receiver.",
    ],
    questions: [
      "What does Bhakti mean?",
      "Why does sincerity matter?",
      "How can service develop humility?",
      "Why is gratitude important?",
    ],
    quiz: [
      {
        question: "What does Bhakti mean?",
        options: [
          "Devotion",
          "Competition",
          "Anger",
          "Fear",
        ],
        answer: "Devotion",
      },
      {
        question: "What does the teaching of 9.26 emphasize?",
        options: [
          "Sincerity of devotion",
          "Material wealth",
          "Physical strength",
          "Competition",
        ],
        answer: "Sincerity of devotion",
      },
    ],
  },

  {
    number: 10,
    slug: "chapter-10",
    chapter: "Chapter 10",
    title: "Vibhuti Yoga",
    subtitle: "The Yoga of Divine Manifestations",
    description:
      "Krishna describes remarkable manifestations and qualities that inspire wonder, gratitude and reflection.",
    background:
      "Arjuna asks Krishna to describe the divine manifestations through which he can remember the higher reality in the world.",
    story:
      "Krishna lists examples of excellence, greatness and beauty found throughout creation. These examples encourage Arjuna to recognize the extraordinary within the ordinary world.",
    centralTheme:
      "Recognizing excellence and beauty can inspire gratitude, respect and a desire for personal growth.",
    topics: [
      "Excellence",
      "Wonder",
      "Greatness",
      "Nature",
      "Gratitude",
      "Reflection",
    ],
    keyTerms: [
      {
        term: "Vibhuti",
        meaning: "Glorious manifestation or special excellence.",
      },
      {
        term: "Aishvarya",
        meaning: "Grandeur, power or excellence.",
      },
    ],
    teachings: [
      {
        title: "Recognize excellence",
        explanation:
          "Seeing greatness in nature, knowledge, character and achievement can inspire us.",
      },
      {
        title: "Wonder encourages learning",
        explanation:
          "Curiosity about the world can motivate deeper study and reflection.",
      },
      {
        title: "Use admiration positively",
        explanation:
          "Instead of becoming jealous of excellence, we can learn from it and use it as inspiration.",
      },
    ],
    verses: [
      {
        reference: "10.20",
        sanskrit:
          "अहमात्मा गुडाकेश सर्वभूताशयस्थितः ।",
        transliteration:
          "aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ",
        meaning:
          "The divine presence is described as dwelling within all beings.",
        explanation:
          "The verse encourages a broad sense of connection and respect toward living beings.",
      },
    ],
    studentLessons: [
      "Be curious about the world.",
      "Learn from people who excel.",
      "Admire excellence without jealousy.",
      "Practice gratitude.",
      "Let curiosity lead to learning.",
    ],
    realLife: [
      {
        situation:
          "A student sees another student performing exceptionally well.",
        lesson:
          "Instead of comparing negatively, ask what habits or methods can be learned from that student.",
      },
    ],
    takeaways: [
      "Excellence can inspire us.",
      "Curiosity is valuable.",
      "Gratitude improves perspective.",
      "Learn from positive examples.",
    ],
    questions: [
      "What is Vibhuti?",
      "How can excellence inspire learning?",
      "Why should admiration not become jealousy?",
      "How does curiosity help students?",
    ],
    quiz: [
      {
        question: "What does Vibhuti refer to?",
        options: [
          "Glorious manifestation or excellence",
          "Fear",
          "Sleep",
          "Failure",
        ],
        answer: "Glorious manifestation or excellence",
      },
    ],
  },

  {
    number: 11,
    slug: "chapter-11",
    chapter: "Chapter 11",
    title: "Vishvarupa Darshana Yoga",
    subtitle: "The Vision of the Universal Form",
    description:
      "Arjuna receives a profound vision of Krishna's universal form and gains a dramatically expanded perspective.",
    background:
      "After hearing Krishna's teachings about divine manifestations, Arjuna asks to see the universal form directly.",
    story:
      "Krishna grants Arjuna a divine vision through which he sees an overwhelming universal form containing countless beings and forces of creation and destruction. The experience fills Arjuna with awe, wonder and fear.",
    centralTheme:
      "A wider perspective can transform our understanding of individual events and our place in the world.",
    topics: [
      "Universal form",
      "Perspective",
      "Awe",
      "Creation",
      "Time",
      "Understanding",
    ],
    keyTerms: [
      {
        term: "Vishvarupa",
        meaning: "Universal or cosmic form.",
      },
      {
        term: "Darshana",
        meaning: "Vision, seeing or profound encounter.",
      },
      {
        term: "Kala",
        meaning: "Time.",
      },
    ],
    teachings: [
      {
        title: "Perspective changes understanding",
        explanation:
          "Seeing a situation within a much larger context can change how we interpret it.",
      },
      {
        title: "Great experiences can be overwhelming",
        explanation:
          "Awe can involve both wonder and fear when we encounter something beyond our ordinary experience.",
      },
      {
        title: "Individual events exist within larger systems",
        explanation:
          "The universal vision presents existence as interconnected rather than isolated.",
      },
    ],
    verses: [
      {
        reference: "11.12",
        sanskrit:
          "दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता ।",
        transliteration:
          "divi sūrya-sahasrasya bhaved yugapad utthitā",
        meaning:
          "The vision is compared to the brilliance of many suns rising together.",
        explanation:
          "The imagery communicates the extraordinary intensity and scale of Arjuna's experience.",
      },
    ],
    studentLessons: [
      "Try to see problems from a wider perspective.",
      "Big challenges may look different when viewed over time.",
      "Wonder and curiosity can expand understanding.",
      "Recognize that individual actions affect larger systems.",
    ],
    realLife: [
      {
        situation:
          "A student becomes upset about one poor examination.",
        lesson:
          "Looking at the entire academic journey rather than one result can provide a healthier perspective.",
      },
    ],
    takeaways: [
      "Perspective matters.",
      "A larger view can change interpretation.",
      "Life is interconnected.",
      "Wonder can deepen learning.",
    ],
    questions: [
      "Why does Arjuna ask to see the universal form?",
      "How can perspective change our understanding?",
      "Why is the vision described as overwhelming?",
      "How can students apply the idea of wider perspective?",
    ],
    quiz: [
      {
        question: "What does Vishvarupa mean?",
        options: [
          "Universal form",
          "Meditation",
          "Duty",
          "Renunciation",
        ],
        answer: "Universal form",
      },
    ],
  },

  {
    number: 12,
    slug: "chapter-12",
    chapter: "Chapter 12",
    title: "Bhakti Yoga",
    subtitle: "The Yoga of Devotion",
    description:
      "Krishna explains devotion and describes the qualities of a person who lives with compassion, humility and steadiness.",
    background:
      "Arjuna asks about different approaches to spiritual practice. Krishna explains the importance of devotion and describes qualities associated with a mature devotee.",
    story:
      "The chapter emphasizes sincere devotion while also presenting a practical description of qualities such as kindness, forgiveness, humility, self-control and freedom from excessive hatred.",
    centralTheme:
      "Devotion is expressed not only through belief but also through character, kindness and disciplined behavior.",
    topics: [
      "Devotion",
      "Kindness",
      "Compassion",
      "Patience",
      "Humility",
      "Self-control",
    ],
    keyTerms: [
      {
        term: "Bhakti",
        meaning: "Loving devotion.",
      },
      {
        term: "Karuna",
        meaning: "Compassion.",
      },
      {
        term: "Maitri",
        meaning: "Friendliness or goodwill.",
      },
      {
        term: "Kshama",
        meaning: "Forgiveness or patience.",
      },
    ],
    teachings: [
      {
        title: "Character expresses devotion",
        explanation:
          "The chapter describes qualities such as kindness and humility as important signs of mature spiritual practice.",
      },
      {
        title: "Avoid unnecessary hatred",
        explanation:
          "A steady person does not allow resentment to dominate their behavior.",
      },
      {
        title: "Compassion is strength",
        explanation:
          "Treating others with understanding can require discipline and emotional strength.",
      },
    ],
    verses: [
      {
        reference: "12.13",
        sanskrit:
          "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।",
        transliteration:
          "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca",
        meaning:
          "One who has no hatred and is friendly and compassionate toward all beings.",
        explanation:
          "The verse highlights friendliness and compassion as important qualities of character.",
      },
    ],
    studentLessons: [
      "Treat classmates respectfully.",
      "Practice patience when others make mistakes.",
      "Help people who are struggling.",
      "Avoid unnecessary arguments.",
      "Develop humility alongside achievement.",
    ],
    realLife: [
      {
        situation:
          "A classmate makes a mistake and others laugh at them.",
        lesson:
          "A compassionate response is to help rather than humiliate.",
      },
      {
        situation:
          "Two friends have an argument.",
        lesson:
          "Patience and listening can help resolve disagreements more effectively than anger.",
      },
    ],
    takeaways: [
      "Kindness is a strength.",
      "Compassion improves relationships.",
      "Humility supports growth.",
      "Patience prevents unnecessary conflict.",
      "Character matters alongside achievement.",
    ],
    questions: [
      "What qualities are associated with devotion?",
      "Why is compassion important?",
      "How can students practice humility?",
      "How can patience improve relationships?",
    ],
    quiz: [
      {
        question: "What does Bhakti mean?",
        options: [
          "Devotion",
          "Fear",
          "Competition",
          "Wealth",
        ],
        answer: "Devotion",
      },
      {
        question: "Which quality is emphasized in Chapter 12?",
        options: [
          "Compassion",
          "Jealousy",
          "Hatred",
          "Arrogance",
        ],
        answer: "Compassion",
      },
    ],
  },

  {
    number: 13,
    slug: "chapter-13",
    chapter: "Chapter 13",
    title: "Kshetra Kshetrajna Vibhaga Yoga",
    subtitle: "The Field and the Knower",
    description:
      "The chapter explores the distinction between the field of experience and the conscious knower of that field.",
    background:
      "Krishna explains the concepts of Kshetra and Kshetrajna to help Arjuna understand the relationship between body, experience and awareness.",
    story:
      "The body and material experiences are described as a field, while the knower is the conscious principle that experiences and understands that field. The chapter also discusses qualities associated with true knowledge.",
    centralTheme:
      "Self-awareness helps us understand our experiences, thoughts and actions more clearly.",
    topics: [
      "Self-awareness",
      "Body",
      "Consciousness",
      "Knowledge",
      "Nature",
      "Reflection",
    ],
    keyTerms: [
      {
        term: "Kshetra",
        meaning: "Field; the body and field of experience.",
      },
      {
        term: "Kshetrajna",
        meaning: "The knower of the field.",
      },
      {
        term: "Prakriti",
        meaning: "Nature or material reality.",
      },
      {
        term: "Purusha",
        meaning: "Conscious principle or spiritual self.",
      },
    ],
    teachings: [
      {
        title: "Observe your experiences",
        explanation:
          "Self-awareness begins when we learn to notice thoughts, emotions and reactions instead of automatically following them.",
      },
      {
        title: "Knowledge includes humility",
        explanation:
          "The chapter associates true knowledge with qualities such as humility and non-violence.",
      },
      {
        title: "Reflection improves decisions",
        explanation:
          "Understanding our reactions can help us make more deliberate choices.",
      },
    ],
    verses: [
      {
        reference: "13.8",
        sanskrit:
          "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम् ।",
        transliteration:
          "amānitvam adambhitvam ahiṁsā kṣāntir ārjavam",
        meaning:
          "Humility, absence of pretence, non-violence, patience and straightforwardness are described as qualities of knowledge.",
        explanation:
          "Knowledge is presented as a way of living, not simply possessing information.",
      },
    ],
    studentLessons: [
      "Observe your thoughts before reacting.",
      "Accept mistakes honestly.",
      "Practice humility.",
      "Reflect on your behavior.",
      "Use self-awareness to improve decisions.",
    ],
    realLife: [
      {
        situation:
          "A student becomes angry after receiving criticism.",
        lesson:
          "Noticing the emotional reaction before responding can prevent unnecessary conflict.",
      },
    ],
    takeaways: [
      "Self-awareness supports growth.",
      "Knowledge includes character.",
      "Reflection improves decision making.",
      "Humility is part of learning.",
    ],
    questions: [
      "What is Kshetra?",
      "What is Kshetrajna?",
      "Why is self-awareness important?",
      "How can reflection improve behavior?",
    ],
    quiz: [
      {
        question: "What does Kshetra mean?",
        options: [
          "Field of experience",
          "Victory",
          "Meditation",
          "Devotion",
        ],
        answer: "Field of experience",
      },
      {
        question: "What does Kshetrajna mean?",
        options: [
          "Knower of the field",
          "Warrior",
          "Teacher",
          "Student",
        ],
        answer: "Knower of the field",
      },
    ],
  },

  {
    number: 14,
    slug: "chapter-14",
    chapter: "Chapter 14",
    title: "Gunatraya Vibhaga Yoga",
    subtitle: "The Three Qualities of Nature",
    description:
      "Krishna explains the three gunas and how they influence behavior, preferences and mental states.",
    background:
      "The chapter introduces three fundamental qualities of nature: sattva, rajas and tamas.",
    story:
      "Sattva is associated with clarity and harmony, rajas with activity and desire, and tamas with inertia and confusion. Krishna explains how these qualities influence human behavior.",
    centralTheme:
      "Understanding our habits and tendencies can help us develop greater balance and self-control.",
    topics: [
      "Sattva",
      "Rajas",
      "Tamas",
      "Habits",
      "Mind",
      "Self-control",
    ],
    keyTerms: [
      {
        term: "Sattva",
        meaning: "Clarity, harmony and balance.",
      },
      {
        term: "Rajas",
        meaning: "Activity, desire and restlessness.",
      },
      {
        term: "Tamas",
        meaning: "Inertia, confusion and dullness.",
      },
      {
        term: "Guna",
        meaning: "A quality or tendency of nature.",
      },
    ],
    teachings: [
      {
        title: "Habits influence behavior",
        explanation:
          "Repeated patterns can influence how we think and act.",
      },
      {
        title: "Clarity supports learning",
        explanation:
          "A calm and attentive state can make it easier to understand and remember information.",
      },
      {
        title: "Restlessness can reduce focus",
        explanation:
          "Constant desire for stimulation can make sustained concentration difficult.",
      },
      {
        title: "Awareness creates choice",
        explanation:
          "Recognizing our tendencies gives us an opportunity to change unhelpful habits.",
      },
    ],
    verses: [
      {
        reference: "14.5",
        sanskrit:
          "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः ।",
        transliteration:
          "sattvaṁ rajas tama iti guṇāḥ prakṛti-sambhavāḥ",
        meaning:
          "Sattva, rajas and tamas are described as qualities arising from nature.",
        explanation:
          "The chapter uses these three qualities to explain different tendencies of mind and behavior.",
      },
    ],
    studentLessons: [
      "Notice which habits improve your focus.",
      "Reduce unnecessary distractions.",
      "Build routines that support clarity.",
      "Recognize when restlessness is affecting study.",
      "Change habits gradually.",
    ],
    realLife: [
      {
        situation:
          "A student studies while constantly switching between apps.",
        lesson:
          "Reducing stimulation can make sustained concentration easier.",
      },
      {
        situation:
          "Someone repeatedly postpones important work.",
        lesson:
          "Breaking tasks into small steps can help overcome inertia.",
      },
    ],
    takeaways: [
      "Habits influence behavior.",
      "Clarity supports learning.",
      "Restlessness can reduce focus.",
      "Awareness makes change possible.",
    ],
    questions: [
      "What are the three gunas?",
      "What is Sattva associated with?",
      "What is Rajas associated with?",
      "What is Tamas associated with?",
      "How can students build more helpful habits?",
    ],
    quiz: [
      {
        question: "Which guna is associated with clarity and harmony?",
        options: [
          "Sattva",
          "Rajas",
          "Tamas",
          "None",
        ],
        answer: "Sattva",
      },
      {
        question: "Which guna is associated with restlessness and desire?",
        options: [
          "Rajas",
          "Sattva",
          "Tamas",
          "None",
        ],
        answer: "Rajas",
      },
      {
        question: "Which guna is associated with inertia?",
        options: [
          "Tamas",
          "Sattva",
          "Rajas",
          "None",
        ],
        answer: "Tamas",
      },
    ],
  },

  {
    number: 15,
    title: "Purushottama Yoga",
    slug: "chapter-15",
    chapter: "Purushottama Yoga",
    subtitle: "The Yoga of the Supreme Person",
    description:
      "The chapter uses the image of a cosmic tree to explore the world, the self and the highest reality.",
    background:
      "Krishna presents a symbolic description of worldly existence as an upside-down tree with roots above and branches below.",
    story:
      "The cosmic tree represents the complexity of worldly existence and attachment. Krishna encourages the seeker to understand the deeper source of existence and move toward higher knowledge.",
    centralTheme:
      "Understanding values and purpose can help us choose a meaningful direction in life.",
    topics: [
      "Purpose",
      "Values",
      "Self",
      "World",
      "Wisdom",
      "Detachment",
    ],
    keyTerms: [
      {
        term: "Purushottama",
        meaning: "The Supreme Person or highest reality.",
      },
      {
        term: "Ashvattha",
        meaning: "The sacred fig tree used as a symbol in the chapter.",
      },
      {
        term: "Vairagya",
        meaning: "Detachment from excessive worldly attachment.",
      },
    ],
    teachings: [
      {
        title: "Understand your priorities",
        explanation:
          "A meaningful life requires clarity about what is truly valuable.",
      },
      {
        title: "Do not become controlled by temporary attractions",
        explanation:
          "External achievements and possessions can change, so inner values are important.",
      },
      {
        title: "Purpose gives direction",
        explanation:
          "Knowing what matters can help a person make better choices.",
      },
    ],
    verses: [
      {
        reference: "15.1",
        sanskrit:
          "ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम् ।",
        transliteration:
          "ūrdhva-mūlam adhaḥ-śākham aśvatthaṁ prāhur avyayam",
        meaning:
          "The world is symbolically described as an imperishable tree with roots above and branches below.",
        explanation:
          "The tree is a metaphor for the complexity and interconnectedness of worldly existence.",
      },
    ],
    studentLessons: [
      "Know your priorities.",
      "Do not let temporary distractions control your goals.",
      "Choose values that support long-term growth.",
      "Think about purpose, not only achievement.",
    ],
    realLife: [
      {
        situation:
          "A student spends all their time chasing social-media popularity.",
        lesson:
          "Popularity is temporary; building knowledge and character creates deeper long-term value.",
      },
    ],
    takeaways: [
      "Values guide choices.",
      "Purpose creates direction.",
      "Temporary attractions should not control life.",
      "Wisdom requires perspective.",
    ],
    questions: [
      "What does the cosmic tree symbolize?",
      "Why are values important?",
      "How can purpose guide decisions?",
      "What temporary distractions affect students today?",
    ],
    quiz: [
      {
        question: "What is the cosmic tree used for?",
        options: [
          "A symbol of worldly existence",
          "A sports competition",
          "A weapon",
          "A building",
        ],
        answer: "A symbol of worldly existence",
      },
    ],
  },

  {
    number: 16,
    slug: "chapter-16",
    chapter: "Chapter 16",
    title: "Daivasura Sampad Vibhaga Yoga",
    subtitle: "Divine and Demonic Qualities",
    description:
      "Krishna compares constructive and destructive qualities of human character.",
    background:
      "The chapter focuses strongly on character. It describes qualities that support personal and social well-being and qualities that can lead toward harmful behavior.",
    story:
      "Krishna lists positive qualities such as fearlessness, truthfulness, self-control and compassion, and contrasts them with arrogance, anger, harshness and greed.",
    centralTheme:
      "Character is built through repeated choices, habits and attitudes.",
    topics: [
      "Character",
      "Truthfulness",
      "Courage",
      "Compassion",
      "Self-control",
      "Arrogance",
    ],
    keyTerms: [
      {
        term: "Daivi Sampad",
        meaning: "Constructive or divine qualities.",
      },
      {
        term: "Asuri Sampad",
        meaning: "Destructive or harmful qualities.",
      },
      {
        term: "Ahimsa",
        meaning: "Non-violence.",
      },
      {
        term: "Satya",
        meaning: "Truthfulness.",
      },
    ],
    teachings: [
      {
        title: "Character is more than achievement",
        explanation:
          "Success without good character can create problems for oneself and others.",
      },
      {
        title: "Truthfulness builds trust",
        explanation:
          "Honesty strengthens relationships and credibility.",
      },
      {
        title: "Self-control protects decisions",
        explanation:
          "The ability to pause before reacting can prevent harmful choices.",
      },
      {
        title: "Arrogance can damage growth",
        explanation:
          "A person who believes they cannot learn from others may stop improving.",
      },
    ],
    verses: [
      {
        reference: "16.1",
        sanskrit:
          "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः ।",
        transliteration:
          "abhayaṁ sattva-saṁśuddhir jñāna-yoga-vyavasthitiḥ",
        meaning:
          "Fearlessness, purity of mind and dedication to knowledge are among the positive qualities listed.",
        explanation:
          "The chapter begins with a detailed description of constructive character qualities.",
      },
    ],
    studentLessons: [
      "Tell the truth even when it is difficult.",
      "Control anger before responding.",
      "Avoid arrogance when successful.",
      "Treat others respectfully.",
      "Develop courage to do what is right.",
    ],
    realLife: [
      {
        situation:
          "A student makes a mistake and considers hiding it.",
        lesson:
          "Honesty allows the mistake to be corrected and builds trust.",
      },
      {
        situation:
          "Someone becomes angry during an argument.",
        lesson:
          "Pausing before speaking can prevent words that may cause lasting harm.",
      },
    ],
    takeaways: [
      "Character is built through choices.",
      "Truthfulness builds trust.",
      "Self-control prevents harmful reactions.",
      "Compassion strengthens relationships.",
      "Arrogance can block learning.",
    ],
    questions: [
      "What are some positive qualities described in Chapter 16?",
      "Why is truthfulness important?",
      "How does self-control help?",
      "Why can arrogance prevent growth?",
    ],
    quiz: [
      {
        question: "Which is a positive quality?",
        options: [
          "Truthfulness",
          "Greed",
          "Arrogance",
          "Cruelty",
        ],
        answer: "Truthfulness",
      },
      {
        question: "What does Ahimsa mean?",
        options: [
          "Non-violence",
          "Anger",
          "Competition",
          "Wealth",
        ],
        answer: "Non-violence",
      },
    ],
  },

  {
    number: 17,
    title: "Shraddhatraya Vibhaga Yoga",
    slug: "chapter-17",
    chapter: "Shraddhatraya Vibhaga Yoga",
    subtitle: "The Threefold Division of Faith",
    description:
      "Krishna explains how different forms of faith influence choices, habits, food, discipline and actions.",
    background:
      "Arjuna asks about people who have faith but do not follow established teachings. Krishna explains that faith is influenced by the qualities of nature.",
    story:
      "The chapter describes three forms of faith corresponding to sattva, rajas and tamas. It also discusses different types of discipline, charity and sacrifice.",
    centralTheme:
      "Our beliefs influence our choices and habits, so thoughtful values are important.",
    topics: [
      "Faith",
      "Choices",
      "Discipline",
      "Habits",
      "Charity",
      "Values",
    ],
    keyTerms: [
      {
        term: "Shraddha",
        meaning: "Faith or sincere conviction.",
      },
      {
        term: "Tapas",
        meaning: "Discipline or purposeful self-control.",
      },
      {
        term: "Dana",
        meaning: "Charity or giving.",
      },
      {
        term: "Sattva",
        meaning: "Clarity and harmony.",
      },
    ],
    teachings: [
      {
        title: "Beliefs influence behavior",
        explanation:
          "What we deeply value often influences our habits and decisions.",
      },
      {
        title: "Discipline should have a healthy purpose",
        explanation:
          "Discipline is valuable when it supports growth rather than becoming harmful or purely performative.",
      },
      {
        title: "Giving should be thoughtful",
        explanation:
          "The chapter distinguishes between different motivations behind charity and giving.",
      },
    ],
    verses: [
      {
        reference: "17.3",
        sanskrit:
          "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत ।",
        transliteration:
          "sattvānurūpā sarvasya śraddhā bhavati bhārata",
        meaning:
          "A person's faith is influenced by their inner nature.",
        explanation:
          "The verse connects faith with the qualities and tendencies that shape a person's behavior.",
      },
    ],
    studentLessons: [
      "Think carefully about the values behind your choices.",
      "Build healthy routines.",
      "Give help without seeking unnecessary attention.",
      "Use discipline for meaningful goals.",
      "Review habits that do not support your growth.",
    ],
    realLife: [
      {
        situation:
          "A student joins a study group because friends pressure them.",
        lesson:
          "Understanding personal goals helps make choices based on purpose rather than pressure.",
      },
      {
        situation:
          "Someone helps another person only to receive public praise.",
        lesson:
          "Reflecting on motivation can make service more sincere.",
      },
    ],
    takeaways: [
      "Faith influences behavior.",
      "Values shape habits.",
      "Healthy discipline supports growth.",
      "Motivation matters.",
      "Thoughtful giving is valuable.",
    ],
    questions: [
      "What does Shraddha mean?",
      "How do beliefs influence choices?",
      "Why does motivation matter?",
      "How can discipline be used positively?",
    ],
    quiz: [
      {
        question: "What does Shraddha mean?",
        options: [
          "Faith or sincere conviction",
          "Fear",
          "Competition",
          "Sleep",
        ],
        answer: "Faith or sincere conviction",
      },
      {
        question: "What does Dana mean?",
        options: [
          "Charity or giving",
          "Anger",
          "Meditation",
          "Knowledge",
        ],
        answer: "Charity or giving",
      },
    ],
  },

  {
    number: 18,
    title: "Moksha Sannyasa Yoga",
    slug: "chapter-18",
    chapter: "Moksha Sannyasa Yoga",
    subtitle: "The Yoga of Liberation and Renunciation",
    description:
      "The final chapter brings together major teachings about duty, knowledge, action, devotion, renunciation and liberation.",
    background:
      "Chapter 18 is the longest and concluding chapter of the Bhagavad Gita. Krishna summarizes many of the ideas introduced throughout the earlier chapters.",
    story:
      "Krishna explains different kinds of knowledge, action, duty and renunciation. He emphasizes performing one's own responsibility sincerely and concludes with a powerful teaching about surrender, trust and freedom.",
    centralTheme:
      "A meaningful life combines responsible action, wisdom, devotion, self-knowledge and inner freedom.",
    topics: [
      "Duty",
      "Renunciation",
      "Knowledge",
      "Action",
      "Devotion",
      "Liberation",
    ],
    keyTerms: [
      {
        term: "Moksha",
        meaning: "Liberation or freedom from bondage.",
      },
      {
        term: "Tyaga",
        meaning: "Renunciation or letting go of attachment.",
      },
      {
        term: "Svadharma",
        meaning: "One's own duty or responsibility.",
      },
      {
        term: "Sharanagati",
        meaning: "Surrender or taking refuge.",
      },
    ],
    teachings: [
      {
        title: "Duty should be performed sincerely",
        explanation:
          "A person's responsibility should be approached with care rather than abandoned because it is difficult.",
      },
      {
        title: "Renunciation concerns attachment",
        explanation:
          "The chapter distinguishes between abandoning action and letting go of attachment to its results.",
      },
      {
        title: "Knowledge, action and devotion work together",
        explanation:
          "The Gita's major paths are presented as complementary rather than completely separate.",
      },
      {
        title: "Choice and responsibility matter",
        explanation:
          "Krishna teaches Arjuna and then allows him to make his own decision after hearing the teaching.",
      },
    ],
    verses: [
      {
        reference: "18.46",
        sanskrit:
          "यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम् ।",
        transliteration:
          "yataḥ pravṛttir bhūtānāṁ yena sarvam idaṁ tatam",
        meaning:
          "One can reach fulfillment through sincere dedication to one's own work.",
        explanation:
          "The teaching connects meaningful work with dedication and a larger sense of purpose.",
      },
      {
        reference: "18.63",
        sanskrit:
          "इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया ।",
        transliteration:
          "iti te jñānam ākhyātaṁ guhyād guhyataraṁ mayā",
        meaning:
          "The teaching has been explained; now consider it carefully and choose.",
        explanation:
          "The conclusion emphasizes thoughtful choice rather than blind action.",
      },
      {
        reference: "18.66",
        sanskrit:
          "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।",
        transliteration:
          "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja",
        meaning:
          "Take refuge in the highest reality and let go of fear.",
        explanation:
          "This famous concluding teaching is traditionally understood as a call to complete trust, surrender and spiritual refuge.",
      },
    ],
    studentLessons: [
      "Take responsibility for your choices.",
      "Do your work sincerely.",
      "Do not let fear of results stop effort.",
      "Combine knowledge with action.",
      "Develop values that guide difficult decisions.",
      "Learn to let go of unnecessary anxiety.",
    ],
    realLife: [
      {
        situation:
          "A student is deciding whether to continue studying after repeated failures.",
        lesson:
          "The student can evaluate mistakes, seek guidance and continue sincere effort instead of allowing one failure to define the future.",
      },
      {
        situation:
          "Someone must make an important career decision.",
        lesson:
          "Understanding personal values, responsibilities and long-term purpose can lead to a more thoughtful decision.",
      },
    ],
    takeaways: [
      "Responsibility matters.",
      "Knowledge should guide action.",
      "Attachment to results can create anxiety.",
      "Devotion and wisdom can work together.",
      "Thoughtful choice is important.",
      "Inner freedom is a major goal of the teaching.",
    ],
    questions: [
      "What major teachings are summarized in Chapter 18?",
      "What is the difference between action and attachment to results?",
      "Why is personal responsibility important?",
      "How can knowledge and action work together?",
      "Why is thoughtful choice emphasized?",
      "What does Moksha mean?",
    ],
    quiz: [
      {
        question: "What does Moksha mean?",
        options: [
          "Liberation",
          "Competition",
          "Fear",
          "Wealth",
        ],
        answer: "Liberation",
      },
      {
        question: "What does Tyaga refer to?",
        options: [
          "Renunciation or letting go",
          "Anger",
          "Sleep",
          "Victory",
        ],
        answer: "Renunciation or letting go",
      },
      {
        question: "What does Chapter 18 bring together?",
        options: [
          "Major teachings of the Gita",
          "Only meditation",
          "Only warfare",
          "Only mathematics",
        ],
        answer: "Major teachings of the Gita",
      },
    ],
  },
];

export function getGitaChapter(slug: string) {
  return gitaChapters.find((chapter) => chapter.slug === slug);
}
