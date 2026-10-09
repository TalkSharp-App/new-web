import AdultView from '@/views/AdultView.vue'
import BlogView from '@/views/BlogView.vue'
import CompanyView from '@/views/CompanyView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import CookiePolicyView from '@/views/CookiePolicyView.vue'
import DeleteAccountView from '@/views/DeleteAccountView.vue'
import KidsView from '@/views/KidsView.vue'
import PricingView from '@/views/PricingView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import TermsAndConditionView from '@/views/TermsAndConditionView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "adult",
      component: AdultView,
      meta: {
        title: "TalkSharp | Learn African Languages Online",
        description:
          "Learn Yoruba, Igbo, Twi, Swahili and Nigerian Pidgin with interactive lessons on TalkSharp.",
      },
    },
    {
      path: "/kids",
      name: "kids",
      component: KidsView,
      meta: {
        title: "TalkSharp Kids | African Language Learning for Kids",
        description:
          "Help your child learn African languages through fun, interactive lessons. Discover TalkSharp Kids, designed to make language learning engaging for children.",
      },
    },
    {
      path: "/company",
      name: "company",
      component: CompanyView,
      meta: {
        title: "About TalkSharp | Our Mission, Story & Team",
        description:
          "Discover the story behind TalkSharp, meet our team and learn how we're using technology to preserve African languages and connect people with their culture.",
      },
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
      meta: {
        title: "TalkSharp Pricing | Free & Premium Language Learning",
        description:
          "Explore TalkSharp's free and premium plans. Find the right plan to learn African languages with interactive lessons and engaging learning experiences.",
      },
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyPolicyView,
      meta: {
        title: "Privacy Policy | TalkSharp",
        description:
          "Read TalkSharp's Privacy Policy to understand how we collect, use, store and protect your personal information when using our language learning platform.",
      },
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUsView,
      meta: {
        title: "Contact TalkSharp | Support, Questions & Partnerships",
        description:
          "Have questions about TalkSharp? Contact our team for support, feedback, business inquiries or partnership opportunities. We'd love to hear from you.",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
      meta: {
        title: "TalkSharp Blog | African Languages, Culture & Learning",
        description:
          "Explore articles about African languages, culture, language learning tips and traditions. Discover insights and stories from the TalkSharp community.",
      },
    },
    {
      path: "/terms-of-service",
      name: "Terms of Service",
      component: TermsAndConditionView,
      meta: {
        title: "Terms of Service | TalkSharp",
        description:
          "Review TalkSharp's Terms of Service to understand the rules, conditions and responsibilities associated with using our language learning platform.",
      },
    },
    {
      path: "/delete-account",
      name: "Delete Account",
      component: DeleteAccountView,
      meta: {
        title: "Delete Your TalkSharp Account | Account Management",
        description:
          "Learn how to request deletion of your TalkSharp account and associated personal data. Find information about the account deletion process.",
      },
    }
  ],
})

export default router
