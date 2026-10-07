import type { GridItem } from "@/components/site/blocks";
import type { Shot } from "@/components/site/ProductShot";

/**
 * Content for the fourteen feature pages. Every page renders the same
 * template (components/site/FeaturePage.tsx) from one of these objects, so
 * the copy lives here and the layout lives in one place.
 *
 * Screenshots referenced by `shot` live in public/product. A missing file
 * renders a neutral placeholder until it is added.
 */
export interface FeatureSection {
  eyebrow: string;
  title: string;
  accent?: string;
  body: string;
  bullets?: string[];
  shot: Shot;
}

export interface FeatureContent {
  slug: string;
  name: string;
  group: "Channels" | "Grow" | "Run";
  eyebrow: string;
  title: string;
  accent: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  heroBullets: string[];
  heroShot: Shot;
  capabilitiesTitle: string;
  capabilitiesAccent?: string;
  capabilitiesLede: string;
  capabilities: GridItem[];
  sections: FeatureSection[];
  related: string[];
  faq: { q: string; a: string }[];
}

const shot = (file: string, alt: string, label: string): Shot => ({ src: `/product/${file}`, alt, label });

export const FEATURES: FeatureContent[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "inbox",
    name: "Unified inbox & live chat",
    group: "Channels",
    eyebrow: "Unified inbox",
    title: "Every conversation,",
    accent: "one inbox.",
    lede:
      "WhatsApp, Instagram, Facebook, website chat, email, SMS and calls land in a single shared inbox. One thread per customer, with assignment, notes and the full cross-channel history beside every reply.",
    metaTitle: "Unified inbox & live chat",
    metaDescription:
      "One shared inbox for WhatsApp, Instagram, Facebook, website chat, email, SMS and calls, with assignment, internal notes, merged contact history and an AI assistant.",
    heroBullets: ["One thread per customer across every channel", "Assign, note and resolve without leaving the conversation", "Website live chat with an AI assistant that hands off to your team"],
    heroShot: shot("inbox.png", "The SpeedIQ unified inbox with conversations from several channels", "Inbox"),
    capabilitiesTitle: "Built so context",
    capabilitiesAccent: "never gets lost.",
    capabilitiesLede: "Everything a busy team needs to answer fast and stay on the same page, in one queue.",
    capabilities: [
      { icon: "merge", title: "One thread per contact", body: "Messages from every channel the same person uses collapse into one timeline. Calls and bookings show up there too." },
      { icon: "users", title: "Assignment & ownership", body: "Route conversations to the right teammate, see who owns what, and never leave a thread unanswered." },
      { icon: "note", title: "Private notes & mentions", body: "Leave internal notes and @mention colleagues inside a thread. Customers never see them." },
      { icon: "chat", title: "Website live chat", body: "Add one script tag to your site. Visitors chat in a branded widget, with conversation starters, office hours and a help tab." },
      { icon: "sparkle", title: "AI assistant in the chat", body: "The assistant greets visitors by name, answers from your knowledge base, captures details, books appointments and hands off to a human when needed." },
      { icon: "tag", title: "Canned replies, tags & filters", body: "Answer common questions in one click, label conversations and filter the queue by channel, status or owner." },
    ],
    sections: [
      {
        eyebrow: "Live chat",
        title: "A chat widget that does real work",
        body: "Drop the SpeedIQ widget on any site. Visitors get a fast, branded chat with starters, your office hours and a help centre tab. Behind it, your team answers from the same inbox as WhatsApp and email, and every chat becomes a lead in the CRM.",
        bullets: ["Several chats per project, each with its own opening tab and branding", "Require visitor details first, or let them start chatting", "Shared link for the chat, so it also works outside your website"],
        shot: shot("live-chat.png", "The live chat widget set-up screen with the branded widget preview", "Live chat"),
      },
      {
        eyebrow: "AI assistant",
        title: "Answers, bookings and hand-offs,",
        accent: "automatically.",
        body: "Give the assistant a personality and your knowledge base. It streams replies, offers tappable options only when the visitor needs to choose, saves the name and details it is given, books an open slot in one step and calls your team when a human should take over.",
        bullets: ["Grounded in your knowledge base and custom instructions", "Books appointments against your real availability", "Every AI action is logged for review under AI Conversations"],
        shot: shot("ai-conversations.png", "AI Conversations showing replies the assistant drafted and sent", "AI Conversations"),
      },
      {
        eyebrow: "Context",
        title: "Reply with the whole story on screen",
        body: "The lead record, previous conversations on other channels, notes, tasks, bookings and call history sit beside the thread. Nobody has to ask the customer to repeat themselves.",
        shot: shot("lead.png", "A lead record with its cross-channel timeline", "Lead timeline"),
      },
    ],
    related: ["whatsapp", "social", "crm", "automations"],
    faq: [
      { q: "How do messages from different channels stay together?", a: "When the same person reaches you on WhatsApp, email, SMS, website chat or a connected social account, SpeedIQ merges the identities into one contact and one timeline. Calls and bookings appear there too." },
      { q: "How do I add live chat to my website?", a: "Create a chat in Live Chat, pick its branding and opening tab, and paste one script tag into your site. The widget also has a shareable link for use outside your website." },
      { q: "What can the AI assistant do in the chat?", a: "It answers from your knowledge base and instructions, greets visitors by the name they give, captures contact details, books an available slot and hands the conversation to your team when asked or when it cannot help." },
      { q: "Are internal notes visible to customers?", a: "Never. Notes and @mentions stay private to your team, inside the thread." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "whatsapp",
    name: "WhatsApp",
    group: "Channels",
    eyebrow: "WhatsApp Business",
    title: "WhatsApp Business,",
    accent: "done properly.",
    lede:
      "Connect your number through the official WhatsApp Business Platform, send approved templates at scale, chat inside the 24-hour window, take calls, and let the AI agent handle the first reply.",
    metaTitle: "WhatsApp Business",
    metaDescription:
      "Official WhatsApp Business API in SpeedIQ: embedded signup, approved templates, broadcasts, rich media, calling, an AI agent and the shared inbox.",
    heroBullets: ["Official Business Platform with embedded signup", "Templates created, submitted and tracked in-app", "WhatsApp calling and an AI agent on your business number"],
    heroShot: shot("whatsapp-templates.png", "WhatsApp templates with their approval status", "WhatsApp templates"),
    capabilitiesTitle: "Everything the API offers,",
    capabilitiesAccent: "wrapped in tools your team can use.",
    capabilitiesLede: "From the first template to the thousandth broadcast, with the rules of the platform respected for you.",
    capabilities: [
      { icon: "shield", title: "Official Business Platform", body: "Connect through Meta's embedded signup with a verified sender profile. Your account, your number." },
      { icon: "file", title: "Approved templates", body: "Create templates with media, variables and buttons, submit them for approval and track status in the app." },
      { icon: "megaphone", title: "Broadcast campaigns", body: "Send templates to an audience, schedule the send and watch sent, delivered and read states per recipient." },
      { icon: "clock", title: "24-hour window, handled", body: "Each conversation shows whether you can reply freely or need a template, so nothing bounces." },
      { icon: "phone", title: "WhatsApp calling", body: "Place and answer voice calls on your business number, with calls logged on the contact timeline." },
      { icon: "sparkle", title: "AI agent", body: "Let the AI answer inside the window, qualify the lead, book a slot and hand off to your team with guardrails you set." },
    ],
    sections: [
      {
        eyebrow: "Templates",
        title: "Send approved templates at scale",
        body: "Build template messages with headers, media and quick-reply buttons, submit them to Meta and reuse them in campaigns and automations. Approval status is tracked in-app so you always know what you can send.",
        shot: shot("campaigns.png", "A WhatsApp broadcast campaign with delivery statuses", "WhatsApp campaign"),
      },
      {
        eyebrow: "Conversations",
        title: "Chat, automate, then hand off",
        accent: "in one thread.",
        body: "Inbound messages land in the shared inbox beside the customer's email and social history. Automations and the AI agent answer common questions inside the window and route anything that needs a person to an agent.",
        bullets: ["Assignment, notes and canned replies", "AI replies in draft or auto-send mode", "Every AI tool call logged for review"],
        shot: shot("inbox.png", "A WhatsApp conversation in the unified inbox", "Inbox"),
      },
      {
        eyebrow: "Billing",
        title: "No SpeedIQ credits for WhatsApp",
        body: "SpeedIQ does not deduct credits for WhatsApp sends. Meta's conversation charges stay on your connected Meta account, and the 24-hour window and template rules apply as usual.",
        shot: shot("whatsapp-settings.png", "WhatsApp account settings with the connected number", "WhatsApp settings"),
      },
    ],
    related: ["inbox", "automations", "voice", "social"],
    faq: [
      { q: "Do you use the official WhatsApp Business API?", a: "Yes. SpeedIQ connects your number through Meta's embedded signup on the official WhatsApp Business Platform, with a verified sender profile." },
      { q: "How does template approval work?", a: "Create templates in-app and submit them for approval. Their status is tracked in SpeedIQ, so you always know which templates you can send." },
      { q: "What is the 24-hour window?", a: "Outside a 24-hour customer-service window you can only send approved templates. SpeedIQ shows each conversation's state so your team and automations stay inside the rules." },
      { q: "How are WhatsApp messages priced?", a: "SpeedIQ does not deduct credits for WhatsApp. Meta's charges are billed to your connected Meta account." },
      { q: "Does SpeedIQ support WhatsApp calling?", a: "Yes, once calling is enabled on your WhatsApp Business number. Calls appear on the contact timeline, and you can switch on recording or an AI voice agent per project." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "social",
    name: "Social & ads",
    group: "Channels",
    eyebrow: "Instagram, Facebook & Google Ads",
    title: "Every social lead,",
    accent: "straight into your CRM.",
    lede:
      "Capture lead forms, comments and DMs from Facebook and Instagram, plus Google Ads lead forms. Reply from the shared inbox, let the AI draft or send DM replies, and route every lead automatically.",
    metaTitle: "Social & ads lead capture",
    metaDescription:
      "Capture Facebook and Instagram lead forms, comments and DMs, plus Google Ads lead forms, into one CRM and inbox, with AI replies and automatic routing.",
    heroBullets: ["Lead ads sync the moment someone submits", "Comments become leads, filtered by keyword", "Instagram and Facebook DMs in the shared inbox"],
    heroShot: shot("social-leads.png", "Lead capture sources with connected Facebook, Instagram and Google Ads accounts", "Lead capture"),
    capabilitiesTitle: "Turn every social touch",
    capabilitiesAccent: "into a lead.",
    capabilitiesLede: "Ad forms, comments and DMs from connected platforms, captured, answered and organised without leaving SpeedIQ.",
    capabilities: [
      { icon: "ads", title: "Lead ads sync", body: "Facebook, Instagram and Google Ads lead forms flow into your CRM without CSV exports, ready for routing." },
      { icon: "chat", title: "DMs in the inbox", body: "Instagram and Facebook DMs join WhatsApp and email in one shared inbox, with assignment and hand-off." },
      { icon: "tag", title: "Comments to leads", body: "People who comment on connected posts and ads become leads automatically, with optional keyword filters." },
      { icon: "sparkle", title: "AI DM replies", body: "AI drafts or sends replies to DMs inside each platform's messaging rules, with a human able to take over any time." },
      { icon: "route", title: "Routing & automations", body: "New social leads are assigned by your routing rules and can trigger follow-up workflows instantly." },
      { icon: "chart", title: "Source reporting", body: "See which ads, posts and forms actually produce leads and pipeline, not just clicks." },
    ],
    sections: [
      {
        eyebrow: "Lead ads",
        title: "Ad-form leads, the moment they submit",
        body: "Connect Facebook and Instagram, plus Google Ads for its lead forms. New submissions land in the CRM with their source, where pipeline, stage, routing and assignment rules take over.",
        shot: shot("leads.png", "The leads list filtered by social sources", "Leads"),
      },
      {
        eyebrow: "DMs & comments",
        title: "Conversations where your customers already are",
        body: "DMs arrive in the unified inbox next to the person's other channels. Comments on connected posts can be captured as leads and answered privately, so public threads stay clean.",
        shot: shot("inbox.png", "An Instagram DM in the unified inbox", "Inbox"),
      },
    ],
    related: ["inbox", "automations", "crm", "analytics"],
    faq: [
      { q: "Which platforms are supported?", a: "Facebook and Instagram for lead ads, comments, DMs and private replies to comments. Google Ads lead forms also sync. Platform approval and account eligibility apply." },
      { q: "Do you support AI replies on social DMs?", a: "Yes. Facebook and Instagram DMs can be drafted or auto-sent by AI inside each platform's reply window, with your guardrails and a human hand-off." },
      { q: "Do comments really become leads?", a: "People who comment on connected posts and ads can be captured as leads automatically, with an optional keyword filter so only relevant comments reach your pipeline." },
      { q: "Where do the leads and conversations end up?", a: "In the same CRM and inbox as WhatsApp, email and SMS, with routing, assignment and automations applied consistently." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "email",
    name: "Email",
    group: "Channels",
    eyebrow: "Email",
    title: "Email campaigns and replies,",
    accent: "beside every other channel.",
    lede:
      "Design on-brand emails, send to segments, automate nurture flows and reply to inbound mail from the same inbox as WhatsApp and SMS. Sending domain, authentication and deliverability reporting included.",
    metaTitle: "Email campaigns & inbox",
    metaDescription:
      "Email in SpeedIQ: a rich editor, templates, segments, automated flows, inbound replies in the shared inbox, custom sending domain and delivery reporting.",
    heroBullets: ["Rich editor with templates, variables and attachments", "Custom sending domain with SPF/DKIM", "Inbound replies land in the shared inbox"],
    heroShot: shot("email-campaign.png", "An email campaign being composed in the editor", "Email campaign"),
    capabilitiesTitle: "Everything a sender needs,",
    capabilitiesAccent: "none of the tab-switching.",
    capabilitiesLede: "From the first draft to the deliverability report, email sits right next to your other channels.",
    capabilities: [
      { icon: "mail", title: "Rich editor & templates", body: "Compose with formatting, images, links, variables and attachments, or switch to HTML. Save templates for the team." },
      { icon: "users", title: "Audiences & personalisation", body: "Target contacts by attributes or behaviour and merge in personal fields so every email reads one-to-one." },
      { icon: "bolt", title: "Automated flows", body: "Trigger emails when a lead is created, a stage changes or a contact goes quiet, with branching and delays." },
      { icon: "inbox", title: "Inbound in the inbox", body: "Replies arrive in the unified inbox beside the person's WhatsApp and SMS history." },
      { icon: "shield", title: "Your domain, authenticated", body: "Send from your own domain with SPF and DKIM, plus bounce and complaint handling." },
      { icon: "chart", title: "Delivery & engagement", body: "Sent, delivered, opened, clicked, bounced and complained, per campaign and over time." },
    ],
    sections: [
      {
        eyebrow: "Campaigns",
        title: "Broadcast to the right segment",
        body: "Build a campaign, choose an audience and schedule the send. Personalisation fields and saved templates keep every email on-brand and relevant.",
        shot: shot("campaigns.png", "The campaigns list with an email campaign's delivery stats", "Campaigns"),
      },
      {
        eyebrow: "Automation",
        title: "Welcome and nurture",
        accent: "on autopilot.",
        body: "Start a flow when a lead is created, a message arrives, a stage changes or a contact goes quiet. Sequences space the emails out, and branching adapts the follow-up to the data you collect.",
        shot: shot("sequences.png", "An email sequence with timed steps", "Sequences"),
      },
    ],
    related: ["inbox", "automations", "analytics", "sms"],
    faq: [
      { q: "Do I need to know HTML to build emails?", a: "No. The rich editor supports formatting, images, links, variables and attachments. An HTML mode is there for teams that want more control." },
      { q: "How do you protect deliverability?", a: "You send from your own authenticated domain (SPF and DKIM), with bounce and complaint handling and engagement reporting so you can monitor sender health." },
      { q: "Can I personalise and segment sends?", a: "Yes. Target contacts by attributes or behaviour and merge in personal fields so every email feels one-to-one." },
      { q: "How much does email cost?", a: "One email credit per email sent, from the email bucket included in your plan. Top up any time; there are no per-seat charges." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "sms",
    name: "SMS",
    group: "Channels",
    eyebrow: "SMS",
    title: "Two-way SMS that",
    accent: "turns into conversations.",
    lede:
      "Send alerts and broadcasts, schedule campaigns, handle opt-outs automatically and let replies flow into the same inbox as your other channels. Per-country credit pricing, published up front.",
    metaTitle: "SMS campaigns & two-way texting",
    metaDescription:
      "SMS in SpeedIQ: broadcasts, scheduled campaigns, automated reminders, STOP handling, replies in the shared inbox and per-country credit pricing.",
    heroBullets: ["Replies land in the unified inbox", "STOP and custom keywords handled automatically", "One credit per US/Canada segment, published rates elsewhere"],
    heroShot: shot("sms-campaign.png", "An SMS campaign with recipient delivery states", "SMS campaign"),
    capabilitiesTitle: "Built for speed",
    capabilitiesAccent: "and compliance.",
    capabilitiesLede: "Everything you need to run SMS responsibly, from scheduling to automatic opt-out handling.",
    capabilities: [
      { icon: "sms", title: "Two-way texting", body: "Replies land back in the unified inbox, so a broadcast can turn into a real conversation." },
      { icon: "calendar", title: "Scheduled broadcasts", body: "Queue a campaign for a date and time, then watch recipient statuses as it runs." },
      { icon: "shield", title: "Keywords & opt-out", body: "STOP and custom keywords are handled automatically, with consent status tracked per contact." },
      { icon: "bolt", title: "Automated reminders", body: "Order updates, appointment reminders and verification codes fire from triggers, no one at a keyboard." },
      { icon: "chart", title: "Delivery reporting", body: "Delivered, failed and pending states per message as the send goes out." },
      { icon: "wallet", title: "Per-country credits", body: "One SMS credit per US or Canada segment. Other countries use more credits; the pricing page lists every rate." },
    ],
    sections: [
      {
        eyebrow: "Broadcasts",
        title: "Reach everyone, instantly",
        body: "Send a one-off broadcast or schedule a campaign to an audience. Recipient delivery states and failures are recorded as the send progresses, and templates keep the copy consistent.",
        shot: shot("campaigns.png", "Campaign list with SMS delivery stats", "Campaigns"),
      },
      {
        eyebrow: "Replies",
        title: "Replies become conversations",
        body: "When a customer texts back, the reply lands in the unified inbox next to their WhatsApp and email history, so context is never lost and the right teammate can pick it up.",
        shot: shot("inbox.png", "An SMS reply in the unified inbox", "Inbox"),
      },
    ],
    related: ["inbox", "automations", "voice", "analytics"],
    faq: [
      { q: "Can customers reply to my messages?", a: "Yes. Replies land in the unified inbox next to the contact's other channels, and your team or an automation can answer." },
      { q: "How do you handle opt-outs?", a: "STOP and custom keywords are handled automatically, and consent status is stored on the contact, so you stay compliant without manual list management." },
      { q: "Can I schedule sends by time zone?", a: "You can schedule a campaign for a date and time. The current campaign flow does not localise the send time per recipient." },
      { q: "How is SMS priced?", a: "An SMS credit covers one message segment to the US or Canada. Other countries cost more to reach, so a message there uses a few credits, and a long message is charged per segment. The pricing page lists credits per country." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "voice",
    name: "Voice & calling",
    group: "Channels",
    eyebrow: "Voice",
    title: "A phone that lives",
    accent: "inside your CRM.",
    lede:
      "Call any lead from the record or the inbox with numbers you buy in SpeedIQ, take WhatsApp calls on your business number, log every call automatically and let an AI voice agent answer when your team can't.",
    metaTitle: "Voice calls, WhatsApp calling & AI voice agent",
    metaDescription:
      "Voice in SpeedIQ: in-app dialer with local numbers, WhatsApp calling, automatic call logging, optional recordings and an AI voice agent, all on the contact timeline.",
    heroBullets: ["Click-to-call from any lead or conversation", "Calls logged with duration, direction and outcome", "AI voice agent for inbound calls, with recordings when enabled"],
    heroShot: shot("calls.png", "The calls log with durations and outcomes", "Calls"),
    capabilitiesTitle: "Calling that doesn't",
    capabilitiesAccent: "leave the conversation.",
    capabilitiesLede: "Calls sit on the same timeline as every chat, so the whole history stays in one place.",
    capabilities: [
      { icon: "phone", title: "In-app dialer", body: "Open a lead and hit call. The dialer connects with the customer's details already on screen." },
      { icon: "globe", title: "Local numbers", body: "Search and buy local numbers in supported countries without leaving SpeedIQ. Availability varies by country." },
      { icon: "history", title: "Automatic call logs", body: "Every call is logged with duration, direction and outcome. Nothing depends on someone remembering to note it." },
      { icon: "file", title: "Optional recordings", body: "Enable recording for coaching and quality review, then replay from the contact record." },
      { icon: "chat", title: "WhatsApp calling", body: "Answer and place WhatsApp voice calls on your connected business number, with the customer's call permission handled." },
      { icon: "sparkle", title: "AI voice agent", body: "Let an AI agent answer inbound calls, every call or only when your team can't, with transcripts recorded. Consent-based AI calls you start are US and Canada only for now." },
    ],
    sections: [
      {
        eyebrow: "Click-to-call",
        title: "Dial from the record, not the keypad",
        body: "Open a lead and call. No copying numbers, no second app, no losing the thread between the chat and the call. The outcome and any recording land on the timeline when you hang up.",
        shot: shot("lead.png", "A lead record with a call in its timeline", "Lead timeline"),
      },
      {
        eyebrow: "Coverage",
        title: "One timeline,",
        accent: "every conversation.",
        body: "Calls land on the same contact timeline as WhatsApp, email and SMS, so anyone on the team can see the history and outcome in one place. A voice credit covers one call minute to the US or Canada; other destinations use a few credits per minute.",
        shot: shot("calls.png", "Call history across the team", "Calls"),
      },
    ],
    related: ["whatsapp", "crm", "inbox", "automations"],
    faq: [
      { q: "Do I need a separate phone system?", a: "No. The dialer lives inside SpeedIQ, so you call leads from a record or the inbox with their context on screen." },
      { q: "Are calls logged and recorded?", a: "Every call is logged with duration, direction and outcome. Recording is optional and, when enabled, recordings are available on the contact record." },
      { q: "Which countries does calling work in?", a: "You can buy local numbers in supported countries; availability varies. A voice credit covers one minute to the US or Canada and other destinations use more credits per minute. WhatsApp calling runs on your connected business number." },
      { q: "What does the AI voice agent do?", a: "It can answer inbound calls on your number, every call or only the ones your team can't take, with transcripts and tool-call history recorded. Consent-based AI calls started by hand are US and Canada only for now." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "forms",
    name: "Forms & AI chat forms",
    group: "Grow",
    eyebrow: "Forms",
    title: "Forms people",
    accent: "actually finish.",
    lede:
      "Build on-brand forms without code: classic layouts, one question at a time, or an AI chat that talks the visitor through it and books a slot on the spot. Every submission becomes a lead in your CRM.",
    metaTitle: "Forms, lead capture & AI chat forms",
    metaDescription:
      "No-code forms with logic, validation, file uploads, theming and an AI conversational mode that qualifies visitors and books appointments. Every submission becomes a lead.",
    heroBullets: ["Drag-and-drop builder with logic and validation", "AI chat mode that qualifies, answers and books", "Hosted page, embed or popup, with draft and publish"],
    heroShot: shot("forms-builder.png", "The form builder with questions and logic", "Form builder"),
    capabilitiesTitle: "A form builder that pulls",
    capabilitiesAccent: "its weight.",
    capabilitiesLede: "Design, theme and analyse forms, wired into the same CRM and automations as every other lead source.",
    capabilities: [
      { icon: "form", title: "Drag-and-drop builder", body: "Short text, choices, ratings, dates, uploads and more. Reorder in seconds, edit a draft while the live form keeps running." },
      { icon: "branch", title: "Logic & validation", body: "Jump, show or skip questions based on earlier answers. Require the right formats for emails, phones and files." },
      { icon: "sparkle", title: "AI chat forms", body: "Turn a form into a conversation. The assistant asks what it needs, answers questions from your knowledge base and books a time without a confirm step." },
      { icon: "layers", title: "Hosted, embedded or popup", body: "Serve the form as a hosted page, an embed on your site or a popup button, themed to your brand with a header, logo and contact buttons." },
      { icon: "chart", title: "Submission analytics", body: "Views, starts, completion rate and drop-off per question, so you can tighten the form." },
      { icon: "route", title: "Straight into the pipeline", body: "Each submission creates a lead with answers mapped to fields and tagged by source, then routing and workflows take over." },
    ],
    sections: [
      {
        eyebrow: "AI chat forms",
        title: "A form that talks back",
        body: "Switch a form to AI chat and visitors get a conversation instead of fields. The assistant uses your personality and knowledge base, offers options only when the visitor needs to choose, books an available slot, and submits the lead even if the visitor leaves part-way through.",
        bullets: ["Streams replies and remembers the visitor's name", "Offers your real booking slots inline, or 'no appointment, just send'", "Partial conversations still create a lead"],
        shot: shot("form-public.png", "A published AI chat form on a branded page", "AI chat form"),
      },
      {
        eyebrow: "Publishing",
        title: "Edit the draft,",
        accent: "publish when ready.",
        body: "Changes to a live form are parked in a draft until you publish, so the version on your site never breaks mid-edit. Theme the colours, fonts and header once and every form follows.",
        shot: shot("forms.png", "The forms list with published and draft states", "Forms"),
      },
    ],
    related: ["booking", "crm", "automations", "inbox"],
    faq: [
      { q: "Do I need to code or embed anything?", a: "No. Build forms with drag-and-drop and publish them as a hosted page, a simple embed or a popup button. One script tag is all your site needs." },
      { q: "What is an AI chat form?", a: "A form rendered as a conversation. The assistant collects the fields you need, answers questions from your knowledge base, offers your real booking slots and submits the lead. It works even if the visitor stops part-way." },
      { q: "Can forms show different questions to different people?", a: "Yes. Conditional logic lets you jump, show or skip questions based on earlier answers." },
      { q: "What happens after someone submits?", a: "A lead is created in your CRM with every answer mapped to a field and tagged by source. Routing assigns it, notifications go out and workflows can follow up on any channel." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "booking",
    name: "Booking pages",
    group: "Grow",
    eyebrow: "Booking",
    title: "Let customers book you,",
    accent: "no back-and-forth.",
    lede:
      "Share one link and let people pick a time in their own timezone, around your real availability. Reminders, reschedules and calendar invites are automatic, and every booking becomes a lead.",
    metaTitle: "Booking pages & scheduling",
    metaDescription:
      "Branded booking pages with real availability, timezone handling, custom questions, reminders, self-serve reschedule, calendar invites, and bookings that become CRM leads.",
    heroBullets: ["Weekly hours plus date overrides", "Invitees see slots in their own timezone", "Confirmation, ICS invite and reminders sent automatically"],
    heroShot: shot("booking-page.png", "A public booking page with available time slots", "Booking page"),
    capabilitiesTitle: "Everything you need to",
    capabilitiesAccent: "fill your calendar.",
    capabilitiesLede: "A booking experience customers finish, wired into the same CRM, automations and reminders as the rest of SpeedIQ.",
    capabilities: [
      { icon: "calendar", title: "Shareable booking pages", body: "Set services, durations, location and buffers, then share the link anywhere. No plugins required." },
      { icon: "clock", title: "Real availability", body: "Weekly hours once, date overrides for holidays, and slots only when you are actually free." },
      { icon: "globe", title: "Timezone aware", body: "Every visitor sees times in their own timezone, and confirmations reflect the right local time for both sides." },
      { icon: "form", title: "Custom questions", body: "Ask what you need before the meeting. The answers land on the lead." },
      { icon: "bell", title: "Reminders & reschedule", body: "Automatic reminders cut no-shows. Invitees reschedule or cancel from a self-serve link." },
      { icon: "sparkle", title: "Booked by the AI too", body: "The live chat and AI chat forms offer your open slots and book them in one step." },
    ],
    sections: [
      {
        eyebrow: "Your page",
        title: "Your own booking page",
        body: "Create a page with your services, meeting length, location and buffer times. Share it on your site, in an email signature or in a DM, and manage availability from the dashboard.",
        shot: shot("bookings.png", "The bookings dashboard with upcoming meetings", "Bookings"),
      },
      {
        eyebrow: "Show-ups",
        title: "Show-ups,",
        accent: "not no-shows.",
        body: "SpeedIQ emails a confirmation with a calendar invite, then reminders before the meeting. Need to move it? Invitees reschedule or cancel themselves, and your pipeline stays in sync.",
        shot: shot("booking-page.png", "Booking confirmation with reschedule options", "Booking page"),
      },
    ],
    related: ["forms", "inbox", "crm", "automations"],
    faq: [
      { q: "Do invitees need an account to book?", a: "No. Anyone with your link can pick a slot and confirm. They only interact with your public booking page." },
      { q: "How are timezones handled?", a: "Automatically. Visitors see your open slots in their own timezone, and the confirmation and calendar invite show the right local times for everyone." },
      { q: "Can people reschedule or cancel themselves?", a: "Yes. Every confirmation includes self-serve reschedule and cancel links, and your calendar and pipeline update automatically." },
      { q: "Where do bookings show up?", a: "In your CRM. Each booking creates or updates a lead with the answers to your questions, so you can follow up, sequence or assign it like any other lead." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "prospecting",
    name: "AI prospecting",
    group: "Grow",
    eyebrow: "AI prospecting",
    title: "Find your next customers",
    accent: "before they find you.",
    lede:
      "Scan Google Maps by business type and area, or run AI deep research on a target audience or known companies. Results are enriched, deduped against your contacts and imported straight into a pipeline.",
    metaTitle: "AI prospecting from Google Maps",
    metaDescription:
      "Source local businesses from Google Maps or run AI deep research, enrich and dedupe results, then import verified leads into your CRM pipeline.",
    heroBullets: ["Business type plus area, one click", "Enriched and deduped against existing contacts", "Import to a pipeline and stage, ready to message"],
    heroShot: shot("prospecting.png", "A Google Maps prospecting scan with results", "Prospecting"),
    capabilitiesTitle: "Turn a search into",
    capabilitiesAccent: "a pipeline.",
    capabilitiesLede: "Source, qualify and import local leads without a scraper, a spreadsheet or a second tool.",
    capabilities: [
      { icon: "map", title: "Maps scans", body: "Pick a business type, an area and a radius. SpeedIQ pulls every matching business with name, phone, website, rating and category." },
      { icon: "search", title: "Website enrichment", body: "Optionally visit each business's website to find emails and social profiles." },
      { icon: "merge", title: "Dedupe against your CRM", body: "Every prospect is checked against your existing contacts so you never import a duplicate." },
      { icon: "pipeline", title: "Import to a pipeline", body: "Tick the ones you want and import them into the right pipeline and stage. No CSV round-trips." },
      { icon: "sparkle", title: "AI deep research", body: "Where enabled, research a target audience or enrich known companies, paying one AI credit per verified lead delivered." },
      { icon: "megaphone", title: "Reach out the same day", body: "Imported prospects are ordinary leads, so campaigns, sequences, routing and automations all apply." },
    ],
    sections: [
      {
        eyebrow: "Scan",
        title: "Scan a map, fill a list",
        body: "Choose a business type, 'dentists in Austin', 'cafés in Bandra', and set a radius. SpeedIQ finds matching local businesses and pulls their public details automatically.",
        shot: shot("prospecting.png", "Prospecting results with ratings and contact details", "Prospecting"),
      },
      {
        eyebrow: "Import",
        title: "From map to pipeline",
        accent: "in one click.",
        body: "Review the clean list, select the prospects worth your time and import them into a pipeline and stage. They arrive as real leads, ready for a WhatsApp broadcast, an email sequence or a call.",
        shot: shot("pipeline.png", "A pipeline with newly imported prospects", "Pipeline"),
      },
    ],
    related: ["crm", "whatsapp", "email", "automations"],
    faq: [
      { q: "How does Maps prospecting work?", a: "Pick a business type and area. SpeedIQ scans Google Maps for matching businesses, collects their public details and checks them against your existing contacts so duplicates are skipped." },
      { q: "Where do the sourced leads go?", a: "Into the same CRM as the rest of your leads. Choose the pipeline and stage on import, and they arrive as contacts you can message, sequence or assign immediately." },
      { q: "Will I get duplicates of contacts I already have?", a: "No. Every prospect is checked against your existing contacts before import; duplicates are flagged and skipped." },
      { q: "What is AI deep research?", a: "Where enabled for your workspace, choose a target audience to discover or provide companies and domains to enrich. SpeedIQ charges one AI credit per verified lead delivered." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "crm",
    name: "CRM & pipelines",
    group: "Run",
    eyebrow: "CRM & pipeline",
    title: "A CRM built",
    accent: "for messaging.",
    lede:
      "Contacts merge every channel into one record. Leads move through drag-and-drop pipelines with scoring, source attribution, tasks and custom fields, and the whole cross-channel timeline sits beside each one.",
    metaTitle: "CRM & pipelines",
    metaDescription:
      "A CRM built for messaging: unified contacts, drag-and-drop pipelines, lead scoring, source attribution, tasks, custom fields and a cross-channel timeline for every person.",
    heroBullets: ["One record per person across every channel", "As many pipelines and stages as you need", "Scoring, attribution, tasks and custom fields"],
    heroShot: shot("pipeline.png", "A drag-and-drop pipeline with leads in stages", "Pipeline"),
    capabilitiesTitle: "The system of record for",
    capabilitiesAccent: "every conversation.",
    capabilitiesLede: "Contacts, pipelines, scoring and tasks that plug straight into your inbox, campaigns and automations.",
    capabilities: [
      { icon: "merge", title: "Unified contacts", body: "WhatsApp, email, SMS and social identities merge into one record, so history never scatters across channels." },
      { icon: "pipeline", title: "Pipelines & stages", body: "Model any sales process as drag-and-drop stages, run more than one pipeline and track won and lost with values." },
      { icon: "star", title: "Lead scoring", body: "Rules add points for source, tags, stage, value, custom fields or inactivity. Sort and filter by the 0–100 score." },
      { icon: "target", title: "Source attribution", body: "See exactly where each lead came from, forms, ads, social, prospecting or an inbound message, and what it produced." },
      { icon: "check", title: "Tasks & follow-ups", body: "Attach follow-ups with due dates to any lead, so nothing slips between a first reply and a closed deal." },
      { icon: "tag", title: "Custom fields & tags", body: "Shape records to your business, then segment and automate on top of them." },
    ],
    sections: [
      {
        eyebrow: "Contacts",
        title: "One record per person",
        body: "Every WhatsApp chat, email, SMS, DM, call and booking from the same person merges into a single contact with the full cross-channel timeline. No more four half-records for one customer.",
        shot: shot("lead.png", "A lead record with merged identities and timeline", "Lead"),
      },
      {
        eyebrow: "Pipelines",
        title: "Pipelines that fit",
        accent: "how you sell.",
        body: "Build stages for your process and drag leads across them as deals progress. Run separate pipelines for separate motions, and track value, owner and score on every card.",
        shot: shot("pipeline.png", "Pipeline board with stages and values", "Pipeline"),
      },
      {
        eyebrow: "Operations",
        title: "Records for the work after the deal",
        body: "Operations records keep service jobs, orders or cases attached to the contact, with printable documents, so the team that fulfils the work sees the same history as the team that sold it.",
        shot: shot("operations.png", "Operations records linked to contacts", "Operations"),
      },
    ],
    related: ["inbox", "automations", "analytics", "forms"],
    faq: [
      { q: "How do contacts get merged across channels?", a: "SpeedIQ links a person's phone, email and social identities into one contact as they reach you on different channels, and every conversation lands on that one timeline." },
      { q: "Can I run more than one pipeline?", a: "Yes. Create as many pipelines as your business needs, each with its own stages, and move leads with drag-and-drop while tracking value, owner and score." },
      { q: "Where does lead scoring come from?", a: "From rules you set. Each rule adds points when a lead matches it, for example its source, tags, stage, deal value, a custom field or hours since last activity." },
      { q: "Does the CRM connect to messaging and automations?", a: "Completely. Contacts and leads are the same records your inbox, campaigns, sequences and workflows act on, so a stage change or a new lead can trigger a message or a task instantly." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "automations",
    name: "Workflows & AI",
    group: "Run",
    eyebrow: "Workflows & AI",
    title: "Automations that reply,",
    accent: "route and follow up.",
    lede:
      "A visual, no-code workflow builder with triggers, conditions, delays and actions. Sequences for timed follow-up, routing rules for new leads, and an AI agent that answers with guardrails and a human hand-off.",
    metaTitle: "Workflows, sequences & AI auto-reply",
    metaDescription:
      "No-code workflows with triggers, conditions and actions, timed sequences, lead routing, and AI auto-reply with guardrails, knowledge base grounding and human hand-off.",
    heroBullets: ["Visual builder: trigger, conditions, actions, delays", "Sequences and lead routing out of the box", "AI replies grounded in your knowledge base"],
    heroShot: shot("workflow.png", "The visual workflow builder with a trigger and actions", "Workflow builder"),
    capabilitiesTitle: "Everything that keeps",
    capabilitiesAccent: "a lead moving.",
    capabilitiesLede: "Captured, answered, routed and followed up, with each channel's rules respected.",
    capabilities: [
      { icon: "bolt", title: "Triggers & conditions", body: "Start on a new lead, an inbound message, a stage change, a tag or a booking, then branch on any field with conditions and delays." },
      { icon: "route", title: "Actions & webhooks", body: "Assign, tag, move stage, send a message on any channel, create a task, notify the team or call a webhook. Chain as many as a flow needs." },
      { icon: "clock", title: "Sequences", body: "Timed, multi-step follow-up on email, SMS or WhatsApp that stops when the person replies." },
      { icon: "users", title: "Lead routing", body: "Round-robin, weighted or fixed assignment puts new leads with the right rep the moment they arrive." },
      { icon: "sparkle", title: "AI agent", body: "Draft or auto-send replies grounded in your knowledge base and instructions, book appointments, save details and hand off to a human." },
      { icon: "history", title: "Run history & audit", body: "See what fired and why a rule did not match. Every AI tool call is logged with confirmations, results and timing." },
    ],
    sections: [
      {
        eyebrow: "Builder",
        title: "Drag, connect, done",
        body: "A visual builder with triggers, branching conditions and delays. Add actions, assign, tag, move stage, message, create a task, call a webhook or run AI, and review each run in history.",
        shot: shot("workflow.png", "A workflow with branches and actions", "Workflow builder"),
      },
      {
        eyebrow: "AI agent",
        title: "AI that answers like",
        accent: "your team.",
        body: "Give the agent a personality, your knowledge base and your instructions. It replies on website chat, WhatsApp and social DMs inside each platform's rules, offers choices as tappable options, books appointments and confirms sensitive actions before acting. Set draft mode, office hours, rate limits and caps per project.",
        bullets: ["Google Gemini by default; switch to OpenAI, Claude or Grok per project", "Draft-for-review or auto-send, per flow", "A human can take over at any moment"],
        shot: shot("ai-conversations.png", "AI Conversations with replies, options and the audit trail", "AI Conversations"),
      },
      {
        eyebrow: "Routing",
        title: "Every lead to the right rep",
        body: "Round-robin, weighted or fixed routing assigns new leads from chat, ads, forms, webhooks, bookings or prospecting as they arrive, then automations follow up.",
        shot: shot("lead-routing.png", "Lead routing rules per pipeline", "Lead routing"),
      },
    ],
    related: ["inbox", "crm", "whatsapp", "forms"],
    faq: [
      { q: "Which AI models can I use?", a: "Google Gemini by default. Each project can switch to an OpenAI, Anthropic Claude or xAI Grok model instead. AI actions use AI credits from your plan's bucket." },
      { q: "Does the AI send automatically or just draft?", a: "Both, and you decide per flow. It can draft a reply for an agent to approve, or send automatically inside each platform's messaging rules, with office hours, rate limits and daily caps." },
      { q: "What can an automation actually do?", a: "Trigger on new leads, inbound messages, stage changes, tags or bookings; branch on any field with conditions and delays; then assign, tag, move a stage, send a message, create a task, reply with AI or call a webhook." },
      { q: "How does lead routing work?", a: "Choose round-robin, weighted or fixed assignment per pipeline. New leads from any source are assigned instantly, and every run is logged in the history." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "analytics",
    name: "Analytics & reporting",
    group: "Run",
    eyebrow: "Analytics",
    title: "The numbers that run",
    accent: "the business.",
    lede:
      "Delivery, opens, clicks and replies across channels, pipeline and revenue over time, lead-source attribution and credit usage, in the currency you work in.",
    metaTitle: "Analytics & reporting",
    metaDescription:
      "Cross-channel delivery and engagement, sales and revenue dashboards, lead-source attribution and credit usage, displayed in your currency.",
    heroBullets: ["Channels compared side by side", "Pipeline value and won deals over time", "Credit usage per channel and campaign"],
    heroShot: shot("analytics.png", "The analytics dashboard with channel and revenue charts", "Analytics"),
    capabilitiesTitle: "One scoreboard for",
    capabilitiesAccent: "every channel.",
    capabilitiesLede: "From message delivery to closed revenue, in comparable views instead of three stitched-together dashboards.",
    capabilities: [
      { icon: "chart", title: "Cross-channel delivery", body: "Sent, delivered, opened, clicked and replied, side by side for WhatsApp, email and SMS." },
      { icon: "pipeline", title: "Sales & revenue", body: "Pipeline value, won deals and revenue over time, with period-over-period comparison." },
      { icon: "target", title: "Lead-source reports", body: "Which forms, ads, social accounts and prospecting scans actually produce leads and pipeline." },
      { icon: "wallet", title: "Credit usage", body: "Consumption per credit bucket and per campaign, so spend never surprises you at renewal." },
      { icon: "globe", title: "Your currency", body: "Revenue and spend display in your chosen currency, USD, AED, SAR, INR and more." },
      { icon: "history", title: "Recorded activity", body: "Reports read the delivery, engagement, CRM and credit events the platform records. Refresh to see the latest." },
    ],
    sections: [
      {
        eyebrow: "Channels",
        title: "Every channel, one scoreboard",
        body: "Delivery, opens, clicks and replies for each channel sit side by side, so you can see which channel performs instead of stitching dashboards together.",
        shot: shot("analytics.png", "Channel analytics compared", "Analytics"),
      },
      {
        eyebrow: "Revenue",
        title: "Which source",
        accent: "actually pays off.",
        body: "Tie leads and revenue back to where they came from, forms, ads, social or prospecting, so you invest in the sources that build pipeline, not just the ones that get clicks.",
        shot: shot("leads-reports.png", "Lead reports by source and stage", "Lead reports"),
      },
    ],
    related: ["crm", "email", "sms", "whatsapp"],
    faq: [
      { q: "Where does the data come from?", a: "Reports read the delivery, engagement, CRM and credit events recorded by SpeedIQ. Refresh a report to see the latest activity." },
      { q: "Can I compare channels against each other?", a: "Yes. Channel metrics sit in one view so you can see which channel delivers best and where replies and revenue actually come from." },
      { q: "Does it show revenue, not just message stats?", a: "It does. Sales and revenue dashboards track pipeline value and won deals over time, alongside the messaging metrics." },
      { q: "Which currency are figures shown in?", a: "Yours. Revenue and spend display in your chosen currency, converted at daily rates." },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "team",
    name: "Team & permissions",
    group: "Run",
    eyebrow: "Team & permissions",
    title: "Invite everyone.",
    accent: "Protect everything.",
    lede:
      "Add teammates without per-seat charges, give each one the right role, and use the masked agent role so reps can work leads without ever seeing raw phone numbers or emails.",
    metaTitle: "Team roles & permissions",
    metaDescription:
      "Invite teammates without per-seat fees, set roles, use the masked agent role that hides contact PII, keep ownership clear and review every AI action.",
    heroBullets: ["No per-seat charges, within your plan's member limit", "Owner, admin, editor, viewer and masked agent roles", "English and Arabic interface with right-to-left layout"],
    heroShot: shot("team.png", "Team members and their roles", "Team"),
    capabilitiesTitle: "Right access for",
    capabilitiesAccent: "every member.",
    capabilitiesLede: "Roles, assignment and privacy controls that let you add everyone and still keep customer data protected.",
    capabilities: [
      { icon: "users", title: "No per-seat charges", body: "Invite sales, support and ops without paying by the head. Your bill is for the plan and credits." },
      { icon: "lock", title: "Roles", body: "Owner, admin, editor, viewer and agent. Pick the role that fits each person's job." },
      { icon: "eye-off", title: "Masked agent role", body: "Phone numbers and emails are replaced by a coded ID, enforced at the database level. Reps still chat, assign and move leads." },
      { icon: "layers", title: "Projects as workspaces", body: "Separate brands or clients into projects, each with its own channels, team, settings and billing." },
      { icon: "language", title: "English & Arabic", body: "The interface runs in English or Arabic with full right-to-left layout, per user." },
      { icon: "history", title: "AI action log", body: "Every tool the AI tried to use, with confirmations, results, failures and timing, under AI Conversations." },
    ],
    sections: [
      {
        eyebrow: "Privacy",
        title: "Work leads without exposing PII",
        body: "Assign the masked agent role and contact details are replaced with a coded ID. Reps can still chat, assign and move leads; they just never see raw personal data.",
        shot: shot("team.png", "Role assignment in team settings", "Team"),
      },
      {
        eyebrow: "Ownership",
        title: "Clear ownership,",
        accent: "built in.",
        body: "Assignment keeps every conversation owned, routing hands new leads to the right person automatically, and the AI action log shows each tool the AI used so you can check its work.",
        shot: shot("ai-conversations.png", "The AI action audit under AI Conversations", "AI audit"),
      },
    ],
    related: ["inbox", "crm", "automations", "analytics"],
    faq: [
      { q: "Is there really no per-seat charge?", a: "There are no per-seat charges. You pay for the plan and usage, while the number of members follows the member limit on that plan." },
      { q: "What does the masked agent role do?", a: "It hides contact PII. Members with the agent role see a coded ID instead of raw phone numbers and emails, so they can work leads without accessing personal data. The masking is enforced at the database level." },
      { q: "Can I separate clients or brands?", a: "Yes. Each project is its own workspace with its own channels, team, settings and billing. Switch between them from the dashboard." },
      { q: "Can I review what the AI did?", a: "Yes. The AI action log under AI Conversations lists every tool the AI tried to use, with confirmations, results, failures and timing." },
    ],
  },
];

export const FEATURE_BY_SLUG: Record<string, FeatureContent> = Object.fromEntries(FEATURES.map((f) => [f.slug, f]));

export const FEATURE_GROUPS: { label: FeatureContent["group"]; blurb: string }[] = [
  { label: "Channels", blurb: "Every way customers reach you, in one inbox." },
  { label: "Grow", blurb: "Fill the pipeline from forms, bookings, ads and the map." },
  { label: "Run", blurb: "Work every deal, automate the follow-up, see the numbers." },
];
