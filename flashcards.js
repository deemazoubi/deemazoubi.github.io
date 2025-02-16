const facts = [
  "Dreams occur in real-time, so what you dream about in one minute happens in the blink of an eye.",
  "You can’t read in dreams, but you can read signs and symbols.",
  "Lucid dreaming is when you realize you're dreaming and can control the dream.",
  "Some people dream in black and white, while others dream in full color.",
  "The average person spends six years of their life dreaming.",
  "People can have recurring dreams, often about unresolved issues.",
  "The longest dream ever recorded lasted for around 45 minutes.",
  "Pregnant women tend to have more vivid dreams.",
  "Dreams can be influenced by emotions you’re feeling in real life.",
  "Some people experience sleep paralysis, where they feel awake but cannot move.",
  "Nightmares are most common during childhood but can happen at any age.",
  "You can experience dreams in different stages of sleep, especially during REM sleep.",
  "People often dream about things that are important to them or that they’ve experienced recently.",
  "Stressful situations may lead to nightmares or unsettling dreams.",
  "Dreams about flying are common and can symbolize freedom or escape.",
  "Some people experience prophetic dreams that seem to predict the future.",
  "Dreams can help you solve problems by allowing your brain to process ideas unconsciously.",
  "Sleep disorders like insomnia can disrupt dream patterns.",
  "We forget about 90% of our dreams within 10 minutes of waking up.",
  "People who sleep longer tend to have more vivid dreams.",
  "The ‘falling’ sensation in a dream can indicate a lack of control or insecurity in waking life.",
  "Animals also dream, and many species experience REM sleep.",
  "Dreams can sometimes be a reflection of your subconscious desires or fears.",
  "If you dream about teeth falling out, it may symbolize feelings of insecurity or fear of losing control.",
  "Dreams about being chased often represent feelings of anxiety or running away from problems.",
  "The color purple in a dream can symbolize spirituality, wealth, or ambition.",
  "Lucid dreaming can be used as a form of therapy to confront fears and anxieties.",
  "Recurrent dreams may indicate unresolved psychological issues.",
  "Dreams can have a symbolic meaning, with some cultures interpreting them as omens.",
  "Dreams about water can signify emotions and the subconscious mind.",
  "Some people have shared dreams, experiencing similar dreams with others simultaneously.",
  "Dreams about flying over the ocean are believed to symbolize emotional freedom or life changes.",
  "Research suggests that dreams are a way for the brain to process and archive memories.",
  "Most dreams last between 5 to 20 minutes, though they feel much longer.",
  "Dreams about losing your teeth may also reflect feelings of inadequacy or fear of aging.",
  "Some scientists believe dreams are a way to simulate real-life challenges and prepare for the future.",
  "People can dream about places they’ve never been but are familiar with, possibly influenced by media or stories.",
  "Some individuals have recurring nightmares that can be linked to trauma or stress.",
  "People who experience frequent nightmares are more likely to suffer from anxiety or depression.",
  "Dreams can sometimes help you work through unresolved emotional issues from your waking life.",
  "Dreaming about being late can symbolize feelings of inadequacy or pressure.",
  "Dreaming of a loved one who has passed away is common and may reflect the desire for connection or closure.",
  "Some people experience sleep talking or sleepwalking during REM sleep, which can involve dream-like behavior.",
  "The color red in a dream can represent passion, anger, or danger.",
  "Dreams about being naked in public often symbolize feelings of vulnerability or fear of exposure.",
  "Dreams of winning the lottery can symbolize desires for change or escaping financial struggles.",
  "Dreams about fire can symbolize intense emotions, such as anger or passion.",
  "Dreams where you're being chased often reflect avoidance or fear of confrontation in waking life.",
  "Studies have shown that people tend to have more dreams about social situations than any other topic.",
  "Lucid dreaming techniques can be learned through practice and can help people control their dreams.",
  "Certain foods, such as cheese, are believed to influence the type of dreams people experience.",
  "Dreams involving celebrities can indicate admiration or a desire for validation.",
  "Night terrors are intense feelings of fear during sleep, often occurring in children but sometimes in adults.",
  "Dreaming about animals can reflect your instincts, desires, or relationships with others.",
  "Dreaming about a journey or trip can represent personal growth or the process of discovery.",
  "Dreams about falling into an abyss often symbolize fear of the unknown or feeling lost in life.",
  "Dreams involving mirrors may symbolize self-reflection or an exploration of personal identity.",
  "Dreams about teeth falling out may also be linked to feelings of vulnerability, powerlessness, or aging.",
  "People who frequently have lucid dreams can sometimes train themselves to use dreams for self-exploration and problem-solving.",
  "Dreaming about a familiar place or person from the past can be a reflection of nostalgia or unfinished business."
];

const flashcardsContainer = document.querySelector('.flashcards-container');

facts.forEach((fact, index) => {
  const flashcard = document.createElement('div');
  flashcard.classList.add('flashcard');
  flashcard.innerHTML = `
    <p>Dream Fact ${index + 1}</p>
    <div class="fact">${fact}</div>
  `;
  flashcardsContainer.appendChild(flashcard);


  flashcard.addEventListener('click', () => {
    const factElement = flashcard.querySelector('.fact');
    factElement.style.display = (factElement.style.display === 'block') ? 'none' : 'block';
  });
});
