import LinkedIn from "@/assets/linkedin.svg";
import IG from "@/assets/ig.svg";
import X from "@/assets/X.svg"
import CloudImg from '@/assets/cloud.png';
import YoImg from '@/assets/yo.svg';
import IgbImg from '@/assets/igb.svg';
import TwiImg from '@/assets/twi.svg';
import PdImg from '@/assets/pd.svg';
import HauImg from '@/assets/hau.svg';

export const Links = [
  {label: 'For Adult', to: "/" },
  {label: 'For Kids', to: "/kids" },
  {label: 'Company', to: "/company" },
  {label: 'Pricing', to: "/pricing" }
]

export const Company = [
  {label: 'About', to: "/company" },
  {label: 'Blog', to: "/blog" }
]

export const Support = [
  {label: 'Contact Us', to: "/contact-us" },
  {label: 'hello@talksharp.co', to: "" },
  {label: '+44 754 718 6420', to: "" },
]

export const Legal = [
  {label: 'Terms of Service', to: "/terms-of-service" },
  {label: 'Privacy Policy', to: "/privacy" },
  // {label: 'Cookie Policy', to: "/cookie-policy" },
  {label: 'Delete Your Account', to: "/delete-account" },
]

export const Socials = [
    {
        icon: LinkedIn,
        link: "https://www.linkedin.com/company/talksharpapp",
        alt: "TalkSharp LinkedIn"
    },
    {
        icon: IG,
        link: "https://www.instagram.com/talksharp.ai",
        alt: "TalkSharp Instagram"
    },
    {
        icon: X,
        link: "https://x.com/TalkSharp",
        alt: "TalkSharp X"
    }
]

