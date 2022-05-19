
const quotes = [
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Inspirational",
            "Advice",
            "Humor"
        ]
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "People"
        ]
    },
    {
        "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Philosophy",
            "Advice"
        ]
    },
    {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "People"
        ]
    },
    {
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Advice"
        ]
    },
    {
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Life"
        ]
    },
    {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Love"
        ]
    },
    {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "People",
            "Life"
        ]
    },
    {
        "quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "The time is always right to do what is right.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life",
            "People"
        ]
    },
    {
        "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "If we did all the things we are capable of, we would literally astound ourselves.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Life isn't about finding yourself. Life is about creating yourself.",
        "author": "George Bernard Shaw",
        "profession": "Irish playwright",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "If you're going through hell, keep going.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "We make a living by what we get, but we make a life by what we give.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
            "People",
            "Life"
        ]
    },
    {
        "quote": "Peace begins with a smile.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
            "Inspirational",
            "Love",
            "Advice"
        ]
    },
    {
        "quote": "If you can't feed a hundred people, then feed just one.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
            "Inspirational",
            "Advice",
            "People"
        ]
    },
    {
        "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
            "Inspirational",
            "People"
        ]
    },
    {
        "quote": "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
        "author": "L.M. Montgomery",
        "profession": "Canadian author",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Tomorrow is always fresh, with no mistakes in it.",
        "author": "L.M. Montgomery",
        "profession": "Canadian author",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
        "author": "L.M. Montgomery",
        "profession": "Canadian author",
        "topics": [
            "Inspirational",
            "Advice",
            "Life"
        ]
    },
    {
        "quote": "It's so easy to be wicked without knowing it, isn't it?",
        "author": "L.M. Montgomery",
        "profession": "Canadian author",
        "topics": [
            "Inspirational",
            "Philosophy",
            "Life"
        ]
    },
    {
        "quote": "All the darkness in the world cannot extinguish the light of a single candle.",
        "author": "Francis of Assisi",
        "profession": "Italian Catholic Saint",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        "author": "Francis of Assisi",
        "profession": "Italian Catholic Saint",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Preach the Gospel at all times and when necessary use words.",
        "author": "Francis of Assisi",
        "profession": "Italian Catholic Saint",
        "topics": [
            "Religion",
            "Wisdom"
        ]
    },
    {
        "quote": "A single sunbeam is enough to drive away many shadows.",
        "author": "Francis of Assisi",
        "profession": "Italian Catholic Saint",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "You never fail until you stop trying.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?",
        "author": "George Bernard Shaw",
        "profession": "Irish playwright",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "We don't stop playing because we grow old; we grow old because we stop playing.",
        "author": "George Bernard Shaw",
        "profession": "Irish playwright",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
        "author": "George Bernard Shaw",
        "profession": "Irish playwright",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
        "author": "George Bernard Shaw",
        "profession": "Irish playwright",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Kindness is a language which the deaf can hear and the blind can see.",
        "author": "Mark Twain",
        "profession": "American writer",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "The secret of getting ahead is getting started.",
        "author": "Mark Twain",
        "profession": "American writer",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
        "author": "Mark Twain",
        "profession": "American writer",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "The two most important days in your life are the day you are born and the day you find out why.",
        "author": "Mark Twain",
        "profession": "American writer",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.",
        "author": "Mark Twain",
        "profession": "American writer",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "If you tell the truth, you don't have to remember anything.",
        "author": "Mark Twain",
        "profession": "American writer",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "I have never met a man so ignorant that I couldn't learn something from him",
        "author": "Galileo Galilei",
        "profession": "Italian Polymath",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Earth provides enough to satisfy every man's needs, but not every man's greed.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Where there is love there is life.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Life",
            "Love"
        ]
    },
    {
        "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        "quote": "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        "quote": "In a gentle way, you can shake the world.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        "quote": "He that can have patience can have what he will.",
        "author": "Benjamin Franklin",
        "profession": "Founding Father of the United States",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Either write something worth reading or do something worth writing.",
        "author": "Benjamin Franklin",
        "profession": "Founding Father of the United States",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "Tell me and I forget, teach me and I may remember, involve me and I learn.",
        "author": "Benjamin Franklin",
        "profession": "Founding Father of the United States",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        "quote": "Never ruin an apology with an excuse.",
        "author": "Benjamin Franklin",
        "profession": "Founding Father of the United States",
        "topics": [
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "Early to bed and early to rise makes a man healthy, wealthy and wise.",
        "author": "Benjamin Franklin",
        "profession": "Founding Father of the United States",
        "topics": [
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "By failing to prepare, you are preparing to fail.",
        "author": "Benjamin Franklin",
        "profession": "Founding Father of the United States",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "Those who look for the bad in people will surely find it.",
        "author": "Abraham Lincoln",
        "profession": "16th U.S. President",
        "topics": [
            "Inspirational",
            "People"
        ]
    },
    {
        "quote": "People don't realize how a man's whole life can be changed by one book.",
        "author": "Malcolm X",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "If you have no critics you'll likely have no success.",
        "author": "Malcolm X",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "I'm for truth, no matter who tells it. I'm for justice, no matter who it's for or against.",
        "author": "Malcolm X",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "It is not a lack of Love, but a lack of People that makes unhappy marriages.",
        "author": "Friedrich Nietzsche",
        "profession": "German philosopher",
        "topics": [
            "Love",
            "Marriage"
        ]
    },
    {
        "quote": "He who has a why to live can bear almost any how.",
        "author": "Friedrich Nietzsche",
        "profession": "German philosopher",
        "topics": [
            "Life",
            "Inspirational"
        ]
    },
    {
        "quote": "That which does not kill us makes us stronger",
        "author": "Friedrich Nietzsche",
        "profession": "German philosopher",
        "topics": [
            "Inspirational",
            "Philosophy"
        ]
    },
    {
        "quote": "To live is to suffer, to survive is to find some meaning in the suffering.",
        "author": "Friedrich Nietzsche",
        "profession": "German philosopher",
        "topics": [
            "Life",
            "Philosophy",
            "Inspirational"
        ]
    },
    {
        "quote": "There is always some madness in love. But there is also always some reason in madness.",
        "author": "Friedrich Nietzsche",
        "profession": "German philosopher",
        "topics": [
            "Philosophy",
            "Love"
        ]
    },
    {
        "quote": "No price is too high to pay for the privilege of owning yourself.",
        "author": "Friedrich Nietzsche",
        "profession": "German philosopher",
        "topics": [
            "Philosophy",
            "Advice"
        ]
    },
    {
        "quote": "You know, when it works, Love is amazing. It's not overrated.",
        "author": "Sarah Dessen",
        "profession": "American novelist",
        "topics": [
            "Love",
            "Life"
        ]
    },
    {
        "quote": "Life is an awful, ugly place to not have a best friend.",
        "author": "Sarah Dessen",
        "profession": "American novelist",
        "topics": [
            "Friends",
            "Life"
        ]
    },
    {
        "quote": "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
        "author": "Sarah Dessen",
        "profession": "American novelist",
        "topics": [
            "Love",
            "Life"
        ]
    },
    {
        "quote": "Anyone can hide. Facing up to things, working through them, that's what makes you strong.",
        "author": "Sarah Dessen",
        "profession": "American novelist",
        "topics": [
            "Love",
            "Life"
        ]
    },
    {
        "quote": "If you want to live a happy life, tie it to a goal, not to people or things",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "Your time is limited, so don’t waste it living someone else’s life.",
        "author": "Steve Jobs",
        "profession": "American entrepreneur",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "Everything around you that you call life was made up by people, and you can change it.",
        "author": "Steve Jobs",
        "profession": "American entrepreneur",
        "topics": [
            "Inspirational",
            "Life",
            "People"
        ]
    },
    {
        "quote": "Design is not just what it looks like and feels like. Design is how it works.",
        "author": "Steve Jobs",
        "profession": "American entrepreneur",
        "topics": [
            "Inspirational",
            "Design"
        ]
    },
    {
        "quote": "Innovation distinguishes between a leader and a follower.",
        "author": "Steve Jobs",
        "profession": "American entrepreneur",
        "topics": [
            "Inspirational",
            "Philosophy"
        ]
    },
    {
        "quote": "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
        "author": "Steve Jobs",
        "profession": "American entrepreneur",
        "topics": [
            "Faith",
            "Advice",
            "Life"
        ]
    },
    {
        "quote": "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
        "author": "Steve Jobs",
        "profession": "American entrepreneur",
        "topics": [
            "Innovation",
            "Advice"
        ]
    },
    {
        "quote": "A lot of times, people don't know what they want until you show it to them.",
        "author": "Steve Jobs",
        "profession": "American entrepreneur",
        "topics": [
            "People",
            "Philosophy"
        ]
    },
    {
        "quote": "Let’s go invent tomorrow rather than worrying about what happened yesterday.",
        "author": "Steve Jobs",
        "profession": "American entrepreneur",
        "topics": [
            "Innovation",
            "Inspirational"
        ]
    },
    {
        "quote": "The most precious thing that we all have with us is time.",
        "author": "Steve Jobs",
        "profession": "American entrepreneur",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "You have to trust in something, your gut, destiny, life, karma, whatever.",
        "author": "Steve Jobs",
        "profession": "American entrepreneur",
        "topics": [
            "Inspirational",
            "Life",
            "Faith"
        ]
    },
    {
        "quote": "Every child is an artist, the problem is staying an artist when you grow up.",
        "author": "Pablo Picasso",
        "profession": "Spanish painter",
        "topics": [
            "Art",
            "Life"
        ]
    },
    {
        "quote": "The purpose of art is washing the dust of daily life off our souls.",
        "author": "Pablo Picasso",
        "profession": "Spanish painter",
        "topics": [
            "Art",
            "Life"
        ]
    },
    {
        "quote": "Good artists copy, great artists steal.",
        "author": "Pablo Picasso",
        "profession": "Spanish painter",
        "topics": [
            "Art"
        ]
    },
    {
        "quote": "Art is a lie that makes us realize truth.",
        "author": "Pablo Picasso",
        "profession": "Spanish painter",
        "topics": [
            "Art"
        ]
    },
    {
        "quote": "Inspiration does exist, but it must find you working.",
        "author": "Pablo Picasso",
        "profession": "Spanish painter",
        "topics": [
            "Art",
            "Advice",
            "Inspirational"
        ]
    },
    {
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "We learn wisdom from failure much more than from succes.",
        "author": "Samuel Smiles",
        "profession": "Scottish Author",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Failure",
            "Succes"
        ]
    },
    {
        "quote": "Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.",
        "author": "Samuel Smiles",
        "profession": "Scottish Author",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "We often discover what will do, by finding out what will not do; and probably he who never made a mistake never made a discovery.",
        "author": "Samuel Smiles",
        "profession": "Scottish Author",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Failure"
        ]
    },
    {
        "quote": "Lost wealth may be replaced by industry, lost knowledge by study, lost health by temperance or medicine, but lost time is gone forever.",
        "author": "Samuel Smiles",
        "profession": "Scottish Author",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Time"
        ]
    },
    {
        "quote": "Life will always be to a large extent what we ourselves make it.",
        "author": "Samuel Smiles",
        "profession": "Scottish Author",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "Enthusiasm... the sustaining power of all great action.",
        "author": "Samuel Smiles",
        "profession": "Scottish Author",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "People who are crazy enough to think they can change the world, are the ones who do.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
            "Inspirational",
            "Life",
            "People"
        ]
    },
    {
        "quote": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        "author": "William Shakespeare",
        "profession": "English poet",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "There is nothing either good or bad, but thinking makes it so.",
        "author": "William Shakespeare",
        "profession": "English poet",
        "topics": [
            "Philosophy"
        ]
    },
    {
        "quote": "You're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it.",
        "author": "Malcolm X",
        "profession": "American minister",
        "topics": [
            "Philosophy"
        ]
    },
    {
        "quote": "Hell is empty and all the devils are here.",
        "author": "William Shakespeare",
        "profession": "English poet",
        "topics": [
            "Philosophy"
        ]
    },
    {
        "quote": "The course of true Love never did run smooth.",
        "author": "William Shakespeare",
        "profession": "English poet",
        "topics": [
            "Love",
            "Wisdom"
        ]
    },
    {
        "quote": "Expectation is the root of all heartache.",
        "author": "William Shakespeare",
        "profession": "English poet",
        "topics": [
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        "quote": "Listen to many, speak to a few.",
        "author": "William Shakespeare",
        "profession": "English poet",
        "topics": [
            "Wisdom",
            "Inspirational"
        ]
    },
    {
        "quote": "One may smile, and smile, and be a villain.",
        "author": "William Shakespeare",
        "profession": "English poet",
        "topics": [
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        "quote": "Any fool can know. The point is to understand.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Philosophy",
            "Wisdom",
            "Inspirational"
        ]
    },
    {
        "quote": "It is not that I'm so smart. But I stay with the questions much longer.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Philosophy",
            "Wisdom",
            "Inspirational"
        ]
    },
    {
        "quote": "Build your own dreams, or someone else will hire you to build theirs.",
        "author": "Farrah Gray",
        "profession": "American businessman",
        "topics": [
            "Wisdom",
            "Inspirational",
            "Dream"
        ]
    },
    {
        "quote": "Comfort is the enemy of achievement",
        "author": "Farrah Gray",
        "profession": "American businessman",
        "topics": [
            "Achievement",
            "Inspirational"
        ]
    },
    {
        "quote": "You know, you don't have to have money to be a successful businessperson.",
        "author": "Farrah Gray",
        "profession": "American businessman",
        "topics": [
            "Business",
            "Inspirational"
        ]
    },
    {
        "quote": "I can dream alone and strive alone, but true success always requires the help and support of others.",
        "author": "Farrah Gray",
        "profession": "American businessman",
        "topics": [
            "People",
            "Success",
            "Dream"
        ]
    },
    {
        "quote": "Success isn’t something that happens overnight: it’s a process.",
        "author": "Farrah Gray",
        "profession": "American businessman",
        "topics": [
            "Business",
            "Inspirational",
            "Succes"
        ]
    },
    {
        "quote": "The more we give, the more we receive. It's important to give back, because the seeds you plant today, you will harvest tomorrow.",
        "author": "Farrah Gray",
        "profession": "American businessman",
        "topics": [
            "Giving"
        ]
    },
    {
        "quote": "Either you run the day, or the day runs you.",
        "author": "Jim Rohn",
        "profession": "American entrepreneur",
        "topics": [
            "Philosophy",
            "Inspirational"
        ]
    },
    {
        "quote": "Start from wherever you are and with whatever you’ve got.",
        "author": "Jim Rohn",
        "profession": "American entrepreneur",
        "topics": [
            "Advice",
            "Motivational"
        ]
    },
    {
        "quote": "Without constant activity, the threats of life will soon overwhelm the values",
        "author": "Jim Rohn",
        "profession": "American entrepreneur",
        "topics": [
            "Life",
            "Wisdom"
        ]
    },
    {
        "quote": "If you don’t like how things are, change it! You’re not a tree.",
        "author": "Jim Rohn",
        "profession": "American entrepreneur",
        "topics": [
            "Motivational",
            "Wisdom"
        ]
    },
    {
        "quote": "Success is neither magical nor mysterious. Success is the natural consequence of consistently applying basic fundamentals.",
        "author": "Jim Rohn",
        "profession": "American entrepreneur",
        "topics": [
            "Motivational",
            "Success"
        ]
    },
    {
        "quote": "How long should you try? Until.",
        "author": "Jim Rohn",
        "profession": "American entrepreneur",
        "topics": [
            "Motivational",
            "Inspirational"
        ]
    },
    {
        "quote": "Focus on making yourself better, not on thinking that you are better.",
        "author": "Bohdi Sanders",
        "profession": "Author",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "A true friend is someone you can count on no matter what.",
        "author": "Bohdi Sanders",
        "profession": "Author",
        "topics": [
            "Friends",
            "Wisdom"
        ]
    },
    {
        "quote": "Face your fears and you will be able to conquer them.",
        "author": "Bohdi Sanders",
        "profession": "Author",
        "topics": [
            "Fear",
            "Advice"
        ]
    },
    {
        "quote": "If you want to know what people believe, don’t read what they write, don’t ask what they believe, just observe what they do.",
        "author": "Bohdi Sanders",
        "profession": "Author",
        "topics": [
            "People",
            "Inspirational"
        ]
    },
    {
        "quote": "I used to think I was indecisive, but now I am not quite sure.",
        "author": "Tommy Cooper",
        "profession": "British Comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "Police arrested two kids yesterday, one was drinking battery acid, the other was eating fireworks. They charged one and let the other one off.",
        "author": "Tommy Cooper",
        "profession": "British Comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "You know, somebody actually complimented me on my driving today. They left a little note on the windscreen, it said 'Parking Fine.'",
        "author": "Tommy Cooper",
        "profession": "British Comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "A lie gets halfway around the world before the truth has a chance to get its pants on.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
            "Humor",
            "Life"
        ]
    },
    {
        "quote": "Knowledge is like underwear. It is useful to have it, but not necessary to show it off.",
        "author": "Bill Murray",
        "profession": "American actor",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "We are all here on earth to help others; what on earth the others are here for I don't know.",
        "author": "Bill Murray",
        "profession": "American actor",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "Happiness is having a large, loving, caring, close-knit family in another city.",
        "author": "George Burns",
        "profession": "American comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "A professor is someone who talks in someone else's sleep.",
        "author": "W. H. Auden",
        "profession": "English-American Poet",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "Everything is changing. People are taking the comedians seriously and the politicians as a joke.",
        "author": "Will Rogers",
        "profession": "American actor",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "That’s why they call it the American Dream, because you have to be asleep to believe it.",
        "author": "George Carlin",
        "profession": "American comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "If you’re too open-minded; your brains may fall out.",
        "author": "Lawrence Ferlinghetti",
        "profession": "American poet",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "If you think nobody cares about you, try missing a couple of payments.",
        "author": "Steven Wright",
        "profession": "American stand-up comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "There's a fine line between fishing and just standing on the shore like an idiot.",
        "author": "Steven Wright",
        "profession": "American stand-up comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "If at first you don't succeed then skydiving definitely isn't for you.",
        "author": "Steven Wright",
        "profession": "American stand-up comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "A lot of people are afraid of heights. Not me, I'm afraid of widths.",
        "author": "Steven Wright",
        "profession": "American stand-up comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "What's another word for Thesaurus?",
        "author": "Steven Wright",
        "profession": "American stand-up comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "You can't have everything. Where would you put it?",
        "author": "Steven Wright",
        "profession": "American stand-up comedian",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "Don’t be so humble – you are not that great.",
        "author": "Golda Meir",
        "profession": "Former Prime Minister of Israel",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "Whether women are better than men I cannot say - but I can say they are certainly no worse.",
        "author": "Golda Meir",
        "profession": "Former Prime Minister of Israel",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "The best way to teach your kids about taxes is by eating 30 percent of their ice cream.",
        "author": "Bill Murray",
        "profession": "American actor",
        "topics": [
            "Humor"
        ]
    },
    {
        "quote": "You can't soar with the eagles as long as you hang out with the turkeys.",
        "author": "Joel Osteen",
        "profession": "American televangelist",
        "topics": [
            "Philosophy",
            "Inspirational"
        ]
    },
    {
        "quote": "You can change your world by changing your words... Remember, death and life are in the power of the tongue.",
        "author": "Joel Osteen",
        "profession": "American televangelist",
        "topics": [
            "Philosophy",
            "Life"
        ]
    },
    {
        "quote": "Nothing is impossible, the word itself says 'I'm possible'!",
        "author": "Audrey Hepburn",
        "profession": "British actress",
        "topics": [
            "Humor",
            "Inspirational"
        ]
    },
    {
        "quote": "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.",
        "author": "Audrey Hepburn",
        "profession": "British actress",
        "topics": [
            "People",
            "Inspirational"
        ]
    },
    {
        "quote": "I never think of myself as an icon. What is in other people's minds is not in my mind. I just do my thing.",
        "author": "Audrey Hepburn",
        "profession": "British actress",
        "topics": [
            "People",
            "Inspirational"
        ]
    },
    {
        "quote": "The best thing to hold onto in life is each other.",
        "author": "Audrey Hepburn",
        "profession": "British actress",
        "topics": [
            "People",
            "Life"
        ]
    },
    {
        "quote": "Be nice to nerds. Chances are you'll end up working for one.",
        "author": "Bill Gates",
        "profession": "American business magnate",
        "topics": [
            "Humor",
            "Advice"
        ]
    },
    {
        "quote": "Your most unhappy customers are your greatest source of learning.",
        "author": "Bill Gates",
        "profession": "American business magnate",
        "topics": [
            "Inspirational",
            "People"
        ]
    },
    {
        "quote": "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        "author": "Bill Gates",
        "profession": "American business magnate",
        "topics": [
            "Inspirational",
            "People"
        ]
    },
    {
        "quote": "Life is not fair; get used to it.",
        "author": "Bill Gates",
        "profession": "American business magnate",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "If you can't make it good, at least make it look good.",
        "author": "Bill Gates",
        "profession": "American business magnate",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Advice"
        ]
    },
    {
        "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Life",
            "Inspirational"
        ]
    },
    {
        "quote": "Nearly all men can stand adversity, but if you want to test a man’s character, give him power.",
        "author": "Abraham Lincoln",
        "profession": "16th U.S. President",
        "topics": [
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        "quote": "The best way to predict your future is to create it.",
        "author": "Abraham Lincoln",
        "profession": "16th U.S. President",
        "topics": [
            "Life",
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        "quote": "I would rather be a little nobody, then to be a evil somebody.",
        "author": "Abraham Lincoln",
        "profession": "16th U.S. President",
        "topics": [
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        "quote": "I will prepare and some day my chance will come.",
        "author": "Abraham Lincoln",
        "profession": "16th U.S. President",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "Important principles may, and must, be inflexible.",
        "author": "Abraham Lincoln",
        "profession": "16th U.S. President",
        "topics": [
            "Philosophy",
            "Wisdom",
            "Inspirational"
        ]
    },
    {
        "quote": "Tact is the ability to describe others as they see themselves.",
        "author": "Abraham Lincoln",
        "profession": "16th U.S. President",
        "topics": [
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        "quote": "You cannot escape the responsibility of tomorrow by evading it today.",
        "author": "Abraham Lincoln",
        "profession": "16th U.S. President",
        "topics": [
            "Inspirational",
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        "quote": "Knowing thyself, that is the greatest wisdom.",
        "author": "Galileo Galilei",
        "profession": "Italian Polymath",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "To be humane, we must ever be ready to pronounce that wise, ingenious and modest statement 'I do not know'.",
        "author": "Galileo Galilei",
        "profession": "Italian Polymath",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Two truths cannot contradict one another.",
        "author": "Galileo Galilei",
        "profession": "Italian Polymath",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Where the senses fail us, reason must step in.",
        "author": "Galileo Galilei",
        "profession": "Italian Polymath",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "All truths are easy to understand once they are discovered; the point is to discover them.",
        "author": "Galileo Galilei",
        "profession": "Italian Polymath",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    }
]
  //credi to awran5
const namesArray =  ["Aaron","Adam","Alan","Albert","Alexander","Andrew","Anthony","Arthur","Austin","Benjamin","Billy","Bobby","Brandon","Brian","Bruce","Bryan","Carl","Charles","Christian","Christopher","Craig","Daniel","David","Dennis","Donald","Douglas","Dylan","Edward","Eric","Ethan","Eugene","Frank","Gary","George","Gerald","Gregory","Harold","Harry","Henry","Howard","Jack","Jacob","James","Jason","Jeffrey","Jeremy","Jerry","Jesse","Joe","John","Johnny","Jonathan","Jordan","Jose","Joseph","Joshua","Juan","Justin","Keith","Kenneth","Kevin","Kyle","Larry","Lawrence","Louis","Mark","Matthew","Michael","Nathan","Nicholas","Patrick","Paul","Peter","Philip","Phillip","Ralph","Randy","Raymond","Richard","Robert","Roger","Ronald","Roy","Russell","Ryan","Samuel","Scott","Sean","Stephen","Steven","Terry","Thomas","Timothy","Tyler","Vincent","Walter","Wayne","William","Willie","Zachary",
"Alice","Amanda","Amber","Amy","Andrea","Angela","Ann","Anna","Ashley","Barbara","Betty","Beverly","Brenda","Brittany","Carol","Carolyn","Catherine","Cheryl","Christina","Christine","Crystal","Cynthia","Danielle","Deborah","Debra","Denise","Diana","Diane","Donna","Doris","Dorothy","Elizabeth","Emily","Emma","Evelyn","Frances","Gloria","Grace","Hannah","Heather","Helen","Jacqueline","Jane","Janet","Janice","Jean","Jennifer","Jessica","Joan","Joyce","Judith","Judy","Julia","Julie","Karen","Katherine","Kathleen","Kathryn","Kathy","Kelly","Kimberly","Laura","Lauren","Linda","Lisa","Lori","Madison","Margaret","Maria","Marie","Marilyn","Martha","Mary","Megan","Melissa","Michelle","Mildred","Nancy","Nicole","Olivia","Pamela","Patricia","Rachel","Rebecca","Rose","Ruth","Samantha","Sandra","Sara","Sarah","Sharon","Shirley","Stephanie","Susan","Tammy","Teresa","Theresa","Tiffany","Victoria","Virginia",
"Adams","Aguilar","Alexander","Allen","Alvarado","Alvarez","Anderson","Andrews","Armstrong","Arnold","Austin","Bailey","Baker","Banks","Barnes","Barnett","Barrett","Bates","Beck","Bell","Bennett","Berry","Bishop","Black","Bowman","Boyd","Bradley","Brewer","Brooks","Brown","Bryant","Burke","Burns","Burton","Butler","Campbell","Carlson","Carpenter","Carr","Carroll","Carter","Castillo","Castro","Chapman","Chavez","Chen","Clark","Cole","Coleman","Collins","Contreras","Cook","Cooper","Cox","Crawford","Cruz","Cunningham","Curtis","Daniels","Davidson","Davis","Day","Dean","Delgado","Diaz","Dixon","Douglas","Duncan","Dunn","Edwards","Elliott","Ellis","Estrada","Evans","Ferguson","Fernandez","Fields","Fisher","Flores","Ford","Foster","Fowler","Fox","Franklin","Freeman","Fuller","Garcia","Gardner","Garrett","Garza","George","Gibson","Gilbert","Gomez","Gonzales","Gonzalez","Gordon","Graham","Grant","Gray","Green","Greene","Griffin","Guerrero","Gutierrez","Guzman","Hall","Hamilton","Hansen","Hanson","Harper","Harris","Harrison","Hart","Harvey","Hawkins","Hayes","Henderson","Henry","Hernandez","Herrera","Hicks","Hill","Hoffman","Holland","Holmes","Hopkins","Howard","Howell","Hudson","Hughes","Hunt","Hunter","Jackson","Jacobs","James","Jenkins","Jensen","Jimenez","Johnson","Johnston","Jones","Jordan","Keller","Kelley","Kelly","Kennedy","Kim","King","Knight","Lane","Larson","Lawrence","Lawson","Lee","Lewis","Little","Long","Lopez","Lucas","Lynch","Marshall","Martin","Martinez","Mason","Matthews","May","McCoy","McDonald","Medina","Mendez","Mendoza","Meyer","Miller","Mills","Mitchell","Montgomery","Moore","Morales","Moreno","Morgan","Morris","Morrison","Munoz","Murphy","Murray","Myers","Nelson","Newman","Nguyen","Nichols","Obrien","Oliver","Olson","Ortega","Ortiz","Owens","Palmer","Parker","Patel","Patterson","Payne","Pearson","Pena","Perez","Perkins","Perry","Peters","Peterson","Phillips","Pierce","Porter","Powell","Price","Ramirez","Ramos","Ray","Reed","Reid","Reyes","Reynolds","Rice","Richards","Richardson","Riley","Rios","Rivera","Roberts","Robertson","Robinson","Rodriguez","Rogers","Romero","Rose","Ross","Ruiz","Russell","Ryan","Salazar","Sanchez","Sanders","Sandoval","Santos","Schmidt","Schneider","Schultz","Scott","Shaw","Silva","Simmons","Simpson","Sims","Smith","Snyder","Soto","Spencer","Stanley","Stephens","Stevens","Stewart","Stone","Sullivan","Taylor","Thomas","Thompson","Torres","Tran","Tucker","Turner","Valdez","Vargas","Vasquez","Wade","Wagner","Walker","Wallace","Walsh","Walters","Ward","Warren","Washington","Watkins","Watson","Weaver","Webb","Weber","Welch","Wells","West","Wheeler","White","Williams","Williamson","Willis","Wilson","Wong","Wood","Woods","Wright","Young"]
  //credit to uinames
const interests = [
  '3D printing',
  'Amateur radio',
  'Scrapbook',
  'Amateur radio',
  'Acting',
  'Baton twirling',
  'Board games',
  'Book restoration',
  'Cabaret',
  'Calligraphy',
  'Candle making',
  'Computer programming',
  'Coffee roasting',
  'Cooking',
  'Colouring',
  'Cosplaying',
  'Couponing',
  'Creative writing',
  'Crocheting',
  'Cryptography',
  'Dance',
  'Digital arts',
  'Drama',
  'Drawing',
  'Do it yourself',
  'Electronics',
  'Embroidery',
  'Fashion',
  'Flower arranging',
  'Foreign language learning',
  'Gaming',
  'Tabletop games',
  'Role-playing games',
  'Gambling',
  'Genealogy',
  'Glassblowing',
  'Gunsmithing',
  'Homebrewing',
  'Ice skating',
  'Jewelry making',
  'Jigsaw puzzles',
  'Juggling',
  'Knapping',
  'Knitting',
  'Kabaddi',
  'Knife making',
  'Lacemaking',
  'Lapidary',
  'Leather crafting',
  'Lego building',
  'Lockpicking',
  'Machining',
  'Macrame',
  'Metalworking',
  'Magic',
  'Model building',
  'Listening to music',
  'Origami',
  'Painting',
  'Playing musical instruments',
  'Pet',
  'Poi',
  'Pottery',
  'Puzzles',
  'Quilting',
  'Reading',
  'Scrapbooking',
  'Sculpting',
  'Sewing',
  'Singing',
  'Sketching',
  'Soapmaking',
  'Sports',
  'Stand-up comedy',
  'Sudoku',
  'Table tennis',
  'Taxidermy',
  'Video gaming',
  'Watching movies',
  'Web surfing',
  'Whittling',
  'Wood carving',
  'Woodworking',
  'World Building',
  'Writing',
  'Yoga',
  'Yo-yoing',
  'Air sports',
  'Archery',
  'Astronomy',
  'Backpacking',
  'Base jumping',
  'Baseball',
  'Basketball',
  'Beekeeping',
  'Bird watching',
  'Blacksmithing',
  'Board sports',
  'Bodybuilding',
  'Brazilian jiu-jitsu',
  'Community',
  'Cycling',
  'Dowsing',
  'Driving',
  'Fishing',
  'Flag football',
  'Flying',
  'Flying disc',
  'Foraging',
  'Gardening',
  'Geocaching',
  'Ghost hunting',
  'Graffiti',
  'Handball',
  'Hiking',
  'Hooping',
  'Horseback riding',
  'Hunting',
  'Inline skating',
  'Jogging',
  'Kayaking',
  'Kite flying',
  'Kitesurfing',
  'Larping',
  'Letterboxing',
  'Metal detecting',
  'Motor sports',
  'Mountain biking',
  'Mountaineering',
  'Mushroom hunting',
  'Mycology',
  'Netball',
  'Nordic skating',
  'Orienteering',
  'Paintball',
  'Parkour',
  'Photography',
  'Polo',
  'Rafting',
  'Rappelling',
  'Rock climbing',
  'Roller skating',
  'Rugby',
  'Running',
  'Sailing',
  'Sand art',
  'Scouting',
  'Scuba diving',
  'Sculling',
  'Rowing',
  'Shooting',
  'Shopping',
  'Skateboarding',
  'Skiing',
  'Skim Boarding',
  'Skydiving',
  'Slacklining',
  'Snowboarding',
  'Stone skipping',
  'Surfing',
  'Swimming',
  'Taekwondo',
  'Tai chi',
  'Urban exploration',
  'Vacation',
  'Vehicle restoration',
  'Water sports']
  //credit to Allan Pooley and @mbejda;


fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => {
    const dogObject = data.message
    const dogArray = Object.keys(dogObject)
    console.log(dogArray)
    dogArray.forEach((dog, i) => {
      const option = document.createElement('option')
      option.value = dogArray[i]
      option.innerText = dogArray[i]
      document.querySelector('select').appendChild(option)
    })
  })
  .catch(err => {
    console.log(`error ${err}`)
  })

function dogAPI(event) {
  let breed = event.target.value
  console.log(event.target.value)
  let url = `https://dog.ceo/api/breed/${breed}/images/random`
  console.log(url)
	fetch(url)
    .then( res => res.json() )
    .then( data => {
      console.log(data.message)
      document.querySelector('img').src = data.message
    })
    .catch(err => {
      console.log(`error @{err}`)
    })
  let randomName = Math.floor(Math.random() * namesArray.length)
  document.querySelector('h2').innerText = namesArray[randomName]
  likesAndDislikes()
  ageChange()
  genderChange()
  quoteChange(quotes)
}

document.querySelector('select').addEventListener('change', dogAPI)

function likesAndDislikes() {
  let randomInterest = Math.floor(Math.random() * interests.length)
  let interestsUpdate = interests.filter((value, index) => randomInterest !== index)
  console.log(randomInterest)

  let randomInterest2 = Math.floor(Math.random() * interestsUpdate.length)
  let interestsUpdate2 = interests.filter((value, index) => randomInterest2 !== index)
  console.log(randomInterest2)

  let randomDisinterest = Math.floor(Math.random() * interestsUpdate2.length)
  let interestsUpdate3 = interests.filter((value, index) => randomDisinterest !== index)
  console.log(randomDisinterest)

  let randomDisinterest2 = Math.floor(Math.random() * interestsUpdate3.length)
  console.log(randomDisinterest2)

  document.querySelector(".likes").innerText = `Likes: ${interests[randomInterest]}, ${interestsUpdate[randomInterest2]}`
  document.querySelector('.dislikes').innerText = `Dislikes: ${interestsUpdate2[randomDisinterest]}, ${interestsUpdate3[randomDisinterest2]}`

}

function ageChange() {
  let randomNumberAge = Math.floor(Math.random() * 21)
  document.querySelector('.age').innerText = `Age: ${randomNumberAge}`;
}

function genderChange() {
  let randomNumberGender = Math.floor(Math.random() * 3)
  if (randomNumberGender == 0) {
    document.querySelector('.sex').innerText = `Gender: Male`
  } else if (randomNumberGender == 1) {
    document.querySelector('.sex').innerText = `Gender: Female`
  } else {
    document.querySelector('.sex').innerText = `Gender: Non-binary`
  }
}

function quoteChange(arr) {
  let newQuoteArray = []
  let newQuoteArrayAuthor = []
  console.log(arr[0].quote)
  for (i = 0; i < arr.length; i++) {
    newQuoteArray.push(arr[i].quote)
    newQuoteArrayAuthor.push(arr[i].author)
  }
  console.log(newQuoteArray)
  console.log(newQuoteArrayAuthor)
  let randomNumberQuote = Math.floor(Math.random() * quotes.length)
  console.log(randomNumberQuote)
  console.log(newQuoteArray[randomNumberQuote])
  document.querySelector('.add-info').innerText = `Favorite Quote: "${newQuoteArray[randomNumberQuote]}"
  - ${newQuoteArrayAuthor[randomNumberQuote]}`;
}
