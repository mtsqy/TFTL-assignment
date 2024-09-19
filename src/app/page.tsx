import Magnetic from "@/components/MagneticButton"
import TransitionLink from "@/components/TransitionLink"

export default function Home() {
  return (
    <main>
      <section>
        <Magnetic>
          FULL-CYCLE EVENT AGENCY
        </Magnetic>
      </section>
      <div className="link__wrapper">
        <TransitionLink href="/where" label="where?" />
        <TransitionLink href="/who" label="who?" />
        <TransitionLink href="/what" label="what?" />
      </div>
    </main>
  )
}