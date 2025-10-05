// Enhanced Roadblock Assessment Data with Inclusive Types
const roadblockTypes = {
    // Original roadblocks
    fear_perfectionist: {
        name: "The Fear & Perfectionist",
        description: "You're held back by fear of failure, uncertainty, or the need to get everything perfect before taking action.",
        characteristics: [
            "Overthinking decisions",
            "Procrastinating on important tasks", 
            "Fear of making mistakes",
            "Need for certainty before acting",
            "All-or-nothing mindset"
        ],
        recommendations: [
            "Start with small, achievable goals to build confidence",
            "Practice the 80/20 rule - good enough is better than perfect",
            "Set time limits for decision-making",
            "Reframe failures as learning opportunities",
            "Focus on progress over perfection"
        ]
    },
    comparison_trap: {
        name: "The Comparison Trap",
        description: "You're constantly measuring yourself against others, leading to feelings of inadequacy and lost focus on your own journey.",
        characteristics: [
            "Frequently checking social media for validation",
            "Feeling inadequate when others succeed",
            "Difficulty celebrating your own achievements",
            "Constantly looking at what others have",
            "Imposter syndrome feelings"
        ],
        recommendations: [
            "Practice gratitude for your own progress",
            "Limit social media consumption",
            "Keep a personal achievement journal",
            "Focus on your unique strengths and path",
            "Celebrate small wins regularly"
        ]
    },
    comfort_zone_dweller: {
        name: "The Comfort Zone Dweller",
        description: "You've built a safe space where you function well, but it's preventing you from reaching your true potential.",
        characteristics: [
            "Avoiding new challenges",
            "Preferring routine and predictability",
            "Making excuses to avoid growth opportunities",
            "Fear of stepping outside familiar territory",
            "Settling for 'good enough'"
        ],
        recommendations: [
            "Take one small risk each week",
            "Set stretch goals beyond your current capabilities",
            "Seek feedback and new perspectives",
            "Join groups or communities that challenge you",
            "Practice saying yes to opportunities that scare you"
        ]
    },
    self_awareness_gap: {
        name: "The Self-Awareness Gap",
        description: "You lack clarity about your strengths, weaknesses, and what truly drives you, making it hard to make aligned decisions.",
        characteristics: [
            "Difficulty making decisions",
            "Unclear about personal values and priorities",
            "Unaware of impact on others",
            "Struggling to identify strengths and weaknesses",
            "Feeling lost or directionless"
        ],
        recommendations: [
            "Take personality and strengths assessments",
            "Seek 360-degree feedback from trusted colleagues",
            "Practice regular self-reflection through journaling",
            "Work with a mentor or coach",
            "Ask for specific feedback on your performance"
        ]
    },
    overwhelm_paralysis: {
        name: "The Overwhelm & Paralysis",
        description: "You're stuck because there's too much to do, too many options, or you feel paralyzed by the magnitude of your goals.",
        characteristics: [
            "Feeling constantly busy but unproductive",
            "Difficulty prioritizing tasks",
            "Starting many projects but finishing few",
            "Analysis paralysis when making decisions",
            "Feeling scattered and unfocused"
        ],
        recommendations: [
            "Use the Eisenhower Matrix for prioritization",
            "Break large goals into smaller, manageable steps",
            "Practice single-tasking instead of multitasking",
            "Set boundaries and learn to say no",
            "Use time-blocking for focused work sessions"
        ]
    },
    external_validation_seeker: {
        name: "The External Validation Seeker",
        description: "Your self-worth and decisions are heavily influenced by what others think, preventing authentic self-expression and growth.",
        characteristics: [
            "Seeking approval before making decisions",
            "Difficulty saying no to others",
            "People-pleasing behaviors",
            "Avoiding authentic self-expression",
            "Fear of disappointing others"
        ],
        recommendations: [
            "Practice making small decisions without seeking input",
            "Identify and honor your personal values",
            "Set healthy boundaries with others",
            "Build self-confidence through personal achievements",
            "Surround yourself with supportive people"
        ]
    },
    
    // Additional inclusive roadblocks
    systemic_discrimination: {
        name: "The Systemic Discrimination Barrier",
        description: "You face additional hurdles due to discrimination, bias, or systemic barriers based on your identity, background, or characteristics beyond your control.",
        characteristics: [
            "Experiencing bias in hiring, promotion, or workplace treatment",
            "Lack of representation in leadership or role models who share your background",
            "Facing assumptions about your capabilities based on stereotypes",
            "Dealing with microaggressions or exclusionary behaviors",
            "Having to work harder to prove yourself than others"
        ],
        recommendations: [
            "Build strong networks within and outside your organization",
            "Document your achievements and advocate for your contributions",
            "Seek mentors and sponsors who understand your challenges",
            "Join professional associations or groups for your community",
            "Focus on developing skills that make your value undeniable"
        ]
    },
    
    accessibility_accommodation: {
        name: "The Accessibility & Accommodation Gap",
        description: "You face barriers due to lack of appropriate accommodations, accessibility, or understanding of your needs in the workplace.",
        characteristics: [
            "Struggling with workplace environments not designed for your needs",
            "Difficulty accessing reasonable adjustments or accommodations",
            "Feeling misunderstood about your requirements or capabilities",
            "Experiencing sensory overload or communication challenges",
            "Having your professional competence questioned due to your differences"
        ],
        recommendations: [
            "Clearly communicate your needs and strengths to employers",
            "Research your rights regarding reasonable adjustments",
            "Use assistive technology and tools that support your performance",
            "Advocate for inclusive workplace design and policies",
            "Connect with others who share similar experiences for support"
        ]
    },
    
    cultural_navigation: {
        name: "The Cultural Navigation Challenge",
        description: "You struggle with understanding unwritten workplace rules, cultural expectations, or networking norms that others take for granted.",
        characteristics: [
            "Feeling uncertain about workplace culture and unspoken expectations",
            "Struggling with networking or building professional relationships",
            "Having qualifications or experience that aren't fully recognized",
            "Facing language barriers or communication style differences",
            "Feeling excluded from informal networks and opportunities"
        ],
        recommendations: [
            "Seek cultural mentoring or workplace integration support",
            "Actively participate in workplace social events and committees",
            "Ask for feedback on professional communication and behavior",
            "Find allies who can help explain cultural norms and expectations",
            "Leverage your unique perspective as a strength and differentiator"
        ]
    },
    
    resource_constraint: {
        name: "The Resource & Financial Constraint",
        description: "Your career growth is limited by financial constraints, lack of access to resources, or competing responsibilities that privileged individuals don't face.",
        characteristics: [
            "Unable to afford additional training, certifications, or education",
            "Balancing work with caregiving or multiple job responsibilities",
            "Lacking professional networks or connections that open doors",
            "Unable to take unpaid opportunities or relocate for advancement",
            "Struggling with 'cultural capital' like knowing how to navigate elite spaces"
        ],
        recommendations: [
            "Seek out free or low-cost professional development opportunities",
            "Apply for scholarships, grants, or employer-sponsored training",
            "Build skills through online resources and self-directed learning",
            "Focus on demonstrating results and value in your current role",
            "Connect with organizations that support professional development for your background"
        ]
    },
    
    double_bind_expectations: {
        name: "The Double-Bind & Conflicting Expectations",
        description: "You face contradictory expectations where you're criticized regardless of how you behave, often due to stereotypes about your identity group.",
        characteristics: [
            "Being seen as 'too aggressive' when assertive or 'too passive' when collaborative",
            "Facing pressure to represent your entire identity group",
            "Having your successes attributed to diversity initiatives rather than merit",
            "Experiencing isolation when you achieve senior positions",
            "Feeling pressure to constantly prove your belonging and competence"
        ],
        recommendations: [
            "Develop a strong sense of your authentic leadership style",
            "Build alliances with others who understand these dynamics",
            "Focus on delivering exceptional results to counter stereotypes",
            "Seek feedback from trusted mentors to calibrate your approach",
            "Use your platform to create opportunities for others like you"
        ]
    },
    
    intersectional_complexity: {
        name: "The Intersectional Complexity",
        description: "You face compounded challenges because you belong to multiple marginalized groups, creating unique barriers that aren't addressed by single-identity solutions.",
        characteristics: [
            "Experiencing multiple, overlapping forms of discrimination",
            "Feeling like you don't fully belong in any single identity group",
            "Facing unique challenges that aren't recognized in diversity programs",
            "Having to navigate competing aspects of your identity",
            "Lacking role models who share your specific combination of identities"
        ],
        recommendations: [
            "Find communities and networks that embrace intersectional identities",
            "Advocate for inclusive policies that address multiple identity dimensions",
            "Build bridges between different identity-based professional groups",
            "Develop a strong personal brand that celebrates your full identity",
            "Seek mentors who understand complex identity navigation"
        ]
    }
};

