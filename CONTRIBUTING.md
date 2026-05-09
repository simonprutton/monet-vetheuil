# Contributing

## Adding a New Painting

1. Create a new Markdown file in `src/content/paintings/` named after the Wildenstein catalogue number, e.g. `w-606.md`.

2. Add the required frontmatter fields (see `src/content/config.ts` for the full schema):

```yaml
---
id: "w-606"
title: "French title"
titleEn: "English title"
year: 1880
wildensteinNumber: "W.606"
dimensionsCm:          # optional
  height: 60
  width: 80
currentLocation: "Museum Name, City"
museumUrl: "https://..."   # optional
imageUrl: "/images/w-606.jpg"
imageThumbUrl: "/images/w-606.jpg"
subjects: [seine, church]  # see allowed values in config.ts
period: "1878-1881"        # or "1901-lavacourt"
---
```

3. Write a 2–3 sentence commentary in the Markdown body below the frontmatter.

4. Add the image file(s) to `public/images/`.

5. Run `npm run build` to confirm the site builds without errors.
