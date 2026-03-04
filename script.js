const schemaDefinitions = [
  {
    id: "article",
    name: "Article",
    short: "Blog posts, news & guides.",
    type: "Article",
    fields: [
      {
        id: "headline",
        label: "Headline",
        type: "text",
        required: true,
        placeholder: "How to Optimize Schema Markup in 2026",
        hint: "Main title of the article.",
      },
      {
        id: "description",
        label: "Description",
        type: "textarea",
        rows: 4,
        required: true,
        placeholder: "A concise summary that will appear in search results.",
        hint: "1–2 sentence summary of the content.",
      },
      {
        id: "author",
        label: "Author Name",
        type: "text",
        required: true,
        placeholder: "Jane Doe",
        hint: "Person or organization that wrote the article.",
      },
      {
        id: "datePublished",
        label: "Publish Date",
        type: "date",
        required: true,
        placeholder: "",
        hint: "When the article was first published.",
      },
      {
        id: "image",
        label: "Featured Image URL",
        type: "text",
        required: false,
        placeholder: "https://example.com/images/article-cover.jpg",
        hint: "High-quality image representing the article.",
      },
      {
        id: "url",
        label: "Canonical URL",
        type: "text",
        required: true,
        placeholder: "https://example.com/blog/schema-optimization",
        hint: "Preferred URL for this article.",
      },
    ],
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    short: "Breadcrumb navigation paths.",
    type: "BreadcrumbList",
    fields: [
      {
        id: "items",
        label: "Breadcrumb Items (JSON)",
        type: "textarea",
        rows: 6,
        required: true,
        placeholder:
          '[{"name":"Home","url":"https://example.com/"},{"name":"Blog","url":"https://example.com/blog"},{"name":"Post","url":"https://example.com/blog/schema"}]',
        hint: "Array of {name, url}. Positions will be auto-generated.",
      },
      {
        id: "pageUrl",
        label: "Page URL (Optional)",
        type: "text",
        required: false,
        placeholder: "https://example.com/blog/schema",
        hint: "If provided, used as the page identifier.",
      },
    ],
  },
  {
    id: "event",
    name: "Event",
    short: "Events, webinars & meetups.",
    type: "Event",
    fields: [
      { id: "name", label: "Event Name", type: "text", required: true, placeholder: "Schema Masterclass 2026", hint: "Public title of the event." },
      { id: "description", label: "Description", type: "textarea", rows: 4, required: true, placeholder: "A premium deep-dive into structured data for SEO teams.", hint: "Short overview shown to users." },
      { id: "startDate", label: "Start Date/Time (ISO or date)", type: "text", required: true, placeholder: "2026-04-18T19:00:00-05:00", hint: "Use ISO 8601 date/time if possible." },
      { id: "endDate", label: "End Date/Time (Optional)", type: "text", required: false, placeholder: "2026-04-18T21:00:00-05:00", hint: "Optional end time." },
      { id: "eventUrl", label: "Event URL", type: "text", required: true, placeholder: "https://example.com/events/schema-masterclass", hint: "Canonical URL for the event page." },
      { id: "image", label: "Image URL (Optional)", type: "text", required: false, placeholder: "https://example.com/images/event.jpg", hint: "Promotional image." },
      { id: "locationName", label: "Location Name (Optional)", type: "text", required: false, placeholder: "SchemaExpertify HQ", hint: "Venue name for in-person events." },
      { id: "locationAddress", label: "Location Address (Optional)", type: "text", required: false, placeholder: "123 Optimizer Ave, Austin, TX 73301, US", hint: "Full address string (simple mode)." },
      { id: "onlineUrl", label: "Online Event URL (Optional)", type: "text", required: false, placeholder: "https://example.com/live/schema-masterclass", hint: "If this is online, provide streaming/meeting URL." },
      { id: "price", label: "Offer Price (Optional)", type: "number", required: false, placeholder: "99", hint: "Numeric price only." },
      { id: "priceCurrency", label: "Currency (Optional)", type: "text", required: false, placeholder: "USD", hint: "ISO 4217 currency code." },
      { id: "availability", label: "Availability (Optional)", type: "text", required: false, placeholder: "https://schema.org/InStock", hint: "Use schema.org availability URL." },
    ],
  },
  {
    id: "howto",
    name: "HowTo",
    short: "Step-by-step tutorials.",
    type: "HowTo",
    fields: [
      { id: "name", label: "HowTo Name", type: "text", required: true, placeholder: "How to add JSON-LD schema", hint: "Title of the tutorial." },
      { id: "description", label: "Description", type: "textarea", rows: 4, required: true, placeholder: "A fast, reliable workflow for implementing structured data.", hint: "Short overview." },
      { id: "steps", label: "Steps (JSON)", type: "textarea", rows: 8, required: true, placeholder: '[{"name":"Pick schema type","text":"Choose the schema that fits your page."},{"name":"Fill fields","text":"Enter the required data."},{"name":"Deploy","text":"Paste JSON-LD into the page and test."}]', hint: "Array of {name, text}. We’ll output HowToStep objects." },
      { id: "totalTime", label: "Total Time (Optional, ISO 8601)", type: "text", required: false, placeholder: "PT15M", hint: "Example: PT15M (15 minutes)." },
      { id: "supply", label: "Supplies (Optional, one per line)", type: "textarea", rows: 4, required: false, placeholder: "Access to website CMS\nGoogle Rich Results Test", hint: "Supply items, one per line." },
      { id: "tool", label: "Tools (Optional, one per line)", type: "textarea", rows: 4, required: false, placeholder: "SchemaExpertify\nChrome DevTools", hint: "Tools, one per line." },
    ],
  },
  {
    id: "jobposting",
    name: "JobPosting",
    short: "Jobs & careers pages.",
    type: "JobPosting",
    fields: [
      { id: "title", label: "Job Title", type: "text", required: true, placeholder: "SEO Specialist (Schema)", hint: "Role title." },
      { id: "description", label: "Job Description (HTML or text)", type: "textarea", rows: 6, required: true, placeholder: "Own structured data strategy across high-traffic sites…", hint: "Full description; can include basic HTML." },
      { id: "datePosted", label: "Date Posted", type: "date", required: true, placeholder: "", hint: "Date the position was posted." },
      { id: "validThrough", label: "Valid Through (Optional)", type: "date", required: false, placeholder: "", hint: "When applications close." },
      { id: "employmentType", label: "Employment Type (Optional)", type: "text", required: false, placeholder: "FULL_TIME", hint: "E.g. FULL_TIME, PART_TIME, CONTRACTOR." },
      { id: "hiringOrganizationName", label: "Hiring Organization Name", type: "text", required: true, placeholder: "SchemaExpertify", hint: "Company name." },
      { id: "hiringOrganizationUrl", label: "Hiring Organization URL", type: "text", required: true, placeholder: "https://example.com", hint: "Company website URL." },
      { id: "jobLocation", label: "Job Location (Address text)", type: "text", required: false, placeholder: "Austin, TX, US", hint: "For on-site/hybrid. Leave empty for fully remote roles." },
      { id: "applicantLocationRequirements", label: "Applicant Location (Optional)", type: "text", required: false, placeholder: "US", hint: "Country/region restriction (simple mode)." },
      { id: "baseSalaryValue", label: "Base Salary (Optional)", type: "number", required: false, placeholder: "120000", hint: "Numeric amount only." },
      { id: "baseSalaryCurrency", label: "Salary Currency (Optional)", type: "text", required: false, placeholder: "USD", hint: "ISO 4217 code." },
      { id: "baseSalaryUnitText", label: "Salary Unit (Optional)", type: "text", required: false, placeholder: "YEAR", hint: "HOUR, WEEK, MONTH, YEAR." },
      { id: "jobUrl", label: "Job Posting URL", type: "text", required: true, placeholder: "https://example.com/careers/seo-schema-specialist", hint: "Canonical URL for the job post." },
    ],
  },
  {
    id: "movie",
    name: "Movie",
    short: "Movies and theatrical releases.",
    type: "Movie",
    fields: [
      { id: "name", label: "Movie Name", type: "text", required: true, placeholder: "The Schema Chronicles", hint: "Movie title." },
      { id: "description", label: "Description", type: "textarea", rows: 4, required: false, placeholder: "A thriller about perfect markup and imperfect humans.", hint: "Optional synopsis." },
      { id: "image", label: "Image URL (Optional)", type: "text", required: false, placeholder: "https://example.com/images/movie.jpg", hint: "Poster or cover art." },
      { id: "dateCreated", label: "Release Date (Optional)", type: "date", required: false, placeholder: "", hint: "Release date if known." },
      { id: "director", label: "Director (Optional)", type: "text", required: false, placeholder: "Alex Rivera", hint: "Director name." },
      { id: "actors", label: "Actors (Optional, one per line)", type: "textarea", rows: 4, required: false, placeholder: "Sam Lee\nJordan Smith", hint: "Actor names, one per line." },
      { id: "url", label: "Movie URL (Optional)", type: "text", required: false, placeholder: "https://example.com/movies/schema-chronicles", hint: "Canonical page URL." },
    ],
  },
  {
    id: "organization",
    name: "Organization",
    short: "Brand, company & publisher info.",
    type: "Organization",
    fields: [
      { id: "name", label: "Organization Name", type: "text", required: true, placeholder: "SchemaExpertify", hint: "Official brand name." },
      { id: "url", label: "Website URL", type: "text", required: true, placeholder: "https://example.com", hint: "Canonical website URL." },
      { id: "logo", label: "Logo URL (Optional)", type: "text", required: false, placeholder: "https://example.com/logo.png", hint: "Square logo is best." },
      { id: "sameAs", label: "Social / SameAs (Optional, one per line)", type: "textarea", rows: 5, required: false, placeholder: "https://twitter.com/...\nhttps://www.linkedin.com/company/...", hint: "Official profile URLs." },
      { id: "telephone", label: "Phone (Optional)", type: "text", required: false, placeholder: "+1-555-123-4567", hint: "Primary phone number." },
      { id: "contactType", label: "Contact Type (Optional)", type: "text", required: false, placeholder: "customer support", hint: "E.g. customer support, sales." },
      { id: "address", label: "Address (Optional)", type: "text", required: false, placeholder: "123 Optimizer Ave, Austin, TX 73301, US", hint: "Full address string (simple mode)." },
    ],
  },
  {
    id: "person",
    name: "Person",
    short: "People, authors & profiles.",
    type: "Person",
    fields: [
      { id: "name", label: "Full Name", type: "text", required: true, placeholder: "Jane Doe", hint: "Person’s name." },
      { id: "jobTitle", label: "Job Title (Optional)", type: "text", required: false, placeholder: "SEO Lead", hint: "Role/title." },
      { id: "url", label: "Profile URL (Optional)", type: "text", required: false, placeholder: "https://example.com/about/jane-doe", hint: "Canonical profile page URL." },
      { id: "image", label: "Image URL (Optional)", type: "text", required: false, placeholder: "https://example.com/images/jane.jpg", hint: "Headshot URL." },
      { id: "worksFor", label: "Works For (Optional)", type: "text", required: false, placeholder: "SchemaExpertify", hint: "Organization name." },
      { id: "sameAs", label: "SameAs (Optional, one per line)", type: "textarea", rows: 5, required: false, placeholder: "https://www.linkedin.com/in/...\nhttps://twitter.com/...", hint: "Official profile URLs." },
    ],
  },
  {
    id: "recipe",
    name: "Recipe",
    short: "Recipes and cooking instructions.",
    type: "Recipe",
    fields: [
      { id: "name", label: "Recipe Name", type: "text", required: true, placeholder: "Schema-Friendly Pancakes", hint: "Name of the dish." },
      { id: "description", label: "Description (Optional)", type: "textarea", rows: 4, required: false, placeholder: "Fluffy pancakes with a perfectly structured topping strategy.", hint: "Short summary." },
      { id: "image", label: "Image URL (Optional)", type: "text", required: false, placeholder: "https://example.com/images/pancakes.jpg", hint: "Main image URL." },
      { id: "author", label: "Author (Optional)", type: "text", required: false, placeholder: "Chef Jane", hint: "Recipe author name." },
      { id: "datePublished", label: "Publish Date (Optional)", type: "date", required: false, placeholder: "", hint: "When the recipe was published." },
      { id: "prepTime", label: "Prep Time (Optional, ISO 8601)", type: "text", required: false, placeholder: "PT10M", hint: "Example: PT10M." },
      { id: "cookTime", label: "Cook Time (Optional, ISO 8601)", type: "text", required: false, placeholder: "PT15M", hint: "Example: PT15M." },
      { id: "totalTime", label: "Total Time (Optional, ISO 8601)", type: "text", required: false, placeholder: "PT25M", hint: "Example: PT25M." },
      { id: "recipeYield", label: "Yield (Optional)", type: "text", required: false, placeholder: "4 servings", hint: "How much the recipe makes." },
      { id: "recipeIngredient", label: "Ingredients (one per line)", type: "textarea", rows: 7, required: true, placeholder: "2 cups flour\n1 tbsp sugar\n2 eggs", hint: "One ingredient per line." },
      { id: "recipeInstructions", label: "Instructions (one step per line)", type: "textarea", rows: 8, required: true, placeholder: "Mix dry ingredients.\nWhisk eggs and milk.\nCombine and cook.", hint: "We’ll convert lines into HowToStep objects." },
      { id: "keywords", label: "Keywords (Optional, comma-separated)", type: "text", required: false, placeholder: "breakfast,pancakes", hint: "Comma-separated keywords." },
    ],
  },
  {
    id: "review",
    name: "Review",
    short: "Reviews & ratings (snippets).",
    type: "Review",
    fields: [
      { id: "itemType", label: "Item Type", type: "text", required: true, placeholder: "Product", hint: "Thing being reviewed, e.g. Product, LocalBusiness, SoftwareApplication." },
      { id: "itemName", label: "Item Name", type: "text", required: true, placeholder: "SchemaExpertify Pro", hint: "Name of the item being reviewed." },
      { id: "itemUrl", label: "Item URL (Optional)", type: "text", required: false, placeholder: "https://example.com/pricing/pro", hint: "Canonical URL of the item." },
      { id: "author", label: "Author Name", type: "text", required: true, placeholder: "Alex Kim", hint: "Reviewer name." },
      { id: "datePublished", label: "Review Date (Optional)", type: "date", required: false, placeholder: "", hint: "When the review was published." },
      { id: "reviewBody", label: "Review Body", type: "textarea", rows: 5, required: true, placeholder: "Exceptional output quality and a premium workflow…", hint: "Full review text." },
      { id: "ratingValue", label: "Rating Value", type: "number", required: true, placeholder: "5", hint: "Numeric rating value." },
      { id: "bestRating", label: "Best Rating (Optional)", type: "number", required: false, placeholder: "5", hint: "Max rating value (defaults to 5 if blank)." },
      { id: "worstRating", label: "Worst Rating (Optional)", type: "number", required: false, placeholder: "1", hint: "Min rating value (defaults to 1 if blank)." },
    ],
  },
  {
    id: "video",
    name: "Video",
    short: "Video pages and media content.",
    type: "VideoObject",
    fields: [
      { id: "name", label: "Video Name", type: "text", required: true, placeholder: "SchemaExpertify Walkthrough", hint: "Title of the video." },
      { id: "description", label: "Description", type: "textarea", rows: 4, required: true, placeholder: "A quick tour of the premium schema dashboard.", hint: "Short description of the video." },
      { id: "thumbnailUrl", label: "Thumbnail URL", type: "text", required: true, placeholder: "https://example.com/images/video-thumb.jpg", hint: "Thumbnail image URL." },
      { id: "uploadDate", label: "Upload Date", type: "date", required: true, placeholder: "", hint: "Video upload date." },
      { id: "duration", label: "Duration (Optional, ISO 8601)", type: "text", required: false, placeholder: "PT2M30S", hint: "Example: PT2M30S." },
      { id: "contentUrl", label: "Content URL (Optional)", type: "text", required: false, placeholder: "https://cdn.example.com/videos/walkthrough.mp4", hint: "Direct video file URL if available." },
      { id: "embedUrl", label: "Embed URL (Optional)", type: "text", required: false, placeholder: "https://www.youtube.com/embed/xxxx", hint: "Embed URL (YouTube/Vimeo/etc.)." },
      { id: "url", label: "Page URL", type: "text", required: true, placeholder: "https://example.com/videos/schemaexpertify-walkthrough", hint: "Canonical page URL where the video is hosted." },
      { id: "publisherName", label: "Publisher Name (Optional)", type: "text", required: false, placeholder: "SchemaExpertify", hint: "Publisher/brand name." },
      { id: "publisherLogo", label: "Publisher Logo URL (Optional)", type: "text", required: false, placeholder: "https://example.com/logo.png", hint: "Publisher logo URL." },
    ],
  },
  {
    id: "course",
    name: "Course",
    short: "Courses and educational offerings.",
    type: "Course",
    fields: [
      { id: "name", label: "Course Name", type: "text", required: true, placeholder: "Advanced Schema Markup", hint: "Course title." },
      { id: "description", label: "Description", type: "textarea", rows: 5, required: true, placeholder: "A premium curriculum for implementing structured data at scale.", hint: "Course description." },
      { id: "providerName", label: "Provider Name", type: "text", required: true, placeholder: "SchemaExpertify Academy", hint: "Organization offering the course." },
      { id: "providerUrl", label: "Provider URL", type: "text", required: true, placeholder: "https://example.com/academy", hint: "Provider website URL." },
      { id: "url", label: "Course URL", type: "text", required: true, placeholder: "https://example.com/courses/advanced-schema", hint: "Canonical URL for the course page." },
      { id: "image", label: "Image URL (Optional)", type: "text", required: false, placeholder: "https://example.com/images/course.jpg", hint: "Course image URL." },
      { id: "price", label: "Price (Optional)", type: "number", required: false, placeholder: "199", hint: "Numeric price only." },
      { id: "priceCurrency", label: "Currency (Optional)", type: "text", required: false, placeholder: "USD", hint: "ISO 4217 currency code." },
    ],
  },
  {
    id: "faq",
    name: "FAQ",
    short: "FAQ pages & help centers.",
    type: "FAQPage",
    fields: [
      {
        id: "mainEntity",
        label: "Questions & Answers (JSON)",
        type: "textarea",
        rows: 8,
        required: true,
        placeholder:
          '[{"question": "What is SchemaExpertify?", "answer": "A premium schema markup generator."}]',
        hint: "Provide an array of question/answer objects.",
      },
      {
        id: "url",
        label: "FAQ Page URL",
        type: "text",
        required: true,
        placeholder: "https://example.com/help/schema-faq",
        hint: "URL of the FAQ page on your site.",
      },
    ],
  },
  {
    id: "product",
    name: "Product",
    short: "Products, SaaS plans & offers.",
    type: "Product",
    fields: [
      { id: "name", label: "Product Name", type: "text", required: true, placeholder: "SchemaExpertify Pro", hint: "Name of your product or plan." },
      { id: "description", label: "Product Description", type: "textarea", rows: 4, required: true, placeholder: "Premium schema markup automation for SEO professionals.", hint: "Convincing, human-readable summary." },
      { id: "sku", label: "SKU / Plan ID", type: "text", required: false, placeholder: "SX-PRO-2026", hint: "Internal ID or SKU, if applicable." },
      { id: "brand", label: "Brand (Optional)", type: "text", required: false, placeholder: "SchemaExpertify", hint: "Brand name." },
      { id: "image", label: "Image URL (Optional)", type: "text", required: false, placeholder: "https://example.com/images/product.jpg", hint: "Main product image." },
      { id: "price", label: "Price", type: "number", required: true, placeholder: "49", hint: "Numeric price, without currency symbol." },
      { id: "priceCurrency", label: "Currency", type: "text", required: true, placeholder: "USD", hint: "Use ISO 4217 currency codes (USD, EUR, GBP…)."},
      { id: "availability", label: "Availability (Optional)", type: "text", required: false, placeholder: "https://schema.org/InStock", hint: "Use schema.org URL value for availability." },
      { id: "url", label: "Product URL", type: "text", required: true, placeholder: "https://example.com/pricing/pro", hint: "URL of the product detail or pricing page." },
    ],
  },
  {
    id: "localbusiness",
    name: "Local Business",
    short: "Physical locations & service areas.",
    type: "LocalBusiness",
    fields: [
      { id: "name", label: "Business Name", type: "text", required: true, placeholder: "SchemaExpertify Studio", hint: "Official business or brand name." },
      { id: "streetAddress", label: "Street Address", type: "text", required: true, placeholder: "123 Optimizer Ave", hint: "Street, number and suite." },
      { id: "addressLocality", label: "City", type: "text", required: true, placeholder: "Austin", hint: "City or locality." },
      { id: "addressRegion", label: "State / Region", type: "text", required: true, placeholder: "TX", hint: "State, province or region." },
      { id: "postalCode", label: "Postal Code", type: "text", required: true, placeholder: "73301", hint: "ZIP or postal code." },
      { id: "addressCountry", label: "Country", type: "text", required: false, placeholder: "US", hint: "Country code or name (optional)." },
      { id: "telephone", label: "Phone", type: "text", required: true, placeholder: "+1-555-123-4567", hint: "Primary business phone number." },
      { id: "url", label: "Website URL", type: "text", required: true, placeholder: "https://example.com", hint: "Homepage or location-specific URL." },
    ],
  },
  {
    id: "website",
    name: "WebSite",
    short: "Sitelinks Search Box support.",
    type: "WebSite",
    fields: [
      { id: "name", label: "Site Name", type: "text", required: true, placeholder: "SchemaExpertify", hint: "Website name." },
      { id: "url", label: "Site URL", type: "text", required: true, placeholder: "https://example.com", hint: "Canonical homepage URL." },
      { id: "searchTarget", label: "Search URL Template (Optional)", type: "text", required: false, placeholder: "https://example.com/search?q={search_term_string}", hint: "Sitelinks searchbox target template." },
    ],
  },
  {
    id: "softwareapp",
    name: "Software Application",
    short: "Apps, tools & software products.",
    type: "SoftwareApplication",
    fields: [
      { id: "name", label: "App Name", type: "text", required: true, placeholder: "SchemaExpertify", hint: "Software name." },
      { id: "operatingSystem", label: "Operating System (Optional)", type: "text", required: false, placeholder: "Web", hint: "E.g. Web, iOS, Android, Windows." },
      { id: "applicationCategory", label: "Category (Optional)", type: "text", required: false, placeholder: "BusinessApplication", hint: "E.g. BusinessApplication, DeveloperApplication." },
      { id: "description", label: "Description (Optional)", type: "textarea", rows: 4, required: false, placeholder: "Premium schema generation and validation dashboard.", hint: "Short description." },
      { id: "url", label: "App URL", type: "text", required: true, placeholder: "https://example.com", hint: "Canonical product URL." },
      { id: "price", label: "Price (Optional)", type: "number", required: false, placeholder: "49", hint: "Numeric price." },
      { id: "priceCurrency", label: "Currency (Optional)", type: "text", required: false, placeholder: "USD", hint: "ISO 4217 currency code." },
    ],
  },
];

