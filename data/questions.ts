export type Question = {
  id: number;
  title: string;
  prompt: string;
};

export const questions: Question[] = [
  {
    id: 1,
    title: "Follows pointing gestures",
    prompt:
      "If you point to an object in the room, does your child look at it? For example, if you point to a toy or animal, does your child look at it?"
  },
  {
    id: 2,
    title: "Concern about hearing",
    prompt: "Have you ever considered that your child might be deaf?"
  },
  {
    id: 3,
    title: "Pretend play",
    prompt:
      "Does your child play pretend or make-believe? For example, pretend to drink from an empty cup, pretend to talk on a phone, or pretend to feed a doll or stuffed animal."
  },
  {
    id: 4,
    title: "Climbing behavior",
    prompt:
      "Does your child like to climb on things? For example, furniture, playground equipment, or stairs."
  },
  {
    id: 5,
    title: "Finger movements near eyes",
    prompt:
      "Does your child make unusual finger movements close to their eyes? For example, does your child wiggle their fingers in front of their eyes?"
  },
  {
    id: 6,
    title: "Points to request help",
    prompt:
      "Does your child point with one finger to indicate a need or to ask for help? For example, pointing to a snack or toy that is out of reach."
  },
  {
    id: 7,
    title: "Points to share interest",
    prompt:
      "Does your child point with one finger to show you something interesting? For example, pointing to an airplane in the sky or a truck on the road."
  },
  {
    id: 8,
    title: "Interest in other children",
    prompt:
      "Is your child interested in other children? For example, does your child look at other children, smile at them, or walk toward them?"
  },
  {
    id: 9,
    title: "Shares items for connection",
    prompt:
      "Does your child give you or hold things up to show you - not to ask for help, but simply to share? For example, showing you a flower, a stuffed animal, or a toy truck."
  },
  {
    id: 10,
    title: "Responds to name",
    prompt:
      "Does your child respond when you call their name? For example, do they look up, speak, babble, or stop what they are doing when you call their name?"
  },
  {
    id: 11,
    title: "Smiles in response",
    prompt: "Does your child smile back when you smile at them?"
  },
  {
    id: 12,
    title: "Sensitive to everyday noise",
    prompt:
      "Is your child disturbed by everyday noises? For example, does your child scream or cry because of a vacuum cleaner or loud music?"
  },
  {
    id: 13,
    title: "Walking ability",
    prompt: "Can your child walk?"
  },
  {
    id: 14,
    title: "Maintains eye contact",
    prompt:
      "Does your child look you in the eye when you talk to them, play with them, or dress them?"
  },
  {
    id: 15,
    title: "Imitates actions",
    prompt:
      "Does your child imitate what you do? For example, by waving goodbye, clapping, or making funny noises."
  },
  {
    id: 16,
    title: "Follows your gaze",
    prompt:
      "If you turn your head to look at something, does your child look around to see what you are looking at?"
  },
  {
    id: 17,
    title: "Seeks your attention",
    prompt:
      "Does your child try to get you to look at them? For example, does your child look at you for praise or say \"look\" or \"look at me\"?"
  },
  {
    id: 18,
    title: "Understands instructions without gestures",
    prompt:
      "Does your child understand simple instructions without pointing? For example, does your child understand \"put the book on the chair\" or \"get me a blanket\" without you pointing?"
  },
  {
    id: 19,
    title: "Checks your reaction",
    prompt:
      "If something new happens, does your child look at your face to see how you feel? For example, if they hear a strange or funny sound, do they look at your face?"
  },
  {
    id: 20,
    title: "Enjoys physical play",
    prompt:
      "Does your child enjoy playing physical games? For example, rocking or bouncing on your lap."
  }
];

export const totalQuestions = questions.length;
