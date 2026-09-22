import LinkedIn from "@/assets/linkedin.svg";
import IG from "@/assets/ig.svg";
import X from "@/assets/X.svg"

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
  {label: '+44 754 718 6420', to: "" }
]

export const Legal = [
  {label: 'Terms of Service', to: "/terms-of-service" },
  {label: 'Privacy Policy', to: "/privacy" },
  {label: 'Cookie Policy', to: "/cookie-policy" }
]

export const Socials = [
    {
        icon: LinkedIn,
        link: "",
        alt: "TalkSharp LinkedIn"
    },
    {
        icon: IG,
        link: "",
        alt: "TalkSharp Instagram"
    },
    {
        icon: X,
        link: "",
        alt: "TalkSharp X"
    }
]