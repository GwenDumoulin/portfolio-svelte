import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({
		name: { en: 'Programming Languages', fr: 'Langages de Programmation' },
		slug: 'pro-lang'
	}),
	defineSkillCategory({ name: { en: 'Frameworks', fr: 'Frameworks' }, slug: 'framework' }),
	defineSkillCategory({ name: { en: 'Libraries', fr: 'Bibliothèques' }, slug: 'library' }),
	defineSkillCategory({ name: { en: 'Languages', fr: 'Langues' }, slug: 'lang' }),
	defineSkillCategory({ name: { en: 'Databases', fr: 'Bases de Données' }, slug: 'db' }),
	defineSkillCategory({ name: { en: 'ORMs', fr: 'ORMs' }, slug: 'orm' }),
	defineSkillCategory({ name: { en: 'DevOps', fr: 'DevOps' }, slug: 'devops' }),
	defineSkillCategory({ name: { en: 'Testing', fr: 'Tests' }, slug: 'test' }),
	defineSkillCategory({
		name: { en: 'Dev Tools', fr: 'Outils de Développement' },
		slug: 'devtools'
	}),
	defineSkillCategory({
		name: { en: 'Markup & Style', fr: 'Balises et Style' },
		slug: 'markup-style'
	}),
	defineSkillCategory({ name: { en: 'Design', fr: 'Conception' }, slug: 'design' }),
	defineSkillCategory({ name: { en: 'Soft Skills', fr: 'Compétences Douces' }, slug: 'soft' })
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
		slug: 'html',
		color: 'orange',
		description: `HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. 
		Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).<br /><br />
			"Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. 
			By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.<br /><br />
			HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" .<br /><br />
			An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by < and >. 
			The name of an element inside a tag is case-insensitive. That is, it can be written in uppercase, lowercase, or a mixture. However, the convention and recommended practice is to write tags in lowercase.`,
		descriptionFr: `HTML (HyperText Markup Language) est le bloc de construction le plus fondamental du Web. Il définit la signification et la structure du contenu web.
			D'autres technologies en plus du HTML sont généralement utilisées pour décrire l'apparence/présentation d'une page web (CSS) ou sa fonctionnalité/comportement (JavaScript).<br /><br />
			Le terme "Hypertexte" fait référence aux liens qui connectent des pages web entre elles, soit au sein d'un même site, soit entre différents sites. Les liens sont un aspect fondamental du Web.
			En téléchargeant du contenu sur Internet et en le reliant à des pages créées par d'autres personnes, vous devenez un participant actif du World Wide Web.<br /><br />
			HTML utilise des "balises" pour annoter du texte, des images, et d'autres contenus pour les afficher dans un navigateur web. Les balises HTML incluent des "éléments" spéciaux.<br /><br />
			Un élément HTML est distinct du texte dans un document grâce aux "balises", qui consistent en un nom d'élément entouré de < et >.
			Le nom d'un élément à l'intérieur d'une balise n'est pas sensible à la casse. Autrement dit, il peut être écrit en majuscules, minuscules, ou un mélange des deux. Cependant, la convention et la pratique recommandée est d'écrire les balises en minuscules.`,
		logo: Assets.HTML,
		name: 'HTML',
		nameFr: 'HTML',
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
		descriptionFr: `Cascading Style Sheets (CSS) est un langage de feuille de style utilisé pour décrire la présentation d'un document écrit en HTML ou en XML (y compris les dialectes XML tels que SVG, MathML ou XHTML).
			CSS décrit comment les éléments doivent être rendus à l'écran, sur papier, en parole ou sur d'autres supports.<br /><br /> 
			CSS fait partie des langages de base du web ouvert et est standardisé dans les navigateurs Web selon les spécifications du W3C. 
			Auparavant, le développement des différentes parties de la spécification CSS se faisait de manière synchrone, ce qui permettait de numéroter les dernières recommandations. 
			Vous avez peut-être entendu parler de CSS1, CSS2.1 ou même CSS3. Il n'y aura jamais de CSS3 ou CSS4 ; à la place, tout est désormais simplement appelé "CSS", avec des modules CSS individuels ayant des numéros de version.<br /><br /> 
			Après CSS 2.1, la portée de la spécification a considérablement augmenté et les progrès sur les différents modules CSS ont commencé à différer tellement qu'il est devenu plus efficace de développer et de publier des recommandations séparément pour chaque module. 
			Au lieu de numéroter la spécification CSS, le W3C prend maintenant périodiquement un instantané de l'état stable le plus récent de la spécification CSS et des progrès des modules individuels. Les modules CSS ont désormais des numéros de version, ou des niveaux, tels que le CSS Color Module Level 5.`,
		logo: Assets.CSS,
		name: 'CSS',
		nameFr: 'CSS',
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
		descriptionFr: `Sass (abréviation de syntactically awesome style sheets) est un langage de script préprocesseur qui est interprété ou compilé en Cascading Style Sheets (CSS). 
			SassScript est le langage de script lui-même.<br /><br /> Sass se compose de deux syntaxes. 
			La syntaxe originale, appelée "la syntaxe indentée", utilise une syntaxe similaire à Haml. 
			Elle utilise l'indentation pour séparer les blocs de code et les caractères de nouvelle ligne pour séparer les règles. 
			La nouvelle syntaxe, SCSS (Sassy CSS), utilise un format de blocs similaire à celui du CSS. 
			Elle utilise des accolades pour délimiter les blocs de code et des points-virgules pour séparer les règles à l'intérieur d'un bloc. 
			Les fichiers en syntaxe indentée et en SCSS ont traditionnellement les extensions .sass et .scss, respectivement.<br /><br /> 
			CSS3 se compose d'une série de sélecteurs et pseudo-sélecteurs qui regroupent des règles qui leur sont appliquées. 
			Sass (dans le cadre plus large des deux syntaxes) étend le CSS en fournissant plusieurs mécanismes disponibles dans des langages de programmation plus traditionnels, en particulier les langages orientés objet, mais qui ne sont pas disponibles dans CSS3 lui-même. 
			Lorsque SassScript est interprété, il crée des blocs de règles CSS pour divers sélecteurs tels que définis par le fichier Sass. 
			L'interpréteur Sass traduit SassScript en CSS. 
			Alternativement, Sass peut surveiller le fichier .sass ou .scss et le traduire en un fichier .css de sortie à chaque fois que le fichier .sass ou .scss est sauvegardé.<br /><br /> 
			La syntaxe indentée est un métalangage. SCSS est un métalangage imbriqué et un surensemble de CSS, car du CSS valide est du SCSS valide avec les mêmes sémantiques.<br /><br /> 
			SassScript fournit les mécanismes suivants : variables, imbrication, mixins et héritage de sélecteurs.`,
		logo: Assets.Sass,
		name: 'Sass',
		nameFr: 'Sass',
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
		descriptionFr: `Tailwind CSS est un framework CSS open-source.
			La principale caractéristique de cette bibliothèque est que, contrairement à d'autres frameworks CSS comme Bootstrap, elle ne fournit pas une série de classes prédéfinies pour des éléments tels que les boutons ou les tableaux.
			Au lieu de cela, elle crée une liste de classes CSS « utilitaires » qui peuvent être utilisées pour styliser chaque élément en les combinant.<br /><br /> Par exemple, dans d'autres systèmes traditionnels, il y aurait une classe message-warning qui appliquerait une couleur de fond jaune et un texte en gras.
			Pour obtenir ce résultat dans Tailwind, il faudrait appliquer un ensemble de classes créées par la bibliothèque : bg-yellow-300 et font-bold.<br /><br /> Au 5 août 2024, Tailwind CSS compte plus de 81 000 étoiles sur GitHub.`,
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		nameFr: 'Tailwind CSS',
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
		descriptionFr: `styled-components est le résultat de la réflexion sur la manière dont nous pourrions améliorer le CSS pour le stylage des systèmes de composants React. 
			En nous concentrant sur un seul cas d'utilisation, nous avons réussi à optimiser l'expérience des développeurs ainsi que le rendu pour les utilisateurs finaux.<br /><br /> 
			En plus d'améliorer l'expérience des développeurs, styled-components offre :<br /><br /> <ul> 
			<li>CSS critique automatique : styled-components garde une trace des composants rendus sur une page et injecte uniquement leurs styles, et rien d'autre, entièrement automatiquement. Combiné avec le découpage de code, cela signifie que vos utilisateurs chargent le minimum de code nécessaire.</li> 
			<li>Aucun bug de nom de classe : styled-components génère des noms de classes uniques pour vos styles. Vous n'avez jamais à vous soucier de la duplication, du chevauchement ou des fautes de frappe.</li> 
			<li>Suppression facile du CSS : il peut être difficile de savoir si un nom de classe est utilisé quelque part dans votre base de code. styled-components le rend évident, car chaque portion de style est liée à un composant spécifique. Si le composant n'est pas utilisé (ce que les outils peuvent détecter) et qu'il est supprimé, tous ses styles sont supprimés avec lui.</li> 
			<li>Stylage dynamique simplifié : adapter le style d'un composant en fonction de ses props ou d'un thème global est simple et intuitif sans avoir à gérer manuellement des dizaines de classes.</li> 
			<li>Maintenance sans douleur : vous n'avez jamais à chercher dans différents fichiers pour trouver le style qui affecte votre composant, ce qui rend la maintenance un jeu d'enfant, quelle que soit la taille de votre base de code.</li> 
			<li>Préfixation automatique des vendeurs : écrivez votre CSS selon les normes actuelles et laissez styled-components s'occuper du reste.</li> 
			<li>Vous bénéficiez de tous ces avantages tout en écrivant le CSS que vous connaissez et aimez, simplement lié à des composants individuels.</li></ul>`,
		logo: Assets.styledComponents,
		name: 'Styled Components',
		nameFr: 'Styled Components',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: `JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. 
			While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.`,
		descriptionFr: `JavaScript (JS) est un langage de programmation léger interprété avec des fonctions de première classe. 
			Il est surtout connu comme langage de script pour les pages Web, mais de nombreux environnements non-navigateurs l'utilisent également, tels que Node.js, Apache CouchDB et Adobe Acrobat.`,
		logo: Assets.JavaScript,
		name: 'JavaScript',
		nameFr: 'JavaScript',
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
		descriptionFr: `TypeScript est un langage de programmation de haut niveau, gratuit et open-source, développé par Microsoft qui ajoute un typage statique avec des annotations de type optionnelles à JavaScript.
			Il est conçu pour le développement de grandes applications et se transpile en JavaScript.
			Étant donné que TypeScript est un surensemble de JavaScript, tous les programmes JavaScript sont syntaxiquement valides en TypeScript, mais ils peuvent échouer à la vérification des types pour des raisons de sécurité.<br/><br/> TypeScript peut être utilisé pour développer des applications JavaScript pour l'exécution côté client ou côté serveur (comme avec Node.js ou Deno). Plusieurs options sont disponibles pour la transpilation.
			Le compilateur TypeScript par défaut peut être utilisé, ou le compilateur Babel peut être invoqué pour convertir TypeScript en JavaScript.`,
		logo: Assets.TypeScript,
		name: 'TypeScript',
		nameFr: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'jquery',
		color: 'blue',
		description: `jQuery is a fast, small, and feature-rich JavaScript library. 
			It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. <br />
			With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.`,
		descriptionFr: `jQuery est une bibliothèque JavaScript rapide, légère et riche en fonctionnalités.
			Elle simplifie des tâches telles que la navigation et la manipulation de documents HTML, la gestion des événements, l'animation et l'Ajax grâce à une API facile à utiliser qui fonctionne sur une multitude de navigateurs.<br /> Grâce à une combinaison de polyvalence et d'extensibilité, jQuery a changé la manière dont des millions de personnes écrivent du JavaScript.`,
		logo: Assets.jquery,
		name: 'jQuery',
		nameFr: 'jQuery',
		category: 'library'
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
		descriptionFr: `PHP est un langage de script à usage général orienté vers le développement web.
			Il a été initialement créé par le programmeur dano-canadien Rasmus Lerdorf en 1993 et publié en 1995.
			L'implémentation de référence de PHP est maintenant produite par le groupe PHP.
			PHP était à l'origine une abréviation de Personal Home Page, mais signifie désormais l'acronyme récursif PHP : Hypertext Preprocessor.<br /><br /> Le code PHP est généralement traité sur un serveur web par un interpréteur PHP implémenté sous forme de module, de démon ou d'exécutable Common Gateway Interface (CGI).
			Sur un serveur web, le résultat du code PHP interprété et exécuté — qui peut être de tout type, comme du HTML généré ou des données binaires d'image — constitue tout ou partie d'une réponse HTTP.
			Il existe divers systèmes de modèles web, systèmes de gestion de contenu et frameworks web qui peuvent être utilisés pour orchestrer ou faciliter la génération de cette réponse.
			De plus, PHP peut être utilisé pour de nombreuses tâches de programmation en dehors du contexte web, comme des applications graphiques autonomes ou le contrôle de drones. Le code PHP peut également être exécuté directement depuis la ligne de commande.<br /><br /> L'interpréteur PHP standard, propulsé par le moteur Zend, est un logiciel libre publié sous la licence PHP.
			PHP a été largement porté et peut être déployé sur la plupart des serveurs web sur une variété de systèmes d'exploitation et de plateformes.<br /><br /> Le langage PHP a évolué sans spécification ou norme formelle écrite, l'implémentation originale faisant office de standard de facto que les autres implémentations cherchent à suivre.`,
		logo: Assets.PHP,
		name: 'PHP',
		nameFr: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: `React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. 
			It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.<br /><br />
			React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. 
			Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.`,
		descriptionFr: `React (également connu sous le nom de React.js ou ReactJS) est une bibliothèque JavaScript front-end gratuite et open-source pour construire des interfaces utilisateur basées sur des composants.
			Elle est maintenue par Meta (anciennement Facebook) et une communauté de développeurs et d'entreprises.<br /><br /> React peut être utilisé pour développer des applications monopages, mobiles ou rendues côté serveur avec des frameworks comme Next.js.
			Étant donné que React se concentre uniquement sur l'interface utilisateur et le rendu des composants dans le DOM, les applications React s'appuient souvent sur des bibliothèques pour le routage et d'autres fonctionnalités côté client.`,
		logo: Assets.ReactJs,
		name: 'React Js',
		nameFr: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'vuejs',
		color: 'green',
		description: `Vue.js (commonly referred to as Vue; pronounced "view", which is wrong according to the french language, from which the name is coming) is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page applications. 
			It was created by Evan You, and is maintained by him and the rest of the active core team members.`,
		descriptionFr: `Vue.js (communément appelé Vue ; prononcé « view », ce qui est incorrect selon la langue française, d'où provient le nom) est une bibliothèque JavaScript front-end open-source basée sur le modèle–vue–viewmodel pour construire des interfaces utilisateur et des applications monopages.
			Elle a été créée par Evan You, et est maintenue par lui et les autres membres actifs de l'équipe principale.`,
		logo: Assets.VueJs,
		name: 'Vue JS',
		nameFr: 'Vue JS',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		descriptionFr: `Svelte est une nouvelle approche radicale pour créer des interfaces utilisateur. Alors que les frameworks traditionnels comme React et Vue effectuent la plupart de leur travail dans le navigateur, Svelte déplace ce travail dans une étape de compilation qui se produit lors de la création de votre application.`,
		logo: Assets.Svelte,
		name: 'Svelte',
		nameFr: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'black',
		description: `Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.<br /><br />
			React documentation mentions Next.js among "Recommended Toolchains" advising it to developers when "building a server-rendered website with Node.js". 
			Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side.<br /><br />
			The copyright and trademarks for Next.js are owned by Vercel, which also maintains and leads its open-source development.`,
		descriptionFr: `Next.js est un framework de développement web open-source créé par l'entreprise privée Vercel, fournissant des applications web basées sur React avec un rendu côté serveur et une génération de sites web statiques.<br /><br /> 
			La documentation de React mentionne Next.js parmi les « Toolchains recommandées », le conseillant aux développeurs lorsqu'ils « construisent un site web rendu côté serveur avec Node.js ».
			Là où les applications React traditionnelles ne peuvent rendre leur contenu que dans le navigateur côté client, Next.js étend cette fonctionnalité pour inclure des applications rendues côté serveur.<br /><br /> 
			Le droit d'auteur et les marques déposées pour Next.js appartiennent à Vercel, qui en assure également la maintenance et dirige son développement open-source.`,
		logo: Assets.next,
		name: 'Next.js',
		nameFr: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'jest',
		color: 'orange',
		description: `Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!`,
		descriptionFr: `Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!`,
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
		descriptionFr: `MySQL is an open-source relational database management system (RDBMS). 
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
		nameFr: 'MySQL',
		category: 'database'
	})
] as const;

export const titleEn = 'Skills';
export const titleFr = 'Compétences';

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
		out.push({ category: { name: { en: 'Others', fr: 'Autres' }, slug: 'others' }, items: others });
	}

	return out;
};
