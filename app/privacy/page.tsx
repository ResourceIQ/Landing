import type { Metadata } from "next";
import Footer from "@/components/footer";
import { HeroHeader } from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const lastUpdated = "March 11, 2026";

export const metadata: Metadata = {
  title: "ResourceIQ Privacy Policy",
  description: "Privacy policy for ResourceIQ Jira OAuth 2.0 integration.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroHeader />
      <main className="relative min-h-screen overflow-hidden bg-background pt-28 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-secondary/30 blur-3xl" />
        </div>

        <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <div className="space-y-3 text-center">
            <p className="inline-flex items-center rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Privacy Policy
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ResourceIQ Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
              <CardDescription>
                This Privacy Policy explains how ResourceIQ, a Jira OAuth 2.0 integrated B2B SaaS application,
                accesses, uses, stores, and protects information processed through Atlassian Jira.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Data Collection and Access</CardTitle>
              <CardDescription>
                ResourceIQ only accesses data required to deliver its assignment intelligence and skill profiling features.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p>Based on the documented project scope, ResourceIQ integrates with Jira via secure API connectors and processes Jira-origin data such as:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Jira task and issue-related records (historical task data used for matching and recommendations).</li>
                <li>Task description text used in NLP analysis and skill/keyword extraction.</li>
                <li>Project context metadata required to support recommendation logic.</li>
              </ul>
              <p>ResourceIQ is designed for Jira integration (Jira REST API v3) and does not request unrelated personal data beyond what is necessary for core functionality.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Data Storage and Usage</CardTitle>
              <CardDescription>
                Data is used exclusively to provide ResourceIQ functionality.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <ul className="list-disc space-y-1 pl-5">
                <li>Jira and integrated platform data is processed to generate skill profiles and recommendation outputs.</li>
                <li>The documented architecture stores raw and processed integration data in a centralized PostgreSQL data warehouse/database.</li>
                <li>Authentication and access control are implemented using OAuth 2.0 and JWT-based mechanisms as described in the project documentation.</li>
                <li>Data is not used for advertising, data brokerage, or unrelated profiling.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p>ResourceIQ does not sell user data.</p>
              <p>
                We do not share customer Jira data with third parties except where necessary to operate the service
                (for example, secure hosting or infrastructure providers acting under contractual confidentiality and
                data protection obligations), or where required by law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Data Retention and Deletion</CardTitle>
              <CardDescription>
                Retention is limited to what is needed to operate the service.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p>
                ResourceIQ retains integrated Jira data only for as long as required to provide app functionality and
                maintain service continuity.
              </p>
              <p>
                If the app is uninstalled or access is revoked, ResourceIQ will stop further data collection and begin
                deletion of customer-connected data from active systems within <strong>[INSERT RETENTION WINDOW, e.g., 30 days]</strong>,
                except where longer retention is required by applicable law, security, or audit obligations.
              </p>
              <p>
                Customers may request earlier deletion by contacting support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              <p>
                For privacy questions, data requests, or deletion requests, contact:
                <br />
                <span className="font-medium text-foreground">[INSERT SUPPORT EMAIL]</span>
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
