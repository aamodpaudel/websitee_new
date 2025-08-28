import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-12 mx-auto">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to our website. By accessing or using our website, you agree
            to be bound by these Terms of Service and all applicable laws and
            regulations. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials on our website for personal, non-commercial transitory
            viewing only. This is the grant of a license, not a transfer of
            title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose;</li>
            <li>
              Attempt to decompile or reverse engineer any software contained on
              the website;
            </li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials;
            </li>
            <li>
              Transfer the materials to another person or &quot;mirror&quot; the
              materials on any other server.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Disclaimer</h2>
          <p>
            The materials on our website are provided on an &apos;as is&apos;
            basis. We make no warranties, expressed or implied, and hereby
            disclaim and negate all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Limitations</h2>
          <p>
            In no event shall our company or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on our website, even if we or an
            authorized representative has been notified orally or in writing of
            the possibility of such damage.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on our website could include technical,
            typographical, or photographic errors. We do not warrant that any of
            the materials on our website are accurate, complete, or current. We
            may make changes to the materials contained on our website at any
            time without notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Links</h2>
          <p>
            We have not reviewed all of the sites linked to our website and are
            not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by us of the site.
            Use of any such linked website is at the user&apos;s own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Modifications</h2>
          <p>
            We may revise these terms of service for our website at any time
            without notice. By using this website, you are agreeing to be bound
            by the then current version of these terms of service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws and you irrevocably submit to the exclusive
            jurisdiction of the courts in that location.
          </p>
        </section>

        <div className="pt-6 border-t">
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
