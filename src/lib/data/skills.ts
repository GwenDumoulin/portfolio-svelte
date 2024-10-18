import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: `JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. 
			While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. 
			JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`,
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: `TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. 
		It is designed for the development of large applications and transpiles to JavaScript. 
			Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.<br/><br/>
			TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). Multiple options are available for transpilation. 
			The default TypeScript Compiler can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.`,
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'jquery',
		color: 'blue',
		description: `jQuery is a fast, small, and feature-rich JavaScript library. 
		It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. <br />
		With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.`,
		logo: Assets.jquery,
		name: 'jQuery',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'blue',
		description: `PHP is a general-purpose scripting language geared towards web development. 
			It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. 
			The PHP reference implementation is now produced by the PHP Group. 
			PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive acronym PHP: Hypertext Preprocessor.<br /><br />
			PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or a Common Gateway Interface (CGI) executable. 
			On a web server, the result of the interpreted and executed PHP code—which may be any type of data, such as generated HTML or binary image data—would form the whole or part of an HTTP response. 
			Various web template systems, web content management systems, and web frameworks exist that can be employed to orchestrate or facilitate the generation of that response. 
			Additionally, PHP can be used for many programming tasks outside the web context, such as standalone graphical applications and drone control. PHP code can also be directly executed from the command line.<br /><br />
			The standard PHP interpreter, powered by the Zend Engine, is free software released under the PHP License. 
			PHP has been widely ported and can be deployed on most web servers on a variety of operating systems and platforms.<br /><br />
			The PHP language has evolved without a written formal specification or standard, with the original implementation acting as the de facto standard that other implementations aimed to follow.`,
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),

	defineSkill({
		slug: 'html',
		color: 'orange',
		description: `HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. 
		Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).<br /><br />
			"Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. 
			By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.<br /><br />
			HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" .<br /><br />
			An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by < and >. 
			The name of an element inside a tag is case-insensitive. That is, it can be written in uppercase, lowercase, or a mixture. However, the convention and recommended practice is to write tags in lowercase.`,
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: `Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). 
			CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.<br /><br />
			CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. 
			Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. 
			You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now just "CSS" with individual CSS modules having version numbers.<br /><br />
			After CSS 2.1, the scope of the specification increased significantly and the progress on different CSS modules started to differ so much, that it became more effective to develop and release recommendations separately per module. 
			Instead of versioning the CSS specification, W3C now periodically takes a snapshot of the latest stable state of the CSS specification and individual modules progress. 
			CSS modules now have version numbers, or levels, such as CSS Color Module Level 5.`,
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'purple',
		description: `Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). 
			SassScript is the scripting language itself.<br /><br />
			Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml. 
			It uses indentation to separate code blocks and newline characters to separate rules. 
			The newer syntax, SCSS (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate rules within a block. 
			The indented syntax and SCSS files are traditionally given the extensions .sass and .scss, respectively.<br /><br />
			CSS3 consists of a series of selectors and pseudo-selectors that group rules that apply to them. 
			Sass (in the larger context of both syntaxes) extends CSS by providing several mechanisms available in more traditional programming languages, particularly object-oriented languages, but that are not available to CSS3 itself. 
			When SassScript is interpreted, it creates blocks of CSS rules for various selectors as defined by the Sass file. 
			The Sass interpreter translates SassScript into CSS. Alternatively, Sass can monitor the .sass or .scss file and translate it to an output .css file whenever the .sass or .scss file is saved. <br /><br />
			The indented syntax is a metalanguage. SCSS is a nested metalanguage and a superset of CSS, as valid CSS is valid SCSS with the same semantics.<br /><br />
			SassScript provides the following mechanisms: variables, nesting, mixins, and selector inheritance.`,
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description: `Tailwind CSS is an open-source CSS framework. 
			The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. 
			Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.<br /><br />
			For example, in other traditional systems, there would be a class message-warning that would apply a yellow background color and bold text. 
			To achieve this result in Tailwind, one would have to apply a set of classes created by the library: bg-yellow-300 and font-bold.<br /><br />
			As of 5 August 2024, Tailwind CSS has over 81,000 stars on GitHub.`,
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'styled-components',
		color: 'orange',
		description: `styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.<br /><br />
			Apart from the improved experience for developers, styled-components provides:<br /><br />
			<ul>
			<li>Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. 
			Combined with code splitting, this means your users load the least amount of code necessary.</li>
			<li>No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.</li>
			<li>Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. 
			If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.</li>
			<li>Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.</li>
			<li>Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.</li>
			<li>Automatic vendor prefixing: write your CSS to the current standard and let styled-components handle the rest.</li>
			<li>You get all of these benefits while still writing the CSS you know and love, just bound to individual components.</li></ul>`,
		logo: Assets.styledComponents,
		name: 'Styled Components',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: `React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. 
			It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.<br /><br />
			React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. 
			Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.`,
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'vuejs',
		color: 'green',
		description: `Vue.js (commonly referred to as Vue; pronounced "view", which is wrong according to the french language, from which the name is coming) is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page applications. 
			It was created by Evan You, and is maintained by him and the rest of the active core team members.`,
		logo: Assets.VueJs,
		name: 'Vue Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'next',
		color: 'green',
		description: `Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.<br /><br />
			React documentation mentions Next.js among "Recommended Toolchains" advising it to developers when "building a server-rendered website with Node.js". 
			Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side.<br /><br />
			The copyright and trademarks for Next.js are owned by Vercel, which also maintains and leads its open-source development.`,
		logo: Assets.next,
		name: 'Next Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'jest',
		color: 'orange',
		description: `Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!`,
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: `MySQL is an open-source relational database management system (RDBMS). 
			Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the initialism for Structured Query Language. 
			A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data. 
			SQL is a language that programmers use to create, modify and extract data from the relational database, as well as control user access to the database. 
			In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer's storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.<br /><br />
			MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. 
			MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation). 
			In 2010, when Oracle acquired Sun, Widenius forked the open-source MySQL project to create MariaDB.<br /><br />
			MySQL has stand-alone clients that allow users to interact directly with a MySQL database using SQL, but more often, MySQL is used with other programs to implement applications that need relational database capability. 
			MySQL is a component of the LAMP web application software stack (and others), which is an acronym for Linux, Apache, MySQL, Perl/PHP/Python. MySQL is used by many database-driven web applications, including Drupal, Joomla, phpBB, and WordPress. 
			MySQL is also used by many popular websites, including Facebook, Flickr, MediaWiki, Twitter, and YouTube.`,
		logo: Assets.mysql,
		name: 'MySQL',
		category: 'database'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