const questions = [
    // Original questions adapted for more options
    {
        question: "When faced with a new challenge, I typically:",
        "options": {
            "A": "Spend a lot of time researching and planning before taking any action",
            "B": "Look at how others have handled similar situations first",
            "C": "Try to find ways to avoid or minimize the challenge",
            "D": "Feel uncertain about what approach would work best for me",
            "E": "Feel overwhelmed by all the possible approaches and outcomes",
            "F": "Ask others what they think I should do"
        },
        "mapping": {
            "A": "fear_perfectionist",
            "B": "comparison_trap", 
            "C": "comfort_zone_dweller",
            "D": "self_awareness_gap",
            "E": "overwhelm_paralysis",
            "F": "external_validation_seeker"
        }
    },
    {
        question: "When I make mistakes, I usually:",
        options: {
            A: "Beat myself up and worry about making the same mistake again",
            B: "Compare how I handled it to how others would have done better",
            C: "Try to avoid similar situations in the future",
            D: "Feel confused about why it happened and what to learn from it",
            E: "Get stressed about all the things that could go wrong next time",
            F: "Worry about what others will think of me"
        },
        mapping: {
            A: "fear_perfectionist",
            B: "comparison_trap",
            C: "comfort_zone_dweller", 
            D: "self_awareness_gap",
            E: "overwhelm_paralysis",
            F: "external_validation_seeker"
        }
    },
    {
        question: "When I don't get a promotion or opportunity, my first thought is usually:",
        options: {
            A: "I need to work harder and perfect my skills before trying again",
            B: "Others must have had better connections or advantages than me",
            C: "Maybe I'm not cut out for that level of responsibility",
            D: "I'm unclear about what I need to do differently",
            E: "There were too many qualified candidates and factors involved",
            F: "I wonder if they think I'm not the right fit for their team",
            G: "I suspect bias or discrimination may have played a role",
            H: "The workplace probably isn't set up to support someone like me"
        },
        mapping: {
            A: "fear_perfectionist",
            B: "comparison_trap",
            C: "comfort_zone_dweller",
            D: "self_awareness_gap",
            E: "overwhelm_paralysis",
            F: "external_validation_seeker",
            G: "systemic_discrimination",
            H: "accessibility_accommodation"
        }
    },
    {
        question: "When networking or building professional relationships, I:",
        options: {
            A: "Worry about saying the wrong thing or not being knowledgeable enough",
            B: "Feel intimidated by others who seem more successful or connected",
            C: "Stick to people I already know rather than reaching out to new contacts",
            D: "Feel uncertain about how to approach people or what to talk about",
            E: "Get overwhelmed by all the events and networking opportunities available",
            F: "Focus mainly on being liked rather than showcasing my expertise",
            G: "Feel like I don't fit in with the dominant culture or networks",
            H: "Struggle with the format or accessibility of most networking events"
        },
        mapping: {
            A: "fear_perfectionist",
            B: "comparison_trap",
            C: "comfort_zone_dweller",
            D: "self_awareness_gap",
            E: "overwhelm_paralysis",
            F: "external_validation_seeker",
            G: "cultural_navigation",
            H: "accessibility_accommodation"
        }
    },
    {
        question: "When it comes to pursuing additional training or professional development, I:",
        options: {
            A: "Research extensively but worry about choosing the wrong program",
            B: "Look at what successful people in my field have done",
            C: "Tend to stick with training that's directly relevant to my current role",
            D: "Feel unclear about what skills I should prioritize developing",
            E: "Feel overwhelmed by all the options and requirements",
            F: "Choose programs that others in my organization would approve of",
            G: "Often can't afford or access the training I'd like to pursue",
            H: "Need accommodations that many programs don't provide"
        },
        mapping: {
            A: "fear_perfectionist",
            B: "comparison_trap",
            C: "comfort_zone_dweller",
            D: "self_awareness_gap",
            E: "overwhelm_paralysis",
            F: "external_validation_seeker",
            G: "resource_constraint",
            H: "accessibility_accommodation"
        }
    },
    {
        question: "When I'm successful at work, I often think:",
        options: {
            A: "I got lucky this time, but I need to work even harder to maintain it",
            B: "Others probably still don't think I'm as capable as my peers",
            C: "I should be grateful for this level and not push for more",
            D: "I'm not sure what specific actions led to this success",
            E: "There are so many factors involved that I can't control",
            F: "I hope this makes people see me more positively",
            G: "Some people will attribute this to diversity rather than my merit",
            H: "I had to work much harder than others to achieve the same recognition"
        },
        mapping: {
            A: "fear_perfectionist",
            B: "comparison_trap",
            C: "comfort_zone_dweller",
            D: "self_awareness_gap",
            E: "overwhelm_paralysis",
            F: "external_validation_seeker",
            G: "systemic_discrimination",
            H: "double_bind_expectations"
        }
    },
    {
        question: "When I receive feedback, my first reaction is usually:",
        options: {
            A: "To focus on what I did wrong and how to avoid criticism next time",
            B: "To wonder how my performance compares to others",
            C: "To feel defensive and want to justify my current approach",
            D: "To feel uncertain about which parts are most important to address",
            E: "To feel overwhelmed by all the changes I need to make",
            F: "To worry about disappointing the person giving feedback",
            G: "To wonder if the feedback is influenced by bias about people like me",
            H: "To feel frustrated that my different way of working isn't understood"
        },
        mapping: {
            A: "fear_perfectionist",
            B: "comparison_trap",
            C: "comfort_zone_dweller",
            D: "self_awareness_gap",
            E: "overwhelm_paralysis",
            F: "external_validation_seeker",
            G: "systemic_discrimination",
            H: "accessibility_accommodation"
        }
    },
    {
        question: "When I consider applying for senior leadership roles, I:",
        options: {
            A: "Wonder if I have enough experience and credentials to be qualified",
            B: "Compare myself to current leaders and feel I don't measure up",
            C: "Think I'm better suited for individual contributor or mid-level roles",
            D: "Feel uncertain about what leadership style would work for me",
            E: "Feel overwhelmed by all the responsibilities and skills required",
            F: "Worry about whether the team would accept and respect my authority",
            G: "Rarely see people like me in those positions and wonder if I'd belong",
            H: "Worry about juggling multiple identity expectations and stereotypes"
        },
        mapping: {
            A: "fear_perfectionist",
            B: "comparison_trap",
            C: "comfort_zone_dweller",
            D: "self_awareness_gap",
            E: "overwhelm_paralysis",
            F: "external_validation_seeker",
            G: "systemic_discrimination",
            H: "intersectional_complexity"
        }
    },
    {
        question: "My productivity is most limited by:",
        options: {
            A: "Spending too much time perfecting details instead of moving forward",
            B: "Getting distracted by what others are achieving",
            C: "Sticking to familiar tasks rather than tackling challenging ones",
            D: "Not being clear on what I should prioritize",
            E: "Having too many competing priorities and tasks",
            F: "Taking on too much because I can't say no to requests",
            G: "Lacking resources or support that others take for granted",
            H: "Working in environments that don't accommodate my needs"
        },
        mapping: {
            A: "fear_perfectionist",
            B: "comparison_trap",
            C: "comfort_zone_dweller",
            D: "self_awareness_gap",
            E: "overwhelm_paralysis",
            F: "external_validation_seeker",
            G: "resource_constraint",
            H: "accessibility_accommodation"
        }
    },
    {
        question: "When I encounter setbacks or obstacles, I:",
        options: {
            A: "Analyze what went wrong extensively and worry about repeating mistakes",
            B: "Look at how others overcame similar challenges more successfully",
            C: "Consider whether I should just accept limitations and adjust expectations",
            D: "Feel uncertain about what the setback means and how to respond",
            E: "Feel overwhelmed by all the potential solutions and next steps",
            F: "Worry about letting others down or disappointing people who believe in me",
            G: "Wonder if the obstacles I face are different from what others experience",
            H: "Feel like I'm constantly facing unique combinations of challenges"
        },
        mapping: {
            A: "fear_perfectionist",
            B: "comparison_trap",
            C: "comfort_zone_dweller",
            D: "self_awareness_gap",
            E: "overwhelm_paralysis",
            F: "external_validation_seeker",
            G: "cultural_navigation",
            H: "intersectional_complexity"
        }
    }
];

