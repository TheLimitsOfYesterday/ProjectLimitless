# Placeholder seed data so the Projects page shell has something real to
# render against in Phase 1. Replace/expand once the Admin CMS (Phase 3)
# manages this content, or edit directly for now.

projects = [
  {
  title: "Project Limitless",
  slug: "projectlimitless",
  summary: "This portfolio itself - Rails 8, Svelte, React, and Tailwind, built as a living demonstration of the stack.",
  github_url: "https://github.com/TheLimitsOfYesterday/ProjectLimitless",
  preview_image_url: nil,
  mobile_compatible: true,
  position: 1,
  },
  {
    title: "Privacy Vault",
    slug: "privacy-vault",
    summary: "AES-256-CBC encrypted local vault for sensitive notes and credentials.",
    github_url: "https://github.com/TheLimitsOfYesterday/PrivacyVault",
    preview_image_url: nil,
    mobile_compatible: false,
    position: 2,
  },
  {
    title: "Privacy Lens",
    slug: "privacy-lens",
    summary: "Tooling for inspecting and explaining what a site collects before you trust it.",
    github_url: "https://github.com/TheLimitsOfYesterday/PrivacyLens",
    preview_image_url: nil,
    mobile_compatible: false,
    position: 3,
  },
  {
    title: "Celestia Track",
    slug: "celestia-track",
    summary: "A tracking/visualization tool — swap in the real one-line description.",
    github_url: "https://github.com/SooYuan123/CS4300_Team1_sec2",
    preview_image_url: nil,
    mobile_compatible: true,
    position: 4,
  },
]

projects.each do |attrs|
  Project.find_or_create_by!(slug: attrs[slug:]) { |p| p.assign_attributes(attrs) }
end

puts "Seeded #{Project.count} projects."
