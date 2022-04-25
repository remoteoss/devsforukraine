import Layout from "../components/layout"
import { Body, H2, H3 } from "../components/Typography"

const CodeOfConduct = () => (
  <Layout>
    <section className="text-devs-gray100 max-w-xl m-auto mt-[120px] ">
      <H2>Code of Conduct</H2>
      <Body className="m-0 p-0 mt-10 !text-devs-gray100">
        All <span className="text-white">attendees</span>,{" "}
        <span className="text-white">speakers</span>,{" "}
        <span className="text-white">sponsors</span> and{" "}
        <span className="text-white">volunteers</span> at Devs For Ukraine
        conference{" "}
        <span className="text-white underline">
          are required to agree with the following code of conduct.
        </span>
        <br />
        <br />
        Organizers enforce this code throughout the event. We expect cooperation
        from all participants to help ensure a safe environment for everybody.
        <br />
        <br />
        <a
          className="text-devs-yellow block"
          href="mailto:sara.vieira@remote.com"
        >
          Report an Issue.
        </a>
      </Body>
      <H3 className="mt-20 mb-6">The Quick Version</H3>
      Here at Devs For Ukraine conference, we are dedicated to providing a
      harassment-free conference experience for everyone, regardless of gender,
      sexual orientation, disability, physical appearance, body size, race, or
      religion (or lack thereof).
      <br />
      <br />
      We do not tolerate harassment of conference participants in any form. We
      ask that all attendees are mindful of their surroundings and of their
      fellow participants.
      <br />
      <br />
      Conference attendees violating these rules will be expelled from the
      conference.
      <H3 className="mt-20 mb-6">The Less Quick Version</H3>
      Harassment includes, but is not limited to, offensive verbal comments
      related to gender, age, sexual orientation, disability, physical
      appearance, body size, race, religion, sexual images in public spaces,
      deliberate intimidation, stalking, following, harassing photography or
      recording, sustained disruption of talks or other events, inappropriate
      physical contact, and unwelcome sexual attention.
      <br />
      <br />
      Participants asked to stop any harassing behaviour are expected to comply
      immediately.
      <br />
      <br />
      Sponsors are also subject to the anti-harassment policy. In particular,
      sponsors should not use sexualised images, activities, or other material.
      <br />
      If a participant engages in harassing behaviour, the conference organizers
      may take any action they deem appropriate, including warning the offender
      or expulsion from the conference.
      <br />
      <br />
      If you are subject to or witness unacceptable behavior, or have any other
      concerns, please notify a Devs For Ukraine organizer as soon as possible
      using{" "}
      <a
        className="text-devs-yellow underline"
        href="mailto:sara.vieira@remote.com"
      >
        this email
      </a>
      .
      <br />
      <br />
      Conference staff are happy to help participants and assist people
      experiencing harassment by providing safe environment, arranging
      transport, accommodation or otherwise assist in the situation.
      <br />
      <br />
      We expect all community participants (contributors, paid or otherwise;
      sponsors; and other guests) to abide by this Code of Conduct in all
      community venues.
    </section>
  </Layout>
)

export default CodeOfConduct
