import * as fs from 'fs';
import send from '@polka/send';
import { extract_frontmatter } from '@sveltejs/site-kit/utils/markdown';

let json;

function get_tutorials() {
  const slugs = new Set();

  const tutorials = {};
  fs.readdirSync(`content/projects`)
    .filter((dir) => /^\d+/.test(dir))
    .forEach((dir) => {
      let meta;
      let tutorialSlugs = new Set();

      try {
        meta = JSON.parse(
          fs.readFileSync(`content/projects/${dir}/meta.json`, 'utf-8')
        );
      } catch (err) {
        throw new Error(`Error reading metadata for ${dir}`);
      }

      tutorials[dir.replace(/^\d+-/, '')] = {
        tutorial: {
          title: meta.title,
          dir: dir,
          slug: dir.replace(/^\d+-/, ''),
        },
        chapters: fs
          .readdirSync(`content/projects/${dir}`)
          .filter((dir) => /^\d+/.test(dir))
          .map((tutorial) => {
            try {
              const md = fs.readFileSync(
                `content/projects/${dir}/${tutorial}/text.md`,
                'utf-8'
              );
              const { metadata } = extract_frontmatter(md);

              const slug = tutorial.replace(/^\d+-/, '');

              if (tutorialSlugs.has(slug))
                throw new Error(`Duplicate slug: ${slug}`);
              tutorialSlugs.add(slug);

              return {
                slug,
                title: metadata.title,
                tutorial_dir: dir,
                chapter_dir: tutorial,
              };
            } catch (err) {
              throw new Error(
                `Error building tutorial ${dir}/${tutorial}: ${err.message}`
              );
            }
          }),
      };
    });

  return tutorials;
}

export function get(req, res) {
  try {
    if (!json || process.env.NODE_ENV !== 'production') {
      json = get_tutorials();
    }

    send(res, 200, json);
  } catch (err) {
    send(res, 500, {
      message: err.message,
    });
  }
}
