Based on my analysis of the Digital Health Guide project, here are **quality improvement tasks** organized by your requested categories. Each task is actionable, prioritized, and designed for AI execution where possible.

---

## **📢 PROMOTION, ONBOARDING & COMMUNITY (New Visitors, Upskilling)**

### **High Priority - Quick Wins**

| Task | Description | Effort | Impact | AI-Friendly |
|------|-------------|--------|--------|-------------|
| **Add project badges to README** | Add shields.io badges: license, GitHub stars, locales count (48), last commit, CI status | Small | High | ✅ |
| **Create GitHub Discussions templates** | Add FAQ, Show & Tell, Help Wanted, Feature Request categories with prompts | Small | High | ✅ |
| **Write a "Getting Started for Contributors" guide** | Step-by-step: fork → clone → setup → pick an issue → submit PR (in CONTRIBUTING.md) | Small | High | ✅ |
| **Add social media metadata** | OpenGraph tags for site home page (title, description, image, Twitter card) | Small | Medium | ✅ |
| **Create a link checker workflow** | GitHub Action to verify all external links in Markdown files weekly | Small | High | ✅ |

### **Medium Priority - Engagement**

| Task | Description | Effort | Impact | AI-Friendly |
|------|-------------|--------|--------|-------------|
| **Build a contributor showcase** | Add CONTRIBUTORS.md listing all contributors with their avatars (use GitHub API) | Medium | High | ✅ |
| **Create locale completion dashboard** | Track which locales have which topics translated (percentage complete per locale) | Medium | High | ✅ |
| **Add "Good First Issue" labels** | Label beginner-friendly issues across repos (typos, missing glossary entries, broken links) | Small | High | ✅ |
| **Write translation contribution guide** | How to: claim a locale, translation workflow, quality checks, peer review process | Medium | High | ✅ |
| **Create a newsletter signup** | Add Mailchimp/ConvertKit form to site footer for project updates | Medium | Medium | ⚠️ |
| **Build topic adoption heatmap** | Show which topics are most/least translated across locales | Medium | Medium | ✅ |

### **Low Priority - Long-term Growth**

| Task | Description | Effort | Impact | AI-Friendly |
|------|-------------|--------|--------|-------------|
| **Create speaker kit** | Slide deck template, project overview, key metrics for conference talks | Medium | Medium | ✅ |
| **Build analytics dashboard** | Track site visitors, popular topics, bounce rates, locale preferences | Medium | Medium | ⚠️ |
| **Create automated release notes** | Generate changelog from PRs between releases (using GitHub API) | Medium | Medium | ✅ |
| **Build comparison tool** | Let users compare how a topic is handled across different locales | Large | Medium | ✅ |
| **Create podcast/video script templates** | For community members to create content explaining project concepts | Medium | Low | ✅ |

---

## **🔧 ENGINEERING & CODE QUALITY (Coding, Testing, Auditing)**

### **High Priority - Critical Infrastructure**

| Task | Description | Effort | Impact | AI-Friendly |
|------|-------------|--------|--------|-------------|
| **Add linting for Markdown files** | Implement `markdownlint` with project-specific rules (heading order, link format, etc.) | Small | High | ✅ |
| **Create topic validation script** | Check all topics against spec: 13 sections, bold thesis, 6 questions, 5-level maturity model, checklist items | Medium | **Critical** | ✅ |
| **Add CI/CD for book content** | GitHub Actions: lint, validate topics, build site, deploy on push to main | Medium | **Critical** | ✅ |
| **Implement cross-reference validator** | Verify all "Topic N.N — Title" references exist and match manifest | Medium | **Critical** | ✅ |
| **Create automated consistency checker** | Verify README.md, GLOSSARY.md, INDEX.md are in sync with topic manifest | Medium | **Critical** | ✅ |

### **Medium Priority - Code Health**

| Task | Description | Effort | Impact | AI-Friendly |
|------|-------------|--------|--------|-------------|
| **Add TypeScript to site** | Migrate SvelteKit site from JS to TypeScript for better maintainability | Large | High | ✅ |
| **Create test suite for site** | Unit tests for Svelte components, integration tests for routes, build verification | Medium | High | ✅ |
| **Implement automated screenshot testing** | Percy/Chromatic to catch visual regressions in site | Medium | Medium | ⚠️ |
| **Add dependency update automation** | Dependabot or Renovate for pnpm dependencies in site | Small | Medium | ✅ |
| **Create site performance audit** | Lighthouse CI: track performance, accessibility, SEO scores | Medium | Medium | ✅ |
| **Implement spell checking** | CI job to catch spelling errors (respecting en-gb vs en-us locales) | Medium | Medium | ✅ |
| **Add link validation** | CI job to verify all internal and external links in Markdown | Small | High | ✅ |

### **Low Priority - Enhancements**

| Task | Description | Effort | Impact | AI-Friendly |
|------|-------------|--------|--------|-------------|
| **Create automated translation sync** | Detect when source (en-gb) topic changes and flag stale translations | Medium | Medium | ✅ |
| **Build topic preview tool** | Local dev server to preview a single topic without full site rebuild | Medium | Medium | ✅ |
| **Add automated bias detection** | Check for biased language, accessibility issues in content | Medium | Medium | ✅ |
| **Create automated reference validator** | Verify all Wikipedia links in topics still exist | Small | Medium | ✅ |
| **Implement automated word count** | Track topic lengths, flag outliers (too short/long) | Small | Medium | ✅ |
| **Add automated citation checker** | Verify URLs in references are still valid | Small | Medium | ✅ |