const state = {
  activeSchemaId: schemaDefinitions[0].id,
  values: {},
};

function init() {
  renderSchemaList();
  switchSchema(state.activeSchemaId);
  bindCopy();
  createGoogleTestButton();
}

function renderSchemaList() {
  const container = document.getElementById("schema-list");
  container.innerHTML = "";

  schemaDefinitions.forEach((schema) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className =
      "schema-item type-btn" + (schema.id === state.activeSchemaId ? " active" : "");
    item.dataset.schemaId = schema.id;

    item.innerHTML = `
      <div class="schema-item-title">${schema.name}</div>
      <div class="schema-item-subtitle">${schema.short}</div>
      <div class="schema-item-meta">
        <span class="schema-pill">${schema.type}</span>
      </div>
    `;

    item.addEventListener("click", () => {
      if (state.activeSchemaId !== schema.id) {
        switchSchema(schema.id);
      }
    });

    container.appendChild(item);
  });
}

function switchSchema(schemaId) {
  state.activeSchemaId = schemaId;
  renderSchemaList();

  const schema = schemaDefinitions.find((s) => s.id === schemaId);
  const titleEl = document.getElementById("schema-title");
  const descEl = document.getElementById("schema-description");

  titleEl.textContent = schema.name;
  descEl.textContent = `Configure the fields for your ${schema.name} structured data.`;

  renderSchemaForm(schema);
  updateJsonPreview();
}

