import AboutMe from "../../components/about/about"
import Tech from "@/components/about/tech"
import { SOCIALS } from "@/constants"
import Link from "next/link"

export default function About() {
  return (
    <section className="px-4">
      <AboutMe/>
      <Tech/>
    </section>
  )
}