export const Scenarios = [
    {
        id: "greeting-elders",
        title: "Greeting elders",
        emoji: "🙏",
        description: "Learn respectful greetings for elders.",
        tag: "Beginner",
        image: "https://talksharp.co/wp-content/uploads/2026/06/greeting.png",
        languages: {
            Yoruba: {
                meaning: "A respectful morning greeting exchange between a younger person and an elder.",
                lines: [
                    { speaker: "Younger person", text: "Ẹ kú àárọ̀, Baba.", translation: "Good morning, Sir.", audio: "url" },
                    { speaker: "Elder", text: "Kú àárọ̀, ọmọ mi. Báwo ni o?", translation: "Morning my child, how are you." },
                    { speaker: "Younger person", text: "Mo wà dáadáa, ésé.", translation: "I am fine, thank you." }
                ]
            },
            Twi: {
                meaning: "A similar elder-respecting greeting in Twi.",
                lines: [
                    { speaker: "Younger person", text: "Maakye, Agya.", translation: "Good morning, Sir." },
                    { speaker: "Elder", text: "Maakye, me ba. Wo ho te sɛn?", translation: "Good Morning dear, how are you."  },
                    { speaker: "Younger person", text: "Me ho yɛ.", translation: "I am fine." }
                ]
            },
            Pidgin: {
                meaning: "A casual but respectful greeting version in Pidgin.",
                lines: [
                    { speaker: "Younger person", text: "Good morning, Sir.", translation: "Good morning, Sir." },
                    { speaker: "Elder", text: "Morning, my pikin. How body?", translation: "Morning my child, how are you."},
                    { speaker: "Younger person", text: "I dey fine.", translation: "I am fine." }
                ]
            }
        }
    },
    {
        id: "market",
        title: "At the market",
        emoji: "🛒",
        description: "Buy items and ask simple questions.",
        tag: "Beginner",
        image: "https://talksharp.co/wp-content/uploads/2026/04/market.jpg",
        languages: {
            Yoruba: {
                meaning: "Simple buying and price-checking conversation.",
                lines: [
                    { speaker: "Buyer", text: "Ẹ jọ̀ọ́, mélòó ni èyí?", translation: "Please how much is this." },
                    { speaker: "Seller", text: "Ó jẹ́ ẹgbẹ̀rún kan.", translation: "It's 1000." },
                    { speaker: "Buyer", text: "Ẹ lè dín kù?", translation: "Can you reduce it?" }
                ]
            },
            Twi: {
                meaning: "Useful market phrases in Twi.",
                lines: [
                    { speaker: "Buyer", text: "Mepa wo kyɛw, ɛyɛ sɛn?", translation: "Please how much is this." },
                    { speaker: "Seller", text: "Ɛyɛ cedi du.", translation: "It is ten cedis" },
                    { speaker: "Buyer", text: "Wobɛtumi ate so?", translation: "Can you reduce it?" }
                ]
            },
            Pidgin: {
                meaning: "Basic market haggling in Pidgin.",
                lines: [
                    { speaker: "Buyer", text: "Abeg, how much be this?", translation: "Please how much is this." },
                    { speaker: "Seller", text: "Na one thousand naira.", translation: "It's 1000 naira." },
                    { speaker: "Buyer", text: "You fit reduce am?", translation: "Can you reduce it?" }
                ]
            }
        }
    },
    {
        id: "friends",
        title: "With friends",
        emoji: "😄",
        description: "Chat casually with your friends.",
        tag: "Everyday",
        image: "https://talksharp.co/wp-content/uploads/2026/04/friends.jpg",
        languages: {
            Yoruba: {
                meaning: "A relaxed everyday conversation with friends.",
                lines: [
                    { speaker: "Friend 1", text: "Ṣé daadaa ni?", translation: "Are you good/well?" },
                    { speaker: "Friend 2", text: "Mo wà daadaa. Iwọ nko?", translation: "I am fine. And you?" },
                    { speaker: "Friend 1", text: "Mo wà daadaa.", translation: "I am fine." }
                ]
            },
            Twi: {
                meaning: "A casual check-in with friends in Twi.",
                lines: [
                    { speaker: "Friend 1", text: "Wo ho te sɛn?", translation: "How are you doing?" },
                    { speaker: "Friend 2", text: "Me ho yɛ. Na wo nso?", translation: "I am fine/well, and you" },
                    { speaker: "Friend 1", text: "Me nso me ho yɛ.", translation: "I am also fine" }
                ]
            },
            Pidgin: {
                meaning: "Friendly check-in in Pidgin.",
                lines: [
                    { speaker: "Friend 1", text: "How far?", translation: "How are you?" },
                    { speaker: "Friend 2", text: "I dey okay. You nko?", translation: "I am okay, and you?" },
                    { speaker: "Friend 1", text: "I dey alright.", translation: "I am alright." }
                ]
            }
        }
    },
    {
        id: "traveling",
        title: "Traveling",
        emoji: "✈️",
        description: "Learn useful phrases for getting around.",
        tag: "Travel",
        image: "https://talksharp.co/wp-content/uploads/2026/06/traveling.jpg",
        languages: {
            Yoruba: {
                meaning: "Useful travel and direction phrases.",
                lines: [
                    { speaker: "Traveler", text: "Ẹ jọ̀ọ́, ibo ni mo ti lè rí mọ́tò sí Ibadan?", translation: "Please, where can I get vehicle going to Ibadan?" },
                    { speaker: "Local", text: "Lọ sí garaaji tó wà ní iwájú.", translation: "Go to the motor park in front." },
                    { speaker: "Traveler", text: "Ẹ ṣé púpọ̀.", translation: "Thank you very much" }
                ]
            },
            Twi: {
                meaning: "Asking for transport help in Twi.",
                lines: [
                    { speaker: "Traveler", text: "Mesrɛ wo, ɛhe na metumi anya kar akɔ accra?", translation: "Please, where can I get a car going to accra?" },
                    { speaker: "Local", text: "Kɔ station a ɛwɔ anim hɔ.", translation: "Go to the station that is in front." },
                    { speaker: "Traveler", text: "Medaase.", translation: "Thank you" }
                ]
            },
            Pidgin: {
                meaning: "Finding transport in Pidgin.",
                lines: [
                    { speaker: "Traveler", text: "Abeg, where I fit see bus go Ibadan?", translation: "Please, where can I get the bus going to Ibadan?" },
                    { speaker: "Local", text: "Go the park wey dey front.", translation: "Go to the park in front." },
                    { speaker: "Traveler", text: "Thank you.", translation: "Thank you." }
                ]
            }
        }
    }
];

export type Phrase = {
  id: string;
  language: string;
  phrase: string;
  translation: string;
  audio?: string;
  color: string;
};

type PhraseCategory = {
  id: string;
  label: string;
  phrases: Phrase[];
};