function renderSchemaForm(schema) {
  const form = document.getElementById("schema-form");
  form.innerHTML = "";

  schema.fields.forEach((field) => {
    const wrapper = document.createElement("div");
    wrapper.className = "form-field";

    const existing = state.values[state.activeSchemaId]?.[field.id] ?? "";

    const labelId = `field-${schema.id}-${field.id}`;

    const header = document.createElement("div");
    header.className = "form-field-header";
    header.innerHTML = `
      <div class="field-label">${field.label}</div>
      <div class="field-meta">
        ${
          field.required
            ? '<span class="field-required">Required</span>'
            : '<span>Optional</span>'
        }
      </div>
    `;

    const hint = document.createElement("div");
    hint.className = "field-hint";
    hint.textContent = field.hint || "";

    let input;
    if (field.type === "textarea") {
      input = document.createElement("textarea");
      input.rows = typeof field.rows === "number" ? field.rows : 3;
    } else {
      input = document.createElement("input");
      input.type = field.type === "date" ? "date" : field.type;
    }

    input.className = "field-input";
    input.id = labelId;
    input.placeholder = field.placeholder || "";
    input.value = existing;

    input.addEventListener("input", () => {
      if (!state.values[state.activeSchemaId]) {
        state.values[state.activeSchemaId] = {};
      }
      state.values[state.activeSchemaId][field.id] = input.value;
      updateJsonPreview();
    });

    wrapper.appendChild(header);
    wrapper.appendChild(hint);
    wrapper.appendChild(input);

    form.appendChild(wrapper);
  });
}

