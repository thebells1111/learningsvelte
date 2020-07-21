import * as fs from 'fs';
import * as path from 'path';
import marked from 'marked';
import send from '@polka/send';
import {
  extract_frontmatter,
  extract_metadata,
  link_renderer,
} from '@sveltejs/site-kit/utils/markdown';
import { highlight } from '../../../../utils/highlight';

const cache = new Map();

function get_directories() {
  const slugs = new Set();

  const directories = {};

  fs.readdirSync('content/projects')
    .filter((dir) => /^\d+/.test(dir))
    .forEach((dir) => {
      try {
        const slug = dir.replace(/^\d+-/, '');
        if (slugs.has(slug)) throw new Error(`Duplicate slug: ${slug}`);
        slugs.add(slug);
        directories[slug] = dir;
      } catch (err) {
        throw new Error(`Error building tutorial ${dir}: ${err.message}`);
      }
    });

  return directories;
}

function get_chapters(directory) {
  const slugs = new Set();
  const files = new Set();
  fs.readdirSync(`content/projects/${directory}`)
    .filter((dir) => /^\d+/.test(dir))
    .forEach((chapter, index) => {
      try {
        const slug = chapter.replace(/^\d+-/, '');
        if (slugs.has(slug)) throw new Error(`Duplicate slug: ${slug}`);
        slugs.add(slug);
        files.add(chapter);
      } catch (err) {
        throw new Error(`Error building chapter ${chapter}: ${err.message}`);
      }
    });

  return { slugs: [...slugs], files: [...files] };
}

function get_tutorial(tutorial, slug) {
  const chapters = get_chapters(tutorial);
  const chapterIndex = chapters.slugs.indexOf(slug);
  if (chapterIndex === -1) return false;
  const chapter = chapters.files[chapterIndex];

  const prevChapter =
    chapterIndex > 0 ? chapters.slugs[chapterIndex - 1] : undefined;
  const nextChapter =
    chapterIndex < chapters.slugs.length - 1
      ? chapters.slugs[chapterIndex + 1]
      : undefined;

  const dir = `content/projects/${tutorial}/${chapter}`;

  const markdown = fs.readFileSync(`${dir}/text.md`, 'utf-8');
  const app_a = fs.readdirSync(`${dir}/app-a`);
  const app_b = fs.existsSync(`${dir}/app-b`) && fs.readdirSync(`${dir}/app-b`);

  const { content, metadata } = extract_frontmatter(markdown);

  const renderer = new marked.Renderer();

  renderer.link = link_renderer;

  renderer.code = (source, lang) => {
    source = source.replace(/^ +/gm, (match) => match.split('    ').join('\t'));

    const lines = source.split('\n');

    const meta = extract_metadata(lines[0], lang);

    let prefix = '';
    let className = 'code-block';

    if (meta) {
      source = lines.slice(1).join('\n');
      const filename = meta.filename || (lang === 'html' && 'App.svelte');
      if (filename) {
        prefix = `<span class='filename'>${prefix} ${filename}</span>`;
        className += ' named';
      }
    }

    return `<div class='${className}'>${prefix}${highlight(
      source,
      lang
    )}</div>`;
  };

  let html = marked(content, { renderer });

  function get_file(stage, file) {
    const ext = path.extname(file);
    const name = file.slice(0, -ext.length);
    const type = ext.slice(1);

    return {
      name,
      type,
      source: fs.readFileSync(`${dir}/${stage}/${file}`, 'utf-8'),
    };
  }

  return {
    html,
    app_a: app_a.map((file) => get_file('app-a', file)),
    app_b: app_b && app_b.map((file) => get_file('app-b', file)),
    prev: prevChapter,
    next: nextChapter,
    metadata: metadata,
  };
}

export function get(req, res) {
  const slug = req.query.slug;
  const tutorial = req.path.split('/')[2];

  let directories = cache.get('storedDirectories');
  let tut = cache.get(tutorial);

  if (!directories || process.env.NODE_ENV !== 'production') {
    directories = get_directories();
    cache.set('storedDirectories', directories);
  }

  if (!tut || process.env.NODE_ENV !== 'production') {
    tut = get_tutorial(directories[tutorial], slug);
    cache.set(tutorial, tut);
  }

  if (tut) {
    const data = {
      tut: tut,
    };
    send(res, 200, data);
  } else {
    send(res, 404, { message: 'not found' });
  }
}
