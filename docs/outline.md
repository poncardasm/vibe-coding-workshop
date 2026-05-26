# AI Coding Workshop Outline

## Working Title

**AI Coding Without the Magic: How to Use LLMs as a Practical Programming Partner**

## Core Framing

This is a beginner-friendly workshop about using AI for coding in a practical, realistic way. The opening should make the room feel comfortable, then quickly dispel the idea that AI is magic. The main message is that AI coding tools are powerful pattern-based assistants, but the developer still needs to provide context, review outputs, test changes, and make decisions.

## Suggested Workshop Flow

### 1. Warm Start

Start with a quick show of hands:

- Who uses ChatGPT or another AI tool at least weekly?
- Who has used AI for coding?

This gives a quick read on the room and creates a positive, low-pressure starting point.

### 2. AI Is Not Magic

Explain that AI coding tools are prediction systems trained on large amounts of text and code. They are useful because they can recognize patterns, generate plausible solutions, explain concepts, and help iterate quickly.

They are not magic because they do not automatically understand your project, your intent, or whether their answer is correct. They can be confidently wrong, invent APIs, miss context, or solve the wrong problem if the prompt is vague.

### 3. What An LLM Is

Keep this section short, around 5-7 minutes.

Cover the basic mental model:

- An LLM learns patterns from text and code.
- Text is broken into tokens.
- The model predicts likely next tokens.
- Training makes it broadly capable.
- Instruction tuning and feedback make it more useful in chat and coding tools.
- The chat interface is just one way to use the model.

### 4. How AI Labs Create LLMs

Use a simple pipeline instead of going too deep:

1. Collect large amounts of data.
2. Clean and filter the data.
3. Train a base model to predict text.
4. Tune the model to follow instructions.
5. Test and evaluate the model.
6. Deploy it into products like ChatGPT, GitHub Copilot, Cursor, Claude, and similar tools.

The main point: an LLM is built through data, training, tuning, evaluation, and deployment. It is not magic.

### 5. What This Means For Coding

Translate the model explanation into practical coding behavior:

- AI can be confidently wrong.
- AI may invent libraries, APIs, or functions.
- AI performs better with clear context.
- AI is strongest when used iteratively.
- The developer remains responsible for reading, testing, and deciding.

### 6. AI Coding Workflow

Make this the center of the workshop.

Recommended workflow:

1. Describe the goal clearly.
2. Provide context: files, framework, constraints, and error messages.
3. Ask for a plan before asking for code.
4. Review the answer.
5. Apply small changes.
6. Run the code and tests.
7. Feed errors or observations back to the AI.
8. Iterate.
9. Ask for explanation or refactoring when needed.

### 7. Live Demo

Use a small beginner-friendly coding task, such as:

- Build a simple todo app feature.
- Fix a broken function.
- Add validation to a form.
- Explain unfamiliar code.
- Write tests for existing code.

The demo should include at least one imperfect AI answer so participants see how to catch and correct mistakes.

### 8. Hands-On Exercise

Give participants a small prepared task with scaffolding.

Possible exercises:

- Ask AI to explain a piece of code.
- Ask AI to add one small feature.
- Ask AI to debug an error.
- Ask AI to write one test.
- Compare the AI answer with the actual result.

### 9. Prompting Patterns

Teach reusable prompting patterns:

- "Ask me questions before coding."
- "Explain the tradeoffs."
- "Make the smallest possible change."
- "Use this existing style."
- "Do not assume missing files."
- "Give me steps first, code second."
- "Here is the error. Diagnose before fixing."

### 10. Closing Message

AI is a coding partner, not an autopilot. It can help you move faster, but good results still come from clear goals, useful context, testing, and human judgment.

## Suggested Timing

- 10 min: intro and mental model
- 10 min: AI is not magic and common failure modes
- 15 min: workflow and prompting patterns
- 20 min: live demo
- 30-45 min: hands-on exercise
- 10 min: discussion and Q&A

## Main Recommendation

Avoid spending too much time on how labs create LLMs unless the workshop goal is AI literacy rather than AI coding. For a beginner AI coding workshop, the theory should support practical use. Get participants using AI quickly, then use mistakes and iteration as teaching moments.