function buildJsonLd() {
  const schema = schemaDefinitions.find((s) => s.id === state.activeSchemaId);
  const values = state.values[state.activeSchemaId] || {};

  const json = {
    "@context": "https://schema.org",
    "@type": schema.type,
  };

  switch (schema.id) {
    case "article":
      if (values.headline) json.headline = values.headline;
      if (values.description) json.description = values.description;
      if (values.author) json.author = { "@type": "Person", name: values.author };
      if (values.datePublished) json.datePublished = values.datePublished;
      if (values.image) json.image = values.image;
      if (values.url) {
        json.mainEntityOfPage = {
          "@type": "WebPage",
          "@id": values.url,
        };
      }
      break;
    case "breadcrumb": {
      if (values.pageUrl) {
        json["@id"] = values.pageUrl;
      }

      const items = parseJsonArray(values.items);
      json.itemListElement = items.map((it, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: it?.name ?? "",
        item: it?.url ?? "",
      }));
      break;
    }
    case "event":
      if (values.name) json.name = values.name;
      if (values.description) json.description = values.description;
      if (values.startDate) json.startDate = values.startDate;
      if (values.endDate) json.endDate = values.endDate;
      if (values.eventUrl) json.url = values.eventUrl;
      if (values.image) json.image = values.image;

      if (values.locationName || values.locationAddress) {
        json.location = {
          "@type": "Place",
        };
        if (values.locationName) json.location.name = values.locationName;
        if (values.locationAddress) {
          json.location.address = {
            "@type": "PostalAddress",
            streetAddress: values.locationAddress,
          };
        }
      }

      if (values.onlineUrl) {
        json.location = {
          "@type": "VirtualLocation",
          url: values.onlineUrl,
        };
      }

      if (values.price || values.priceCurrency || values.availability) {
        json.offers = {
          "@type": "Offer",
        };
        if (isPresent(values.price)) json.offers.price = toNumber(values.price);
        if (values.priceCurrency) json.offers.priceCurrency = values.priceCurrency;
        if (values.availability) json.offers.availability = values.availability;
        if (values.eventUrl) json.offers.url = values.eventUrl;
      }
      break;
    case "howto": {
      if (values.name) json.name = values.name;
      if (values.description) json.description = values.description;
      if (values.totalTime) json.totalTime = values.totalTime;

      const supplies = splitLines(values.supply);
      if (supplies.length) {
        json.supply = supplies.map((s) => ({ "@type": "HowToSupply", name: s }));
      }

      const tools = splitLines(values.tool);
      if (tools.length) {
        json.tool = tools.map((t) => ({ "@type": "HowToTool", name: t }));
      }

      const steps = parseJsonArray(values.steps);
      json.step = steps.map((s) => ({
        "@type": "HowToStep",
        name: s?.name ?? undefined,
        text: s?.text ?? "",
      }));
      break;
    }
    case "jobposting":
      if (values.title) json.title = values.title;
      if (values.description) json.description = values.description;
      if (values.datePosted) json.datePosted = values.datePosted;
      if (values.validThrough) json.validThrough = values.validThrough;
      if (values.employmentType) json.employmentType = values.employmentType;
      if (values.jobUrl) json.url = values.jobUrl;

      if (values.hiringOrganizationName || values.hiringOrganizationUrl) {
        json.hiringOrganization = {
          "@type": "Organization",
        };
        if (values.hiringOrganizationName) json.hiringOrganization.name = values.hiringOrganizationName;
        if (values.hiringOrganizationUrl) json.hiringOrganization.sameAs = values.hiringOrganizationUrl;
      }

      if (values.jobLocation) {
        json.jobLocation = {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: values.jobLocation,
          },
        };
      }

      if (values.applicantLocationRequirements) {
        json.applicantLocationRequirements = {
          "@type": "Country",
          name: values.applicantLocationRequirements,
        };
      }

      if (isPresent(values.baseSalaryValue) || values.baseSalaryCurrency || values.baseSalaryUnitText) {
        json.baseSalary = {
          "@type": "MonetaryAmount",
        };
        if (values.baseSalaryCurrency) json.baseSalary.currency = values.baseSalaryCurrency;
        json.baseSalary.value = {
          "@type": "QuantitativeValue",
        };
        if (isPresent(values.baseSalaryValue)) json.baseSalary.value.value = toNumber(values.baseSalaryValue);
        if (values.baseSalaryUnitText) json.baseSalary.value.unitText = values.baseSalaryUnitText;
      }
      break;
    case "movie":
      if (values.name) json.name = values.name;
      if (values.description) json.description = values.description;
      if (values.image) json.image = values.image;
      if (values.dateCreated) json.dateCreated = values.dateCreated;
      if (values.url) json.url = values.url;
      if (values.director) json.director = { "@type": "Person", name: values.director };
      {
        const actors = splitLines(values.actors);
        if (actors.length) json.actor = actors.map((a) => ({ "@type": "Person", name: a }));
      }
      break;
    case "organization":
      if (values.name) json.name = values.name;
      if (values.url) json.url = values.url;
      if (values.logo) json.logo = values.logo;
      {
        const sameAs = splitLines(values.sameAs);
        if (sameAs.length) json.sameAs = sameAs;
      }
      if (values.telephone || values.contactType) {
        json.contactPoint = [
          {
            "@type": "ContactPoint",
            ...(values.telephone ? { telephone: values.telephone } : {}),
            ...(values.contactType ? { contactType: values.contactType } : {}),
          },
        ];
      }
      if (values.address) {
        json.address = {
          "@type": "PostalAddress",
          streetAddress: values.address,
        };
      }
      break;
    case "person":
      if (values.name) json.name = values.name;
      if (values.jobTitle) json.jobTitle = values.jobTitle;
      if (values.url) json.url = values.url;
      if (values.image) json.image = values.image;
      if (values.worksFor) json.worksFor = { "@type": "Organization", name: values.worksFor };
      {
        const sameAs = splitLines(values.sameAs);
        if (sameAs.length) json.sameAs = sameAs;
      }
      break;
    case "recipe":
      if (values.name) json.name = values.name;
      if (values.description) json.description = values.description;
      if (values.image) json.image = values.image;
      if (values.author) json.author = { "@type": "Person", name: values.author };
      if (values.datePublished) json.datePublished = values.datePublished;
      if (values.prepTime) json.prepTime = values.prepTime;
      if (values.cookTime) json.cookTime = values.cookTime;
      if (values.totalTime) json.totalTime = values.totalTime;
      if (values.recipeYield) json.recipeYield = values.recipeYield;
      if (values.keywords) json.keywords = values.keywords;
      {
        const ingredients = splitLines(values.recipeIngredient);
        if (ingredients.length) json.recipeIngredient = ingredients;
      }
      {
        const steps = splitLines(values.recipeInstructions);
        if (steps.length) {
          json.recipeInstructions = steps.map((t) => ({
            "@type": "HowToStep",
            text: t,
          }));
        }
      }
      break;
    case "review":
      json.itemReviewed = {
        "@type": values.itemType || "Thing",
        name: values.itemName || "",
        ...(values.itemUrl ? { url: values.itemUrl } : {}),
      };
      if (values.author) json.author = { "@type": "Person", name: values.author };
      if (values.datePublished) json.datePublished = values.datePublished;
      if (values.reviewBody) json.reviewBody = values.reviewBody;
      if (isPresent(values.ratingValue) || isPresent(values.bestRating) || isPresent(values.worstRating)) {
        json.reviewRating = {
          "@type": "Rating",
          ...(isPresent(values.ratingValue) ? { ratingValue: toNumber(values.ratingValue) } : {}),
          ...(isPresent(values.bestRating) ? { bestRating: toNumber(values.bestRating) } : { bestRating: 5 }),
          ...(isPresent(values.worstRating) ? { worstRating: toNumber(values.worstRating) } : { worstRating: 1 }),
        };
      }
      break;
    case "video":
      if (values.name) json.name = values.name;
      if (values.description) json.description = values.description;
      if (values.thumbnailUrl) json.thumbnailUrl = values.thumbnailUrl;
      if (values.uploadDate) json.uploadDate = values.uploadDate;
      if (values.duration) json.duration = values.duration;
      if (values.contentUrl) json.contentUrl = values.contentUrl;
      if (values.embedUrl) json.embedUrl = values.embedUrl;
      if (values.url) json.url = values.url;
      if (values.publisherName || values.publisherLogo) {
        json.publisher = {
          "@type": "Organization",
          ...(values.publisherName ? { name: values.publisherName } : {}),
          ...(values.publisherLogo ? { logo: values.publisherLogo } : {}),
        };
      }
      break;
    case "course":
      if (values.name) json.name = values.name;
      if (values.description) json.description = values.description;
      if (values.url) json.url = values.url;
      if (values.image) json.image = values.image;
      if (values.providerName || values.providerUrl) {
        json.provider = {
          "@type": "Organization",
          ...(values.providerName ? { name: values.providerName } : {}),
          ...(values.providerUrl ? { sameAs: values.providerUrl } : {}),
        };
      }
      if (isPresent(values.price) || values.priceCurrency) {
        json.offers = {
          "@type": "Offer",
          ...(isPresent(values.price) ? { price: toNumber(values.price) } : {}),
          ...(values.priceCurrency ? { priceCurrency: values.priceCurrency } : {}),
          ...(values.url ? { url: values.url } : {}),
        };
      }
      break;
    case "faq":
      if (values.mainEntity) {
        try {
          const parsed = JSON.parse(values.mainEntity);
          json.mainEntity = parsed.map((qa) => ({
            "@type": "Question",
            name: qa.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: qa.answer,
            },
          }));
        } catch {
          json.mainEntity = [];
        }
      }
      if (values.url) {
        json.mainEntityOfPage = {
          "@type": "WebPage",
          "@id": values.url,
        };
      }
      break;
    case "product":
      if (values.name) json.name = values.name;
      if (values.description) json.description = values.description;
      if (values.sku) json.sku = values.sku;
      if (values.brand) json.brand = { "@type": "Brand", name: values.brand };
      if (values.image) json.image = values.image;
      if (values.url) json.url = values.url;
      if (values.price || values.priceCurrency || values.availability) {
        json.offers = {
          "@type": "Offer",
        };
        if (isPresent(values.price)) json.offers.price = toNumber(values.price);
        if (values.priceCurrency) json.offers.priceCurrency = values.priceCurrency;
        if (values.availability) json.offers.availability = values.availability;
        if (values.url) json.offers.url = values.url;
      }
      break;
    case "localbusiness":
      if (values.name) json.name = values.name;
      if (
        values.streetAddress ||
        values.addressLocality ||
        values.addressRegion ||
        values.postalCode
      ) {
        json.address = {
          "@type": "PostalAddress",
        };
        if (values.streetAddress) json.address.streetAddress = values.streetAddress;
        if (values.addressLocality) json.address.addressLocality = values.addressLocality;
        if (values.addressRegion) json.address.addressRegion = values.addressRegion;
        if (values.postalCode) json.address.postalCode = values.postalCode;
        if (values.addressCountry) json.address.addressCountry = values.addressCountry;
      }
      if (values.telephone) json.telephone = values.telephone;
      if (values.url) json.url = values.url;
      break;
    case "website":
      if (values.name) json.name = values.name;
      if (values.url) json.url = values.url;
      if (values.searchTarget) {
        json.potentialAction = {
          "@type": "SearchAction",
          target: values.searchTarget,
          "query-input": "required name=search_term_string",
        };
      }
      break;
    case "softwareapp":
      if (values.name) json.name = values.name;
      if (values.operatingSystem) json.operatingSystem = values.operatingSystem;
      if (values.applicationCategory) json.applicationCategory = values.applicationCategory;
      if (values.description) json.description = values.description;
      if (values.url) json.url = values.url;
      if (isPresent(values.price) || values.priceCurrency) {
        json.offers = {
          "@type": "Offer",
          ...(isPresent(values.price) ? { price: toNumber(values.price) } : {}),
          ...(values.priceCurrency ? { priceCurrency: values.priceCurrency } : {}),
          ...(values.url ? { url: values.url } : {}),
        };
      }
      break;
  }

  return json;
}

