import React from "react";

const TermsPage = () => {
  return (
    <div className="min-h-screen relative -mt-20 md:-mt-24 pt-20 md:pt-24 px-6">
      <main className="max-w-4xl mx-auto pb-16">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">
            Revisions from Nov 18, 2025
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
              “Soar AI Labs”, “we”, or “us” refers to Soar AI Labs and its
              maintainers, currently operating the open source projects
              described on this site.
            </li>
            <li>
              <span className="font-semibold">Maintainers:</span> Core
              contributors/developers authorized to make decisions, manage
              releases, and operate Soar AI Labs projects (including Glide MCP
              and related tools).
            </li>
            <li>
              <span className="font-semibold">Software/Services:</span> Soar AI
              Labs tools and projects, including Glide MCP, merge conflict
              resolver, semantic commit splitter, context engines, any hosted
              APIs, and related websites, documentation, and integrations.
            </li>
            <li>
              <span className="font-semibold">Website:</span>{" "}
              <span className="break-all">
                soarailabs.com and soarailabs.vercel.app, where these terms are
                published, as well as related project pages (for example, our
                GitHub organization at{" "}
                <a
                  href="https://github.com/SoarAILabs"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  https://github.com/SoarAILabs
                </a>{" "}
                and the Glide repository at{" "}
                <a
                  href="https://github.com/SoarAILabs/Glide?tab=MIT-1-ov-file"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  https://github.com/SoarAILabs/Glide?tab=MIT-1-ov-file
                </a>
                .
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Open Source Rights
          </h2>
          <p className="text-muted-foreground">
            Soar AI Labs software, including Glide MCP and related tools, is
            released under the MIT License. You may use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the software,
            subject to the MIT License terms.
          </p>
          <p className="text-muted-foreground">
            The open source license for the code governs your rights to the
            source and binaries. These Terms of Service govern your use of any
            websites, managed services, and community offerings operated by
            Soarailabs. Where there is a conflict, the MIT License controls your
            use of the open source code.
          </p>
          <p className="text-muted-foreground">
            Full license texts are available in our GitHub repositories and
            within each project’s source tree.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Use of Glide MCP and Git Automation
          </h2>
          <p className="text-muted-foreground">
            Glide MCP is designed to interact with your local Git repositories,
            including reading diffs, staging changes, committing, splitting
            commits, and (where enabled) attempting conflict resolution.
          </p>
          <p className="text-muted-foreground">
            By using Glide MCP or related tools, you understand and agree that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              The tools may run Git commands (such as git diff, git add, git
              commit, git merge, or similar) on repositories you point them at.
            </li>
            <li>
              You remain responsible for reviewing proposed changes, diffs,
              commit messages, and branch operations before pushing or
              deploying.
            </li>
            <li>
              You are responsible for backups, branch protection rules, and any
              workflows needed to safeguard your history and production systems.
            </li>
            <li>
              We provide previews, summaries, and commit suggestions for your
              convenience, but you retain ultimate control and responsibility
              for your repositories.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Third‑Party Services and API Keys
          </h2>
          <p className="text-muted-foreground">
            Many features of Glide and future context engine tools integrate
            with third‑party services (for example: LLM providers such as
            Cerebras Systems Inc, embedding providers such as Voyage AI
            Innovations, Inc., graph databases such as HelixDB, hosting
            providers, and Git platforms like GitHub).
          </p>
          <p className="text-muted-foreground">
            You typically bring your own API keys and credentials for such
            services.
          </p>
          <p className="text-muted-foreground">
            Requests that involve code, diffs, file paths, or commit metadata
            may be sent from your environment to those third‑party services,
            subject to their own terms and privacy policies. Soar AI Labs does
            not control and is not responsible for how those third‑party
            providers handle your data.
          </p>
          <p className="text-muted-foreground">
            When we offer managed hosted options (for example, a hosted context
            engine or managed inference), we will describe the scope of
            processing and retention clearly and provide separate documentation
            or terms where needed.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Disclaimer of Warranty
          </h2>
          <p className="text-muted-foreground">
            The Software and any related Services are provided “AS IS” and “AS
            AVAILABLE”, without warranty of any kind, express or implied, to the
            fullest extent permitted by law. This includes, without limitation,
            warranties of merchantability, fitness for a particular purpose,
            title, and non‑infringement.
          </p>
          <p className="text-muted-foreground">We do not warrant that:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              The Software/Services will be error‑free, secure, or
              uninterrupted.
            </li>
            <li>
              The results (including commit messages, merge resolutions, or
              suggestions) will be accurate, complete, or appropriate for your
              particular use case.
            </li>
            <li>
              Version control operations performed by or with the assistance of
              our tools will behave as you expect in every environment.
            </li>
          </ul>
          <p className="text-muted-foreground">
            You bear all risk arising out of use or performance of the Software
            and Services.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Limitation of Liability
          </h2>
          <p className="text-muted-foreground">
            To the maximum extent permitted by applicable law, Soarailabs, its
            maintainers, contributors, and affiliates shall not be liable for
            any indirect, incidental, special, consequential, exemplary, or
            punitive damages, or for any loss of data, loss of code history,
            loss of profits, or business interruption arising out of or related
            to use of (or inability to use) the Software or Services.
          </p>
          <p className="text-muted-foreground">
            This applies even if we have been advised of the possibility of such
            damages and even if any limited remedy fails of its essential
            purpose.
          </p>
          <p className="text-muted-foreground">
            In no event shall the aggregate liability of Soarailabs, its
            maintainers, contributors, or affiliates exceed the greater of (a)
            the amount you paid us for the relevant Service in the 3 months
            preceding the event giving rise to the claim, or (b) one hundred
            (100) USD, to the extent permitted by law.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Community Contributions
          </h2>
          <p className="text-muted-foreground">
            All community contributions (code, documentation, issues, feedback,
            and other material) are generally governed by the applicable open
            source license for the project. Contributors retain copyright in
            their contributions, but grant the project maintainers and users the
            rights needed to use, display, modify, and redistribute those
            contributions under the project’s license (MIT).
          </p>
          <p className="text-muted-foreground">
            By submitting feedback, suggestions, or feature ideas, you grant
            Soar AI Labs a perpetual, irrevocable, worldwide, royalty‑free
            license to use that input in any manner, including to improve the
            Software and Services, without any obligation to compensate you.
          </p>
          <p className="text-muted-foreground">
            Any tips, sponsorships, or donations are voluntary, non‑refundable,
            and do not create any ownership interest, partnership, or obligation
            for Soar AI Labs to implement specific features or respond to
            individual requests.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">
            Self‑Hosted vs Managed Services
          </h2>
          <p className="text-muted-foreground">
            You may self‑host Glide and other Soar AI Labs projects directly
            from the open source repositories, or you may choose to use any
            managed services we offer.
          </p>
          <p className="text-muted-foreground">
            When self‑hosting, you are responsible for securing your
            infrastructure, logs, API keys, and data.
          </p>
          <p className="text-muted-foreground">
            When using our managed offerings, we may need to operate servers
            that temporarily process your code, diffs, embeddings, and
            repository metadata to provide features like semantic indexing or
            context engines. Any such processing will be described in
            accompanying documentation and governed by these Terms and our
            Privacy Policy.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">Termination</h2>
          <p className="text-muted-foreground">
            We may suspend or terminate access to any hosted or managed Services
            (including API endpoints or hosted context engines) if you breach
            these Terms, misuse the Services, interfere with other users, or if
            required by law or to protect the security and integrity of the
            platform.
          </p>
          <p className="text-muted-foreground">
            Termination of hosted Services does not affect your rights to the
            open source code under the MIT License.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">Changes</h2>
          <p className="text-muted-foreground">
            We may update these Terms periodically. When we make significant
            changes, we will post an updated version on the Website and may
            announce the update via our GitHub organization or social channels.
          </p>
          <p className="text-muted-foreground">
            Your continued use of the Website or any hosted Services after
            changes take effect constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="text-muted-foreground">
            For legal or terms‑related questions, contact us at{" "}
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

export default TermsPage;
