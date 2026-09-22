import AdultView from '@/views/AdultView.vue'
import BlogView from '@/views/BlogView.vue'
import CompanyView from '@/views/CompanyView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import CookiePolicyView from '@/views/CookiePolicyView.vue'
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
    },
    {
      path: "/kids",
      name: "kids",
      component: KidsView,
    },
    {
      path: "/company",
      name: "company",
      component: CompanyView,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyPolicyView,
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUsView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/terms-of-service",
      name: "Terms of Service",
      component: TermsAndConditionView,
    },
    {
      path: "/cookie-policy",
      name: "Cookie Policy",
      component: CookiePolicyView,
    }
  ],
})

export default router
