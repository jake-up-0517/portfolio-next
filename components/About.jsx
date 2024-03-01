import { Element } from 'react-scroll';

export default function About() {
  return (
    <Element
      name="about"
      className="flex flex-col w-screen h-screen bg-secondary text-secondary-content text-2xl justify-center px-6"
    >
      <h1 className="text-7xl font-bold mb-12">About Me</h1>
      <p className="mb-6">
        I&apos;m Jake. I&apos;m a software engineer & web developer located in
        Austin, TX. My expertise lies in the JavaScript ecosystem (React/Redux,
        Node.js, Next.js, TypeScript, React Native, etc.), but I&apos;m just a
        programmer at heart and am constantly learning new languages and
        technologies. When I&apos;m not coding, I&apos;m usually playing guitar,
        cooking, or watching soccer. I also enjoy hiking, camping, and
        traveling.
      </p>
      <p className="mb-6">
        My path into the world of tech has not been a traditional one. I have a
        bachelor&apos;s degree in accounting and worked in that industry for
        years before I realized how unfulfilling (aka boring) my day-to-day life
        was. Like many folks, during the COVID-19 pandemic I took stock of what
        I really wanted out of life and decided to make a change. I quit my job
        and attended a coding bootcamp and haven&apos;t looked back since.
      </p>
      <p className="mb-10">
        Feel free to reach out to me through{' '}
        <a
          href="mailto:jake.crawford512@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-info"
        >
          email
        </a>{' '}
        if you have any questions about my work or just want to chat.
      </p>
    </Element>
  );
}