// Enhanced Quiz Application Logic
class RoadblockQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.scores = {
            fear_perfectionist: 0,
            comparison_trap: 0,
            comfort_zone_dweller: 0,
            self_awareness_gap: 0,
            overwhelm_paralysis: 0,
            external_validation_seeker: 0,
            systemic_discrimination: 0,
            accessibility_accommodation: 0,
            cultural_navigation: 0,
            resource_constraint: 0,
            double_bind_expectations: 0,
            intersectional_complexity: 0
        };
        this.selectedAnswers = [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateTotalQuestions();
    }

    bindEvents() {
        document.getElementById('start-quiz').addEventListener('click', () => this.startQuiz());
        document.getElementById('next-question').addEventListener('click', () => this.nextQuestion());
        document.getElementById('retake-quiz').addEventListener('click', () => this.resetQuiz());
        document.getElementById('share-results').addEventListener('click', () => this.shareResults());
    }

    updateTotalQuestions() {
        document.getElementById('total-questions').textContent = questions.length;
    }

    startQuiz() {
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    displayQuestion() {
        const question = questions[this.currentQuestion];
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const currentQuestionEl = document.getElementById('current-question');
        const progressEl = document.getElementById('progress');

        // Update question number and progress
        currentQuestionEl.textContent = this.currentQuestion + 1;
        const progressPercent = ((this.currentQuestion + 1) / questions.length) * 100;
        progressEl.style.width = progressPercent + '%';

        // Display question
        questionText.textContent = question.question;

        // Clear previous options
        optionsContainer.innerHTML = '';

        // Create option buttons
        Object.entries(question.options).forEach(([key, text]) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = text;
            button.dataset.option = key;
            
            button.addEventListener('click', () => this.selectOption(button, key));
            optionsContainer.appendChild(button);
        });

        // Disable next button
        document.getElementById('next-question').disabled = true;
    }

    selectOption(buttonEl, optionKey) {
        // Remove selection from other options
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Select current option
        buttonEl.classList.add('selected');
        
        // Store selected answer
        this.selectedAnswers[this.currentQuestion] = optionKey;

        // Enable next button
        document.getElementById('next-question').disabled = false;
    }

    nextQuestion() {
        // Score the current answer
        const question = questions[this.currentQuestion];
        const selectedOption = this.selectedAnswers[this.currentQuestion];
        const roadblockType = question.mapping[selectedOption];
        this.scores[roadblockType]++;

        // Move to next question or show results
        this.currentQuestion++;
        
        if (this.currentQuestion < questions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        // Find the roadblock with highest score
        let maxScore = 0;
        let primaryRoadblock = null;

        Object.entries(this.scores).forEach(([type, score]) => {
            if (score > maxScore) {
                maxScore = score;
                primaryRoadblock = type;
            }
        });

        // Display results
        const roadblock = roadblockTypes[primaryRoadblock];
        
        document.getElementById('roadblock-name').textContent = roadblock.name;
        document.getElementById('roadblock-description').textContent = roadblock.description;

        // Display characteristics
        const characteristicsList = document.getElementById('characteristics-list');
        characteristicsList.innerHTML = '';
        roadblock.characteristics.forEach(characteristic => {
            const li = document.createElement('li');
            li.textContent = characteristic;
            characteristicsList.appendChild(li);
        });

        // Display recommendations
        const recommendationsList = document.getElementById('recommendations-list');
        recommendationsList.innerHTML = '';
        roadblock.recommendations.forEach(recommendation => {
            const li = document.createElement('li');
            li.textContent = recommendation;
            recommendationsList.appendChild(li);
        });

        this.showScreen('results-screen');
    }

    shareResults() {
        const roadblock = this.getPrimaryRoadblock();
        const text = `I just discovered my primary roadblock: ${roadblock.name}! Take the "What's Your Roadblock?" assessment to discover yours.`;
        
        if (navigator.share) {
            navigator.share({
                title: "What's Your Roadblock? - Assessment Results",
                text: text,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(text + ' ' + window.location.href).then(() => {
                alert('Results copied to clipboard!');
            });
        }
    }

    getPrimaryRoadblock() {
        let maxScore = 0;
        let primaryRoadblock = null;

        Object.entries(this.scores).forEach(([type, score]) => {
            if (score > maxScore) {
                maxScore = score;
                primaryRoadblock = type;
            }
        });

        return roadblockTypes[primaryRoadblock];
    }

    resetQuiz() {
        this.currentQuestion = 0;
        this.scores = {
            fear_perfectionist: 0,
            comparison_trap: 0,
            comfort_zone_dweller: 0,
            self_awareness_gap: 0,
            overwhelm_paralysis: 0,
            external_validation_seeker: 0,
            systemic_discrimination: 0,
            accessibility_accommodation: 0,
            cultural_navigation: 0,
            resource_constraint: 0,
            double_bind_expectations: 0,
            intersectional_complexity: 0
        };
        this.selectedAnswers = [];
        this.showScreen('welcome-screen');
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new RoadblockQuiz();
});