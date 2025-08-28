import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-12 mx-auto">
      <div className="mb-8">
        <Link href="/">
          <Button
            variant="ghost"
            className="flex items-center gap-2 p-0 hover:bg-transparent hover:cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">
            Last updated: March 9, 2025
          </p>
        </div>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            We respect your privacy and are committed to protecting your
            personal data. This privacy policy will inform you about how we look
            after your personal data when you visit our website and tell you
            about your privacy rights and how the law protects you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Identity Data includes first name, last name, username or similar
              identifier.
            </li>
            <li>Contact Data includes email address and telephone numbers.</li>
            <li>
              Technical Data includes internet protocol (IP) address, your login
              data, browser type and version, time zone setting and location,
              browser plug-in types and versions, operating system and platform,
              and other technology on the devices you use to access this
              website.
            </li>
            <li>
              Usage Data includes information about how you use our website,
              products and services.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <p>
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Where we need to perform the contract we are about to enter into
              or have entered into with you.
            </li>
            <li>
              Where it is necessary for our legitimate interests (or those of a
              third party) and your interests and fundamental rights do not
              override those interests.
            </li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer by
            websites that you visit. They are widely used in order to make
            websites work, or work more efficiently, as well as to provide
            information to the owners of the site.
          </p>
          <p>
            You can set your browser to refuse all or some browser cookies, or
            to alert you when websites set or access cookies. If you disable or
            refuse cookies, please note that some parts of this website may
            become inaccessible or not function properly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Sharing</h2>
          <p>
            We may share your personal data with the parties set out below for
            the purposes set out in this privacy policy:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Service providers who provide IT and system administration
              services.
            </li>
            <li>
              Professional advisers including lawyers, bankers, auditors and
              insurers.
            </li>
            <li>
              Regulators and other authorities who require reporting of
              processing activities in certain circumstances.
            </li>
          </ul>
          <p>
            We require all third parties to respect the security of your
            personal data and to treat it in accordance with the law. We do not
            allow our third-party service providers to use your personal data
            for their own purposes and only permit them to process your personal
            data for specified purposes and in accordance with our instructions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data, including the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
