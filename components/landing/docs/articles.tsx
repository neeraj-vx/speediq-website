/**
 * Docs article bodies, keyed by slug. Composed from the prose primitives in
 * ./prose. Nav metadata (title/summary/group/order) lives in ./nav, keep the
 * slugs here in sync with DOC_ITEMS there.
 */

/* eslint-disable react/jsx-key -- items passed to DocList / DocSteps / DocTable
   are keyed by those components when they map over them, so the inline arrays
   here do not need per-element keys. */

import type { ReactNode } from "react";

import {
  Code,
  DocCallout,
  DocH2,
  DocLead,
  DocLink,
  DocList,
  DocP,
  DocSteps,
  DocTable,
} from "@/components/landing/docs/prose";

export const DOC_BODIES: Record<string, ReactNode> = {
  // ===========================================================================
  // GETTING STARTED
  // ===========================================================================
  overview: (
    <>
      <DocLead>
        SpeedIQ is a messaging-first platform with a CRM built in. WhatsApp, email, SMS, voice, and
        social (Instagram, Facebook) all run through one inbox and one contact
        timeline, and a lead, pipeline, campaign, and automation layer sits on top so you can actually
        sell, not just message.
      </DocLead>

      <DocH2 id="what-you-get">What you get</DocH2>
      <DocTable
        head={["Area", "What it does"]}
        rows={[
          ["Channels", "Connect WhatsApp, email, SMS, and voice, each with its own settings."],
          ["Social", "Facebook & Instagram ad leads, comments, and DMs with AI auto-reply, plus Google Ads lead forms."],
          ["Inbox", "A unified inbox that merges a contact’s conversations across every channel."],
          ["CRM", "Leads, pipelines, tags, custom fields, and a cross-channel activity timeline."],
          ["Campaigns", "Send broadcasts on any channel to an audience or a segment of leads."],
          ["Automations", "Rules that assign, tag, move, message, or AI-reply when things happen."],
          ["Billing", "Separate credit buckets for email, SMS, AI, and voice; WhatsApp and social do not deduct SpeedIQ credits."],
        ]}
      />

      <DocH2 id="how-it-fits">How it fits together</DocH2>
      <DocList
        items={[
          <>A <strong>contact</strong> is a person, their WhatsApp, email, SMS, and social identities merged into one record.</>,
          <>A <strong>lead</strong> is a deal on top of a contact, moving through a <DocLink href="/docs/pipelines">pipeline</DocLink>.</>,
          <>Every message, call, and note lands on the contact’s <DocLink href="/docs/leads">timeline</DocLink>, whatever the channel.</>,
          <><DocLink href="/docs/automations-overview">Automations</DocLink> react to events on that data, a new lead, an inbound message, a stage change.</>,
        ]}
      />

      <DocH2 id="where">Where things live</DocH2>
      <DocP>Everything is in the dashboard sidebar:</DocP>
      <DocList
        items={[
          <><strong>Home</strong>, the dashboard overview and the Inbox.</>,
          <><strong>CRM</strong>, Leads (Pipeline, Capture, Prospecting, Forms), Automations, and Contacts.</>,
          <><strong>Marketing</strong>, WhatsApp, Email, and SMS (campaigns, templates, chats).</>,
          <><strong>Account</strong>, Team, Settings, and Billing.</>,
        ]}
      />

      <DocCallout type="tip" title="New here?">
        Start with <DocLink href="/docs/projects">Projects &amp; the dashboard</DocLink>, connect a
        channel, then read <DocLink href="/docs/pipelines">Pipelines &amp; stages</DocLink> to shape
        your process.
      </DocCallout>
    </>
  ),

  projects: (
    <>
      <DocLead>
        A project is a self-contained workspace for one brand. Everything, channels, contacts, CRM,
        team, tags, and credits, is scoped to the project you are currently in.
      </DocLead>

      <DocH2 id="switching">Switching &amp; creating</DocH2>
      <DocP>
        The project switcher at the top of the sidebar lists your projects; picking one reloads the app
        in that workspace. “Manage projects” opens the projects page, where you create a new one (just
        a name) or remove one. You always work inside one active project at a time.
      </DocP>

      <DocH2 id="dashboard">The dashboard</DocH2>
      <DocP>
        The dashboard (Home) is your at-a-glance overview for the active project. It shows:
      </DocP>
      <DocList
        items={[
          "Quick actions, new lead, build a form, connect socials, new campaign.",
          "A first-run checklist that self-hides once you finish setup.",
          "Campaign activity, open/won/new/unassigned leads, delivery rate, a 6-month messages chart, and active campaigns with live progress.",
          "Channel delivery, sent / delivered / delivery rate, per channel, plus email open and click rates.",
          "Your credit balance, plan, usage bar, and renewal date.",
          "A unified inbox preview, lead-sources chart, your team, recent leads, and recent campaigns.",
        ]}
      />
    </>
  ),

  // ===========================================================================
  // CHANNELS & INBOX
  // ===========================================================================
  inbox: (
    <>
      <DocLead>
        The Inbox is one inbox for every channel — WhatsApp, Email, and social DMs (Instagram,
        Facebook) — merged into a single timeline per contact, so you reply from one
        place instead of jumping between apps.
      </DocLead>

      <DocH2 id="layout">The layout</DocH2>
      <DocList
        items={[
          "A left rail with folders (All, Unread, Starred, Archived) plus a Channels list — each channel shows its logo and a live count, and search lives here too.",
          "A conversation list in the middle: each row shows the contact’s avatar with a small channel badge, a message preview, the time, and a star if you’ve starred it.",
          "The open conversation on the right, with a channel-switching composer, plus a contact panel with details and channels.",
        ]}
      />

      <DocH2 id="filter">Filter, star &amp; archive</DocH2>
      <DocList
        items={[
          "Filter by folder (All / Unread / Starred / Archived) or by a specific channel from the rail; search by name, email, or phone.",
          "Star a conversation to keep it under Starred, or Archive it to move it out of the main list — both from the row’s ⋮ menu. Archive and star are saved per contact and sync across devices (they work for social too, which has no per-channel conversation table).",
          "Opening a conversation shows one merged timeline, each message tagged by its channel; opening it clears the unread count.",
        ]}
      />

      <DocH2 id="composer">The composer &amp; channel switch</DocH2>
      <DocP>
        The composer has a channel switcher: reply on any channel the contact is reachable on (an email
        address enables Email, a phone number enables WhatsApp), even with no prior history. The Send
        button takes on the channel’s brand colour so the destination is unmistakable. Email mode adds a
        subject, rich text, attachments, and template insertion; other channels are plain text.
      </DocP>

      <DocCallout type="note" title="Messaging windows">
        WhatsApp and social DMs only allow free-form messages inside a limited window after the
        contact’s last inbound message — 24 hours for WhatsApp and Meta (Instagram/Facebook) DMs.
        The composer warns as the window closes; for WhatsApp you can send an approved
        template to re-engage, or switch channels. See <DocLink href="/docs/social">Social</DocLink> and{" "}
        <DocLink href="/docs/whatsapp">WhatsApp</DocLink>.
      </DocCallout>

      <DocCallout type="tip" title="Let AI reply for you">
        Turn on <DocLink href="/docs/ai-auto-reply">AI auto-reply</DocLink> to draft or send replies to
        inbound DMs automatically, with a human hand-off whenever you want one.
      </DocCallout>

      <DocH2 id="masking">Masked agents</DocH2>
      <DocP>
        Team members with the <Code>agent</Code> role are confined to the Inbox, and each contact’s
        name, phone, email, and avatar are replaced by a reference code (e.g. <Code>CT-7K3M9</Code>).
        Message content stays readable so they can still work. See{" "}
        <DocLink href="/docs/team">Team &amp; roles</DocLink>.
      </DocP>
    </>
  ),

  social: (
    <>
      <DocLead>
        Connect your Facebook and Instagram accounts to capture ad leads, turn comments into leads, and
        read &amp; reply to DMs — all inside the same inbox and CRM as your other channels. Google Ads
        lead forms sync too, and AI can auto-reply to DMs for you.
      </DocLead>

      <DocH2 id="connect">Connecting an account</DocH2>
      <DocP>
        Open <Code>Leads → Capture</Code> and find the <strong>Integrations</strong> section. Click
        Connect on Facebook &amp; Instagram or Google and complete the platform’s login. Once
        connected, leads, comments, and DMs start flowing in automatically. LinkedIn and TikTok are
        listed there as coming soon.
      </DocP>
      <DocCallout type="warning" title="Platform approval is required">
        Meta needs App Review approval before Instagram/Facebook DMs &amp; comments work for real
        (non-test) accounts. Connect early so the review is underway.
      </DocCallout>

      <DocH2 id="what">What each platform gives you</DocH2>
      <DocTable
        head={["Capability", "Facebook", "Instagram", "Google Ads"]}
        rows={[
          ["Lead ad forms", "✓", "✓", "✓"],
          ["Comments → leads", "✓", "✓", "—"],
          ["DMs in the inbox", "✓", "✓", "—"],
          ["AI DM auto-reply", "✓", "✓", "—"],
        ]}
      />

      <DocH2 id="leads">Lead ads &amp; comments</DocH2>
      <DocList
        items={[
          "Lead-form submissions are synced into your pipeline and fire the ad_lead_received trigger, so routing and follow-up can run automatically.",
          "Comments on your posts and ads can be captured as leads too — filtered by keyword (Settings → CRM) so your pipeline stays clean, not noisy.",
          "Route each ad form to a specific pipeline and stage from Leads → Capture.",
        ]}
      />

      <DocH2 id="dms">DMs &amp; auto-reply</DocH2>
      <DocP>
        Inbound Instagram and Facebook DMs appear in the{" "}
        <DocLink href="/docs/inbox">Inbox</DocLink> alongside WhatsApp and Email, where a human can
        reply. They also fire the <Code>Message received</Code> trigger, so{" "}
        <DocLink href="/docs/ai-auto-reply">AI auto-reply</DocLink> can draft or send a response for you.
      </DocP>
      <DocCallout type="note" title="Messaging windows & policy">
        Automated replies are only allowed inside the platform’s window — 24 hours after the contact’s
        last message for Meta. Bot messages never use Meta’s human-agent tag.
      </DocCallout>

      <DocH2 id="x">X (Twitter)</DocH2>
      <DocP>
        X has no native lead-form API, so X leads come in through your{" "}
        <DocLink href="/docs/capturing-leads">web forms</DocLink> tagged with the <Code>x</Code> source;
        conversion events can be reported back to X for ad optimisation.
      </DocP>
    </>
  ),

  whatsapp: (
    <>
      <DocLead>
        Connect your WhatsApp Business number, manage message templates, run broadcasts, and handle 1:1
        chats, all inside the 24-hour session rules WhatsApp enforces.
      </DocLead>

      <DocH2 id="connect">Connecting WhatsApp</DocH2>
      <DocP>
        Go to <Code>Settings → WhatsApp</Code>. The recommended path is the <strong>Connect with
        WhatsApp</strong> button, which runs Meta’s embedded signup and links your account in seconds.
        A manual fallback lets you paste a Phone Number ID, WABA ID, and access token. If the number is
        not yet set up for sending, you choose a 6-digit registration PIN.
      </DocP>
      <DocP>
        The connected card shows your number, display name, quality rating, and messaging availability;
        <strong> Refresh health</strong> pulls the latest from Meta, and <strong>Send test message</strong>{" "}
        confirms everything works. The same settings area holds opt-in/opt-out keywords, automated
        welcome and off-hours replies, and working hours.
      </DocP>

      <DocH2 id="templates">Templates</DocH2>
      <DocP>
        WhatsApp requires pre-approved templates to message people outside the 24-hour window. Under{" "}
        <Code>WhatsApp → Templates</Code> you can <strong>Fetch from Meta</strong> to import existing
        templates, or create a new one:
      </DocP>
      <DocList
        items={[
          "Pick a category, Marketing, Utility, or Authentication.",
          "Set the name, language, an optional header (text or image/video/document), the body (with variables like first_name), a footer, and up to 10 buttons.",
          "Provide sample values for your variables, required for approval.",
          "Save as a draft or submit for review. Status is polled automatically (draft / pending / approved / rejected, with rejection reasons).",
        ]}
      />

      <DocH2 id="campaigns">Campaigns</DocH2>
      <DocP>
        A five-step wizard: Details → Audience → Template → Schedule → Review. Choose contacts, contacts
        by tag, or CRM leads by tag/source; pick an <strong>approved</strong> template (only approved
        templates can send); then send now or schedule. Sending runs in the background in batches with a
        live progress bar, retry-failed, and cancel. See <DocLink href="/docs/campaigns">Campaigns</DocLink>.
      </DocP>

      <DocH2 id="chat">Chats &amp; the 24-hour window</DocH2>
      <DocP>
        <Code>WhatsApp → Chats</Code> is your 1:1 inbox. The header tracks the session window: inside
        24 hours of the contact’s last message you can send free-form text and media; once it closes,
        those are blocked and you must send an approved template to re-open the conversation. A contact
        reply resets the window.
      </DocP>

      <DocH2 id="costs">Credit costs</DocH2>
      <DocTable
        head={["Message type", "Credits"]}
        rows={[
          ["Session (free-form, in-window)", "2"],
          ["Template, utility / authentication / service", "3"],
          ["Template, marketing", "5"],
        ]}
      />
    </>
  ),

  email: (
    <>
      <DocLead>
        Send from a platform address or your own verified domain, manage subscribers and templates, run
        campaigns with open/click tracking, and handle replies in a two-way inbox.
      </DocLead>

      <DocH2 id="setup">Sending setup</DocH2>
      <DocP>Under <Code>Settings → Email</Code>, choose how you send:</DocP>
      <DocList
        items={[
          <><strong>Platform address</strong>, send from an address on the shared domain (e.g. campaigns@hello.speediq.ai). No DNS setup needed.</>,
          <><strong>Your domain</strong>, enter your address, then add the shown DNS records and refresh status. Until verified, sends fall back to the platform address automatically.</>,
        ]}
      />
      <DocP>A separate <strong>From name</strong> controls the display name, and a test-email card validates your config. The email provider itself is managed by the platform.</DocP>

      <DocH2 id="subscribers">Subscribers</DocH2>
      <DocP>
        Your email audience lives under <Code>Email → Subscribers</Code>. Add people manually or import
        a CSV (email required). Statuses are subscribed / unsubscribed / bounced; anyone who clicks
        unsubscribe lands here as unsubscribed and is skipped on future sends. Search, filter, edit, and
        export are all available.
      </DocP>

      <DocH2 id="templates">Templates</DocH2>
      <DocP>
        Build reusable emails under <Code>Email → Templates</Code>: a name, subject line, HTML body with
        live preview, image insertion, and attachments. Insertable variables include{" "}
        <Code>{"{{first_name}}"}</Code>, <Code>{"{{email}}"}</Code>, and{" "}
        <Code>{"{{unsubscribe_url}}"}</Code>.
      </DocP>

      <DocH2 id="campaigns">Campaigns</DocH2>
      <DocP>
        The five-step wizard lets you target subscribers directly, by tag, or by CRM lead tag/source
        (matching leads with an email are added). Schedule for later or save as a draft. Sending runs in
        the background in batches; the detail page shows per-recipient status plus an engagement panel:
        delivered, opened, clicked, bounced, and spam complaints. Every campaign email carries a
        one-click unsubscribe header and footer.
      </DocP>

      <DocH2 id="inbox">Two-way inbox</DocH2>
      <DocP>
        Replies thread into conversations under <Code>Email → Inbox</Code>. Each outbound email carries
        a signed Reply-To so replies route back automatically and open a conversation. Reply in-platform
        with rich text, templates, and attachments; assign, archive, and reopen conversations. It works
        out of the box on the shared reply domain, with optional branded receiving on your own verified
        domain.
      </DocP>

      <DocCallout type="note" title="Credit cost">
        Email is a flat <strong>1 credit</strong> per send, campaigns and inbox replies alike. Failed
        sends are refunded.
      </DocCallout>
    </>
  ),

  sms: (
    <>
      <DocLead>
        SMS runs on Twilio. Choose a sender, manage contacts and templates, send campaigns, chat 1:1, and
        watch delivery in analytics.
      </DocLead>

      <DocH2 id="setup">Connecting &amp; senders</DocH2>
      <DocP>Under <Code>Settings → SMS</Code>, pick a sender and save:</DocP>
      <DocList
        items={[
          <><strong>Phone number</strong>, load an existing number or rent a new one by country.</>,
          <><strong>Sender name</strong>, a 6–11 character alphanumeric sender (India: exactly 6). Instant in some countries, approval-gated in others, and not allowed in the US/Canada. People cannot reply to a name.</>,
        ]}
      />
      <DocP>
        For India (+91), messages go out under your registered <strong>DLT sender ID</strong>. The same
        page holds welcome and after-hours auto-replies, business hours, and compliance keywords (STOP /
        START / HELP) with a “respect unsubscribes in campaigns” toggle. A test-send button is
        available.
      </DocP>

      <DocH2 id="contacts-templates">Contacts &amp; templates</DocH2>
      <DocP>
        <Code>SMS → Contacts</Code> holds your SMS audience (phone, name, email), each with a consent
        status and an opt-out flag; import and export via CSV. <Code>SMS → Templates</Code> are reusable
        bodies with <Code>{"{{name}}"}</Code> / <Code>{"{{phone}}"}</Code> placeholders.
      </DocP>

      <DocH2 id="campaigns">Campaigns</DocH2>
      <DocP>
        The five-step wizard sends a chosen template to a selected audience. Send now, schedule, or save
        as a draft. Sends process in batches of 50 and automatically skip opted-out contacts. The detail
        page shows per-recipient delivery status (queued, sent, delivered, undelivered, failed) and lets
        you pause, resume, retry failed, or cancel.
      </DocP>

      <DocH2 id="chat-analytics">Chats &amp; analytics</DocH2>
      <DocP>
        <Code>SMS → Chats</Code> is a two-way inbox; if a contact has opted out, the composer is disabled.{" "}
        <Code>SMS → Analytics</Code> shows totals, subscribed/opted-out counts, inbound vs outbound,
        delivery rate, a volume trend, and your top campaigns over 7 / 30 / 90 days.
      </DocP>

      <DocH2 id="costs">Credit costs</DocH2>
      <DocTable
        head={["Destination", "SMS credits per segment"]}
        rows={[
          ["US / Canada", "1"],
          ["Other countries", "More, depending on the destination country (see the pricing page)"],
        ]}
      />
      <DocP>Long messages (over 160 characters, or with emoji) are sent as more than one segment, and each segment is charged.</DocP>
    </>
  ),

  voice: (
    <>
      <DocLead>
        Call leads and contacts straight from your browser. The in-app dialer handles outbound and
        incoming calls, logs every call to the CRM timeline, and can record calls.
      </DocLead>

      <DocH2 id="setup">Setting up voice</DocH2>
      <DocP>
        Under <Code>Settings → Voice</Code>, enable voice, choose a caller ID (one of your SMS sender
        numbers), and toggle call recording. Each team member provisions their own calling line with
        “Set up my calling line”.
      </DocP>

      <DocH2 id="calling">Making &amp; taking calls</DocH2>
      <DocList
        items={[
          "Click-to-call from a lead’s detail page with the Call button.",
          "A floating widget shows call state (connecting / ringing / on call), with mute and hang-up.",
          "Incoming calls ring in the browser with Answer / Decline.",
        ]}
      />

      <DocH2 id="logging">Logging &amp; recordings</DocH2>
      <DocP>
        Every call is logged to the CRM timeline with its direction, duration, status, and disposition.
        When recording is on, the recording attaches to the lead’s timeline.
      </DocP>

      <DocCallout type="note" title="Credit cost (post-paid, per minute)">
        Only answered calls with talk time are charged, rounded up to whole minutes (minimum one):{" "}
        <strong>1 Voice credit per answered minute</strong> to the US or Canada, more per minute for other
        destination countries (see the pricing page).
      </DocCallout>
    </>
  ),

  campaigns: (
    <>
      <DocLead>
        A campaign is a broadcast to many people on one channel, WhatsApp, email, or SMS. All three
        share the same five-step flow.
      </DocLead>

      <DocH2 id="steps">The five steps</DocH2>
      <DocSteps
        items={[
          { title: "Details", body: "Name the campaign." },
          { title: "Audience", body: "Pick individual contacts, everyone with a tag, or CRM leads by tag / source." },
          { title: "Content", body: "Choose a template (WhatsApp/SMS) or a template/subject and body (email)." },
          { title: "Schedule", body: "Send now, schedule for a date and time, or save as a draft." },
          { title: "Review", body: "Confirm the audience and see a credit cost preview before sending." },
        ]}
      />

      <DocH2 id="sending">How sending works</DocH2>
      <DocP>
        Sending runs in the background in batches, so a large list does not block you. The campaign
        detail page shows a live progress bar and per-recipient status, and lets you retry failed
        recipients, cancel, or send to one person. Email and SMS credits are charged before each send;{" "}
        <strong>refunded automatically if a send fails</strong>. WhatsApp and social sends do not deduct
        SpeedIQ credits; platform and provider terms apply separately. Drafts skip the credit check until you
        actually send them.
      </DocP>

      <DocH2 id="per-channel">Per-channel notes</DocH2>
      <DocTable
        head={["Channel", "What to know"]}
        rows={[
          ["WhatsApp", "Only approved templates can send; others save as drafts. Uses a Hello World template for test sends."],
          ["Email", "Tracks delivered / opened / clicked / bounced / complaints, and adds an unsubscribe footer."],
          ["SMS", "Sends in batches of 50 and skips opted-out contacts; shows carrier delivery status."],
        ]}
      />

      <DocCallout type="tip" title="Credits">
        Email, SMS, AI, and voice use separate credit buckets. WhatsApp and social sends do not deduct SpeedIQ credits; platform and provider terms apply separately. See{" "}
        <DocLink href="/docs/plans-credits">Plans, credits &amp; top-ups</DocLink>.
      </DocCallout>
    </>
  ),

  booking: (
    <>
      <DocLead>
        Booking pages let customers pick a time with you without the back-and-forth. Share a link,
        invitees choose a slot in their own timezone around your real availability, and every booking
        becomes a lead with reminders and a calendar invite.
      </DocLead>

      <DocH2 id="create">Create a booking page</DocH2>
      <DocSteps
        items={[
          { title: "Add a page", body: "Booking → New page. Set the name, meeting length, and location (call, video, or in person)." },
          { title: "Set availability", body: "Choose your weekly hours and buffers, then add date overrides for holidays or one-off days." },
          { title: "Ask what you need", body: "Add custom questions; the answers are captured on the lead when someone books." },
          { title: "Share the link", body: "Publish and share the link anywhere — your site, an email signature, or a DM." },
        ]}
      />

      <DocH2 id="how-invitees-book">How invitees book</DocH2>
      <DocP>
        Visitors see your open slots converted to their own timezone and pick one. They confirm with the
        details you asked for and get an email confirmation with an ICS calendar invite, so the meeting
        drops straight onto their calendar.
      </DocP>

      <DocH2 id="reminders">Reminders, reschedule &amp; cancel</DocH2>
      <DocList
        items={[
          "Automatic email reminders go out before the meeting to cut no-shows.",
          "Invitees can reschedule or cancel from a self-serve link — your calendar and pipeline stay in sync.",
          "Cancellations and reschedules update the underlying lead automatically.",
        ]}
      />

      <DocH2 id="in-the-crm">Bookings in the CRM</DocH2>
      <DocP>
        Each booking creates or updates a lead with the answers to your custom questions, tagged by
        source. From there it behaves like any other lead — route it, message it, or add it to an{" "}
        <DocLink href="/docs/automations-overview">automation</DocLink>.
      </DocP>

      <DocCallout type="tip" title="Timezones are automatic">
        You never trade emails about “what time is that for you?” — invitees always see and book in their
        own local time.
      </DocCallout>
    </>
  ),

  // ===========================================================================
  // CRM
  // ===========================================================================
  pipelines: (
    <>
      <DocLead>
        A pipeline is your sales process expressed as an ordered set of stages. Every lead belongs to
        exactly one pipeline and sits in one of its stages.
      </DocLead>

      <DocH2 id="stages">Stages and categories</DocH2>
      <DocP>
        Stages are yours to name and reorder, for example New, Contacted, Qualified, Proposal, Won,
        Lost. Each stage has a <strong>category</strong> that tells SpeedIQ what the stage means, so
        reporting and automations work without matching stage names:
      </DocP>
      <DocTable
        head={["Category", "Meaning"]}
        rows={[
          [<Code>open</Code>, "The deal is still in progress."],
          [<Code>won</Code>, "The deal closed successfully."],
          [<Code>lost</Code>, "The deal was lost."],
        ]}
      />
      <DocP>
        When you drag a lead into a Won or Lost stage, its status updates to match automatically. That
        is also what powers triggers like “entered any won stage”.
      </DocP>

      <DocH2 id="multiple">Multiple pipelines</DocH2>
      <DocP>
        You can run more than one pipeline, for example a Sales pipeline and a Partner pipeline, each
        with its own stages. One pipeline is the <strong>default</strong>: new leads with no explicit
        destination land in its first open stage.
      </DocP>

      <DocH2 id="manage">Managing pipelines</DocH2>
      <DocP>
        Edit pipelines, stages, custom fields, and lost reasons under <Code>Settings → CRM</Code>. On
        the pipeline board itself, switch between pipelines with the tabs at the top, and toggle between
        the kanban board and a list view.
      </DocP>

      <DocCallout type="note" title="Lost reasons">
        When a lead moves to a lost stage you can record why (Too expensive, Went with competitor, …).
        Manage the list of reasons under <Code>Settings → CRM</Code>.
      </DocCallout>
    </>
  ),

  leads: (
    <>
      <DocLead>
        A lead is the deal you are working. It is attached to a contact, so the person’s entire
        cross-channel history sits right next to the sale.
      </DocLead>

      <DocH2 id="anatomy">Anatomy of a lead</DocH2>
      <DocTable
        head={["Field", "What it is"]}
        rows={[
          ["Stage & status", "Where the lead is in its pipeline; status is open, won, or lost."],
          ["Owner", "The team member responsible for the lead."],
          ["Value & currency", "The deal size."],
          ["Score", "A 0–100 number from the scoring rules you set, or set by hand when there are no rules."],
          ["Tags", "Free-form labels for filtering and automations."],
          ["Custom fields", "Your own fields (fleet size, plan, region…) defined in CRM settings."],
          ["Source", "Where the lead came from (form, ad, WhatsApp, prospecting…)."],
        ]}
      />

      <DocH2 id="timeline">The activity timeline</DocH2>
      <DocP>
        Open a lead to see one unified timeline: WhatsApp, SMS, and email messages, calls, notes you
        add, stage changes, and automation activity, in order, across every channel. From the lead you
        can call the contact with the in-app dialer, jump into the Inbox, and add notes.
      </DocP>

      <DocH2 id="tags">Tags</DocH2>
      <DocP>
        Tags are simple labels. Add or remove them on the lead, and use them to filter the board or to
        drive automations, adding or removing a tag is itself an automation{" "}
        <DocLink href="/docs/triggers">trigger</DocLink>, and “add tag” / “remove tag” are{" "}
        <DocLink href="/docs/actions">actions</DocLink>.
      </DocP>

      <DocH2 id="one-per-contact">One open lead per conversation</DocH2>
      <DocP>
        To keep things tidy, an inbound message attaches to the contact’s most recently active open
        lead rather than spawning a new one every time. A new lead is created only when the contact has
        no open lead (and lead auto-creation is on, see{" "}
        <DocLink href="/docs/capturing-leads">Capturing leads</DocLink>).
      </DocP>
    </>
  ),

  contacts: (
    <>
      <DocLead>
        Contacts are the people behind your leads. SpeedIQ keeps one unified record per person, merging
        their WhatsApp, email, SMS, and social (Instagram, Facebook) identities so
        their whole history is in one place.
      </DocLead>

      <DocH2 id="directory">The directory</DocH2>
      <DocP>
        <Code>Contacts → All Contacts</Code> lists everyone across WhatsApp and email, with channel,
        name, phone/email, tags, source, and created date. Filter by channel, search, and export to CSV.
        It deep-links into WhatsApp Contacts and Email Subscribers for per-channel editing.
      </DocP>

      <DocH2 id="merging">How identities merge</DocH2>
      <DocP>
        Unified records form automatically as messages and imports arrive. SpeedIQ matches by existing
        link first, then email, then phone, and only creates a new record if none match. Merges are
        idempotent and never overwrite an existing name, email, or phone.
      </DocP>

      <DocH2 id="import">Importing</DocH2>
      <DocP>
        Import via CSV per channel. A WhatsApp import needs a <Code>phone</Code> column (name, email, and
        tags optional); an email import needs an <Code>email</Code> column. Columns are auto-detected
        from the header, imports run in chunks with live progress, and you get a count of imported vs.
        skipped (duplicate or invalid) rows. SMS contacts are their own list under{" "}
        <DocLink href="/docs/sms">SMS → Contacts</DocLink>.
      </DocP>
    </>
  ),

  "capturing-leads": (
    <>
      <DocLead>
        Leads come in from many places. However they arrive, they land on the pipeline board and can be
        routed and automated from there.
      </DocLead>

      <DocH2 id="sources">Sources</DocH2>
      <DocTable
        head={["Source", "How it works"]}
        rows={[
          ["Web forms", "Build a hosted form (Leads → Forms). Submissions create a lead."],
          [
            <>Social &amp; ad platforms</>,
            <>Connect Facebook, Instagram &amp; Google in Leads → Capture; lead-ad forms flow in live. See <DocLink href="/docs/social">Social</DocLink>.</>,
          ],
          ["Social comments", "Comments on your posts/ads become leads (keyword-filtered), on Facebook & Instagram."],
          ["Webhook / API sources", "Each source gives you a POST URL to send leads from anything."],
          ["Google Maps prospecting", "Scan businesses by area and radius, then bulk-import selected rows."],
          ["Inbound messages", "A first WhatsApp / SMS / email / social DM can open a lead automatically."],
        ]}
      />

      <DocH2 id="auto-create">Auto-create from the first message</DocH2>
      <DocP>
        When someone messages you for the first time and has no open lead, SpeedIQ can open one for you.
        Turn this on under <Code>Settings → CRM</Code> (“Auto-create lead on first inbound”). New leads
        land in the default pipeline’s first open stage and are immediately run through your{" "}
        <DocLink href="/docs/lead-routing">routing rules</DocLink>.
      </DocP>

      <DocH2 id="forms">Forms</DocH2>
      <DocSteps
        items={[
          { title: "Create a form", body: "Leads → Forms → New form. Give it a name and build fields." },
          { title: "Choose where leads land", body: "Point the form at a pipeline and stage (or leave it on the default)." },
          { title: "Share or embed", body: "Use the hosted link, or paste the embed snippet on your own site." },
        ]}
      />

      <DocCallout type="tip" title="Every source triggers automations">
        No matter how a lead is created, it fires the <Code>lead_created</Code> trigger (and{" "}
        <Code>form_submitted</Code> or <Code>ad_lead_received</Code> where relevant), so you can route,
        tag, and follow up automatically. See <DocLink href="/docs/triggers">Triggers</DocLink>.
      </DocCallout>
    </>
  ),

  forms: (
    <>
      <DocLead>
        Forms are the no-code way to capture leads. Build them with drag-and-drop, add logic and
        validation, and serve them full-page, embedded, or one question at a time. Every submission lands
        in your CRM as a lead.
      </DocLead>

      <DocH2 id="build">Build a form</DocH2>
      <DocSteps
        items={[
          { title: "Add questions", body: "Leads → Forms → New form. Drag in fields — short text, choices, ratings, file uploads — and reorder them." },
          { title: "Add logic", body: "Show, skip, or jump to questions based on earlier answers, so each respondent only sees what's relevant." },
          { title: "Validate input", body: "Require formats like email and phone and mark fields as required, so you capture clean data." },
          { title: "Theme it", body: "Match your colors, fonts, and cover image, then choose full-page, embed, or one-question mode." },
        ]}
      />

      <DocH2 id="share">Share &amp; embed</DocH2>
      <DocList
        items={[
          "Use the hosted link to share the form anywhere.",
          "Paste the embed snippet on your own site.",
          "Turn on one-question mode for a focused flow that lifts completion rates.",
        ]}
      />

      <DocH2 id="submissions">Submissions become leads</DocH2>
      <DocP>
        Every submission creates a lead with each answer mapped to a field and tagged by source. You&apos;re
        notified instantly, and the <Code>form_submitted</Code> trigger lets automations route, tag, or
        follow up right away. See <DocLink href="/docs/capturing-leads">Capturing leads</DocLink> and{" "}
        <DocLink href="/docs/triggers">Triggers</DocLink>.
      </DocP>

      <DocH2 id="analytics">Analytics</DocH2>
      <DocP>
        Track views, starts, completion rate, and drop-off per question, so you can tighten the form and
        capture more leads over time.
      </DocP>
    </>
  ),

  "lead-routing": (
    <>
      <DocLead>
        Lead routing decides who a new lead is assigned to. Rules run top to bottom; the first rule
        whose conditions match wins and assigns the owner.
      </DocLead>

      <DocH2 id="where">Where</DocH2>
      <DocP>
        Open <Code>Automations → Lead Routing</Code>. Create a rule, choose a pipeline (or all
        pipelines), set the conditions, pick a strategy, and choose the people to assign to.
      </DocP>

      <DocH2 id="strategies">Strategies</DocH2>
      <DocTable
        head={["Strategy", "How it assigns"]}
        rows={[
          ["Round-robin", "Rotates evenly across the chosen people, the least-recently-assigned goes next."],
          ["Weighted", "Distributes by weight, so higher-capacity reps get proportionally more leads."],
          ["Specific person", "Always assigns to one person."],
        ]}
      />

      <DocH2 id="conditions">Conditions</DocH2>
      <DocP>
        A rule can target a slice of leads, for example “source is any of website, referral” or “deal
        value is at least 5000”. Conditions use the same builder as automations; see{" "}
        <DocLink href="/docs/conditions">Conditions</DocLink>. A rule with no conditions applies to
        every new lead in its pipeline.
      </DocP>

      <DocH2 id="when-it-runs">When routing runs</DocH2>
      <DocList
        items={[
          "Automatically when a new lead is created (form, ad, webhook, prospecting, or first inbound message).",
          <>On demand from an automation, using the <Code>Run lead routing</Code> action, handy for re-assigning when a lead re-enters a stage.</>,
        ]}
      />
      <DocCallout type="note" title="Already-owned leads are left alone">
        Routing skips leads that already have an owner, so it never silently reassigns work in progress.
        The assignee is emailed when a lead is assigned to them.
      </DocCallout>
    </>
  ),

  // ===========================================================================
  // AUTOMATIONS
  // ===========================================================================
  "automations-overview": (
    <>
      <DocLead>
        An automation is a simple rule: <strong>when</strong> something happens (a trigger),{" "}
        <strong>if</strong> the lead matches (conditions), <strong>do</strong> a list of things
        (actions). No code required.
      </DocLead>

      <DocH2 id="build">Build one</DocH2>
      <DocSteps
        items={[
          { title: "New automation", body: <>Go to <Code>Automations → Rules</Code> and pick a trigger (or start from a recipe).</> },
          { title: "Add conditions", body: "Optionally narrow it to certain leads." },
          { title: "Add actions", body: "Choose what should happen, in order." },
          { title: "Turn it on", body: "Toggle Active. It starts running on the next matching event." },
        ]}
      />

      <DocH2 id="scope">Pipeline scope</DocH2>
      <DocP>
        An automation can apply to all pipelines or be scoped to one. A pipeline-scoped automation only
        runs for leads in that pipeline.
      </DocP>

      <DocH2 id="timing">When automations run</DocH2>
      <DocP>
        Most triggers fire <strong>immediately</strong>, in the same moment the event happens, a stage
        move, a new lead, an inbound message. The one exception is “no reply for N hours”, which is
        time-based and is checked on a schedule every few minutes.
      </DocP>

      <DocH2 id="order">Order and “stop after match”</DocH2>
      <DocP>
        If several automations share a trigger, they run in their listed order. Turn on{" "}
        <strong>Stop after this matches</strong> on an automation to skip the lower-priority ones once
        it fires, useful for “first match wins” setups.
      </DocP>

      <DocH2 id="loops">No loops</DocH2>
      <DocP>
        Actions that change a lead (move stage, add tag) do <strong>not</strong> re-trigger other
        automations. Every event is capped at a single hop, so you can never build an accidental loop.
      </DocP>

      <DocH2 id="kill-switch">Kill switch</DocH2>
      <DocP>
        You can pause all automations for a project from <Code>Settings → CRM</Code>. There is also a
        platform-wide switch for operators. Individual automations have their own Active toggle.
      </DocP>
    </>
  ),

  triggers: (
    <>
      <DocLead>
        A trigger is the event that starts an automation. Pick one when you create the automation; most
        triggers can be narrowed further with a small config.
      </DocLead>

      <DocTable
        head={["Trigger", "Fires when", "Narrow it by"]}
        rows={[
          [<Code>Lead created</Code>, "A new lead enters the project.", "–"],
          [<Code>Stage entered</Code>, "A lead moves into a stage.", "A specific stage, or any stage of a category (open/won/lost)."],
          [<Code>Stage exited</Code>, "A lead leaves a stage.", "A specific stage or category."],
          [<Code>Tag added</Code>, "A tag is added to a lead.", "A specific tag (blank = any)."],
          [<Code>Tag removed</Code>, "A tag is removed.", "A specific tag."],
          [<Code>Form submitted</Code>, "A lead-capture form is submitted.", "–"],
          [<Code>Ad lead received</Code>, "A lead arrives from Google / Meta ads.", "–"],
          [<Code>Message received</Code>, "An inbound WhatsApp / SMS / email / DM arrives.", "A specific channel."],
          [<Code>No reply for…</Code>, "A lead has had no activity for N hours.", "The number of hours."],
        ]}
      />

      <DocH2 id="stage-config">Targeting stages generically</DocH2>
      <DocP>
        For stage triggers you can either pick one exact stage, or match a whole category, for example
        “entered any won stage”. Matching by category means one automation works across every pipeline
        without you wiring up each stage by hand.
      </DocP>

      <DocH2 id="no-reply">The “no reply for N hours” trigger</DocH2>
      <DocP>
        This one is time-based: a background job checks every few minutes for open leads that have gone
        quiet for at least the number of hours you set, and fires once per silent period. A new message
        from the contact resets the clock, so the follow-up re-arms for the next lull.
      </DocP>
      <DocCallout type="warning" title="Requires the scheduler">
        The no-reply trigger needs the automations cron configured. If your no-reply rules never fire,
        confirm the scheduler is set up (see your operator / the setup notes).
      </DocCallout>
    </>
  ),

  conditions: (
    <>
      <DocLead>
        Conditions decide <em>which</em> leads an automation runs for. They are optional, an automation
        with no conditions runs for every matching event.
      </DocLead>

      <DocH2 id="all-any">Match all or any</DocH2>
      <DocP>
        Add one or more condition rows and choose whether the lead must match <strong>all</strong> of
        them (AND) or <strong>any</strong> of them (OR). Each row is a field, an operator, and a value.
      </DocP>

      <DocH2 id="fields">Fields you can check</DocH2>
      <DocList
        items={[
          "Source, tags, owner, status, stage, stage category, pipeline",
          "Deal value and lead score",
          "Message channel (for message triggers)",
          "Hours since last activity",
          "Any of your custom fields",
        ]}
      />

      <DocH2 id="operators">Operators</DocH2>
      <DocP>
        The available operators depend on the field: text fields offer is / is not / contains / is any
        of / is empty; number fields offer greater-than, at least, less-than, and so on; tags offer
        contains / does not contain.
      </DocP>

      <DocH2 id="examples">Examples</DocH2>
      <DocList
        items={[
          <>Only high-value deals: <Code>Deal value</Code> at least <Code>5000</Code>.</>,
          <>Only leads from paid sources: <Code>Source</Code> is any of <Code>google_ads, meta_ads</Code>.</>,
          <>VIPs only: <Code>Tags</Code> contains <Code>vip</Code>.</>,
        ]}
      />

      <DocCallout type="note" title="Test before you rely on it">
        Every automation has a dry-run test: point it at a real lead and it tells you whether the
        conditions match and which actions would run, without changing anything.
      </DocCallout>
    </>
  ),

  actions: (
    <>
      <DocLead>
        Actions are what an automation does when it matches. Add as many as you like; they run in order,
        top to bottom.
      </DocLead>

      <DocH2 id="lead-actions">Lead actions</DocH2>
      <DocTable
        head={["Action", "What it does"]}
        rows={[
          [<Code>Run lead routing</Code>, "Assigns an owner using your routing rules."],
          [<Code>Set owner</Code>, "Assigns the lead to a specific person (and emails them)."],
          [<Code>Move to stage</Code>, "Moves the lead to a pipeline stage."],
          [<Code>Add tag</Code>, "Tags the lead."],
          [<Code>Remove tag</Code>, "Removes a tag."],
          [<Code>Create task</Code>, "Creates a follow-up task, optionally due in N hours and assigned to someone."],
        ]}
      />

      <DocH2 id="messaging">Messaging actions</DocH2>
      <DocTable
        head={["Action", "Notes"]}
        rows={[
          [<Code>Send WhatsApp</Code>, "Sends a session message inside the 24-hour window, or a template outside it."],
          [<Code>Send email</Code>, "Sends an email to the lead’s contact."],
          [<Code>Send SMS</Code>, "Sends an SMS (respecting opt-out)."],
          [<Code>Send Instagram / Facebook DM</Code>, "Sends a direct message inside the platform’s 24-hour window."],
          [<Code>Call webhook</Code>, "POSTs the lead to an external URL, optionally HMAC-signed."],
          [<Code>AI auto-reply</Code>, "Drafts or sends an AI reply on any channel, including social DMs, see AI auto-reply."],
        ]}
      />

      <DocCallout type="warning" title="Messaging actions use credits">
        Email and SMS automation sends draw from their respective credit buckets at the same rate as
        manual sends. WhatsApp and social sends do not deduct SpeedIQ credits because Meta bills the
        connected account. AI generation uses the AI bucket, and a failed send is automatically refunded.
      </DocCallout>

      <DocH2 id="whatsapp-window">The WhatsApp 24-hour window</DocH2>
      <DocP>
        WhatsApp only allows free-form messages within 24 hours of the contact’s last inbound message.
        Outside that window you must send a pre-approved template. In the <Code>Send WhatsApp</Code>{" "}
        action, put your message text and a fallback template name, SpeedIQ uses the text inside the
        window and the template outside it.
      </DocP>
    </>
  ),

  "ai-auto-reply": (
    <>
      <DocLead>
        AI auto-reply drafts a reply to a lead’s most recent inbound message. It can queue the draft for
        a human to send, or send it automatically, with rate limits, business hours, and caps so it
        never runs away.
      </DocLead>

      <DocH2 id="setup">Set it up</DocH2>
      <DocSteps
        items={[
          { title: "Open the settings", body: <>Go to <Code>Automations → AI Conversations → AI Replies</Code>.</> },
          { title: "Enable and pick channels", body: "Turn on AI replies and choose which channels it may reply on — WhatsApp, SMS, Email, and social DMs (Instagram, Facebook)." },
          { title: "Choose a mode", body: "Draft only (a human sends) or Auto-send." },
          { title: "Add the action", body: <>Create a <Code>Message received</Code> automation and add the <Code>AI auto-reply</Code> action.</> },
        ]}
      />

      <DocH2 id="models">Models</DocH2>
      <DocP>
        Replies run on <strong>Google Gemini</strong> by default. A project can switch to an OpenAI
        (GPT-4o), Anthropic (Claude), or xAI (Grok) model instead from the AI Conversations settings.
      </DocP>
      <DocCallout type="note" title="No API keys to manage">
        SpeedIQ runs the models for you, so there is no API key to add. Each AI action uses your AI
        credits, whichever model the project uses.
      </DocCallout>

      <DocH2 id="guardrails">Guardrails</DocH2>
      <DocList
        items={[
          <><strong>Rate limit</strong>, at most N AI replies per recipient per hour.</>,
          <><strong>Daily cap</strong>, a per-project ceiling on AI replies per day.</>,
          <><strong>Business hours</strong>, optionally only reply during set hours.</>,
          <><strong>Fall back to human</strong>, the AI defers instead of guessing when it is not confident.</>,
          <><strong>Kill switches</strong>, a per-project enable toggle and a platform-wide switch.</>,
        ]}
      />

      <DocH2 id="grounding">What the AI sees</DocH2>
      <DocP>
        The reply is grounded in the recent conversation and your tone and custom instructions. It is
        told not to invent facts (order numbers, prices, policies) and to keep within a length cap you
        set. You can override the whole behaviour with your own instructions.
      </DocP>

      <DocH2 id="billing">Billing</DocH2>
      <DocP>
        An AI reply is billed twice: once for generating the draft, and, in auto-send mode, again for
        the outbound message on its channel. Draft-only mode only bills the generation. Every draft and
        send appears under <Code>AI Conversations → Activity</Code> with its disposition.
      </DocP>

      <DocCallout type="tip" title="Start in draft-only">
        Run in Draft only for a while and use the <Code>Review</Code> tab before switching to Auto-send.
      </DocCallout>
    </>
  ),

  "run-history": (
    <>
      <DocLead>
        Every time an automation is evaluated it writes a run. Run history is where you confirm rules
        are firing and diagnose the ones that are not.
      </DocLead>

      <DocH2 id="where">Where</DocH2>
      <DocP>
        See a project-wide feed under <Code>Automations → Run History</Code>, or open a single
        automation and switch to its <strong>Runs</strong> tab.
      </DocP>

      <DocH2 id="reading">Reading a run</DocH2>
      <DocTable
        head={["Status", "Meaning"]}
        rows={[
          [<Code>completed</Code>, "Conditions matched and every action succeeded."],
          [<Code>failed</Code>, "Conditions matched but an action errored (the error is shown)."],
          [<Code>no match</Code>, "The trigger fired but the conditions did not match this lead."],
        ]}
      />
      <DocP>
        Runs are recorded even when conditions do not match, so “why didn’t my rule fire?” is
        answerable: if you see a <Code>no match</Code> run, the trigger reached the automation but the
        conditions excluded the lead.
      </DocP>

      <DocH2 id="troubleshooting">Common fixes</DocH2>
      <DocTable
        head={["Symptom", "Likely fix"]}
        rows={[
          ["No runs at all", "The automation is off, or the project kill switch is on. Check the Active toggle and Settings → CRM."],
          ["Only ‘no match’ runs", "Conditions are too strict, or the pipeline scope excludes the lead. Use the dry-run test."],
          ["Send action failed", "Out of credits, contact opted out, or (WhatsApp) outside the 24-hour window with no fallback template."],
          ["No-reply rule never fires", "The automations scheduler is not configured."],
          ["AI reply skipped", "Channel not enabled, rate limit or daily cap hit, outside business hours, or out of AI credits."],
        ]}
      />
    </>
  ),

  // ===========================================================================
  // BILLING
  // ===========================================================================
  "plans-credits": (
    <>
      <DocLead>
        SpeedIQ is credit-based: you pick a plan for its monthly channel buckets and included access.
        Email, SMS, AI, and voice use separate buckets; WhatsApp and social sends do not deduct SpeedIQ credits. No
        per-seat fees.
      </DocLead>

      <DocH2 id="plans">Plans</DocH2>
      <DocTable
        head={["Plan", "Price", "Monthly buckets", "Channels", "Members"]}
        rows={[
          ["Starter", "$12/mo", "Email 2,000 · AI 300", "Email, WhatsApp", "3"],
          ["Pro", "$29/mo", "Email 7,000 · AI 700 · SMS 300 · Voice 60", "Email, WhatsApp, SMS, Voice", "10"],
          ["Business", "$79/mo", "Email 24,000 · AI 1,500 · SMS 700 · Voice 120", "Email, WhatsApp, SMS, Voice + AI", "Plan limit"],
        ]}
      />
      <DocP>
        Yearly billing is discounted. New projects start on a hidden Free plan with 100 Email and 20 AI
        credits, re-granted monthly; it does not include SMS or Voice credits. Paid plans are charged
        according to the selected billing cycle. Only project owners and admins can manage billing.
      </DocP>

      <DocH2 id="credits">What a message costs</DocH2>
      <DocTable
        head={["Send", "Credits"]}
        rows={[
          ["Email (campaign or reply)", "1 Email credit"],
          ["WhatsApp and social sends", "0 SpeedIQ credits; platform/provider terms apply"],
          ["SMS", "Depends on the destination country: 1 SMS credit per US/Canada segment, more for other countries (see the pricing page)"],
          ["Voice", "Depends on the destination country: 1 Voice credit per US/Canada answered minute, more for other countries (see the pricing page)"],
          ["AI generation", "1 AI credit per action"],
          ["Prospecting", "1 AI credit per verified lead"],
        ]}
      />

      <DocH2 id="top-ups">Top-ups</DocH2>
      <DocP>
        In <Code>Billing</Code>, choose <Code>Top up</Code> and set an amount for each bucket you want: Email, SMS,
        AI and Voice each have their own slider and amount box. Everything you pick is bought together in one
        payment, and the credits add to your balance on top of your plan. Each bucket is priced per credit in US
        dollars; the pricing page is the source of truth.
      </DocP>

      <DocH2 id="auto-recharge">Auto-recharge</DocH2>
      <DocP>
        Turn on auto-recharge to avoid interruptions: set a threshold and a credit amount, and when your
        balance drops to the threshold a top-up of that amount is triggered and the owner is emailed a
        payment link (it needs a click to pay).
      </DocP>

      <DocH2 id="providers">Paying</DocH2>
      <DocP>
        Payments are in <strong>US dollars</strong> through <strong>Razorpay</strong> (international cards
        accepted). Change plans from <Code>Billing</Code>: upgrades apply immediately and are prorated,
        and downgrades take effect at the end of the current billing cycle.
      </DocP>
    </>
  ),

  "usage-limits": (
    <>
      <DocLead>
        The usage page shows exactly where your credits go, and clear limits stop you from oversending
        by accident.
      </DocLead>

      <DocH2 id="usage">Usage</DocH2>
      <DocP>
        <Code>Billing → Usage</Code> covers a 7 / 30 / 90-day window and shows your current balance, plan
        credits, credits spent, event count, and average per day. Below that: a daily consumption chart,
        a per-channel breakdown (with per-type detail), your top campaigns by cost, and a recent-activity
        ledger of every credit change with the balance after each.
      </DocP>

      <DocH2 id="limits">Limits &amp; gating</DocH2>
      <DocP>Before a send, SpeedIQ checks your plan and balance. A send is blocked when:</DocP>
      <DocTable
        head={["Reason", "What it means"]}
        rows={[
          ["Insufficient credits", "You are out of credits. Top up or wait for renewal."],
          ["Channel not in plan", "e.g. SMS on Starter. Upgrade to unlock the channel."],
          ["Subscription inactive", "Only trialing or active subscriptions can send. Update payment."],
          ["Contacts / seats / campaigns limit", "You hit a plan cap. Upgrade to raise it."],
        ]}
      />

      <DocCallout type="note" title="Running out of credits">
        Sends pause until you top up or your plan renews. Turn on{" "}
        <DocLink href="/docs/plans-credits">auto-recharge</DocLink> to avoid interruptions.
      </DocCallout>
    </>
  ),

  // ===========================================================================
  // TEAM & SETTINGS
  // ===========================================================================
  team: (
    <>
      <DocLead>
        Invite your whole team at no extra cost. Roles decide what each person can see and do, including
        a masked agent role that hides customer contact details.
      </DocLead>

      <DocH2 id="invite">Inviting people</DocH2>
      <DocP>
        Owners and admins go to <Code>Team</Code>, enter an email and a role, and generate an invite
        link (it expires in 7 days and can be revoked). The recipient accepts from{" "}
        <Code>/invitations</Code> or by opening the link, signing in, and choosing Accept.
      </DocP>

      <DocH2 id="roles">Roles</DocH2>
      <DocTable
        head={["Role", "Can do"]}
        rows={[
          ["Owner", "The project creator. Full control; the only role that can change others’ roles."],
          ["Admin", "Manage the team and settings; invite/remove members (not other admins or the owner)."],
          ["Editor", "Work leads, campaigns, and automations."],
          ["Viewer", "Read-only access."],
          ["Agent (masked)", "Reply to conversations in the Inbox only, with customer PII hidden."],
        ]}
      />

      <DocH2 id="agent">The masked agent role</DocH2>
      <DocP>
        An agent can read and reply to conversations, but every contact’s name, phone, email, and
        avatar are replaced by a reference code like <Code>CT-7K3M9</Code>. Message content stays
        visible so they can still help the customer; they search by the reference code. This is enforced
        server-side and by database rules, so PII never reaches their screen. Ideal for outsourced or
        large support teams.
      </DocP>
    </>
  ),

  settings: (
    <>
      <DocLead>
        Settings is where you connect each channel and tune how the workspace behaves. Everything here
        is scoped to the active project.
      </DocLead>

      <DocH2 id="pages">Settings pages</DocH2>
      <DocTable
        head={["Page", "Configures"]}
        rows={[
          ["WhatsApp account", "Connect your WhatsApp Business number, check health, opt-in/out keywords, auto-replies, hours."],
          ["Email", "Send from the platform address or your verified domain; from name; branded receiving."],
          ["SMS", "Pick a Twilio sender, compliance keywords, auto-replies, and business hours."],
          ["Voice", "Enable browser calling, caller ID, recording, and per-agent calling lines."],
          ["Tags", "Create and manage contact tags."],
          ["CRM", "Pipelines & stages, custom fields, lost reasons, and lead-capture automations."],
          ["Canned messages", "Reusable quick replies."],
          ["Connections", "Shortcut to Leads → Capture for ad and lead-source connections."],
        ]}
      />

      <DocH2 id="tags">Tags</DocH2>
      <DocP>
        Create named tags with an optional colour (VIP, New customer, …), apply them to contacts, and
        use them to filter and build audiences. Deleting a tag removes it from every contact; each tag
        shows how many contacts carry it.
      </DocP>

      <DocH2 id="canned">Canned messages</DocH2>
      <DocP>
        Save quick replies for WhatsApp or email, text, image, file, video, or audio (email supports an
        HTML template with live preview). Use them in campaigns and in live chat to answer common
        questions fast.
      </DocP>
    </>
  ),

  // ===========================================================================
  // ADMINISTRATION
  // ===========================================================================
  admin: (
    <>
      <DocLead>
        The admin panel is for platform operators, not end users. It controls plans, credit economics,
        and oversight across every workspace on the platform.
      </DocLead>

      <DocCallout type="warning" title="Platform admins only">
        Access is limited to platform admins (emails listed in the <Code>PLATFORM_ADMIN_EMAILS</Code>{" "}
        environment setting, auto-promoted on sign-in). Everyone else is redirected to their dashboard.
      </DocCallout>

      <DocH2 id="sections">What admins manage</DocH2>
      <DocTable
        head={["Section", "Controls"]}
        rows={[
          ["Overview", "Platform-wide billing health, subscriptions, outstanding credits, 30-day usage."],
          ["Plans", "Subscription tiers: monthly credits, USD monthly and yearly pricing, active status."],
          ["Credit weights", "How many credits each send costs, per channel and message type."],
          ["Settings", "Trial length/credits, discounts, payment provider, refund policy, and a billing kill switch."],
          ["Users", "View users and grant or revoke platform-admin."],
          ["Transactions", "The credit ledger; issue refunds and manual adjustments."],
          ["Projects", "Every workspace, assign plans, view balances, drill into transactions."],
          ["Audit log", "A record of admin actions (who did what to which target)."],
        ]}
      />
    </>
  ),
};