function isPresent(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

function splitLines(value) {
  if (!isPresent(value)) return [];
  return String(value)
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseJsonArray(value) {
  if (!isPresent(value)) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function syntaxHighlightJson(obj) {
  const json = JSON.stringify(obj, null, 2);
  const lines = json.split("\n");

  const highlightedLines = lines.map((line, index) => {
    const ln = `<span class="code-line-number">${index + 1}</span>`;
    const content = line.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            return `<span class="token-key">${match}</span>`;
          }
          return `<span class="token-string">${match}</span>`;
        }
        if (/true|false/.test(match)) {
          return `<span class="token-boolean">${match}</span>`;
        }
        if (/null/.test(match)) {
          return `<span class="token-null">${match}</span>`;
        }
        return `<span class="token-number">${match}</span>`;
      }
    );

    return ln + content;
  });

  return highlightedLines.join("\n");
}

function updateJsonPreview() {
  const codeContent = document.getElementById("code-content");
  const json = buildJsonLd();
  const highlighted = syntaxHighlightJson(json);
  codeContent.innerHTML = highlighted;
}

function bindCopy() {
  const btn = document.getElementById("copy-btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const json = buildJsonLd();
    const asString = JSON.stringify(json, null, 2);
    navigator.clipboard
      .writeText(`<script type="application/ld+json">\n${asString}\n</script>`)
      .then(() => {
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = "Copy"), 1400);
      })
      .catch(() => {
        btn.textContent = "Error";
        setTimeout(() => (btn.textContent = "Copy"), 1400);
      });
  });
}

function createGoogleTestButton() {
  const codeBody = document.querySelector(".panel-code .code-body");
  if (!codeBody) return;

  const footer = document.createElement("div");
  footer.className = "google-test-footer";
  footer.innerHTML = `
    <button type="button" class="google-test-button" id="google-test-btn">
      <span class="google-icon">
        <span class="g-blue"></span>
        <span class="g-red"></span>
        <span class="g-yellow"></span>
        <span class="g-green"></span>
      </span>
      <span>Test with Google</span>
    </button>
  `;

  codeBody.appendChild(footer);

  const btn = footer.querySelector("#google-test-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      window.open("https://search.google.com/test/rich-results", "_blank", "noopener,noreferrer");
    });
  }
}

document.addEventListener("DOMContentLoaded", init);

