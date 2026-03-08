import type { LucideIcon } from "lucide-react"
import {
  Apple,
  ArrowRight,
  BadgeCheck,
  CalendarRange,
  ClipboardList,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Truck,
  UserRoundCheck,
} from "lucide-react"

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/meal-plans", label: "Meal Plans" },
  { href: "/subscription", label: "Subscription" },
  { href: "/contact", label: "Contact" },
] as const

export const heroMetrics = [
  { value: "4.9/5", label: "average member rating" },
  { value: "48 hrs", label: "from onboarding to first plan" },
  { value: "92%", label: "say Balanz feels easier to sustain" },
] as const

export const featureCards: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: "Nutrition built around your real routine",
    description:
      "Plans adapt to your schedule, preferences, and health goals so eating well feels realistic from day one.",
    icon: UserRoundCheck,
  },
  {
    title: "Chef-led menus with ingredient clarity",
    description:
      "Balanced meals are designed for taste first, with clean macros and transparent ingredients behind every choice.",
    icon: Apple,
  },
  {
    title: "Support that keeps momentum steady",
    description:
      "Weekly check-ins, easy swaps, and guidance help you stay consistent without overhauling your whole lifestyle.",
    icon: HeartPulse,
  },
] as const

export const aiTrainers = [
  {
    name: "Ava",
    role: "24/7 Meal Planner",
    description: "Builds meal structure around your schedule, preferences, calorie targets, and weekly routine in real time.",
  },
  {
    name: "Rohan",
    role: "24/7 Query Assistant",
    description: "Answers ingredient, macro, allergy, delivery, and plan questions instantly without sending you through support loops.",
  },
  {
    name: "Mira",
    role: "Routine Coach",
    description: "Helps you stay consistent by recommending swaps, reminders, and small adjustments based on your real habits.",
  },
  {
    name: "Nia",
    role: "Progress Analyst",
    description: "Tracks patterns in adherence and gives clear recommendations to improve recovery, consistency, and long-term results.",
  },
] as const

export const processSteps = [
  {
    title: "Share your goals",
    body: "Tell us about your schedule, dietary preferences, fitness targets, and any ingredient constraints.",
    icon: ClipboardList,
  },
  {
    title: "Receive your plan",
    body: "We map out meals, portions, and timing around your week so every decision feels lighter and more obvious.",
    icon: Sparkles,
  },
  {
    title: "Refine as you go",
    body: "Swap dishes, adjust delivery cadence, and tune macros as your routine changes over time.",
    icon: TimerReset,
  },
] as const

export const mealCategories = [
  {
    category: "Breakfast",
    description: "Fast, satisfying starts with protein-forward options that keep energy stable through the morning.",
    meals: [
      "High-protein pancakes with berry compote",
      "Greek yogurt granola bowl with chia",
      "Egg and avocado breakfast wrap",
    ],
  },
  {
    category: "Lunch & Dinner",
    description: "Balanced mains designed for focus, recovery, and staying full without feeling heavy.",
    meals: [
      "Grilled chicken quinoa bowl",
      "Lentil protein curry with brown rice",
      "Miso salmon with charred greens",
      "Sesame tofu stir-fry with vegetables",
    ],
  },
  {
    category: "Snacks",
    description: "Smart fillers for afternoons, workouts, and travel days when convenience matters most.",
    meals: [
      "Roasted edamame with sea salt",
      "Date and almond energy bars",
      "Chickpea protein cookies",
    ],
  },
] as const

export const subscriptionPlans = [
  {
    name: "Essential",
    price: "₹3,999",
    summary: "A sharp baseline for lighter schedules or solo routines.",
    meals: "10 chef-prepared meals",
    cadence: "Biweekly delivery window",
    support: "Monthly plan tune-up",
    featured: false,
  },
  {
    name: "Signature",
    price: "₹6,999",
    summary: "Our most balanced option for consistent weekly structure.",
    meals: "20 chef-prepared meals",
    cadence: "Weekly delivery priority",
    support: "Biweekly nutrition check-ins",
    featured: true,
  },
  {
    name: "Performance",
    price: "₹9,999",
    summary: "Built for higher-volume schedules, training blocks, or households.",
    meals: "30 chef-prepared meals",
    cadence: "Twice-weekly freshness drops",
    support: "Weekly coaching support",
    featured: false,
  },
] as const

export const planBenefits: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: "Flexible delivery windows",
    description: "Adjust around work, travel, and family scheduling with minimal friction.",
    icon: Truck,
  },
  {
    title: "Ingredient and allergen transparency",
    description: "Every plan is built with clear nutritional information and sourcing-minded standards.",
    icon: ShieldCheck,
  },
  {
    title: "Goal-based progression",
    description: "Your plan evolves as your habits, training load, or dietary needs shift.",
    icon: CalendarRange,
  },
] as const

export const companyPrinciples: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: "Practical wellness",
    description: "We design for consistency, not perfection. Every choice should be easy to maintain in real life.",
    icon: BadgeCheck,
  },
  {
    title: "Ingredient integrity",
    description: "Fresh produce, quality proteins, and transparent sourcing form the backbone of every meal.",
    icon: Leaf,
  },
  {
    title: "Quietly premium service",
    description: "Thoughtful details, smooth logistics, and responsive support create a more elevated daily experience.",
    icon: ArrowRight,
  },
] as const

export const contactMethods: Array<{
  title: string
  detail: string
  description: string
}> = [
  {
    title: "Email",
    detail: "hello@balanz.com",
    description: "Best for onboarding questions, dietary requests, and partnership enquiries.",
  },
  {
    title: "Phone",
    detail: "+91 98765 43210",
    description: "Available Monday to Saturday, 9:00 AM to 7:00 PM IST for active members.",
  },
  {
    title: "Studio",
    detail: "12 Orchard Lane, Bengaluru 560001",
    description: "By appointment for tastings, consultations, and local partner meetings.",
  },
] as const

export const faqs = [
  {
    question: "Can I switch plans after subscribing?",
    answer:
      "Yes. Members can upgrade, pause, or change plan cadence as their schedule shifts, with changes applied to the next billing cycle.",
  },
  {
    question: "Do you support vegetarian or vegan plans?",
    answer:
      "Yes. Balanz offers omnivore, vegetarian, and vegan-friendly paths, along with ingredient exclusions for common preferences.",
  },
  {
    question: "How personalized is the experience?",
    answer:
      "Your intake, preferences, and feedback all shape the meal mix, delivery rhythm, and nutrition recommendations over time.",
  },
] as const