export const phraseCategories: PhraseCategory[] = [
  {
    id: "greeting_elders",
    label: "Greeting Elders",
    phrases: [
      {
        id: "greeting-1",
        language: "Igbo",
        phrase: "Kedu!",
        translation: "Hello",
        audio: "/audio/igbo/kedu.mp3",
        color: "bg-[#FFD54F]",
      },
      {
        id: "greeting-2",
        language: "Yoruba",
        phrase: "Ẹ káàárọ̀",
        translation: "Good morning",
        audio: "/audio/yoruba/ekaaro.mp3",
        color: "bg-[#A8D5B5]",
      },
      {
        id: "greeting-3",
        language: "Twi",
        phrase: "Maakye",
        translation: "Good morning",
        audio: "/audio/twi/maakye.mp3",
        color: "bg-[#FFD1D1]",
      },
    ],
  },

  {
    id: "at_the_market",
    label: "At the Market",
    phrases: [
      {
        id: "market-1",
        language: "Igbo",
        phrase: "Ego ole?",
        translation: "How much?",
        audio: "/audio/igbo/ego-ole.mp3",
        color: "bg-[#FFD54F]",
      },
      {
        id: "market-2",
        language: "Yoruba",
        phrase: "Èló ni?",
        translation: "How much?",
        audio: "/audio/yoruba/elo-ni.mp3",
        color: "bg-[#A8D5B5]",
      },
      {
        id: "market-3",
        language: "Twi",
        phrase: "Ɛyɛ sɛn?",
        translation: "How much?",
        audio: "/audio/twi/eye-sen.mp3",
        color: "bg-[#FFD1D1]",
      },
    ],
  },

  {
    id: "with_friends",
    label: "With Friends",
    phrases: [
      {
        id: "friends-1",
        language: "Igbo",
        phrase: "Kedu ka ị mere?",
        translation: "How are you?",
        audio: "/audio/igbo/how-are-you.mp3",
        color: "bg-[#FFD54F]",
      },
      {
        id: "friends-2",
        language: "Yoruba",
        phrase: "Báwo ni?",
        translation: "How are you?",
        audio: "/audio/yoruba/how-are-you.mp3",
        color: "bg-[#A8D5B5]",
      },
      {
        id: "friends-3",
        language: "Twi",
        phrase: "Wo ho te sɛn?",
        translation: "How are you?",
        audio: "/audio/twi/how-are-you.mp3",
        color: "bg-[#FFD1D1]",
      },
    ],
  },

  {
    id: "traveling",
    label: "Traveling",
    phrases: [
      {
        id: "traveling-1",
        language: "Igbo",
        phrase: "Ebee ka ọdụ ụgbọ ala dị?",
        translation: "Where is the bus station?",
        audio: "/audio/igbo/where-is-bus-station.mp3",
        color: "bg-[#FFD54F]",
      },
      {
        id: "traveling-2",
        language: "Yoruba",
        phrase: "Ibo ni ibùdó ọkọ̀ ayọ́kẹ́lẹ́ wà?",
        translation: "Where is the bus station?",
        audio: "/audio/yoruba/where-is-bus-station.mp3",
        color: "bg-[#A8D5B5]",
      },
      {
        id: "traveling-3",
        language: "Twi",
        phrase: "Bɔs gyinabea no wɔ he?",
        translation: "Where is the bus station?",
        audio: "/audio/twi/where-is-bus-station.mp3",
        color: "bg-[#FFD1D1]",
      },
    ],
  },
];

export const ImageLang = [
  {
    id: 1,
    class: "absolute top-20 right-1 sm:right-22 w-24 sm:w-44 pointer-events-none select-none z-0",
    image: CloudImg,
    alt: "cloud image"
  },
  {
    id: 2,
    class: "absolute top-60 sm:bottom-12 left-10 sm:left-20 w-24 sm:w-44 pointer-events-none select-none z-0 sm:top-70",
    image: CloudImg,
    alt: "cloud image"
  },
  {
    id: 3,
    class: "absolute left-10 sm:left-20 w-24 sm:w-30 pointer-events-none select-none z-0 top-120 sm:top-90",
    image: YoImg,
    alt: "cloud image"
  },
  {
    id: 4,
    class: "absolute bottom-30 sm:bottom-12 left-60 sm:left-20 w-24 sm:w-30 pointer-events-none select-none z-0 sm:top-10",
    image: IgbImg,
    alt: "cloud image"
  },
  {
    id: 5,
    class: "absolute top-60 left-60 sm:left-140 w-24 sm:w-30 pointer-events-none select-none z-0 sm:top-110",
    image: HauImg,
    alt: "cloud image"
  },
  {
    id: 6,
    class: "absolute sm:top-70 sm:right-22 w-24 sm:w-30 pointer-events-none select-none z-0",
    image: PdImg,
    alt: "pidgin"
  },
  {
    id: 7,
    class: "absolute top-1 left-70 sm:top-2 sm:left-140 w-20 sm:w-30 pointer-events-none select-none z-0",
    image: TwiImg,
    alt: "twi"
  }
];
