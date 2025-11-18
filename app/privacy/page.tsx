import React from "react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen relative -mt-20 md:-mt-24 pt-20 md:pt-24 px-6">
      <main className="max-w-4xl mx-auto pb-16">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Revision from November 18, 2025
          </p>
          <p className="text-sm text-muted-foreground">
            <a
              href="https://github.com/SoarAILabs/soarailabs-landingpage/commits/soarailabs/legal"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              See full edit history on GitHub
            </a>
          </p>
        </header>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">Definitions</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <span className="font-semibold">Company:</span> “Soarailabs”,
              “Soar AI Labs”, “we”, or “us” refers to the maintainers and
              operators of the Soar AI Labsopen source projects and any
              associated hosted services.
            </li>
            <li>
              <span className="font-semibold">Maintainers:</span> Core
              contributors/developers who operate Soar AI Labs's infrastructure,
              websites, and managed offerings (if any).
            </li>
            <li>
              <span className="font-semibold">Software/Services:</span> Soar AI
              Labs tools, Glide MCP, merge conflict resolver, semantic commit
              splitter, context engines, any hosted APIs, and affiliated open
              source projects.
            </li>
            <li>
              <span className="font-semibold">Website:</span> soarailabs.com and
              soarailabs.vercel.app, along with related documentation and
              project pages.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">Scope</h2>
          <p className="text-muted-foreground">
            This Privacy Policy describes how we handle information when you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Visit our Website;</li>
            <li>Use any hosted or managed Services we operate; or</li>
            <li>
              Interact with us via community channels (for example, GitHub
              issues at{" "}
              <a
                href="https://github.com/SoarAILabs"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                https://github.com/SoarAILabs
              </a>
              ).
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Local‑First Design and Zero Data Retention
          </h2>
          <p className="text-muted-foreground">
            Our design goal, as described on our sites and blog, is that your
            code stays with you. Glide MCP and similar tools are intended to run
            locally in your environment, against your own repositories, with
            your own API keys.
          </p>
          <p className="text-muted-foreground">By default:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              We do not receive your repository contents, diffs, or commit
              history when you run Glide locally.
            </li>
            <li>
              Version control context (history, branches, diffs) is processed on
              your machine or your chosen infrastructure.
            </li>
            <li>
              We do not retain your Git data on our servers unless you
              explicitly opt into a hosted feature that requires it.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Information We Process
          </h2>
          <p className="text-muted-foreground">
            Depending on how you use our projects, the following categories of
            information may be involved:
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Local use / self‑hosted tools
            </h3>
            <p className="text-muted-foreground">
              When you run Glide MCP or other tools locally, they may access:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Repository metadata (paths, branch names, commit IDs, file
                paths).
              </li>
              <li>
                Diff contents and commit messages, to generate semantic commit
                splits or conflict resolutions.
              </li>
              <li>
                Configuration and API keys for third‑party providers that you
                configure.
              </li>
            </ul>
            <p className="text-muted-foreground">
              For local or self‑hosted use:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                This data stays within your environment and is not sent to Soar
                AI Labs by default.
              </li>
              <li>
                Any processing of that data by third‑party providers (for
                example, LLM or embedding APIs) is governed by their privacy
                policies.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Hosted or managed Services (if you opt in)
            </h3>
            <p className="text-muted-foreground">
              If you choose to use our hosted context engine, managed inference,
              or other cloud offerings, we may process:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Code snippets, diffs, commit messages, and repository metadata
                needed to provide semantic indexing, retrieval, or automation.
              </li>
              <li>
                Derived artifacts such as embeddings, summaries, or metadata
                about your repository structure.
              </li>
              <li>
                Basic account information or identifiers needed to provide
                access control and usage tracking.
              </li>
            </ul>
            <p className="text-muted-foreground">
              We aim to minimize the amount of data we ingest, retain data only
              as long as necessary to provide the service, and provide a way for
              you to request deletion where feasible.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Website and analytics
            </h3>
            <p className="text-muted-foreground">
              When you visit our Website, we may collect limited technical
              information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Standard HTTP request logs (IP address, user agent, referrer,
                timestamps).
              </li>
              <li>
                Aggregated analytics (for example, page views, time on page)
                using privacy‑respecting analytics tools, such as Plausible or
                equivalent, where we avoid using cookies or cross‑site tracking
                whenever possible.
              </li>
            </ul>
            <p className="text-muted-foreground">
              We use this information solely to maintain and improve the
              Website, monitor performance, and prevent abuse.
            </p>
          </div>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Third‑Party Services and Data Flows
          </h2>
          <p className="text-muted-foreground">
            Our tools and sites may integrate with or rely on third‑party
            services, such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Git hosting platforms (e.g., GitHub).</li>
            <li>LLM providers (e.g., Cerebras Systems Inc).</li>
            <li>
              Embedding/vector providers (e.g., Voyage AI Innovations, Inc.).
            </li>
            <li>
              Graph databases or infrastructure (e.g., HelixDB, if used via
              hosted endpoints).
            </li>
            <li>Hosting, CDNs, or analytics providers.</li>
          </ul>
          <p className="text-muted-foreground">
            When you configure Glide or related tools with your own API keys,
            requests may send code snippets, diffs, file paths, and repository
            metadata from your environment directly to those providers. Those
            requests are governed by the third‑party’s own terms and privacy
            policies.
          </p>
          <p className="text-muted-foreground">
            Soar AI Labs does not receive or control those data flows unless we
            are operating the third‑party service ourselves as part of a managed
            offering.
          </p>
          <p className="text-muted-foreground">
            If we operate a managed context engine or hosted API, we may route
            your requests through our infrastructure in order to call external
            providers on your behalf. We will document which providers are
            involved and what data they receive. We will avoid retaining raw
            code and diffs longer than necessary to provide the feature, and may
            store only derived artifacts (for example, embeddings or summaries)
            where required.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Community and Communication Data
          </h2>
          <p className="text-muted-foreground">
            If you interact with us via GitHub, forums, social media, or email,
            we may see your username, profile information, and the content you
            choose to share (issues, PRs, comments, emails). That information
            remains subject to the terms of the platform where you submit it
            (for example, GitHub’s policies) and is also visible to other users
            as dictated by that platform.
          </p>
          <p className="text-muted-foreground">
            We may use this information to maintain our projects, respond to
            issues, and improve our tools and documentation.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Children’s Privacy
          </h2>
          <p className="text-muted-foreground">
            Our Software and Services are intended for developers and technical
            users. They are not directed at children under 13 (or the minimum
            age of digital consent in your jurisdiction). We do not knowingly
            collect personal information from children. If you believe we have
            inadvertently collected information from a minor, please contact us
            so we can delete it.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">Security</h2>
          <p className="text-muted-foreground">
            We use reasonable technical and organizational measures to protect
            any data we control, including encryption in transit where
            applicable and access controls on our infrastructure.
          </p>
          <p className="text-muted-foreground">
            However, no system is perfectly secure. You are responsible for
            securing your own environment, including local clones, API keys, and
            self‑hosted deployments. We strongly recommend following best
            practices for secrets management, access control, and backups.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Data Retention
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <span className="font-semibold">Local and self‑hosted use:</span>{" "}
              We do not control or retain your data; retention is determined by
              your own environment and configurations.
            </li>
            <li>
              <span className="font-semibold">Hosted or managed Services:</span>{" "}
              We retain data only as long as necessary to provide the service,
              comply with legal obligations, or resolve disputes. Where
              feasible, we will document retention periods in service‑specific
              documentation.
            </li>
            <li>
              <span className="font-semibold">Logs and analytics:</span> Server
              logs and analytics may be retained for a limited period (for
              example, 24–90 days) for security, debugging, and performance
              monitoring, after which they may be aggregated or deleted.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Your Rights and Choices
          </h2>
          <p className="text-muted-foreground">
            Depending on your jurisdiction, you may have rights to access,
            correct, or delete personal data that we control, or to object to or
            restrict certain processing.
          </p>
          <p className="text-muted-foreground">
            If you believe Soar AI Labs holds personal data about you (for
            example, from a hosted account, support interaction, or newsletter),
            you may contact us to request:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Access to the data we hold about you;</li>
            <li>Correction of inaccurate data;</li>
            <li>Deletion of data where legally permissible.</li>
          </ul>
          <p className="text-muted-foreground">
            We will respond in accordance with applicable law.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Legal Basis and Jurisdiction
          </h2>
          <p className="text-muted-foreground">
            Soar AI Labs is operated from [your jurisdiction]. By using our
            Website or any hosted Services, you consent to the processing and
            transfer of information as described in this policy, subject to
            applicable law.
          </p>
          <p className="text-muted-foreground">
            When we rely on consent (for example, for optional analytics or
            specific hosted features), you may withdraw that consent at any
            time, though this will not affect processing that has already
            occurred.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Updates to this Policy
          </h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. When we make
            significant changes, we will post the updated version on the Website
            and may announce it via our GitHub organization or other channels.
          </p>
          <p className="text-muted-foreground">
            Your continued use of the Website or any hosted Services after the
            effective date of changes constitutes your acceptance of the updated
            policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="text-muted-foreground">
            For privacy inquiries, data requests, or security concerns, contact
            us at{" "}
            <a
              href="mailto:the.kite.squad@protonmail.com"
              className="underline underline-offset-2"
            >
              the.kite.squad@protonmail.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPage;
