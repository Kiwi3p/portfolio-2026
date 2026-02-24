export function ContactBlock({
  title = "CONTACT",
  phone,
  email,
  social,
}: {
  title?: string;
  phone?: string;
  email?: string;
  social?: string;
}) {
  return (
    <section className="w-full bg-[var(--color-bg3)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
      <h2 className="text-caption-style mb-8 text-[var(--color-white)] uppercase tracking-tight md:mb-10">
        {title}
      </h2>
      <ul className="space-y-3 text-[var(--color-white)]">
        {phone && (
          <li className="text-body-style">
            <span className="text-caption-style mr-2 uppercase">Phone:</span>
            {phone}
          </li>
        )}
        {email && (
          <li className="text-body-style">
            <span className="text-caption-style mr-2 uppercase">Email:</span>
            <a
              href={`mailto:${email}`}
              className="underline underline-offset-2 hover:opacity-80"
            >
              {email}
            </a>
          </li>
        )}
        {social && (
          <li className="text-body-style">
            <span className="text-caption-style mr-2 uppercase">Social:</span>
            {social.startsWith("http") ? (
              <a
                href={social}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-80"
              >
                {social.replace(/^https?:\/\//, "")}
              </a>
            ) : (
              social
            )}
          </li>
        )}
      </ul>
    </section>
  );
}