---

## **📊 DATA & ANALYTICS (Testing, Auditing)**

### **High Priority**

| Task | Description | Effort | Impact | AI-Friendly |
|------|-------------|--------|--------|-------------|
| **Create content audit script** | Generate report: total topics, words, locales, translation status, missing references | Medium | High | ✅ |
| **Build glossary completeness checker** | Identify key terms in topics that are missing from GLOSSARY.md | Medium | High | ✅ |
| **Implement INDEX.md generator** | Auto-generate INDEX.md from topic content (concepts → topic numbers) | Medium | High | ✅ |
| **Create duplicate content detector** | Find repeated phrases/sections across topics that should be cross-referenced | Medium | Medium | ✅ |
| **Build stale content detector** | Identify topics not updated in X months that reference time-sensitive standards | Medium | Medium | ✅ |

### **Medium Priority**

| Task | Description | Effort | Impact | AI-Friendly |
|------|-------------|--------|--------|-------------|
| **Create topic interlink graph** | Visualize which topics reference which (to identify isolated topics) | Medium | Medium | ✅ |
| **Build citation analysis** | Track most-cited sources, identify over/under-cited frameworks | Medium | Medium | ✅ |
| **Create locale health report** | Flag locales with broken symlinks, missing topics, inconsistent structure | Medium | Medium | ✅ |
| **Implement style guide compliance checker** | Verify Oxford spelling, acronym expansion, heading formatting | Medium | Medium | ✅ |
| **Build topic maturity analysis** | Track which topics have complete maturity models, checklists, examples | Medium | Medium | ✅ |

---

## **🚀 IMMEDIATE AI-EXECUTABLE TASKS**

Start with these **high-impact, low-effort** tasks that AI can complete immediately:

1. **Add README badges** - Add shields for license, stars, forks, CI status, locales count
2. **Create GitHub issue templates** - Bug report, feature request, translation request
3. **Implement markdownlint** - With project-specific configuration
4. **Build topic validation script** - Check all 73 topics against the 13-section template
5. **Create cross-reference validator** - Ensure all Topic N.N references are valid
6. **Add CI workflow for validation** - Run on every PR and push
7. **Create link checker** - Weekly check of all external links
8. **Build glossary extractor** - Auto-generate GLOSSARY.md entries from topic content
9. **Create "Good First Issue" curation** - Label and document beginner tasks
10. **Implement word count tracker** - Flag topics that are too short/long

---

## **📋 RECOMMENDED IMPLEMENTATION ORDER**

### **Phase 1: Foundation (Week 1-2)**
- [ ] Set up CI/CD pipeline for content validation
- [ ] Implement markdownlint with custom rules
- [ ] Create topic validation script
- [ ] Add cross-reference validator
- [ ] Build link checker workflow

### **Phase 2: Quality Gates (Week 3-4)**
- [ ] Implement all spec §10 gates as automated checks
- [ ] Create consistency checker (README, GLOSSARY, INDEX sync)
- [ ] Add automated spell checking
- [ ] Build citation validator
- [ ] Create word count tracker

### **Phase 3: Developer Experience (Week 5-6)**
- [ ] Add project badges to README
- [ ] Create GitHub issue/Discussion templates
- [ ] Build contributor showcase
- [ ] Add locale completion dashboard
- [ ] Create automated release notes

### **Phase 4: Analytics & Insights (Week 7-8)**
- [ ] Build content audit script
- [ ] Create glossary completeness checker
- [ ] Implement INDEX.md auto-generator
- [ ] Build duplicate content detector
- [ ] Create topic interlink graph

---

## **🎯 QUICK START: NEXT 5 TASKS FOR AI**

**Task 1: Add README Badges**
```
- Add to README.md: license, stars, forks, CI status, locales (48), last commit
- Use: shields.io
- Time: 30 minutes
```

**Task 2: Create GitHub Issue Templates**
```
- Create .github/ISSUE_TEMPLATE/
  - bug_report.md
  - feature_request.md
  - translation_request.md
  - documentation.md
- Time: 1 hour
```

**Task 3: Implement Markdown Linting**
```
- Add .markdownlint.json with custom rules
- Add GitHub Action to run on PRs
- Rules: heading order, link format, trailing spaces
- Time: 2 hours
```

**Task 4: Build Topic Validator**
```
- Script to check each topic has:
  - 13 sections in correct order
  - Bold one-sentence thesis
  - Numbered best practices
  - Exactly 6 discussion questions
  - 4 sector lenses in order
  - 5-level maturity model table
  - 6-12 checklist items
- Time: 4 hours
```

**Task 5: Create Cross-Reference Validator**
```
- Parse all topics for "Topic N.N — Title" pattern
- Verify against spec manifest §4
- Report broken references
- Time: 3 hours
```

---

**Which category would you like me to dive into first?** I can start executing any of these tasks immediately, or provide more detailed implementation plans for specific items.
