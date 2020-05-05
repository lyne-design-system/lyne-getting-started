# Current state

## Storybook
- Show current storybook which contains button and heading components
- Explanations about storybook. What is it? Purpose? (develop, test, PO, Stakeholders)
- Knobs, Actions, a11y
- Show local Storybook and deployed storybook -> work the same way
- ANALOGY WCMS: previewserver.sbb.ch -> select build

## Documentation Page
- What could the documentation contain?
- Current state

## Deployments Page
- List of all releases
- Current work of developers is automatically published (-> previews)

# Excursus

## The outside view
- How can consumers use the components?
- Open lyne-getting-started -> examples -> javascript -> index.html

## npm and versioning
- What is npm?
- What is semantic versioning?

# Create and publish component

## Manual Worfklow: create a new component
- The new code for lyne-link is ready in the editor to be pushed.
- PR is opened
- Multiple quality gates before merge:
	- automated checks
	- automated tests
	- PR review

## Regression tests: Chromatic
- What is a visual regression test?
- What is chromatic?
- What is the workflow for chromatic?
	- UI Tests: developer
	- UI Review: UI/UX/PO/Stakeholders

## Automated Workflow: publish a new component
- Look at versions on npm, github, deployments and latest storybook
- PR is merged
- What is Travis? What is CI/CD?
- What is Travis doing when a PR is merged?
- Look at versions on npm, github, deployments and latest storybook

# Documentation page

## Tools
- What is a Headless CMS
- What is a SSG

## Dato
- Models and contents
- Use case: manage design tokens
- Example: add new component, add new component variant
- Show deployed documentation page

## Lifecycle
Documenation is updated, when:
- there are changes in Dato
- when a new release of lyne-components is published

# Update a component

- change text color of lyne-link
- push, create pull request
- approve chromatic
- merge
- show results:
	- npm
	- github release log
	- latest storybook
	- documentation page
